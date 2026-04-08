import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const authService = {
  signUp: async (email: string, password: string, userData: any) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData,
      },
    });
    return { data, error };
  },

  signIn: async (email: string, password: string) => {
    return supabase.auth.signInWithPassword({ email, password });
  },

  signOut: async () => {
    return supabase.auth.signOut();
  },

  getCurrentUser: async () => {
    const { data } = await supabase.auth.getSession();
    return data.session?.user;
  },
};

export const appointmentService = {
  createAppointment: async (appointment: any) => {
    return supabase
      .from('appointments')
      .insert([appointment])
      .select()
      .single();
  },

  getAppointments: async (userId: string, limit = 50) => {
    return supabase
      .from('appointments')
      .select('*')
      .eq('user_id', userId)
      .order('scheduled_at', { ascending: true })
      .limit(limit);
  },

  getTodayAppointments: async (userId: string) => {
    const today = new Date().toISOString().split('T')[0];
    return supabase
      .from('appointments')
      .select('*')
      .eq('user_id', userId)
      .gte('scheduled_at', `${today}T00:00:00`)
      .lt('scheduled_at', `${today}T23:59:59`)
      .order('scheduled_at', { ascending: true });
  },

  updateAppointment: async (appointmentId: string, updates: any) => {
    return supabase
      .from('appointments')
      .update(updates)
      .eq('id', appointmentId)
      .select()
      .single();
  },

  cancelAppointment: async (appointmentId: string) => {
    return supabase
      .from('appointments')
      .update({ status: 'cancelled' })
      .eq('id', appointmentId);
  },
};

export const serviceService = {
  createService: async (userId: string, service: any) => {
    return supabase
      .from('services')
      .insert([{ user_id: userId, ...service }])
      .select()
      .single();
  },

  getUserServices: async (userId: string) => {
    return supabase
      .from('services')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
  },

  deleteService: async (serviceId: string) => {
    return supabase.from('services').delete().eq('id', serviceId);
  },
};

export const userService = {
  getUserProfile: async (userId: string) => {
    return supabase.from('users').select('*').eq('id', userId).single();
  },

  updateUserProfile: async (userId: string, updates: any) => {
    return supabase
      .from('users')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();
  },

  getUserByBookingUrl: async (bookingUrl: string) => {
    return supabase
      .from('users')
      .select('*')
      .eq('booking_url', bookingUrl)
      .single();
  },
};

export const clientService = {
  createClient: async (userId: string, client: any) => {
    return supabase
      .from('clients')
      .insert([{ user_id: userId, ...client }])
      .select()
      .single();
  },

  getOrCreateClient: async (userId: string, email: string, name: string, phone: string) => {
    const { data: existing } = await supabase
      .from('clients')
      .select('*')
      .eq('user_id', userId)
      .eq('email', email)
      .single();

    if (existing) return existing;

    const { data: newClient } = await supabase
      .from('clients')
      .insert([{ user_id: userId, email, name, phone }])
      .select()
      .single();

    return newClient;
  },

  getClientAppointments: async (clientId: string) => {
    return supabase
      .from('appointments')
      .select('*')
      .eq('client_id', clientId)
      .order('scheduled_at', { ascending: false });
  },
};

export const timeSlotService = {
  createTimeSlot: async (userId: string, slot: any) => {
    return supabase
      .from('time_slots')
      .insert([{ user_id: userId, ...slot }])
      .select()
      .single();
  },

  getUserTimeSlots: async (userId: string) => {
    return supabase.from('time_slots').select('*').eq('user_id', userId);
  },
};
