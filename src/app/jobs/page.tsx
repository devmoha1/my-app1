import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offres d\'emploi | Dakar Jobs',
  description: 'Découvrez toutes les offres d\'emploi disponibles à Dakar et au Sénégal',
};

export default function JobsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
              Filtres
            </h3>

            {/* Category Filter */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Domaine
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600">
                <option>Tous les domaines</option>
                <option>Informatique</option>
                <option>Télécom</option>
                <option>Banque</option>
                <option>Marketing</option>
              </select>
            </div>

            {/* Location Filter */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Localisation
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600">
                <option>Toutes les villes</option>
                <option>Dakar</option>
                <option>Pikine</option>
                <option>Guédiawaye</option>
                <option>Rufisque</option>
                <option>Thiès</option>
              </select>
            </div>

            {/* Contract Type Filter */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Type de contrat
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600">
                <option>Tous</option>
                <option>CDI</option>
                <option>CDD</option>
                <option>Stage</option>
                <option>Freelance</option>
              </select>
            </div>

            {/* Salary Range */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Salaire min (FCFA)
              </label>
              <input
                type="number"
                placeholder="Ex: 500000"
                className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>

            <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition">
              Appliquer les filtres
            </button>
          </div>
        </div>

        {/* Jobs List */}
        <div className="md:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Toutes les offres
            </h2>
            <select className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600">
              <option>Les plus récentes</option>
              <option>Les plus pertinentes</option>
              <option>Salaire décroissant</option>
              <option>Salaire croissant</option>
            </select>
          </div>

          {/* Placeholder for job cards */}
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 animate-pulse"
              >
                <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
