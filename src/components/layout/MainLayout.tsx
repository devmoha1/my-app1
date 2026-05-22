'use client';

import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ToastProvider } from '@/components/ui/ToastProvider';

interface LayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-slate-950">
      <ToastProvider />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
