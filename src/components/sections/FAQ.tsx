import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Phone, Mail, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  popular?: boolean;
}

export const FAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Questions', count: 24 },
    { id: 'booking', name: 'Booking & Reservations', count: 6 },
    { id: 'rooms', name: 'Rooms & Amenities', count: 5 },
    { id: 'meetings', name: 'Meetings & Events', count: 4 },
    { id: 'services', name: 'Services & Facilities', count: 5 },
    { id: 'policies', name: 'Policies & Guidelines', count: 4 }
  ];

  const faqItems: FAQItem[] = [
    // Booking & Reservations
    {
      id: 'booking-1',
      category: 'booking',
      question: 'How can I make a reservation at Metro Stay?',
      answer: 'You can make a reservation through our website booking system, by calling +91 11 4567 8900, or by emailing reservations@metrostay.in. Our reservation team is available 24/7 to assist you.',
      popular: true
    },
    {
      id: 'booking-2',
      category: 'booking',
      question: 'What is your cancellation policy?',
      answer: 'We offer free cancellation up to 24 hours before your check-in date. For cancellations within 24 hours, a one-night charge may apply. Corporate bookings may have different terms based on the agreement.',
      popular: true
    },
    {
      id: 'booking-3',
      category: 'booking',
      question: 'Do you offer corporate rates for business travelers?',
      answer: 'Yes, we offer special corporate rates for companies and frequent business travelers. Contact our corporate sales team at corporate@metrostay.in for customized packages and volume discounts.',
      popular: true
    },
    {
      id: 'booking-4',
      category: 'booking',
      question: 'Can I modify my reservation after booking?',
      answer: 'Yes, you can modify your reservation subject to availability. Changes can be made through our website, by calling our reservations team, or by contacting your dedicated account manager for corporate bookings.'
    },
    {
      id: 'booking-5',
      category: 'booking',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, UPI payments, and bank transfers. Corporate clients can also set up billing arrangements.'
    },
    {
      id: 'booking-6',
      category: 'booking',
      question: 'Do you offer group booking discounts?',
      answer: 'Yes, we offer attractive group rates for bookings of 10 or more rooms. Contact our group sales team for customized packages including meeting spaces and catering options.'
    },

    // Rooms & Amenities
    {
      id: 'rooms-1',
      category: 'rooms',
      question: 'What amenities are included in the rooms?',
      answer: 'All rooms include free high-speed WiFi, flat-screen TV, work desk, mini-bar, coffee/tea maker, premium bathroom amenities, 24/7 room service, and daily housekeeping. Executive rooms include additional premium amenities.',
      popular: true
    },
    {
      id: 'rooms-2',
      category: 'rooms',
      question: 'Do you have rooms suitable for extended business stays?',
      answer: 'Yes, our Executive Suites and Conference Suites are perfect for extended stays, featuring separate living areas, kitchenette facilities, and enhanced work spaces. We also offer weekly and monthly rates.'
    },
    {
      id: 'rooms-3',
      category: 'rooms',
      question: 'Is WiFi free throughout the hotel?',
      answer: 'Yes, we provide complimentary high-speed WiFi (up to 1 Gbps) throughout the hotel including all rooms, meeting spaces, lobby, restaurant, and business center.'
    },
    {
      id: 'rooms-4',
      category: 'rooms',
      question: 'What are your check-in and check-out times?',
      answer: 'Standard check-in is at 2:00 PM and check-out is at 12:00 PM. Early check-in and late check-out are available subject to availability. Elite members enjoy extended check-out times.'
    },
    {
      id: 'rooms-5',
      category: 'rooms',
      question: 'Do you provide airport transportation?',
      answer: 'Yes, we offer complimentary airport transfers for Conference Suite guests and Elite Platinum members. Airport transfer service is available for other guests at ₹1,500 per trip.'
    },

    // Meetings & Events
    {
      id: 'meetings-1',
      category: 'meetings',
      question: 'What meeting facilities do you offer?',
      answer: 'We have 12 meeting rooms including the Executive Boardroom (12 people), Grand Conference Hall (120 people), and Innovation Hub (30 people). All rooms feature state-of-the-art AV equipment and flexible seating arrangements.',
      popular: true
    },
    {
      id: 'meetings-2',
      category: 'meetings',
      question: 'Do you provide catering for meetings and events?',
      answer: 'Yes, we offer comprehensive catering services including business breakfast, working lunches, coffee breaks, and formal dinners. Our culinary team can customize menus based on dietary requirements and preferences.'
    },
    {
      id: 'meetings-3',
      category: 'meetings',
      question: 'What AV equipment is available in meeting rooms?',
      answer: 'All meeting rooms include 4K displays, wireless presentation systems, video conferencing capabilities, wireless microphones, and high-speed internet. Additional equipment like projectors and recording systems are available on request.'
    },
    {
      id: 'meetings-4',
      category: 'meetings',
      question: 'Can you help with event planning and coordination?',
      answer: 'Absolutely! Our dedicated events team provides comprehensive planning services including setup coordination, catering arrangements, technical support, and on-site event management to ensure your event\'s success.'
    },

    // Services & Facilities
    {
      id: 'services-1',
      category: 'services',
      question: 'What business services do you provide?',
      answer: 'Our 24/7 business center offers printing, scanning, fax services, secretarial support, translation services, and courier arrangements. We also provide laptop rentals and mobile charging stations.',
      popular: true
    },
    {
      id: 'services-2',
      category: 'services',
      question: 'Do you have a fitness center and spa?',
      answer: 'Yes, we have a modern fitness center open 24/7 with latest equipment and personal training services. Our spa offers massage therapy, wellness treatments, and relaxation services by appointment.'
    },
    {
      id: 'services-3',
      category: 'services',
      question: 'What dining options are available?',
      answer: 'We have a signature multi-cuisine restaurant, executive lounge, coffee bar, and 24/7 room service. The executive lounge is exclusive to business guests and Elite members with complimentary breakfast and evening refreshments.'
    },
    {
      id: 'services-4',
      category: 'services',
      question: 'Is parking available at the hotel?',
      answer: 'Yes, we provide complimentary valet parking for all guests with a capacity of 200 vehicles. The parking facility is secure with 24/7 surveillance and is conveniently located adjacent to the hotel.'
    },
    {
      id: 'services-5',
      category: 'services',
      question: 'Do you offer concierge services?',
      answer: 'Our 24/7 concierge team assists with travel arrangements, restaurant reservations, local attractions, business services, and any special requests to enhance your stay experience.'
    },

    // Policies & Guidelines
    {
      id: 'policies-1',
      category: 'policies',
      question: 'What is your pet policy?',
      answer: 'We welcome well-behaved pets in designated rooms with advance notice. A pet fee of ₹2,000 per night applies, and pets must be supervised at all times. Service animals are always welcome at no charge.'
    },
    {
      id: 'policies-2',
      category: 'policies',
      question: 'Do you have a smoking policy?',
      answer: 'Metro Stay is a non-smoking hotel. Smoking is prohibited in all rooms and indoor areas. Designated smoking areas are available on the terrace and outdoor spaces.'
    },
    {
      id: 'policies-3',
      category: 'policies',
      question: 'What are your age restrictions for check-in?',
      answer: 'Guests must be 18 years or older to check in. Valid government-issued photo identification is required for all guests during check-in for security and legal compliance.'
    },
    {
      id: 'policies-4',
      category: 'policies',
      question: 'What is your loyalty program?',
      answer: 'Metro Stay Elite offers three tiers: Silver, Gold, and Platinum. Benefits include room discounts, upgrades, late checkout, complimentary breakfast, and exclusive access to the executive lounge. Membership is free to join.'
    }
  ];

  const filteredFAQs = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFAQs = faqItems.filter(item => item.popular);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, facilities, and policies. 
            Can't find what you're looking for? Our support team is here to help.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-lg"
            />
          </div>
        </div>

        {/* Popular Questions */}
        {searchTerm === '' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Popular Questions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularFAQs.map((item) => (
                <div
                  key={item.id}
                  className="bg-gold-50 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-semibold text-slate-900 pr-4">{item.question}</h4>
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="text-gold-600 flex-shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-gold-600 flex-shrink-0" size={20} />
                    )}
                  </div>
                  {openItems.includes(item.id) && (
                    <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

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

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      {item.popular && (
                        <span className="bg-gold-500 text-slate-900 px-2 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      )}
                      <h3 className="font-semibold text-slate-900 text-lg">{item.question}</h3>
                    </div>
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="text-gold-600 flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-slate-600 flex-shrink-0" size={24} />
                    )}
                  </button>
                  
                  {openItems.includes(item.id) && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-slate-200 pt-4">
                        <p className="text-slate-600 leading-relaxed text-lg">{item.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No questions found</h3>
              <p className="text-slate-600">Try adjusting your search terms or browse different categories.</p>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Our support team is available 24/7 to assist you with any questions or concerns. 
              We're committed to providing exceptional service and support.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="bg-gold-500 rounded-full p-4 mb-4">
                  <Phone size={24} className="text-slate-900" />
                </div>
                <h4 className="font-semibold mb-2">Call Us</h4>
                <p className="text-slate-300 text-sm mb-2">24/7 Phone Support</p>
                <p className="text-gold-400 font-medium">+91 11 4567 8900</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-gold-500 rounded-full p-4 mb-4">
                  <Mail size={24} className="text-slate-900" />
                </div>
                <h4 className="font-semibold mb-2">Email Us</h4>
                <p className="text-slate-300 text-sm mb-2">Response within 2 hours</p>
                <p className="text-gold-400 font-medium">support@metrostay.in</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-gold-500 rounded-full p-4 mb-4">
                  <MessageCircle size={24} className="text-slate-900" />
                </div>
                <h4 className="font-semibold mb-2">Live Chat</h4>
                <p className="text-slate-300 text-sm mb-2">Instant assistance</p>
                <p className="text-gold-400 font-medium">Available 24/7</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Contact Support
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-slate-900">
                Submit Feedback
              </Button>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
              <Clock size={16} />
              <span>Average response time: 15 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};