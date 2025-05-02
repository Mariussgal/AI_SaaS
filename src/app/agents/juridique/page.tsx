import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Scale, FileText, ShieldCheck, BookOpen, ArrowUpRight } from 'lucide-react';

export default function JuridiqueAgentPage() {
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
              <div className="w-16 h-16 bg-orange-900/30 rounded-xl flex items-center justify-center mr-4">
                <Scale className="h-8 w-8 text-orange-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Agent Juridique</h1>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Votre conseiller juridique virtuel pour accompagner votre entreprise au quotidien.
            </p>

            <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Découvrez l'Agent Juridique</h2>
              <p className="text-gray-300 mb-4">
                Notre Agent Juridique est conçu pour vous aider à naviguer dans le monde complexe du droit des affaires.
                Grâce à sa connaissance approfondie des textes juridiques et des réglementations en vigueur, il peut
                vous conseiller sur de nombreux aspects légaux liés à votre entreprise.
              </p>
              <p className="text-gray-300">
                Que vous ayez besoin de rédiger un contrat, de comprendre une réglementation spécifique ou
                d'évaluer les risques juridiques d'une décision, notre Agent Juridique vous fournit des
                informations précises et des recommandations adaptées à votre situation. Il ne remplace pas
                un avocat, mais constitue un précieux outil d'aide à la décision et d'information juridique.
              </p>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-gradient-to-br from-orange-900/40 to-amber-900/40 border border-orange-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Demandez à l'Agent Juridique</h3>
              <p className="text-gray-300 mb-6">
                Posez vos questions juridiques et obtenez des réponses et conseils instantanément.
              </p>
              <Link
                href="/dashboard"
                className="w-full py-3 px-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
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
          Ce que l'Agent Juridique peut faire pour vous
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-orange-500/30">
            <div className="w-12 h-12 bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Rédaction et analyse de documents</h3>
            <p className="text-gray-300">
              Obtenez de l'aide pour la rédaction et l'analyse de vos documents juridiques : contrats, CGV, mentions légales, etc.
            </p>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-orange-500/30">
            <div className="w-12 h-12 bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="h-6 w-6 text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Conformité réglementaire</h3>
            <p className="text-gray-300">
              Assurez-vous que votre entreprise respecte les réglementations en vigueur (RGPD, droit du travail, droit des sociétés, etc.).
            </p>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-orange-500/30">
            <div className="w-12 h-12 bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Veille juridique</h3>
            <p className="text-gray-300">
              Restez informé des évolutions légales et réglementaires qui pourraient impacter votre activité.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Exemples de questions à poser</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Quelles sont les mentions obligatoires pour des CGV en ligne ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Comment rédiger un contrat de prestation de services ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Quelles sont mes obligations en matière de RGPD ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Comment protéger juridiquement ma propriété intellectuelle ?</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Quels sont les risques juridiques liés au télétravail ?</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Avantages de l'Agent Juridique</h3>
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
                <span>Réduction des risques juridiques grâce à des conseils préventifs</span>
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
                <span>Gain de temps et d'argent par rapport à la consultation d'un avocat pour les questions courantes</span>
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
                <span>Assistance pour la rédaction de documents juridiques conformes</span>
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
                <span>Information juridique à jour et adaptée à votre secteur d'activité</span>
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
                <span>Anticipation des problèmes juridiques potentiels avant qu'ils ne surviennent</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 md:px-6 max-w-6xl mx-auto">
        <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <svg
              className="h-5 w-5 text-yellow-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Note importante
          </h3>
          <p className="text-gray-300">
            L'Agent Juridique fournit des informations et des conseils généraux à titre indicatif uniquement.
            Ces informations ne constituent pas un avis juridique professionnel et ne remplacent en aucun cas
            la consultation d'un avocat ou d'un conseiller juridique qualifié. Pour toute question complexe
            ou spécifique, nous vous recommandons vivement de consulter un professionnel du droit.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-orange-900/40 to-amber-900/40 border border-orange-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Prêt à sécuriser juridiquement votre entreprise ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-center">
              Commencez dès maintenant à bénéficier des conseils juridiques de notre Agent Juridique spécialisé.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-medium transition-all duration-200 text-center"
              >
                Utiliser l'Agent Juridique
              </Link>

              <Link
                href="/pricing"
                className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-200 text-center"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 w-64 h-64 bg-orange-600 rounded-full filter blur-3xl opacity-20 -mr-20 -mb-20"></div>
          <div className="absolute left-1/2 top-0 w-40 h-40 bg-amber-600 rounded-full filter blur-3xl opacity-20 -ml-20 -mt-20"></div>
        </div>
      </section>
    </div>
  );
}