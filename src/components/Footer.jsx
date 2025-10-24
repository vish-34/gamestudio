
// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="py-16" style={{ backgroundColor: '#030106' }}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <a href="#" className="font-heading text-4xl font-bold text-white text-glow">
              GameEon
            </a>
            <p className="text-gray-400 mt-2">© 2025 GameEon Studio. All worlds reserved.</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 social-icon transition-all duration-300">
              <i data-feather="twitter" className="w-7 h-7"></i>
            </a>
            <a href="#" className="text-gray-400 social-icon transition-all duration-300">
              <i data-feather="instagram" className="w-7 h-7"></i>
            </a>
            <a href="#" className="text-gray-400 social-icon transition-all duration-300">
              <i data-feather="linkedin" className="w-7 h-7"></i>
            </a>
            <a href="#" className="text-gray-400 social-icon transition-all duration-300">
              <i data-feather="youtube" className="w-7 h-7"></i>
            </a>
            <a href="#" className="text-gray-400 social-icon transition-all duration-300">
              <i data-feather="send" className="w-7 h-7"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
