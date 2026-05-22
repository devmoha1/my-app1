import React from 'react';
import { Metadata } from 'next';
import { MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Détail de l\'offre | Dakar Jobs',
};

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Job Details */}
        <div className="md:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-8">
            {/* Job Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Développeur Senior Full Stack
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Tech Solutions Dakar
              </p>
            </div>

            {/* Job Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-gray-50 dark:bg-slate-700 rounded-lg">
              <div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Localisation</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">Dakar</p>
              </div>
              <div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span className="text-sm">Type</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">CDI</p>
              </div>
              <div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span className="text-sm">Salaire</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  1.5M - 2.5M FCFA
                </p>
              </div>
              <div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Publiée</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Il y a 2j
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                À propos du poste
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Nous recherchons un développeur Senior Full Stack passionné par les technologies
                modernes. Vous travaillerez sur nos projets innovants aux côtés d'une équipe
                talentueuse et motivée.
              </p>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Profil recherché
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>3+ ans d'expérience en développement web</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Maîtrise de React et Node.js</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Expérience avec PostgreSQL</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Bonne maîtrise de Git</span>
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Avantages
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3 mt-1">★</span>
                  <span>Salaire compétitif</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3 mt-1">★</span>
                  <span>Télétravail possible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3 mt-1">★</span>
                  <span>Formation continue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3 mt-1">★</span>
                  <span>Assurance santé</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 sticky top-20">
            <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold transition mb-3">
              Postuler maintenant
            </button>
            <button className="w-full px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-slate-700 font-semibold transition">
              Sauvegarder l'offre
            </button>

            {/* Company Card */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                À propos de l'entreprise
              </h3>
              <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Tech Solutions Dakar
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Leader en solutions technologiques au Sénégal depuis 5 ans.
                </p>
              </div>
              <a
                href="#"
                className="text-primary-600 dark:text-primary-400 hover:underline font-medium text-sm"
              >
                Voir l'entreprise →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
