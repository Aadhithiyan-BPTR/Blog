import React from 'react';
import { Link } from 'react-router-dom';
import { Pencil } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="border-b dark:border-gray-700">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Pencil className="h-6 w-6" />
          <span>BlogPlatform</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}