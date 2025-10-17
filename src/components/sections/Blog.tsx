import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag, Clock, Eye, MessageCircle, Share2, BookOpen, TrendingUp, Globe, Briefcase } from 'lucide-react';
import { Button } from '../ui/Button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  views: number;
  comments: number;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'business-travel', name: 'Business Travel', count: 4 },
    { id: 'hospitality', name: 'Hospitality Trends', count: 3 },
    { id: 'corporate', name: 'Corporate Events', count: 3 },
    { id: 'news', name: 'Hotel News', count: 2 }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 'post-1',
      title: 'The Future of Business Travel: Trends Shaping 2025',
      excerpt: 'Explore the latest trends in corporate travel and how Metro Stay is adapting to meet evolving business needs.',
      content: 'The business travel landscape is rapidly evolving, driven by technological advances, changing work patterns, and new traveler expectations...',
      author: 'Veer Agarwal',
      date: '2025-01-15',
      category: 'business-travel',
      readTime: '5 min read',
      views: 1250,
      comments: 23,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Business Travel', 'Trends', 'Technology', 'Corporate'],
      featured: true
    },
    {
      id: 'post-2',
      title: 'Maximizing Productivity During Business Stays',
      excerpt: 'Tips and strategies for business travelers to maintain productivity while staying at hotels.',
      content: 'Business travelers face unique challenges when trying to maintain productivity away from their home office...',
      author: 'Sana Singh',
      date: '2025-01-12',
      category: 'business-travel',
      readTime: '4 min read',
      views: 980,
      comments: 18,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Productivity', 'Business Travel', 'Tips', 'Work'],
      featured: true
    },
    {
      id: 'post-3',
      title: 'Metro Stay Wins Best Business Hotel Award 2024',
      excerpt: 'We are honored to receive the prestigious Best Business Hotel Award from India Hospitality Awards.',
      content: 'Metro Stay has been recognized as the Best Business Hotel of 2024 by the India Hospitality Awards...',
      author: 'Metro Stay Team',
      date: '2025-01-10',
      category: 'news',
      readTime: '3 min read',
      views: 2100,
      comments: 45,
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Awards', 'Recognition', 'Achievement', 'News'],
      featured: true
    },
    {
      id: 'post-4',
      title: 'Sustainable Hospitality: Our Green Initiatives',
      excerpt: 'Learn about Metro Stay\'s commitment to environmental sustainability and our eco-friendly practices.',
      content: 'At Metro Stay, we believe in responsible hospitality that protects our environment for future generations...',
      author: 'Kunal Saxena',
      date: '2025-01-08',
      category: 'hospitality',
      readTime: '6 min read',
      views: 750,
      comments: 12,
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Sustainability', 'Environment', 'Green', 'Hospitality']
    },
    {
      id: 'post-5',
      title: 'Planning Successful Corporate Events: A Complete Guide',
      excerpt: 'Everything you need to know about organizing memorable and effective corporate events at Metro Stay.',
      content: 'Corporate events are crucial for business success, team building, and client relationships...',
      author: 'Events Team',
      date: '2025-01-05',
      category: 'corporate',
      readTime: '8 min read',
      views: 1400,
      comments: 31,
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Events', 'Corporate', 'Planning', 'Business']
    },
    {
      id: 'post-6',
      title: 'The Art of Business Networking at Hotels',
      excerpt: 'How to leverage hotel environments for effective business networking and relationship building.',
      content: 'Hotels provide unique opportunities for business networking, from lobby conversations to formal events...',
      author: 'Aisha D\'Souza',
      date: '2025-01-03',
      category: 'business-travel',
      readTime: '5 min read',
      views: 890,
      comments: 16,
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Networking', 'Business', 'Relationships', 'Professional']
    },
    {
      id: 'post-7',
      title: 'Technology Integration in Modern Hotels',
      excerpt: 'Exploring how technology is transforming the hospitality industry and enhancing guest experiences.',
      content: 'The hospitality industry is undergoing a digital transformation that is reshaping guest experiences...',
      author: 'Tech Team',
      date: '2025-01-01',
      category: 'hospitality',
      readTime: '7 min read',
      views: 1100,
      comments: 24,
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Technology', 'Innovation', 'Digital', 'Hospitality']
    },
    {
      id: 'post-8',
      title: 'Corporate Wellness Programs for Business Travelers',
      excerpt: 'How Metro Stay supports the health and wellness of corporate guests during their business trips.',
      content: 'Business travel can be demanding on physical and mental health. Metro Stay offers comprehensive wellness programs...',
      author: 'Wellness Team',
      date: '2024-12-28',
      category: 'business-travel',
      readTime: '6 min read',
      views: 650,
      comments: 9,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Wellness', 'Health', 'Corporate', 'Travel']
    },
    {
      id: 'post-9',
      title: 'New Executive Floor Opens at Metro Stay',
      excerpt: 'Introducing our premium Executive Floor with enhanced amenities and personalized services.',
      content: 'We are excited to announce the opening of our new Executive Floor, designed specifically for senior executives...',
      author: 'Metro Stay Team',
      date: '2024-12-25',
      category: 'news',
      readTime: '4 min read',
      views: 1800,
      comments: 38,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Executive Floor', 'Premium', 'Amenities', 'News']
    },
    {
      id: 'post-10',
      title: 'Meeting Room Design: Creating Productive Spaces',
      excerpt: 'The psychology and design principles behind creating meeting rooms that enhance productivity and collaboration.',
      content: 'The design of meeting spaces significantly impacts the productivity and creativity of business discussions...',
      author: 'Design Team',
      date: '2024-12-22',
      category: 'corporate',
      readTime: '5 min read',
      views: 720,
      comments: 14,
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Design', 'Meeting Rooms', 'Productivity', 'Corporate']
    },
    {
      id: 'post-11',
      title: 'Culinary Excellence: Behind the Scenes at Metro Stay',
      excerpt: 'Meet our executive chef and discover the culinary philosophy that drives our exceptional dining experiences.',
      content: 'Great hospitality extends beyond comfortable rooms to exceptional dining experiences...',
      author: 'Culinary Team',
      date: '2024-12-20',
      category: 'hospitality',
      readTime: '6 min read',
      views: 950,
      comments: 21,
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Culinary', 'Dining', 'Chef', 'Food']
    },
    {
      id: 'post-12',
      title: 'Year-End Corporate Event Trends and Insights',
      excerpt: 'Analyzing the most popular corporate event formats and trends we observed throughout 2024.',
      content: 'As we conclude 2024, we reflect on the corporate event trends that shaped the business hospitality landscape...',
      author: 'Events Team',
      date: '2024-12-18',
      category: 'corporate',
      readTime: '7 min read',
      views: 1300,
      comments: 29,
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Trends', 'Events', 'Corporate', 'Analysis']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'business-travel': return Briefcase;
      case 'hospitality': return Globe;
      case 'corporate': return TrendingUp;
      case 'news': return BookOpen;
      default: return BookOpen;
    }
  };

  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Blog & News
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest insights on business travel, hospitality trends, 
            and news from Metro Stay. Expert advice for modern business travelers.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Featured Articles</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-500 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                      {post.category.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-xs font-medium text-slate-700">Featured</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle size={14} />
                        {post.comments}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" icon={ArrowRight}>
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
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
                  <IconComponent size={18} />
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
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.filter(post => !post.featured).map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                    {post.category.replace('-', ' ')}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span>{post.readTime}</span>
                    <span className="flex items-center gap-1">
                      <Eye size={12} />
                      {post.views}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-6">
            <BookOpen size={32} className="text-slate-900" />
          </div>
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights on business travel, 
            hospitality trends, and exclusive offers from Metro Stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:ring-2 focus:ring-gold-500 focus:outline-none"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-slate-400 mt-4">
            Join 5,000+ business professionals who trust our insights
          </p>
        </div>
      </div>
    </section>
  );
};