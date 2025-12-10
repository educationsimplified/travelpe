import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UserCircle } from 'lucide-react';
import { SIGNUP_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled || location.pathname !== '/' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const textClass = scrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white';
  const buttonClass = scrolled || location.pathname !== '/' 
    ? 'bg-saffron-600 text-white hover:bg-saffron-700' 
    : 'bg-white text-saffron-600 hover:bg-gray-100';

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className={`text-2xl font-serif font-bold tracking-wider ${textClass}`}>
            TRAVEL PE <span className="text-saffron-500">INDIA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium hover:text-saffron-500 transition-colors ${textClass}`}>Home</Link>
            <Link to="/about" className={`font-medium hover:text-saffron-500 transition-colors ${textClass}`}>About</Link>
            <Link to="/book" className={`font-medium hover:text-saffron-500 transition-colors ${textClass}`}>Services</Link>
            
            <a 
              href={SIGNUP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg ${buttonClass}`}
            >
              <UserCircle size={20} />
              <span>Sign Up / Book</span>
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={textClass}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            <Link onClick={() => setIsOpen(false)} to="/" className="block px-3 py-2 text-gray-800 font-medium hover:text-saffron-600">Home</Link>
            <Link onClick={() => setIsOpen(false)} to="/about" className="block px-3 py-2 text-gray-800 font-medium hover:text-saffron-600">About</Link>
            <Link onClick={() => setIsOpen(false)} to="/book" className="block px-3 py-2 text-gray-800 font-medium hover:text-saffron-600">Services</Link>
            <a 
              href={SIGNUP_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full text-center block px-3 py-3 bg-saffron-600 text-white rounded-md font-bold"
            >
              Sign Up / Book
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;