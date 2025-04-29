import React from 'react';
import Link from 'next/link';

export default function HelpPage() {
  const faqs = [
    {
      question: "Qu'est-ce que AI SaaS?",
      answer: "Notre plateforme AI SaaS fournit un accès à des agents IA spécialisés qui peuvent vous aider dans différentes tâches. Ces agents sont alimentés par des modèles d'IA avancés et peuvent vous assister dans la génération de contenu, l'analyse de données et bien plus encore."
    },
    {
      question: "Comment commencer?",
      answer: "Pour commencer, créez simplement un compte, parcourez nos agents disponibles et choisissez ceux qui correspondent à vos besoins. Certains agents nécessitent un abonnement premium, que vous pouvez souscrire sur notre page de tarification."
    },

    {
      question: "Comment fonctionnent les abonnements?",
      answer: "Les abonnements sont facturés mensuellement ou annuellement. Vous pouvez annuler à tout moment depuis votre tableau de bord. Après l'annulation, vous conserverez l'accès jusqu'à la fin de votre période de facturation."
    },
    {
      question: "Puis-je modifier ou annuler mon abonnement?",
      answer: "Oui, vous pouvez gérer votre abonnement depuis votre tableau de bord à tout moment. Les modifications ou annulations prendront effet à la fin de votre période de facturation en cours."
    },
    {
      question: "Comment utiliser un agent IA?",
      answer: "Une fois que vous avez activé un agent, vous pouvez y accéder depuis votre tableau de bord ou la page des agents. Chaque agent dispose d'une interface dédiée où vous pouvez interagir avec lui en fonction de ses capacités spécifiques."
    },
    {
      question: "Mes données sont-elles sécurisées?",
      answer: "Oui, nous prenons la sécurité des données très au sérieux. Toutes les communications avec nos agents sont cryptées, et nous ne stockons pas vos informations sensibles ou le contenu que vous traitez avec nos agents au-delà de ce qui est nécessaire pour fournir le service."
    },
    {
      question: "Quels modes de paiement acceptez-vous?",
      answer: "Nous acceptons toutes les principales cartes de crédit via notre processeur de paiement sécurisé, Stripe."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white bg-grid-pattern">
      {/* Hero Section */}
      <section className="relative px-4 pt-36 pb-16 md:px-6 lg:pt-44 lg:pb-24 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Centre d'<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">aide</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Trouvez rapidement des réponses à vos questions et découvrez comment tirer le meilleur parti de nos agents IA.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#faq" className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium transition-all duration-200 transform hover:scale-105">
              Questions fréquentes
            </a>
            
            <a href="#getting-started" className="px-8 py-3 rounded-full border border-indigo-500/50 hover:bg-indigo-900/20 transition-all duration-200">
              Guide de démarrage
            </a>
          </div>
        </div>
        
        {/* Gradient Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-indigo-600/20 blur-[100px] rounded-full"></div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="px-4 py-16 md:px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Guide de démarrage
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Créez votre compte</h3>
              <p className="text-gray-300 mb-4">
                Commencez par créer un compte sur notre plateforme pour accéder à tous nos services et agents IA.
              </p>
              
              <Link href="/sign-up" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                <span>S'inscrire</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-indigo-600/10 rounded-full blur-xl"></div>
          </div>
          
          <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Explorez nos agents</h3>
              <p className="text-gray-300 mb-4">
                Découvrez notre catalogue d'agents IA spécialisés conçus pour différentes tâches et besoins.
              </p>
              
              <Link href="/agents" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                <span>Voir les agents</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-purple-600/10 rounded-full blur-xl"></div>
          </div>
          
          <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Choisissez votre abonnement</h3>
              <p className="text-gray-300 mb-4">
                Sélectionnez le plan qui correspond le mieux à vos besoins parmi nos offres d'abonnement.
              </p>
              
              <Link href="/pricing" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                <span>Voir les tarifs</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-indigo-600/10 rounded-full blur-xl"></div>
          </div>
          
          <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Utilisez les agents IA</h3>
              <p className="text-gray-300 mb-4">
                Accédez à votre tableau de bord pour activer et utiliser les agents IA selon vos besoins.
              </p>
              
              <Link href="/dashboard" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                <span>Accéder au dashboard</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-purple-600/10 rounded-full blur-xl"></div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-3xl bg-indigo-900/20 border border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-center">Vidéo de présentation</h3>
            <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-16 h-16 text-white opacity-70" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-300 text-center">
              Regardez notre vidéo de démonstration pour comprendre rapidement comment utiliser nos agents IA
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-4 py-16 md:px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Questions fréquemment posées
        </h2>
        
        <div className="grid grid-cols-1 gap-6 mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">Vous n'avez pas trouvé de réponse à votre question?</h3>
          <p className="text-gray-300 mb-6">
            Contactez notre équipe de support disponible 7j/7 pour vous aider
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@exemple.com"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Envoyer un email</span>
            </a>
            
            <a 
              href="#"
              className="px-6 py-3 rounded-full border border-indigo-500/50 hover:bg-indigo-900/20 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span>Chat en direct</span>
            </a>
          </div>
        </div>
      </section>

    
    </div>
  );
}