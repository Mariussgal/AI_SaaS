import React from 'react';
import Link from 'next/link';
import { ChevronLeft, BarChart2, PieChart, TrendingUp, Database, ArrowUpRight } from 'lucide-react';

export default function DataAnalysisAgentPage() {
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
              <div className="w-16 h-16 bg-cyan-900/30 rounded-xl flex items-center justify-center mr-4">
                <BarChart2 className="h-8 w-8 text-cyan-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Agent Analyse de Données</h1>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Votre bras droit pour analyser, interpréter et visualiser vos données d'entreprise.
            </p>

            <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Découvrez l'Agent Analyse de Données</h2>
              <p className="text-gray-300 mb-4">
                Notre Agent Analyse de Données transforme vos données brutes en insights stratégiques.
                Il combine des compétences avancées en statistiques, visualisation et interprétation
                pour vous aider à prendre des décisions basées sur les données.
              </p>
              <p className="text-gray-300">
                Que vous cherchiez à analyser les tendances de ventes, à comprendre le comportement client,
                à optimiser vos opérations ou à prévoir les performances futures, notre Agent Analyse de Données
                vous fournit des analyses claires et des recommandations actionnables adaptées à votre secteur d'activité.
              </p>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-gradient-to-br from-cyan-900/40 to-purple-900/40 border border-cyan-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Demandez à l'Agent Analyse de Données</h3>
              <p className="text-gray-300 mb-6">
                Posez vos questions sur l'analyse de données et obtenez des insights précis instantanément.
              </p>
              <Link
                href="/dashboard"
                className="w-full py-3 px-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
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
          Ce que l'Agent Analyse de Données peut faire pour vous
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4">
              <PieChart className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visualisation de données</h3>
            <p className="text-gray-300">
              Transformez vos données brutes en graphiques et tableaux de bord interactifs pour identifier rapidement les tendances et anomalies.
            </p>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Analyse prédictive</h3>
            <p className="text-gray-300">
              Anticipez les tendances futures grâce à des modèles prédictifs basés sur vos données historiques et les facteurs de marché.
            </p>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Nettoyage et préparation</h3>
            <p className="text-gray-300">
              Automatisez le nettoyage, la transformation et la préparation de vos données pour des analyses plus précises et fiables.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Exemples de questions à poser</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Comment puis-je identifier les facteurs qui influencent le plus mes ventes ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Quels KPIs devrais-je suivre pour mon type d'entreprise ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Comment puis-je visualiser efficacement les données de mon CRM ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Quelle est la meilleure méthode pour segmenter ma clientèle ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Comment puis-je prévoir mes ventes pour les 6 prochains mois ?</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Avantages de l'Agent Analyse de Données</h3>
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
                <span>Prise de décision basée sur des données précises et à jour</span>
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
                <span>Identification rapide des tendances et opportunités de croissance</span>
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
                <span>Optimisation des ressources grâce à des analyses prédictives précises</span>
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
                <span>Économie de temps considérable sur la préparation et l'analyse de données</span>
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
                <span>Transformation de données complexes en insights actionnables</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-cyan-900/40 to-purple-900/40 border border-cyan-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Prêt à exploiter la puissance de vos données ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-center">
              Commencez dès maintenant à transformer vos données en insights stratégiques avec notre Agent Analyse de Données spécialisé.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-medium transition-all duration-200 text-center"
              >
                Utiliser l'Agent Analyse de Données
              </Link>

              <Link
                href="/pricing"
                className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-200 text-center"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 w-64 h-64 bg-cyan-600 rounded-full filter blur-3xl opacity-20 -mr-20 -mb-20"></div>
          <div className="absolute left-1/2 top-0 w-40 h-40 bg-purple-600 rounded-full filter blur-3xl opacity-20 -ml-20 -mt-20"></div>
        </div>
      </section>
    </div>
  );
}