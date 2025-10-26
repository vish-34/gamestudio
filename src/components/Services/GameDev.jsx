import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CodeBracketIcon,
  CubeIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Footer from "../Footer"
import FadeUpOnView from "../../animations/FadeUpOnView";
import gamedevbanner from "../../assets/gamedev-banner-scaled.webp";
import Header from "../Header";
import gamedev1 from "../../assets/gamedev1-scaled.jpg";
import gamedev2 from "../../assets/gamedev2-scaled.jpg";
import gamedev3 from "../../assets/gamedev3-scaled.jpg";
import gamedev4 from "../../assets/gamedev4-scaled.jpg";
import gamedev7 from "../../assets/gamedev7-scaled.jpg";
import gamedev8 from "../../assets/gamedev8-scaled.jpg";
import '../../index.css'; // contains .btn-neon-outline


const services = [
  {
    title: "Game Design & Prototyping",
    description:
      "We conceptualize worlds, characters, and mechanics that define the player experience — from sketches to playable prototypes.",
    icon: CubeIcon,
  },
  {
    title: "Development & Optimization",
    description:
      "Our developers bring ideas to life using Unity, Unreal, and WebGL, optimized for performance across devices.",
    icon: CodeBracketIcon,
  },
  {
    title: "Launch & Live Ops",
    description:
      "We handle deployment, updates, analytics, and continuous player engagement post-launch for lasting impact.",
    icon: RocketLaunchIcon,
  },
];

const sliderImages = [
  { src: gamedev1, alt: "Game 1" },
  { src: gamedev2, alt: "Game 2" },
  { src: gamedev3, alt: "Game 3" },
  { src: gamedev4, alt: "Game 4" },
  { src: gamedev7, alt: "Game 5" },
  { src: gamedev8, alt: "Game 6" },
];

export default function GameDev() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen w-full bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-24 min-h-[90vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${gamedevbanner})` }}
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative z-10 container mx-auto px-6">
            <FadeUpOnView>
              <div className="text-left mb-20">
                <h2 className="text-5xl md:text-6xl ml-8 font-bold mb-6">
                  Game Development
                </h2>
                <p className="text-lg text-gray-400 text-left ml-10 max-w-2xl mx-auto">
                  From concept to launch — our studio crafts immersive and visually
                  stunning gaming experiences.
                </p>
              </div>
            </FadeUpOnView>
          </div>
        </section>

        {/* Services Description */}
        <p className="text-gray-300 text-lg max-w-4xl mt-20 mx-auto text-left">
          GameEon Studios is a premier game development company with a proven
          track record of delivering high-quality games across multiple platforms.
          Our skilled developers specialize in mobile, PC, and console games,
          using the latest tools and technologies to create experiences that are
          engaging, immersive, and visually stunning. Below are some of the games
          developed by GameEon Studios, currently available on the Play Store.
        </p>

        <FadeUpOnView>
          <div className="relative mb-20 w-max mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wider mt-20 text-white relative z-10">
              Developed Games
            </h2>
          </div>
        </FadeUpOnView>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto mt-12">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-black rounded-full p-2"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-black rounded-full p-2"
          >
            &#10095;
          </button>

          <div className="overflow-hidden relative w-full h-64 md:h-96 rounded-xl">
  <motion.img
    key={currentIndex}
    src={sliderImages[currentIndex].src}
    alt={sliderImages[currentIndex].alt}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
    className="w-full h-full object-cover rounded-xl"
  />
</div>


          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {sliderImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div className="h-20 bg-black"></div>
      </div>
      <Footer />
    </div>
  );
}