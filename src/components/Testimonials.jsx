import React, { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef(null);

  const slides = [
    { 
      img: "https://placehold.co/100x100/ffffff/000000?text=A", 
      quote: "It was great working with GameEon Studios on games for our gaming application. We truly appreciate the team's efforts and their commitment to the project.", 
      name: "Amit Grover", 
      title: "Vice President Marketing (GameSkraft)" 
    },
    {
      img: "https://placehold.co/100x100/ffffff/000000?text=M",
      quote: "JioGames is thrilled to host GameEon Studios' games. Their casual games, like Cricket Play 2021 and Crashy Car Racing, are engaging and fun, and gamers can't get enough of them. We look forward to continuing this partnership.",
      name: "Mansi Dutta",
      title: "Partner and Strategic Alliances Manager, Jio Games"
    },
    { 
      img: "https://placehold.co/100x100/ffffff/000000?text=S", 
      quote: "We recently worked with GameEon Studios on a project to develop a new mobile game. I was very impressed with their work. They were professional, efficient, and creative. They listened to our needs and delivered a product that exceeded our expectations. I would highly recommend GameEon Studios to anyone looking for a top-notch game development company.", 
      name: "Sanjay Soni", 
      title: "Founder, Talking Pixels" 
    },
    { 
      img: "https://placehold.co/100x100/ffffff/000000?text=Y", 
      quote: "I would highly recommend GameEon as a gaming partner, They prepared our game before the date with additional features. The entire team, including Founder Nikhil Malankar, Developers, and Team members, are very professional and believe in working extra for the client. They use latest technology and version which gives an advantage of more features choice. The entire UI of my game 'Capital Rush' is very finely designed based on UX principles. The code was written in a very structured and simplest way possible.", 
      name: "Yogesh Lakhpatani", 
      title: "Sr. Operations Manager, Capital Rush" 
    },
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
  }, [currentSlide]);

  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      showSlide(currentSlide + 1);
    } else if (isRightSwipe) {
      showSlide(currentSlide - 1);
    }
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center lg:mb-8 sm:mb-12 ">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white reveal px-4">
            From Our Partners
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mt-3 sm:mt-4 reveal reveal-delay-100 px-4">
            Don't just take our word for it. Hear from the players and partners who've stepped into our worlds.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          id="carousel-container" 
          className="relative max-w-4xl mx-auto reveal"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="overflow-hidden rounded-xl">
            <div 
              className="carousel-track flex transition-transform duration-500 ease-in-out" 
              ref={trackRef}
            >
              {slides.map((slide, index) => (
                <div 
                  key={index} 
                  className="carousel-slide min-w-full p-2 sm:p-3"
                >
                  <div className="glassmorphic p-6 sm:p-8 md:p-10 lg:p-12 text-center">
                    <img
                      src={slide.img}
                      alt={slide.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto border-2 sm:border-4 border-neon-primary object-cover"
                    />
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white italic mt-4 sm:mt-6 md:mt-8 leading-relaxed px-2">
                      "{slide.quote}"
                    </p>
                    <h5 className="font-heading text-base sm:text-lg text-neon-primary mt-4 sm:mt-6 md:mt-8 font-semibold">
                      {slide.name}
                    </h5>
                    <p className="text-sm sm:text-base text-gray-400 mt-1">
                      {slide.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls - Hidden on mobile, shown on tablet+ */}
          <button
            id="prev-slide"
            onClick={() => showSlide(currentSlide - 1)}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 p-2 lg:p-3 rounded-full glassmorphic text-white hover:text-neon-primary transition-all hover:scale-110 active:scale-95"
          >
            <ChevronLeftIcon className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button
            id="next-slide"
            onClick={() => showSlide(currentSlide + 1)}
            aria-label="Next testimonial"
            className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 lg:translate-x-12 p-2 lg:p-3 rounded-full glassmorphic text-white hover:text-neon-primary transition-all hover:scale-110 active:scale-95"
          >
            <ChevronRightIcon className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => showSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-neon-primary w-6 sm:w-8' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}