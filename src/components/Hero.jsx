import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import slider1 from "../assets/slider1.jpg";
import g1 from "../assets/g1-1.png";
import g3 from "../assets/g3.png";

const Hero = () => {
  const images = [slider1, g1, g3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-bl-[100px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: current === index ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Overlay for text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Overlay text */}
        <div className="relative z-10 flex flex-col items-center justify-center -left-[25em] h-full text-center">
          <motion.h1
            className="text-white text-4xl md:text-6xl font-bold relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <span>MUMBAI GULLIES</span>
            <div className="absolute h-14 w-1 bg-white left-0 top-1/2 -translate-y-1/2 -translate-x-4"></div>
          </motion.h1>

          <motion.p
            className="mt-4 text-white text-lg md:text-xl text-left ml-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            A game inspired by the amazing contrast of life in Mumbai city. <br /> 
            A city where the landscape changes every few meters
          </motion.p>
        </div>

        {/* Animated divider line */}
        <motion.div
          className="absolute top-0 left-1/2 w-0.5 h-[50em] -ml-[42em] bg-white opacity-20 z-0"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeOut" , delay: 5000}}
          style={{ originY: 0 }} // animate from top
        />
      </div>
    </section>
  );
};

export default Hero;
