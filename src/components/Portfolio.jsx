import React from 'react';
import { 
  ChevronRightIcon, 
  PencilIcon, 
  CogIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline'; // For the main icons
import { SparklesIcon } from '@heroicons/react/24/solid'; // For the floating icon

// Data for the three service cards
const servicesData = [
  {
    number: "01",
    icon: <PencilIcon className="w-20 h-20 text-gray-500" />,
    title: "ART SERVICES",
    items: [
      "Concept art & illustration",
      "Animation",
      "Video production",
      "AR & VR Art",
      "3D Art services"
    ]
  },
  {
    number: "02",
    icon: <CogIcon className="w-20 h-20 text-gray-500" />,
    title: "GAME DEVELOPMENT",
    items: [
      "Game & graphics engineering",
      "Front & back end development",
      "QA Services",
      "Product management",
      "Level design"
    ]
  },
  {
    number: "03",
    icon: <GlobeAltIcon className="w-20 h-20 text-gray-500" />,
    title: "ONLINE SERVICES",
    items: [
      "3rd party SaaS integration",
      "Live operations",
      "Game support services",
      "Dev operations",
      "Analytics"
    ]
  }
];

// Reusable Card Component
const ServiceCard = ({ number, icon, title, items }) => (
  <div className="flex flex-col">
    {/* Image/Icon Box */}
    <div className="relative h-56 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
      
      {/* Faint Hex Pattern Overlay */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.03]" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'28\' height=\'49\' viewBox=\'0 0 28 49\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg id=\'hexagons\' fill=\'\%23ffffff\' fill-opacity=\'1\' fill-rule=\'nonzero\'%3E%3Cpath d=\'M13.99 9.25l13.99 8V33l-13.99 8L0 33V17.25zM13.99 0l13.99 8V24l-13.99 8L0 24V8z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      ></div>

      {/* Number Box */}
      <div className="absolute top-4 right-4 bg-gray-900 bg-opacity-50 px-3 py-1 rounded">
        <span className="text-white font-mono text-sm font-bold">{number}</span>
      </div>
      
      {/* Icon */}
      <div className="relative z-10">
        {icon}
      </div>
    </div>

    {/* Text Content */}
    <div>
      <h3 className="text-xl font-semibold uppercase mb-4 text-white">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <ChevronRightIcon className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Main Section Component
export default function Portfolio() {
  return (
    <section className="-mt-14 text-white py-24 relative max-w-7xl ml-[7em]">
      <div className="container mx-auto px-6">
        
        {/* Title */}
        <div className="relative mb-20 w-max">
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wider text-white relative z-10">
            What We Do
          </h2>
          {/* Decorative Circle */}
          {/* <div className="absolute top-2 -left-4 w-12 h-12 border-2  rounded-full z-0"></div> */}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              number={service.number}
              icon={service.icon}
              title={service.title}
              items={service.items}
            />
          ))}
        </div>
      </div>

      {/* Floating Icon (like in the screenshot) */}
      <div className="fixed bottom-6 left-6 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg z-50">
        {/* Replace with your actual logo or icon */}
        <SparklesIcon className="w-7 h-7 text-white" />
      </div>
    </section>
  );
}