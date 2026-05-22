'use client';

import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorProps {
  title: string;
  message: string;
  retry?: () => void;
}

export function ErrorComponent({ title, message, retry }: ErrorProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 flex gap-4">
        <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-semibold text-red-900 dark:text-red-400">{title}</h3>
          <p className="text-sm text-red-700 dark:text-red-300 mt-1">{message}</p>
          {retry && (
            <button
              onClick={retry}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium transition"
            >
              Réessayer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
