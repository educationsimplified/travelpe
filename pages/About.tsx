import React from 'react';
import { SIGNUP_LINK } from '../constants';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      
      {/* Intro */}
      <div className="bg-stone-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">About Travel Pe India</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Born from the narrow lanes of Varanasi, we are a team of locals dedicated to showing you the true soul of the city, 
            without the hassle of bargaining or uncertainty.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <img 
              src="https://picsum.photos/id/405/800/600" 
              alt="Varanasi Culture" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-saffron-600">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              Varanasi is the spiritual heartbeat of India. However, for a newcomer, finding reliable transport can be challenging.
            </p>
            <p className="text-gray-700 text-lg">
              Travel Pe India was founded to bridge this gap. We partner with verified local boatmen, rickshaw pullers, and drivers 
              to provide standardized rates and professional service. We ensure that your journey is as peaceful as the destination.
            </p>
            <div className="pt-4">
              <a 
                href={SIGNUP_LINK}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-6 py-3 border-2 border-gray-900 text-gray-900 font-bold rounded-lg hover:bg-gray-900 hover:text-white transition"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-200 pt-16">
          {[
            { label: 'Happy Pilgrims', val: '10,000+' },
            { label: 'Local Drivers', val: '500+' },
            { label: 'Boat Rides', val: '25,000+' },
            { label: 'Years Serving', val: '5+' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-saffron-600 mb-2">{stat.val}</div>
              <div className="text-gray-500 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;