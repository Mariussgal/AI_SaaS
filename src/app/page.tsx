'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const { isSignedIn, isLoaded } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white bg-grid-pattern">
      {/* Hero Section */}
      <section className="relative px-4 pt-24 pb-16 md:px-6 lg:pt-32 lg:pb-24 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <div className="flex justify-center mb-4">
            <div className="bg-opacity-50 rounded-full px-3 py-1 text-sm inline-flex items-center border border-indigo-500/30 bg-indigo-900/20">
              <span className="mr-1">🚀</span>
              <span>+200 utilisateurs ont déjà rejoint la plateforme</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Accédez à des agents IA <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              à la demande
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Notre plateforme SaaS met à votre disposition une série d'agents IA spécialisés pour
            transformer vos idées en projets concrets et rentables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={isSignedIn ? '/dashboard' : '/sign-up'}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium transition-all duration-200 transform hover:scale-105"
            >
              {isSignedIn ? 'Accéder au Dashboard' : 'Je réserve ma place'}
            </Link>

            <Link
              href="/pricing"
              className="px-8 py-3 rounded-full border border-indigo-500/50 hover:bg-indigo-900/20 transition-all duration-200"
            >
              Voir les tarifs
            </Link>
          </div>

          <div className="flex justify-center gap-6 mt-8 text-sm text-gray-400">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Résultats concrets</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Accessible sans compétences techniques</span>
            </div>
          </div>
        </div>

        {/* Gradient Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-indigo-600/20 blur-[100px] rounded-full"></div>
      </section>

      {/* Why Now Section */}
      <section className="px-4 py-16 md:px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Pourquoi c'est le bon moment pour s'y mettre ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">IA en plein essor</h3>
            <p className="text-gray-300">
              Profitez des avancées technologiques pour automatiser vos tâches et rester compétitif.
            </p>
          </div>

          <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl">💡</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Aucun code requis</h3>
            <p className="text-gray-300">
              Nos agents sont accessibles sans compétences techniques particulières.
            </p>
          </div>

          <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Résultats rapides</h3>
            <p className="text-gray-300">
              Obtenez des résultats concrets dès les premiers jours d'utilisation.
            </p>
          </div>
        </div>
      </section>

      {/* Agents Preview */}
      <section className="px-4 py-16 md:px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Nos agents IA spécialisés
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Découvrez notre sélection d'agents IA conçus pour vous aider dans différents domaines
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Agent Juridque',
              description:
                ' simplifie la rédaction de documents légaux pour les entreprises. Spécialisée dans les contrats, conditions générales et politiques internes, elle garantit leur conformité aux régulations en vigueur.',
              icon: '✍️',
            },
            {
              name: 'Agent Analyse',
              description:
                'Analysez vos données et obtenez des insights précieux pour votre entreprise.',
              icon: '📊',
            },
            {
              name: 'Agent Marketing',
              description: 'Créez des campagnes marketing efficaces et optimisez vos conversions.',
              icon: '🚀',
            },
            {
              name: 'Agent Support',
              description: 'Automatisez votre service client et répondez rapidement aux questions.',
              icon: '💬',
            },
            {
              name: 'Agent Recherche',
              description: "Effectuez des recherches approfondies sur n'importe quel sujet.",
              icon: '🔍',
            },
            {
              name: 'Agent Recrutement',
              description: 'Votre nouveau assistant RH ! Grâce à un processus de recrutement automatisé et intelligent, il trie efficacement les candidatures, vous fournit des conseils et réduit vos délais de recrutement.”',
              icon: '🛠️',
            },
          ].map((agent, index) => (
            <div
              key={index}
              className="bg-indigo-900/5 border border-indigo-500/10 hover:border-indigo-500/30 rounded-xl p-6 transition-all duration-300 hover:bg-indigo-900/10"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{agent.icon}</span>
                <h3 className="text-xl font-semibold">{agent.name}</h3>
              </div>
              <p className="text-gray-300">{agent.description}</p>

              <div className="mt-4 pt-4 border-t border-indigo-500/10">
                <Link
                  href="/agents"
                  className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center"
                >
                  <span>En savoir plus</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/agents"
            className="px-6 py-3 rounded-full border border-indigo-500/50 hover:bg-indigo-900/20 inline-flex items-center transition-all duration-200"
          >
            <span>Voir tous les agents</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:px-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à commencer votre aventure avec l'IA ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl">
              Rejoignez notre communauté et accédez à des agents IA performants pour concrétiser vos
              projets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={isSignedIn ? '/dashboard' : '/sign-up'}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium transition-all duration-200 text-center"
              >
                {isSignedIn ? 'Accéder au Dashboard' : 'Commencer maintenant'}
              </Link>

              <Link
                href="/pricing"
                className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-200 text-center"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>

          {/* Background Effect */}
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-20 -mr-20 -mb-20"></div>
          <div className="absolute left-1/2 top-0 w-40 h-40 bg-purple-600 rounded-full filter blur-3xl opacity-20 -ml-20 -mt-20"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 md:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#111122] rounded-xl p-6 border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300">
            <div className="w-16 h-16 bg-[#1D1D2D] rounded-lg flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-8 h-8 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center text-white mb-3">CONFIDENTIALITÉ</h3>
            <p className="text-gray-300 text-center">
              Nous prenons votre vie privée très au sérieux. Découvrez-en plus sur notre politique
              de traitement des données.
            </p>
          </div>

          <div className="bg-[#111122] rounded-xl p-6 border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300">
            <div className="w-16 h-16 bg-[#1D1D2D] rounded-lg flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-8 h-8 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center text-white mb-3">SUPPORT</h3>
            <p className="text-gray-300 text-center">
              Notre équipe travaille 7/7 et peut répondre à toutes vos questions par téléphone ou
              par email à contact@exemple.com.
            </p>
          </div>

          <div className="bg-[#111122] rounded-xl p-6 border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300">
            <div className="w-16 h-16 bg-[#1D1D2D] rounded-lg flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-8 h-8 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center text-white mb-3">
              MISES À JOUR RÉGULIÈRES
            </h3>
            <p className="text-gray-300 text-center">
              Nous publions régulièrement des mises à jour pour maximiser les capacités de vos
              assistants.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
