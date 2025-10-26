import React from 'react';
import { motion } from "framer-motion";
import appCentralLogo from "../assets/appcentral-logo.jpg";
import applandLogo from "../assets/appland-logo.png";
import crazyLabsLogo from "../assets/crazylabs-logo.png";
import gameloftLogo from "../assets/gameloft-logo.png";
import gameZopLogo from "../assets/GameZop-logo.png";
import gamezyLogo1 from "../assets/Gamezy-logo.webp";
import glanceLogo from "../assets/glance-logo.jpg";
import jioGamesLogo from "../assets/jio-games.jpg";
import mooneeLogo from "../assets/Moonee-logo.png";
import sayolloLogo from "../assets/Sayollo-logo.jpg";
import talkingPixelsLogo from "../assets/talking-pixels.jpg";
import winzoLogo from "../assets/Winzo-logo.jpg";

const clientLogos = [
  { name: 'AppCentral', logoUrl: appCentralLogo },
  { name: 'Appland', logoUrl: applandLogo },
  { name: 'CrazyLabs', logoUrl: crazyLabsLogo },
  { name: 'Gameloft', logoUrl: gameloftLogo },
  { name: 'GameZop', logoUrl: gameZopLogo },
  { name: 'Gamezy', logoUrl: gamezyLogo1 },
  { name: 'Glance', logoUrl: glanceLogo },
  { name: 'Jio Games', logoUrl: jioGamesLogo },
  { name: 'Moonee', logoUrl: mooneeLogo },
  { name: 'Sayollo', logoUrl: sayolloLogo },
  { name: 'Talking Pixels', logoUrl: talkingPixelsLogo },
  { name: 'Winzo', logoUrl: winzoLogo },
];

export default function Clients2() {
  return (
    <section className="text-white py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="relative mb-12">
          <div className="flex items-center">
            <h2 className="text-4xl md:text-5xl font-bold ml-[1.5em] uppercase tracking-wider">
              Our Clients
            </h2>
          </div>
          <div className="relative border-t border-gray-700 mt-6">
            <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 bg-white"></div>
          </div>
        </div>

        {/* Logo Grid with Slide-Up Animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 max-w-10xl ml-[2em] justify-center gap-y-16 items-center pt-8">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              className="flex justify-center"
              title={client.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <img
                src={client.logoUrl}
                alt={`${client.name} Logo`}
                className="
                  h-14 lg:h-16 w-auto max-w-[200px] object-contain
                  filter grayscale invert 
                  opacity-80 transition-opacity duration-300 hover:opacity-100 hover:cursor-pointer
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
