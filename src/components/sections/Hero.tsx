import React, { useState } from 'react';
import { Calendar, Users, MapPin, Award, Wifi, Car } from 'lucide-react';
import { Button } from '../ui/Button';
import { LazyImage } from '../ui/LazyImage';
import { BookingModal } from '../modals/BookingModal';
import { NewsletterModal } from '../modals/NewsletterModal';

export const Hero: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  return (
    <section id="home" className="relative min-h-screen flex items-center" role="banner">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70 z-10"></div>
        <LazyImage
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Metro Stay Business Hotel"
          className="w-full h-full object-cover"
        />
      </div>

      <div id="main-content" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-gold-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-gold-400 text-sm font-medium mb-6">
              <Award size={16} />
              <span>Premier Business Hotel</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where Business
              <span className="block text-gold-400">Meets Excellence</span>
            </h2>
            
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Experience unparalleled comfort and professional services at Metro Stay. 
              Strategically located in Delhi's prime business district, we cater to 
              corporate travelers who demand the finest.
            </p>

            {/* Quick Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="text-gold-400" size={20} aria-hidden="true" />
                <div>
                  <div className="font-semibold text-sm">Prime Location</div>
                  <div className="text-xs text-slate-300">Business District</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Wifi className="text-gold-400" size={20} aria-hidden="true" />
                <div>
                  <div className="font-semibold text-sm">Free High-Speed WiFi</div>
                  <div className="text-xs text-slate-300">Throughout Property</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Car className="text-gold-400" size={20} aria-hidden="true" />
                <div>
                  <div className="font-semibold text-sm">Airport Transfer</div>
                  <div className="text-xs text-slate-300">Complimentary</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => setIsBookingModalOpen(true)}
                icon={Calendar}
              >
                Book Your Stay
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-white border-white hover:bg-white hover:text-slate-900"
                onClick={() => setIsNewsletterModalOpen(true)}
              >
                Subscribe for Offers
              </Button>
            </div>
          </div>

          {/* Right Content - Quick Booking Card */}
          <div className="lg:ml-8">
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8" role="form" aria-labelledby="booking-form-title">
              <div className="text-center mb-6">
                <h3 id="booking-form-title" className="text-2xl font-bold text-slate-900 mb-2">Quick Booking</h3>
                <p className="text-slate-600">Reserve your business accommodation</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Check-in</label>
                    <input
                      type="date"
                      id="checkin-date"
                      name="checkin"
                      aria-label="Check-in date"
                      min={today}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                      defaultValue={today}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Check-out</label>
                    <input
                      type="date"
                      id="checkout-date"
                      name="checkout"
                      aria-label="Check-out date"
                      min={tomorrow}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                      defaultValue={tomorrow}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Guests</label>
                    <select 
                      id="guests-select"
                      name="guests"
                      aria-label="Number of guests"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Rooms</label>
                    <select 
                      id="rooms-select"
                      name="rooms"
                      aria-label="Number of rooms"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                    >
                      <option>1 Room</option>
                      <option>2 Rooms</option>
                      <option>3 Rooms</option>
                      <option>4+ Rooms</option>
                    </select>
                  </div>
                </div>

                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Check Availability
                </Button>

                <div className="text-center">
                  <p className="text-sm text-slate-500">
                    Best Rate Guarantee • Free Cancellation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
      
      <NewsletterModal 
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />
    </section>
  );
};