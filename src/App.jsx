import React, { useState, useEffect, useRef } from 'react';
import AppStyles from './components/AppStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Games from './components/Games';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Clients from './components/Clients';
import Whatwedo from './components/Whatwedo';
import StudioStats from './components/StudioStats';
import Clients2 from './components/Clients2';
import Collabs from './components/Collabs';
import FadeUpOnView from './animations/FadeUpOnView';
// import { motion } from 'framer-motion';

const App = () => {
  // --- State ---
  // State for tracking if the navbar should be sticky
  const [isSticky, setIsSticky] = useState(false);

  // --- Refs ---
  // Ref for the hero background to apply parallax
  const heroBgRef = useRef(null);
  // Ref for the client logo track to duplicate it
  const clientTrackRef = useRef(null);

  // --- Effect: Scroll Handling (Sticky Nav & Hero Parallax) ---
  useEffect(() => {
    const handleScroll = () => {
      // 1. Sticky Navbar Logic
      setIsSticky(window.scrollY > 10);

      // 2. Hero Parallax Logic
      if (heroBgRef.current) {
        const offset = window.pageYOffset;
        heroBgRef.current.style.transform = `translateY(${offset * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty array: runs only once on mount

  // --- Effect: Scroll-triggered Animations (IntersectionObserver) ---
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with the .reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Cleanup function to unobserve
    return () => revealElements.forEach(el => observer.unobserve(el));
  }, []); // Empty array: runs only once on mount

  useEffect(() => {
    // Check if feather is loaded (from script in index.html)
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }); // No dependency array: runs after every render

  // --- Render ---
  return (
    <>
      {/* 1. Inject all custom CSS */}
      <AppStyles />

      {/* 2. Main content wrapper */}
      <div className="font-body">

        {/* 3. Header Component */}
        <Header isSticky={isSticky} />

        {/* 4. Main Page Content */}
        <main>

          {/* Hero Section */}
          <Hero heroBgRef={heroBgRef} />

          <Whatwedo />

          {/* Games Section */}
          <Games />

          {/* Portfolio Section */}
          <Portfolio />

           <FadeUpOnView>
       
          <h2 className="lg:text-5xl lg:text-left lg:ml-[2.5em] text-3xl text-center md:text-6xl font-bold uppercase tracking-wider mb-10 text-white relative z-10">
            Our <br />Collaboration
          </h2>
        
        </FadeUpOnView>
          <Collabs/>

          
          {/* Clients Section */}
          <Clients clientTrackRef={clientTrackRef} />


          {/* Testimonials Section */}
          <Testimonials />
          <StudioStats />
          <Clients2 />
          {/* Contact Section */}
          <Contact />

        </main>


        {/* 5. Footer Component */}
        <Footer />

       
      </div>
    </>
  );
};

export default App;
