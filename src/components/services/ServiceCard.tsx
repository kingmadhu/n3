import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export default function ServiceCard({ id, title, description, icon, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="w-12 h-12 text-indigo-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to={`/services/${id}`}
        className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
      >
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}