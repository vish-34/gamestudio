import React, { useState, useEffect, useRef } from "react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef(null);

  const slides = [
    { img: "https://placehold.co/100x100/ffffff/000000?text=A", quote: "It was great working with GameEon Studios on games for our gaming application. We truly appreciate the team's efforts and their commitment to the project.", name:"Amit Grover", title: "Vice President Marketing (GameSkraft)" },
{
  img: "https://placehold.co/100x100/ffffff/000000?text=M",
  quote: "JioGames is thrilled to host GameEon Studios’ games. Their casual games, like Cricket Play 2021 and Crashy Car Racing, are engaging and fun, and gamers can’t get enough of them. We look forward to continuing this partnership.",
  name: "Mansi Dutta",
  title: "Partner and Strategic Alliances Manager, Jio Games"
},
    { img: "https://placehold.co/100x100/ffffff/000000?text=S", quote: "We recently worked with GameEon Studios on a project to develop a new mobile game. I was very impressed with their work. They were professional, efficient, and creative. They listened to our needs and delivered a product that exceeded our expectations. I would highly recommend GameEon Studios to anyone looking for a top-notch game development company.", name: "Sanjay Soni", title: "Founder, Talking Pixels" },
    { img: "https://placehold.co/100x100/ffffff/000000?text=Y", quote: "I would highly recommend GameEon as a gaming partner, They prepared our game before the date with additional features. The entire team, including Founder Nikhil Malankar, Developers, and Team members, are very professional and believe in working extra for the client. They use latest technology and version which gives an advantage of more features choice. The entire UI of my game “Capital Rush” is very finely designed based on UX principles. The code was written in a very structured and simplest way possible.", name: "Yogesh Lakhpatani", title: "Sr. Operations Manager, Capital Rush" },
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
