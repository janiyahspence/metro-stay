import React, { useState } from 'react';
import { Calendar, Clock, Gift, Percent, Star, Users, Briefcase, Coffee, Car, Plane, CheckCircle, ArrowRight, Tag } from 'lucide-react';
import { Button } from '../ui/Button';

interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  originalPrice: number;
  discountedPrice: number;
  validUntil: string;
  category: string;
  features: string[];
  terms: string[];
  popular?: boolean;
  limited?: boolean;
  image: string;
  code: string;
}

export const SpecialOffers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Offers', count: 8 },
    { id: 'rooms', name: 'Room Packages', count: 3 },
    { id: 'corporate', name: 'Corporate Deals', count: 3 },
    { id: 'meetings', name: 'Meeting Packages', count: 2 }
  ];

  const offers: Offer[] = [
    {
      id: 'offer-1',
      title: 'Early Bird Business Package',
      description: 'Book 30 days in advance and save big on your business stay with complimentary breakfast and airport transfer.',
      discount: '25% OFF',
      originalPrice: 12000,
      discountedPrice: 9000,
      validUntil: '2025-03-31',
      category: 'rooms',
      features: ['Complimentary Breakfast', 'Airport Transfer', 'Late Checkout', 'Business Center Access'],
      terms: ['Book 30 days in advance', 'Minimum 2 nights stay', 'Non-refundable', 'Subject to availability'],
      popular: true,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      code: 'EARLY25'
    },
    {
      id: 'offer-2',
      title: 'Corporate Retreat Special',
      description: 'Perfect for team building and corporate events. Includes accommodation, meeting space, and catering.',
      discount: '30% OFF',
      originalPrice: 25000,
      discountedPrice: 17500,
      validUntil: '2025-04-30',
      category: 'corporate',
      features: ['Meeting Room Included', 'Team Lunch & Dinner', 'Coffee Breaks', 'AV Equipment', 'Event Coordination'],
      terms: ['Minimum 10 rooms', 'Minimum 2 days', 'Advance payment required', 'Customizable packages'],
      limited: true,
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      code: 'RETREAT30'
    },
    {
      id: 'offer-3',
      title: 'Extended Stay Advantage',
      description: 'Long-term business stays made affordable. Perfect for project assignments and extended work trips.',
      discount: '35% OFF',
      originalPrice: 8500,
      discountedPrice: 5525,
      validUntil: '2025-06-30',
      category: 'rooms',
      features: ['Weekly Housekeeping', 'Laundry Service', 'Kitchen Facilities', 'Workspace Setup', 'Flexible Check-out'],
      terms: ['Minimum 7 nights', 'Weekly payment options', 'Advance booking required', 'Limited rooms available'],
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      code: 'EXTEND35'
    },
    {
      id: 'offer-4',
      title: 'Meeting & Stay Combo',
      description: 'Book your meeting room and accommodation together for maximum savings and convenience.',
      discount: '20% OFF',
      originalPrice: 15000,
      discountedPrice: 12000,
      validUntil: '2025-05-31',
      category: 'meetings',
      features: ['Meeting Room (8 hours)', 'Accommodation (1 night)', 'Business Breakfast', 'AV Support', 'Parking'],
      terms: ['Same day booking required', 'Subject to room availability', 'Advance payment', 'Cancellation charges apply'],
      popular: true,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      code: 'MEETSTAY20'
    },
    {
      id: 'offer-5',
      title: 'Loyalty Member Exclusive',
      description: 'Special rates for Metro Stay Elite members with additional perks and priority services.',
      discount: '40% OFF',
      originalPrice: 10000,
      discountedPrice: 6000,
      validUntil: '2025-12-31',
      category: 'rooms',
      features: ['Room Upgrade', 'Executive Lounge Access', 'Priority Check-in', 'Bonus Points', 'Flexible Cancellation'],
      terms: ['Elite members only', 'Limited availability', 'Advance booking preferred', 'Combinable with other offers'],
      limited: true,
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      code: 'ELITE40'
    },
    {
      id: 'offer-6',
      title: 'Quarterly Business Package',
      description: 'Comprehensive package for companies with regular business travel needs. Volume discounts included.',
      discount: '45% OFF',
      originalPrice: 50000,
      discountedPrice: 27500,
      validUntil: '2025-03-31',
      category: 'corporate',
      features: ['Dedicated Account Manager', 'Flexible Booking', 'Priority Reservations', 'Consolidated Billing', 'Custom Rates'],
      terms: ['Minimum quarterly commitment', 'Corporate agreement required', 'Volume-based pricing', 'Dedicated support'],
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      code: 'QUARTERLY45'
    },
    {
      id: 'offer-7',
      title: 'Conference & Catering Deal',
      description: 'Complete conference solution with premium catering and professional event management.',
      discount: '25% OFF',
      originalPrice: 35000,
      discountedPrice: 26250,
      validUntil: '2025-04-15',
      category: 'meetings',
      features: ['Conference Hall (Full Day)', 'Premium Catering', 'Event Management', 'Technical Support', 'Welcome Reception'],
      terms: ['Minimum 50 attendees', 'Full day booking', 'Catering minimum applies', 'Event planning included'],
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
      code: 'CONFERENCE25'
    },
    {
      id: 'offer-8',
      title: 'New Client Welcome Offer',
      description: 'Special introductory rates for first-time corporate clients. Experience Metro Stay excellence.',
      discount: '50% OFF',
      originalPrice: 12000,
      discountedPrice: 6000,
      validUntil: '2025-02-28',
      category: 'corporate',
      features: ['First Stay Discount', 'Welcome Amenities', 'Complimentary Upgrade', 'Business Center Access', 'Concierge Service'],
      terms: ['First-time clients only', 'One-time offer', 'Minimum 2 nights', 'Valid ID required'],
      popular: true,
      limited: true,
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      code: 'WELCOME50'
    }
  ];

  const filteredOffers = selectedCategory === 'all' 
    ? offers 
    : offers.filter(offer => offer.category === selectedCategory);

  const featuredOffers = offers.filter(offer => offer.popular);

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'rooms': return Briefcase;
      case 'corporate': return Users;
      case 'meetings': return Coffee;
      default: return Gift;
    }
  };

  const isOfferExpiringSoon = (validUntil: string) => {
    const expiryDate = new Date(validUntil);
    const today = new Date();
    const daysUntilExpiry = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    return daysUntilExpiry <= 7;
  };

  return (
    <section id="offers" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Special Offers & Packages
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover exclusive deals and packages designed for business travelers and corporate clients. 
            Save more while experiencing premium hospitality at Metro Stay.
          </p>
        </div>

        {/* Featured Offers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Featured Deals</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group relative">
                {offer.limited && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                    Limited Time
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-gold-500 text-slate-900 px-3 py-1 rounded-full text-sm font-bold z-10">
                  {offer.discount}
                </div>
                
                <div className="relative overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{offer.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{offer.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gold-600">₹{offer.discountedPrice.toLocaleString()}</span>
                      <span className="text-slate-500 line-through ml-2">₹{offer.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-500">Valid until</div>
                      <div className="font-semibold text-slate-900">
                        {new Date(offer.validUntil).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {offer.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="primary" size="sm" className="flex-1">
                      Book Now
                    </Button>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-xs font-mono">
                      Code: {offer.code}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = getCategoryIcon(category.id);
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gold-500 text-slate-900 shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-slate-100 shadow-md'
                }`}
              >
                <IconComponent size={18} />
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* All Offers Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredOffers.filter(offer => !offer.popular).map((offer) => (
            <div key={offer.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="grid md:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-gold-500 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                    {offer.discount}
                  </div>
                  {offer.limited && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Limited
                    </div>
                  )}
                  {isOfferExpiringSoon(offer.validUntil) && (
                    <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Expires Soon
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{offer.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{offer.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xl font-bold text-gold-600">₹{offer.discountedPrice.toLocaleString()}</span>
                      <span className="text-slate-500 line-through text-sm">₹{offer.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Valid until {new Date(offer.validUntil).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="space-y-1 mb-4">
                    {offer.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-green-600" />
                        <span className="text-slate-700 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Button variant="primary" size="sm" className="w-full">
                      Book Now
                    </Button>
                    <div className="text-center">
                      <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-mono">
                        {offer.code}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup for Exclusive Offers */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-6">
            <Tag size={32} className="text-slate-900" />
          </div>
          <h3 className="text-3xl font-bold mb-4">Get Exclusive Offers</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about special deals, 
            flash sales, and exclusive packages for business travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:ring-2 focus:ring-gold-500 focus:outline-none"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-slate-400">
            Join 10,000+ subscribers and save up to 50% on your business stays
          </p>
        </div>

        {/* Terms & Conditions */}
        <div className="mt-16 bg-white rounded-xl p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Terms & Conditions</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">General Terms</h4>
              <ul className="space-y-2">
                <li>• All offers are subject to availability</li>
                <li>• Advance booking may be required</li>
                <li>• Offers cannot be combined unless specified</li>
                <li>• Prices are subject to applicable taxes</li>
                <li>• Metro Stay reserves the right to modify offers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Booking & Cancellation</h4>
              <ul className="space-y-2">
                <li>• Valid government ID required at check-in</li>
                <li>• Cancellation policies vary by offer</li>
                <li>• Some offers are non-refundable</li>
                <li>• Group bookings may have different terms</li>
                <li>• Contact us for custom corporate packages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};