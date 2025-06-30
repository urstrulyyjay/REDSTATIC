import React, { useEffect, useState } from 'react';
import { ArrowDown, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23DC2626%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none">
            <span className="block text-white">JAY</span>
            <span className="block text-red-600 -mt-4">DHOKNE</span>
          </h1>
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              Founder of Red Static Pictures
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Creating cinematic, emotional, and unfiltered visual stories through 
              graphic design, branding, video editing, and screenwriting.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToNext}
              className="bg-red-600 text-white px-8 py-4 rounded-none hover:bg-red-700 transition-all duration-300 transform hover:scale-105 font-medium text-lg"
            >
              View My Work
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-none hover:bg-white hover:text-black transition-all duration-300 font-medium text-lg flex items-center gap-2">
              <Play size={20} />
              Watch Demo Reel
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          onClick={scrollToNext}
        >
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="text-red-600" size={24} />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-32 bg-red-600 opacity-20 transform rotate-45 animate-pulse hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-2 h-24 bg-white opacity-10 transform -rotate-45 animate-pulse hidden lg:block" />
    </section>
  );
};

export default Hero;