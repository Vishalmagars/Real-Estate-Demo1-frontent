import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Renting",
      description: "Curated rental properties with seamless booking experience. Your perfect space awaits.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2116&q=80",
      icon: "🏠",
      features: ["Verified Properties", "Instant Booking", "24/7 Support"]
    },
    {
      id: 2,
      title: "Buying",
      description: "Discover extraordinary homes with our exclusive collection. From contemporary to luxury estates.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      icon: "🏡",
      features: ["Market Analysis", "Financing Help", "Legal Support"]
    },
    {
      id: 3,
      title: "Selling",
      description: "Maximize your property's value with strategic marketing and our premium buyer network.",
      image: "https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2116&q=80",
      icon: "💰",
      features: ["Free Valuation", "Professional Photos", "Fast Sales"]
    }
  ];

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="pt-20 pb-16 text-center"
        >
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Welcome To{' '}
            <span className="font-bold text-gray-800">
              Houzez
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Redefining luxury in real estate. Experience premium service with sophisticated solutions tailored for discerning clients.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 pb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group h-full cursor-pointer"
            >
              <div className="relative h-full bg-white  border border-gray-100 overflow-hidden hover:border-gray-200 transition-all duration-700 hover:shadow-xl shadow-sm">
                {/* Image Section */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Floating Icon */}
                 
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Services;