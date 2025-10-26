import React from 'react'
import { motion } from "framer-motion";
import FadeUpOnView from '../animations/FadeUpOnView';


const Whatwedo = () => {

  const logos = [
    { 
      name: "Xbox", 
      src: "./Xbox.png" 
    },
    { 
      name: "PS5", 
      src: "./ps5.png" 
    },
    { 
      name: "Mobile", 
      src: "./android.png" 
    },
    { 
      name: "Nintendo", 
      src: "./nintendo.png" 
    },
  ];

  return (
    <div className=' flex items-center ml-[50em] mt-[10em] mb-[10em]'>
      <div className='w-[40em] h-[20em] mt-10 bg-white/20 flex items-center justify-center'>
        <h1 className='text-white items-center text-center text-3xl'>
          <span className=''>We create games with</span><br />
          <span className='font-bold'>AR/VR, testing and Art & Design</span>
        </h1>
      </div>

      {/* logo  */}
      <FadeUpOnView>
      <div className="overflow-x-auto py-4 -ml-[80.5em] mt-[5em]">
        <div className="flex gap-4 px-4">
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

      {/*  animated divider line */}
      <motion.div
        className="absolute top-0 left-1/2 w-0.5 h-[47em] mt-[20.8em] -ml-[42.3em] bg-white opacity-20 z-0"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ originY: 0 }} // <--- Animate from the top
      />

      <motion.div
        className="absolute top-0 left-1/2 w-0.5 h-[50em] mt-[81.5em] ml-[28em] bg-white opacity-20 z-0"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ originY: 0 }} // <--- Animate from the top
      />

      {/*  animated divider line horizontal */}

      <motion.div
        className="absolute top-1/2 left-0 h-0.5 w-[44.5em] ml-[5.35em] mt-[43.2em] bg-white opacity-20 z-0"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ originX: 0 }} // Animate from the left
      />
    </div>
  )
}

export default Whatwedo