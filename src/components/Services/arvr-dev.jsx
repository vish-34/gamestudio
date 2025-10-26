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
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
          {/* Banner Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${arvrbanner})` }}
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/75" />
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6">
            <FadeUpOnView>
              <div className="text-center sm:text-left mb-12 sm:mb-16 md:mb-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 sm:ml-4 md:ml-6 lg:ml-8">
                  AR & VR Development
                </h2>
                <p className="text-base sm:text-lg text-gray-400 text-center sm:text-left px-4 sm:px-0 sm:ml-6 md:ml-8 lg:ml-10 max-w-2xl mx-auto sm:mx-0 leading-relaxed">
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
        <div className="px-4 sm:px-6">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-4xl mt-12 sm:mt-16 md:mt-20 mx-auto text-center sm:text-left leading-relaxed">
            At GameEon Studios, our AR/VR developers combine 3D modeling,
            interactive design, and cutting-edge technology to produce next-level
            experiences. We ensure performance, usability, and immersion for
            games, training simulators, and virtual environments.
          </p>
        </div>

        {/* Features Section - Optional Enhancement */}
        <div className="px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20">
          <div className="container mx-auto max-w-6xl">
            <FadeUpOnView>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">
                Our AR/VR Capabilities
              </h3>
            </FadeUpOnView>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {/* Feature Card 1 */}
              <FadeUpOnView>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl">🥽</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                    Virtual Reality Games
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Fully immersive VR gaming experiences with intuitive controls and realistic environments.
                  </p>
                </div>
              </FadeUpOnView>

              {/* Feature Card 2 */}
              <FadeUpOnView>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl">📱</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                    Augmented Reality Apps
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Interactive AR applications that blend digital content with the real world seamlessly.
                  </p>
                </div>
              </FadeUpOnView>

              {/* Feature Card 3 */}
              <FadeUpOnView>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-600/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl">🎓</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                    Training Simulations
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Professional VR training solutions for education, healthcare, and enterprise applications.
                  </p>
                </div>
              </FadeUpOnView>
            </div>
          </div>
        </div>

        {/* Technologies Section - Optional Enhancement */}
        <div className="px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24">
          <div className="container mx-auto max-w-4xl">
            <FadeUpOnView>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">
                Technologies We Use
              </h3>
            </FadeUpOnView>

            <FadeUpOnView>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                {['Unity', 'Unreal Engine', 'ARKit', 'ARCore', 'Oculus SDK', 'WebXR'].map((tech) => (
                  <div
                    key={tech}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-sm sm:text-base text-gray-300 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </FadeUpOnView>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-12 sm:h-16 md:h-20 bg-black" />
      </div>
      <Footer />
    </div>
  );
}