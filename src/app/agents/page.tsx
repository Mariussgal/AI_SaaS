import React from 'react';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import { 
  Users, 
  Phone, 
  Globe, 
  Briefcase, 
  Scale, 
  BarChart2, 
  HeadsetIcon,
  Share2
} from 'lucide-react';

const prisma = new PrismaClient();


// Liste des agents avec leurs icônes et descriptions
const agentsList = [
  {
    id: 'seo',
    name: 'SEO',
    icon: <Globe className="h-10 w-10" />,
    description: 'Votre site web manque de visibilité et d\'optimisation SEO ?',
    category: 'Marketing'
  },
  {
    id: 'support',
    name: 'Support Client',
    icon: <HeadsetIcon className="h-10 w-10" />,
    description: 'Vous souhaitez un service client réactif et disponible 24/7 ?',
    category: 'Relation Client'
  },
  {
    id: 'telephonie',
    name: 'Téléphonie',
    icon: <Phone className="h-10 w-10" />,
    description: 'Vous souhaitez automatiser vos appels entrants et sortants ?',
    category: 'Relation Client'
  },
  {
    id: 'commercial',
    name: 'Stratégie Commerciale',
    icon: <Briefcase className="h-10 w-10" />,
    description: 'Vous souhaitez automatiser votre prospection ?',
    category: 'Ventes'
  },
  {
    id: 'juridique',
    name: 'Juridique',
    icon: <Scale className="h-10 w-10" />,
    description: 'Vous avez besoin de conseil juridique pour votre entreprise ?',
    category: 'Légal'
  },
  {
    id: 'data',
    name: 'Analyse de Données',
    icon: <BarChart2 className="h-10 w-10" />,
    description: 'Besoin d\'un bras droit pour analyser vos données ?',
    category: 'Données'
  },
  {
    id: 'recrutement',
    name: 'Recrutement',
    icon: <Users className="h-10 w-10" />,
    description: 'Vous souhaitez recruter les meilleurs talents ?',
    category: 'RH'
  },
  {
    id: 'social',
    name: 'Social Media',
    icon: <Share2 className="h-10 w-10" />,
    description: 'Vous souhaitez automatiser la gestion de vos réseaux sociaux ?',
    category: 'Marketing'
  },
];

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

  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white bg-grid-pattern">
      {/* Hero Section */}
      <section className="relative px-4 pt-24 pb-12 md:px-6 lg:pt-28 lg:pb-16 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Votre équipe d'<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">assistants IA</span>, prête à automatiser votre quotidien.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto mt-10">
            Découvrez et activez nos agents spécialisés pour votre entreprise
          </p>
          

        </div>
        
        {/* Gradient effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-indigo-600/20 blur-[100px] rounded-full"></div>
      </section>

      {/* Message de mise à niveau si pas de souscription active */}
      {!hasActiveSubscription && (
        <div className="bg-yellow-50 text-yellow-800 p-4 rounded-lg mb-8 max-w-6xl mx-auto">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium">Accès limité</h3>
              <p className="mt-1 text-sm">
                Pour accéder à tous nos agents et fonctionnalités, vous devez avoir un abonnement actif.
              </p>
              <div className="mt-2">
                <Link 
                  href="/pricing" 
                  className="text-sm font-medium text-yellow-800 hover:text-yellow-600 underline"
                >
                  Voir les offres
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grille d'agents */}
      <section className="px-4 pb-16 md:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {agentsList.map((agent) => {
            // On simule l'état actif pour certains agents
            const isAgentActive = agent.id === 'seo' || agent.id === 'support';
            const isPremiumAgent = !isAgentActive && !hasActiveSubscription;
            
            return (
              <div 
                key={agent.id}
                className={`bg-black border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] ${
                  isPremiumAgent ? 'opacity-80' : ''
                }`}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between mb-4">
                    <div className={`p-4 rounded-full ${getColorForCategory(agent.category)}`}>
                      {agent.icon}
                    </div>
                    
                    {isPremiumAgent && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded h-fit">
                        Premium
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{agent.name}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{agent.description}</p>
                  
                  <div className="mt-auto">

                      <Link className="mt-6 block text-center w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg font-medium transition-colors"
                            href="/dashboard"
                          >
                        Plus de détails 
                      </Link>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

// Fonction pour attribuer une couleur de fond en fonction de la catégorie
function getColorForCategory(category: string) {
  switch (category) {
    case 'Marketing':
      return 'bg-purple-500/20 text-purple-400';
    case 'Relation Client':
      return 'bg-blue-500/20 text-blue-400';
    case 'Ventes':
      return 'bg-green-500/20 text-green-400';
    case 'Légal':
      return 'bg-orange-500/20 text-orange-400';
    case 'Données':
      return 'bg-cyan-500/20 text-cyan-400';
    case 'RH':
      return 'bg-pink-500/20 text-pink-400';
    default:
      return 'bg-indigo-500/20 text-indigo-400';
  }
}