import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Building2, User, Calendar, Award, TrendingUp, Users } from 'lucide-react';
import { Button } from '../ui/Button';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  companyLogo?: string;
  rating: number;
  review: string;
  date: string;
  category: string;
  verified: boolean;
  image: string;
  stayDuration: string;
  roomType: string;
}

export const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Reviews', count: 15 },
    { id: 'business', name: 'Business Travel', count: 8 },
    { id: 'corporate', name: 'Corporate Events', count: 4 },
    { id: 'meetings', name: 'Meetings & Conferences', count: 3 }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 'test-1',
      name: 'Aarav Mehta',
      position: 'CEO',
      company: 'TechVision Solutions',
      rating: 5,
      review: 'Metro Stay has been our go-to choice for corporate accommodations in Delhi. The business center facilities are exceptional, and the meeting rooms are equipped with everything we need for successful client presentations. The staff understands the urgency of business travel and always delivers.',
      date: '2025-01-10',
      category: 'business',
      verified: true,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      stayDuration: '3 nights',
      roomType: 'Executive Suite'
    },
    {
      id: 'test-2',
      name: 'Diya Nair',
      position: 'VP Marketing',
      company: 'Global Dynamics',
      rating: 5,
      review: 'Outstanding service and attention to detail. The Executive Floor provides the perfect environment for focused work, and the complimentary breakfast is excellent. The location is ideal for accessing major business districts in Delhi. Highly recommend for business travelers.',
      date: '2025-01-08',
      category: 'business',
      verified: true,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      stayDuration: '2 nights',
      roomType: 'Business Room'
    },
    {
      id: 'test-3',
      name: 'Ishaan Kapoor',
      position: 'Director',
      company: 'Pinnacle Consulting',
      rating: 5,
      review: 'We hosted our annual board meeting at Metro Stay, and it was flawless. The Grand Conference Hall was perfect for our 50-person event, and the catering was exceptional. The event coordination team handled every detail professionally. Will definitely book again.',
      date: '2025-01-05',
      category: 'corporate',
      verified: true,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      stayDuration: '2 days event',
      roomType: 'Conference Suite'
    },
    {
      id: 'test-4',
      name: 'Rhea Sharma',
      position: 'Regional Manager',
      company: 'InnovateCorp',
      rating: 5,
      review: 'The Innovation Hub meeting room was perfect for our creative brainstorming session. The technology integration is seamless, and the ambiance promotes productivity. The concierge service helped arrange everything we needed. Exceptional business hotel experience.',
      date: '2025-01-03',
      category: 'meetings',
      verified: true,
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      stayDuration: '1 day',
      roomType: 'Business Room'
    },
    {
      id: 'test-5',
      name: 'Vivaan Reddy',
      position: 'CFO',
      company: 'FinanceFirst Ltd',
      rating: 4,
      review: 'Excellent facilities for extended business stays. The Executive Suite provides a comfortable work environment, and the business center is available 24/7. The airport transfer service is reliable and professional. Great value for corporate travelers.',
      date: '2024-12-28',
      category: 'business',
      verified: true,
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      stayDuration: '5 nights',
      roomType: 'Executive Suite'
    },
    {
      id: 'test-6',
      name: 'Anaya Malhotra',
      position: 'HR Director',
      company: 'PeopleFirst Solutions',
      rating: 5,
      review: 'We organized our leadership retreat at Metro Stay, and it exceeded expectations. The combination of comfortable accommodations and professional meeting facilities created the perfect environment for team building and strategic planning.',
      date: '2024-12-25',
      category: 'corporate',
      verified: true,
      image: 'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=400',
      stayDuration: '3 days',
      roomType: 'Executive Suite'
    },
    {
      id: 'test-7',
      name: 'Arjun Desai',
      position: 'Sales Director',
      company: 'MarketLeaders Inc',
      rating: 5,
      review: 'The Executive Boardroom was ideal for our client presentation. The AV equipment worked flawlessly, and the professional atmosphere impressed our international clients. The staff anticipated our needs and provided excellent support throughout.',
      date: '2024-12-22',
      category: 'meetings',
      verified: true,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      stayDuration: '2 nights',
      roomType: 'Conference Suite'
    },
    {
      id: 'test-8',
      name: 'Tara Iyer',
      position: 'Operations Manager',
      company: 'LogiFlow Systems',
      rating: 4,
      review: 'Consistently reliable service for our monthly business trips. The rooms are well-designed for work, WiFi is excellent, and the location saves significant travel time to our client offices. The loyalty program benefits are valuable for frequent travelers.',
      date: '2024-12-20',
      category: 'business',
      verified: true,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      stayDuration: '2 nights',
      roomType: 'Business Room'
    },
    {
      id: 'test-9',
      name: 'Krish Bansal',
      position: 'Project Manager',
      company: 'BuildTech Solutions',
      rating: 5,
      review: 'Hosted our project kickoff meeting here, and the facilities were outstanding. The meeting room setup was perfect, catering was delicious, and the technical support team ensured our presentations ran smoothly. Professional service throughout.',
      date: '2024-12-18',
      category: 'meetings',
      verified: true,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      stayDuration: '1 day',
      roomType: 'Business Room'
    },
    {
      id: 'test-10',
      name: 'Myra Joshi',
      position: 'Business Development Head',
      company: 'GrowthPartners',
      rating: 5,
      review: 'The Conference Suite was perfect for our investor presentation. The private meeting room, butler service, and attention to detail created the right impression. The airport transfer service ensured our international guests arrived comfortably.',
      date: '2024-12-15',
      category: 'corporate',
      verified: true,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      stayDuration: '1 night',
      roomType: 'Conference Suite'
    },
    {
      id: 'test-11',
      name: 'Advait Menon',
      position: 'General Manager',
      company: 'ServiceExcellence Ltd',
      rating: 4,
      review: 'Great business hotel with professional staff and excellent facilities. The business center is well-equipped, and the executive lounge provides a quiet space for calls and meetings. The location is convenient for accessing multiple business districts.',
      date: '2024-12-12',
      category: 'business',
      verified: true,
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      stayDuration: '4 nights',
      roomType: 'Executive Suite'
    },
    {
      id: 'test-12',
      name: 'Kiara Sethi',
      position: 'Training Manager',
      company: 'SkillDevelopment Corp',
      rating: 5,
      review: 'Conducted a 2-day training program at Metro Stay. The training room was spacious, well-lit, and equipped with modern AV systems. The break-out areas were perfect for group activities. Catering was excellent, and the staff was very supportive.',
      date: '2024-12-10',
      category: 'corporate',
      verified: true,
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      stayDuration: '2 days',
      roomType: 'Business Room'
    },
    {
      id: 'test-13',
      name: 'Reyansh Gupta',
      position: 'IT Director',
      company: 'TechSolutions Pro',
      rating: 5,
      review: 'The technology infrastructure is impressive. High-speed WiFi throughout, excellent AV equipment in meeting rooms, and reliable technical support. Perfect for tech companies hosting client demos and technical presentations.',
      date: '2024-12-08',
      category: 'business',
      verified: true,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      stayDuration: '3 nights',
      roomType: 'Executive Suite'
    },
    {
      id: 'test-14',
      name: 'Aanya Rao',
      position: 'Event Manager',
      company: 'EventCrafters',
      rating: 5,
      review: 'As an event professional, I appreciate the attention to detail at Metro Stay. The event coordination team is experienced, the venues are versatile, and the catering quality is consistently high. They understand the importance of flawless execution.',
      date: '2024-12-05',
      category: 'corporate',
      verified: true,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      stayDuration: '1 day',
      roomType: 'Conference Suite'
    },
    {
      id: 'test-15',
      name: 'Siddharth Verma',
      position: 'Consultant',
      company: 'Strategic Advisors',
      rating: 4,
      review: 'Regular guest for client meetings. The Executive Boardroom creates the right professional atmosphere, and the service is consistently excellent. The central location makes it convenient for clients from different parts of Delhi to attend meetings.',
      date: '2024-12-03',
      category: 'business',
      verified: true,
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
      stayDuration: '1 night',
      roomType: 'Business Room'
    }
  ];

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === selectedCategory);

  const featuredTestimonials = testimonials.slice(0, 3);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-gold-500 fill-current' : 'text-slate-300'}
      />
    ));
  };

  const averageRating = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / testimonials.length;
  const totalReviews = testimonials.length;
  const fiveStarReviews = testimonials.filter(t => t.rating === 5).length;
  const fourStarReviews = testimonials.filter(t => t.rating === 4).length;

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our Guests Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover why business professionals and corporate teams choose Metro Stay 
            for their accommodation and meeting needs in Delhi.
          </p>
        </div>

        {/* Review Statistics */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold-600 mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">
                {renderStars(Math.round(averageRating))}
              </div>
              <div className="text-slate-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{totalReviews}+</div>
              <div className="text-slate-600">Total Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">{Math.round((fiveStarReviews / totalReviews) * 100)}%</div>
              <div className="text-slate-600">5-Star Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-slate-600">Would Recommend</div>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Featured Reviews</h3>
          <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white">
            <div className="absolute top-8 left-8">
              <Quote size={48} className="text-gold-400 opacity-50" />
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="mb-6">
                {renderStars(featuredTestimonials[currentTestimonial].rating)}
              </div>
              
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-8">
                "{featuredTestimonials[currentTestimonial].review}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <img
                  src={featuredTestimonials[currentTestimonial].image}
                  alt={featuredTestimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-lg">
                    {featuredTestimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gold-400">
                    {featuredTestimonials[currentTestimonial].position}
                  </div>
                  <div className="text-slate-300 text-sm">
                    {featuredTestimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-gold-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gold-500 text-slate-900 shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category.name}
              <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-300 text-slate-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTestimonials.slice(3).map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
                {testimonial.verified && (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                    Verified Stay
                  </span>
                )}
              </div>
              
              <blockquote className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.review}"
              </blockquote>
              
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-gold-600 text-sm">{testimonial.position}</div>
                  <div className="text-slate-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
              
              <div className="flex justify-between text-xs text-slate-500 pt-4 border-t border-slate-200">
                <span>{testimonial.stayDuration} • {testimonial.roomType}</span>
                <span>{new Date(testimonial.date).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Recognition */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-6">
            <Award size={32} className="text-slate-900" />
          </div>
          <h3 className="text-3xl font-bold mb-4">Award-Winning Service</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and valued by 
            thousands of business travelers who trust Metro Stay for their accommodation needs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <TrendingUp className="text-gold-400 mx-auto mb-3" size={32} />
              <h4 className="font-semibold text-lg mb-2">Best Business Hotel 2024</h4>
              <p className="text-slate-300 text-sm">India Hospitality Awards</p>
            </div>
            <div>
              <Users className="text-gold-400 mx-auto mb-3" size={32} />
              <h4 className="font-semibold text-lg mb-2">Excellence in Service</h4>
              <p className="text-slate-300 text-sm">Corporate Travel Awards</p>
            </div>
            <div>
              <Building2 className="text-gold-400 mx-auto mb-3" size={32} />
              <h4 className="font-semibold text-lg mb-2">Top Meeting Venue</h4>
              <p className="text-slate-300 text-sm">Business Events India</p>
            </div>
          </div>
          
          <Button variant="secondary" size="lg">
            View All Awards
          </Button>
        </div>
      </div>
    </section>
  );
};