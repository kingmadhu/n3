import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">KMA Software</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Services
            </Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Portfolio
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
            <Link to="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block w-full text-center px-4 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}