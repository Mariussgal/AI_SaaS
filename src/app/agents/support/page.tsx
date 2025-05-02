import React from 'react';
import Link from 'next/link';
import { ChevronLeft, HeadsetIcon, MessageSquare, Clock, Shield, ArrowUpRight } from 'lucide-react';

export default function SupportAgentPage() {
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
              <div className="w-16 h-16 bg-blue-900/30 rounded-xl flex items-center justify-center mr-4">
                <HeadsetIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Agent Support Client</h1>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Votre assistant pour un service client réactif et disponible 24/7.
            </p>

            <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Découvrez l'Agent Support Client</h2>
              <p className="text-gray-300 mb-4">
                Notre Agent Support Client est conçu pour répondre aux questions et demandes de vos clients à tout moment, même en dehors des heures de bureau.
                Il gère efficacement les requêtes courantes, fournit des informations précises et escalade les cas complexes à votre équipe humaine.
              </p>
              <p className="text-gray-300">
                Que vous cherchiez à améliorer votre temps de réponse, à réduire la charge de travail de votre équipe
                ou à offrir une assistance 24/7, notre Agent Support Client est la solution idéale pour transformer
                votre service client.
              </p>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Demandez à l'Agent Support Client</h3>
              <p className="text-gray-300 mb-6">
                Posez vos questions sur le service client et obtenez des réponses personnalisées instantanément.
              </p>
              <Link
                href="/dashboard"
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
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
          Ce que l'Agent Support Client peut faire pour vous
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-blue-500/30">
            <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Réponses instantanées</h3>
            <p className="text-gray-300">
              Répondez instantanément aux questions fréquentes de vos clients, même en dehors des heures de bureau.
            </p>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-blue-500/30">
            <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Disponibilité 24/7</h3>
            <p className="text-gray-300">
              Offrez un service client disponible jour et nuit, tous les jours de l'année, sans frais supplémentaires.
            </p>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-blue-500/30">
            <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Escalade intelligente</h3>
            <p className="text-gray-300">
              Identifiez automatiquement les problèmes complexes et redirigez-les vers votre équipe humaine au bon moment.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Exemples de questions à poser</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Comment puis-je réduire mon temps de réponse aux clients ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Quelles sont les meilleures pratiques pour gérer les clients mécontents ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Comment structurer une base de connaissances efficace ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Quels sont les indicateurs clés de performance pour un service client ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Comment former mon équipe aux meilleures pratiques de support client ?</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Avantages de l'Agent Support Client</h3>
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
                <span>Réduction significative du temps de réponse aux clients</span>
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
                <span>Amélioration de la satisfaction client grâce à des réponses immédiates</span>
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
                <span>Libération du temps de votre équipe pour les tâches à haute valeur ajoutée</span>
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
                <span>Réduction des coûts opérationnels liés au service client</span>
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
                <span>Collecte de données précieuses sur les problèmes fréquents des clients</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Prêt à transformer votre service client ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-center">
              Commencez dès maintenant à offrir un support client exceptionnel, disponible 24/7, avec notre Agent Support Client spécialisé.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-200 text-center"
              >
                Utiliser l'Agent Support Client
              </Link>

              <Link
                href="/pricing"
                className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-200 text-center"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20 -mr-20 -mb-20"></div>
          <div className="absolute left-1/2 top-0 w-40 h-40 bg-purple-600 rounded-full filter blur-3xl opacity-20 -ml-20 -mt-20"></div>
        </div>
      </section>
    </div>
  );
}