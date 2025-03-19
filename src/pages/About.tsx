import React from 'react';

export function About() {
  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About BlogPlatform</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            BlogPlatform is a modern blogging solution designed to help writers and content creators
            share their stories with the world. Our platform combines ease of use with powerful
            features to make your blogging experience seamless and enjoyable.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            We believe everyone has a story worth telling. Our mission is to provide the tools
            and platform necessary to help you share your unique perspective with the world.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>Simple and intuitive writing experience</li>
            <li>Powerful formatting and media tools</li>
            <li>Built-in SEO optimization</li>
            <li>Detailed analytics and insights</li>
            <li>Responsive design for all devices</li>
          </ul>
        </div>
      </div>
    </div>
  );
}