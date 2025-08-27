import React, { useState } from 'react';
import { Wifi, Car, Coffee, Dumbbell, Users, Bed, Monitor, Bath, Star, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { RoomDetailModal } from '../modals/RoomDetailModal';
import { BookingModal } from '../modals/BookingModal';

interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery: string[];
  size: string;
  occupancy: string;
  bedType: string;
  features: string[];
  amenities: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    name: string;
  }[];
  description: string;
  businessFeatures: string[];
  rating: number;
  reviews: number;
}

export const Rooms: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<string>('');

  const rooms: Room[] = [
    {
      id: 'business-room',
      name: 'Business Room',
      type: 'business',
      price: 8500,
      originalPrice: 10000,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      size: '32 sqm',
      occupancy: '1-2 Guests',
      bedType: 'King Size Bed',
      features: ['City View', 'Work Desk', 'High-Speed WiFi', 'Mini Bar'],
      amenities: [
        { icon: Wifi, name: 'Free WiFi' },
        { icon: Monitor, name: '42" Smart TV' },
        { icon: Coffee, name: 'Coffee Machine' },
        { icon: Bath, name: 'Premium Bathroom' }
      ],
      description: 'Perfect for business travelers, our Business Rooms offer a comfortable workspace and modern amenities in the heart of Delhi\'s business district.',
      businessFeatures: ['Ergonomic work chair', '24/7 room service', 'Express laundry', 'Business center access'],
      rating: 4.7,
      reviews: 324
    },
    {
      id: 'executive-suite',
      name: 'Executive Suite',
      type: 'executive',
      price: 12500,
      originalPrice: 15000,
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      size: '55 sqm',
      occupancy: '1-3 Guests',
      bedType: 'King Size Bed + Sofa Bed',
      features: ['Separate Living Area', 'Conference Table', 'Premium WiFi', 'Complimentary Breakfast'],
      amenities: [
        { icon: Wifi, name: 'Premium WiFi' },
        { icon: Monitor, name: '55" Smart TV' },
        { icon: Coffee, name: 'Espresso Machine' },
        { icon: Users, name: 'Meeting Space' }
      ],
      description: 'Spacious suites with separate living and sleeping areas, ideal for extended stays and small meetings.',
      businessFeatures: ['Private meeting space', 'Concierge service', 'Priority check-in', 'Executive lounge access'],
      rating: 4.8,
      reviews: 198
    },
    {
      id: 'conference-suite',
      name: 'Conference Suite',
      type: 'conference',
      price: 18500,
      originalPrice: 22000,
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      size: '85 sqm',
      occupancy: '1-4 Guests',
      bedType: 'King Size Bed + Twin Beds',
      features: ['Private Meeting Room', 'Presentation Equipment', 'Butler Service', 'Airport Transfer'],
      amenities: [
        { icon: Users, name: 'Meeting Room' },
        { icon: Monitor, name: 'Presentation Setup' },
        { icon: Car, name: 'Airport Transfer' },
        { icon: Coffee, name: 'Premium Minibar' }
      ],
      description: 'Our premium Conference Suites feature dedicated meeting spaces with state-of-the-art presentation equipment.',
      businessFeatures: ['Dedicated meeting room', 'AV equipment included', 'Personal butler', 'VIP airport transfer'],
      rating: 4.9,
      reviews: 156
    }
  ];

  const handleBookRoom = (roomType: string) => {
    setSelectedRoomForBooking(roomType);
    setIsBookingModalOpen(true);
  };

  const handleViewDetails = (room: Room) => {
    setSelectedRoom(room);
  };

  return (
    <section id="rooms" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Luxury Rooms & Suites
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled comfort in our thoughtfully designed accommodations, 
            each tailored to meet the unique needs of business travelers.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              {/* Room Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {room.originalPrice && (
                  <div className="absolute top-4 left-4 bg-gold-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Save ₹{(room.originalPrice - room.price).toLocaleString()}
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={14} className="text-gold-500 fill-current" />
                  <span className="text-sm font-semibold">{room.rating}</span>
                  <span className="text-xs text-slate-600">({room.reviews})</span>
                </div>
              </div>

              {/* Room Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{room.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <Bed size={16} />
                        {room.bedType}
                      </span>
                      <span>{room.size}</span>
                      <span>{room.occupancy}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    {room.originalPrice && (
                      <div className="text-sm text-slate-500 line-through">
                        ₹{room.originalPrice.toLocaleString()}
                      </div>
                    )}
                    <div className="text-2xl font-bold text-gold-600">
                      ₹{room.price.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-500">per night</div>
                  </div>
                </div>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {room.description}
                </p>

                {/* Key Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.slice(0, 4).map((feature, index) => (
                    <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Amenities Icons */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                  {room.amenities.map((amenity, index) => {
                    const IconComponent = amenity.icon;
                    return (
                      <div key={index} className="flex flex-col items-center gap-1 group/amenity">
                        <div className="p-2 bg-slate-100 rounded-lg group-hover/amenity:bg-gold-100 transition-colors">
                          <IconComponent size={20} className="text-slate-600 group-hover/amenity:text-gold-600" />
                        </div>
                        <span className="text-xs text-slate-500">{amenity.name}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleViewDetails(room)}
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleBookRoom(room.type)}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Room Comparison Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Compare Our Rooms</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Features</th>
                  {rooms.map((room) => (
                    <th key={room.id} className="text-center py-4 px-4 font-semibold text-slate-900">
                      {room.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-medium text-slate-700">Room Size</td>
                  {rooms.map((room) => (
                    <td key={room.id} className="py-4 px-4 text-center text-slate-600">{room.size}</td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-medium text-slate-700">Occupancy</td>
                  {rooms.map((room) => (
                    <td key={room.id} className="py-4 px-4 text-center text-slate-600">{room.occupancy}</td>
                  ))}
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-medium text-slate-700">Work Space</td>
                  <td className="py-4 px-4 text-center text-green-600">✓ Desk</td>
                  <td className="py-4 px-4 text-center text-green-600">✓ Living Area</td>
                  <td className="py-4 px-4 text-center text-green-600">✓ Meeting Room</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-medium text-slate-700">Breakfast</td>
                  <td className="py-4 px-4 text-center text-slate-400">—</td>
                  <td className="py-4 px-4 text-center text-green-600">✓ Complimentary</td>
                  <td className="py-4 px-4 text-center text-green-600">✓ Premium</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-medium text-slate-700">Airport Transfer</td>
                  <td className="py-4 px-4 text-center text-slate-400">—</td>
                  <td className="py-4 px-4 text-center text-slate-400">—</td>
                  <td className="py-4 px-4 text-center text-green-600">✓ VIP Transfer</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-slate-700">Price per night</td>
                  {rooms.map((room) => (
                    <td key={room.id} className="py-4 px-4 text-center">
                      <div className="text-lg font-bold text-gold-600">
                        ₹{room.price.toLocaleString()}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Our reservation specialists are available 24/7 to help you find the perfect accommodation 
              for your business travel needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Call +91 11 4567 8900
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-slate-900">
                Request Callback
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedRoom && (
        <RoomDetailModal 
          room={selectedRoom}
          isOpen={!!selectedRoom}
          onClose={() => setSelectedRoom(null)}
          onBook={() => {
            handleBookRoom(selectedRoom.type);
            setSelectedRoom(null);
          }}
        />
      )}

      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedRoom={selectedRoomForBooking}
      />
    </section>
  );
};