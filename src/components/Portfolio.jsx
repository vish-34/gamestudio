import React from 'react';
import { ChevronRightIcon, SparklesIcon } from '@heroicons/react/24/outline'; 
import vrdev from "../assets/vr-dev-1.jpg";
import artdev from "../assets/art-dev4.webp";
import gamedev4 from "../assets/game-dev-4prefered.jpg"
import { motion } from 'framer-motion';
import FadeUpOnView from '../animations/FadeUpOnView';

// Data for the three service cards
const servicesData = [
  {
    number: "01",
    image: artdev,
    title: "ART SERVICES",
    items: [
      "Concept art & illustration",
      "Animation",
      "Video production",
      "AR & VR Art",
      "3D Art services",
      "2D Art services"
    ]
  },
  {
    number: "02",
    image: gamedev4,
    title: "GAME DEVELOPMENT",
    items: [
      "Mobile & PC game development",
      "Frontend & backend integration",
      "Level & gameplay design",
      "Quality assurance & testing",
      "Live operations & updates"
    ]
  },
  {
    number: "03",
    image: vrdev,
    title: "AR & VR SOLUTIONS",
    items: [
      "Immersive AR experiences",
      "Virtual reality environments",
      "SaaS & platform integration",
      "Interactive 3D simulations",
      "Analytics & performance optimization"
    ]
  }
];

// Reusable Card Component
const ServiceCard = ({ number, image, title, items }) => (
  <motion.div 
    className="flex flex-col"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    {/* Image Box */}
    <div className="relative h-48 sm:h-52 md:h-56 rounded-lg flex items-center justify-center mb-4 sm:mb-6 overflow-hidden group">
      {/* Card Image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover rounded-lg brightness-75 transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Number Box */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gray-900 bg-opacity-50 px-2.5 py-1 sm:px-3 sm:py-1 rounded backdrop-blur-sm">
        <span className="text-white font-mono text-xs sm:text-sm font-bold">{number}</span>
      </div>
    </div>

    {/* Text Content */}
    <div>
      <h3 className="text-lg sm:text-xl font-semibold uppercase mb-3 sm:mb-4 text-white">
        {title}
      </h3>
      <ul className="space-y-2 sm:space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

// Main Section Component
export default function Portfolio() {
  return (
    <section 
      id='services' 
      className="text-white lg:-ml-[7em] py-12 sm:py-16 md:py-20 lg:py-24 relative w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl lg:ml-auto lg:mr-0 lg:pr-12">
        
        {/* Title */}
        <FadeUpOnView>
          <div className="relative mb-10 sm:mb-14 md:mb-16 lg:mb-20 w-full sm:w-max">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white relative z-10 text-center sm:text-left sm:-ml-10">
              What We Do
            </h2>
          </div>
        </FadeUpOnView>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              number={service.number}
              image={service.image}
              title={service.title}
              items={service.items}
            />
          ))}
        </div>
      </div>

      {/* Animated divider lines - hidden on mobile, visible on large screens */}
      <motion.div
        className="hidden lg:block absolute top-0 left-1/2 w-0.5 h-[8em] ml-[30em] bg-white opacity-20 z-0"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ originY: 0 }}
      />

      <motion.div
        className="hidden lg:block absolute top-1/2 left-0 h-0.5 w-[35em] ml-[42.5em] -mt-[18em] bg-white opacity-20 z-0"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ originX: 0 }}
      />
    </section>
  );
}