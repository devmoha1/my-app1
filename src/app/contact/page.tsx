import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Dakar Jobs',
  description: 'Contactez-nous pour toute question ou suggestion',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Nous contacter
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Nous serions heureux de vous aider
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Envoyez-nous un message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nom
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Sujet
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="Sujet du message"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="Votre message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold transition"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Informations de contact
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Email
                </p>
                <p className="text-gray-900 dark:text-white">
                  info@dakarcjobs.sn
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Téléphone
                </p>
                <p className="text-gray-900 dark:text-white">
                  +221 33 824 0101
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Adresse
                </p>
                <p className="text-gray-900 dark:text-white">
                  Dakar, Sénégal
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-600 text-white rounded-lg shadow p-8">
            <h3 className="text-xl font-bold mb-4">Horaires</h3>
            <div className="space-y-2 text-primary-100">
              <p>Lundi - Vendredi: 08:00 - 18:00</p>
              <p>Samedi: 09:00 - 14:00</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
