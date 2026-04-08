export type UserPlan = 'free' | 'solo' | 'novice' | 'plus' | 'pro';

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  business_name?: string;
  booking_url: string;
  language: 'fr' | 'en' | 'bilingual';
  plan: UserPlan;
  stripe_connected: boolean;
  created_at: string;
}

export interface Service {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  price: number;
  duration: number;
  deposit: number;
  created_at: string;
}

export interface Appointment {
  id: string;
  user_id: string;
  service_id: string;
  client_id?: string;
  client_name: string;
  client_email: string;
  client_phone: string;
  scheduled_at: string;
  duration: number;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  deposit_paid: boolean;
  deposit_amount: number;
  payment_intent_id?: string;
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: string;
  user_id: string;
  name: string;
  email: string;
  phone: string;
  no_show_count: number;
  last_appointment?: string;
  created_at: string;
}

export interface TimeSlot {
  id: string;
  user_id: string;
  day: number;
  start_time: string;
  end_time: string;
  is_break: boolean;
}

export interface PricingPlan {
  id: UserPlan;
  nameKey: string;
  priceMonth: number;
  features: string[];
}
