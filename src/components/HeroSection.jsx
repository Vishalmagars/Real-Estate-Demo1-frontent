import React, { useState, useEffect } from 'react';

import { ChevronLeft, ChevronRight, Home, Bath, Square, MapPin, Play, Star, ArrowRight } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const YourComponent = () => {
  const navigate = useNavigate();
}

  const handleExploreClick = () => {
    navigate('/shop');
  };


const properties = [
  {
    id: 1,
    beds: 4,
    baths: 2,
    sqFt: 1200,
    location: "Miami, FL",
    title: "Prismarine Coastal Elysium",
    description: "A visionary masterpiece with boundless ocean horizons and unparalleled luxury amenities.",
    price: "$5,500",
    priceType: "/month",
    rating: 4.9,
    type: "Luxury Villa",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    beds: 5,
    baths: 3,
    sqFt: 1800,
    location: "Aspen, CO",
    title: "Onyx Alpine Dominion",
    description: "A regal fortress of timeless luxury nestled in the pristine mountain wilderness.",
    price: "$7,200",
    priceType: "/month",
    rating: 5.0,
    type: "Mountain Estate",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    beds: 3,
    baths: 2,
    sqFt: 1000,
    location: "Napa Valley, CA",
    title: "Iridescent Vineyard Crown",
    description: "A radiant estate cradled by lush, rolling vineyards with world-class wine cellars.",
    price: "$4,800",
    priceType: "/month",
    rating: 4.8,
    type: "Vineyard Estate",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 4,
    beds: 6,
    baths: 4,
    sqFt: 2500,
    location: "Malibu, CA",
    title: "Astral Ocean Bastion",
    description: "A divine sanctuary with unmatched coastal serenity and breathtaking Pacific views.",
    price: "$12,000",
    priceType: "/month",
    rating: 5.0,
    type: "Oceanfront Mansion",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 5,
    beds: 4,
    baths: 3,
    sqFt: 1600,
    location: "New York, NY",
    title: "Cosmic Skyline Zenith",
    description: "A celestial penthouse with commanding urban vistas and metropolitan sophistication.",
    price: "$8,500",
    priceType: "/month",
    rating: 4.9,
    type: "Luxury Penthouse",
    image: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    properties.forEach((property) => {
      const img = new Image();
      img.src = property.image;
      img.onload = () => setImageLoaded((prev) => ({ ...prev, [property.id]: true }));
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % properties.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const currentProperty = properties[currentSlide];

  return (
    <section className="relative h-[80vh] md:h-[85vh] lg:h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Images */}
      <div className="absolute inset-0 z-10">
        {properties.map((property, index) => (
          <div
            key={property.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${property.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group shadow-lg"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group shadow-lg"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </button> */}

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col pt-[9px]">
        {/* Top Navigation */}
        <div className="flex justify-between items-center p-3 md:p-4 lg:p-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4">
            <MapPin className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
            <span className="text-white text-xs md:text-sm font-medium">{currentProperty.location}</span>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-2 py-1 md:px-4 md:py-2">
              <Star className="w-3 h-3 md:w-4 md:h-4 text-amber-400 fill-current" />
              <span className="text-white text-xs md:text-sm font-medium">{currentProperty.rating}</span>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-full px-2 py-1 md:px-4 md:py-2">
              <span className="text-white text-xs md:text-sm font-medium">{currentProperty.type}</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-3 md:px-4 lg:px-6 pb-4 md:pb-6">
          {/* Left Content */}
          <div className="w-full lg:w-3/5 xl:w-1/2 mb-4 lg:mb-0">
            <div className="max-w-xl lg:max-w-2xl">
              <div className="mb-4 md:mb-6">


                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight">
                  {currentProperty.title.split(' ').map((word, index) => (
                    <span
                      key={index}
                      className="inline-block"
                      style={{
                        animation: `slideInUp 0.8s ease-out ${index * 0.1}s both`
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </h1>

                <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-4 md:mb-6 leading-relaxed opacity-0 animate-fadeInUp delay-500">
                  {currentProperty.description}
                </p>
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-4 md:mb-6">
                {[
                  { icon: Home, label: 'Bedrooms', value: currentProperty.beds },
                  { icon: Bath, label: 'Bathrooms', value: currentProperty.baths },
                  { icon: Square, label: 'Sq Ft', value: currentProperty.sqFt.toLocaleString() },
                  { icon: MapPin, label: 'Location', value: currentProperty.location.split(',')[0] }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/15 backdrop-blur-md rounded-xl p-2 md:p-3 text-center transform hover:scale-105 transition-all duration-300"
                    style={{
                      animation: `slideInUp 0.6s ease-out ${0.7 + index * 0.1}s both`
                    }}
                  >
                    <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-purple-400 mx-auto mb-1 md:mb-2" />
                    <p className="text-lg md:text-xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs md:text-sm text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 opacity-0 animate-fadeInUp delay-1000">
      {/* Explore Property Button (navigates to /shop) */}
      <button
        onClick={handleExploreClick}
        className="group bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
      >
        <span>Explore Property</span>
        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Virtual Tour Button */}
      <button className="group bg-white/15 backdrop-blur-md text-white px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base border border-white/20 hover:bg-white/25 transition-all duration-300 flex items-center justify-center gap-2">
        <Play className="w-4 h-4 md:w-5 md:h-5" />
        <span>Virtual Tour</span>
      </button>
    </div>
            </div>
          </div>

          {/* Right Content - Price Card */}
          <div className="w-full sm:w-auto lg:w-2/5 xl:w-auto">
            <div className="bg-white/15 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500 opacity-0 animate-fadeInUp delay-800 max-w-sm mx-auto lg:mx-0">
              <div className="text-center">
                <div className="mb-3 md:mb-4">
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{currentProperty.price}</span>
                  <span className="text-sm md:text-base text-gray-300">{currentProperty.priceType}</span>
                </div>

                <div className="flex items-center justify-center gap-1 mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 md:w-5 md:h-5 ${i < Math.floor(currentProperty.rating) ? 'text-amber-400 fill-current' : 'text-gray-400'}`}
                    />
                  ))}
                  <span className="text-white ml-2 font-medium text-sm md:text-base">{currentProperty.rating}</span>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                  Schedule Viewing
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Dots */}
        <div className="flex justify-center items-center gap-2 md:gap-3 pb-3 md:pb-4">
          {properties.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 md:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-gray-400 w-6 md:w-8' : 'bg-white/30 hover:bg-white/50 w-2 md:w-3'}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-800 {
          animation-delay: 0.8s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;