import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Users, FileText, Search, Award, ArrowUpRight } from 'lucide-react';

export default function RecrutementAgentPage() {
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
              <div className="w-16 h-16 bg-pink-900/30 rounded-xl flex items-center justify-center mr-4">
                <Users className="h-8 w-8 text-pink-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Agent Recrutement</h1>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Votre assistant RH pour identifier, évaluer et attirer les meilleurs talents pour votre entreprise.
            </p>

            <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Découvrez l'Agent Recrutement</h2>
              <p className="text-gray-300 mb-4">
                Notre Agent Recrutement transforme votre processus d'embauche en automatisant les tâches chronophages
                et en vous aidant à prendre des décisions éclairées. De la rédaction d'offres d'emploi attractives
                à l'analyse des CV et la présélection des candidats, cet agent vous permet de vous concentrer sur
                l'essentiel : trouver la personne idéale pour votre équipe.
              </p>
              <p className="text-gray-300">
                Que vous soyez à la recherche d'un spécialiste technique, d'un profil commercial ou d'un cadre dirigeant,
                notre Agent Recrutement s'adapte à vos besoins spécifiques pour vous aider à constituer une équipe
                talentueuse et performante, en accord avec la culture de votre entreprise.
              </p>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 border border-pink-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Demandez à l'Agent Recrutement</h3>
              <p className="text-gray-300 mb-6">
                Posez vos questions sur le recrutement et les ressources humaines et obtenez des conseils personnalisés instantanément.
              </p>
              <Link
                href="/dashboard"
                className="w-full py-3 px-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
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
          Ce que l'Agent Recrutement peut faire pour vous
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-pink-500/30">
            <div className="w-12 h-12 bg-pink-900/30 rounded-lg flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Création d'offres d'emploi</h3>
            <p className="text-gray-300">
              Rédigez des offres d'emploi attractives et précises, optimisées pour attirer les meilleurs candidats dans votre secteur.
            </p>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-pink-500/30">
            <div className="w-12 h-12 bg-pink-900/30 rounded-lg flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Analyse de CV</h3>
            <p className="text-gray-300">
              Identifiez rapidement les candidats les plus pertinents grâce à une analyse intelligente des CV et des profils professionnels.
            </p>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-pink-500/30">
            <div className="w-12 h-12 bg-pink-900/30 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Préparation d'entretiens</h3>
            <p className="text-gray-300">
              Générez des questions d'entretien pertinentes et une grille d'évaluation adaptée à chaque poste pour une sélection efficace.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Exemples de questions à poser</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>Comment rédiger une offre d'emploi pour un développeur full-stack ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>Quelles sont les meilleures questions à poser lors d'un entretien pour un poste de marketing ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>Comment évaluer les soft skills d'un candidat ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>Quels sont les canaux de recrutement les plus efficaces pour mon secteur ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>Comment optimiser mon processus d'onboarding pour les nouveaux employés ?</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Avantages de l'Agent Recrutement</h3>
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
                <span>Réduction significative du temps consacré au tri des candidatures</span>
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
                <span>Amélioration de la qualité des candidats présélectionnés grâce à une analyse objective</span>
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
                <span>Création d'offres d'emploi plus attractives et adaptées aux attentes du marché</span>
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
                <span>Processus de recrutement plus équitable et centré sur les compétences</span>
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
                <span>Conseils personnalisés basés sur les meilleures pratiques RH et l'évolution du marché du travail</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 border border-pink-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Prêt à révolutionner votre processus de recrutement ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-center">
              Commencez dès maintenant à attirer et sélectionner les meilleurs talents avec notre Agent Recrutement spécialisé.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-medium transition-all duration-200 text-center"
              >
                Utiliser l'Agent Recrutement
              </Link>

              <Link
                href="/pricing"
                className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-200 text-center"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 w-64 h-64 bg-pink-600 rounded-full filter blur-3xl opacity-20 -mr-20 -mb-20"></div>
          <div className="absolute left-1/2 top-0 w-40 h-40 bg-purple-600 rounded-full filter blur-3xl opacity-20 -ml-20 -mt-20"></div>
        </div>
      </section>
    </div>
  );
}