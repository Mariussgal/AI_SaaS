'use client';

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { useClerk } from '@clerk/nextjs';


interface PricingPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  priceId: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'monthly',
    name: 'Standard',
    price: 19,
    duration: '/month',
    features: [
      'Full access to all features',
      'Priority support',
      'Regular updates',
      'API access',
      'Custom integrations',
      '24/7 customer service'
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY || 'price_monthly'
  },
  {
    id: 'yearly',
    name: 'Pro',
    price: 190,
    duration: '/year',
    features: [
      'All Standard features',
      'Team collaboration',
      'Advanced analytics',
      'Custom workflows',
      'Dedicated account manager',
      'Bulk operations'
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_YEARLY || 'price_yearly'
  }
];

const Pricing: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { user, isSignedIn } = useUser();
    const { openSignIn } = useClerk();


    const handleSubscribe = async (plan: PricingPlan) => {
        if (!isSignedIn) {
          openSignIn({
            redirectUrl: window.location.href
          });
          return;
        }

    setIsLoading(true);
    
    try {
      const response = await axios.post('/api/create-checkout-session', {
        priceId: plan.priceId,
        email: user?.primaryEmailAddress?.emailAddress
      });
      
      window.location.href = response.data.checkoutUrl;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Choose the perfect plan for your needs. Always flexible, always transparent.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {pricingPlans.map((plan) => (
          <div 
            key={plan.id}
            className={`rounded-lg border p-8 shadow-sm hover:shadow-md transition-shadow ${
              plan.id === 'yearly' ? 'relative overflow-hidden' : ''
            }`}
          >
            {plan.id === 'yearly' && (
              <div className="absolute top-0 right-0 bg-green-500 text-white py-1 px-4 transform translate-y-0 translate-x-2 rotate-45 origin-top-right text-sm font-medium">
                Best Value
              </div>
            )}
            
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-extrabold">${plan.price}</span>
              <span className="ml-1 text-gray-500">{plan.duration}</span>
            </div>
            
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button
              onClick={() => handleSubscribe(plan)}
              disabled={isLoading}
              className="mt-8 w-full py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              {isLoading ? 'Processing...' : `Subscribe ${plan.id === 'monthly' ? 'Monthly' : 'Yearly'}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;