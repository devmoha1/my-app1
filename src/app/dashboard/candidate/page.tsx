'use client';

import React from 'react';
import { Briefcase, Heart, Clock, CheckCircle } from 'lucide-react';

export default function CandidateDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Tableau de bord candidat
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Gérez vos candidatures et suivez votre recherche d'emploi
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Candidatures
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                12
              </p>
            </div>
            <Briefcase className="w-12 h-12 text-primary-600 opacity-20" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Offres sauvegardées
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                8
              </p>
            </div>
            <Heart className="w-12 h-12 text-red-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                En attente
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                5
              </p>
            </div>
            <Clock className="w-12 h-12 text-orange-500 opacity-20" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Acceptées
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                2
              </p>
            </div>
            <CheckCircle className="w-12 h-12 text-green-500 opacity-20" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Recent Applications */}
        <div className="md:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Candidatures récentes
            </h2>

            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between p-4 border border-gray-200 dark:border-slate-700 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Développeur Full Stack
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Tech Solutions Dakar
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      Il y a 2 jours
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs font-medium">
                      En attente
                    </span>
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
                Parcourir les offres
              </button>
              <button className="w-full px-4 py-2 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-slate-700 font-medium transition">
                Mettre à jour CV
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 font-medium transition">
                Éditer profil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
