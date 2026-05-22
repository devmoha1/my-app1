import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Dakar Jobs',
  description: 'Conseils carrière, tendances emploi et guides de Dakar Jobs',
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Conseils carrière, tendances emploi et guides pratiques
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'Comment rédiger un bon CV',
            excerpt:
              'Découvrez les bonnes pratiques pour un CV attractif et efficace',
            date: '21 mai 2026',
            author: 'Admin',
          },
          {
            title: 'Tendances IT au Sénégal 2026',
            excerpt: 'Les technologies et compétences les plus demandées cette année',
            date: '19 mai 2026',
            author: 'Admin',
          },
          {
            title: 'Guide complet de l\'entretien',
            excerpt:
              'Préparez-vous au mieux pour votre entretien d\'embauche',
            date: '15 mai 2026',
            author: 'Admin',
          },
        ].map((post, i) => (
          <article
            key={i}
            className="bg-white dark:bg-slate-800 rounded-lg shadow hover:shadow-lg transition p-6"
          >
            <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg mb-4"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{post.date}</span>
              <span>Par {post.author}</span>
            </div>
            <a
              href="#"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium mt-4 inline-block"
            >
              Lire l'article →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
