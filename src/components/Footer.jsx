// Footer.jsx
import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-[#030106] text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Let's Connect</h4>
            <p className="text-gray-400 text-sm md:text-base mb-3">
              402, Samarpan Complex,<br />
              Next to Mirador Hotel,<br />
              Opposite Solitaire Corporate Park,<br />
              Chakala, Andheri East,<br />
              Mumbai - 400059
            </p>
            <p className="text-gray-400 text-sm md:text-base mb-1">
              <a href="https://wa.me/918976989251" className="hover:text-white transition">
                +91 89769 89251 (WhatsApp only)
              </a>
            </p>
            <p className="text-gray-400 text-sm md:text-base">
              <a href="mailto:hello@gameeon.in" className="hover:text-white transition">
                hello@gameeon.in
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Links</h4>
            <ul className="text-gray-400 text-sm md:text-base space-y-2">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/" className="hover:text-white transition">Team</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Services</h4>
            <ul className="text-gray-400 text-sm md:text-base space-y-2">
              <li><a href="/services/game-development" className="hover:text-white transition">Game Development</a></li>
              <li><a href="/services/art-design" className="hover:text-white transition">Art & Design</a></li>
              <li><a href="/services/ar-vr" className="hover:text-white transition">AR/VR Development</a></li>
              <li><a href="/services/game-testing" className="hover:text-white transition">Game Testing</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Social Media</h4>
            <div className="flex space-x-3 md:space-x-4 justify-center sm:justify-start">
              <SocialIcon 
                url="https://instagram.com" 
                fgColor="#fff" 
                bgColor="transparent" 
                style={{ height: 30, width: 30 }} 
                className="hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              />
              <SocialIcon 
                url="https://twitter.com" 
                fgColor="#fff" 
                bgColor="transparent" 
                style={{ height: 30, width: 30 }} 
                className="hover:scale-110 transition-transform duration-300"
                aria-label="Twitter"
              />
              <SocialIcon 
                url="https://linkedin.com" 
                fgColor="#fff" 
                bgColor="transparent" 
                style={{ height: 30, width: 30 }} 
                className="hover:scale-110 transition-transform duration-300"
                aria-label="LinkedIn"
              />
              <SocialIcon 
                url="https://youtube.com" 
                fgColor="#fff" 
                bgColor="transparent" 
                style={{ height: 30, width: 30 }} 
                className="hover:scale-110 transition-transform duration-300"
                aria-label="YouTube"
              />
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-4 md:pt-6 text-center text-gray-500 text-xs md:text-sm px-4">
          © 2025 GameEon Studios. Created with ❤️ by Genius Lynx
        </div>
      </div>
    </footer>
  );
}