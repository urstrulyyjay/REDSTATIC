import React, { useEffect, useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      position: 'Creative Director',
      company: 'Nexus Digital',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: "Jay's ability to translate abstract concepts into compelling visual stories is unmatched. His work on our rebrand exceeded every expectation.",
      rating: 5,
      project: 'Brand Identity Redesign'
    },
    {
      id: 2,
      name: 'Marcus Chen',
      position: 'Film Producer',
      company: 'Crimson Studios',
      avatar: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: "Working with Red Static Pictures was transformative. Jay brought a cinematic quality to our commercial that elevated the entire brand experience.",
      rating: 5,
      project: 'Commercial Video Production'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      position: 'Marketing Manager',
      company: 'Bloom & Co',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: "The attention to detail and creative vision Jay brings is extraordinary. Our campaign performance increased by 60% after his creative direction.",
      rating: 5,
      project: 'Digital Campaign Strategy'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Client</span>
            <span className="text-red-600 ml-4">Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The true measure of success lies in the stories our clients tell 
            about their transformative experiences.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="bg-black border border-gray-800 p-8 lg:p-12 relative">
              {/* Quote Icon */}
              <Quote className="text-red-600 mb-6" size={48} />
              
              {/* Testimonial Content */}
              <div className="mb-8">
                <p className="text-2xl lg:text-3xl text-white leading-relaxed font-light mb-6">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-red-600 fill-current" size={20} />
                  ))}
                </div>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[currentTestimonial].position} at {testimonials[currentTestimonial].company}
                  </p>
                  <p className="text-red-600 text-sm font-medium">
                    {testimonials[currentTestimonial].project}
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-red-600 opacity-20" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-red-600 opacity-20" />
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-red-600 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Preview */}
        <div
          className={`grid md:grid-cols-3 gap-6 mt-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`p-6 bg-black border border-gray-800 cursor-pointer transition-all duration-300 hover:border-red-600 ${
                index === currentTestimonial ? 'border-red-600 bg-gray-900' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="text-white font-medium">{testimonial.name}</h5>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm line-clamp-3">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;