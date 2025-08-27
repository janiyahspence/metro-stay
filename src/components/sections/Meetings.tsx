import React, { useState } from 'react';
import { 
  Users, 
  Monitor, 
  Wifi, 
  Coffee, 
  Mic, 
  Camera, 
  Projector, 
  Phone,
  Calendar,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Building2,
  Utensils,
  Car,
  Shield
} from 'lucide-react';
import { Button } from '../ui/Button';
import { MeetingBookingModal } from '../modals/MeetingBookingModal';
import { VirtualTourModal } from '../modals/VirtualTourModal';

interface MeetingRoom {
  id: string;
  name: string;
  type: string;
  capacity: {
    theater: number;
    boardroom: number;
    classroom: number;
    cocktail: number;
  };
  size: string;
  hourlyRate: number;
  dayRate: number;
  image: string;
  gallery: string[];
  features: string[];
  equipment: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    name: string;
  }[];
  description: string;
  idealFor: string[];
  rating: number;
  bookings: number;
}

export const Meetings: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<MeetingRoom | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<string>('');

  const meetingRooms: MeetingRoom[] = [
    {
      id: 'boardroom-executive',
      name: 'Executive Boardroom',
      type: 'boardroom',
      capacity: {
        theater: 0,
        boardroom: 12,
        classroom: 0,
        cocktail: 15
      },
      size: '45 sqm',
      hourlyRate: 2500,
      dayRate: 18000,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: ['Natural Light', 'Premium Furniture', 'Climate Control', 'Soundproof'],
      equipment: [
        { icon: Monitor, name: '75" 4K Display' },
        { icon: Camera, name: 'HD Video Conferencing' },
        { icon: Wifi, name: 'High-Speed WiFi' },
        { icon: Coffee, name: 'Coffee Station' }
      ],
      description: 'Elegant boardroom perfect for executive meetings and high-level discussions with premium amenities.',
      idealFor: ['Board Meetings', 'Executive Sessions', 'Client Presentations', 'Strategic Planning'],
      rating: 4.9,
      bookings: 156
    },
    {
      id: 'conference-grand',
      name: 'Grand Conference Hall',
      type: 'conference',
      capacity: {
        theater: 120,
        boardroom: 40,
        classroom: 80,
        cocktail: 150
      },
      size: '180 sqm',
      hourlyRate: 4500,
      dayRate: 32000,
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: ['Flexible Seating', 'Stage Area', 'Advanced AV', 'Breakout Spaces'],
      equipment: [
        { icon: Projector, name: 'Dual Projectors' },
        { icon: Mic, name: 'Wireless Microphones' },
        { icon: Camera, name: 'Live Streaming Setup' },
        { icon: Phone, name: 'Conference Calling' }
      ],
      description: 'Spacious conference hall ideal for large corporate events, seminars, and product launches.',
      idealFor: ['Corporate Events', 'Product Launches', 'Seminars', 'Training Sessions'],
      rating: 4.8,
      bookings: 89
    },
    {
      id: 'meeting-innovation',
      name: 'Innovation Hub',
      type: 'meeting',
      capacity: {
        theater: 30,
        boardroom: 16,
        classroom: 24,
        cocktail: 35
      },
      size: '65 sqm',
      hourlyRate: 1800,
      dayRate: 12500,
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: ['Interactive Whiteboard', 'Modular Furniture', 'Creative Setup', 'Tech Integration'],
      equipment: [
        { icon: Monitor, name: 'Interactive Display' },
        { icon: Wifi, name: 'Premium WiFi' },
        { icon: Camera, name: 'Video Conferencing' },
        { icon: Coffee, name: 'Refreshment Area' }
      ],
      description: 'Modern meeting space designed for creative collaboration and innovative thinking sessions.',
      idealFor: ['Team Meetings', 'Brainstorming', 'Workshops', 'Creative Sessions'],
      rating: 4.7,
      bookings: 234
    }
  ];

  const corporatePackages = [
    {
      name: 'Half-Day Package',
      duration: '4 Hours',
      price: 15000,
      includes: ['Meeting Room', 'AV Equipment', 'Coffee Breaks (2)', 'Stationery', 'WiFi Access'],
      popular: false
    },
    {
      name: 'Full-Day Package',
      duration: '8 Hours',
      price: 25000,
      includes: ['Meeting Room', 'AV Equipment', 'Coffee Breaks (2)', 'Business Lunch', 'Stationery', 'WiFi Access', 'Parking'],
      popular: true
    },
    {
      name: 'Multi-Day Package',
      duration: '3 Days',
      price: 65000,
      includes: ['Meeting Room', 'AV Equipment', 'All Meals', 'Coffee Breaks', 'Accommodation Discount', 'Airport Transfer', 'Dedicated Support'],
      popular: false
    }
  ];

  const handleBookRoom = (roomId: string) => {
    setSelectedRoomForBooking(roomId);
    setIsBookingModalOpen(true);
  };

  const handleVirtualTour = (room: MeetingRoom) => {
    setSelectedRoom(room);
    setIsTourModalOpen(true);
  };

  return (
    <section id="meetings" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Conference & Meeting Facilities
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            State-of-the-art meeting spaces equipped with cutting-edge technology 
            to ensure your corporate events and business meetings are successful.
          </p>
        </div>

        {/* Meeting Rooms Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {meetingRooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              {/* Room Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={14} className="text-gold-500 fill-current" />
                  <span className="text-sm font-semibold">{room.rating}</span>
                  <span className="text-xs text-slate-600">({room.bookings})</span>
                </div>
                <button
                  onClick={() => handleVirtualTour(room)}
                  className="absolute bottom-4 left-4 bg-slate-900/80 hover:bg-slate-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
                >
                  <Play size={16} />
                  <span className="text-sm">Virtual Tour</span>
                </button>
              </div>

              {/* Room Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{room.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <Users size={16} />
                        Up to {Math.max(...Object.values(room.capacity))} guests
                      </span>
                      <span>{room.size}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gold-600">
                      ₹{room.hourlyRate.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-500">per hour</div>
                    <div className="text-sm text-slate-600 mt-1">
                      ₹{room.dayRate.toLocaleString()}/day
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {room.description}
                </p>

                {/* Capacity Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-slate-50 rounded-lg">
                  {Object.entries(room.capacity).map(([setup, capacity]) => (
                    capacity > 0 && (
                      <div key={setup} className="text-center">
                        <div className="text-lg font-bold text-slate-900">{capacity}</div>
                        <div className="text-xs text-slate-600 capitalize">{setup}</div>
                      </div>
                    )
                  ))}
                </div>

                {/* Equipment Icons */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                  {room.equipment.map((equipment, index) => {
                    const IconComponent = equipment.icon;
                    return (
                      <div key={index} className="flex flex-col items-center gap-1 group/equipment">
                        <div className="p-2 bg-slate-100 rounded-lg group-hover/equipment:bg-gold-100 transition-colors">
                          <IconComponent size={20} className="text-slate-600 group-hover/equipment:text-gold-600" />
                        </div>
                        <span className="text-xs text-slate-500 text-center">{equipment.name}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Ideal For Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.idealFor.slice(0, 3).map((use, index) => (
                    <span key={index} className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm">
                      {use}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleVirtualTour(room)}
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleBookRoom(room.id)}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Packages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Corporate Packages</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive meeting packages designed to provide everything you need for successful corporate events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {corporatePackages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${pkg.popular ? 'ring-2 ring-gold-500' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-slate-900 px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h4>
                  <p className="text-slate-600 mb-4">{pkg.duration}</p>
                  <div className="text-4xl font-bold text-gold-600 mb-2">
                    ₹{pkg.price.toLocaleString()}
                  </div>
                  <p className="text-sm text-slate-500">Starting from</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={pkg.popular ? "primary" : "outline"} 
                  size="lg" 
                  className="w-full"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Select Package
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Building2, title: 'Premium Venues', description: 'Elegant spaces for all event types' },
            { icon: Monitor, title: 'Latest Technology', description: 'State-of-the-art AV equipment' },
            { icon: Utensils, title: 'Catering Services', description: 'Gourmet meals and refreshments' },
            { icon: Car, title: 'Valet Parking', description: 'Complimentary parking for guests' }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-4 group-hover:bg-gold-600 transition-colors">
                  <IconComponent size={32} className="text-slate-900" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Host Your Next Event?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our event specialists are ready to help you plan the perfect corporate event. 
            From intimate boardroom meetings to large conferences, we have the expertise and facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Schedule Site Visit
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-slate-900">
              Speak with Event Specialist
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 11 4567 8900</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>24/7 Event Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <MeetingBookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedRoom={selectedRoomForBooking}
        rooms={meetingRooms}
      />

      {selectedRoom && (
        <VirtualTourModal 
          room={selectedRoom}
          isOpen={isTourModalOpen}
          onClose={() => setIsTourModalOpen(false)}
        />
      )}
    </section>
  );
};