import React from 'react';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function AgentsPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }
  
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { 
      subscription: true,
      agents: {
        include: {
          agent: true
        }
      }
    }
  });
  
  const hasActiveSubscription = user?.subscription?.status === 'active';
  
  const availableAgents = await prisma.agent.findMany({
    where: {
      isActive: true
    }
  });
  
  const groupedAgents = availableAgents.reduce((acc, agent) => {
    const firstLetter = agent.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(agent);
    return acc;
  }, {} as Record<string, typeof availableAgents>);
  
  const categories = Object.keys(groupedAgents).sort();
  
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">AI Agents</h1>
          <p className="text-gray-600">Discover and use our specialized AI agents</p>
        </div>
        
        {!hasActiveSubscription && (
          <div className="mt-4 md:mt-0">
            <Link 
              href="/pricing" 
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Upgrade to Premium
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
      
      {!hasActiveSubscription && (
        <div className="bg-yellow-50 p-4 rounded-lg mb-6 border border-yellow-200">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Premium Feature</h3>
              <p className="text-sm text-yellow-700 mt-1">
                To access all agents and features, you need an active subscription.
              </p>
              <div className="mt-2">
                <Link 
                  href="/pricing" 
                  className="text-sm font-medium text-yellow-800 hover:text-yellow-600 underline"
                >
                  View plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h2 className="text-xl font-semibold">All Agents</h2>
          
          {categories.length > 1 && (
            <div className="mt-3 sm:mt-0">
              <nav className="flex space-x-1 overflow-x-auto py-1" aria-label="Categories">
                {categories.map((category) => (
                  <a 
                    key={category}
                    href={`#category-${category}`}
                    className="px-3 py-1.5 text-sm font-medium rounded-md hover:bg-gray-100"
                  >
                    {category}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
        
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category} id={`category-${category}`}>
              <h3 className="text-lg font-medium mb-4 sticky top-0 bg-white py-2 border-b">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedAgents[category].map((agent) => {
                  const isAgentEnabled = user?.agents.some(ua => ua.agentId === agent.id);
                  const isPremiumAgent = !isAgentEnabled && !hasActiveSubscription;
                  
                  return (
                    <div 
                      key={agent.id} 
                      className={`border rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md ${
                        isPremiumAgent ? 'opacity-70' : ''
                      }`}
                    >
                      <div className="p-5 border-b">
                        <div className="flex items-start justify-between">
                          <h2 className="text-xl font-semibold">{agent.name}</h2>
                          {isPremiumAgent && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                              Premium
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-600 mt-2 min-h-[3rem]">
                          {agent.description || "No description available."}
                        </p>
                      </div>
                      
                      <div className="p-5 bg-gray-50">
                        <div className="flex items-center mb-4">
                          <span className={`inline-block w-3 h-3 rounded-full mr-2 ${isAgentEnabled ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                          <span className="text-sm">{isAgentEnabled ? 'Active' : 'Inactive'}</span>
                        </div>
                        
                        <div>
                          {isAgentEnabled ? (
                            <Link
                              href={`/agents/${agent.id}`}
                              className="w-full px-4 py-2 bg-primary text-white rounded-md inline-block text-center hover:bg-primary/90 transition-colors"
                            >
                              Use Agent
                            </Link>
                          ) : (
                            <button
                              disabled={isPremiumAgent}
                              className={`w-full px-4 py-2 rounded-md inline-block text-center ${
                                !isPremiumAgent 
                                  ? 'bg-primary text-white hover:bg-primary/90' 
                                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                              }`}
                            >
                              {isPremiumAgent ? 'Subscription Required' : 'Activate Agent'}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}