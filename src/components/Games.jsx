// Games.jsx
import React from "react";
import FadeUpOnView from "../animations/FadeUpOnView";

const releasedGames = [
  {
    title: "Mumbai Gullies",
    tag: "Featured Title",
    description:
      "An open-world action-adventure game set in the sprawling, chaotic, and vibrant streets of Mumbai. Experience a story of ambition, crime, and redemption.",
    platforms: ["PC", "PS5", "Xbox Series X"],
    actionText: "Watch Trailer",
    bgImage:
      "https://placehold.co/1920x1080/c94b4b/fbc7d4?text=Mumbai+Gullies+Gameplay",
    gradient: "linear-gradient(to right, rgba(5, 2, 10, 0.9) 20%, rgba(5, 2, 10, 0.4))",
    align: "start",
    textAlign: "left",
  },
  {
    title: "Proving Grounds",
    tag: "New Release",
    description: "Proving Grounds Multiplayer is a fun real classic racing game with top 3D graphics and high quality, giving you ultimate visual enjoyment. Looking for a realistic car racing experience with actual cars. tracks. and some of the most beautiful graphics ever? Check out our new Proving Grounds Multiplayer Car racing game. Drive on real 3D tracks at wild top speed, fully control the vehicle, nitrogen drift for no limit, overtake on a curve, and experience the growth of the legendary driver!",
    platforms: ["PC", "VR"],
    actionText: "Learn More",
    bgImage:
      "https://placehold.co/1920x1080/2c3e50/fd746c?text=Proving+Grounds",
    gradient: "linear-gradient(to left, rgba(5, 2, 10, 0.9) 20%, rgba(5, 2, 10, 0.4))",
    align: "end",
    textAlign: "left",
  },
  {
    title: "Cricket CEO 2021",
    description:
      "For all you cricket fans out there, the intensity of Cricket CEO game is now available on your mobile!!! Welcome to the most authentic, complete, and surreal Cricket experience on Android - Cricket CEO. Ever wanted to be an cricket team franchise owner? Well, this is your chance! Cricket CEO Games is here - A free cricket manager game where you take control of the cricket nation club of your dreams. Cricket CEO is the best in a class cricket game.",
    platforms: ["Mobile"],
    actionText: "Pre-Order Now",
    bgImage:
      "https://placehold.co/1920x1080/ff00ff/ffffff?text=Cricket+CEO+2021",
    gradient: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5))",
    align: "start",
    textAlign: "left",
  },
  {
    title: "Ultimate Monster Truck",
    tag: "Beta",
    description:
      "3D stunt racing simulator is actually a sky stunt racing game for free with amazing monster trucks. Have you ever experienced extreme car stunts with real impossible tracks like a full-speed car racing game No, then this Ultimate Monster Truck: 3D stunt racing simulator is solely made for you. In this real stunts monster truck game, you'll be having multiple monster trucks you can perform tremendous fearless monster stunts with a lot of different monster trucks.",
    platforms: ["Mobile"],
    actionText: "Join Beta",
    bgImage:
      "https://placehold.co/1920x1080/222222/ff4444?text=Ultimate+Monster+Truck",
    gradient: "linear-gradient(to left, rgba(0,0,0,0.9), rgba(0,0,0,0.6))",
    align: "end",
    textAlign: "left",
  },
];

const inDevelopmentGames = [
  {
    title: "Aethel's Echo",
    tag: "In Development",
    description:
      "A narrative-driven fantasy RPG where your choices echo through time. Unravel an ancient mystery to save a dying world.",
    platforms: ["PC", "Next-Gen"],
    actionText: "See Dev-Blog",
    bgImage:
      "https://placehold.co/1920x1080/00467f/a5cc82?text=Aethel's+Echo+Concept",
    gradient: "linear-gradient(rgba(5, 2, 10, 0.8), rgba(5, 2, 10, 0.6))",
    align: "center",
    textAlign: "center",
  },
];

export default function Games() {
  const renderGame = (game) => (
    <div
      key={game.title}
      className={`relative min-h-screen flex items-center justify-${game.align} parallax-bg`}
      style={{
        backgroundImage: `${game.gradient}, url('${game.bgImage}')`,
      }}
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div
          className={`w-full md:w-1/2 lg:w-2/5 ${
            game.align === "end" ? "ml-auto" : ""
          } ${game.align === "center" ? "mx-auto" : ""}`}
        >
          <div className={`glassmorphic p-8 md:p-12 reveal text-${game.textAlign}`}>
            <span className="font-heading text-sm uppercase tracking-widest text-neon-primary">
              {game.tag}
            </span>
            <h3 className="font-heading text-4xl md:text-6xl text-white mt-4">{game.title}</h3>
            <p className="mt-6 text-gray-200">{game.description}</p>
            <div className="mt-8 space-x-4">
              {game.platforms.map((platform, i) => (
                <span
                  key={i}
                  className="border border-gray-400 text-gray-300 rounded-full px-4 py-1 text-sm"
                >
                  {platform}
                </span>
              ))}
            </div>
            <a
              href="#"
              className="mt-10 inline-block px-8 py-3 rounded-md btn-neon-outline text-lg"
              style={game.title === "Cyber Runner 2088" ? { "--neon-primary": "var(--neon-secondary)" } : {}}
            >
              {game.actionText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="games" className="py-24">
      <FadeUpOnView>
        <div className="container mx-auto px-6 mb-16">
          <h2 className="font-heading text-5xl md:text-6xl text-white ml-[1.1em] font-bold">
            Our Worlds
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4 ml-[4em]">
            Each project is a universe we've built from scratch, pushing the boundaries of imagination and technology.
          </p>
        </div>
      </FadeUpOnView>

      {/* Render released/upcoming games */}
      {releasedGames.map(renderGame)}

      {/* Render in-development games separately */}
      {inDevelopmentGames.map(renderGame)}
    </section>
  );
}