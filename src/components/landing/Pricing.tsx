'use client';

import { PricingPlan } from '@/types';
import Button from '@/components/common/Button';

const plans: PricingPlan[] = [
  {
    id: 'free',
    nameKey: 'Gratuit',
    priceMonth: 0,
    features: ['1 service', '10 rendez-vous/mois', 'Rappels SMS/Email', 'Support email'],
  },
  {
    id: 'solo',
    nameKey: 'Solo',
    priceMonth: 10,
    features: ['Services illimités', '100 rendez-vous/mois', 'Rappels avancés', 'Lien personnel'],
  },
  {
    id: 'novice',
    nameKey: 'Novice',
    priceMonth: 25,
    features: ['Services illimités', 'Rendez-vous illimités', 'Dépôts obligatoires', 'Analytics'],
  },
  {
    id: 'plus',
    nameKey: 'Plus',
    priceMonth: 40,
    features: ['Tout de Novice', 'Intégration Stripe', 'Modèles SMS/Email', 'Chat support'],
  },
  {
    id: 'pro',
    nameKey: 'Pro',
    priceMonth: 55,
    features: ['Tout de Plus', 'API access', 'Support prioritaire', 'Consultation'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-16 bg-accent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Choisir ton plan</h2>

        <div className="grid md:grid-cols-5 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 rounded-lg ${
                plan.id === 'plus'
                  ? 'bg-black text-white ring-2 ring-highlight scale-105'
                  : 'bg-white text-black'
              }`}
            >
              <h3 className="font-bold text-xl mb-2">{plan.nameKey}</h3>
              <div className="text-3xl font-bold mb-4">
                ${plan.priceMonth}
                <span className="text-lg">/mois</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.id === 'plus' ? 'secondary' : 'primary'}
                className="w-full"
              >
                Commencer
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
