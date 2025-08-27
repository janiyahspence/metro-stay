import React, { useState } from 'react';
import { X, Star, Bed, Users, Maximize, ChevronLeft, ChevronRight, Wifi, Monitor, Coffee, Bath, Car, Check } from 'lucide-react';
import { Button } from '../ui/Button';

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

interface RoomDetailModalProps {
  room: Room;
  isOpen: boolean;
  onClose: () => void;
  onBook: () => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  isOpen,
  onClose,
  onBook
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.gallery.length) % room.gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full mx-4 max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-slate-900">{room.name}</h2>
            <div className="flex items-center gap-1 bg-gold-100 px-3 py-1 rounded-full">
              <Star size={16} className="text-gold-500 fill-current" />
              <span className="text-sm font-semibold text-gold-700">{room.rating}</span>
              <span className="text-xs text-gold-600">({room.reviews} reviews)</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={24} className="text-slate-500" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid lg:grid-cols-2 gap-8 p-6">
            {/* Left Column - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={room.gallery[currentImageIndex]} 
                  alt={`${room.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-80 object-cover"
                />
                
                {/* Image Navigation */}
                {room.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    >
                      <ChevronLeft size={20} className="text-slate-700" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    >
                      <ChevronRight size={20} className="text-slate-700" />
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {room.gallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Price Badge */}
                {room.originalPrice && (
                  <div className="absolute top-4 left-4 bg-gold-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Save ₹{(room.originalPrice - room.price).toLocaleString()}
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {room.gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {room.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex ? 'border-gold-500' : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Room Info */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="text-center">
                  <Maximize className="mx-auto mb-2 text-slate-600" size={24} />
                  <div className="font-semibold text-slate-900">{room.size}</div>
                  <div className="text-sm text-slate-600">Room Size</div>
                </div>
                <div className="text-center">
                  <Users className="mx-auto mb-2 text-slate-600" size={24} />
                  <div className="font-semibold text-slate-900">{room.occupancy}</div>
                  <div className="text-sm text-slate-600">Occupancy</div>
                </div>
                <div className="text-center">
                  <Bed className="mx-auto mb-2 text-slate-600" size={24} />
                  <div className="font-semibold text-slate-900">{room.bedType}</div>
                  <div className="text-sm text-slate-600">Bed Type</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">About This Room</h3>
                <p className="text-slate-600 leading-relaxed">{room.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Room Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {room.amenities.map((amenity, index) => {
                    const IconComponent = amenity.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="p-2 bg-gold-100 rounded-lg">
                          <IconComponent size={20} className="text-gold-600" />
                        </div>
                        <span className="text-slate-700">{amenity.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Business Features */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Business Features</h3>
                <div className="space-y-2">
                  {room.businessFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check size={16} className="text-green-600" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Features */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Additional Features</h3>
                <div className="flex flex-wrap gap-2">
                  {room.features.map((feature, index) => (
                    <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing & Booking */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Book This Room</h3>
                    <p className="text-slate-300">Best rate guaranteed</p>
                  </div>
                  <div className="text-right">
                    {room.originalPrice && (
                      <div className="text-slate-400 line-through text-sm">
                        ₹{room.originalPrice.toLocaleString()}
                      </div>
                    )}
                    <div className="text-3xl font-bold text-gold-400">
                      ₹{room.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-slate-300">per night</div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="flex-1"
                    onClick={onBook}
                  >
                    Book Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-white border-white hover:bg-white hover:text-slate-900"
                  >
                    Add to Compare
                  </Button>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-xs text-slate-400">
                    Free cancellation • No booking fees • Instant confirmation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};