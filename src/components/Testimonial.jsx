import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/outline';

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: "Working with this real estate team was exceptional. They understood exactly what I was looking for and found me the perfect home within my budget. The entire process was smooth and stress-free.",
      name: "Sarah Johnson",
      company: "Luxury Home Buyer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      location: "Beverly Hills, CA"
    },
    {
      id: 2,
      text: "Outstanding service and market knowledge. They helped me identify profitable investment opportunities and guided me through multiple successful transactions. Highly recommended!",
      name: "Michael Chen",
      company: "Property Investor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      rating: 5,
      location: "Manhattan, NY"
    },
    {
      id: 3,
      text: "Sold my house above asking price in just 2 weeks! Their marketing strategy and professional photography made all the difference. Couldn't be happier with the results.",
      name: "Emily Rodriguez",
      company: "First-Time Seller",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      rating: 5,
      location: "Austin, TX"
    },
    {
      id: 4,
      text: "Relocating for work was stressful, but they made the home buying process seamless. Their local expertise and attention to detail exceeded my expectations.",
      name: "David Thompson",
      company: "Corporate Relocation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      location: "Seattle, WA"
    },
    {
      id: 5,
      text: "The team's professionalism and dedication made selling my property a breeze. They handled everything from staging to closing with remarkable efficiency.",
      name: "Lisa Parker",
      company: "Property Owner",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      rating: 5,
      location: "Miami, FL"
    },
    {
      id: 6,
      text: "Excellent communication and market insights. They helped me find the perfect investment property and negotiated a great deal. Truly professional service.",
      name: "James Wilson",
      company: "Real Estate Investor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      location: "Chicago, IL"
    }
  ];

  // Touch handlers for mobile gesture swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const totalSlides = isMobile ? testimonials.length : Math.ceil(testimonials.length / 3);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    if (isAutoPlaying && !isTransitioning) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentSlide, totalSlides, isTransitioning]);

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentSlide]];
    } else {
      const startIndex = currentSlide * 3;
      return testimonials.slice(startIndex, startIndex + 3);
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-light">
            Discover why our clients trust us with their most important real estate decisions
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-400 mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Container with gesture support */}
        <div className="relative">
          <div 
            ref={containerRef}
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={`grid gap-8 transition-all duration-500 ease-in-out ${
              isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'
            }`}>
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-white  p-8  mx-auto max-w-md md:max-w-none relative group border border-gray-100 ${
                    isMobile ? 'animate-fade-in' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-black-500 to-gray-500 rounded-3xl p-[1px] opacity-0  transition-opacity duration-500">
                    <div className="bg-white rounded-3xl w-full h-full"></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Enhanced Quote Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-6xl text-gray-200 font-serif leading-none select-none">
                        "
                      </div>
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    
                    {/* Testimonial Text with better typography */}
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 leading-relaxed font-light">
                      {testimonial.text}
                    </p>
                    
                    {/* Enhanced Author Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-200"
                          />
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 text-sm font-medium">
                            {testimonial.company}
                          </p>
                          <p className="text-gray-500 text-xs mt-1">
                            📍 {testimonial.location}
                          </p>
                        </div>
                      </div>
                      
                      {/* Verification badge */}
                      <div className="flex items-center space-x-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 items-center justify-center group hover:bg-gray-50 z-10 border border-gray-200 disabled:opacity-50"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600 group-hover:text-gray-600 transition-colors duration-300" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 items-center justify-center group hover:bg-gray-50 z-10 border border-gray-200 disabled:opacity-50"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600 group-hover:text-gray-600 transition-colors duration-300" />
          </button>
        </div>

        {/* Enhanced Dots Navigation */}
        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => !isTransitioning && setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-gray-500 to-gray-400 w-8 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400 w-3'
              }`}
            />
          ))}
        </div>

        {/* Mobile swipe indicator */}
        {isMobile && (
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span>Swipe to navigate</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;