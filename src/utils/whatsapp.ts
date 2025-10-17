const WHATSAPP_PHONE = '919205402295';

export interface RoomBookingData {
  checkIn: string;
  checkOut: string;
  guests: string;
  rooms: string;
  roomType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  specialRequests?: string;
  loyaltyMember?: boolean;
  loyaltyNumber?: string;
}

export interface MeetingBookingData {
  roomId: string;
  roomName: string;
  eventDate: string;
  startTime?: string;
  endTime?: string;
  duration: string;
  attendees: string;
  setup: string;
  eventType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle?: string;
  eventName?: string;
  specialRequests?: string;
  catering: boolean;
  equipment: string[];
  parking: boolean;
  totalCost: number;
}

export const formatRoomBookingMessage = (data: RoomBookingData, bookingRef: string): string => {
  const roomTypeNames: { [key: string]: string } = {
    business: 'Business Room',
    executive: 'Executive Suite',
    conference: 'Conference Suite'
  };

  let message = `🏨 *METRO STAY - ROOM BOOKING REQUEST*\n\n`;
  message += `📋 *Booking Reference:* ${bookingRef}\n\n`;
  message += `📅 *Booking Details:*\n`;
  message += `• Check-in: ${data.checkIn}\n`;
  message += `• Check-out: ${data.checkOut}\n`;
  message += `• Room Type: ${roomTypeNames[data.roomType] || data.roomType}\n`;
  message += `• Number of Rooms: ${data.rooms}\n`;
  message += `• Number of Guests: ${data.guests}\n\n`;

  message += `👤 *Guest Information:*\n`;
  message += `• Name: ${data.firstName} ${data.lastName}\n`;
  message += `• Email: ${data.email}\n`;
  message += `• Phone: ${data.phone}\n`;

  if (data.company) {
    message += `• Company: ${data.company}\n`;
  }

  if (data.loyaltyMember && data.loyaltyNumber) {
    message += `• Elite Member: Yes (${data.loyaltyNumber})\n`;
  }

  if (data.specialRequests) {
    message += `\n📝 *Special Requests:*\n${data.specialRequests}\n`;
  }

  message += `\n✅ Please confirm availability and send booking confirmation.`;

  return message;
};

export const formatMeetingBookingMessage = (data: MeetingBookingData, bookingRef: string): string => {
  const setupNames: { [key: string]: string } = {
    theater: 'Theater Style',
    boardroom: 'Boardroom',
    classroom: 'Classroom',
    cocktail: 'Cocktail'
  };

  const eventTypeNames: { [key: string]: string } = {
    meeting: 'Business Meeting',
    conference: 'Conference',
    training: 'Training Session',
    presentation: 'Presentation',
    workshop: 'Workshop'
  };

  let message = `🏢 *METRO STAY - MEETING ROOM BOOKING REQUEST*\n\n`;
  message += `📋 *Booking Reference:* ${bookingRef}\n\n`;
  message += `📅 *Event Details:*\n`;
  message += `• Room: ${data.roomName}\n`;
  message += `• Date: ${data.eventDate}\n`;

  if (data.duration === 'full-day') {
    message += `• Duration: Full Day (9 AM - 5 PM)\n`;
  } else {
    message += `• Duration: ${data.startTime} - ${data.endTime}\n`;
  }

  message += `• Event Type: ${eventTypeNames[data.eventType] || data.eventType}\n`;
  message += `• Attendees: ${data.attendees}\n`;
  message += `• Setup: ${setupNames[data.setup] || data.setup}\n\n`;

  message += `👤 *Contact Information:*\n`;
  message += `• Name: ${data.firstName} ${data.lastName}\n`;
  message += `• Email: ${data.email}\n`;
  message += `• Phone: ${data.phone}\n`;
  message += `• Company: ${data.company}\n`;

  if (data.jobTitle) {
    message += `• Job Title: ${data.jobTitle}\n`;
  }

  if (data.eventName) {
    message += `• Event Name: ${data.eventName}\n`;
  }

  message += `\n💼 *Additional Services:*\n`;

  if (data.catering) {
    message += `• Catering: Yes\n`;
  }

  if (data.parking) {
    message += `• Valet Parking: Yes\n`;
  }

  if (data.equipment.length > 0) {
    message += `• Equipment: ${data.equipment.join(', ')}\n`;
  }

  if (data.specialRequests) {
    message += `\n📝 *Special Requests:*\n${data.specialRequests}\n`;
  }

  message += `\n💰 *Estimated Total Cost:* ₹${data.totalCost.toLocaleString('en-IN')}\n`;
  message += `\n✅ Please confirm availability and send booking confirmation.`;

  return message;
};

export const generateWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
};

export const openWhatsApp = (message: string): void => {
  const link = generateWhatsAppLink(message);
  window.open(link, '_blank');
};

export const generateBookingReference = (): string => {
  return `MS-${Date.now().toString().slice(-6)}`;
};

export interface RateInquiryData {
  checkIn: string;
  checkOut: string;
  guests: string;
  rooms: string;
  roomType: string;
  name: string;
  email: string;
  phone: string;
}

export const formatRateInquiryMessage = (data: RateInquiryData, bookingRef: string): string => {
  const roomTypeNames: { [key: string]: string } = {
    business: 'Business Room',
    executive: 'Executive Suite',
    conference: 'Conference Suite',
    any: 'Any Available Room'
  };

  let message = `🏨 *METRO STAY - RATE INQUIRY*\n\n`;
  message += `📋 *Inquiry Reference:* ${bookingRef}\n\n`;
  message += `📅 *Stay Details:*\n`;
  message += `• Check-in: ${data.checkIn}\n`;
  message += `• Check-out: ${data.checkOut}\n`;
  message += `• Room Type: ${roomTypeNames[data.roomType] || data.roomType}\n`;
  message += `• Number of Rooms: ${data.rooms}\n`;
  message += `• Number of Guests: ${data.guests}\n\n`;

  message += `👤 *Contact Information:*\n`;
  message += `• Name: ${data.name}\n`;
  message += `• Email: ${data.email}\n`;
  message += `• Phone: ${data.phone}\n\n`;

  message += `✅ Please send me a rate quote for the above dates and room requirements.`;

  return message;
};
