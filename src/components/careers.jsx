import React from "react";
import FadeUpOnView from "../animations/FadeUpOnView";
import careersBanner from "../assets/careers-banner.png"
import Header from "./Header";
import Footer from "./Footer";

const jobPostings = [
  { title: "Game Developer", location: "Remote / India", type: "Full-time", description: "We are looking for a skilled Game Developer with experience in Unity or Unreal Engine to join our team and work on exciting projects." },
  { title: "3D Artist", location: "Remote / India", type: "Full-time", description: "Seeking a creative 3D Artist to design characters, environments, and assets for games and interactive experiences." },
  { title: "QA Tester", location: "Remote / India", type: "Contract", description: "We need detail-oriented QA Testers to ensure games are bug-free and optimized for performance across platforms." },
  { title: "AR/VR Developer", location: "Remote / India", type: "Full-time", description: "Join our AR/VR team to develop immersive experiences for games and applications using the latest technologies." },
];

export default function Careers() {
  return (
    <div className="bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 min-h-[70vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${careersBanner})` }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12">
          <FadeUpOnView>
            <div className="text-center md:text-left mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                Careers at GameEon
              </h2>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
                Join our team of passionate game developers, artists, and QA
                specialists. Build innovative games, immersive experiences,
                and cutting-edge technologies with us.
              </p>
            </div>
          </FadeUpOnView>
        </div>
      </section>

      {/* Job Postings Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-12">
        <FadeUpOnView>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center">
            Open Positions
          </h3>
        </FadeUpOnView>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {jobPostings.map((job, idx) => (
            <FadeUpOnView key={idx}>
              <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-xl p-4 sm:p-6 md:p-6 hover:scale-[1.02] transition-transform duration-300 hover:shadow-[0_0_20px_#00ffff]">
                <h4 className="text-xl sm:text-2xl font-semibold mb-2">{job.title}</h4>
                <p className="text-gray-400 mb-1"><span className="font-medium">Location:</span> {job.location}</p>
                <p className="text-gray-400 mb-2"><span className="font-medium">Type:</span> {job.type}</p>
                <p className="text-gray-300 text-sm sm:text-base">{job.description}</p>
              </div>
            </FadeUpOnView>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
