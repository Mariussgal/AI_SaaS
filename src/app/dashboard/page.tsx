import React from 'react';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import ManageSubscriptionButton from '@/components/ManageSubscriptionButton';
import SuccessBanner from '@/components/SuccessBanner';

const prisma = new PrismaClient();

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }
  
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { subscription: true }
  });
  
  const hasActiveSubscription = user?.subscription?.status === 'active';
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <SuccessBanner />
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Your Subscription</h2>
        
        {hasActiveSubscription ? (
          <div>
            <p className="text-green-600 mb-4">
              You have an active subscription!
            </p>
            <ManageSubscriptionButton />
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-4">
              You don't have an active subscription.
            </p>
            <a 
              href="/pricing" 
              className="px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors inline-block"
            >
              View Plans
            </a>
          </div>
        )}
      </div>
    </div>
  );
}