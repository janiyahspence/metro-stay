import React, { useState } from 'react';
import { Mail, CheckCircle, Briefcase, Calendar, Gift, TrendingUp } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    company: '',
    interests: [] as string[],
    frequency: 'weekly'
  });

  const interestOptions = [
    { id: 'business-travel', name: 'Business Travel Tips', icon: Briefcase },
    { id: 'special-offers', name: 'Special Offers & Deals', icon: Gift },
    { id: 'events', name: 'Corporate Events & Meetings', icon: Calendar },
    { id: 'industry-news', name: 'Hospitality Industry News', icon: TrendingUp }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(item => item !== interest)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    onClose();
    setFormData({
      email: '',
      firstName: '',
      company: '',
      interests: [],
      frequency: 'weekly'
    });
  };

  const renderSignupForm = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-4">
          <Mail size={32} className="text-slate-900" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Stay Connected</h3>
        <p className="text-slate-600">Get the latest updates, exclusive offers, and business travel insights delivered to your inbox.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
            <input 
              type="text" 
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
              placeholder="Your first name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Company (Optional)</label>
            <input 
              type="text" 
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
              placeholder="Your company"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-4">What interests you?</label>
          <div className="grid grid-cols-2 gap-3">
            {interestOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <label key={option.id} className="flex items-start gap-3 p-3 border border-slate-200 rounded-lg hover:border-gold-300 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.interests.includes(option.id)}
                    onChange={(e) => handleInterestChange(option.id, e.target.checked)}
                    className="w-4 h-4 text-gold-600 border-slate-300 rounded focus:ring-gold-500 mt-0.5"
                  />
                  <div className="flex items-center gap-2">
                    <IconComponent size={16} className="text-gold-600" />
                    <span className="text-sm text-slate-700">{option.name}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Email Frequency</label>
          <select 
            value={formData.frequency}
            onChange={(e) => handleInputChange('frequency', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
          >
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div className="bg-slate-50 rounded-lg p-4">
          <h4 className="font-semibold text-slate-900 mb-2">What You'll Get:</h4>
          <div className="space-y-2 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" />
              <span>Exclusive business travel deals and offers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" />
              <span>Early access to new services and amenities</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" />
              <span>Corporate event planning tips and insights</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" />
              <span>Industry news and hospitality trends</span>
            </div>
          </div>
        </div>

        <Button variant="primary" size="lg" className="w-full" type="submit">
          Subscribe to Newsletter
        </Button>

        <div className="text-center text-xs text-slate-500">
          You can unsubscribe at any time. We respect your privacy and will never share your information.
        </div>
      </form>
    </div>
  );

  const renderConfirmation = () => (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
        <CheckCircle size={32} className="text-green-600" />
      </div>
      
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Welcome to Our Newsletter!</h3>
      <p className="text-slate-600 mb-6 max-w-md mx-auto">
        Thank you for subscribing! You'll receive your first newsletter within the next few days, packed with exclusive offers and business travel insights.
      </p>
      
      <div className="bg-gold-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-slate-900 mb-2">Subscription Details</h4>
        <div className="space-y-1 text-sm text-slate-700">
          <div>Email: {formData.email}</div>
          <div>Frequency: {formData.frequency.charAt(0).toUpperCase() + formData.frequency.slice(1)}</div>
          <div>Interests: {formData.interests.length} selected</div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-4 mb-6 text-white">
        <h4 className="font-semibold mb-2">Special Welcome Offer</h4>
        <p className="text-sm text-slate-300 mb-3">
          As a newsletter subscriber, enjoy 10% off your next booking at Metro Stay!
        </p>
        <div className="bg-gold-500 text-slate-900 px-3 py-1 rounded text-sm font-bold inline-block">
          Code: WELCOME10
        </div>
      </div>
      
      <Button variant="primary" size="lg" onClick={handleConfirmationClose}>
        Great, Thanks!
      </Button>
      
      <div className="mt-4 text-xs text-slate-500">
        Check your email for a confirmation message and your welcome offer details.
      </div>
    </div>
  );

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={showConfirmation ? "Subscription Confirmed!" : "Subscribe to Newsletter"}
      size="lg"
    >
      {showConfirmation ? renderConfirmation() : renderSignupForm()}
    </Modal>
  );
};