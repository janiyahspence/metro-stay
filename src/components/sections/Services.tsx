import React, { useState } from 'react';
import { 
  Briefcase, 
  Utensils, 
  Dumbbell, 
  Car, 
  Headphones, 
  Wifi, 
  Shield, 
  Clock,
  Users,
  Coffee,
  Printer,
  Phone,
  Plane,
  MapPin,
  Star,
  CheckCircle,
  Award,
  Heart,
  Zap,
  Globe
} from 'lucide-react';
import { Button } from '../ui/Button';
import { ContactModal } from '../modals/ContactModal';

export const Services: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const services = [
    {
      icon: Briefcase,
      title: 'Business Center',
      description: '24/7 fully equipped business center with high-speed internet, printing, and meeting facilities.',
      features: ['High-speed WiFi', 'Printing & Scanning', 'Meeting Rooms', 'Video Conferencing'],
      available: '24/7',
      highlight: 'Most Popular'
    },
    {
      icon: Utensils,
      title: 'Fine Dining',
      description: 'Experience culinary excellence at our signature restaurant and executive lounge.',
      features: ['Multi-cuisine Restaurant', 'Executive Lounge', 'Room Service', 'Private Dining'],
      available: '6:00 AM - 11:00 PM',
      highlight: 'Award Winning'
    },
    {
      icon: Dumbbell,
      title: 'Fitness & Wellness',
      description: 'State-of-the-art fitness center and spa services to keep you energized.',
      features: ['Modern Gym Equipment', 'Personal Training', 'Spa Services', 'Yoga Classes'],
      available: '5:00 AM - 11:00 PM',
      highlight: '24/7 Access'
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Convenient transportation services including airport transfers and city tours.',
      features: ['Airport Transfer', 'City Tours', 'Car Rental', 'Chauffeur Service'],
      available: 'On Request',
      highlight: 'Complimentary'
    },
    {
      icon: Headphones,
      title: 'Concierge Services',
      description: 'Personalized assistance for all your business and leisure needs.',
      features: ['Travel Planning', 'Event Booking', 'Restaurant Reservations', 'Local Guidance'],
      available: '24/7',
      highlight: 'Premium Service'
    },
    {
      icon: Shield,
      title: 'Security & Safety',
      description: 'Comprehensive security measures ensuring your safety and peace of mind.',
      features: ['24/7 Security', 'CCTV Monitoring', 'Safe Deposit', 'Emergency Response'],
      available: '24/7',
      highlight: 'Certified Safe'
    },
    {
      icon: Plane,
      title: 'Airport Services',
      description: 'Seamless airport connectivity with priority check-in and baggage assistance.',
      features: ['Priority Check-in', 'Baggage Assistance', 'Flight Updates', 'Lounge Access'],
      available: '24/7',
      highlight: 'VIP Treatment'
    },
    {
      icon: Globe,
      title: 'International Services',
      description: 'Specialized services for international business travelers and global corporations.',
      features: ['Currency Exchange', 'Translation Services', 'International Calling', 'Visa Assistance'],
      available: 'Business Hours',
      highlight: 'Global Ready'
    },
    {
      icon: Heart,
      title: 'Wellness Programs',
      description: 'Comprehensive wellness programs designed for busy executives and business travelers.',
      features: ['Executive Health Check', 'Stress Management', 'Nutrition Counseling', 'Sleep Therapy'],
      available: 'By Appointment',
      highlight: 'Executive Wellness'
    }
  ];

  const businessAmenities = [
    { icon: Wifi, name: 'High-Speed WiFi', description: 'Complimentary throughout property', speed: '1 Gbps' },
    { icon: Printer, name: 'Business Services', description: 'Printing, copying, fax services', available: '24/7' },
    { icon: Users, name: 'Meeting Rooms', description: 'Fully equipped conference facilities', count: '12 Rooms' },
    { icon: Coffee, name: 'Executive Lounge', description: 'Exclusive access for business guests', hours: '6 AM - 11 PM' },
    { icon: Phone, name: 'Communication', description: 'International calling facilities', coverage: 'Global' },
    { icon: Clock, name: '24/7 Support', description: 'Round-the-clock assistance', response: '< 5 mins' },
    { icon: Car, name: 'Valet Parking', description: 'Complimentary for all guests', capacity: '200 Cars' },
    { icon: Shield, name: 'Security', description: 'Advanced security systems', certified: 'ISO 27001' },
    { icon: MapPin, name: 'Prime Location', description: 'Heart of business district', distance: '5 min to Metro' }
  ];

  const premiumServices = [
    {
      title: 'Executive Floor',
      description: 'Exclusive floor with premium amenities and personalized service',
      features: ['Private Check-in', 'Dedicated Concierge', 'Executive Lounge Access', 'Complimentary Breakfast'],
      price: 'Included in Executive Rooms',
      icon: Star
    },
    {
      title: 'Corporate Packages',
      description: 'Tailored packages for extended business stays and corporate events',
      features: ['Volume Discounts', 'Flexible Billing', 'Dedicated Account Manager', 'Priority Booking'],
      price: 'Custom Pricing',
      icon: Briefcase
    },
    {
      title: 'Loyalty Program',
      description: 'Metro Stay Elite - Exclusive benefits for frequent business travelers',
      features: ['Room Upgrades', 'Late Checkout', 'Bonus Points', 'Partner Benefits'],
      price: 'Free to Join',
      icon: Award
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Premium Services & Amenities
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Elevate your business travel experience with our comprehensive range of 
            professional services and luxury amenities designed for the modern executive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group relative">
                {service.highlight && (
                  <div className="absolute -top-3 left-6 bg-gold-500 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {service.highlight}
                  </div>
                )}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gold-500 rounded-xl group-hover:bg-gold-600 transition-colors">
                    <IconComponent size={28} className="text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-sm text-gold-600 font-medium">{service.available}</p>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Premium Services</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Exclusive offerings designed for discerning business travelers who demand excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {premiumServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gold-500 rounded-xl">
                      <IconComponent size={28} className="text-slate-900" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{service.title}</h4>
                      <p className="text-gold-400 text-sm font-medium">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-gold-400" />
                        <span className="text-slate-200 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Button variant="secondary" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Business Amenities Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Business Amenities</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Everything you need to stay productive and connected during your business stay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessAmenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-gold-500 rounded-lg">
                    <IconComponent size={24} className="text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{amenity.name}</h4>
                    <p className="text-slate-300 text-sm">{amenity.description}</p>
                    <div className="text-xs text-gold-400">
                      {amenity.speed && `Speed: ${amenity.speed}`}
                      {amenity.available && `Available: ${amenity.available}`}
                      {amenity.count && `Facilities: ${amenity.count}`}
                      {amenity.hours && `Hours: ${amenity.hours}`}
                      {amenity.coverage && `Coverage: ${amenity.coverage}`}
                      {amenity.response && `Response: ${amenity.response}`}
                      {amenity.capacity && `Capacity: ${amenity.capacity}`}
                      {amenity.certified && `Certified: ${amenity.certified}`}
                      {amenity.distance && `Distance: ${amenity.distance}`}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Service Categories */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Service Categories</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive service offerings organized by category for easy access.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                category: 'Business Services', 
                count: '15+', 
                icon: Briefcase,
                services: ['Meeting Rooms', 'Business Center', 'Secretarial Services', 'Translation']
              },
              { 
                category: 'Hospitality Services', 
                count: '20+', 
                icon: Heart,
                services: ['Concierge', 'Room Service', 'Laundry', 'Housekeeping']
              },
              { 
                category: 'Technology Services', 
                count: '10+', 
                icon: Zap,
                services: ['High-Speed WiFi', 'AV Equipment', 'IT Support', 'Video Conferencing']
              },
              { 
                category: 'Transportation', 
                count: '8+', 
                icon: Car,
                services: ['Airport Transfer', 'City Tours', 'Car Rental', 'Chauffeur']
              }
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gold-100 rounded-lg group-hover:bg-gold-200 transition-colors">
                      <IconComponent size={24} className="text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{category.category}</h4>
                      <p className="text-sm text-gold-600">{category.count} Services</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="text-sm text-slate-600 flex items-center gap-2">
                        <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Service Request Section */}
        <div className="mt-20 text-center">
          <div className="bg-gold-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Need Something Special?
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Our dedicated concierge team is available 24/7 to assist with any special 
              requests or arrangements to make your stay exceptional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => setIsContactModalOpen(true)}
              >
                Contact Concierge
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsContactModalOpen(true)}
              >
                Service Request Form
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-8 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 11 4567 8900</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} />
                <span>5-Star Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialSubject="Service Request"
      />
    </section>
  );
};