import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Tableau de bord administrateur
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Gestion de la plateforme
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Utilisateurs', value: '245', icon: '👥' },
          { label: 'Offres', value: '89', icon: '💼' },
          { label: 'Candidatures', value: '1,234', icon: '📝' },
          { label: 'Entreprises', value: '34', icon: '🏢' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-slate-800 rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <span className="text-4xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Manage Users */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Gestion des utilisateurs
          </h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition">
              Voir tous les utilisateurs
            </button>
            <button className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 font-medium transition">
              Suspendre utilisateur
            </button>
            <button className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 font-medium transition">
              Vérifier utilisateurs
            </button>
          </div>
        </div>

        {/* Manage Content */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Gestion du contenu
          </h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition">
              Voir toutes les offres
            </button>
            <button className="w-full px-4 py-2 border border-red-300 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-slate-700 font-medium transition">
              Supprimer annonces frauduleuses
            </button>
            <button className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 font-medium transition">
              Modérer candidatures
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
