'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/common/Button';

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        RDV+pro
      </Link>

      <nav className="hidden md:flex gap-6">
        <Link href="#features" className="hover:text-highlight transition">
          Fonctionnalités
        </Link>
        <Link href="#pricing" className="hover:text-highlight transition">
          Tarifs
        </Link>
        <Link href="#testimonials" className="hover:text-highlight transition">
          Témoignages
        </Link>
      </nav>

      <div className="flex gap-4">
        {user ? (
          <Link href="/dashboard">
            <Button variant="secondary" size="sm">
              Dashboard
            </Button>
          </Link>
        ) : (
          <>
            <Link href="/signup">
              <Button variant="secondary" size="sm">
                S'inscrire
              </Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
