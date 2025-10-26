import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PaintBrushIcon,
  PencilSquareIcon,
  ComputerDesktopIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
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

  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div>
      <Header isSticky={true} />
      <div className="min-h-screen w-full bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${artdesignbanner})` }}
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6">
            <FadeUpOnView>
              <div className="text-center sm:text-left mb-12 sm:mb-16 md:mb-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 sm:ml-4 md:ml-6 lg:ml-8">
                  Art & Design
                </h2>
                <p className="text-base sm:text-lg text-gray-400 text-center sm:text-left px-4 sm:px-0 sm:ml-6 md:ml-8 lg:ml-10 max-w-2xl mx-auto sm:mx-0">
                  We craft visually stunning assets and immersive designs that
                  elevate the player experience.
                </p>
              </div>
            </FadeUpOnView>
          </div>
        </section>

        {/* About Section */}
        <div className="px-4 sm:px-6">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-4xl mt-12 sm:mt-16 md:mt-20 mx-auto text-center sm:text-left leading-relaxed">
            GameEon Studios' Art & Design team brings your game worlds to life
            with exceptional creativity and technical expertise. From character
            design to 3D modeling and UI/UX, our artists ensure every visual
            element is polished, immersive, and ready for production. Explore
            some of our standout art projects below.
          </p>
        </div>

        {/* Section Title */}
        <FadeUpOnView>
          <div className="relative mb-12 sm:mb-16 md:mb-20 w-full sm:w-max mx-auto px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mt-12 sm:mt-16 md:mt-20 text-white relative z-10 text-center">
              Art Projects
            </h2>
          </div>
        </FadeUpOnView>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6 lg:px-8">
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="hidden md:flex absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 lg:p-3 transition-all hover:scale-110 active:scale-95"
          >
            <ChevronLeftIcon className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="hidden md:flex absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 lg:p-3 transition-all hover:scale-110 active:scale-95"
          >
            <ChevronRightIcon className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Slider Container with Touch Support */}
          <div 
            className="overflow-hidden relative w-full aspect-[16/9] rounded-lg sm:rounded-xl"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={sliderImages[currentIndex].src}
                alt={sliderImages[currentIndex].alt}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover rounded-lg sm:rounded-xl"
              />
            </AnimatePresence>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center mt-4 sm:mt-5 md:mt-6 space-x-2">
            {sliderImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? "bg-white w-6 sm:w-8 md:w-10" 
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          <p className="md:hidden text-center text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4">
            Swipe left or right to navigate
          </p>
        </div>

        {/* Spacer */}
        <div className="h-12 sm:h-16 md:h-20 bg-black" />
      </div>
      <Footer />
    </div>
  );
}