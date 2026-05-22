import type { Metadata } from 'next';
import './globals.css';
import { MainLayout } from '@/components/layout/MainLayout';

export const metadata: Metadata = {
  title: 'Dakar Jobs - Plateforme d\'offres d\'emploi',
  description:
    'Découvrez les meilleures offres d\'emploi à Dakar et au Sénégal. Connectez-vous avec les meilleurs recruteurs.',
  keywords: [
    'emploi',
    'dakar',
    'sénégal',
    'jobs',
    'recrutement',
    'carrière',
  ],
  openGraph: {
    title: 'Dakar Jobs',
    description:
      'Plateforme d\'offres d\'emploi à Dakar et au Sénégal',
    type: 'website',
    url: 'https://dakarcjobs.sn',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
