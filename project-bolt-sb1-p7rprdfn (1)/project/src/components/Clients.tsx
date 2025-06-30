import React, { useEffect, useRef, useState } from 'react';

const Clients: React.FC = () => {
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

  const clients = [
    {
      name: 'TechFlow Solutions',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
      industry: 'Technology'
    },
    {
      name: 'Aurora Films',
      logo: 'https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&w=200',
      industry: 'Entertainment'
    },
    {
      name: 'Nexus Digital',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=200',
      industry: 'Marketing'
    },
    {
      name: 'Crimson Studios',
      logo: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=200',
      industry: 'Production'
    },
    {
      name: 'Bloom & Co',
      logo: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=200',
      industry: 'Retail'
    },
    {
      name: 'Urban Collective',
      logo: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=200',
      industry: 'Fashion'
    },
    {
      name: 'Midnight Café',
      logo: 'https://images.pexels.com/photos/5828394/pexels-photo-5828394.jpeg?auto=compress&cs=tinysrgb&w=200',
      industry: 'Food & Beverage'
    },
    {
      name: 'Zenith Ventures',
      logo: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=200',
      industry: 'Investment'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Trusted by</span>
            <span className="text-red-600 ml-4">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Collaborating with forward-thinking brands to create memorable experiences 
            and drive meaningful results over 2 years of professional service.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`group transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-900 p-6 h-32 flex items-center justify-center border border-gray-800 hover:border-red-600 transition-all duration-300 group-hover:bg-gray-800">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-red-600 to-gray-700 rounded-sm flex items-center justify-center overflow-hidden">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                  <div className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {client.name}
                  </div>
                  <div className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {client.industry}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
            <div className="text-gray-400">Awards Won</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">2</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div
          className={`text-center mt-20 max-w-4xl mx-auto transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <blockquote className="text-2xl lg:text-3xl text-white font-light leading-relaxed mb-6">
            "Red Static Pictures doesn't just create designs—they craft experiences that 
            resonate with audiences and drive business growth."
          </blockquote>
          <cite className="text-red-600 font-medium">
            - Creative Industry Report 2024
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Clients;