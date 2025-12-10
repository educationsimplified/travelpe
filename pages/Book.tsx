import React, { useState } from 'react';
import { SERVICES, SIGNUP_LINK } from '../constants';
import { ExternalLink, CheckCircle } from 'lucide-react';

const Book: React.FC = () => {
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);

  return (
    <div className="min-h-screen pt-20 bg-stone-50">
      
      {/* Header */}
      <div className="bg-saffron-600 py-16 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
        <p className="text-lg max-w-2xl mx-auto px-4 opacity-90">
          Select a service to view details and proceed to our secure booking portal.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
          
          {/* Service Selection Sidebar */}
          <div className="lg:w-1/3 bg-gray-50 p-6 lg:p-8 border-r border-gray-100">
            <h3 className="text-lg font-bold text-gray-700 mb-6 uppercase tracking-wider">Services</h3>
            <div className="space-y-3">
              {SERVICES.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`w-full flex items-center p-4 rounded-xl transition-all duration-200 border-2 ${
                    selectedService === service.id 
                      ? 'border-saffron-500 bg-saffron-50 shadow-sm' 
                      : 'border-transparent hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className={`p-3 rounded-full mr-4 ${selectedService === service.id ? 'bg-saffron-200 text-saffron-700' : 'bg-gray-200 text-gray-600'}`}>
                    <service.icon size={20} />
                  </div>
                  <div className="text-left">
                    <h4 className={`font-bold ${selectedService === service.id ? 'text-gray-900' : 'text-gray-600'}`}>{service.title}</h4>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Details Area */}
          <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center items-start">
            {SERVICES.filter(s => s.id === selectedService).map(service => (
              <div key={service.id} className="w-full animate-fade-in">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-saffron-100 text-saffron-600 rounded-full">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-gray-900">{service.title}</h2>
                </div>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-10">
                  <h4 className="font-bold text-gray-900 mb-4">Includes:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle size={18} className="text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                    <p className="text-gray-600 mb-6">
                      To check availability and book this service, please sign up or log in to our traveler portal.
                    </p>
                    <a 
                      href={SIGNUP_LINK}
                      // --- TARGET="_BLANK" AND REL="NOOPENER NOREFERRER" REMOVED HERE ---
                      className="inline-flex items-center justify-center px-8 py-4 bg-saffron-600 text-white text-lg font-bold rounded-lg hover:bg-saffron-700 transition shadow-lg transform active:scale-95 hover:scale-105"
                    >
                      Book {service.title} Now <ExternalLink size={20} className="ml-2" />
                    </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
