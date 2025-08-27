import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Clock, CheckCircle, User, Building2 } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, initialSubject = '' }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: initialSubject,
    category: 'general',
    message: '',
    preferredContact: 'email',
    urgency: 'normal'
  });

  const contactCategories = [
    { id: 'general', name: 'General Inquiry' },
    { id: 'booking', name: 'Booking Assistance' },
    { id: 'corporate', name: 'Corporate Services' },
    { id: 'events', name: 'Events & Meetings' },
    { id: 'feedback', name: 'Feedback & Suggestions' },
    { id: 'support', name: 'Technical Support' }
  ];

  const urgencyLevels = [
    { id: 'low', name: 'Low Priority', response: '48-72 hours' },
    { id: 'normal', name: 'Normal', response: '24-48 hours' },
    { id: 'high', name: 'High Priority', response: '4-8 hours' },
    { id: 'urgent', name: 'Urgent', response: '1-2 hours' }
  ];

  const contactMethods = [
    { id: 'email', name: 'Email', icon: Mail },
    { id: 'phone', name: 'Phone Call', icon: Phone },
    { id: 'both', name: 'Both Email & Phone', icon: MessageSquare }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    onClose();
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      category: 'general',
      message: '',
      preferredContact: 'email',
      urgency: 'normal'
    });
  };

  const renderContactForm = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-4">
          <MessageSquare size={32} className="text-slate-900" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Get in Touch</h3>
        <p className="text-slate-600">We're here to help with any questions or assistance you need.</p>
      </div>

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
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Company (Optional)</label>
          <input 
            type="text" 
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
            placeholder="Your company name"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
            <select 
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
            >
              {contactCategories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Priority Level</label>
            <select 
              value={formData.urgency}
              onChange={(e) => handleInputChange('urgency', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
            >
              {urgencyLevels.map((level) => (
                <option key={level.id} value={level.id}>
                  {level.name} ({level.response})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
          <input 
            type="text" 
            required
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
            placeholder="Brief description of your inquiry"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
          <textarea 
            required
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
            rows={4}
            placeholder="Please provide details about your inquiry..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-4">Preferred Contact Method</label>
          <div className="grid grid-cols-3 gap-3">
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <label
                  key={method.id}
                  className={`border rounded-lg p-3 cursor-pointer transition-all ${
                    formData.preferredContact === method.id 
                      ? 'border-gold-500 bg-gold-50' 
                      : 'border-slate-300 hover:border-slate-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredContact"
                    value={method.id}
                    checked={formData.preferredContact === method.id}
                    onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <IconComponent size={20} className={`mx-auto mb-2 ${
                      formData.preferredContact === method.id ? 'text-gold-600' : 'text-slate-600'
                    }`} />
                    <span className={`text-sm ${
                      formData.preferredContact === method.id ? 'text-gold-700 font-medium' : 'text-slate-700'
                    }`}>
                      {method.name}
                    </span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        <Button variant="primary" size="lg" className="w-full" type="submit">
          Send Message
        </Button>

        <div className="text-center text-xs text-slate-500">
          We typically respond within the timeframe indicated by your selected priority level.
        </div>
      </form>
    </div>
  );

  const renderConfirmation = () => (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
        <CheckCircle size={32} className="text-green-600" />
      </div>
      
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent Successfully!</h3>
      <p className="text-slate-600 mb-6 max-w-md mx-auto">
        Thank you for contacting Metro Stay. We've received your message and will respond according to your selected priority level.
      </p>
      
      <div className="bg-slate-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-slate-900 mb-3">Message Details</h4>
        <div className="space-y-2 text-sm text-slate-600">
          <div className="flex justify-between">
            <span>Reference ID:</span>
            <span className="font-bold text-slate-900">MS-{Date.now().toString().slice(-6)}</span>
          </div>
          <div className="flex justify-between">
            <span>Category:</span>
            <span>{contactCategories.find(c => c.id === formData.category)?.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Priority:</span>
            <span>{urgencyLevels.find(u => u.id === formData.urgency)?.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Expected Response:</span>
            <span>{urgencyLevels.find(u => u.id === formData.urgency)?.response}</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div className="bg-gold-50 rounded-lg p-3">
          <Phone className="text-gold-600 mx-auto mb-2" size={20} />
          <div className="font-medium text-slate-900">Need Immediate Help?</div>
          <div className="text-slate-600">+91 11 4567 8900</div>
        </div>
        <div className="bg-gold-50 rounded-lg p-3">
          <Clock className="text-gold-600 mx-auto mb-2" size={20} />
          <div className="font-medium text-slate-900">24/7 Support</div>
          <div className="text-slate-600">Always Available</div>
        </div>
      </div>
      
      <Button variant="primary" size="lg" onClick={handleConfirmationClose}>
        Close
      </Button>
      
      <div className="mt-4 text-xs text-slate-500">
        A confirmation email has been sent to {formData.email}
      </div>
    </div>
  );

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={showConfirmation ? "Message Sent!" : "Contact Metro Stay"}
      size="lg"
    >
      {showConfirmation ? renderConfirmation() : renderContactForm()}
    </Modal>
  );
};