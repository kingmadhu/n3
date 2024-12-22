import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  clientName: string;
  testimonial?: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  category,
  clientName,
  testimonial,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
            {category}
          </span>
          <span className="text-gray-500 text-sm">Client: {clientName}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {testimonial && (
          <blockquote className="italic text-gray-600 border-l-4 border-indigo-600 pl-4 mb-4">
            "{testimonial}"
          </blockquote>
        )}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <button className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
          View Case Study <ExternalLink className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}