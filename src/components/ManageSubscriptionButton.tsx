'use client';

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';

const ManageSubscriptionButton: React.FC = () => {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleManageSubscription = async () => {
    if (!user) {
      window.location.href = '/sign-in';
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
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleManageSubscription}
      disabled={isLoading}
      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
    >
      {isLoading ? 'Loading...' : 'Manage Subscription'}
    </button>
  );
};

export default ManageSubscriptionButton;