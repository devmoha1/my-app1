import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos | Dakar Jobs',
  description: 'En savoir plus sur Dakar Jobs et notre mission',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          À propos de Dakar Jobs
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          La plateforme de référence pour les offres d'emploi à Dakar et au Sénégal
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-12 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Notre mission
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Connecter les talents sénégalais avec les meilleures opportunités
          professionnelles. Nous croyons que chacun mérite une chance de trouver un
          emploi qui correspond à ses aspirations et à ses compétences. Notre plateforme
          facilite cette connexion en offrant une expérience fluide et intuitive.
        </p>
      </div>

      {/* Values */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          {
            title: 'Accessibilité',
            description: 'Une plateforme gratuite et accessible à tous',
          },
          {
            title: 'Transparence',
            description: 'Des offres d\'emploi vérifiées et authentiques',
          },
          {
            title: 'Innovation',
            description:
              'Des technologies modernes pour une meilleure expérience',
          },
        ].map((value, i) => (
          <div
            key={i}
            className="bg-white dark:bg-slate-800 rounded-lg shadow p-8 text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {value.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Notre équipe
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-8">
          Une équipe passionnée et dévouée travaille chaque jour pour améliorer votre
          expérience sur Dakar Jobs.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {['Fondateur', 'CTO', 'Directeur RH', 'Designer'].map((role, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4"></div>
              <p className="font-semibold text-gray-900 dark:text-white">
                Nom {i + 1}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
