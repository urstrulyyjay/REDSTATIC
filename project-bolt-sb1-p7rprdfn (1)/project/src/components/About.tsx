import React, { useEffect, useRef, useState } from 'react';
import { Camera, Film, Palette, Pen } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '2', label: 'Years Experience' },
    { number: '25+', label: 'Happy Clients' },
    { number: '15+', label: 'Awards Won' },
  ];

  const skills = [
    { icon: Palette, name: 'Graphic Design', description: 'Visual identity & brand design' },
    { icon: Camera, name: 'Photography', description: 'Commercial & artistic photography' },
    { icon: Film, name: 'Video Editing', description: 'Post-production & motion graphics' },
    { icon: Pen, name: 'Screenwriting', description: 'Story development & scriptwriting' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">About</span>
              <br />
              <span className="text-red-600">The Vision</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm Jay Dhokne, the creative force behind Red Static Pictures. With 2 years 
                of dedicated experience in visual storytelling, I specialize in creating compelling narratives 
                that resonate with audiences on an emotional level.
              </p>
              
              <p>
                My approach combines technical expertise with artistic vision, delivering work that 
                doesn't just look good—it tells a story. From brand identities to cinematic productions, 
                every project is an opportunity to create something extraordinary.
              </p>
              
              <p>
                Based in Buldhana, Maharashtra, Red Static Pictures represents more than just a company; 
                it's a philosophy of capturing the raw, unfiltered essence of every story worth telling.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`p-4 bg-black/30 border border-gray-700 hover:border-red-600 transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <skill.icon className="text-red-600 mb-3" size={24} />
                  <h3 className="text-white font-semibold mb-1">{skill.name}</h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Visual */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {/* Profile Image Placeholder */}
            <div className="relative mb-8">
              <div className="aspect-square bg-gradient-to-br from-red-600 to-black rounded-none p-1">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Jay Dhokne - Creative Director"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-600 flex items-center justify-center">
                <Camera className="text-white" size={24} />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center transform transition-all duration-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;