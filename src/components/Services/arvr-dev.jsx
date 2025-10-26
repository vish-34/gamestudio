import React from "react";
import FadeUpOnView from "../../animations/FadeUpOnView";
import arvrbanner from "../../assets/arvr-banner.jpg"; // Replace with your AR/VR banner
import Header from "../Header";
import Footer from "../Footer";
import '../../index.css'; // contains .btn-neon-outline

export default function ARVRDevelopment() {
  return (
    <div>
      <Header />
      <div className="min-h-screen w-full bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-24 min-h-[90vh] flex items-center overflow-hidden">
          {/* Banner Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${arvrbanner})` }}
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/75" />
          {/* Content */}
          <div className="relative z-10 container mx-auto px-6">
            <FadeUpOnView>
              <div className="text-left mb-20">
                <h2 className="text-5xl md:text-6xl ml-8 font-bold mb-6">
                  AR & VR Development
                </h2>
                <p className="text-lg text-gray-400 text-left ml-10 max-w-2xl mx-auto">
                  Our AR & VR development team creates immersive experiences
                  that bring games and applications to life. From realistic
                  simulations to interactive VR worlds, we leverage the latest
                  technologies to deliver high-quality and engaging experiences.
                </p>
              </div>
            </FadeUpOnView>
          </div>
        </section>

        {/* Additional Info Section */}
        <p className="text-gray-300 text-lg max-w-4xl mt-20 mx-auto text-left">
          At GameEon Studios, our AR/VR developers combine 3D modeling,
          interactive design, and cutting-edge technology to produce next-level
          experiences. We ensure performance, usability, and immersion for
          games, training simulators, and virtual environments.
        </p>

        {/* Spacer */}
        <div className="h-20 bg-black" />
      </div>
      <Footer />
    </div>
  );
}