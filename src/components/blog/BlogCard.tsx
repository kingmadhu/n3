import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  category: string;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  author,
  publishedAt,
  imageUrl,
  category,
}: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
            {category}
          </span>
          <span className="text-gray-500 text-sm">{publishedAt}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-sm">By {author}</span>
          <Link
            to={`/blog/${id}`}
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}