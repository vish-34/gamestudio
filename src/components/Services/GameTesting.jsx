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
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
          {/* Banner Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${testingbanner})` }}
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/75" />
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6">
            <FadeUpOnView>
              <div className="text-center sm:text-left mb-12 sm:mb-16 md:mb-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 sm:ml-4 md:ml-6 lg:ml-8">
                  Game Testing
                </h2>
                <p className="text-base sm:text-lg text-gray-400 text-center sm:text-left px-4 sm:px-0 sm:ml-6 md:ml-8 lg:ml-10 max-w-2xl mx-auto sm:mx-0 leading-relaxed">
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
        <div className="px-4 sm:px-6">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-4xl mt-12 sm:mt-16 md:mt-20 mx-auto text-center sm:text-left leading-relaxed">
            At GameEon Studios, our QA specialists rigorously test gameplay,
            mechanics, and system performance to catch issues before launch.
            We cover functionality, compatibility, performance, and user
            experience, ensuring your game meets the highest standards.
          </p>
        </div>

        {/* Testing Services Section */}
        <div className="px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20">
          <div className="container mx-auto max-w-6xl">
            <FadeUpOnView>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">
                Our Testing Services
              </h3>
            </FadeUpOnView>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {/* Service Card 1 */}
              <FadeUpOnView>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl">🐛</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                    Functional Testing
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Comprehensive testing of game mechanics, features, and functionality to ensure everything works as intended.
                  </p>
                </div>
              </FadeUpOnView>

              {/* Service Card 2 */}
              <FadeUpOnView>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl">⚡</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                    Performance Testing
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Optimize frame rates, load times, and resource usage across different devices and platforms.
                  </p>
                </div>
              </FadeUpOnView>

              {/* Service Card 3 */}
              <FadeUpOnView>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-600/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl">📱</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                    Compatibility Testing
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Ensure seamless gameplay across multiple devices, operating systems, and hardware configurations.
                  </p>
                </div>
              </FadeUpOnView>

              {/* Service Card 4 */}
              <FadeUpOnView>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl">🎮</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                    Gameplay Testing
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Evaluate game balance, difficulty curves, progression systems, and overall player experience.
                  </p>
                </div>
              </FadeUpOnView>

              {/* Service Card 5 */}
              <FadeUpOnView>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-600/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl">🔒</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                    Security Testing
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Identify and fix security vulnerabilities to protect player data and prevent exploits.
                  </p>
                </div>
              </FadeUpOnView>

              {/* Service Card 6 */}
              <FadeUpOnView>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-600/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl">🤖</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                    Automated Testing
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Implement automated test scripts for regression testing and continuous integration workflows.
                  </p>
                </div>
              </FadeUpOnView>
            </div>
          </div>
        </div>

        {/* Testing Process Section */}
        <div className="px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24">
          <div className="container mx-auto max-w-4xl">
            <FadeUpOnView>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">
                Our Testing Process
              </h3>
            </FadeUpOnView>

            <FadeUpOnView>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { step: "1", title: "Test Planning", desc: "Define scope, objectives, and test strategies" },
                  { step: "2", title: "Test Design", desc: "Create detailed test cases and scenarios" },
                  { step: "3", title: "Test Execution", desc: "Perform manual and automated testing" },
                  { step: "4", title: "Bug Reporting", desc: "Document and prioritize issues found" },
                  { step: "5", title: "Verification", desc: "Retest fixes and validate solutions" },
                  { step: "6", title: "Final Sign-off", desc: "Ensure game meets quality standards" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-6 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/30 rounded-full flex items-center justify-center">
                      <span className="text-base sm:text-lg font-bold text-white">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
                    </div>
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