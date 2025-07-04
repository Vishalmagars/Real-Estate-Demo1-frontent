import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Send,
  ArrowUp,
  Home,
  Building,
  User,
  MessageCircle
} from 'lucide-react';

function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = () => {
    if (email.trim()) {
      // Handle newsletter submission here
      console.log('Newsletter signup:', email);
      setEmail('');
      alert('Thank you for subscribing!');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Properties', path: '/properties', icon: Building },
    { name: 'About', path: '/about', icon: User },
    { name: 'Contact', path: '/contact', icon: MessageCircle },
  ];

  const services = [
    'Luxury Homes',
    'Commercial Properties',
    'Investment Properties',
    'Property Management',
    'Real Estate Consulting',
    'Market Analysis'
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Luxe Estates</h3>
                <p className="text-slate-300 text-sm">Premium Real Estate</p>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Your trusted partner in luxury real estate. We help you find the perfect property that matches your lifestyle and investment goals.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-4 h-4 text-slate-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="text-sm">info@luxeestates.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="text-sm">New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <li key={link.name}>
                    <a 
                      href={link.path} 
                      className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors group"
                    >
                      <IconComponent className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-slate-300 hover:text-white transition-colors block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Stay Updated</h4>
            <p className="text-slate-300 mb-6 text-sm">
              Get the latest property listings and market insights delivered to your inbox.
            </p>
            
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>
              <button
                onClick={handleNewsletterSubmit}
                className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="text-white font-medium mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-slate-400 text-sm">
              <span>© {new Date().getFullYear()} Luxe Estates. All rights reserved.</span>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Fixed Position */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800 transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}

export default Footer;