import React, { useEffect, useRef, useState } from 'react';
import { Palette, Video, Pen, Zap, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
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

  const services = [
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Brand identity, logo design, print media, and visual communication that speaks to your audience.',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Graphics'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'From concept to completion - commercial videos, documentaries, and promotional content.',
      features: ['Video Editing', 'Motion Graphics', 'Color Grading', 'Sound Design'],
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Pen,
      title: 'Screenwriting',
      description: 'Compelling narratives and scripts that capture hearts and minds through powerful storytelling.',
      features: ['Script Development', 'Story Structure', 'Character Development', 'Dialogue Writing'],
      image: 'https://images.pexels.com/photos/261857/pexels-photo-261857.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Zap,
      title: 'Creative Direction',
      description: 'Strategic creative leadership for campaigns, productions, and brand experiences.',
      features: ['Creative Strategy', 'Art Direction', 'Campaign Development', 'Brand Consulting'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Creative</span>
            <span className="text-red-600 ml-4">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive creative solutions that bring your vision to life through 
            strategic design, compelling storytelling, and cinematic production.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden bg-gray-900 hover:bg-gray-800 transition-all duration-500 transform hover:scale-[1.02] ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 lg:p-12">
                <div className="flex items-start justify-between mb-6">
                  <service.icon className="text-red-600 group-hover:text-white transition-colors duration-300" size={40} />
                  <ArrowRight className="text-gray-600 group-hover:text-red-600 group-hover:translate-x-2 transition-all duration-300" size={24} />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-sm text-gray-400 py-1 px-3 bg-black/30 rounded-sm"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-gray-400 text-lg mb-6">
            Ready to bring your vision to life?
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-medium text-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;