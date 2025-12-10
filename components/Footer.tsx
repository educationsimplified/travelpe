import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { SIGNUP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold text-saffron-500">Travel Pe India</h2>
            <p className="text-gray-400 leading-relaxed">
              Your trusted companion in the world's oldest living city. We provide affordable, reliable, and spiritual journeys across Varanasi.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-saffron-500 transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-saffron-500 transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-saffron-500 transition"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold border-b-2 border-saffron-500 inline-block pb-2">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {/* TARGET="_BLANK" REMOVED */}
              <li><a href={SIGNUP_LINK} className="hover:text-white transition">Book a Boat</a></li>
              {/* TARGET="_BLANK" REMOVED */}
              <li><a href={SIGNUP_LINK} className="hover:text-white transition">Rent a Car</a></li>
              
              <li><a href="/#/about" className="hover:text-white transition">About Varanasi</a></li>
              
              {/* TARGET="_BLANK" REMOVED */}
              <li><a href={SIGNUP_LINK} className="hover:text-white transition">Member Login</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold border-b-2 border-saffron-500 inline-block pb-2">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <MapPin className="text-saffron-500" size={20} />
                <span>Assi Ghat, Varanasi, UP, 221005</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-saffron-500" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-saffron-500" size={20} />
                <span>namaste@travelpeindia.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Travel Pe India. All rights reserved. Designed with ❤️ in India.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
