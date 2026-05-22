'use client';

import React from 'react';
import Link from 'next/link';
import { Job } from '@/types';
import { MapPin, Briefcase, Clock, Heart } from 'lucide-react';
import { formatSalary, truncate } from '@/lib/utils';

interface JobCardProps {
  job: Job;
  isSaved?: boolean;
  onSave?: (jobId: string) => void;
}

export function JobCard({ job, isSaved = false, onSave }: JobCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow hover:shadow-lg transition border border-gray-200 dark:border-slate-700 p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            <Link
              href={`/jobs/${job.slug}`}
              className="hover:text-primary-600 dark:hover:text-primary-400"
            >
              {job.title}
            </Link>
          </h3>
          {job.company && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {job.company.name}
            </p>
          )}
        </div>
        {onSave && (
          <button
            onClick={() => onSave(job.id)}
            className={`p-2 rounded-full transition ${
              isSaved
                ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300'
                : 'bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-gray-400 hover:bg-gray-200'
            }`}
          >
            <Heart className="w-5 h-5" fill={isSaved ? 'currentColor' : 'none'} />
          </button>
        )}
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        {truncate(job.description, 150)}
      </p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          {job.location}
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Briefcase className="w-4 h-4 mr-2 flex-shrink-0" />
          {job.contractType}
        </div>
        {job.salary && (
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
            {formatSalary(job.salary)}
            {job.salaryMax && ` - ${formatSalary(job.salaryMax)}`}
          </div>
        )}
      </div>

      <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-slate-700">
        <Link
          href={`/jobs/${job.slug}`}
          className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium text-center text-sm transition"
        >
          Voir l'offre
        </Link>
        <button className="flex-1 px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 dark:hover:bg-slate-700 font-medium text-sm transition dark:text-primary-400 dark:border-primary-400">
          Postuler
        </button>
      </div>
    </div>
  );
}
