// CollabSection.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeUpOnView from "../animations/FadeUpOnView";

const collaborations = [
  {
    name: "Aether War",
    partner: "In collaboration with Unreal Studios",
    image:
      "bg1.jpg",
  },
  {
    name: "Cyber Drift",
    partner: "In collaboration with Neon Labs",
    image:
      "bg2.jpg",
  },
  {
    name: "Shadow Core",
    partner: "In collaboration with Arcane Interactive",
    image:
      "bg3.jpg",
  },
];

export default function Collabs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Motion transforms for hero card
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.4]);
  const x = useTransform(scrollYProgress, [0, 0.3], ["0%", "-110%"]);
  const rotateY = useTransform(scrollYProgress, [0, 0.3], ["0deg", "-15deg"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], ["0rem", "1.5rem"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative min-h-[350vh] bg-[#050510] overflow-hidden text-white"
    >

      {/* Background energy wave layer */}
      <motion.div
        style={{ opacity: backgroundOpacity }}
        className="absolute inset-0  bg-gradient-to-b from-blue-900/40 via-transparent to-black/90 blur-3xl"
      />


      {/* Hero Fullscreen Image */}
      <motion.div
        style={{
          scale,
          x,
          rotateY,
          borderRadius,
          transformStyle: "preserve-3d",
        }}
        className="sticky top-0 w-full h-screen overflow-hidden"
      >
        <img
          src={collaborations[0].image}
          alt="Collaboration Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-6xl md:text-7xl font-extrabold tracking-wider"
          >
            {collaborations[0].name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-300 text-xl mt-4"
          >
            {collaborations[0].partner}
          </motion.p>
        </div>
      </motion.div>

      {/* Layered Cards Section */}
      <div className="absolute left-[55%] object-cover top-0 w-[40%] h-full flex flex-col justify-center gap-40">
        {collaborations.slice(1).map((collab, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 150, scale: 1, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
            transition={{
              duration: 1,
              delay: i * 0,
              ease: [0.6, 0.01, 0.05, 0.95],
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative w-full h-[60vh]  rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:scale-105 hover:rotate-1 transition-all duration-700"
          >
            <motion.img
              src={collab.image}
              alt={collab.name}
              className="w-full h-auto object-cover"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-4xl font-bold drop-shadow-lg">{collab.name}</h3>
              <p className="text-gray-300 text-lg">{collab.partner}</p>
            </div>

          </motion.div>
        ))}


        {/*  animated divider line horizontal */}

        <motion.div
          className="absolute top-1/2 left-0 h-0.5 w-[44em] -ml-[45em] -mt-[20em] bg-white opacity-20 z-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          style={{ originX: 0 }} // Animate from the left
        />


        <motion.div
          className="absolute top-1/2 left-0 h-0.5 w-[44em] -ml-[45em] mt-[20em] bg-white opacity-20 z-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
          style={{ originX: 0 }} // Animate from the left
        />


      </div>



      {/* Ambient floating lights for cinematic feel */}
      <motion.div
        animate={{
          x: ["0%", "20%", "-20%", "0%"],
          y: ["0%", "-10%", "10%", "0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[25rem] h-[25rem] bg-blue-500/10 blur-[120px] rounded-full -top-40 left-[20%]"
      />
      <motion.div
        animate={{
          x: ["0%", "-10%", "15%", "0%"],
          y: ["0%", "15%", "-10%", "0%"],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[30rem] h-[30rem] bg-purple-500/10 blur-[130px] rounded-full bottom-0 right-[10%]"
      />

      <motion.div
        className="relative h-[25em] w-full mt-[90em] overflow-hidden"
        style={{
          clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
          background:
            "linear-gradient(135deg, #0a0a1a 0%, #1b0033 40%, #000000 100%)",
        }}
      >
        {/* Floating glow background */}
        <motion.div
          animate={{
            x: ["0%", "15%", "-10%", "0%"],
            y: ["0%", "-10%", "10%", "0%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[40rem] h-[40rem] bg-blue-500/20 blur-[150px] rounded-full -top-40 left-[30%]"
        />

        {/* Animated Quote */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-8"
        >
          <motion.h2
            animate={{
              textShadow: [
                "0 0 10px #ffffff",
                "0 0 20px #8a2be2",
                "0 0 40px #8a2be2",
                "0 0 10px #ffffff",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            className="text-5xl md:text-6xl font-extrabold tracking-widest uppercase"
          >
            “We Don’t Just Play Games — We Create Worlds.”
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-xl text-gray-300 tracking-wide"
          >
            — Beyond Pixels, Beyond Imagination
          </motion.p>
        </motion.div>

        {/* Subtle line pulse effect */}
        <motion.div
          animate={{ scaleX: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500"
        />
      </motion.div>




    </section>
  );
}
