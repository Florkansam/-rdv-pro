import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RDV+pro - Arrêtez les no-shows',
  description: 'Plateforme de gestion des rendez-vous avec dépôts obligatoires pour professionnels de la beauté',
  keywords: 'rendez-vous, salon beauté, dépôt, no-show, Québec',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
