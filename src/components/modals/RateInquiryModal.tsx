import React, { useState } from 'react';
import { Calendar, Users } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { formatRateInquiryMessage, openWhatsApp, generateBookingReference } from '../../utils/whatsapp';

interface RateInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RateInquiryModal: React.FC<RateInquiryModalProps> = ({ isOpen, onClose }) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    checkIn: today,
    checkOut: tomorrow,
    guests: '1',
    rooms: '1',
    roomType: 'business',
    name: '',
    email: '',
    phone: ''
  });

  const roomTypes = [
    { id: 'business', name: 'Business Room' },
    { id: 'executive', name: 'Executive Suite' },
    { id: 'conference', name: 'Conference Suite' },
    { id: 'any', name: 'Any Available Room' }
  ];

  const handleInputChange = (field: string, value: string) => {
    if (field === 'checkIn') {
      const checkInDate = new Date(value);
      const checkOutDate = new Date(formData.checkOut);
      if (checkOutDate <= checkInDate) {
        const newCheckOut = new Date(checkInDate);
        newCheckOut.setDate(newCheckOut.getDate() + 1);
        setFormData(prev => ({
          ...prev,
          checkIn: value,
          checkOut: newCheckOut.toISOString().split('T')[0]
        }));
        return;
      }
    }
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingRef = generateBookingReference();
    const message = formatRateInquiryMessage(formData, bookingRef);

    openWhatsApp(message);

    onClose();
    setFormData({
      checkIn: today,
      checkOut: tomorrow,
      guests: '1',
      rooms: '1',
      roomType: 'business',
      name: '',
      email: '',
      phone: ''
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Check Rates"
      size="md"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <Calendar size={16} className="inline mr-1" aria-hidden="true" />
              Check-in Date
            </label>
            <input
              type="date"
              value={formData.checkIn}
              onChange={(e) => handleInputChange('checkIn', e.target.value)}
              min={today}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <Calendar size={16} className="inline mr-1" aria-hidden="true" />
              Check-out Date
            </label>
            <input
              type="date"
              value={formData.checkOut}
              onChange={(e) => handleInputChange('checkOut', e.target.value)}
              min={formData.checkIn || today}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <Users size={16} className="inline mr-1" aria-hidden="true" />
              Number of Guests
            </label>
            <select
              value={formData.guests}
              onChange={(e) => handleInputChange('guests', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4+ Guests</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Number of Rooms</label>
            <select
              value={formData.rooms}
              onChange={(e) => handleInputChange('rooms', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
            >
              <option value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
              <option value="4">4+ Rooms</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Room Type</label>
          <select
            value={formData.roomType}
            onChange={(e) => handleInputChange('roomType', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
          >
            {roomTypes.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name}
              </option>
            ))}
          </select>
        </div>

        <div className="border-t pt-6">
          <h4 className="font-semibold text-slate-900 mb-4">Contact Information</h4>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                placeholder="your.email@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-4">
          <p className="text-sm text-slate-600">
            We'll send you a detailed rate quote via WhatsApp within 30 minutes during business hours.
          </p>
        </div>

        <Button
          variant="primary"
          size="lg"
          className="w-full"
          type="submit"
        >
          Get Rate Quote
        </Button>
      </form>
    </Modal>
  );
};
