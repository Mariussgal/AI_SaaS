import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Globe, Search, BarChart, Settings, ArrowUpRight } from 'lucide-react';

export default function SEOAgentPage() {
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
              <div className="w-16 h-16 bg-indigo-900/30 rounded-xl flex items-center justify-center mr-4">
                <Globe className="h-8 w-8 text-indigo-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Agent SEO</h1>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Votre assistant pour optimiser la visibilité de votre site web dans les moteurs de recherche.
            </p>

            <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Découvrez l'Agent SEO</h2>
              <p className="text-gray-300 mb-4">
                Notre Agent SEO est un expert en optimisation pour les moteurs de recherche. Il analyse votre site web,
                identifie les opportunités d'amélioration et vous guide pour augmenter votre visibilité en ligne.
              </p>
              <p className="text-gray-300">
                Que vous souhaitiez améliorer votre référencement naturel, analyser vos concurrents ou optimiser le contenu
                de votre site, notre Agent SEO vous fournit des recommandations personnalisées basées sur les meilleures
                pratiques du secteur.
              </p>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Demandez à l'Agent SEO</h3>
              <p className="text-gray-300 mb-6">
                Posez vos questions sur le référencement et obtenez des réponses personnalisées instantanément.
              </p>
              <Link
                href="/dashboard"
                className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <span>Commencer maintenant</span>
                <ArrowUpRight size={18} className="ml-2" />
              </Link>
            </div>

            <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Disponibilité</h3>
              <div className="flex items-center mb-3">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                <span>Disponible avec tous les abonnements</span>
              </div>
              <Link
                href="/pricing"
                className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center"
              >
                <span>Voir les tarifs</span>
                <ChevronLeft size={16} className="ml-1 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Ce que l'Agent SEO peut faire pour vous
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-indigo-500/30">
            <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Analyse SEO complète</h3>
            <p className="text-gray-300">
              Obtenez une analyse détaillée de votre site web avec des recommandations pour améliorer votre référencement.
            </p>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-indigo-500/30">
            <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
              <BarChart className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Recherche de mots-clés</h3>
            <p className="text-gray-300">
              Identifiez les mots-clés pertinents pour votre secteur d'activité et optimisez votre contenu en conséquence.
            </p>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-indigo-500/30">
            <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
              <Settings className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Optimisation technique</h3>
            <p className="text-gray-300">
              Recevez des conseils sur les aspects techniques du SEO : vitesse de chargement, balises meta, structure URL, etc.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Exemples de questions à poser</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                <span>Comment puis-je améliorer le référencement de mon site e-commerce ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                <span>Quels sont les meilleurs mots-clés pour mon secteur d'activité ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                <span>Comment optimiser mes balises meta pour le SEO ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                <span>Quelle est la différence entre SEO on-page et off-page ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                <span>Comment améliorer ma stratégie de backlinks ?</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Avantages de l'Agent SEO</h3>
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
                <span>Recommandations personnalisées basées sur les meilleures pratiques SEO</span>
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
                <span>Analyses compétitives pour vous démarquer dans votre secteur</span>
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
                <span>Gain de temps considérable sur vos stratégies SEO</span>
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
                <span>Expertise constamment mise à jour avec les dernières tendances SEO</span>
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
                <span>Amélioration mesurable de votre positionnement dans les résultats de recherche</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Prêt à améliorer votre référencement ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-center">
              Commencez dès maintenant à optimiser votre présence en ligne avec notre Agent SEO spécialisé.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium transition-all duration-200 text-center"
              >
                Utiliser l'Agent SEO
              </Link>

              <Link
                href="/pricing"
                className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-200 text-center"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-20 -mr-20 -mb-20"></div>
          <div className="absolute left-1/2 top-0 w-40 h-40 bg-purple-600 rounded-full filter blur-3xl opacity-20 -ml-20 -mt-20"></div>
        </div>
      </section>
    </div>
  );
}