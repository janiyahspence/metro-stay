import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '../ui/Button';

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

interface VirtualTourModalProps {
  room: MeetingRoom;
  isOpen: boolean;
  onClose: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  room,
  isOpen,
  onClose
}) => {
  const [currentView, setCurrentView] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [zoom, setZoom] = useState(1);

  if (!isOpen) return null;

  const tourViews = [
    {
      name: 'Main View',
      image: room.gallery[0],
      description: 'Overview of the meeting space with seating arrangement'
    },
    {
      name: 'Presentation Area',
      image: room.gallery[1] || room.gallery[0],
      description: 'State-of-the-art presentation equipment and screens'
    },
    {
      name: 'Seating Detail',
      image: room.gallery[2] || room.gallery[0],
      description: 'Comfortable seating with power outlets and connectivity'
    }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would control video playback
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
    // In a real implementation, this would control audio
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleReset = () => {
    setZoom(1);
    setCurrentView(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-black rounded-2xl shadow-2xl w-full mx-4 max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-slate-900 text-white">
          <div>
            <h2 className="text-xl font-bold">{room.name} - Virtual Tour</h2>
            <p className="text-sm text-slate-300">{tourViews[currentView].name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Main Tour Area */}
        <div className="relative bg-black">
          <div className="relative overflow-hidden" style={{ height: '60vh' }}>
            <img 
              src={tourViews[currentView].image}
              alt={`${room.name} - ${tourViews[currentView].name}`}
              className="w-full h-full object-cover transition-transform duration-300"
              style={{ transform: `scale(${zoom})` }}
            />
            
            {/* Tour Controls Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
                <button
                  onClick={handlePlayPause}
                  className="text-white hover:text-gold-400 transition-colors"
                >
                  {isPlaying ? <Pause size={48} /> : <Play size={48} />}
                </button>
              </div>
            </div>

            {/* Zoom Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button
                onClick={handleZoomIn}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-colors"
              >
                <ZoomIn size={20} />
              </button>
              <button
                onClick={handleZoomOut}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-colors"
              >
                <ZoomOut size={20} />
              </button>
              <button
                onClick={handleReset}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-colors"
              >
                <RotateCcw size={20} />
              </button>
            </div>

            {/* Audio Control */}
            <div className="absolute top-4 left-4">
              <button
                onClick={handleMute}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-colors"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>

            {/* View Description */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/70 backdrop-blur-sm text-white p-4 rounded-lg">
                <p className="text-sm">{tourViews[currentView].description}</p>
              </div>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="bg-slate-900 p-4">
            {/* View Selector */}
            <div className="flex items-center justify-center gap-4 mb-4">
              {tourViews.map((view, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentView(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentView === index
                      ? 'bg-gold-500 text-slate-900'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  {view.name}
                </button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-800 rounded-full h-2 mb-4">
              <div 
                className="bg-gold-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentView + 1) / tourViews.length) * 100}%` }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentView(prev => Math.max(0, prev - 1))}
                  disabled={currentView === 0}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentView(prev => Math.min(tourViews.length - 1, prev + 1))}
                  disabled={currentView === tourViews.length - 1}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                >
                  Next
                </button>
              </div>

              <div className="flex items-center gap-4">
                <button className="text-white hover:text-gold-400 transition-colors">
                  <Maximize size={20} />
                </button>
                <Button variant="secondary" size="sm">
                  Book This Room
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Room Information Sidebar */}
        <div className="bg-white p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Room Details</h4>
              <div className="space-y-1 text-sm text-slate-600">
                <div>Size: {room.size}</div>
                <div>Max Capacity: {Math.max(...Object.values(room.capacity))} people</div>
                <div>Hourly Rate: ₹{room.hourlyRate.toLocaleString()}</div>
                <div>Day Rate: ₹{room.dayRate.toLocaleString()}</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Equipment</h4>
              <div className="space-y-1 text-sm text-slate-600">
                {room.equipment.slice(0, 4).map((equipment, index) => (
                  <div key={index}>• {equipment.name}</div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Ideal For</h4>
              <div className="space-y-1 text-sm text-slate-600">
                {room.idealFor.slice(0, 4).map((use, index) => (
                  <div key={index}>• {use}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};