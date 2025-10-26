import React from "react";
import FadeUpOnView from "../../animations/FadeUpOnView";
import testingbanner from "../../assets/testing-banner.jpg"; // Replace with your Game Testing banner
import Header from "../Header";
import Footer from "../Footer";
import '../../index.css'; // contains .btn-neon-outline

export default function GameTesting() {
  return (
    <div>
      <Header />
      <div className="min-h-screen w-full bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-24 min-h-[90vh] flex items-center overflow-hidden">
          {/* Banner Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${testingbanner})` }}
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/75" />
          {/* Content */}
          <div className="relative z-10 container mx-auto px-6">
            <FadeUpOnView>
              <div className="text-left mb-20">
                <h2 className="text-5xl md:text-6xl ml-8 font-bold mb-6">
                  Game Testing
                </h2>
                <p className="text-lg text-gray-400 text-left ml-10 max-w-2xl mx-auto">
                  Our Game Testing team ensures your game is bug-free, balanced,
                  and optimized for performance. We use manual and automated
                  testing approaches to guarantee a smooth and engaging
                  experience for players across platforms.
                </p>
              </div>
            </FadeUpOnView>
          </div>
        </section>

        {/* Additional Info Section */}
        <p className="text-gray-300 text-lg max-w-4xl mt-20 mx-auto text-left">
          At GameEon Studios, our QA specialists rigorously test gameplay,
          mechanics, and system performance to catch issues before launch.
          We cover functionality, compatibility, performance, and user
          experience, ensuring your game meets the highest standards.
        </p>

        {/* Spacer */}
        <div className="h-20 bg-black" />
      </div>
      <Footer />
    </div>
  );
}