import { useState } from "react";

export default function Header  ({ isSticky })  {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Games', href: '#games' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Press', href: '#contact' },
  ];
  

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isSticky ? 'glassmorphic-sticky' : ''
      }`}
    >
      <nav className="container mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src="./gelogo.png" alt="" />

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 rounded-md btn-neon-outline">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <i data-feather={isMobileMenuOpen ? 'x' : 'menu'} className="text-white w-7 h-7"></i>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu (Dropdown) */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'} ${isSticky ? 'glassmorphic-sticky' : 'glassmorphic'}`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-200 hover:text-white text-lg"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mt-4 px-6 py-2 rounded-md btn-neon-outline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};