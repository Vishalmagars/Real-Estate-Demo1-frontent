import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    FaHeart,
    FaEye,
    FaMapMarkerAlt,
    FaCalendar,
    FaFilter,
    FaChevronDown,
    FaSearch,
    FaWifi,
    FaCar,
    FaSwimmingPool,
    FaDumbbell,
    FaShieldAlt,
    FaLeaf
} from 'react-icons/fa';
import { PiBed, PiBathtub, PiRuler } from 'react-icons/pi';

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <h2 className="text-center text-red-600">Something went wrong. Please try again later.</h2>;
        }
        return this.props.children;
    }
}

const PropertyCard = ({ property }) => {
    const [isLiked, setIsLiked] = useState(false);

    const cardSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    const getAmenityIcon = (amenity) => {
        switch (amenity.toLowerCase()) {
            case 'wifi': return <FaWifi className="text-blue-500" />;
            case 'parking': return <FaCar className="text-green-500" />;
            case 'pool': return <FaSwimmingPool className="text-blue-400" />;
            case 'gym': return <FaDumbbell className="text-red-500" />;
            case 'security': return <FaShieldAlt className="text-orange-500" />;
            case 'garden': return <FaLeaf className="text-green-600" />;
            default: return <span className="w-2 h-2 bg-gray-400 rounded-full" />;
        }
    };

    return (
        <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            {/* Image Section */}
            <div className="relative h-48 sm:h-56">
                <Slider {...cardSliderSettings}>
                    {property.images.map((image, index) => (
                        <div key={index} className="h-48 sm:h-56">
                            <img
                                src={image}
                                alt={`${property.title} - Image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </Slider>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-1">
                    {property.featured && (
                        <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            Featured
                        </span>
                    )}
                    <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        For Rent
                    </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-3 left-3">
                    <span className="text-white text-xl font-bold bg-black bg-opacity-60 px-3 py-1 rounded-lg">
                        {property.price}
                    </span>
                </div>

                {/* Action Icons */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                    <button
                        onClick={() => setIsLiked(!isLiked)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${isLiked ? 'bg-red-500 text-white' : 'bg-white bg-opacity-80 text-gray-700'
                            }`}
                    >
                        <FaHeart className="text-sm" />
                    </button>
                    <Link
                        to={`/property/${property.title.replace(/\s+/g, '-').toLowerCase()}`}
                        className="bg-white bg-opacity-80 hover:bg-white text-gray-700 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                    >
                        <FaEye className="text-sm" />
                    </Link>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4">
                <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{property.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                        <FaMapMarkerAlt className="mr-1 text-xs" />
                        <span className="truncate">{property.location}</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                        {property.type}
                    </span>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                            <PiBed className="text-lg text-gray-600 mr-1" />
                            <span className="text-lg font-bold text-gray-900">{property.bedrooms}</span>
                        </div>
                        <span className="text-xs text-gray-500">Beds</span>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                            <PiBathtub className="text-lg text-gray-600 mr-1" />
                            <span className="text-lg font-bold text-gray-900">{property.bathrooms}</span>
                        </div>
                        <span className="text-xs text-gray-500">Baths</span>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                            <PiRuler className="text-lg text-gray-600 mr-1" />
                            <span className="text-lg font-bold text-gray-900">{property.sqFt}</span>
                        </div>
                        <span className="text-xs text-gray-500">Sq Ft</span>
                    </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {property.amenities.slice(0, 4).map((amenity, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-600">
                            {getAmenityIcon(amenity)}
                            <span className="ml-1">{amenity}</span>
                        </div>
                    ))}
                    {property.amenities.length > 4 && (
                        <span className="text-xs text-gray-500">+{property.amenities.length - 4} more</span>
                    )}
                </div>

                {/* View Details Button */}
                <Link
                    to={`/propertepage`}
                    className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-medium block text-center"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

const PropertyPage = () => {
    const [displayedCount, setDisplayedCount] = useState(6);
    const [showFilters, setShowFilters] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [filters, setFilters] = useState({
        search: '',
        priceMin: '',
        priceMax: '',
        propertyType: '',
        bedrooms: '',
        bathrooms: '',
        location: '',
        amenities: [],
        sortBy: 'newest',
        availableFrom: '',
        furnished: '',
        petFriendly: '',
    });

    const properties = [
        {
            title: "Light And Modern Apartment",
            price: "$4,500/mo",
            priceValue: 4500,
            location: "2436 SW 8th St, Miami, FL 33135, USA",
            type: "APARTMENT",
            bedrooms: 4,
            bathrooms: 2,
            sqFt: 1200,
            agent: "Samuel Palmer",
            timeAgo: "5 years ago",
            availableFrom: "2025-01-15",
            description: "Experience luxury living in this stunning light and modern apartment featuring contemporary design and premium finishes throughout. Perfect for those seeking comfort and style.",
            amenities: ["WiFi", "Parking", "Pool", "Gym", "Security", "Garden"],
            furnished: "Yes",
            petFriendly: "Yes",
            featured: true,
            images: [
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        },
        {
            title: "Luxury Downtown Loft",
            price: "$6,200/mo",
            priceValue: 6200,
            location: "456 Downtown St, San Francisco, CA, USA",
            type: "LOFT",
            bedrooms: 2,
            bathrooms: 2,
            sqFt: 1800,
            agent: "Sarah Johnson",
            timeAgo: "3 years ago",
            availableFrom: "2025-02-01",
            description: "Stunning loft in the heart of downtown with exposed brick walls, high ceilings, and modern amenities. Perfect for urban professionals.",
            amenities: ["WiFi", "Parking", "Security", "Gym"],
            furnished: "No",
            petFriendly: "No",
            featured: false,
            images: [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        },
        {
            title: "Cozy Garden Studio",
            price: "$3,400/mo",
            priceValue: 3400,
            location: "789 Garden Ave, Portland, OR, USA",
            type: "STUDIO",
            bedrooms: 1,
            bathrooms: 1,
            sqFt: 950,
            agent: "Emma Rodriguez",
            timeAgo: "2 years ago",
            availableFrom: "2025-02-15",
            description: "Charming studio apartment with private garden access and abundant natural light. Features modern amenities in a peaceful setting.",
            amenities: ["WiFi", "Garden", "Security"],
            furnished: "Yes",
            petFriendly: "Yes",
            featured: false,
            images: [
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        },
        {
            title: "Executive Penthouse Suite",
            price: "$15,500/mo",
            priceValue: 15500,
            location: "1 Central Park West, New York, NY, USA",
            type: "PENTHOUSE",
            bedrooms: 4,
            bathrooms: 3,
            sqFt: 3200,
            agent: "David Thompson",
            timeAgo: "1 year ago",
            availableFrom: "2025-01-10",
            description: "Exclusive penthouse suite with panoramic city views, private terrace, and luxury amenities. The epitome of sophisticated urban living.",
            amenities: ["WiFi", "Parking", "Pool", "Gym", "Security", "Garden"],
            furnished: "Yes",
            petFriendly: "No",
            featured: true,
            images: [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        },
        {
            title: "Modern Family Home",
            price: "$7,800/mo",
            priceValue: 7800,
            location: "123 Family Lane, Austin, TX, USA",
            type: "HOUSE",
            bedrooms: 3,
            bathrooms: 2,
            sqFt: 2200,
            agent: "Mike Wilson",
            timeAgo: "6 months ago",
            availableFrom: "2025-03-01",
            description: "Spacious family home with modern amenities, large backyard, and excellent school district. Perfect for families.",
            amenities: ["WiFi", "Parking", "Garden", "Security"],
            furnished: "No",
            petFriendly: "Yes",
            featured: false,
            images: [
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        },
        {
            title: "Beachfront Condo",
            price: "$5,200/mo",
            priceValue: 5200,
            location: "456 Ocean Drive, Miami Beach, FL, USA",
            type: "CONDO",
            bedrooms: 2,
            bathrooms: 2,
            sqFt: 1400,
            agent: "Lisa Chen",
            timeAgo: "4 months ago",
            availableFrom: "2025-01-20",
            description: "Beautiful beachfront condo with stunning ocean views and direct beach access. Resort-style living at its finest.",
            amenities: ["WiFi", "Pool", "Gym", "Security", "Parking"],
            furnished: "Yes",
            petFriendly: "No",
            featured: true,
            images: [
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        }, {
            title: "Light And Modern Apartment",
            price: "$4,500/mo",
            priceValue: 4500,
            location: "2436 SW 8th St, Miami, FL 33135, USA",
            type: "APARTMENT",
            bedrooms: 4,
            bathrooms: 2,
            sqFt: 1200,
            agent: "Samuel Palmer",
            timeAgo: "5 years ago",
            availableFrom: "2025-01-15",
            description: "Experience luxury living in this stunning light and modern apartment featuring contemporary design and premium finishes throughout. Perfect for those seeking comfort and style.",
            amenities: ["WiFi", "Parking", "Pool", "Gym", "Security", "Garden"],
            furnished: "Yes",
            petFriendly: "Yes",
            featured: true,
            images: [
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        },
        {
            title: "Luxury Downtown Loft",
            price: "$6,200/mo",
            priceValue: 6200,
            location: "456 Downtown St, San Francisco, CA, USA",
            type: "LOFT",
            bedrooms: 2,
            bathrooms: 2,
            sqFt: 1800,
            agent: "Sarah Johnson",
            timeAgo: "3 years ago",
            availableFrom: "2025-02-01",
            description: "Stunning loft in the heart of downtown with exposed brick walls, high ceilings, and modern amenities. Perfect for urban professionals.",
            amenities: ["WiFi", "Parking", "Security", "Gym"],
            furnished: "No",
            petFriendly: "No",
            featured: false,
            images: [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        },
        {
            title: "Cozy Garden Studio",
            price: "$3,400/mo",
            priceValue: 3400,
            location: "789 Garden Ave, Portland, OR, USA",
            type: "STUDIO",
            bedrooms: 1,
            bathrooms: 1,
            sqFt: 950,
            agent: "Emma Rodriguez",
            timeAgo: "2 years ago",
            availableFrom: "2025-02-15",
            description: "Charming studio apartment with private garden access and abundant natural light. Features modern amenities in a peaceful setting.",
            amenities: ["WiFi", "Garden", "Security"],
            furnished: "Yes",
            petFriendly: "Yes",
            featured: false,
            images: [
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        },
        {
            title: "Executive Penthouse Suite",
            price: "$15,500/mo",
            priceValue: 15500,
            location: "1 Central Park West, New York, NY, USA",
            type: "PENTHOUSE",
            bedrooms: 4,
            bathrooms: 3,
            sqFt: 3200,
            agent: "David Thompson",
            timeAgo: "1 year ago",
            availableFrom: "2025-01-10",
            description: "Exclusive penthouse suite with panoramic city views, private terrace, and luxury amenities. The epitome of sophisticated urban living.",
            amenities: ["WiFi", "Parking", "Pool", "Gym", "Security", "Garden"],
            furnished: "Yes",
            petFriendly: "No",
            featured: true,
            images: [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        },
        {
            title: "Modern Family Home",
            price: "$7,800/mo",
            priceValue: 7800,
            location: "123 Family Lane, Austin, TX, USA",
            type: "HOUSE",
            bedrooms: 3,
            bathrooms: 2,
            sqFt: 2200,
            agent: "Mike Wilson",
            timeAgo: "6 months ago",
            availableFrom: "2025-03-01",
            description: "Spacious family home with modern amenities, large backyard, and excellent school district. Perfect for families.",
            amenities: ["WiFi", "Parking", "Garden", "Security"],
            furnished: "No",
            petFriendly: "Yes",
            featured: false,
            images: [
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        },
        {
            title: "Beachfront Condo",
            price: "$5,200/mo",
            priceValue: 5200,
            location: "456 Ocean Drive, Miami Beach, FL, USA",
            type: "CONDO",
            bedrooms: 2,
            bathrooms: 2,
            sqFt: 1400,
            agent: "Lisa Chen",
            timeAgo: "4 months ago",
            availableFrom: "2025-01-20",
            description: "Beautiful beachfront condo with stunning ocean views and direct beach access. Resort-style living at its finest.",
            amenities: ["WiFi", "Pool", "Gym", "Security", "Parking"],
            furnished: "Yes",
            petFriendly: "No",
            featured: true,
            images: [
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        }, {
            title: "Light And Modern Apartment",
            price: "$4,500/mo",
            priceValue: 4500,
            location: "2436 SW 8th St, Miami, FL 33135, USA",
            type: "APARTMENT",
            bedrooms: 4,
            bathrooms: 2,
            sqFt: 1200,
            agent: "Samuel Palmer",
            timeAgo: "5 years ago",
            availableFrom: "2025-01-15",
            description: "Experience luxury living in this stunning light and modern apartment featuring contemporary design and premium finishes throughout. Perfect for those seeking comfort and style.",
            amenities: ["WiFi", "Parking", "Pool", "Gym", "Security", "Garden"],
            furnished: "Yes",
            petFriendly: "Yes",
            featured: true,
            images: [
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        },
        {
            title: "Luxury Downtown Loft",
            price: "$6,200/mo",
            priceValue: 6200,
            location: "456 Downtown St, San Francisco, CA, USA",
            type: "LOFT",
            bedrooms: 2,
            bathrooms: 2,
            sqFt: 1800,
            agent: "Sarah Johnson",
            timeAgo: "3 years ago",
            availableFrom: "2025-02-01",
            description: "Stunning loft in the heart of downtown with exposed brick walls, high ceilings, and modern amenities. Perfect for urban professionals.",
            amenities: ["WiFi", "Parking", "Security", "Gym"],
            furnished: "No",
            petFriendly: "No",
            featured: false,
            images: [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        },
        {
            title: "Cozy Garden Studio",
            price: "$3,400/mo",
            priceValue: 3400,
            location: "789 Garden Ave, Portland, OR, USA",
            type: "STUDIO",
            bedrooms: 1,
            bathrooms: 1,
            sqFt: 950,
            agent: "Emma Rodriguez",
            timeAgo: "2 years ago",
            availableFrom: "2025-02-15",
            description: "Charming studio apartment with private garden access and abundant natural light. Features modern amenities in a peaceful setting.",
            amenities: ["WiFi", "Garden", "Security"],
            furnished: "Yes",
            petFriendly: "Yes",
            featured: false,
            images: [
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        },
        {
            title: "Executive Penthouse Suite",
            price: "$15,500/mo",
            priceValue: 15500,
            location: "1 Central Park West, New York, NY, USA",
            type: "PENTHOUSE",
            bedrooms: 4,
            bathrooms: 3,
            sqFt: 3200,
            agent: "David Thompson",
            timeAgo: "1 year ago",
            availableFrom: "2025-01-10",
            description: "Exclusive penthouse suite with panoramic city views, private terrace, and luxury amenities. The epitome of sophisticated urban living.",
            amenities: ["WiFi", "Parking", "Pool", "Gym", "Security", "Garden"],
            furnished: "Yes",
            petFriendly: "No",
            featured: true,
            images: [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        },
        {
            title: "Modern Family Home",
            price: "$7,800/mo",
            priceValue: 7800,
            location: "123 Family Lane, Austin, TX, USA",
            type: "HOUSE",
            bedrooms: 3,
            bathrooms: 2,
            sqFt: 2200,
            agent: "Mike Wilson",
            timeAgo: "6 months ago",
            availableFrom: "2025-03-01",
            description: "Spacious family home with modern amenities, large backyard, and excellent school district. Perfect for families.",
            amenities: ["WiFi", "Parking", "Garden", "Security"],
            furnished: "No",
            petFriendly: "Yes",
            featured: false,
            images: [
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        },
        {
            title: "Beachfront Condo",
            price: "$5,200/mo",
            priceValue: 5200,
            location: "456 Ocean Drive, Miami Beach, FL, USA",
            type: "CONDO",
            bedrooms: 2,
            bathrooms: 2,
            sqFt: 1400,
            agent: "Lisa Chen",
            timeAgo: "4 months ago",
            availableFrom: "2025-01-20",
            description: "Beautiful beachfront condo with stunning ocean views and direct beach access. Resort-style living at its finest.",
            amenities: ["WiFi", "Pool", "Gym", "Security", "Parking"],
            furnished: "Yes",
            petFriendly: "No",
            featured: true,
            images: [
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
        },
    ];

    const amenityOptions = ["WiFi", "Parking", "Pool", "Gym", "Security", "Garden", "Balcony", "Elevator"];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
        setDisplayedCount(6);
    };

    const handleAmenityToggle = (amenity) => {
        setFilters((prev) => ({
            ...prev,
            amenities: prev.amenities.includes(amenity)
                ? prev.amenities.filter(a => a !== amenity)
                : [...prev.amenities, amenity]
        }));
        setDisplayedCount(6);
    };

    const filteredProperties = properties.filter((property) => {
        const priceValue = parseFloat(property.priceValue);
        const minPrice = filters.priceMin ? parseFloat(filters.priceMin) : 0;
        const maxPrice = filters.priceMax ? parseFloat(filters.priceMax) : Infinity;

        return (
            (!filters.search || property.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                property.location.toLowerCase().includes(filters.search.toLowerCase())) &&
            (!filters.priceMin || priceValue >= minPrice) &&
            (!filters.priceMax || priceValue <= maxPrice) &&
            (!filters.propertyType || property.type === filters.propertyType) &&
            (!filters.bedrooms || property.bedrooms >= parseInt(filters.bedrooms)) &&
            (!filters.bathrooms || property.bathrooms >= parseInt(filters.bathrooms)) &&
            (!filters.location || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
            (!filters.furnished || property.furnished === filters.furnished) &&
            (!filters.petFriendly || property.petFriendly === filters.petFriendly) &&
            (!filters.availableFrom || property.availableFrom >= filters.availableFrom) &&
            (filters.amenities.length === 0 || filters.amenities.every(amenity => property.amenities.includes(amenity)))
        );
    });

    const sortedProperties = [...filteredProperties].sort((a, b) => {
        switch (filters.sortBy) {
            case 'price-low':
                return a.priceValue - b.priceValue;
            case 'price-high':
                return b.priceValue - a.priceValue;
            case 'newest':
                return new Date(b.availableFrom) - new Date(a.availableFrom);
            case 'oldest':
                return new Date(a.availableFrom) - new Date(b.availableFrom);
            default:
                return 0;
        }
    });

    const displayedProperties = sortedProperties.slice(0, displayedCount);
    const hasMore = displayedCount < sortedProperties.length;

    const handleLoadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setDisplayedCount(prev => prev + 6);
            setIsLoading(false);
        }, 1000);
    };

    const clearFilters = () => {
        setFilters({
            search: '',
            priceMin: '',
            priceMax: '',
            propertyType: '',
            bedrooms: '',
            bathrooms: '',
            location: '',
            amenities: [],
            sortBy: 'newest',
            availableFrom: '',
            furnished: '',
            petFriendly: '',
        });
        setDisplayedCount(6);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="sm:text-center lg:text-center mb-8">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                        Discover the{' '}
                        <span className="font-bold text-gray-800">
                            Propterties
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                        Redefining luxury in real estate. Experience premium service with sophisticated solutions tailored for discerning clients.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                    <div className="relative max-w-2xl mx-auto">
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            name="search"
                            value={filters.search}
                            onChange={handleFilterChange}
                            placeholder="Search by property name or location..."
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                </div>

                {/* Filter Toggle Button */}
                <div className="flex justify-between items-center mb-6">
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                        <FaFilter className="text-gray-600" />
                        <span>Filters</span>
                        <FaChevronDown className={`transform transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
                    </button>

                    <div className="flex items-center space-x-4">

                        <select
                            name="sortBy"
                            value={filters.sortBy}
                            onChange={handleFilterChange}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Advanced Filters */}
                {showFilters && (
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Advanced Filters</h3>
                            <button
                                onClick={clearFilters}
                                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                            >
                                Clear All
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
                                <input
                                    type="number"
                                    name="priceMin"
                                    value={filters.priceMin}
                                    onChange={handleFilterChange}
                                    placeholder="e.g. 1000"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
                                <input
                                    type="number"
                                    name="priceMax"
                                    value={filters.priceMax}
                                    onChange={handleFilterChange}
                                    placeholder="e.g. 10000"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                                <select
                                    name="propertyType"
                                    value={filters.propertyType}
                                    onChange={handleFilterChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    <option value="">All Types</option>
                                    <option value="APARTMENT">Apartment</option>
                                    <option value="LOFT">Loft</option>
                                    <option value="STUDIO">Studio</option>
                                    <option value="PENTHOUSE">Penthouse</option>
                                    <option value="HOUSE">House</option>
                                    <option value="CONDO">Condo</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                                <select
                                    name="bedrooms"
                                    value={filters.bedrooms}
                                    onChange={handleFilterChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    <option value="">Any</option>
                                    <option value="1">1+</option>
                                    <option value="2">2+</option>
                                    <option value="3">3+</option>
                                    <option value="4">4+</option>
                                    <option value="5">5+</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                                <select
                                    name="bathrooms"
                                    value={filters.bathrooms}
                                    onChange={handleFilterChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    <option value="">Any</option>
                                    <option value="1">1+</option>
                                    <option value="2">2+</option>
                                    <option value="3">3+</option>
                                    <option value="4">4+</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={filters.location}
                                    onChange={handleFilterChange}
                                    placeholder="e.g. Miami, New York"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Available From</label>
                                <input
                                    type="date"
                                    name="availableFrom"
                                    value={filters.availableFrom}
                                    onChange={handleFilterChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Furnished</label>
                                <select
                                    name="furnished"
                                    value={filters.furnished}
                                    onChange={handleFilterChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    <option value="">Any</option>
                                    <option value="Yes">Furnished</option>
                                    <option value="No">Unfurnished</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Pet Friendly</label>
                                <select
                                    name="petFriendly"
                                    value={filters.petFriendly}
                                    onChange={handleFilterChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    <option value="">Any</option>
                                    <option value="Yes">Pet Friendly</option>
                                    <option value="No">No Pets</option>
                                </select>
                            </div>
                        </div>

                        {/* Amenities Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
                            <div className="flex flex-wrap gap-2">
                                {amenityOptions.map((amenity) => (
                                    <button
                                        key={amenity}
                                        onClick={() => handleAmenityToggle(amenity)}
                                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${filters.amenities.includes(amenity)
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                    >
                                        {amenity}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Property Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {displayedProperties.map((property, index) => (
                        <ErrorBoundary key={index}>
                            <PropertyCard property={property} />
                        </ErrorBoundary>
                    ))}
                </div>

                {/* No Results */}
                {sortedProperties.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">🏠</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
                        <p className="text-gray-600 mb-4">Try adjusting your filters to see more results</p>
                        <button
                            onClick={clearFilters}
                            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}



                {/* Load More Button */}
                {hasMore && (
                    <div className="text-center">
                        <button
                            onClick={handleLoadMore}
                            disabled={isLoading}
                            className={`button-89 transition-all duration-200 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            {isLoading ? (
                                <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                                    <span>Loading...</span>
                                </div>
                            ) : (
                                `View More `
                            )}
                        </button>



                    </div>

                )}
            </div>
        </div>
    );
};

export default PropertyPage;