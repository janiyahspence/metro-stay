import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Maximize, Camera, Building2, Users, Utensils, Dumbbell } from 'lucide-react';
import { Button } from '../ui/Button';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
}

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Photos', count: 24 },
    { id: 'rooms', name: 'Rooms & Suites', count: 8 },
    { id: 'meetings', name: 'Meeting Rooms', count: 6 },
    { id: 'dining', name: 'Dining', count: 4 },
    { id: 'facilities', name: 'Facilities', count: 6 }
  ];

  const galleryImages: GalleryImage[] = [
    // Rooms & Suites
    {
      id: 'room-1',
      src: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Business Room',
      category: 'rooms',
      description: 'Elegant business room with modern amenities and city views'
    },
    {
      id: 'room-2',
      src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Executive Suite',
      category: 'rooms',
      description: 'Spacious executive suite with separate living area'
    },
    {
      id: 'room-3',
      src: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Conference Suite',
      category: 'rooms',
      description: 'Premium suite with dedicated meeting space'
    },
    {
      id: 'room-4',
      src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Luxury Bathroom',
      category: 'rooms',
      description: 'Premium bathroom with marble finishes'
    },
    {
      id: 'room-5',
      src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Hotel Exterior',
      category: 'rooms',
      description: 'Modern hotel facade in business district'
    },
    {
      id: 'room-6',
      src: 'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Lobby Area',
      category: 'rooms',
      description: 'Elegant lobby with contemporary design'
    },
    {
      id: 'room-7',
      src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Premium Room',
      category: 'rooms',
      description: 'Comfortable accommodation with work desk'
    },
    {
      id: 'room-8',
      src: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Room Interior',
      category: 'rooms',
      description: 'Modern room design with business amenities'
    },

    // Meeting Rooms
    {
      id: 'meeting-1',
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Executive Boardroom',
      category: 'meetings',
      description: 'Premium boardroom for executive meetings'
    },
    {
      id: 'meeting-2',
      src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Grand Conference Hall',
      category: 'meetings',
      description: 'Large conference hall for corporate events'
    },
    {
      id: 'meeting-3',
      src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Innovation Hub',
      category: 'meetings',
      description: 'Modern meeting space for creative sessions'
    },
    {
      id: 'meeting-4',
      src: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Training Room',
      category: 'meetings',
      description: 'Flexible training room with modern equipment'
    },
    {
      id: 'meeting-5',
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Presentation Setup',
      category: 'meetings',
      description: 'State-of-the-art presentation equipment'
    },
    {
      id: 'meeting-6',
      src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Meeting Technology',
      category: 'meetings',
      description: 'Advanced AV technology for business meetings'
    },

    // Dining
    {
      id: 'dining-1',
      src: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Signature Restaurant',
      category: 'dining',
      description: 'Fine dining restaurant with international cuisine'
    },
    {
      id: 'dining-2',
      src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Executive Lounge',
      category: 'dining',
      description: 'Exclusive lounge for business guests'
    },
    {
      id: 'dining-3',
      src: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Business Breakfast',
      category: 'dining',
      description: 'Healthy breakfast options for business travelers'
    },
    {
      id: 'dining-4',
      src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Coffee Bar',
      category: 'dining',
      description: 'Premium coffee and light refreshments'
    },

    // Facilities
    {
      id: 'facility-1',
      src: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Fitness Center',
      category: 'facilities',
      description: 'Modern fitness center with latest equipment'
    },
    {
      id: 'facility-2',
      src: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Business Center',
      category: 'facilities',
      description: '24/7 business center with printing facilities'
    },
    {
      id: 'facility-3',
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Reception Area',
      category: 'facilities',
      description: 'Professional reception with 24/7 service'
    },
    {
      id: 'facility-4',
      src: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Concierge Desk',
      category: 'facilities',
      description: 'Dedicated concierge for guest services'
    },
    {
      id: 'facility-5',
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Parking Facility',
      category: 'facilities',
      description: 'Secure parking with valet service'
    },
    {
      id: 'facility-6',
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Spa & Wellness',
      category: 'facilities',
      description: 'Relaxation and wellness facilities'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'rooms': return Building2;
      case 'meetings': return Users;
      case 'dining': return Utensils;
      case 'facilities': return Dumbbell;
      default: return Camera;
    }
  };

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Photo Gallery
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our premium facilities, elegant accommodations, and professional 
            meeting spaces through our comprehensive photo gallery.
          </p>
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
                <IconComponent size={20} />
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-slate-200">{image.description}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Maximize size={20} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-gold-500 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Tour CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-6">
            <Play size={32} className="text-slate-900" />
          </div>
          <h3 className="text-3xl font-bold mb-4">Experience Metro Stay Virtually</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Take a comprehensive virtual tour of our facilities and see why Metro Stay 
            is the preferred choice for business travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Start Virtual Tour
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-slate-900">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="relative max-w-6xl max-h-[90vh] mx-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gold-400 transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-slate-200">{selectedImage.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="bg-gold-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                  {selectedImage.category}
                </span>
                <span className="text-slate-300 text-sm">
                  {currentImageIndex + 1} of {filteredImages.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};