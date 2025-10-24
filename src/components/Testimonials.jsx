import React, { useState, useEffect, useRef } from "react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef(null);

  const slides = [
    { img: "https://placehold.co/100x100/ffffff/000000?text=P", quote: "GameEon's attention to detail is just insane. Playing Mumbai Gullies felt like I was actually back home. A masterpiece.", name: "@MumbaiGamer91", title: "Player" },
    { img: "https://placehold.co/100x100/ffffff/000000?text=A", quote: "Working with the GameEon team was a dream. They delivered a cinematic trailer that exceeded all our expectations.", name: "Anna Chen", title: "Marketing Director, XYZ Publishing" },
    { img: "https://placehold.co/100x100/ffffff/000000?text=R", quote: "The level of technical artistry in their asset pack saved us months of development. Top-tier quality.", name: "Ravi Patel", title: "Lead Developer, Indie Studio" },
  ];

  const slideCount = slides.length;

  // Function to show a specific slide
  const showSlide = (index) => {
    let newIndex = index;
    if (index < 0) newIndex = slideCount - 1;
    if (index >= slideCount) newIndex = 0;

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
    }
    setCurrentSlide(newIndex);
  };

  // Auto-play carousel
  useEffect(() => {
    const slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentSlide, slideCount]);

  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl text-white reveal">From Our Partners</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4 reveal reveal-delay-100">
            Don't just take our word for it. Hear from the players and partners who've stepped into our worlds.
          </p>
        </div>

        {/* Carousel Container */}
        <div id="carousel-container" className="relative max-w-4xl mx-auto reveal">
          <div className="overflow-hidden">
            <div className="carousel-track" ref={trackRef}>
              {slides.map((slide, index) => (
                <div key={index} className="carousel-slide p-2">
                  <div className="glassmorphic p-8 md:p-12 text-center">
                    <img
                      src={slide.img}
                      alt={slide.name}
                      className="w-24 h-24 rounded-full mx-auto border-4 border-neon-primary object-cover"
                    />
                    <p className="text-xl md:text-2xl text-white italic mt-8">
                      "{slide.quote}"
                    </p>
                    <h5 className="font-heading text-lg text-neon-primary mt-8">{slide.name}</h5>
                    <p className="text-gray-400">{slide.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            id="prev-slide"
            onClick={() => showSlide(currentSlide - 1)}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full glassmorphic text-white hover:text-neon-primary transition-all"
          >
            <i data-feather="arrow-left" className="w-6 h-6"></i>
          </button>
          <button
            id="next-slide"
            onClick={() => showSlide(currentSlide + 1)}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full glassmorphic text-white hover:text-neon-primary transition-all"
          >
            <i data-feather="arrow-right" className="w-6 h-6"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
