import React from 'react';

// --- Client logo data ---
// Using official logo URLs where possible for best quality.
const clientLogos = [
  { 
    name: 'EA Sports', 
    // Using a clear SVG for EA
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/EA_Sports_logo_logotype.svg/1200px-EA_Sports_logo_logotype.svg.png' 
  },
  { 
    name: 'Epic Games', 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/1200px-Epic_Games_logo.svg.png' 
  },
  { 
    name: 'Warner Bros. Games', 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_Games_logo.svg/1200px-Warner_Bros_Games_logo.svg.png' 
  },
  { 
    name: 'Ubisoft', 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Ubisoft_logo.svg/1200px-Ubisoft_logo.svg.png' 
  },
  { 
    name: 'Xbox Game Studios', 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_Game_Studios.svg/1200px-Xbox_Game_Studios.svg.png' 
  },
  { 
    name: '2K Games', 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/2K_Games_logo.svg/1200px-2K_Games_logo.svg.png' 
  },
];

export default function Clients2() {
  return (
    // Section with the dark background
    <section className=" text-white py-24">
      <div className="container mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="relative mb-12">
          
          <div className="flex items-center">
            {/* Decorative Circle */}
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold ml-[3em] uppercase tracking-wider">
              Our Clients
            </h2>
          </div>
          
          {/* --- Horizontal Line with End Cap --- */}
          {/* This div creates the line. The child div is the small white square. */}
          <div className="relative border-t border-gray-700 mt-6">
            <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 bg-white"></div>
          </div>
        </div>

        {/* --- Logo Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 items-center pt-8">
          
          {clientLogos.map((client) => (
            <div 
              key={client.name} 
              className="flex justify-center" 
              title={client.name} // Adds a tooltip on hover
            >
              <img
                src={client.logoUrl}
                alt={`${client.name} Logo`}
                className="
                  h-14 lg:h-16 w-auto max-w-[200px] object-contain
                  filter grayscale brightness-0 invert 
                  opacity-80 transition-opacity duration-300 hover:opacity-100
                "
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}