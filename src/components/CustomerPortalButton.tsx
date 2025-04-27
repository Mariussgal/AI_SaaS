'use client';

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const CustomerPortalButton: React.FC = () => {
  const { user, isSignedIn } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleManageSubscription = async () => {
    if (!isSignedIn || !user) {
      toast.error('You must be logged in to manage your subscription');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('/api/create-portal-session', {
        email: user.primaryEmailAddress?.emailAddress
      });
      
      window.location.href = response.data.url;
    } catch (error) {
      console.error('Error creating portal session:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleManageSubscription}
      disabled={isLoading || !isSignedIn}
      className="px-4 py-2 rounded bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
    >
      {isLoading ? 'Loading...' : 'Manage Subscription'}
    </button>
  );
};

export default CustomerPortalButton;