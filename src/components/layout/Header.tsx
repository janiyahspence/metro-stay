import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { SkipLink } from '../ui/SkipLink';
import { LoyaltySignupModal } from '../modals/LoyaltySignupModal';
import { NewsletterModal } from '../modals/NewsletterModal';
import { ContactModal } from '../modals/ContactModal';
import { BookingModal } from '../modals/BookingModal';
import { RateInquiryModal } from '../modals/RateInquiryModal';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoyaltyModalOpen, setIsLoyaltyModalOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isRateInquiryModalOpen, setIsRateInquiryModalOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Meetings', href: '#meetings' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Offers', href: '#offers' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Careers', href: '#careers' }
  ];

  return (
    <>
    <SkipLink />
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <Phone size={14} aria-hidden="true" />
                <span>+91 11 4567 8900</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Mail size={14} aria-hidden="true" />
                <span>reservations@metrostay.in</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin size={14} aria-hidden="true" />
              <span>Prime Business District, New Delhi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-slate-900">
              Metro<span className="text-gold-500">Stay</span>
            </h1>
            <div className="ml-3 hidden sm:block">
              <div className="text-xs text-slate-600 font-medium">BUSINESS HOTEL</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200 relative group focus:outline-none focus:ring-2 focus:ring-gold-500 focus:rounded px-2 py-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLoyaltyModalOpen(true)}
            >
              Join Elite
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsRateInquiryModalOpen(true)}
            >
              Check Rates
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book Now
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-slate-200" role="navigation" aria-label="Mobile navigation">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-slate-700 hover:text-slate-900 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <Button
                variant="ghost"
                size="sm"
                className="w-full"
                onClick={() => {
                  setIsLoyaltyModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Join Elite
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => {
                  setIsRateInquiryModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Check Rates
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                onClick={() => {
                  setIsBookingModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Book Now
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full"
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>

    {/* Modals */}
    <LoyaltySignupModal 
      isOpen={isLoyaltyModalOpen}
      onClose={() => setIsLoyaltyModalOpen(false)}
    />
    
    <NewsletterModal 
      isOpen={isNewsletterModalOpen}
      onClose={() => setIsNewsletterModalOpen(false)}
    />
    
    <ContactModal
      isOpen={isContactModalOpen}
      onClose={() => setIsContactModalOpen(false)}
    />

    <BookingModal
      isOpen={isBookingModalOpen}
      onClose={() => setIsBookingModalOpen(false)}
    />

    <RateInquiryModal
      isOpen={isRateInquiryModalOpen}
      onClose={() => setIsRateInquiryModalOpen(false)}
    />
    </>
  );
};