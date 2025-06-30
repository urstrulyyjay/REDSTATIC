import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
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

  const categories = ['all', 'branding', 'video', 'design', 'campaign', 'digital'];

  const projects = [
    {
      id: 1,
      title: 'YouTube Success Analytics',
      category: 'digital',
      type: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Comprehensive analytics dashboard showing 2.75M subscribers and $7,520 revenue growth in 365 days',
      year: '2024',
      tools: ['Analytics', 'Data Visualization', 'Performance Tracking']
    },
    {
      id: 2,
      title: 'Revenue Growth Campaign',
      category: 'campaign',
      type: 'Performance Marketing',
      image: 'https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: '24-hour revenue tracking campaign showcasing $7,200 earnings with detailed visitor analytics',
      year: '2024',
      tools: ['Campaign Management', 'Revenue Optimization', 'Real-time Analytics']
    },
    {
      id: 3,
      title: 'All Of Us - Film Campaign',
      category: 'branding',
      type: 'Film Branding',
      image: '/image.png',
      description: 'Cinematic poster design for Red Static Pictures film project with atmospheric typography and mood',
      year: '2024',
      tools: ['Photoshop', 'Typography Design', 'Color Grading']
    },
    {
      id: 4,
      title: 'I Want To Die - Psychological Thriller',
      category: 'design',
      type: 'Movie Poster Design',
      image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Dark, emotional poster design for psychological thriller exploring themes of mental health and survival',
      year: '2024',
      tools: ['Photoshop', 'Digital Art', 'Conceptual Design']
    },
    {
      id: 5,
      title: 'DHOKNE Brand Identity',
      category: 'branding',
      type: 'Personal Branding',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bold typographic treatment for personal brand identity with strong visual impact',
      year: '2024',
      tools: ['Illustrator', 'Typography', 'Brand Design']
    },
    {
      id: 6,
      title: 'Content Creator Success Story',
      category: 'video',
      type: 'Video Production',
      image: 'https://images.pexels.com/photos/5828394/pexels-photo-5828394.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Documentary-style video showcasing creator journey and financial success metrics',
      year: '2024',
      tools: ['Video Editing', 'Motion Graphics', 'Storytelling'],
      isVideo: true
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Featured</span>
            <span className="text-red-600 ml-4">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            A curated selection of projects showcasing 2 years of creative excellence in 
            visual storytelling, brand development, and digital marketing success.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden bg-black hover:transform hover:scale-105 transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button for Videos */}
                {project.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300">
                      <Play className="text-white ml-1" size={24} />
                    </div>
                  </div>
                )}
                
                {/* External Link */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-sm flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                    <ExternalLink className="text-white" size={16} />
                  </div>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-medium">
                  {project.year}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-red-600 text-sm font-medium">{project.type}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Tools Used */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 font-medium text-lg transition-all duration-300">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;