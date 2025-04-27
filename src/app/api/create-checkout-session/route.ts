import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { auth } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const prisma = new PrismaClient();

export async function POST(req: Request) {
    console.log('Full API create-checkout-session called');
    
    try {
      const { userId } = await auth();
      console.log('User authenticated:', userId);
      
      if (!userId) {
        return NextResponse.json(
          { error: 'You must be logged in to subscribe' },
          { status: 401 }
        );
      }
  
      const body = await req.json();
      console.log('Request body:', body);
      const { priceId, email } = body;
  
      if (!priceId) {
        return NextResponse.json(
          { error: 'Price ID is required' },
          { status: 400 }
        );
      }
  
      console.log('Finding user in database...');
      let user = await prisma.user.findUnique({
        where: { id: userId },
        include: { subscription: true }
      });
      console.log('User found:', user ? 'Yes' : 'No');
  
      if (!user && email) {
        console.log('Creating new user in database...');
        let user = await prisma.user.create({
          data: {
            id: userId,
            email: email,
            name: email.split('@')[0],
          }
        });
        console.log('New user created:', user.id);
      }
  
      if (!user) {
        return NextResponse.json(
          { error: 'Failed to find or create user' },
          { status: 500 }
        );
      }
  
      let customerId = user.subscription?.stripeCustomerId;
      console.log('Existing Stripe customer ID:', customerId);
  
      if (!customerId) {
        console.log('Creating new Stripe customer...');
        const customer = await stripe.customers.create({
          email: email || user.email,
          metadata: {
            userId: user.id
          }
        });
        customerId = customer.id;
        console.log('New Stripe customer created:', customerId);
      }
  
      console.log('Creating Stripe checkout session...');
      console.log('Price ID:', priceId);
      console.log('App URL:', process.env.NEXT_PUBLIC_APP_URL);
      
      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1
          }
        ],
        mode: 'subscription',
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
        metadata: {
          userId: user.id
        }
      });
  
      console.log('Checkout session created:', session.id);
      console.log('Checkout URL:', session.url);
      
      return NextResponse.json({ checkoutUrl: session.url });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
      }

      return NextResponse.json(
        { error: 'Something went wrong', details: String(error) },
        { status: 500 }
      );
    }
  }