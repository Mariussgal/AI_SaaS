'use client';

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  priceId: string;
  popular?: boolean;
}

// Monthly equivalent calculation for annual pricing (showing monthly price when paid annually)
const monthlyWithAnnual = Math.round(190 / 12);

const pricingPlans: PricingPlan[] = [
  {
    id: 'monthly',
    name: 'Standard',
    price: 19,
    duration: '/month',
    description: 'Perfect for individuals and small teams getting started with AI',
    features: [
      'Access to 5 specialized AI agents',
      'Up to 200 AI requests per day',
      'Standard response time',
      'Email support within 24 hours',
      'Basic analytics dashboard',
      '1 user account'
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY || 'price_monthly'
  },
  {
    id: 'yearly',
    name: 'Standard',
    price: 190,
    duration: '/year',
    description: 'Perfect for individuals and small teams getting started with AI',
    features: [
      'Access to 5 specialized AI agents',
      'Up to 200 AI requests per day',
      'Standard response time',
      'Email support within 24 hours',
      'Basic analytics dashboard',
      '1 user account'
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_YEARLY || 'price_yearly',
    popular: true
  }
];

const faqs = [
  {
    question: "How does the billing cycle work?",
    answer: "Your subscription starts immediately after payment. You'll be billed either monthly or yearly, depending on your chosen plan. You can cancel anytime from your dashboard."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can upgrade your plan at any time. Downgrades will take effect at the end of your current billing cycle. Any changes can be managed from your account dashboard."
  },
  {
    question: "Is there a free trial?",
    answer: "We don't offer a traditional free trial, but you can access a limited version of our platform with the free tier to test our services before committing to a paid plan."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) through our secure payment processor, Stripe."
  }
];

const Pricing: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const router = useRouter();

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
      
      if (response.data.checkoutUrl) {
        window.location.href = response.data.checkoutUrl;
      } else {
        console.error('No checkoutUrl in response:', response.data);
        alert('Error: No checkout URL returned from API');
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Something went wrong. Please try again.');
      router.push('/dashboard');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <div className=" bg-[#0F0F1A] text-white bg-grid-pattern">
      {/* Hero section */}
      <section className="relative px-4 pt-24 pb-16 md:px-6 lg:pt-32 lg:pb-24 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Simple, transparent <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Unlock the full potential of our AI agents with a plan that fits your needs.
            No hidden fees, no surprises.
          </p>
        </div>
        
        {/* Gradient effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-indigo-600/20 blur-[100px] rounded-full"></div>
      </section>

      {/* Pricing cards */}
      {/* Monthly plan */}
      <section className="px-4 max-w-6xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div 
            className="relative overflow-hidden bg-[#1A1A2E] border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-xl flex flex-col">
            <div className="absolute top-5 right-5 bg-[#2A2A3E] text-white py-1 px-3 rounded-full text-sm">
              Monthly
            </div>
            
            <h3 className="text-2xl font-bold mt-6 text-center ">Standard</h3>
            <p className="mt-2 text-gray-400 text-center">Perfect for individuals and small teams getting started with AI</p>
            
            <div className="mt-6 flex items-baseline">
              <span className="text-5xl font-extrabold">${pricingPlans[0].price}</span>
              <span className="ml-1 text-gray-400">/month</span>
            </div>
            
            <div className="mt-8">
              <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">What's included:</h4>
              <ul className="space-y-4 mb-6">
                {pricingPlans[0].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-indigo-400 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button
              onClick={() => handleSubscribe(pricingPlans[0])}
              disabled={isLoading}
              className="mt-auto w-full py-4 rounded-xl font-medium text-center transition-all bg-white text-[#0F0F1A] hover:bg-gray-200"
            >
              {isLoading ? 'Processing...' : 'Get Started'}
            </button>
          </div>
          
          {/* Annual plan */}
          <div 
            className="relative overflow-hidden bg-[#1A1A2E] border border-indigo-500/50 ring-2 ring-indigo-500/20 rounded-2xl p-8 transition-all duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-xl flex flex-col">
            <div className="absolute -top-1 -left-11 w-40 h-11 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-1 px-4 transform -rotate-45 origin-center shadow-lg">
              <p className="text-center font-medium mt-2.5 mr-6 text-sm">Save 17%</p>
            </div>
            
            <div className="absolute top-5 right-5 bg-[#2A2A3E] text-white py-1 px-3 rounded-full text-sm">
              Annual
            </div>
            
            <h3 className="text-2xl font-bold mt-6 text-center">Standard</h3>
            <p className="mt-2 text-gray-400 text-center">Perfect for individuals and small teams getting started with AI</p>
            
            <div className="mt-6">
              <div className="flex items-baseline">
                <span className="text-5xl font-extrabold">${pricingPlans[1].price}</span>
                <span className="ml-1 text-gray-400">/year</span>
              </div>
              <p className="text-green-400 mt-2">Just ${monthlyWithAnnual}/month, billed annually</p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">What's included:</h4>
              <ul className="space-y-4 mb-6">
                {pricingPlans[1].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-indigo-400 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button
              onClick={() => handleSubscribe(pricingPlans[1])}
              disabled={isLoading}
              className="mt-auto w-full py-4 rounded-xl font-medium text-center transition-all bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white"
            >
              {isLoading ? 'Processing...' : 'Get Started'}
            </button>
          </div>
        </div>
      </section>

      {/* Features overview */}
      <section className="px-4 max-w-6xl mx-auto mb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Key Features Included</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1A1A2E]/50 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-indigo-500/30">
            <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
            <p className="text-gray-400">Monitor AI agent usage, track performance, and gain insights with detailed analytics and reporting tools.</p>
          </div>
          
          <div className="bg-[#1A1A2E]/50 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-indigo-500/30">
            <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
            <p className="text-gray-400">Your data is protected with end-to-end encryption, role-based access controls, and SOC 2 compliance.</p>
          </div>
          
          <div className="bg-[#1A1A2E]/50 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-indigo-500/30">
            <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast Response Time</h3>
            <p className="text-gray-400">Get immediate responses from our AI agents with minimal latency, even during peak usage periods.</p>
          </div>
        </div>

      </section>

    </div>
  );
};
export default Pricing;