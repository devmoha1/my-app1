'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, Bell, User, LogOut, Briefcase } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    // TODO: Implement logout logic
    router.push('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Briefcase className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white hidden sm:inline">
              Dakar Jobs
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/jobs"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
            >
              Offres
            </Link>
            <Link
              href="/companies"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
            >
              Entreprises
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
            >
              Blog
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800">
              <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800">
              <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={handleLogout}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              <LogOut className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <Link
              href="/auth/signup"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
            >
              Inscription
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/jobs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
            >
              Offres
            </Link>
            <Link
              href="/companies"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
            >
              Entreprises
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
            >
              Blog
            </Link>
            <Link
              href="/auth/signup"
              className="block px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
            >
              Inscription
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
