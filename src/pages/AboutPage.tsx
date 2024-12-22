import React from 'react';
import TeamMember from '../components/about/TeamMember';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'With 15+ years in tech leadership, Sarah drives our vision for innovative solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    linkedinUrl: '#',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Former Google engineer bringing expertise in AI and cloud architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    linkedinUrl: '#',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    bio: 'Award-winning designer focused on creating intuitive user experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    linkedinUrl: '#',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600">
          We're a team of passionate technologists dedicated to transforming businesses
          through innovative solutions.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            Founded in 2020, TechVision emerged from a simple yet powerful idea:
            technology should empower businesses, not complicate them. Our journey
            began with a small team of dedicated experts who shared a vision for
            making cutting-edge technology accessible to businesses of all sizes.
          </p>
          <p className="text-gray-600">
            Today, we're proud to have helped hundreds of companies achieve their
            digital transformation goals, creating lasting impact through innovative
            solutions and dedicated support.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              We constantly push boundaries to deliver cutting-edge solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
            <p className="text-gray-600">
              We maintain the highest standards in everything we do.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
            <p className="text-gray-600">
              We build trust through transparency and honest relationships.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}