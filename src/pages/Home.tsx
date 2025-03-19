import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Share Your Stories with the World
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Create, publish, and share your thoughts with our powerful blogging platform.
          Join our community of writers and start your journey today.
        </p>
        <button
          onClick={() => navigate('/login')}
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
      
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Intuitive interface that makes blogging a breeze.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Rich Features</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Everything you need to create and manage your content.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Analytics</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Track your blog's performance with detailed insights.
          </p>
        </div>
      </div>
    </div>
  );
}