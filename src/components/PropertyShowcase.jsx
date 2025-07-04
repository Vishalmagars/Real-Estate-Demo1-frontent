import React, { useState } from 'react';
import {
  MapPin,
  Bed,
  Bath,
  Car,
  Calendar,
  Home,
  Eye,
  Heart,
  Share2,
  Phone,
  Mail,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
  Maximize2,
  Bookmark,
  ArrowLeft,
  ArrowRight,
  DollarSign,
  Ruler,
  BedDouble,
  Building,
} from 'lucide-react';

export default function PropertyShowcase() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [showContactForm, setShowContactForm] = useState(false);

    const property = {
        "id": "64f9c8a9f2e456001c2de987",
        "title": "Modern Design Apartment",
        "description": "Stunning modern apartment featuring an open-concept layout with minimalist design elements. The space showcases contemporary architecture with high ceilings, premium finishes, and an abundance of natural light through floor-to-ceiling windows.",
        "status": "For Sale",
        "price": 876000,
        "pricePerSqft": 604,
        "isFeature": true,
        "propertyType": "Apartment",
        "addressLine": "9 Quincy St, Brooklyn, NY, USA",
        "city": "Brooklyn",
        "state": "NY",
        "zipCode": "11201",
        "mapLink": "https://maps.google.com/?q=9+Quincy+St+Brooklyn+NY",
        "bedrooms": 3,
        "bathrooms": 2,
        "area": 1450,
        "floor": 4,
        "balcony": true,
        "parking": true,
        "furnishedStatus": "Furnished",
        "yearBuilt": 2016,
        "propertyAge": "8 years",
        "images": [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
        ],
        "amenities": [
            "Air Conditioning",
            "Balcony",
            "Gym",
            "Swimming Pool",
            "Laundry",
            "Lawn",
            "Microwave",
            "Refrigerator",
            "Sauna",
            "TV Cable",
            "Washer",
            "WiFi"
        ],
        "features": {
            "propertySize": "1450 Sq Ft",
            "bedrooms": 3,
            "bathrooms": 2,
            "garage": 1,
            "yearBuilt": 2016,
            "propertyStatus": "For Sale"
        }
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    const propertyDetails = [
      { icon: <Home size={18} />, label: 'Property ID', value: 'HZ29' },
      { icon: <DollarSign size={18} />, label: 'Price', value: formatPrice(property.price) },
      { icon: <Ruler size={18} />, label: 'Property Size', value: `${property.area} Sq Ft` },
      { icon: <BedDouble size={18} />, label: 'Bedrooms', value: property.bedrooms },
      { icon: <Bath size={18} />, label: 'Bathrooms', value: property.bathrooms },
      { icon: <Car size={18} />, label: 'Garage', value: '1' },
      { icon: <Calendar size={18} />, label: 'Year Built', value: property.yearBuilt },
      { icon: <Building size={18} />, label: 'Property Type', value: property.propertyType },
    ];

    // Mobile Header Component
    const MobileHeader = () => (
        <div className="lg:hidden bg-white   p-4 shadow-sm mb-4">
            <div className="flex items-center justify-between mb-3">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {property.status}
                </span>
                <span className="text-sm text-gray-500">Updated 24 minutes ago</span>
            </div>

            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {formatPrice(property.price)}
            </div>
            <div className="text-sm text-gray-500 mb-3">
                ${property.pricePerSqft}/sq ft
            </div>

            <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                {property.title}
            </h1>

            <div className="flex items-start space-x-2 text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{property.addressLine}</span>
            </div>

          
        </div>
    );

    // Contact Form Component
   

const ContactForm = () => (
  <div className="bg-white rounded-xl p-6 shadow-md">
    {/* Agent Info */}
    <div className="flex items-center gap-4 mb-6">
      <img
        src="https://i.ibb.co/YmfKWZW/hero1.jpg" // replace with your agent image path
        alt="Samuel Palmer"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <div className="font-semibold text-gray-900">Samuel Palmer</div>
        <div className="text-sm text-blue-600 hover:underline cursor-pointer">
          View Listings
        </div>
      </div>
    </div>

    {/* Contact Form */}
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
      />
      <input
        type="tel"
        placeholder="Phone"
        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
      />
      <textarea
        placeholder="Hello, I am interested in [Design apartment]"
        rows="4"
        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-900"
      ></textarea>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="agree"
          className="mt-1 w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
        />
        <label htmlFor="agree" className="text-xs text-gray-600">
          By submitting this form I agree to the Terms of Use.
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-700 transition"
      >
        Send Message
      </button>
    </form>
  </div>
);


    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 sm:py-8">

                {/* Mobile Header - Only visible on mobile */}
                <MobileHeader />

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">

                    {/* Left Column - Images and Content */}
                    <div className="lg:col-span-2 space-y-4 lg:space-y-6">

                        {/* Main Image Gallery */}
                        <div className="bg-white   overflow-hidden shadow-sm">
                            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] group">
                                <img
                                    src={property.images[currentImageIndex]}
                                    alt={`Property view ${currentImageIndex + 1}`}
                                    className="w-full h-full object-cover"
                                />

                                {/* Image Navigation */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                                </button>

                                {/* Image Counter */}
                                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                                    {currentImageIndex + 1} / {property.images.length}
                                </div>

                                {/* Action Buttons */}
                                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex space-x-2">
                                    <button
                                        onClick={() => setIsLiked(!isLiked)}
                                        className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isLiked ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-700 hover:bg-white'
                                            }`}
                                    >
                                        <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isLiked ? 'fill-current' : ''}`} />
                                    </button>
                                    <button
                                        onClick={() => setIsBookmarked(!isBookmarked)}
                                        className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isBookmarked ? 'bg-gray-900 text-white' : 'bg-white/90 text-gray-700 hover:bg-white'
                                            }`}
                                    >
                                        <Bookmark className={`w-4 h-4 sm:w-5 sm:h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Thumbnail Grid */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 px-4 lg:px-0">
                            {property.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`relative h-12 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${index === currentImageIndex ? 'border-gray-900' : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    {index === currentImageIndex && (
                                        <div className="absolute inset-0 bg-gray-900/20"></div>
                                    )}
                                </button>
                            ))}
                        </div>



                        {/* Property Overview */}
                        <div className="bg-white   p-4 sm:p-6 shadow-sm">
                            <h2 className="text-lg sm:text-xl font-semibold mb-4">Overview</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                                    <Bed className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-gray-600" />
                                    <div className="text-base sm:text-lg font-semibold">{property.bedrooms}</div>
                                    <div className="text-xs sm:text-sm text-gray-500">Bedrooms</div>
                                </div>
                                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                                    <Bath className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-gray-600" />
                                    <div className="text-base sm:text-lg font-semibold">{property.bathrooms}</div>
                                    <div className="text-xs sm:text-sm text-gray-500">Bathrooms</div>
                                </div>
                                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                                    <Home className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-gray-600" />
                                    <div className="text-base sm:text-lg font-semibold">{property.area}</div>
                                    <div className="text-xs sm:text-sm text-gray-500">Sq Ft</div>
                                </div>
                                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                                    <Car className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-gray-600" />
                                    <div className="text-base sm:text-lg font-semibold">1</div>
                                    <div className="text-xs sm:text-sm text-gray-500">Garage</div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white   p-4 sm:p-6 shadow-sm">
                            <h2 className="text-lg sm:text-xl font-semibold mb-4">Description</h2>
                            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                                {property.description}
                            </p>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                This exceptional property offers modern living at its finest, with premium materials and finishes throughout. The open floor plan creates a seamless flow between living spaces, while large windows flood the interior with natural light. Perfect for those seeking contemporary urban living with style and comfort.
                            </p>
                        </div>

                     <div className="bg-white rounded-xl p-6 shadow-md">
  <h2 className="text-xl font-semibold mb-6 text-gray-900">Property Details</h2>
  <div className="grid grid-cols-2 gap-4">
    {propertyDetails.map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-4 bg-gray-50 px-4 py-3 rounded-md border border-gray-200 hover:shadow-sm transition"
      >
        <div className="text-gray-600">{item.icon}</div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">{item.label}</span>
          <span className="text-sm font-medium text-gray-900">{item.value}</span>
        </div>
      </div>
    ))}
  </div>
</div>




                        {/* Features */}
                        <div className="bg-white  p-6 shadow-md">
                            <h2 className="text-xl font-semibold mb-5 text-gray-900">Features & Amenities</h2>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                {property.amenities.map((amenity, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 bg-gray-100 rounded px-3 py-2"
                                    >
                                        <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full border border-gray-400">
                                            <svg
                                                className="w-3.5 h-3.5 text-green-600"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-800">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* Video Section */}
                        <div className="bg-white   p-4 sm:p-6 ">
                            <h2 className="text-lg sm:text-xl font-semibold mb-4">Property Video Tour</h2>
                            <div className="relative">
                                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                                    <iframe
                                        src="https://www.youtube.com/embed/oi8XdMtn1Wc?si=BIs5_KFqTKR9L9GP"
                                        title="Property Video Tour"
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="text-sm text-gray-600">
                                        Take a virtual tour of this beautiful property
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Contact Form - Shows before map on mobile */}
                        <div className="lg:hidden">
                            <ContactForm />
                        </div>

                        {/* Map Section for Mobile */}
                        <div className="lg:hidden bg-white   p-4 sm:p-6 shadow-sm">
                            <h3 className="text-lg font-semibold mb-4">Location</h3>
                            <div className="space-y-3 text-sm mb-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Address:</span>
                                    <span className="text-gray-900 text-right flex-1 ml-2">{property.addressLine}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">City:</span>
                                    <span className="text-gray-900">{property.city}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">State:</span>
                                    <span className="text-gray-900">{property.state}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Zip Code:</span>
                                    <span className="text-gray-900">{property.zipCode}</span>
                                </div>
                            </div>

                            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                    <p className="text-sm text-gray-600">Map View</p>
                                    <button className="mt-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                                        Open on Google Maps
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Desktop Contact & Info */}
                    <div className="hidden lg:block space-y-6">
                        {/* Price & Basic Info */}
                        <div className="bg-white   p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {property.status}
                                </span>
                                <span className="text-sm text-gray-500">Updated 24 minutes ago</span>
                            </div>

                            <div className="text-3xl font-bold text-gray-900 mb-2">
                                {formatPrice(property.price)}
                            </div>
                            <div className="text-sm text-gray-500 mb-4">
                                ${property.pricePerSqft}/sq ft
                            </div>

                            <h1 className="text-xl font-semibold text-gray-900 mb-3">
                                {property.title}
                            </h1>

                            <div className="flex items-start space-x-2 text-gray-600 mb-6">
                                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{property.addressLine}</span>
                            </div>

                           
                        </div>

                        {/* Contact Agent */}
                        <ContactForm />

                        {/* Map */}
                        <div className="bg-white   p-6 shadow-sm">
                            <h3 className="text-lg font-semibold mb-4">Address</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Address:</span>
                                    <span className="text-gray-900 text-right">{property.addressLine}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">City:</span>
                                    <span className="text-gray-900">{property.city}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">State/county:</span>
                                    <span className="text-gray-900">{property.state}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Zip/Postal Code:</span>
                                    <span className="text-gray-900">{property.zipCode}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Area:</span>
                                    <span className="text-gray-900">{property.city}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Country:</span>
                                    <span className="text-gray-900">United States</span>
                                </div>
                            </div>

                            <div className="mt-4 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                    <p className="text-sm text-gray-600">Map View</p>
                                    <button className="mt-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                                        Open on Google Maps
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}