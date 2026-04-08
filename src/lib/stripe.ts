import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export const stripeService = {
  createPaymentIntent: async (amount: number, metadata: Record<string, any>) => {
    return stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: 'cad',
      metadata,
    });
  },

  confirmPaymentIntent: async (intentId: string) => {
    return stripe.paymentIntents.retrieve(intentId);
  },

  getConnectAccount: async (accountId: string) => {
    return stripe.accounts.retrieve(accountId);
  },
};
