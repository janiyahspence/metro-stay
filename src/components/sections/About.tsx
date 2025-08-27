import React from 'react';
import { 
  Award, 
  Users, 
  Building2, 
  Heart, 
  Target, 
  Globe,
  CheckCircle,
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from '../ui/Button';

export const About: React.FC = () => {
  const achievements = [
    { icon: Award, number: '25+', label: 'Industry Awards', description: 'Recognition for excellence' },
    { icon: Users, number: '50K+', label: 'Satisfied Guests', description: 'Annual business travelers' },
    { icon: Building2, number: '150+', label: 'Premium Rooms', description: 'Luxury accommodations' },
    { icon: Calendar, number: '10+', label: 'Years Excellence', description: 'Serving since 2014' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every aspect of our service, ensuring that every guest experience exceeds expectations.'
    },
    {
      icon: Heart,
      title: 'Hospitality',
      description: 'Genuine care and personalized attention form the foundation of our approach to business hospitality.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We continuously evolve our services and technology to meet the changing needs of modern business travelers.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building lasting relationships with our corporate clients through trust, reliability, and exceptional service.'
    }
  ];

  const leadership = [
    {
      name: 'Rajesh Kumar',
      position: 'General Manager',
      experience: '15+ years in luxury hospitality',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Corporate Relations & Strategic Planning'
    },
    {
      name: 'Priya Sharma',
      position: 'Director of Operations',
      experience: '12+ years in hotel operations',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Service Excellence & Guest Experience'
    },
    {
      name: 'Amit Patel',
      position: 'Head of Business Development',
      experience: '10+ years in corporate sales',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Corporate Partnerships & Events'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 14001:2015 Environmental Management',
    'OHSAS 18001 Occupational Health & Safety',
    'Green Building Certification',
    'Fire Safety Compliance Certificate',
    'Food Safety & Hygiene Certification'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Metro Stay
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Since 2014, Metro Stay has been the preferred choice for business travelers 
            seeking exceptional service, modern amenities, and strategic location in 
            Delhi's prime business district.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Metro Stay was founded with a vision to redefine business hospitality in India. 
                Located in the heart of Delhi's business district, we recognized the need for 
                a hotel that truly understands the unique requirements of corporate travelers.
              </p>
              <p>
                Over the past decade, we have consistently evolved our services, incorporating 
                cutting-edge technology and personalized service to create an environment where 
                business thrives. Our commitment to excellence has earned us recognition as one 
                of India's leading business hotels.
              </p>
              <p>
                Today, Metro Stay stands as a testament to Indian hospitality excellence, 
                serving over 50,000 business travelers annually and hosting countless 
                successful corporate events and meetings.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="primary" size="lg">
                Download Company Profile
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Metro Stay Hotel Exterior"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-gold-500 text-slate-900 p-6 rounded-xl">
              <div className="text-2xl font-bold">2014</div>
              <div className="text-sm font-medium">Established</div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Achievements</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence in business hospitality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-4 group-hover:bg-gold-600 transition-colors">
                    <IconComponent size={32} className="text-slate-900" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">{achievement.number}</div>
                  <div className="text-xl font-semibold text-slate-900 mb-2">{achievement.label}</div>
                  <div className="text-slate-600">{achievement.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The core principles that guide our approach to business hospitality and service excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-6 group-hover:bg-gold-600 transition-colors">
                    <IconComponent size={32} className="text-slate-900" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Meet the experienced professionals who lead Metro Stay's commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{leader.name}</h4>
                  <p className="text-gold-600 font-semibold mb-2">{leader.position}</p>
                  <p className="text-sm text-slate-600 mb-3">{leader.experience}</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{leader.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Award className="text-gold-500" size={28} />
              Certifications & Compliance
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-slate-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Star className="text-gold-400" size={28} />
              Recent Awards
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-gold-400 pl-4">
                <div className="font-semibold text-gold-400">2024</div>
                <div className="text-sm">Best Business Hotel - India Hospitality Awards</div>
              </div>
              <div className="border-l-4 border-gold-400 pl-4">
                <div className="font-semibold text-gold-400">2023</div>
                <div className="text-sm">Excellence in Corporate Services - Travel + Leisure</div>
              </div>
              <div className="border-l-4 border-gold-400 pl-4">
                <div className="font-semibold text-gold-400">2023</div>
                <div className="text-sm">Sustainable Hotel of the Year - Green Hospitality</div>
              </div>
              <div className="border-l-4 border-gold-400 pl-4">
                <div className="font-semibold text-gold-400">2022</div>
                <div className="text-sm">Top Business Hotel - Corporate Travel Awards</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gold-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Get in Touch</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Ready to experience Metro Stay's exceptional business hospitality? 
            Contact us to discuss your corporate accommodation needs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="text-gold-600" size={24} />
              <div className="text-left">
                <div className="font-semibold text-slate-900">Location</div>
                <div className="text-sm text-slate-600">Prime Business District, New Delhi</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="text-gold-600" size={24} />
              <div className="text-left">
                <div className="font-semibold text-slate-900">Phone</div>
                <div className="text-sm text-slate-600">+91 11 4567 8900</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="text-gold-600" size={24} />
              <div className="text-left">
                <div className="font-semibold text-slate-900">Email</div>
                <div className="text-sm text-slate-600">info@metrostay.in</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Schedule a Visit
            </Button>
            <Button variant="outline" size="lg">
              Corporate Partnerships
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};