import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote, ExternalLink } from 'lucide-react';
import { SERVICES, TESTIMONIALS, SIGNUP_LINK } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/1047/1920/1080" 
            alt="Varanasi Ghats" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in-up">
            Journey Through <br/> <span className="text-saffron-500">The Eternal City</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light tracking-wide">
            Book trusted boats, rickshaws, and cars in Varanasi at the most affordable rates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={SIGNUP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-saffron-600 hover:bg-saffron-700 text-white rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Book Now <ExternalLink size={20} />
            </a>
            <Link 
              to="/book" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-full font-bold text-lg transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-saffron-600 font-bold tracking-widest uppercase text-sm mb-2">Our Offerings</h2>
            <h3 className="text-4xl font-serif font-bold text-gray-900">Choose Your Path in Kashi</h3>
            <div className="w-24 h-1 bg-saffron-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                    <service.icon className="text-saffron-500" size={24} />
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="font-bold text-saffron-600 text-sm">Best Rates</span>
                    <a 
                      href={SIGNUP_LINK} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-900 hover:text-saffron-600 flex items-center"
                    >
                      Book <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-gray-900">Experience Varanasi Like a Local, Travel Like a VIP</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Navigating the chaotic yet charming streets of Varanasi can be daunting. We simplify it. 
                Whether you need a sunrise boat ride on the Ganges or a quick E-Rickshaw to the Kashi Vishwanath Temple, 
                we ensure safety, fair pricing, and punctuality.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Affordable Rates', desc: 'No hidden costs, fair pricing.' },
                  { title: 'Verified Drivers', desc: 'Local experts who know every lane.' },
                  { title: '24/7 Support', desc: 'Always here to help during your stay.' },
                  { title: 'Easy Signup', desc: 'Book instantly through our portal.' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 text-saffron-600">
                      <Star fill="currentColor" size={16} />
                      <span className="font-bold text-gray-900">{item.title}</span>
                    </div>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/id/400/600/700" 
                alt="Varanasi Street" 
                className="rounded-3xl shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-saffron-100 rounded-full -z-0"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-ganges-100 rounded-full -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-ganges-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Pattern overlay simulation */}
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">Stories from the Ghats</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/20 transition duration-300">
                <Quote className="text-saffron-500 mb-4" size={32} />
                <p className="text-lg italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-xl">{t.name}</h4>
                  <span className="text-saffron-400 text-sm">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;