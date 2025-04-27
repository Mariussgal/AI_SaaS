'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

interface Subscription {
  status: string;
  currentPeriodEnd: string | null;
}

interface SubscriptionStatusProps {
  subscription: Subscription | null;
}

const SubscriptionStatus: React.FC<SubscriptionStatusProps> = ({ subscription }) => {
  const router = useRouter();
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg">
        <p>Sign in to view subscription details</p>
        <button 
          onClick={() => router.push('/sign-in')}
          className="mt-2 px-4 py-2 bg-primary text-white rounded-md"
        >
          Sign In
        </button>
      </div>
    );
  }

  if (!subscription) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg">
        <p>No active subscription</p>
        <button 
          onClick={() => router.push('/pricing')}
          className="mt-2 px-4 py-2 bg-primary text-white rounded-md"
        >
          View Plans
        </button>
      </div>
    );
  }

  const isActive = subscription.status === 'active';
  const expiryDate = subscription.currentPeriodEnd 
    ? new Date(subscription.currentPeriodEnd).toLocaleDateString() 
    : 'N/A';

  return (
    <div className={`p-4 ${isActive ? 'bg-green-50' : 'bg-yellow-50'} rounded-lg`}>
      <h3 className="font-medium">Subscription Status</h3>
      <p className="mt-1">
        Status: <span className={isActive ? 'text-green-600' : 'text-yellow-600'}>
          {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
        </span>
      </p>
      {isActive && (
        <p className="mt-1">Renews on: {expiryDate}</p>
      )}
    </div>
  );
};

export default SubscriptionStatus;