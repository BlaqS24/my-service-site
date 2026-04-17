'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: "Mobile Data Bundles",
      description: "Instant MTN, Vodafone, AirtelTigo data top-up",
      price: "From GH₵5",
      icon: "📱",
      popular: true,
    },
    {
      id: 2,
      name: "Food Ordering",
      description: "Help ordering from restaurants & delivery",
      price: "Service fee from GH₵10",
      icon: "🍔",
      popular: false,
    },
    {
      id: 3,
      name: "Airtime & Other Services",
      description: "Airtime top-up and more digital services",
      price: "Instant delivery",
      icon: "💰",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-6">
            Fast & Reliable Digital Services
          </h1>
          <p className="text-xl mb-8">
            Buy mobile data, order food, and more — delivered instantly in Accra and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-green-700 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition"
            >
              Browse Services
            </button>
            <a href="https://wa.me/233XXXXXXXXX" target="_blank" className="border-2 border-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose what you need. Fast delivery. Secure payment.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border ${service.popular ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-100'}`}
            >
              {service.popular && (
                <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.name}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="text-3xl font-bold text-green-600 mb-8">{service.price}</div>
              
              <button 
                onClick={() => setSelectedService(service)}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-2xl transition"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <p className="mb-4">blaajobs.net • Fast Digital Services in Ghana</p>
        <p className="text-gray-400">© 2026 • Contact us on WhatsApp for support</p>
      </footer>
    </div>
  );
}