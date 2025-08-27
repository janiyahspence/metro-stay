import React, { useState } from 'react';
import { Calendar, Users, CreditCard, User, Mail, Phone, CheckCircle, Star, Gift } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoom?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preselectedRoom }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    checkIn: new Date().toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    guests: '1',
    rooms: '1',
    roomType: 'business',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    specialRequests: '',
    loyaltyMember: false,
    loyaltyNumber: '',
    newsletter: false,
    marketingConsent: false,
    specialOffers: false
  });

  // Update room type when preselected room changes
  React.useEffect(() => {
    if (preselectedRoom) {
      setFormData(prev => ({ ...prev, roomType: preselectedRoom }));
    }
  }, [preselectedRoom]);

  const roomTypes = [
    { id: 'business', name: 'Business Room', price: '₹8,500', features: ['32" Smart TV', 'Work Desk', 'Free WiFi', 'Mini Bar'] },
    { id: 'executive', name: 'Executive Suite', price: '₹12,500', features: ['Living Area', 'Conference Table', 'Premium WiFi', 'Complimentary Breakfast'] },
    { id: 'conference', name: 'Conference Suite', price: '₹18,500', features: ['Meeting Room', 'Presentation Equipment', 'Butler Service', 'Airport Transfer'] }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    onClose();
    setCurrentStep(1);
    // Reset form
    setFormData({
      checkIn: new Date().toISOString().split('T')[0],
      checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      guests: '1',
      rooms: '1',
      roomType: 'business',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      specialRequests: '',
      loyaltyMember: false,
      loyaltyNumber: '',
      newsletter: false,
      marketingConsent: false,
      specialOffers: false
    });
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Check-in Date</label>
          <input 
            type="date" 
            value={formData.checkIn}
            onChange={(e) => handleInputChange('checkIn', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Check-out Date</label>
          <input 
            type="date" 
            value={formData.checkOut}
            onChange={(e) => handleInputChange('checkOut', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Number of Guests</label>
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
        <label className="block text-sm font-medium text-slate-700 mb-4">Select Room Type</label>
        <div className="space-y-3">
          {roomTypes.map((room) => (
            <div
              key={room.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                formData.roomType === room.id 
                  ? 'border-gold-500 bg-gold-50' 
                  : 'border-slate-300 hover:border-slate-400'
              }`}
              onClick={() => handleInputChange('roomType', room.id)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-slate-900">{room.name}</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {room.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gold-600">{room.price}</div>
                  <div className="text-xs text-slate-500">per night</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button 
        variant="primary" 
        size="lg" 
        className="w-full"
        onClick={() => setCurrentStep(2)}
      >
        Continue to Guest Details
      </Button>
    </div>
  );

  const renderStep2 = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
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

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Company Name (Optional)</label>
        <input 
          type="text" 
          value={formData.company}
          onChange={(e) => handleInputChange('company', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
          placeholder="Your company name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Special Requests (Optional)</label>
        <textarea 
          value={formData.specialRequests}
          onChange={(e) => handleInputChange('specialRequests', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
          rows={3}
          placeholder="Any special requirements or requests..."
        />
      </div>

      {/* Loyalty Program */}
      <div>
        <label className="flex items-center gap-3 mb-4">
          <input 
            type="checkbox" 
            checked={formData.loyaltyMember}
            onChange={(e) => handleInputChange('loyaltyMember', e.target.checked)}
            className="w-4 h-4 text-gold-600 border-slate-300 rounded focus:ring-gold-500"
          />
          <span className="text-slate-700 font-medium">I'm a Metro Stay Elite member</span>
        </label>
        
        {formData.loyaltyMember && (
          <div className="ml-7">
            <label className="block text-sm font-medium text-slate-700 mb-2">Loyalty Number</label>
            <input 
              type="text" 
              value={formData.loyaltyNumber}
              onChange={(e) => handleInputChange('loyaltyNumber', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
              placeholder="Enter your Elite member number"
            />
          </div>
        )}
      </div>

      {/* Marketing Preferences */}
      <div className="bg-slate-50 rounded-lg p-4">
        <h4 className="font-semibold text-slate-900 mb-3">Communication Preferences</h4>
        <div className="space-y-3">
          <label className="flex items-start gap-3">
            <input 
              type="checkbox" 
              checked={formData.newsletter}
              onChange={(e) => handleInputChange('newsletter', e.target.checked)}
              className="w-4 h-4 text-gold-600 border-slate-300 rounded focus:ring-gold-500 mt-0.5"
            />
            <div>
              <span className="text-slate-700 font-medium">Subscribe to Newsletter</span>
              <p className="text-xs text-slate-600">Get updates on special offers and business travel tips</p>
            </div>
          </label>
          
          <label className="flex items-start gap-3">
            <input 
              type="checkbox" 
              checked={formData.specialOffers}
              onChange={(e) => handleInputChange('specialOffers', e.target.checked)}
              className="w-4 h-4 text-gold-600 border-slate-300 rounded focus:ring-gold-500 mt-0.5"
            />
            <div>
              <span className="text-slate-700 font-medium">Special Offers & Promotions</span>
              <p className="text-xs text-slate-600">Receive exclusive deals for business travelers</p>
            </div>
          </label>
          
          <label className="flex items-start gap-3">
            <input 
              type="checkbox" 
              checked={formData.marketingConsent}
              onChange={(e) => handleInputChange('marketingConsent', e.target.checked)}
              className="w-4 h-4 text-gold-600 border-slate-300 rounded focus:ring-gold-500 mt-0.5"
            />
            <div>
              <span className="text-slate-700 font-medium">Marketing Communications</span>
              <p className="text-xs text-slate-600">Allow us to contact you about relevant services</p>
            </div>
          </label>
        </div>
      </div>

      <div className="bg-slate-50 rounded-lg p-4">
        <h4 className="font-semibold text-slate-900 mb-2">Booking Summary</h4>
        <div className="space-y-1 text-sm text-slate-600">
          <div className="flex justify-between">
            <span>Room Type:</span>
            <span>{roomTypes.find(r => r.id === formData.roomType)?.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Check-in:</span>
            <span>{formData.checkIn}</span>
          </div>
          <div className="flex justify-between">
            <span>Check-out:</span>
            <span>{formData.checkOut}</span>
          </div>
          <div className="flex justify-between">
            <span>Guests:</span>
            <span>{formData.guests}</span>
          </div>
          <div className="flex justify-between font-semibold text-slate-900 pt-2 border-t">
            <span>Estimated Total:</span>
            <span>{roomTypes.find(r => r.id === formData.roomType)?.price} per night</span>
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

  const renderConfirmation = () => (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
        <CheckCircle size={32} className="text-green-600" />
      </div>
      
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Booking Request Submitted!</h3>
      <p className="text-slate-600 mb-6 max-w-md mx-auto">
        Thank you for choosing Metro Stay. Your booking request has been received and our reservations team will contact you within 2 hours to confirm your stay.
      </p>
      
      <div className="bg-slate-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-slate-900 mb-3">Booking Reference</h4>
        <div className="text-2xl font-bold text-gold-600 mb-2">MS-{Date.now().toString().slice(-6)}</div>
        <p className="text-sm text-slate-600">Please save this reference number for your records</p>
      </div>
      
      <div className="space-y-3 text-sm text-slate-600 mb-6">
        <div className="flex justify-between">
          <span>Check-in:</span>
          <span className="font-medium">{formData.checkIn}</span>
        </div>
        <div className="flex justify-between">
          <span>Check-out:</span>
          <span className="font-medium">{formData.checkOut}</span>
        </div>
        <div className="flex justify-between">
          <span>Room Type:</span>
          <span className="font-medium">{roomTypes.find(r => r.id === formData.roomType)?.name}</span>
        </div>
        <div className="flex justify-between">
          <span>Guests:</span>
          <span className="font-medium">{formData.guests}</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-3">
        <Button variant="primary" size="lg" onClick={handleConfirmationClose}>
          Close
        </Button>
        <Button variant="outline" size="lg">
          Add to Calendar
        </Button>
      </div>
      
      <div className="mt-6 text-xs text-slate-500">
        A confirmation email has been sent to {formData.email}
      </div>
    </div>
  );

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={showConfirmation ? "Booking Confirmation" : `Book Your Stay - Step ${currentStep} of 2`}
      size="lg"
    >
      {showConfirmation ? renderConfirmation() : (currentStep === 1 ? renderStep1() : renderStep2())}
    </Modal>
  );
};