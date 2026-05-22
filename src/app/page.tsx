import React from 'react';
import Link from 'next/link';
import { ArrowRight, Search, Briefcase, Users, TrendingUp } from 'lucide-react';
import { CATEGORIES, LOCATIONS } from '@/lib/utils';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trouvez votre emploi idéal à Dakar
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              La plateforme de référence pour les meilleures opportunités professionnelles
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-2 flex items-center gap-2">
                <Search className="w-5 h-5 text-gray-400 ml-3" />
                <input
                  type="text"
                  placeholder="Métier, entreprise, localisation..."
                  className="flex-1 py-3 px-4 text-gray-700 outline-none"
                />
                <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-medium transition">
                  Chercher
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Pourquoi choisir Dakar Jobs ?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: 'Milliers d\'offres',
                description:
                  'Accédez à une large sélection d\'offres d\'emploi mises à jour quotidiennement',
              },
              {
                icon: Users,
                title: 'Les meilleurs recruteurs',
                description:
                  'Travaillez avec les entreprises les plus prestigieuses de Dakar et du Sénégal',
              },
              {
                icon: TrendingUp,
                title: 'Avancez votre carrière',
                description:
                  'Trouvez les opportunités qui correspondent à vos ambitions professionnelles',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-lg shadow p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-lg mb-4">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Explorez par domaine
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            {CATEGORIES.map((category) => (
              <Link
                key={category.value}
                href={`/jobs?category=${category.value}`}
                className="bg-white dark:bg-slate-800 rounded-lg shadow hover:shadow-lg p-6 text-center transition transform hover:scale-105"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {category.label}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Prêt à commencer ?
              </h2>
              <p className="text-primary-100">
                Créez votre compte et accédez à toutes les offres d\'emploi
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/auth/signup"
                className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-primary-50 font-semibold transition flex items-center justify-center gap-2"
              >
                S'inscrire
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/jobs"
                className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-primary-700 font-semibold transition flex items-center justify-center gap-2"
              >
                Voir les offres
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
