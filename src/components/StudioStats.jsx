import React, { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import FadeUpOnView from '../animations/FadeUpOnView';

// Animated Stat Item
const StatItem = ({ number, description }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = parseInt(number.replace(/\D/g, ""));
          const duration = 1000;
          const stepTime = Math.max(Math.floor(duration / end), 20);

          const timer = setInterval(() => {
            start += 1;
            setCount(start + (number.includes("+") ? "+" : ""));
            if (start >= end) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [number]);

  return (
    <div
      ref={ref}
      className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 p-6 sm:p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-400/10"
    >
      <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500 mb-2 block">
        {count}
      </span>
      <p className="text-gray-300 uppercase tracking-wide text-xs sm:text-sm">{description}</p>
    </div>
  );
};

// Main Section Component
export default function StudioStats() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 text-white relative overflow-hidden">
      {/* Background Dots */}
      <div
        className="absolute inset-0 w-full h-full opacity-[0.04] -z-1"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '25px 25px',
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Title */}
        <FadeUpOnView>
          <div className="mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto sm:mx-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 text-center sm:text-left sm:ml-8 md:ml-12 lg:ml-16">
              Studio Stats
            </h2>
            <p className="text-base sm:text-lg text-gray-400 text-center sm:text-left px-4 sm:px-0 sm:ml-8 md:ml-12 lg:ml-16">
              A quick look at our journey, our team, and our accomplishments in the industry.
            </p>
          </div>
        </FadeUpOnView>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto sm:ml-0 md:ml-8 lg:ml-20">
          <StatItem number="30+" description="Shipped Titles" />
          <StatItem number="15+" description="Years Working with AAA Studios" />

          {/* Join Our Team CTA */}
          <div className="group backdrop-blur-sm border border-zinc-700 p-6 sm:p-8 rounded-xl shadow-lg flex flex-col justify-center items-center text-center transition-all duration-300 hover:bg-blue-300 hover:border-purple-500 cursor-pointer sm:col-span-2 lg:col-span-1 order-last sm:order-none">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
              Join Our Team
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 group-hover:text-white">
              We're looking for passionate creators to build the future of gaming.
            </p>
            <span className="flex items-center text-base sm:text-lg font-semibold text-blue-400 group-hover:text-white">
              See Open Roles
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>

          <StatItem number="50+" description="Offices Around the World" />
          <StatItem number="100+" description="Projects in Games, 3D, VR & AR" />
          <StatItem number="1400+" description="Engineers, Designers, & Artists" />
        </div>
      </div>
    </section>
  );
}