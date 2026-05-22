import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entreprises | Dakar Jobs',
  description: 'Découvrez les meilleurs employeurs à Dakar et au Sénégal',
};

export default function CompaniesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Entreprises
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Explorez les meilleurs employeurs à Dakar et au Sénégal
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-slate-800 rounded-lg shadow hover:shadow-lg transition p-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">TSD</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Tech Solutions Dakar
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Leader en solutions technologiques au Sénégal
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">12 offres</span>
              <a
                href="#"
                className="text-primary-600 dark:text-primary-400 hover:underline font-medium text-sm"
              >
                Voir →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
