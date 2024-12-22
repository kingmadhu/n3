import React from 'react';
import { Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedinUrl: string;
}

export default function TeamMember({ name, role, bio, imageUrl, linkedinUrl }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-indigo-600 mb-4">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
        >
          <Linkedin className="h-5 w-5 mr-2" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}