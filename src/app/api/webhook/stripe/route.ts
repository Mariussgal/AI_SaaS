import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { PrismaClient } from '@prisma/client';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined');
}

if (!process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error('STRIPE_WEBHOOK_SECRET is not defined');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error(`Webhook signature verification failed. ${errorMessage}`);
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }

  const data = event.data;
  const eventType = event.type;

  try {
    switch (eventType) {
      case 'checkout.session.completed': {
        const session = await stripe.checkout.sessions.retrieve(
            (data.object as Stripe.Checkout.Session).id,
            { expand: ['line_items'] }
          );

        const customerId = session?.customer as string;
        const customer = (await stripe.customers.retrieve(customerId)) as Stripe.Customer;
        const priceId = session!.line_items!.data[0]!.price!.id;
        
        if (!customer.email || customer.deleted) {
          throw new Error('No valid customer found');
        }

        const userEmail = customer.email;
        let user = await prisma.user.findUnique({
          where: { email: userEmail }
        });

        if (!user) {

          user = await prisma.user.create({
            data: { email: userEmail }
          });
        }

        if (user) {
          await prisma.subscription.upsert({
            where: { userId: user.id },
            update: {
              stripePriceId: priceId,
              stripeCustomerId: customerId,
              stripeSubscriptionId: session.subscription as string,
              status: 'active'
            },
            create: {
              userId: user.id,
              stripePriceId: priceId,
              stripeCustomerId: customerId,
              stripeSubscriptionId: session.subscription as string,
              status: 'active'
            }
          });
        }

        break;
      }

      case 'customer.subscription.updated': {
        const subscription = data.object as Stripe.Subscription;
        
        const user = await prisma.user.findFirst({
          where: { 
            subscription: {
              stripeCustomerId: subscription.customer as string
            }
          },
          include: {
            subscription: true
          }
        });

        if (user && user.subscription) {
          await prisma.subscription.update({
            where: { id: user.subscription.id },
            data: {
              status: subscription.status,
            }
          });
        }

        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = data.object as Stripe.Subscription;
        
        const userSubscription = await prisma.subscription.findFirst({
          where: { stripeSubscriptionId: subscription.id }
        });

        if (userSubscription) {
          await prisma.subscription.update({
            where: { id: userSubscription.id },
            data: { status: 'canceled' }
          });
        }

        break;
      }

      default:
        console.log(`Unhandled event type: ${eventType}`);
    }
  } catch (error) {
    console.error(
      `Stripe webhook error: ${error instanceof Error ? error.message : 'Unknown error'} | EVENT TYPE: ${eventType}`
    );
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true });
}