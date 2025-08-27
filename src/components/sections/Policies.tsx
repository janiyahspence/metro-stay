import React, { useState } from 'react';
import { Shield, Clock, CreditCard, Users, Car, Wifi, Phone, FileText, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { Button } from '../ui/Button';

export const Policies: React.FC = () => {
  const [selectedPolicy, setSelectedPolicy] = useState('booking');

  const policyCategories = [
    { id: 'booking', name: 'Booking & Cancellation', icon: Clock },
    { id: 'checkin', name: 'Check-in & Check-out', icon: Users },
    { id: 'payment', name: 'Payment & Billing', icon: CreditCard },
    { id: 'facilities', name: 'Facilities & Services', icon: Wifi },
    { id: 'safety', name: 'Safety & Security', icon: Shield },
    { id: 'corporate', name: 'Corporate Policies', icon: FileText }
  ];

  const policies = {
    booking: {
      title: 'Booking & Cancellation Policies',
      sections: [
        {
          title: 'Reservation Policy',
          type: 'info',
          content: [
            'All reservations require a valid credit card or advance payment',
            'Confirmation will be sent via email within 2 hours of booking',
            'Special requests are subject to availability and cannot be guaranteed',
            'Group bookings (10+ rooms) require a signed contract and deposit'
          ]
        },
        {
          title: 'Cancellation Policy',
          type: 'warning',
          content: [
            'Free cancellation up to 24 hours before check-in date',
            'Cancellations within 24 hours: One night charge applies',
            'No-show bookings: Full stay amount will be charged',
            'Corporate rates may have different cancellation terms'
          ]
        },
        {
          title: 'Modification Policy',
          type: 'info',
          content: [
            'Modifications subject to availability and rate changes',
            'Date changes may result in rate adjustments',
            'Room type upgrades available based on availability',
            'Elite members enjoy flexible modification benefits'
          ]
        }
      ]
    },
    checkin: {
      title: 'Check-in & Check-out Policies',
      sections: [
        {
          title: 'Check-in Requirements',
          type: 'info',
          content: [
            'Valid government-issued photo ID required for all guests',
            'Credit card authorization for incidental charges',
            'Minimum age for check-in: 18 years',
            'Early check-in available from 12:00 PM (subject to availability)'
          ]
        },
        {
          title: 'Check-in & Check-out Times',
          type: 'success',
          content: [
            'Standard check-in: 2:00 PM',
            'Standard check-out: 12:00 PM',
            'Late check-out until 2:00 PM: ₹1,000 charge',
            'Elite members enjoy extended check-out privileges'
          ]
        },
        {
          title: 'Guest Registration',
          type: 'warning',
          content: [
            'All guests must be registered at check-in',
            'Maximum occupancy limits strictly enforced',
            'Additional guests may incur extra charges',
            'Visitor access requires prior approval and registration'
          ]
        }
      ]
    },
    payment: {
      title: 'Payment & Billing Policies',
      sections: [
        {
          title: 'Accepted Payment Methods',
          type: 'success',
          content: [
            'Major credit cards: Visa, MasterCard, American Express',
            'Debit cards and UPI payments accepted',
            'Corporate billing arrangements available',
            'Foreign currency accepted at current exchange rates'
          ]
        },
        {
          title: 'Billing & Charges',
          type: 'info',
          content: [
            'All rates are subject to applicable taxes (GST)',
            'Incidental charges will be authorized on credit card',
            'Final bill settlement required at check-out',
            'Detailed invoices provided for corporate bookings'
          ]
        },
        {
          title: 'Refund Policy',
          type: 'warning',
          content: [
            'Refunds processed within 7-10 business days',
            'Refund amount subject to cancellation policy terms',
            'Processing fees may apply for certain transactions',
            'Disputes must be reported within 30 days of stay'
          ]
        }
      ]
    },
    facilities: {
      title: 'Facilities & Services Policies',
      sections: [
        {
          title: 'WiFi & Technology',
          type: 'success',
          content: [
            'Complimentary high-speed WiFi throughout the property',
            'Business center available 24/7 with printing services',
            'Technical support available during business hours',
            'Guest devices connected at own risk'
          ]
        },
        {
          title: 'Dining & Room Service',
          type: 'info',
          content: [
            'Restaurant hours: 6:00 AM - 11:00 PM',
            '24/7 room service available with limited menu after 11:00 PM',
            'Special dietary requirements accommodated with advance notice',
            'Outside food and beverages not permitted in public areas'
          ]
        },
        {
          title: 'Fitness & Wellness',
          type: 'info',
          content: [
            'Fitness center open 24/7 for registered guests',
            'Spa services available by appointment',
            'Use of facilities at guest\'s own risk',
            'Appropriate attire required in all fitness areas'
          ]
        }
      ]
    },
    safety: {
      title: 'Safety & Security Policies',
      sections: [
        {
          title: 'Security Measures',
          type: 'success',
          content: [
            '24/7 security personnel and CCTV monitoring',
            'Electronic key card access to rooms and elevators',
            'Safe deposit boxes available in all rooms',
            'Emergency procedures posted in all rooms'
          ]
        },
        {
          title: 'Health & Safety',
          type: 'warning',
          content: [
            'Smoking prohibited in all indoor areas',
            'Designated smoking areas available on terrace',
            'Fire safety equipment regularly inspected',
            'First aid facilities available at reception'
          ]
        },
        {
          title: 'Guest Conduct',
          type: 'info',
          content: [
            'Respectful behavior expected towards staff and guests',
            'Noise levels must be considerate of other guests',
            'Damage to property will result in charges',
            'Management reserves right to refuse service'
          ]
        }
      ]
    },
    corporate: {
      title: 'Corporate Policies',
      sections: [
        {
          title: 'Corporate Rates & Agreements',
          type: 'success',
          content: [
            'Negotiated rates available for companies with regular bookings',
            'Flexible payment terms for established corporate clients',
            'Dedicated account management for large accounts',
            'Volume discounts available based on annual commitment'
          ]
        },
        {
          title: 'Meeting & Event Policies',
          type: 'info',
          content: [
            'Meeting room bookings require 48-hour advance notice',
            'Catering orders must be confirmed 24 hours in advance',
            'AV equipment setup included in meeting room rates',
            'Event cancellations within 24 hours subject to charges'
          ]
        },
        {
          title: 'Corporate Billing',
          type: 'info',
          content: [
            'Direct billing available for approved corporate accounts',
            'GST invoices provided for all corporate bookings',
            'Monthly consolidated billing available',
            'Payment terms: Net 30 days for established accounts'
          ]
        }
      ]
    }
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'success': return CheckCircle;
      case 'warning': return AlertCircle;
      case 'info': return Info;
      default: return Info;
    }
  };

  const getColorForType = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-600 bg-green-50 border-green-200';
      case 'warning': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'info': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  const currentPolicy = policies[selectedPolicy as keyof typeof policies];

  return (
    <section id="policies" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Hotel Policies & Guidelines
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Please review our comprehensive policies to ensure a smooth and enjoyable stay. 
            These guidelines help us maintain the highest standards of service and safety.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Policy Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Policy Categories</h3>
              <nav className="space-y-2">
                {policyCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedPolicy(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        selectedPolicy === category.id
                          ? 'bg-gold-500 text-slate-900 shadow-md'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <IconComponent size={20} />
                      <span className="font-medium">{category.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Policy Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">{currentPolicy.title}</h2>
              
              <div className="space-y-8">
                {currentPolicy.sections.map((section, index) => {
                  const IconComponent = getIconForType(section.type);
                  const colorClasses = getColorForType(section.type);
                  
                  return (
                    <div key={index} className={`border rounded-xl p-6 ${colorClasses}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <IconComponent size={24} />
                        <h3 className="text-xl font-bold">{section.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-current mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-4">
                <FileText size={32} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Important Information</h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                These policies are subject to change without prior notice. For the most current information 
                or clarification on any policy, please contact our front desk or management team.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="text-gold-400 mx-auto mb-3" size={24} />
                <h4 className="font-semibold mb-2">24/7 Support</h4>
                <p className="text-slate-300 text-sm">+91 11 4567 8900</p>
              </div>
              <div className="text-center">
                <FileText className="text-gold-400 mx-auto mb-3" size={24} />
                <h4 className="font-semibold mb-2">Policy Updates</h4>
                <p className="text-slate-300 text-sm">Last updated: January 2025</p>
              </div>
              <div className="text-center">
                <Shield className="text-gold-400 mx-auto mb-3" size={24} />
                <h4 className="font-semibold mb-2">Guest Safety</h4>
                <p className="text-slate-300 text-sm">ISO 27001 Certified</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button variant="secondary" size="lg">
                Download Complete Policy Document
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Quick Reference</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Check-in Time', value: '2:00 PM', icon: Clock },
              { title: 'Check-out Time', value: '12:00 PM', icon: Clock },
              { title: 'Cancellation', value: '24 Hours Free', icon: CheckCircle },
              { title: 'Support', value: '24/7 Available', icon: Phone }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
                  <IconComponent className="text-gold-500 mx-auto mb-3" size={32} />
                  <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};