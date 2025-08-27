import React, { useState } from 'react';
import { Star, Gift, Plane, Coffee, Calendar, CheckCircle, Crown, Award } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface LoyaltySignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoyaltySignupModal: React.FC<LoyaltySignupModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    dateOfBirth: '',
    address: '',
    city: '',
    pincode: '',
    travelFrequency: 'monthly',
    preferredRoomType: 'business',
    newsletter: true,
    smsUpdates: true,
    partnerOffers: false
  });

  const membershipTiers = [
    {
      name: 'Elite Silver',
      icon: Star,
      color: 'text-slate-600',
      bgColor: 'bg-slate-100',
      requirement: '0-4 stays per year',
      benefits: ['5% discount on rooms', 'Late checkout (2 PM)', 'Welcome amenity', 'Priority support']
    },
    {
      name: 'Elite Gold',
      icon: Award,
      color: 'text-gold-600',
      bgColor: 'bg-gold-100',
      requirement: '5-9 stays per year',
      benefits: ['10% discount on rooms', 'Room upgrade (subject to availability)', 'Complimentary breakfast', 'Executive lounge access', 'Late checkout (4 PM)']
    },
    {
      name: 'Elite Platinum',
      icon: Crown,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      requirement: '10+ stays per year',
      benefits: ['15% discount on rooms', 'Guaranteed room upgrade', 'Complimentary breakfast & dinner', 'Executive lounge access', 'Late checkout (6 PM)', 'Personal concierge', 'Airport transfer']
    }
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
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-4">
          <Star size={32} className="text-slate-900" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Join Metro Stay Elite</h3>
        <p className="text-slate-600">Unlock exclusive benefits and rewards for business travelers</p>
      </div>

      {/* Membership Tiers */}
      <div className="space-y-4">
        <h4 className="font-semibold text-slate-900 mb-4">Membership Tiers</h4>
        {membershipTiers.map((tier, index) => {
          const IconComponent = tier.icon;
          return (
            <div key={index} className={`border rounded-xl p-4 ${tier.bgColor}`}>
              <div className="flex items-start gap-4">
                <div className={`p-2 bg-white rounded-lg`}>
                  <IconComponent size={24} className={tier.color} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-slate-900">{tier.name}</h5>
                    <span className="text-sm text-slate-600">{tier.requirement}</span>
                  </div>
                  <div className="space-y-1">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-green-600" />
                        <span className="text-sm text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Key Benefits */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 text-white">
        <h4 className="font-bold text-xl mb-4">Why Join Metro Stay Elite?</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <Gift className="text-gold-400" size={20} />
            <span className="text-sm">Exclusive Discounts</span>
          </div>
          <div className="flex items-center gap-3">
            <Plane className="text-gold-400" size={20} />
            <span className="text-sm">Airport Transfers</span>
          </div>
          <div className="flex items-center gap-3">
            <Coffee className="text-gold-400" size={20} />
            <span className="text-sm">Complimentary Breakfast</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="text-gold-400" size={20} />
            <span className="text-sm">Flexible Bookings</span>
          </div>
        </div>
      </div>

      <Button variant="primary" size="lg" className="w-full" onClick={() => setCurrentStep(2)}>
        Join Now - It's Free!
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
        <label className="block text-sm font-medium text-slate-700 mb-2">Date of Birth</label>
        <input 
          type="date" 
          value={formData.dateOfBirth}
          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Address</label>
        <input 
          type="text" 
          value={formData.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
          placeholder="Your address"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
          <input 
            type="text" 
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
            placeholder="Your city"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">PIN Code</label>
          <input 
            type="text" 
            value={formData.pincode}
            onChange={(e) => handleInputChange('pincode', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
            placeholder="110001"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Travel Frequency</label>
          <select 
            value={formData.travelFrequency}
            onChange={(e) => handleInputChange('travelFrequency', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="occasionally">Occasionally</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Room Type</label>
          <select 
            value={formData.preferredRoomType}
            onChange={(e) => handleInputChange('preferredRoomType', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
          >
            <option value="business">Business Room</option>
            <option value="executive">Executive Suite</option>
            <option value="conference">Conference Suite</option>
          </select>
        </div>
      </div>

      {/* Communication Preferences */}
      <div className="bg-slate-50 rounded-lg p-4">
        <h4 className="font-semibold text-slate-900 mb-3">Communication Preferences</h4>
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input 
              type="checkbox" 
              checked={formData.newsletter}
              onChange={(e) => handleInputChange('newsletter', e.target.checked)}
              className="w-4 h-4 text-gold-600 border-slate-300 rounded focus:ring-gold-500"
            />
            <span className="text-slate-700">Email newsletters and updates</span>
          </label>
          
          <label className="flex items-center gap-3">
            <input 
              type="checkbox" 
              checked={formData.smsUpdates}
              onChange={(e) => handleInputChange('smsUpdates', e.target.checked)}
              className="w-4 h-4 text-gold-600 border-slate-300 rounded focus:ring-gold-500"
            />
            <span className="text-slate-700">SMS booking confirmations and updates</span>
          </label>
          
          <label className="flex items-center gap-3">
            <input 
              type="checkbox" 
              checked={formData.partnerOffers}
              onChange={(e) => handleInputChange('partnerOffers', e.target.checked)}
              className="w-4 h-4 text-gold-600 border-slate-300 rounded focus:ring-gold-500"
            />
            <span className="text-slate-700">Partner offers and promotions</span>
          </label>
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
          Join Metro Stay Elite
        </Button>
      </div>
    </form>
  );

  const renderConfirmation = () => (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-6">
        <Star size={32} className="text-slate-900" />
      </div>
      
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Welcome to Metro Stay Elite!</h3>
      <p className="text-slate-600 mb-6 max-w-md mx-auto">
        Congratulations! You're now a member of our exclusive loyalty program. Your membership card and welcome benefits will be sent to your email.
      </p>
      
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-6 mb-6 text-white">
        <h4 className="font-semibold mb-3">Your Membership Details</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Member ID:</span>
            <span className="font-bold text-gold-400">MS-{Date.now().toString().slice(-8)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tier:</span>
            <span className="font-medium">Elite Silver</span>
          </div>
          <div className="flex justify-between">
            <span>Status:</span>
            <span className="text-green-400">Active</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gold-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-slate-900 mb-2">Immediate Benefits</h4>
        <div className="space-y-1 text-sm text-slate-700">
          <div>✓ 5% discount on all room bookings</div>
          <div>✓ Late checkout until 2 PM</div>
          <div>✓ Welcome amenity on arrival</div>
          <div>✓ Priority customer support</div>
        </div>
      </div>
      
      <Button variant="primary" size="lg" onClick={handleConfirmationClose}>
        Start Earning Rewards
      </Button>
      
      <div className="mt-4 text-xs text-slate-500">
        Your membership card and detailed benefits guide will be emailed to {formData.email}
      </div>
    </div>
  );

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={showConfirmation ? "Welcome to Elite!" : `Join Metro Stay Elite - Step ${currentStep} of 2`}
      size="lg"
    >
      {showConfirmation ? renderConfirmation() : (currentStep === 1 ? renderStep1() : renderStep2())}
    </Modal>
  );
};