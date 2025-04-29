'use client';

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { Activity, Users, MessageSquare, Clock, Brain, Zap, ArrowUpRight, ChevronRight, FileText, Settings } from 'lucide-react';

export default function Dashboard() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Données factices pour la démo 
  const mockData = {
    usedAgents: 3,
    totalAgents: 5,
    remainingRequests: 142,
    dailyLimit: 200,
    lastActive: '2 heures',
    usageThisWeek: 58,
    usageLastWeek: 42,
    recentAgents: [
      { id: 1, name: 'Agent Juridique', icon: 'file-text', usageCount: 12, lastUsed: '1h' },
      { id: 2, name: 'Agent Analyse', icon: 'bar-chart', usageCount: 8, lastUsed: '3h' },
      { id: 3, name: 'Agent Marketing', icon: 'trending-up', usageCount: 5, lastUsed: '2j' }
    ]
  };
  
  // chope prénom avec majuscule au début
  const getUserDisplayName = () => {
    if (!isLoaded || !isSignedIn) return 'utilisateur';
    
    if (user?.firstName) {
      return user.firstName;
    } else if (user?.username) {
      return user.username;
    } else if (user?.primaryEmailAddress?.emailAddress) {
      return user.primaryEmailAddress.emailAddress.split('@')[0];
    } else {
      return 'utilisateur';
    }
  };
  
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bonjour';
    if (hour < 18) return 'Bon après-midi';
    return 'Bonsoir';
  };

  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute inset-0 bg-[#0F0F1A] bg-grid-pattern w-full h-full"></div>
      
      <div className="relative z-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12">
          <div className="border-b border-gray-800 pb-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  {getGreeting()}, <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">{getUserDisplayName()}</span>
                </h1>
                <p className="text-gray-400">
                  {new Date().toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-2">
                <Link 
                  href="/agents"
                  className="px-4 py-2 bg-indigo-900/30 hover:bg-indigo-800/40 border border-indigo-500/30 rounded-lg flex items-center transition-colors"
                >
                  <Brain className="w-4 h-4 mr-2" />
                  <span>Agents IA</span>
                </Link>
                <Link 
                  href="/pricing"
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg flex items-center transition-colors"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  <span>Upgrade</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'overview' 
                  ? 'bg-indigo-900/50 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-indigo-900/30'
              }`}
            >
              Vue d'ensemble
            </button>
            <button 
              onClick={() => setActiveTab('agents')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'agents' 
                  ? 'bg-indigo-900/50 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-indigo-900/30'
              }`}
            >
              Mes agents
            </button>
            <button 
              onClick={() => setActiveTab('documents')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'documents' 
                  ? 'bg-indigo-900/50 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-indigo-900/30'
              }`}
            >
              Documents
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'settings' 
                  ? 'bg-indigo-900/50 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-indigo-900/30'
              }`}
            >
              Paramètres
            </button>
          </div>
          
          {activeTab === 'overview' && (
            <div>
              {/* Cartes KPI */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Carte Agents utilisés */}
                <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 hover:border-indigo-500/30 transition-all">
                  <div className="flex justify-between mb-4">
                    <div className="bg-indigo-900/30 p-2 rounded-lg">
                      <Users className="w-6 h-6 text-indigo-400" />
                    </div>
                    <span className="text-gray-400 text-sm">Sur 5</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{mockData.usedAgents}</h3>
                  <p className="text-gray-400 text-sm">Agents utilisés</p>
                  <div className="mt-4 w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" 
                      style={{ width: `${(mockData.usedAgents / mockData.totalAgents) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Carte Requêtes restantes */}
                <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 hover:border-indigo-500/30 transition-all">
                  <div className="flex justify-between mb-4">
                    <div className="bg-indigo-900/30 p-2 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-indigo-400" />
                    </div>
                    <span className="text-gray-400 text-sm">Aujourd'hui</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{mockData.remainingRequests}</h3>
                  <p className="text-gray-400 text-sm">Requêtes restantes</p>
                  <div className="mt-4 w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" 
                      style={{ width: `${(mockData.remainingRequests / mockData.dailyLimit) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Carte Dernière activité */}
                <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 hover:border-indigo-500/30 transition-all">
                  <div className="flex justify-between mb-4">
                    <div className="bg-indigo-900/30 p-2 rounded-lg">
                      <Clock className="w-6 h-6 text-indigo-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Il y a {mockData.lastActive}</h3>
                  <p className="text-gray-400 text-sm">Dernière activité</p>
                </div>
                
                {/* Carte Usage hebdomadaire */}
                <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 hover:border-indigo-500/30 transition-all">
                  <div className="flex justify-between mb-4">
                    <div className="bg-indigo-900/30 p-2 rounded-lg">
                      <Activity className="w-6 h-6 text-indigo-400" />
                    </div>
                    <span className={`text-sm ${mockData.usageThisWeek > mockData.usageLastWeek ? 'text-green-400' : 'text-red-400'}`}>
                      {mockData.usageThisWeek > mockData.usageLastWeek ? '+' : '-'}
                      {Math.abs(((mockData.usageThisWeek - mockData.usageLastWeek) / mockData.usageLastWeek) * 100).toFixed(0)}%
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{mockData.usageThisWeek}</h3>
                  <p className="text-gray-400 text-sm">Requêtes cette semaine</p>
                </div>
              </div>
              
              {/* Section Agents récemment utilisés */}
              <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Agents récemment utilisés</h2>
                  <Link 
                    href="/agents" 
                    className="text-indigo-400 hover:text-indigo-300 flex items-center text-sm"
                  >
                    <span>Voir tous</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {mockData.recentAgents.map(agent => (
                    <div 
                      key={agent.id}
                      className="p-4 bg-[#232338] border border-gray-800 rounded-lg hover:border-indigo-500/30 transition-all cursor-pointer group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <div className="bg-indigo-900/40 p-2 rounded-lg mr-3">
                            <FileText className="w-5 h-5 text-indigo-400" />
                          </div>
                          <div>
                            <h3 className="font-medium group-hover:text-indigo-400 transition-colors">{agent.name}</h3>
                            <p className="text-sm text-gray-400">{agent.usageCount} utilisations</p>
                          </div>
                        </div>
                        <span className="text-xs bg-indigo-900/40 px-2 py-1 rounded-full text-gray-300">
                          Il y a {agent.lastUsed}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bannière d'upgrade/informations abonnement */}
              <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 rounded-xl p-6 mb-8 relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold mb-2">Vous êtes sur le plan Standard</h3>
                    <p className="text-gray-300 max-w-lg">
                      Débloquez l'accès à tous nos agents IA et des requêtes illimitées avec notre plan Pro.
                    </p>
                  </div>
                  <Link 
                    href="/pricing"
                    className="px-6 py-3 bg-white text-[#0F0F1A] font-medium rounded-lg flex items-center hover:bg-gray-100 transition-colors"
                  >
                    <span>Voir les offres</span>
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/20 blur-[80px] rounded-full -mr-12 -mt-12"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-600/20 blur-[50px] rounded-full -ml-6 -mb-6"></div>
              </div>
            </div>
          )}
          
          {/* autres onglets*/}
          {activeTab === 'agents' && (
            <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Explorez nos agents IA</h3>
              <p className="text-gray-400 max-w-lg mx-auto mb-6">
                Découvrez notre catalogue d'agents IA spécialisés pour vous aider dans vos tâches quotidiennes.
              </p>
              <Link 
                href="/agents"
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg inline-flex items-center hover:from-indigo-500 hover:to-purple-500 transition-colors"
              >
                <span>Voir les agents disponibles</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          )}
          
          {activeTab === 'documents' && (
            <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gérez vos documents</h3>
              <p className="text-gray-400 max-w-lg mx-auto mb-6">
                Cette fonctionnalité sera bientôt disponible. Vous pourrez accéder, organiser et partager tous vos documents.
              </p>
              <button
                disabled
                className="px-6 py-3 bg-gray-700 text-gray-300 font-medium rounded-lg inline-flex items-center cursor-not-allowed"
              >
                <span>Bientôt disponible</span>
              </button>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Paramètres du compte</h3>
              <p className="text-gray-400 max-w-lg mx-auto mb-6">
                Gérez vos préférences, votre abonnement et les paramètres de votre compte.
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://accounts.clerk.com/account"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-indigo-900/50 text-white font-medium rounded-lg inline-flex items-center hover:bg-indigo-900/70 transition-colors"
                >
                  <span>Profil Clerk</span>
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </a>
                <Link 
                  href="/api/create-portal-session"
                  className="px-6 py-3 bg-indigo-900/50 text-white font-medium rounded-lg inline-flex items-center hover:bg-indigo-900/70 transition-colors"
                >
                  <span>Gérer l'abonnement</span>
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}