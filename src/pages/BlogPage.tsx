import React from 'react';
import BlogCard from '../components/blog/BlogCard';

const posts = [
  {
    id: '1',
    title: 'The Future of AI in Enterprise Software',
    excerpt: 'Exploring how artificial intelligence is reshaping business applications...',
    author: 'Sarah Johnson',
    publishedAt: 'March 15, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    category: 'AI & ML',
  },
  {
    id: '2',
    title: 'Cloud Migration: Best Practices',
    excerpt: 'Key strategies for a successful transition to cloud infrastructure...',
    author: 'Michael Chen',
    publishedAt: 'March 12, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
    category: 'Cloud',
  },
  {
    id: '3',
    title: 'Cybersecurity Trends in 2024',
    excerpt: 'Stay ahead of the latest developments in cybersecurity...',
    author: 'Emily Rodriguez',
    publishedAt: 'March 10, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800',
    category: 'Security',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600">
          Insights and updates from our team of experts
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}