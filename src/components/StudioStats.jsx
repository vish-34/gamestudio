import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// A reusable sub-component for each statistic
const StatItem = ({ number, description }) => (
  <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-400/10">
    <span className="text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500 mb-2 block">
      {number}
    </span>
    <p className="text-gray-300 uppercase tracking-wide text-sm">
      {description}
    </p>
  </div>
);

// The main section component
export default function StudioStats() {
  return (
    <section className="py-24  text-white relative overflow-hidden">
      
      {/* Subtle Dot Pattern Background */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.04] -z-1"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '25px 25px',
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Studio Stats
          </h2>
          <p className="text-lg text-gray-400">
            A quick look at our journey, our team, and our accomplishments in the industry.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Stat 1 */}
          <StatItem number="30+" description="Shipped Titles" />
          
          {/* Stat 2 */}
          <StatItem number="15+" description="Years Working with AAA Studios" />

          {/* --- CTA Block (Replaces the image) --- */}
          <div className="group backdrop-blur-sm border border-zinc-700 p-8 rounded-xl shadow-lg 
                          flex flex-col justify-center items-center text-center 
                          transition-all duration-300 hover:bg-blue-300 hover:border-purple-500 cursor-pointer
                          md:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-bold text-white mb-3">
              Join Our Team
            </h3>
            <p className="text-gray-300 mb-6 group-hover:text-white">
              We're looking for passionate creators to build the future of gaming.
            </p>
            <span 
              className="flex items-center text-lg font-semibold text-blue-400 group-hover:text-white"
            >
              See Open Roles
              <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
          
          {/* Stat 3 */}
          <StatItem number="50+" description="Offices Around the World" />

          {/* Stat 4 */}
          <StatItem number="100+" description="Projects in Games, 3D, VR & AR" />

          {/* Stat 5 */}
          <StatItem number="1400+" description="Engineers, Designers, & Artists" />

        </div>
      </div>
    </section>
  );
}