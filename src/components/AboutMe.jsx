import React, { useState, useEffect } from 'react';
import { Star, Award, Users, TrendingUp, Phone, Mail, MapPin, ChevronRight, Home, Building, DollarSign, Users2, Linkedin, Twitter, Instagram, Facebook, Globe, Calendar, Clock, Target } from 'lucide-react';

const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('experience');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { number: "250+", label: "Properties Sold", icon: TrendingUp },
        { number: "98%", label: "Client Satisfaction", icon: Star },
        { number: "15+", label: "Years Experience", icon: Award },
        { number: "500+", label: "Happy Families", icon: Users }
    ];

    const achievements = [
        "Top 1% Real Estate Agent 2023-2024",
        "Certified Luxury Home Marketing Specialist",
        "Multi-Million Dollar Producer",
        "Client Choice Award Winner"
    ];

    const processSteps = [
        {
            step: "01",
            title: "Initial Consultation",
            description: "Understanding your needs, budget, and timeline",
            icon: Calendar
        },
        {
            step: "02",
            title: "Market Research",
            description: "Comprehensive analysis of current market conditions",
            icon: Globe
        },
        {
            step: "03",
            title: "Strategy Development",
            description: "Custom plan tailored to your specific goals",
            icon: Target
        },
        {
            step: "04",
            title: "Execution & Support",
            description: "Full-service guidance from start to finish",
            icon: Clock
        }
    ];

    const socialLinks = [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Facebook, href: "#", label: "Facebook" }
    ];

    return (
        <section className="relative min-h-screen bg-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
                    {/* Left Column */}
                    <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        {/* Profile Card */}
                        <div className="bg-transparent rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8  transition-all duration-500 group">
                            <div className="flex flex-col items-center sm:items-start gap-6 sm:gap-8">
                                <div className="relative flex-shrink-0 w-full sm:w-auto flex justify-start">
                                    <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 p-1 group-hover:scale-105 transition-transform duration-500">
                                        <img
                                            src="https://i.ibb.co/YmfKWZW/hero1.jpg"
                                            alt="Vishal Magar"
                                            className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                                        />
                                    </div>

                                </div>

                                <div className="flex-1 text-left w-full">
                                    <div className="space-y-3 sm:space-y-4">
                                        <div>
                                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Vishal Magar</h3>
                                            <p className="text-gray-600 font-medium text-base sm:text-lg">Senior Real Estate Advisor</p>
                                        </div>

                                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                                            With over 15 years of experience in luxury real estate, I specialize in helping clients navigate complex transactions with confidence and achieve exceptional results.
                                        </p>

                                        {/* Social Icons */}
                                        <div className="flex gap-3 pt-4 justify-start">
                                            {socialLinks.map((social, index) => {
                                                const Icon = social.icon;
                                                return (
                                                    <a
                                                        key={index}
                                                        href={social.href}
                                                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110"
                                                        aria-label={social.label}
                                                    >
                                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    </a>
                                                );
                                            })}
                                        </div>

                                        <div className="flex flex-row flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                                            <a
                                                href="tel:+1234567890"
                                                className="flex items-center justify-center gap-3 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                                            >
                                                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                                                Call Now
                                            </a>
                                            <a
                                                href="mailto:vishal@realestate.com"
                                                className="flex items-center justify-center gap-3 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 border border-gray-200 text-sm sm:text-base"
                                            >
                                                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                                Email Me
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                                        style={isVisible ? { transitionDelay: `${600 + index * 100}ms` } : {}}
                                    >
                                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 mx-auto mb-2 sm:mb-3" />
                                        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                                        <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Achievements */}
                        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-lg">
                            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                                Key Achievements
                            </h4>
                            <div className="space-y-3 sm:space-y-4">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-start gap-3 sm:gap-4 group">
                                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300 group-hover:text-white transition-colors text-sm sm:text-base">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        {/* Tabs */}
                        <div className="flex bg-gray-200 rounded-xl sm:rounded-2xl p-1 mb-6 sm:mb-8">
                            <button
                                onClick={() => setActiveTab('experience')}
                                className={`flex-1 py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${activeTab === 'experience' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                Experience
                            </button>
                            <button
                                onClick={() => setActiveTab('process')}
                                className={`flex-1 py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${activeTab === 'process' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                My Process
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
                            {activeTab === 'experience' && (
                                <div className="space-y-6 sm:space-y-8 animate-fade-in">
                                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg shadow-gray-100/50 border border-gray-100">
                                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">My Approach</h4>
                                        <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                                            I believe in building lasting relationships through transparency, integrity, and results. Every client receives personalized attention and a tailored strategy designed to exceed their expectations.
                                        </p>
                                        <div className="space-y-4 sm:space-y-6">
                                            {[
                                                { title: 'Market Analysis', desc: 'Comprehensive market research and pricing strategies' },
                                                { title: 'Negotiation Excellence', desc: 'Skilled negotiation to secure the best possible terms' },
                                                { title: 'Full-Service Support', desc: 'From initial consultation to closing and beyond' }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-3 sm:gap-4">
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                                                    <div>
                                                        <h5 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">{item.title}</h5>
                                                        <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200">
                                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Specializations</h4>
                                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                            {[
                                                { icon: Home, label: 'Luxury Homes' },
                                                { icon: Building, label: 'Commercial' },
                                                { icon: DollarSign, label: 'Investment' },
                                                { icon: Users2, label: 'Residential' }
                                            ].map((item, i) => {
                                                const Icon = item.icon;
                                                return (
                                                    <div key={i} className="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100">
                                                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-gray-600" />
                                                        <div className="font-medium text-gray-900 text-sm sm:text-base">{item.label}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'process' && (
                                <div className="space-y-6 sm:space-y-8 animate-fade-in">
                                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg shadow-gray-100/50 border border-gray-100">
                                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">How I Work With You</h4>
                                        <div className="space-y-6 sm:space-y-8">
                                            {processSteps.map((step, index) => {
                                                const Icon = step.icon;
                                                return (
                                                    <div key={index} className="flex items-start gap-4 sm:gap-6 group">
                                                        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base group-hover:bg-gray-800 transition-colors duration-300">
                                                            {step.step}
                                                        </div>
                                                        <div className="flex-1 pt-1 sm:pt-2">
                                                            <div className="flex items-center gap-3 mb-2 sm:mb-3">
                                                                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                                                                <h5 className="font-semibold text-gray-900 text-base sm:text-lg">{step.title}</h5>
                                                            </div>
                                                            <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center shadow-lg">
                                        <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h4>
                                        <p className="mb-6 sm:mb-8 text-gray-300 text-sm sm:text-base lg:text-lg">Let's discuss your real estate goals and create a personalized strategy for success.</p>
                                        <button className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                                            Schedule Free Consultation
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
            `}</style>
        </section>
    );
};

export default AboutMe;