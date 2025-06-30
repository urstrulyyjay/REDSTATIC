import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, Tag, TrendingUp } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: 'YouTube Channel Growth Strategy',
      client: 'Content Creator',
      category: 'Digital Marketing',
      year: '2024',
      duration: '12 months',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Transform a small YouTube channel into a profitable content creation business with sustainable growth',
      solution: 'Comprehensive content strategy, thumbnail optimization, and audience engagement tactics',
      results: ['2.75M subscribers gained', '$7,520.62 monthly revenue', '365 days consistent growth', '89,563 daily visitors'],
      colors: ['#FF6B6B', '#4ECDC4', '#45B7D1']
    },
    {
      id: 2,
      title: 'Film Poster Campaign Series',
      client: 'Red Static Pictures',
      category: 'Visual Identity',
      year: '2024',
      duration: '6 months',
      image: '/image.png',
      challenge: 'Create compelling visual narratives for psychological thriller and drama film projects',
      solution: 'Atmospheric poster designs with strong typographic hierarchy and emotional depth',
      results: ['Award-winning poster designs', 'Enhanced brand recognition', 'Successful film marketing campaigns'],
      colors: ['#8B5CF6', '#F59E0B', '#EF4444']
    }
  ];

  return (
    <section id="case-studies" ref={sectionRef} className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Case</span>
            <span className="text-red-600 ml-4">Studies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Deep dives into successful projects that demonstrate strategic thinking, 
            creative execution, and measurable results over 2 years of professional experience.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              } transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="aspect-[4/3] relative overflow-hidden group">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />
                  
                  {/* Color Palette */}
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    {study.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-6 h-6 rounded-full border-2 border-white"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{study.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Tag size={16} />
                    <span>{study.category}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp size={16} />
                    <span>{study.duration}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-red-600 font-medium">{study.client}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-gray-300 flex items-start">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="flex items-center space-x-2 text-red-600 hover:text-white font-medium group transition-colors duration-300">
                  <span>View Full Case Study</span>
                  <ArrowRight 
                    size={16} 
                    className="group-hover:translate-x-2 transition-transform duration-300" 
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;