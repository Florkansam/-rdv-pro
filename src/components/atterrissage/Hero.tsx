'use client';

import Link from 'next/link';
import Button from '@/components/common/Button';

export default function Hero() {
  return (
    <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-black via-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Stop aux clients qui ne se présentent pas
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Sécurise tes rendez-vous avec dépôts et rappels automatiques
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/signup" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full">
              Essai gratuit 14 jours
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Voir la démo
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 text-white text-sm md:text-base">
          <div>✓ Sans frais de setup</div>
          <div>✓ Connexion en 2 min</div>
          <div>✓ Annulation facile</div>
        </div>
      </div>
    </section>
  );
}
