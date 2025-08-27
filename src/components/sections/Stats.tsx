import React from 'react';
import { Building2, Users, Award, Calendar } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      icon: Building2,
      number: '150+',
      label: 'Luxury Rooms & Suites',
      description: 'Elegantly designed for business travelers'
    },
    {
      icon: Users,
      number: '50K+',
      label: 'Satisfied Corporate Guests',
      description: 'Trust us for their business travel needs'
    },
    {
      icon: Award,
      number: '25+',
      label: 'Industry Awards',
      description: 'Recognition for excellence in hospitality'
    },
    {
      icon: Calendar,
      number: '10+',
      label: 'Years of Excellence',
      description: 'Serving business community since 2014'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Business Leaders
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our commitment to excellence has made Metro Stay the preferred choice 
            for corporate travelers and business events across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                role="listitem"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-6 group-hover:bg-gold-400 transition-colors">
                  <IconComponent size={32} className="text-slate-900" aria-hidden="true" />
                </div>
                <div className="text-4xl font-bold text-gold-400 mb-2" aria-label={`${stat.number} ${stat.label}`}>
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-3">
                  {stat.label}
                </div>
                <div className="text-slate-300 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};