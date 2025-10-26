import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PaintBrushIcon,
  PencilSquareIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

import '../../index.css'; // contains .btn-neon-outline

import FadeUpOnView from "../../animations/FadeUpOnView";
import artdesignbanner from "../../assets/artdesign-banner.jpg";
import Header from "../Header";
import artdev1 from "../../assets/artdev1-scaled.jpg";
import artdev2 from "../../assets/artdev2-scaled.jpg";
import artdev3 from "../../assets/artdev3-scaled.jpg";
import artdev4 from "../../assets/artdev4-scaled.jpg";
import artdev7 from "../../assets/artdev7-scaled.jpg";
import artdev8 from "../../assets/artdev8-scaled.jpg";
import Footer from "../Footer"

const sliderImages = [
  { src: artdev1, alt: "art 1" },
  { src: artdev2, alt: "art 2" },
  { src: artdev3, alt: "art 3" },
  { src: artdev4, alt: "art 4" },
  { src: artdev7, alt: "art 5" },
  { src: artdev8, alt: "art 6" },
];

export default function ArtDesign() {
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
<Header isSticky={true} />
      <div className="min-h-screen w-full bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-24 min-h-[90vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${artdesignbanner})` }}
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative z-10 container mx-auto px-6">
            <FadeUpOnView>
              <div className="text-left mb-20">
                <h2 className="text-5xl md:text-6xl ml-8 font-bold mb-6">
                  Art & Design
                </h2>
                <p className="text-lg text-gray-400 text-left ml-10 max-w-2xl mx-auto">
                  We craft visually stunning assets and immersive designs that
                  elevate the player experience.
                </p>
              </div>
            </FadeUpOnView>
          </div>
        </section>

        {/* About Section */}
        <p className="text-gray-300 text-lg max-w-4xl mt-20 mx-auto text-left">
          GameEon Studios’ Art & Design team brings your game worlds to life
          with exceptional creativity and technical expertise. From character
          design to 3D modeling and UI/UX, our artists ensure every visual
          element is polished, immersive, and ready for production. Explore
          some of our standout art projects below.
        </p>

        <FadeUpOnView>
          <div className="relative mb-20 w-max mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wider mt-20 text-white relative z-10">
              Art Projects
            </h2>
          </div>
        </FadeUpOnView>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto mt-12">
          {/* Prev / Next buttons */}
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

          {/* Image with 16:9 aspect ratio */}
          <div className="overflow-hidden relative w-full aspect-[16/9] rounded-xl">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentIndex}
                src={sliderImages[currentIndex].src}
                alt={sliderImages[currentIndex].alt}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover rounded-xl"
              />
            </AnimatePresence>
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
              />
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div className="h-20 bg-black" />
      </div>
      <Footer />
    </div>
  );
}