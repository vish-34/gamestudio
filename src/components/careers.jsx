import React from "react";
import FadeUpOnView from "../animations/FadeUpOnView";
import careersBanner from "../assets/careers-banner.png"
import Header from "./Header";
import Footer from "./Footer";

const jobPostings = [
  {
    title: "Game Developer",
    location: "Remote / India",
    type: "Full-time",
    description:
      "We are looking for a skilled Game Developer with experience in Unity or Unreal Engine to join our team and work on exciting projects.",
  },
  {
    title: "3D Artist",
    location: "Remote / India",
    type: "Full-time",
    description:
      "Seeking a creative 3D Artist to design characters, environments, and assets for games and interactive experiences.",
  },
  {
    title: "QA Tester",
    location: "Remote / India",
    type: "Contract",
    description:
      "We need detail-oriented QA Testers to ensure games are bug-free and optimized for performance across platforms.",
  },
  {
    title: "AR/VR Developer",
    location: "Remote / India",
    type: "Full-time",
    description:
      "Join our AR/VR team to develop immersive experiences for games and applications using the latest technologies.",
  },
];

export default function Careers() {
  return (
    <div>
      <Header />
      <div className="min-h-screen w-full bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-24 min-h-[90vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${careersBanner})` }}
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative z-10 container mx-auto px-6">
            <FadeUpOnView>
              <div className="text-left mb-20">
                <h2 className="text-5xl md:text-6xl ml-8 font-bold mb-6">
                  Careers at GameEon
                </h2>
                <p className="text-lg text-gray-400 text-left ml-10 max-w-2xl mx-auto">
                  Join our team of passionate game developers, artists, and QA
                  specialists. Build innovative games, immersive experiences,
                  and cutting-edge technologies with us.
                </p>
              </div>
            </FadeUpOnView>
          </div>
        </section>

        {/* Job Postings Section */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <FadeUpOnView>
            <h3 className="text-4xl font-bold mb-10 text-white text-center">
              Open Positions
            </h3>
          </FadeUpOnView>
          <div className="grid md:grid-cols-2 gap-8">
            {jobPostings.map((job, idx) => (
              <FadeUpOnView key={idx}>
                <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-xl p-6
                  hover:scale-[1.02] transition-transform duration-300
                  hover:shadow-[0_0_20px_#00ffff]">
                  <h4 className="text-2xl font-semibold mb-2">{job.title}</h4>
                  <p className="text-gray-400 mb-1">
                    <span className="font-medium">Location:</span> {job.location}
                  </p>
                  <p className="text-gray-400 mb-3">
                    <span className="font-medium">Type:</span> {job.type}
                  </p>
                  <p className="text-gray-300">{job.description}</p>
                </div>
              </FadeUpOnView>
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div className="h-20 bg-black" />
      </div>
      <Footer />
    </div>
  );
}
