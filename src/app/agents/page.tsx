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
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your AI Agents</h1>
      
      {!hasActiveSubscription && (
        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
          <p className="text-yellow-700">
            To access all agents, you need an active subscription.
          </p>
          <Link 
            href="/pricing" 
            className="mt-2 inline-block px-4 py-2 bg-primary text-white rounded-md"
          >
            View Plans
          </Link>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableAgents.map((agent) => {
          const isAgentEnabled = user?.agents.some(ua => ua.agentId === agent.id);
          
          return (
            <div key={agent.id} className="border rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold">{agent.name}</h2>
              <p className="text-gray-600 mt-2">{agent.description || "No description available."}</p>
              
              <div className="mt-4 flex items-center">
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${isAgentEnabled ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                <span>{isAgentEnabled ? 'Active' : 'Inactive'}</span>
              </div>
              
              <div className="mt-6">
                {isAgentEnabled ? (
                  <Link
                    href={`/agents/${agent.id}`}
                    className="px-4 py-2 bg-primary text-white rounded-md inline-block"
                  >
                    Use Agent
                  </Link>
                ) : (
                  <button
                    disabled={!hasActiveSubscription}
                    className={`px-4 py-2 rounded-md inline-block ${
                      hasActiveSubscription 
                        ? 'bg-primary text-white hover:bg-primary/90' 
                        : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    }`}
                  >
                    {hasActiveSubscription ? 'Activate Agent' : 'Subscription Required'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}