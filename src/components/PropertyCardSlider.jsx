import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Bed, Bath, Square, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PropertyCardSlider = () => {
  const navigate = useNavigate();

  const properties = [
    {
      title: "Light And Modern Apartment",
      price: "$5,600/mo",
      location: "2436 SW 8th St, Miami, FL 33135, USA",
      type: "APARTMENT",
      bedrooms: 5,
      bathrooms: 3,
      sqFt: 3450,
      images: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
    },
    {
      title: "Relaxing Apartment",
      price: "$3,500/mo",
      location: "Marcy Ave, Brooklyn, NY, USA",
      type: "APARTMENT",
      bedrooms: 1,
      bathrooms: 1,
      sqFt: 1760,
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
    },
    {
      title: "New Apartment Nice View",
      price: "$3,750/mo",
      location: "8100 S Ashland Ave, Chicago, IL 60620, USA",
      type: "APARTMENT",
      bedrooms: 1,
      bathrooms: 1,
      sqFt: 1678,
      images: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
    },
    {
      title: "Light And Modern Apartmentu",
      price: "$5,600/mo",
      location: "2436 SW 8th St, Miami, FL 33135, USA",
      type: "APARTMENT",
      bedrooms: 5,
      bathrooms: 3,
      sqFt: 3450,
      images: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
    },
    {
      title: "Relaxing Apartmentgh",
      price: "$3,500/mo",
      location: "Marcy Ave, Brooklyn, NY, USA",
      type: "APARTMENT",
      bedrooms: 1,
      bathrooms: 1,
      sqFt: 1760,
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
    },
    {
      title: "New Apartment Nice Vieuw",
      price: "$3,750/mo",
      location: "8100 S Ashland Ave, Chicago, IL 60620, USA",
      type: "APARTMENT",
      bedrooms: 1,
      bathrooms: 1,
      sqFt: 1678,
      images: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
    }
  ];

  // 👇 Dynamically initialize based on property count
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Array(properties.length).fill(0)
  );
  const [isLiked, setIsLiked] = useState(
    Array(properties.length).fill(false)
  );

  const nextImage = (cardIndex) => {
    setCurrentImageIndex(prev => {
      const newIndex = [...prev];
      const maxIndex = properties[cardIndex].images.length - 1;
      newIndex[cardIndex] = prev[cardIndex] === maxIndex ? 0 : prev[cardIndex] + 1;
      return newIndex;
    });
  };

  const prevImage = (cardIndex) => {
    setCurrentImageIndex(prev => {
      const newIndex = [...prev];
      const maxIndex = properties[cardIndex].images.length - 1;
      newIndex[cardIndex] = prev[cardIndex] === 0 ? maxIndex : prev[cardIndex] - 1;
      return newIndex;
    });
  };

  const toggleLike = (cardIndex) => {
    setIsLiked(prev => {
      const newLiked = [...prev];
      newLiked[cardIndex] = !newLiked[cardIndex];
      return newLiked;
    });
  };

  const handleCardClick = () => {
    navigate('/propertepage');
  };

  const handleShowMore = () => {
    window.location.href = '/propertepage';
  };

  return (
    <div className="min-h-screen bg-white p-4 pb-10">
      <div className="text-left px-4 sm:px-6 lg:px-8 max-w-full pb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight">
        <span className="font-bold text-gray-800">Feature Colletion</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-light">
          Redefining luxury in real estate. Experience premium service with sophisticated solutions tailored for discerning clients.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {properties.map((property, cardIndex) => (
            <div
              key={cardIndex}
              className="bg-white shadow-lg overflow-hidden cursor-pointer"
              onClick={() => handleCardClick(cardIndex)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardClick(cardIndex);
                }
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.images[currentImageIndex[cardIndex]]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded text-xs font-medium shadow-sm">
                  FOR RENT
                </div>

                <div
                  className="absolute inset-0 flex items-center justify-between p-3 opacity-0 hover:opacity-100 transition-opacity"
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    onClick={() => prevImage(cardIndex)}
                    className="p-1 rounded-full bg-white bg-opacity-70 hover:bg-opacity-90 transition-all"
                  >
                    <ChevronLeft className="w-3 h-3 text-gray-700" />
                  </button>
                  <button
                    onClick={() => nextImage(cardIndex)}
                    className="p-1 rounded-full bg-white bg-opacity-70 hover:bg-opacity-90 transition-all"
                  >
                    <ChevronRight className="w-3 h-3 text-gray-700" />
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3">
                  <div className="flex items-end justify-between">
                    <div className="text-white">
                      <div className="flex items-center space-x-3 mb-1">
                        <div className="flex items-center space-x-1">
                          <Bed className="w-3 h-3" />
                          <span className="text-xs font-medium">{property.bedrooms}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Bath className="w-3 h-3" />
                          <span className="text-xs font-medium">{property.bathrooms}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Square className="w-3 h-3" />
                          <span className="text-xs font-medium">{property.sqFt} Sq Ft</span>
                        </div>
                      </div>
                      <p className="text-xs opacity-80 mb-1">{property.type}</p>
                      <p className="text-lg font-bold">{property.price}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <button
                        className="p-1.5 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Maximize2 className="w-3 h-3 text-black" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button onClick={handleShowMore} className="button-89" role="button">
            View All Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardSlider;
