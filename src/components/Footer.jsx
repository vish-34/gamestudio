// Footer.jsx
import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="py-16 bg-[#030106] text-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-12">

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Let's Connect</h4>
            <p className="text-gray-400 mb-1">
              402, Samarpan Complex,<br />
              Next to Mirador Hotel,<br />
              Opposite Solitaire Corporate Park,<br />
              Chakala, Andheri East,<br />
              Mumbai - 400059
            </p>
            <p className="text-gray-400 mb-1">+91 89769 89251 (WhatsApp only)</p>
            <p className="text-gray-400">hello@gameeon.in</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/" className="hover:text-white transition">Team</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/services/game-development" className="hover:text-white transition">Game Development</a></li>
              <li><a href="/services/art-design" className="hover:text-white transition">Art & Design</a></li>
              <li><a href="/services/ar-vr" className="hover:text-white transition">AR/VR Development</a></li>
              <li><a href="/services/game-testing" className="hover:text-white transition">Game Testing</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Social Media</h4>
            <div className="flex space-x-4">
              <SocialIcon 
                url="https://instagram.com" 
                fgColor="#fff" 
                bgColor="transparent" 
                style={{ height: 30, width: 30 }} 
                className="hover:scale-110 transition-transform duration-300"
              />
              <SocialIcon 
                url="https://twitter.com" 
                fgColor="#fff" 
                bgColor="transparent" 
                style={{ height: 30, width: 30 }} 
                className="hover:scale-110 transition-transform duration-300"
              />
              <SocialIcon 
                url="https://linkedin.com" 
                fgColor="#fff" 
                bgColor="transparent" 
                style={{ height: 30, width: 30 }} 
                className="hover:scale-110 transition-transform duration-300"
              />
              <SocialIcon 
                url="https://youtube.com" 
                fgColor="#fff" 
                bgColor="transparent" 
                style={{ height: 30, width: 30 }} 
                className="hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          © 2025 GameEon Studios. Created with ❤️ by Genius Lynx
        </div>
      </div>
    </footer>
  );
}
