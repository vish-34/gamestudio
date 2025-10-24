// Collabs.jsx
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Dummy collab data
const collabs = [
  {
    name: "Epic Games",
    img: "https://placehold.co/400x400/1a1a2e/00f2ea?text=Epic+Games",
  },
  {
    name: "Unity",
    img: "https://placehold.co/400x400/2a2a3e/ff0055?text=Unity",
  },
  {
    name: "NVIDIA",
    img: "https://placehold.co/400x400/3a3a4e/00ffcc?text=NVIDIA",
  },
  {
    name: "Valve",
    img: "https://placehold.co/400x400/4a4a5e/ffaa00?text=Valve",
  },
];

export default function Collabs() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set((e.clientX - innerWidth / 2) / innerWidth);
    mouseY.set((e.clientY - innerHeight / 2) / innerHeight);
  };

  return (
    <section
      id="collabs"
      className="relative py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Section Title */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-white tracking-wide">
          Our Epic Collaborations
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          We partner with industry leaders to push gaming boundaries. From AAA studios to tech giants, our collaborations redefine the experience.
        </p>
      </div>

      {/* Collab Grid */}
      <div className="relative z-10 flex flex-wrap justify-center gap-12 md:gap-20">
        {collabs.map((collab, index) => {
          // Parallax transforms
          const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
          const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
          const translateY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);
          return (
            <motion.div
              key={index}
              style={{ rotateX, rotateY, y: translateY }}
              className="relative w-72 h-72 rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-transform duration-500 hover:scale-105"
            >
              {/* Image */}
              <img
                src={collab.img}
                alt={collab.name}
                className="w-full h-full object-cover"
              />

              {/* Overlay Name */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3 text-white text-center font-semibold text-lg">
                {collab.name}
              </div>

              {/* Floating Glows */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-pink-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
            </motion.div>
          );
        })}
      </div>

      {/* Background abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-600/30 to-blue-400/30 rounded-full blur-3xl animate-slow-spin"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-pink-600/30 to-red-400/30 rounded-full blur-3xl animate-slow-spin animation-delay-2000"></div>
      </div>
    </section>
  );
}
