import React from 'react';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Background Image */}
            <img
                src="./hero_bg.jpg"
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover rounded-bl-[100px]"

            />

            {/* Optional overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Overlay text */}
            <div className="relative z-10 flex top-[20em] -left-[25em]  justify-center h-full">
                <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
                    <span>MUMBAI GULLIES</span>
                    <div className='h-14 w-1 bg-white -mt-[58px] -ml-2'></div>
                </h1>
            </div>
            {/* <motion.div
                className="absolute top-0 left-1/2 w-0.5  -ml-[42em] bg-white opacity-20 z-0"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            /> */}

        </div>
    );
};

export default Hero;
