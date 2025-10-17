import React, { useState } from 'react';
import { Calendar, Users, Clock, Building2, Mail, Phone, User } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { formatMeetingBookingMessage, openWhatsApp, generateBookingReference } from '../../utils/whatsapp';

interface MeetingRoom {
  id: string;
  name: string;
  type: string;
  capacity: {
    theater: number;
    boardroom: number;
    classroom: number;
    cocktail: number;
  };
  size: string;
  hourlyRate: number;
  dayRate: number;
  image: string;
  gallery: string[];
  features: string[];
  equipment: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    name: string;
  }[];
  description: string;
  idealFor: string[];
  rating: number;
  bookings: number;
}

interface MeetingBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoom?: string;
  rooms: MeetingRoom[];
}

export const MeetingBookingModal: React.FC<MeetingBookingModalProps> = ({ 
  isOpen, 
  onClose, 
  preselectedRoom,
  rooms 
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const today = new Date().toISOString().split('T')[0];
  const [formData, setFormData] = useState({
    roomId: preselectedRoom || '',
    eventDate: today,
    startTime: '09:00',
    endTime: '17:00',
    duration: 'full-day',
    attendees: '10',
    setup: 'boardroom',
    eventType: 'meeting',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    eventName: '',
    specialRequests: '',
    catering: false,
    equipment: [],
    parking: false
  });

  // Update room when preselected room changes
  React.useEffect(() => {
    if (preselectedRoom) {
      setFormData(prev => ({ ...prev, roomId: preselectedRoom }));
    }
  }, [preselectedRoom]);

  const eventTypes = [
    { id: 'meeting', name: 'Business Meeting', description: 'Regular team or client meetings' },
    { id: 'conference', name: 'Conference', description: 'Large corporate events and seminars' },
    { id: 'training', name: 'Training Session', description: 'Educational workshops and training' },
    { id: 'presentation', name: 'Presentation', description: 'Product launches and presentations' },
    { id: 'workshop', name: 'Workshop', description: 'Interactive collaborative sessions' }
  ];

  const setupOptions = [
    { id: 'theater', name: 'Theater Style', description: 'Rows facing presentation area' },
    { id: 'boardroom', name: 'Boardroom', description: 'Around conference table' },
    { id: 'classroom', name: 'Classroom', description: 'Tables with chairs facing front' },
    { id: 'cocktail', name: 'Cocktail', description: 'Standing reception style' }
  ];

  const additionalEquipment = [
    'Wireless Microphones',
    'Flip Charts',
    'Additional Monitors',
    'Laptop Rentals',
    'Recording Equipment',
    'Live Streaming Setup'
  ];

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEquipmentChange = (equipment: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      equipment: checked 
        ? [...prev.equipment, equipment]
        : prev.equipment.filter(item => item !== equipment)
    }));
  };

  const calculateTotal = () => {
    const selectedRoom = rooms.find(room => room.id === formData.roomId);
    if (!selectedRoom) return 0;

    const baseRate = formData.duration === 'full-day' ? selectedRoom.dayRate : selectedRoom.hourlyRate;
    const cateringCost = formData.catering ? 1500 * parseInt(formData.attendees) : 0;
    const equipmentCost = formData.equipment.length * 500;
    const parkingCost = formData.parking ? 500 : 0;

    return baseRate + cateringCost + equipmentCost + parkingCost;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedRoom = rooms.find(room => room.id === formData.roomId);
    if (!selectedRoom) return;

    const bookingRef = generateBookingReference();
    const totalCost = calculateTotal();

    const message = formatMeetingBookingMessage(
      {
        ...formData,
        roomName: selectedRoom.name,
        totalCost
      },
      bookingRef
    );

    openWhatsApp(message);

    onClose();
    setCurrentStep(1);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      {/* Room Selection */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-4">Select Meeting Room</label>
        <div className="space-y-3">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                formData.roomId === room.id 
                  ? 'border-gold-500 bg-gold-50' 
                  : 'border-slate-300 hover:border-slate-400'
              }`}
              onClick={() => handleInputChange('roomId', room.id)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-slate-900">{room.name}</h4>
                  <p className="text-sm text-slate-600 mb-2">{room.description}</p>
                  <div className="flex gap-4 text-xs text-slate-500">
                    <span>Up to {Math.max(...Object.values(room.capacity))} guests</span>
                    <span>{room.size}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gold-600">₹{room.hourlyRate.toLocaleString()}/hr</div>
                  <div className="text-sm text-slate-500">₹{room.dayRate.toLocaleString()}/day</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Details */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Event Date</label>
          <input
            type="date"
            value={formData.eventDate}
            onChange={(e) => handleInputChange('eventDate', e.target.value)}
            min={today}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Number of Attendees</label>
          <select 
            value={formData.attendees}
            onChange={(e) => handleInputChange('attendees', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
          >
            {[...Array(20)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Person' : 'People'}</option>
            ))}
            <option value="25">25+ People</option>
            <option value="50">50+ People</option>
            <option value="100">100+ People</option>
          </select>
        </div>
      </div>

      {/* Duration Selection */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-4">Duration</label>
        <div className="grid grid-cols-2 gap-4">
          <div
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              formData.duration === 'hourly' 
                ? 'border-gold-500 bg-gold-50' 
                : 'border-slate-300 hover:border-slate-400'
            }`}
            onClick={() => handleInputChange('duration', 'hourly')}
          >
            <h4 className="font-semibold text-slate-900">Hourly Booking</h4>
            <p className="text-sm text-slate-600">Flexible hourly rates</p>
            {formData.duration === 'hourly' && (
              <div className="grid grid-cols-2 gap-2 mt-3">
                <div>
                  <label className="block text-xs text-slate-600 mb-1">Start Time</label>
                  <input 
                    type="time" 
                    value={formData.startTime}
                    onChange={(e) => handleInputChange('startTime', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-600 mb-1">End Time</label>
                  <input 
                    type="time" 
                    value={formData.endTime}
                    onChange={(e) => handleInputChange('endTime', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded text-sm"
                  />
                </div>
              </div>
            )}
          </div>
          <div
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              formData.duration === 'full-day' 
                ? 'border-gold-500 bg-gold-50' 
                : 'border-slate-300 hover:border-slate-400'
            }`}
            onClick={() => handleInputChange('duration', 'full-day')}
          >
            <h4 className="font-semibold text-slate-900">Full Day</h4>
            <p className="text-sm text-slate-600">8 hours (9 AM - 5 PM)</p>
            <p className="text-xs text-green-600 mt-1">Best Value</p>
          </div>
        </div>
      </div>

      {/* Event Type */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-4">Event Type</label>
        <div className="grid grid-cols-2 gap-3">
          {eventTypes.map((type) => (
            <div
              key={type.id}
              className={`border rounded-lg p-3 cursor-pointer transition-all ${
                formData.eventType === type.id 
                  ? 'border-gold-500 bg-gold-50' 
                  : 'border-slate-300 hover:border-slate-400'
              }`}
              onClick={() => handleInputChange('eventType', type.id)}
            >
              <h5 className="font-medium text-slate-900 text-sm">{type.name}</h5>
              <p className="text-xs text-slate-600">{type.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Room Setup */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-4">Room Setup</label>
        <div className="grid grid-cols-2 gap-3">
          {setupOptions.map((setup) => (
            <div
              key={setup.id}
              className={`border rounded-lg p-3 cursor-pointer transition-all ${
                formData.setup === setup.id 
                  ? 'border-gold-500 bg-gold-50' 
                  : 'border-slate-300 hover:border-slate-400'
              }`}
              onClick={() => handleInputChange('setup', setup.id)}
            >
              <h5 className="font-medium text-slate-900 text-sm">{setup.name}</h5>
              <p className="text-xs text-slate-600">{setup.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Button 
        variant="primary" 
        size="lg" 
        className="w-full"
        onClick={() => setCurrentStep(2)}
        disabled={!formData.roomId}
      >
        Continue to Contact Details
      </Button>
    </div>
  );

  const renderStep2 = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
          <input 
            type="text" 
            required
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
          <input 
            type="text" 
            required
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
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

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
          <input 
            type="text" 
            required
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Job Title</label>
          <input 
            type="text" 
            value={formData.jobTitle}
            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
            placeholder="Your job title"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Event Name</label>
        <input 
          type="text" 
          value={formData.eventName}
          onChange={(e) => handleInputChange('eventName', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
          placeholder="Name of your event or meeting"
        />
      </div>

      {/* Additional Services */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-4">Additional Services</label>
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input 
              type="checkbox" 
              checked={formData.catering}
              onChange={(e) => handleInputChange('catering', e.target.checked)}
              className="w-4 h-4 text-gold-600 border-slate-300 rounded focus:ring-gold-500"
            />
            <span className="text-slate-700">Catering Services (+₹1,500 per person)</span>
          </label>
          <label className="flex items-center gap-3">
            <input 
              type="checkbox" 
              checked={formData.parking}
              onChange={(e) => handleInputChange('parking', e.target.checked)}
              className="w-4 h-4 text-gold-600 border-slate-300 rounded focus:ring-gold-500"
            />
            <span className="text-slate-700">Valet Parking (+₹500)</span>
          </label>
        </div>
      </div>

      {/* Additional Equipment */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-4">Additional Equipment (+₹500 each)</label>
        <div className="grid grid-cols-2 gap-3">
          {additionalEquipment.map((equipment) => (
            <label key={equipment} className="flex items-center gap-3">
              <input 
                type="checkbox" 
                checked={formData.equipment.includes(equipment)}
                onChange={(e) => handleEquipmentChange(equipment, e.target.checked)}
                className="w-4 h-4 text-gold-600 border-slate-300 rounded focus:ring-gold-500"
              />
              <span className="text-slate-700 text-sm">{equipment}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Special Requests</label>
        <textarea 
          value={formData.specialRequests}
          onChange={(e) => handleInputChange('specialRequests', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
          rows={3}
          placeholder="Any special requirements or requests..."
        />
      </div>

      {/* Booking Summary */}
      <div className="bg-slate-50 rounded-lg p-6">
        <h4 className="font-semibold text-slate-900 mb-4">Booking Summary</h4>
        <div className="space-y-2 text-sm text-slate-600">
          <div className="flex justify-between">
            <span>Room:</span>
            <span>{rooms.find(r => r.id === formData.roomId)?.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Date:</span>
            <span>{formData.eventDate}</span>
          </div>
          <div className="flex justify-between">
            <span>Duration:</span>
            <span>{formData.duration === 'full-day' ? 'Full Day' : `${formData.startTime} - ${formData.endTime}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Attendees:</span>
            <span>{formData.attendees}</span>
          </div>
          <div className="flex justify-between">
            <span>Setup:</span>
            <span className="capitalize">{formData.setup}</span>
          </div>
          {formData.catering && (
            <div className="flex justify-between">
              <span>Catering:</span>
              <span>₹{(1500 * parseInt(formData.attendees)).toLocaleString()}</span>
            </div>
          )}
          {formData.equipment.length > 0 && (
            <div className="flex justify-between">
              <span>Equipment:</span>
              <span>₹{(formData.equipment.length * 500).toLocaleString()}</span>
            </div>
          )}
          <div className="flex justify-between font-semibold text-slate-900 pt-2 border-t">
            <span>Estimated Total:</span>
            <span>₹{calculateTotal().toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button 
          variant="outline" 
          size="lg" 
          className="flex-1"
          onClick={() => setCurrentStep(1)}
          type="button"
        >
          Back
        </Button>
        <Button 
          variant="primary" 
          size="lg" 
          className="flex-1"
          type="submit"
        >
          Submit Booking Request
        </Button>
      </div>
    </form>
  );

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={`Book Meeting Room - Step ${currentStep} of 2`}
      size="xl"
    >
      {currentStep === 1 ? renderStep1() : renderStep2()}
    </Modal>
  );
};