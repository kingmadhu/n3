import React, { useState } from 'react';
import ProjectCard from '../components/portfolio/ProjectCard';

const projects = [
  {
    title: 'E-commerce Platform Redesign',
    description: 'Complete overhaul of a major retail platform, improving conversion rates by 45%.',
    imageUrl: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    category: 'E-commerce',
    clientName: 'RetailCo',
    testimonial: 'TechVision transformed our online presence and significantly boosted our sales.',
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB'],
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Custom analytics solution with predictive capabilities for a fintech startup.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'Analytics',
    clientName: 'FinTech Solutions',
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly mobile banking application with biometric authentication.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    category: 'Mobile',
    clientName: 'Digital Bank',
    testimonial: 'The app exceeded our expectations in both security and user experience.',
    technologies: ['React Native', 'Node.js', 'Firebase'],
  },
];

const categories = ['All', 'E-commerce', 'Analytics', 'Mobile', 'Cloud'];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
        <p className="text-xl text-gray-600">
          Explore our successful projects and client success stories
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}