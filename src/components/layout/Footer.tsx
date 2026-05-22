'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Dakar Jobs</h3>
            <p className="text-sm mb-4">
              La plateforme de référence pour les offres d'emploi à Dakar et au
              Sénégal.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/jobs" className="hover:text-white transition">
                  Offres d'emploi
                </Link>
              </li>
              <li>
                <Link href="/companies" className="hover:text-white transition">
                  Entreprises
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* For Candidates */}
          <div>
            <h4 className="text-white font-semibold mb-4">Candidats</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/auth/signup" className="hover:text-white transition">
                  Créer un compte
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition">
                  Tableau de bord
                </Link>
              </li>
              <li>
                <Link href="/saved-jobs" className="hover:text-white transition">
                  Offres sauvegardées
                </Link>
              </li>
              <li>
                <Link
                  href="/applications"
                  className="hover:text-white transition"
                >
                  Mes candidatures
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@dakarcjobs.sn"
                  className="hover:text-white transition"
                >
                  info@dakarcjobs.sn
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:+221338240101" className="hover:text-white transition">
                  +221 33 824 0101
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Dakar, Sénégal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {currentYear} Dakar Jobs. Tous les droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <Link href="/privacy" className="hover:text-white transition">
                Confidentialité
              </Link>
              <Link href="/terms" className="hover:text-white transition">
                Conditions d'utilisation
              </Link>
              <Link href="/cookies" className="hover:text-white transition">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
