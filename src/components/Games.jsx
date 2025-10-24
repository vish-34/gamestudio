// Games.jsx
import React from "react";

export default function Games() {
  return (
    <section id="games" className="py-24">
      <div className="container mx-auto  px-6  mb-16">
        <h2 className="font-heading text-5xl md:text-6xl text-white ml-10  font-bold">Our Worlds</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4 ml-10">
          Each project is a universe we've built from scratch, pushing the boundaries of imagination and technology.
        </p>
      </div>

      {/* Game Showcase 1: Mumbai Gullies */}
      <div
        className="relative min-h-screen flex  items-center justify-start parallax-bg"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(5, 2, 10, 0.9) 20%, rgba(5, 2, 10, 0.4)), url('https://placehold.co/1920x1080/c94b4b/fbc7d4?text=Mumbai+Gullies+Gameplay')",
        }}
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="glassmorphic p-8 md:p-12 reveal">
              <span className="font-heading text-sm uppercase tracking-widest text-neon-primary">Featured Title</span>
              <h3 className="font-heading text-4xl md:text-6xl text-white mt-4">Mumbai Gullies</h3>
              <p className="mt-6 text-gray-200">
                An open-world action-adventure game set in the sprawling, chaotic, and vibrant streets of Mumbai.
                Experience a story of ambition, crime, and redemption.
              </p>
              <div className="mt-8 space-x-4">
                <span className="border border-gray-400 text-gray-300 rounded-full px-4 py-1 text-sm">PC</span>
                <span className="border border-gray-400 text-gray-300 rounded-full px-4 py-1 text-sm">PS5</span>
                <span className="border border-gray-400 text-gray-300 rounded-full px-4 py-1 text-sm">Xbox Series X</span>
              </div>
              <a href="#" className="mt-10 inline-block px-8 py-3 rounded-md btn-neon-outline text-lg">
                Watch Trailer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Game Showcase 2: Cyber Runner 2088 */}
      <div
        className="relative min-h-screen flex items-center justify-end parallax-bg"
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(5, 2, 10, 0.9) 20%, rgba(5, 2, 10, 0.4)), url('https://placehold.co/1920x1080/2c3e50/fd746c?text=Cyber+Runner+2088')",
        }}
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="w-full md:w-1/2 lg:w-2/5 ml-auto">
            <div className="glassmorphic p-8 md:p-12 reveal text-right">
              <span className="font-heading text-sm uppercase tracking-widest" style={{ color: 'var(--neon-secondary)' }}>
                New Release
              </span>
              <h3 className="font-heading text-4xl md:text-6xl text-white mt-4">Cyber Runner 2088</h3>
              <p className="mt-6 text-gray-200">
                A fast-paced, high-octane FPS set in a dystopian future. Augment your abilities, outrun corporate security,
                and expose the truth.
              </p>
              <div className="mt-8 space-x-4">
                <span className="border border-gray-400 text-gray-300 rounded-full px-4 py-1 text-sm">PC</span>
                <span className="border border-gray-400 text-gray-300 rounded-full px-4 py-1 text-sm">VR</span>
              </div>
              <a
                href="#"
                className="mt-10 inline-block px-8 py-3 rounded-md btn-neon-outline text-lg"
                style={{ '--neon-primary': 'var(--neon-secondary)' }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Game Showcase 3: Aethel's Echo */}
      <div
        className="relative min-h-screen flex items-center justify-center parallax-bg"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5, 2, 10, 0.8), rgba(5, 2, 10, 0.6)), url('https://placehold.co/1920x1080/00467f/a5cc82?text=Aethel\'s+Echo+Concept')",
        }}
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="w-full md:w-1/2 lg:w-2/5 mx-auto">
            <div className="glassmorphic p-8 md:p-12 reveal text-center">
              <span className="font-heading text-sm uppercase tracking-widest text-neon-primary">In Development</span>
              <h3 className="font-heading text-4xl md:text-6xl text-white mt-4">Aethel's Echo</h3>
              <p className="mt-6 text-gray-200">
                A narrative-driven fantasy RPG where your choices echo through time. Unravel an ancient mystery to save a
                dying world.
              </p>
              <div className="mt-8 space-x-4">
                <span className="border border-gray-400 text-gray-300 rounded-full px-4 py-1 text-sm">PC</span>
                <span className="border border-gray-400 text-gray-300 rounded-full px-4 py-1 text-sm">Next-Gen</span>
              </div>
              <a href="#" className="mt-10 inline-block px-8 py-3 rounded-md btn-neon-outline text-lg">
                See Dev-Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
