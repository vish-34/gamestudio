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
  <div className="flex flex-col">
    {/* Image Box */}
    <div className="relative h-56 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
      {/* Card Image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover rounded-lg brightness-75"
      />
      
      {/* Number Box */}
      <div className="absolute top-4 right-4 bg-gray-900 bg-opacity-50 px-3 py-1 rounded">
        <span className="text-white font-mono text-sm font-bold">{number}</span>
      </div>
    </div>

    {/* Text Content */}
    <div>
      <h3 className="text-xl font-semibold uppercase mb-4 text-white">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <ChevronRightIcon className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Main Section Component
export default function Portfolio() {
  return (
    <section id='services' className="-mt-14 text-white py-24 relative max-w-7xl ml-[7em] ">
      <div className="container mx-auto px-6">
        
        {/* Title */}
        <FadeUpOnView>
        <div className="relative mb-20 w-max">
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wider -ml-10 text-white relative z-10">
            What We Do
          </h2>
        </div>
        </FadeUpOnView>

        

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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

      {/* Floating Icon */}
      {/* <div className="fixed bottom-6 left-6 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg z-50">
        <SparklesIcon className="w-7 h-7 text-white" />
      </div> */}

       {/*  animated divider line */}
      <motion.div
        className="absolute top-0 left-1/2 w-0.5 h-[8em] mt-[] ml-[30em] bg-white opacity-20 z-0"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ originY: 0 }} // <--- Animate from the top
      />

       {/*  animated divider line horizontal */}
      
            <motion.div
              className="absolute top-1/2 left-0 h-0.5 w-[45em] ml-[25em] -mt-[18em] bg-white opacity-20 z-0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ originX: 0 }} // Animate from the left
            />

    </section>
  );
}
