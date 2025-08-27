import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Star,
  Award,
  Shield,
  Wifi,
  Car,
  Coffee,
  Users,
  Building2,
  ArrowUp
} from 'lucide-react';
import { Button } from '../ui/Button';
import { NewsletterModal } from '../modals/NewsletterModal';
import { ContactModal } from '../modals/ContactModal';

export const Footer: React.FC = () => {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms & Suites', href: '#rooms' },
    { name: 'Meeting Facilities', href: '#meetings' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Location', href: '#location' }
  ];

  const businessServices = [
    { name: 'Corporate Rates', href: '#offers' },
    { name: 'Meeting Rooms', href: '#meetings' },
    { name: 'Business Center', href: '#services' },
    { name: 'Airport Transfer', href: '#services' },
    { name: 'Event Planning', href: '#meetings' },
    { name: 'Loyalty Program', href: '#' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '#policies' },
    { name: 'Terms & Conditions', href: '#policies' },
    { name: 'Cancellation Policy', href: '#policies' },
    { name: 'Corporate Policies', href: '#policies' },
    { name: 'Safety Guidelines', href: '#policies' },
    { name: 'Accessibility', href: '#policies' }
  ];

  const amenities = [
    { icon: Wifi, name: 'Free WiFi' },
    { icon: Car, name: 'Valet Parking' },
    { icon: Coffee, name: 'Business Center' },
    { icon: Users, name: 'Meeting Rooms' },
    { icon: Building2, name: 'Executive Lounge' },
    { icon: Shield, name: '24/7 Security' }
  ];

  return (
    <>
      <footer className="bg-slate-900 text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  Metro<span className="text-gold-400">Stay</span>
                </h3>
                <p className="text-sm text-slate-400 font-medium">BUSINESS HOTEL</p>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Delhi's premier business hotel offering luxury accommodation, 
                state-of-the-art meeting facilities, and professional services 
                for corporate travelers.
              </p>

              {/* Awards */}
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-gold-400" size={20} />
                <span className="text-sm text-slate-300">Best Business Hotel 2024</span>
              </div>

              {/* Social Media */}
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-slate-800 hover:bg-gold-500 p-2 rounded-lg transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-slate-800 hover:bg-gold-500 p-2 rounded-lg transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-slate-800 hover:bg-gold-500 p-2 rounded-lg transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-slate-800 hover:bg-gold-500 p-2 rounded-lg transition-colors"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-slate-300 hover:text-gold-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Business Services</h4>
              <ul className="space-y-3">
                {businessServices.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="text-slate-300 hover:text-gold-400 transition-colors text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-gold-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-slate-300 text-sm">
                      Prime Business District<br />
                      New Delhi - 110001<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="text-gold-400 flex-shrink-0" size={18} />
                  <a 
                    href="tel:+911145678900" 
                    className="text-slate-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    +91 11 4567 8900
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="text-gold-400 flex-shrink-0" size={18} />
                  <a 
                    href="mailto:reservations@metrostay.in" 
                    className="text-slate-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    reservations@metrostay.in
                  </a>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="text-gold-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-slate-300 text-sm">
                      24/7 Reception & Support<br />
                      Check-in: 2:00 PM<br />
                      Check-out: 12:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Amenities Section */}
          <div className="border-t border-slate-800 mt-12 pt-8">
            <h4 className="text-lg font-semibold mb-6 text-center">Hotel Amenities</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {amenities.map((amenity, index) => {
                const IconComponent = amenity.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-slate-300">
                    <IconComponent size={16} className="text-gold-400" />
                    <span className="text-sm">{amenity.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-slate-300 text-sm">
                Subscribe to our newsletter for exclusive offers and business travel insights
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => setIsNewsletterModalOpen(true)}
              >
                Subscribe to Newsletter
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="text-white border-white hover:bg-white hover:text-slate-900"
                onClick={() => setIsContactModalOpen(true)}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-400">
                <p>&copy; 2025 Metro Stay Business Hotel. All rights reserved.</p>
                <div className="flex gap-4">
                  {policies.map((policy, index) => (
                    <a 
                      key={index}
                      href={policy.href}
                      className="hover:text-gold-400 transition-colors"
                    >
                      {policy.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Star size={16} className="text-gold-400" />
                  <span>4.8/5 Rating</span>
                </div>
                <button
                  onClick={scrollToTop}
                  className="bg-gold-500 hover:bg-gold-600 text-slate-900 p-2 rounded-lg transition-colors"
                  aria-label="Scroll to top"
                >
                  <ArrowUp size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <NewsletterModal 
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />
      
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};