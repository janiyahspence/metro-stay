import React from 'react';
import { 
  MapPin, 
  Plane, 
  Train, 
  Car, 
  Building2, 
  Clock, 
  Navigation,
  Star,
  Coffee,
  ShoppingBag,
  Utensils,
  Briefcase,
  Phone,
  Globe
} from 'lucide-react';
import { Button } from '../ui/Button';

export const Location: React.FC = () => {
  const transportConnectivity = [
    {
      icon: Plane,
      title: 'Indira Gandhi International Airport',
      distance: '12 km',
      time: '25 minutes',
      description: 'Direct highway connectivity with complimentary airport transfer',
      highlight: 'Complimentary Transfer'
    },
    {
      icon: Train,
      title: 'New Delhi Railway Station',
      distance: '8 km',
      time: '20 minutes',
      description: 'Major railway hub connecting all major Indian cities',
      highlight: 'All India Connectivity'
    },
    {
      icon: Train,
      title: 'Rajiv Chowk Metro Station',
      distance: '2 km',
      time: '5 minutes',
      description: 'Central metro hub with connections to all Delhi NCR',
      highlight: 'Metro Hub'
    },
    {
      icon: Car,
      title: 'Major Business Districts',
      distance: '1-5 km',
      time: '5-15 minutes',
      description: 'Walking distance to Connaught Place, Barakhamba Road',
      highlight: 'Prime Location'
    }
  ];

  const nearbyBusinessHubs = [
    {
      name: 'Connaught Place',
      distance: '1.2 km',
      type: 'Commercial Hub',
      companies: ['HDFC Bank', 'ICICI Bank', 'Reliance', 'Tata Consultancy'],
      walkTime: '12 minutes'
    },
    {
      name: 'Barakhamba Road',
      distance: '2.5 km',
      type: 'Corporate Corridor',
      companies: ['Microsoft', 'Google', 'Deloitte', 'PwC'],
      walkTime: '8 minutes drive'
    },
    {
      name: 'Nehru Place',
      distance: '8 km',
      type: 'IT Hub',
      companies: ['Infosys', 'Wipro', 'HCL', 'Tech Mahindra'],
      walkTime: '20 minutes drive'
    },
    {
      name: 'Gurgaon Business District',
      distance: '25 km',
      type: 'Financial Center',
      companies: ['American Express', 'Goldman Sachs', 'JP Morgan'],
      walkTime: '45 minutes drive'
    }
  ];

  const localAttractions = [
    {
      icon: Building2,
      name: 'India Gate',
      distance: '3 km',
      category: 'Monument',
      description: 'Iconic war memorial and popular evening destination'
    },
    {
      icon: Building2,
      name: 'Red Fort',
      distance: '5 km',
      category: 'Heritage',
      description: 'UNESCO World Heritage Site and Mughal architecture'
    },
    {
      icon: ShoppingBag,
      name: 'Khan Market',
      distance: '4 km',
      category: 'Shopping',
      description: 'Upscale shopping and dining destination'
    },
    {
      icon: Coffee,
      name: 'Select City Walk',
      distance: '12 km',
      category: 'Mall',
      description: 'Premium shopping mall with international brands'
    },
    {
      icon: Utensils,
      name: 'Karim\'s Restaurant',
      distance: '6 km',
      category: 'Dining',
      description: 'Historic Mughlai cuisine restaurant since 1913'
    },
    {
      icon: Building2,
      name: 'Lotus Temple',
      distance: '15 km',
      category: 'Spiritual',
      description: 'Architectural marvel and meditation center'
    }
  ];

  const locationAdvantages = [
    {
      title: 'Strategic Business Location',
      description: 'Located in the heart of Delhi\'s central business district with easy access to major corporate offices.',
      benefits: ['Walking distance to 500+ offices', 'Central location saves travel time', 'Professional business environment']
    },
    {
      title: 'Excellent Connectivity',
      description: 'Unmatched connectivity to airports, railway stations, and metro network for seamless travel.',
      benefits: ['25 min to airport', '5 min to metro station', 'Direct highway access']
    },
    {
      title: 'Business Ecosystem',
      description: 'Surrounded by banks, corporate offices, government buildings, and business services.',
      benefits: ['Banking services nearby', 'Government offices accessible', 'Business support services']
    }
  ];

  return (
    <section id="location" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Prime Business Location
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Strategically located in Delhi's central business district, Metro Stay offers 
            unparalleled access to major corporate hubs, government offices, and transportation networks.
          </p>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-96 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={64} className="text-gold-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Metro Stay Business Hotel</h3>
                <p className="text-slate-600 mb-4">Prime Business District, New Delhi - 110001</p>
                <div className="flex gap-4 justify-center">
                  <Button variant="primary" size="sm">
                    Get Directions
                  </Button>
                  <Button variant="outline" size="sm">
                    View on Google Maps
                  </Button>
                </div>
              </div>
              
              {/* Location Markers */}
              <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Plane size={20} className="text-blue-600" />
                  <span className="text-sm font-medium">Airport: 25 min</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Train size={20} className="text-green-600" />
                  <span className="text-sm font-medium">Metro: 5 min</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Building2 size={20} className="text-purple-600" />
                  <span className="text-sm font-medium">CP: 12 min walk</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Connectivity */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Transportation Connectivity</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Exceptional connectivity to all major transportation hubs and business districts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportConnectivity.map((transport, index) => {
              const IconComponent = transport.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                  <div className="absolute -top-3 right-4 bg-gold-500 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {transport.highlight}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-gold-100 transition-colors">
                      <IconComponent size={24} className="text-slate-700 group-hover:text-gold-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{transport.title}</div>
                      <div className="text-gold-600 text-xs font-medium">{transport.distance} • {transport.time}</div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{transport.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Nearby Business Hubs */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Nearby Business Hubs</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Close proximity to Delhi's major business districts and corporate headquarters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {nearbyBusinessHubs.map((hub, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{hub.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                      <span className="flex items-center gap-1">
                        <Navigation size={14} />
                        {hub.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {hub.walkTime}
                      </span>
                    </div>
                    <span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-xs font-medium">
                      {hub.type}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-slate-900 mb-2">Major Companies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {hub.companies.map((company, companyIndex) => (
                      <span key={companyIndex} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Advantages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Location Advantages</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Why Metro Stay's location is perfect for business travelers and corporate events.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {locationAdvantages.map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">{advantage.title}</h4>
                <p className="text-slate-300 mb-6 leading-relaxed">{advantage.description}</p>
                <div className="space-y-2">
                  {advantage.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <Star size={16} className="text-gold-400" />
                      <span className="text-slate-200 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Local Attractions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Local Attractions</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore Delhi's rich heritage and modern attractions during your business stay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localAttractions.map((attraction, index) => {
              const IconComponent = attraction.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gold-100 rounded-lg group-hover:bg-gold-200 transition-colors">
                      <IconComponent size={20} className="text-gold-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-slate-900">{attraction.name}</h4>
                        <span className="text-xs text-slate-500">{attraction.distance}</span>
                      </div>
                      <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs mb-2 inline-block">
                        {attraction.category}
                      </span>
                      <p className="text-slate-600 text-sm leading-relaxed">{attraction.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact & Directions */}
        <div className="bg-gold-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Need Directions or Transportation?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Our concierge team is available 24/7 to assist with directions, transportation arrangements, 
            and local recommendations for your business travel needs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3">
              <Phone className="text-gold-600" size={24} />
              <div className="text-left">
                <div className="font-semibold text-slate-900">Concierge</div>
                <div className="text-sm text-slate-600">+91 11 4567 8900</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Car className="text-gold-600" size={24} />
              <div className="text-left">
                <div className="font-semibold text-slate-900">Transportation</div>
                <div className="text-sm text-slate-600">Available 24/7</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Globe className="text-gold-600" size={24} />
              <div className="text-left">
                <div className="font-semibold text-slate-900">Address</div>
                <div className="text-sm text-slate-600">Prime Business District, Delhi</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Get Detailed Directions
            </Button>
            <Button variant="outline" size="lg">
              Arrange Airport Transfer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};