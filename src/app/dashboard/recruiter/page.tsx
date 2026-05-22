'use client';

import React from 'react';
import { Briefcase, Users, Eye, TrendingUp } from 'lucide-react';

export default function RecruiterDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Tableau de bord recruteur
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Gérez vos offres d'emploi et candidatures
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Offres publiées
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                5
              </p>
            </div>
            <Briefcase className="w-12 h-12 text-primary-600 opacity-20" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Candidatures reçues
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                47
              </p>
            </div>
            <Users className="w-12 h-12 text-blue-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Vues totales
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                234
              </p>
            </div>
            <Eye className="w-12 h-12 text-purple-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Taux de conversion
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                12%
              </p>
            </div>
            <TrendingUp className="w-12 h-12 text-green-500 opacity-20" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* My Job Postings */}
        <div className="md:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Mes offres d'emploi
            </h2>

            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between p-4 border border-gray-200 dark:border-slate-700 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Développeur Full Stack
                    </h3>
                    <div className="flex gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <span>12 candidatures</span>
                      <span>234 vues</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 text-sm font-medium transition">
                      Éditer
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium transition">
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 sticky top-20">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
              Actions rapides
            </h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition">
                Publier une offre
              </button>
              <button className="w-full px-4 py-2 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-slate-700 font-medium transition">
                Voir candidatures
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 font-medium transition">
                Gérer l'entreprise
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
