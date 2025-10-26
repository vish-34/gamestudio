import React from 'react'
import { motion } from "framer-motion";
import FadeUpOnView from '../animations/FadeUpOnView';

const Whatwedo = () => {
  const logos = [
    { name: "Xbox", src: "./Xbox.png" },
    { name: "PS5", src: "./ps5.png" },
    { name: "Mobile", src: "./android.png" },
    { name: "Nintendo", src: "./nintendo.png" },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center lg:ml-[50em] lg:mt-[10em] lg:mb-[10em]">
      
      {/* Text Box */}
      <div className="lg:w-[40em] lg:h-[20em] w-[20em] h-[10em] ml-[0.1em] mt-10 bg-white/20 flex items-center justify-center">
        <h1 className="text-white text-center text-xl lg:text-3xl">
          <span>We create games with</span><br />
          <span className="font-bold">AR/VR, testing and Art & Design</span>
        </h1>
      </div>

      {/* Logo Row */}
      <FadeUpOnView>
      <div className="lg:overflow-x-auto py-4  lg:-ml-[80.5em] lg:mt-[5em] mt-6">
        <div className="grid grid-cols-2 lg:flex  gap-2 px-4 justify-center lg:justify-start">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex-none w-32 h-32 bg-zinc-900 flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img src={logo.src} alt={logo.name} className="max-h-16" />
            </div>
          ))}
        </div>
      </div>
      </FadeUpOnView>

      {/* Animated Divider Lines (Desktop only) */}
      <motion.div
        className="absolute top-0 left-1/2 w-0.5 h-[47em] mt-[20.8em] -ml-[42.3em] bg-white opacity-20 z-0 hidden lg:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ originY: 0 }}
      />

      <motion.div
        className="absolute top-0 left-1/2 w-0.5 h-[50em] mt-[81.5em] ml-[28em] bg-white opacity-20 z-0 hidden lg:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ originY: 0 }}
      />

      <motion.div
        className="absolute top-1/2 left-0 h-0.5 w-[44.5em] ml-[5.35em] mt-[43.2em] bg-white opacity-20 z-0 hidden lg:block"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ originX: 0 }}
      />
    </div>
  )
}

export default Whatwedo
