import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Services',
      links: ['Graphic Design', 'Video Production', 'Screenwriting', 'Creative Direction']
    },
    {
      title: 'Company',
      links: ['About', 'Portfolio', 'Case Studies', 'Contact']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Process', 'FAQ', 'Privacy Policy']
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-2xl font-bold">
                <span className="text-white">Red Static</span>
                <span className="text-red-600 ml-1">Pictures</span>
              </div>
              <p className="text-gray-400 mt-2">
                Cinematic visual storytelling
              </p>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Creating compelling narratives through graphic design, video production, 
              and creative direction. Every frame tells a story.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-red-600 hover:text-white transition-colors duration-300 group"
            >
              <ArrowUp 
                size={16} 
                className="group-hover:-translate-y-1 transition-transform duration-300" 
              />
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-red-600 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay in the Loop
              </h3>
              <p className="text-gray-400">
                Get insights, behind-the-scenes content, and updates on latest projects.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 text-white focus:border-red-600 focus:outline-none transition-colors duration-300"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-medium transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} Red Static Pictures. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="text-red-600 fill-current" size={16} />
            <span>by Jay Dhokne</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;