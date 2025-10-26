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
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home">
      <div className="relative w-full h-[90vh] md:h-screen overflow-hidden">

        {/* Background Slider */}
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover md:rounded-bl-[100px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: current === index ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Overlay Darkness */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Main Text Content */}
        <div className="relative z-10 flex flex-col justify-center h-full lg:-ml-[3.1em] px-6 md:px-0">

          <motion.h1
            className="text-white text-4xl md:text-6xl font-bold text-center md:text-left md:ml-[5%] lg:ml-[10%] relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span>MUMBAI GULLIES</span>

            {/* Vertical Bar only on desktop */}
            <div className="hidden md:block absolute h-14 w-1 bg-white -left-6 top-1/2 -translate-y-1/2"></div>
          </motion.h1>

          <motion.p
            className="mt-4 text-white text-lg md:text-xl text-center md:text-left md:ml-[10%] max-w-[700px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A game inspired by the amazing contrast of life in Mumbai city. <br />
            A city where the landscape changes every few meters.
          </motion.p>
        </div>

        {/* Divider Line Desktop only */}
        <motion.div
          className="hidden md:block absolute top-0 left-1/2 w-[1px] h-full bg-white opacity-20 z-0 -ml-[42em]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ originY: 0 }}
        />
      </div>
    </section>
  );
};

export default Hero;
