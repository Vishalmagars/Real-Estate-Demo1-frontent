import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest('#mobile-menu') &&
        !event.target.closest('#menu-button')
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'propertepage', path: '/propertepage' },
  ];

  return (
    <>
      {/* Top propertepage Bar */}
      <div className="bg-slate-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            {/* propertepage Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@luxeestates.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo with Agent Photo */}
            <a
              href="/"
              className="flex items-center space-x-4 text-gray-900 hover:text-slate-700 transition group"
            >
              {/* Agent Photo */}
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center overflow-hidden ring-2 ring-slate-100 group-hover:ring-slate-200 transition-all">
                  <img
                    src="https://i.ibb.co/YmfKWZW/hero1.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>

              {/* Brand Text */}
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-bold tracking-tight text-slate-900">
                  Vishal Magar
                </span>
                <span className="text-xs text-slate-500 -mt-1">Verified Real Estate</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-slate-700 hover:text-slate-900 text-sm lg:text-base font-medium transition-all px-4 py-2 rounded-lg hover:bg-slate-50"
                >
                  {link.name}
                </a>
              ))}

              {/* CTA Button */}
              <div className="ml-4 pl-4 border-l border-slate-200">
                <a
                  href="/about"
                  className="bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                id="menu-button"
                className="p-2 rounded-lg hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-slate-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-slate-800" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-800" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Mobile Header */}
        <div className="bg-slate-900 text-white p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div>
              <div className="font-bold">Luxe Estates</div>
              <div className="text-white/70 text-sm">Premium Real Estate</div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="pt-6 px-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-800 hover:text-slate-900 text-base font-medium px-4 py-3 rounded-lg hover:bg-slate-50 transition"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-4 border-t border-slate-200 mt-6">
            <a
              href="/propertepage"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-slate-900 text-white text-center px-4 py-3 rounded-lg font-medium hover:bg-slate-800 transition"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Mobile propertepage Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-slate-50 border-t border-slate-200">
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@luxeestates.com</span>
            </div>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-pink-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Header;