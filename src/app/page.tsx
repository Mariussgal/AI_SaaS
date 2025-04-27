"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Pricing from "@/components/Pricing";
import SubscriptionStatus from "@/components/SubscriptionStatus";
import ManageSubscriptionButton from "@/components/ManageSubscriptionButton";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Home() {
  const { isSignedIn, isLoaded } = useUser();
  const [subscriptionStatus, setSubscriptionStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSubscriptionStatus() {
      if (isSignedIn) {
        try {
          const response = await fetch('/api/subscription/status');
          const data = await response.json();
          setSubscriptionStatus(data.status);
        } catch (error) {
          console.error('Failed to fetch subscription status:', error);
        }
      }
      setIsLoading(false);
    }

    if (isLoaded) {
      fetchSubscriptionStatus();
    }
  }, [isSignedIn, isLoaded]);

  return (
    <Elements stripe={stripePromise}>
      <main className="max-w-6xl mx-auto p-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Nexya</h1>
          <p className="text-xl text-gray-600">
            Choose a subscription plan that suits you
          </p>
        </div>

        {isSignedIn && !isLoading && (
          <div className="mb-8">
            <SubscriptionStatus subscription={subscriptionStatus ? { status: subscriptionStatus, currentPeriodEnd: null }: null }/>
            
            {subscriptionStatus === 'active' && (
              <div className="mt-4">
                <ManageSubscriptionButton />
              </div>
            )}
          </div>
        )}

        <Pricing />
      </main>
    </Elements>
  );
}