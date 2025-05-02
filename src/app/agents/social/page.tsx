import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Share2, Calendar, TrendingUp, BarChart2, ArrowUpRight } from 'lucide-react';

export default function SocialMediaAgentPage() {
  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white bg-grid-pattern">
      <section className="relative px-4 pt-24 pb-12 md:px-6 lg:pt-28 lg:pb-16 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Link
              href="/agents"
              className="text-gray-400 hover:text-white flex items-center transition-colors mr-4"
            >
              <ChevronLeft size={20} className="mr-1" />
              <span>Retour aux agents</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-900/30 rounded-xl flex items-center justify-center mr-4">
                <Share2 className="h-8 w-8 text-purple-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Agent Social Media</h1>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Votre assistant pour automatiser et optimiser la gestion de vos réseaux sociaux.
            </p>

            <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Découvrez l'Agent Social Media</h2>
              <p className="text-gray-300 mb-4">
                Notre Agent Social Media est un expert en stratégie de contenu et gestion des réseaux sociaux.
                Il vous aide à planifier, créer et analyser vos publications pour maximiser leur impact
                et développer votre présence en ligne de manière cohérente et efficace.
              </p>
              <p className="text-gray-300">
                Que vous soyez une petite entreprise cherchant à établir votre présence sur les réseaux sociaux
                ou une marque établie visant à optimiser votre stratégie, notre Agent Social Media vous fournit
                des recommandations personnalisées, des idées de contenu et des analyses détaillées pour atteindre
                vos objectifs.
              </p>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Demandez à l'Agent Social Media</h3>
              <p className="text-gray-300 mb-6">
                Posez vos questions sur la gestion des réseaux sociaux et obtenez des conseils personnalisés instantanément.
              </p>
              <Link
                href="/dashboard"
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <span>Commencer maintenant</span>
                <ArrowUpRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Ce que l'Agent Social Media peut faire pour vous
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/30">
            <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Planification de contenu</h3>
            <p className="text-gray-300">
              Créez un calendrier éditorial cohérent et optimisez les horaires de publication pour maximiser l'engagement.
            </p>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/30">
            <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Analyse des tendances</h3>
            <p className="text-gray-300">
              Identifiez les tendances émergentes dans votre secteur et créez du contenu pertinent qui génère de l'engagement.
            </p>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/30">
            <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <BarChart2 className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mesure de performance</h3>
            <p className="text-gray-300">
              Analysez les performances de vos publications et obtenez des recommandations pour améliorer votre stratégie.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Exemples de questions à poser</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Quel est le meilleur moment pour publier sur Instagram dans mon secteur ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Comment créer une stratégie de contenu cohérente sur plusieurs plateformes ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Quels types de contenu génèrent le plus d'engagement sur LinkedIn ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Comment améliorer mon taux de conversion à partir des réseaux sociaux ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Quels hashtags utiliser pour mon secteur d'activité ?</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Avantages de l'Agent Social Media</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
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
                <span>Gain de temps considérable dans la gestion quotidienne des réseaux sociaux</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
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
                <span>Amélioration de l'engagement et de la portée de vos publications</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
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
                <span>Création de contenu cohérent avec votre image de marque</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
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
                <span>Identification des opportunités de croissance sur les différentes plateformes</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
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
                <span>Données analytiques claires pour mesurer le retour sur investissement</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Prêt à transformer votre présence sur les réseaux sociaux ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-center">
              Commencez dès maintenant à optimiser votre stratégie social media avec notre Agent Social Media spécialisé.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium transition-all duration-200 text-center"
              >
                Utiliser l'Agent Social Media
              </Link>

              <Link
                href="/pricing"
                className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-200 text-center"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 -mr-20 -mb-20"></div>
          <div className="absolute left-1/2 top-0 w-40 h-40 bg-pink-600 rounded-full filter blur-3xl opacity-20 -ml-20 -mt-20"></div>
        </div>
      </section>
    </div>
  );
}