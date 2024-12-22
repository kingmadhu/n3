import React from 'react';
import ServiceCard from '../components/services/ServiceCard';
import { Code2, Cloud, Brain, Shield, Smartphone, BarChart } from 'lucide-react';

const services = [
  {
    id: '1',
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs.',
    icon: <Code2 className="w-full h-full" />,
    features: [
      'Custom web applications',
      'Enterprise software',
      'API development',
      'Legacy system modernization',
    ],
  },
  {
    id: '2',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.',
    icon: <Cloud className="w-full h-full" />,
    features: [
      'Cloud migration',
      'Infrastructure optimization',
      'Cloud-native development',
      'DevOps automation',
    ],
  },
  {
    id: '3',
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by cutting-edge AI technology.',
    icon: <Brain className="w-full h-full" />,
    features: [
      'Predictive analytics',
      'Natural language processing',
      'Computer vision',
      'Machine learning models',
    ],
  },
  {
    id: '4',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: <Shield className="w-full h-full" />,
    features: [
      'Security audits',
      'Penetration testing',
      'Compliance consulting',
      'Security training',
    ],
  },
  {
    id: '5',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
    icon: <Smartphone className="w-full h-full" />,
    features: [
      'iOS development',
      'Android development',
      'Cross-platform apps',
      'Mobile UI/UX design',
    ],
  },
  {
    id: '6',
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights.',
    icon: <BarChart className="w-full h-full" />,
    features: [
      'Business intelligence',
      'Data visualization',
      'Big data processing',
      'Real-time analytics',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600">
          Comprehensive technology solutions to drive your business forward
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}