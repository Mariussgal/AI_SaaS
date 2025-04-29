import React from 'react';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import Image from 'next/image';

const prisma = new PrismaClient();

export default async function ProfilePage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }
  
  const clerkUser = await currentUser();
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { subscription: true }
  });
  
  const hasActiveSubscription = user?.subscription?.status === 'active';
  
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-24 h-24 relative rounded-full overflow-hidden">
              {clerkUser?.imageUrl ? (
                <Image 
                  src={clerkUser.imageUrl} 
                  alt="Profile" 
                  fill 
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                  {clerkUser?.firstName?.charAt(0) || clerkUser?.emailAddresses[0]?.emailAddress?.charAt(0).toUpperCase() || 'U'}
                </div>
              )}
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl font-semibold mb-1">
                {clerkUser?.firstName && clerkUser?.lastName 
                  ? `${clerkUser.firstName} ${clerkUser.lastName}`
                  : clerkUser?.emailAddresses[0]?.emailAddress.split('@')[0]
                }
              </h2>
              <p className="text-gray-600 mb-3">{clerkUser?.emailAddresses[0]?.emailAddress}</p>
              
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                  Member since {new Date(user?.createdAt || new Date()).toLocaleDateString()}
                </span>
                {hasActiveSubscription && (
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Premium Member
                  </span>
                )}
              </div>
              
              <div className="mt-4">
                <a 
                  href="https://accounts.clerk.com/account"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
                >
                  Edit Profile in Clerk
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Account Details</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p>{clerkUser?.emailAddresses[0]?.emailAddress}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Subscription Status</h3>
                <p className={hasActiveSubscription ? 'text-green-600' : 'text-yellow-600'}>
                  {hasActiveSubscription ? 'Active' : 'No active subscription'}
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Membership</h3>
              <p>{hasActiveSubscription ? 'Premium' : 'Free Tier'}</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-3">
              <Link 
                href="/dashboard" 
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
              >
                Back to Dashboard
              </Link>
              
              {hasActiveSubscription ? (
                <Link 
                  href="/api/create-portal-session" 
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Manage Subscription
                </Link>
              ) : (
                <Link 
                  href="/pricing" 
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Upgrade to Premium
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}