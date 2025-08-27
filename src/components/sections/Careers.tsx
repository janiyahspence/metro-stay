import React, { useState } from 'react';
import { Briefcase, Users, Award, TrendingUp, MapPin, Clock, DollarSign, GraduationCap, Heart, Star, Send, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  urgent?: boolean;
}

export const Careers: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

  const departments = [
    { id: 'all', name: 'All Positions', count: 12 },
    { id: 'hospitality', name: 'Hospitality', count: 4 },
    { id: 'management', name: 'Management', count: 3 },
    { id: 'sales', name: 'Sales & Marketing', count: 2 },
    { id: 'operations', name: 'Operations', count: 2 },
    { id: 'finance', name: 'Finance', count: 1 }
  ];

  const jobPositions: JobPosition[] = [
    {
      id: 'gm-001',
      title: 'Assistant General Manager',
      department: 'management',
      location: 'New Delhi',
      type: 'Full-time',
      experience: '8-12 years',
      salary: '₹15-20 LPA',
      description: 'Lead hotel operations and drive business growth while ensuring exceptional guest experiences.',
      requirements: [
        'Bachelor\'s degree in Hotel Management or related field',
        'Minimum 8 years experience in luxury hotel operations',
        'Strong leadership and team management skills',
        'Excellent communication and interpersonal abilities',
        'Experience with hotel management systems'
      ],
      benefits: [
        'Competitive salary with performance bonuses',
        'Health insurance for family',
        'Professional development opportunities',
        'Employee accommodation facility',
        'Annual leave and travel allowances'
      ],
      urgent: true
    },
    {
      id: 'fm-001',
      title: 'Front Office Manager',
      department: 'hospitality',
      location: 'New Delhi',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹8-12 LPA',
      description: 'Oversee front desk operations and ensure seamless guest check-in/check-out experiences.',
      requirements: [
        'Hotel Management degree preferred',
        '5+ years front office experience in 4/5-star hotels',
        'Proficiency in hotel management software',
        'Strong customer service orientation',
        'Fluency in English and Hindi'
      ],
      benefits: [
        'Performance-based incentives',
        'Health and life insurance',
        'Career advancement opportunities',
        'Staff meals and accommodation',
        'Training and certification programs'
      ]
    },
    {
      id: 'chef-001',
      title: 'Executive Chef',
      department: 'hospitality',
      location: 'New Delhi',
      type: 'Full-time',
      experience: '10-15 years',
      salary: '₹12-18 LPA',
      description: 'Lead culinary operations and create exceptional dining experiences for our business guests.',
      requirements: [
        'Culinary degree or equivalent experience',
        '10+ years experience in luxury hotel kitchens',
        'Expertise in multi-cuisine cooking',
        'Food safety and hygiene certifications',
        'Team leadership and menu planning skills'
      ],
      benefits: [
        'Competitive salary package',
        'International training opportunities',
        'Health insurance coverage',
        'Performance bonuses',
        'Professional development support'
      ],
      urgent: true
    },
    {
      id: 'sales-001',
      title: 'Sales Manager - Corporate',
      department: 'sales',
      location: 'New Delhi',
      type: 'Full-time',
      experience: '4-7 years',
      salary: '₹6-10 LPA',
      description: 'Drive corporate sales and build relationships with business clients and travel agencies.',
      requirements: [
        'Bachelor\'s degree in Business or Hospitality',
        '4+ years B2B sales experience',
        'Strong networking and relationship building skills',
        'Knowledge of corporate travel industry',
        'Excellent presentation and negotiation abilities'
      ],
      benefits: [
        'Attractive commission structure',
        'Travel allowances',
        'Health insurance',
        'Professional networking opportunities',
        'Career growth potential'
      ]
    },
    {
      id: 'mkt-001',
      title: 'Digital Marketing Specialist',
      department: 'sales',
      location: 'New Delhi',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹5-8 LPA',
      description: 'Manage digital marketing campaigns and enhance online presence for the hotel.',
      requirements: [
        'Bachelor\'s degree in Marketing or related field',
        '3+ years digital marketing experience',
        'Proficiency in Google Ads, social media platforms',
        'Content creation and SEO knowledge',
        'Analytics and reporting skills'
      ],
      benefits: [
        'Creative work environment',
        'Latest marketing tools access',
        'Health insurance',
        'Flexible working hours',
        'Skill development programs'
      ]
    },
    {
      id: 'eng-001',
      title: 'Chief Engineer',
      department: 'operations',
      location: 'New Delhi',
      type: 'Full-time',
      experience: '8-12 years',
      salary: '₹10-15 LPA',
      description: 'Oversee all engineering operations and maintenance of hotel facilities and equipment.',
      requirements: [
        'Engineering degree (Mechanical/Electrical preferred)',
        '8+ years experience in hotel engineering',
        'Knowledge of HVAC, electrical, and plumbing systems',
        'Preventive maintenance expertise',
        'Team management skills'
      ],
      benefits: [
        'Technical training opportunities',
        'Health insurance coverage',
        'Performance incentives',
        'Professional certifications support',
        'Retirement benefits'
      ]
    },
    {
      id: 'hr-001',
      title: 'HR Manager',
      department: 'management',
      location: 'New Delhi',
      type: 'Full-time',
      experience: '6-10 years',
      salary: '₹8-12 LPA',
      description: 'Lead human resources functions including recruitment, training, and employee relations.',
      requirements: [
        'MBA in HR or related field',
        '6+ years HR experience in hospitality',
        'Strong knowledge of labor laws',
        'Employee engagement and training expertise',
        'Excellent communication skills'
      ],
      benefits: [
        'Comprehensive benefits package',
        'Professional development budget',
        'Health insurance for family',
        'Flexible work arrangements',
        'Leadership training programs'
      ]
    },
    {
      id: 'acc-001',
      title: 'Finance Manager',
      department: 'finance',
      location: 'New Delhi',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹7-11 LPA',
      description: 'Manage financial operations, budgeting, and reporting for the hotel.',
      requirements: [
        'CA/CMA or MBA Finance',
        '5+ years experience in hotel finance',
        'Knowledge of hotel accounting systems',
        'Budget planning and analysis skills',
        'GST and tax compliance expertise'
      ],
      benefits: [
        'Competitive salary',
        'Professional certification support',
        'Health insurance',
        'Performance bonuses',
        'Career advancement opportunities'
      ]
    },
    {
      id: 'guest-001',
      title: 'Guest Relations Executive',
      department: 'hospitality',
      location: 'New Delhi',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹3-5 LPA',
      description: 'Ensure exceptional guest experiences and handle guest inquiries and complaints.',
      requirements: [
        'Bachelor\'s degree in any field',
        '2+ years customer service experience',
        'Excellent communication skills',
        'Problem-solving abilities',
        'Proficiency in multiple languages preferred'
      ],
      benefits: [
        'Guest service training',
        'Health insurance',
        'Performance incentives',
        'Career growth opportunities',
        'Staff accommodation'
      ]
    },
    {
      id: 'house-001',
      title: 'Housekeeping Supervisor',
      department: 'operations',
      location: 'New Delhi',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '₹4-6 LPA',
      description: 'Supervise housekeeping operations and maintain hotel cleanliness standards.',
      requirements: [
        'High school diploma or equivalent',
        '3+ years housekeeping experience in hotels',
        'Knowledge of cleaning procedures and standards',
        'Team supervision skills',
        'Attention to detail'
      ],
      benefits: [
        'Skill development programs',
        'Health insurance',
        'Staff meals',
        'Uniform allowance',
        'Recognition programs'
      ]
    },
    {
      id: 'event-001',
      title: 'Events Coordinator',
      department: 'hospitality',
      location: 'New Delhi',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '₹4-7 LPA',
      description: 'Plan and execute corporate events, meetings, and conferences at the hotel.',
      requirements: [
        'Bachelor\'s degree in Event Management or related field',
        '2+ years event planning experience',
        'Strong organizational and coordination skills',
        'Vendor management experience',
        'Creative problem-solving abilities'
      ],
      benefits: [
        'Event planning training',
        'Health insurance',
        'Networking opportunities',
        'Performance bonuses',
        'Professional development'
      ]
    },
    {
      id: 'train-001',
      title: 'Training Manager',
      department: 'management',
      location: 'New Delhi',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹6-9 LPA',
      description: 'Develop and implement training programs for hotel staff across all departments.',
      requirements: [
        'Master\'s degree in HR or Training & Development',
        '5+ years training experience in hospitality',
        'Curriculum development skills',
        'Adult learning principles knowledge',
        'Strong presentation abilities'
      ],
      benefits: [
        'Training certification support',
        'Health insurance',
        'Professional development budget',
        'Flexible schedule',
        'Industry conference attendance'
      ]
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobPositions 
    : jobPositions.filter(job => job.department === selectedDepartment);

  const companyBenefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and mental health support'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Professional training, certifications, and career advancement opportunities'
    },
    {
      icon: Award,
      title: 'Recognition Programs',
      description: 'Employee of the month, performance bonuses, and achievement awards'
    },
    {
      icon: Users,
      title: 'Work-Life Balance',
      description: 'Flexible schedules, paid time off, and family-friendly policies'
    }
  ];

  const handleApply = (job: JobPosition) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Build your career in hospitality with Metro Stay. We offer exciting opportunities 
            for passionate professionals who want to create exceptional experiences for business travelers.
          </p>
        </div>

        {/* Company Culture */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Why Work With Us?</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Join a team that values excellence, innovation, and professional growth in the hospitality industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-6 group-hover:bg-gold-600 transition-colors">
                    <IconComponent size={32} className="text-slate-900" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedDepartment === dept.id
                  ? 'bg-gold-500 text-slate-900 shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {dept.name}
              <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                selectedDepartment === dept.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-300 text-slate-600'
              }`}>
                {dept.count}
              </span>
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative">
              {job.urgent && (
                <div className="absolute -top-3 right-6 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Urgent Hiring
                </div>
              )}
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Briefcase size={16} />
                      {job.department.charAt(0).toUpperCase() + job.department.slice(1)}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gold-600">{job.salary}</div>
                  <div className="text-sm text-slate-500">{job.experience}</div>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">{job.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">Key Requirements:</h4>
                <ul className="space-y-2">
                  {job.requirements.slice(0, 3).map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleApply(job)}
                >
                  Apply Now
                </Button>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Application Process */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Application Process</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our streamlined hiring process ensures we find the right fit for both candidates and our team.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Apply Online', description: 'Submit your application and resume through our portal' },
              { step: '2', title: 'Initial Screening', description: 'HR team reviews applications and conducts phone screening' },
              { step: '3', title: 'Interview Process', description: 'Face-to-face or video interviews with hiring managers' },
              { step: '4', title: 'Welcome Aboard', description: 'Onboarding and orientation for successful candidates' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-500 rounded-full text-slate-900 font-bold text-lg mb-4">
                  {process.step}
                </div>
                <h4 className="font-semibold text-lg mb-3">{process.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact HR */}
        <div className="mt-20 text-center">
          <div className="bg-gold-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Questions About Careers?</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Our HR team is here to help with any questions about career opportunities, 
              application process, or working at Metro Stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Contact HR Team
              </Button>
              <Button variant="outline" size="lg">
                Download Career Brochure
              </Button>
            </div>
            <div className="mt-6 text-sm text-slate-600">
              <p>Email: careers@metrostay.in | Phone: +91 11 4567 8901</p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl w-full mx-4 max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Apply for {selectedJob.title}</h3>
                  <p className="text-slate-600">{selectedJob.department} • {selectedJob.location}</p>
                </div>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  ×
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Years of Experience</label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500">
                    <option>0-2 years</option>
                    <option>3-5 years</option>
                    <option>6-10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Cover Letter</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500" placeholder="Tell us why you're interested in this position..."></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Resume/CV</label>
                  <input type="file" accept=".pdf,.doc,.docx" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500" />
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="lg" className="flex-1" onClick={() => setShowApplicationForm(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" size="lg" className="flex-1" icon={Send}>
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};