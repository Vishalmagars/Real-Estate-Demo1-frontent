import React, { useState } from 'react';

const LuxuryRealEstateInquiry = () => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    information: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    zipCode: '',
    propertyType: '',
    budget: '',
    minSize: '',
    beds: '',
    baths: ''
  });

  const [activeStep, setActiveStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    console.log('Form submitted:', formData);
  };

  const nextStep = () => setActiveStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setActiveStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white font-sans">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Sticky Hero Section with Background Image */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/80 to-purple-900/80"></div>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-1/2 -left-12 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
              <div className="absolute -bottom-12 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-300"></div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col justify-center h-full min-h-[50vh] lg:min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 pt-16 lg:pt-0">
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
                Why You Choose <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400">
                  Always Me
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Unlock a world of luxury with our curated real estate services, tailored to your unique vision.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 max-w-lg mx-auto lg:mx-0">
  <div className="group">
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-md text-left">
      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className="text-white font-semibold text-sm">Swift Response</h3>
      <p className="text-gray-300 text-xs">Instant inquiry handling</p>
    </div>
  </div>

  <div className="group">
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-md text-left">
      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-white font-semibold text-sm">Trusted Listings</h3>
      <p className="text-gray-300 text-xs">Verified properties only</p>
    </div>
  </div>

  <div className="group col-span-2">
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-md text-left">
      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <h3 className="text-white font-semibold text-sm">Expert Guidance</h3>
      <p className="text-gray-300 text-xs">24/7 premium support</p>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>

        {/* Right Side - Premium Form */}
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 min-h-[50vh] lg:min-h-screen">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-slate-900 to-blue-900 px-6 py-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white mb-2">Begin Your Search</h2>
                <p className="text-gray-200 text-sm">Find your dream home in minutes</p>
              </div>

              <div className="px-6 py-4 bg-gray-50">
                <div className="flex items-center justify-center space-x-2">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                        step <= activeStep 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                          : 'bg-gray-200 text-gray-400'
                      }`}>
                        {step}
                      </div>
                      {step < 3 && (
                        <div className={`w-4 h-0.5 mx-1 transition-all duration-300 ${
                          step < activeStep ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-200'
                        }`}></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2 text-xs text-gray-600">
                  Step {activeStep} of 3
                </div>
              </div>

              <div className="p-6">
                <form>
                  {activeStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          What are you looking for?
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
                          {['Buy', 'Rent', 'Sell', 'Invest'].map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, inquiryType: type.toLowerCase() }))}
                              className={`p-3 rounded-lg border-2 transition-all duration-200 transform hover:scale-105 ${
                                formData.inquiryType === type.toLowerCase()
                                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                                  : 'border-gray-200 hover:border-blue-300'
                              }`}
                            >
                              <div className="font-semibold text-sm">{type}</div>
                              <div className="text-xs text-gray-500 mt-1">
                                {type === 'Buy' && 'Purchase property'}
                                {type === 'Rent' && 'Rental property'}
                                {type === 'Sell' && 'Sell your property'}
                                {type === 'Invest' && 'Investment opportunity'}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm"
                          required
                        />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm"
                          required
                        />
                      </div>

                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm"
                        required
                      />

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm"
                      />
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Where are you looking?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <select
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm"
                            required
                          >
                            <option value="">Select City</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="pune">Pune</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="delhi">Delhi</option>
                            <option value="hyderabad">Hyderabad</option>
                            <option value="chennai">Chennai</option>
                          </select>
                          <input
                            type="text"
                            name="zipCode"
                            placeholder="Pin Code"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Property Type
                        </label>
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                          {[
                            { value: 'apartment', label: 'Apartment', icon: '🏢' },
                            { value: 'house', label: 'House', icon: '🏠' },
                            { value: 'villa', label: 'Villa', icon: '🏡' },
                            { value: 'penthouse', label: 'Penthouse', icon: '🏢' }
                          ].map((type) => (
                            <button
                              key={type.value}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, propertyType: type.value }))}
                              className={`p-3 rounded-lg border-2 transition-all duration-200 transform hover:scale-105 ${
                                formData.propertyType === type.value
                                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                                  : 'border-gray-200 hover:border-blue-300'
                              }`}
                            >
                              <div className="text-xl mb-2">{type.icon}</div>
                              <div className="font-semibold text-sm">{type.label}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm"
                          required
                        >
                          <option value="">Select Budget</option>
                          <option value="50-100">₹50L - ₹1Cr</option>
                          <option value="100-200">₹1Cr - ₹2Cr</option>
                          <option value="200-500">₹2Cr - ₹5Cr</option>
                          <option value="500+">₹5Cr+</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Property Size
                        </label>
                        <input
                          type="number"
                          name="minSize"
                          placeholder="Minimum Size (Sq Ft)"
                          value={formData.minSize}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Bedrooms
                          </label>
                          <select
                            name="beds"
                            value={formData.beds}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm"
                          >
                            <option value="">Select</option>
                            <option value="1">1 BHK</option>
                            <option value="2">2 BHK</option>
                            <option value="3">3 BHK</option>
                            <option value="4">4 BHK</option>
                            <option value="5+">5+ BHK</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Bathrooms
                          </label>
                          <select
                            name="baths"
                            value={formData.baths}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm"
                          >
                            <option value="">Select</option>
                            <option value="1">1 Bath</option>
                            <option value="2">2 Baths</option>
                            <option value="3">3 Baths</option>
                            <option value="4+">4+ Baths</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          I am a...
                        </label>
                        <select
                          name="information"
                          value={formData.information}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm"
                          required
                        >
                          <option value="">Select</option>
                          <option value="buyer">First-time Buyer</option>
                          <option value="investor">Property Investor</option>
                          <option value="seller">Property Seller</option>
                          <option value="agent">Real Estate Agent</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between mt-6">
                    {activeStep > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-4 py-2.5 border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 text-sm"
                      >
                        Previous
                      </button>
                    )}
                    <div className="flex-1"></div>
                    {activeStep < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 text-sm"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center text-sm"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          'Find My Dream Home'
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryRealEstateInquiry;