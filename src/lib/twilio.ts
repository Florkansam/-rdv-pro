import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const fromNumber = process.env.TWILIO_PHONE_NUMBER!;

const twilioClient = twilio(accountSid, authToken);

export const smsService = {
  sendReminder: async (phoneNumber: string, message: string) => {
    try {
      const result = await twilioClient.messages.create({
        body: message,
        from: fromNumber,
        to: phoneNumber,
      });
      return { success: true, messageId: result.sid };
    } catch (error) {
      console.error('SMS send failed:', error);
      return { success: false, error };
    }
  },

  sendAppointmentReminder: async (
    phoneNumber: string,
    clientName: string,
    serviceTitle: string,
    time: string,
    language: 'fr' | 'en'
  ) => {
    const messages = {
      fr: `Bonjour ${clientName}! Rappel: votre rendez-vous pour ${serviceTitle} est demain à ${time}. À bientôt!`,
      en: `Hi ${clientName}! Reminder: your appointment for ${serviceTitle} is tomorrow at ${time}. See you soon!`,
    };

    return smsService.sendReminder(phoneNumber, messages[language]);
  },
};
