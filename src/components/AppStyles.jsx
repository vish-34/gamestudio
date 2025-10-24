// AppStyles.jsx
import React from "react";

export default function AppStyles() {
  return (
    <style>{`
      /* --- Custom CSS & Theme Definitions --- */
      :root {
          --neon-primary: #00f2ea;
          --neon-secondary: #ff00ff;
          --bg-dark: #05020a;
          --glass-bg: rgba(15, 10, 25, 0.4);
          --glass-border: rgba(255, 255, 255, 0.1);
      }

      /* Apply base styles to body or a root wrapper */
      .font-body {
          background-color: var(--bg-dark);
          color: #e0e0e0;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden; /* Prevent horizontal scroll */
      }

      /* --- Typography --- */
      .font-heading {
          font-family: 'Russo One', sans-serif;
      }

      /* --- Glassmorphism Effect --- */
      .glassmorphic {
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          border-radius: 0.75rem; /* rounded-xl */
      }

      /* --- Navbar Sticky State --- */
      .glassmorphic-sticky {
          background: rgba(5, 2, 10, 0.7); /* Darker glass on scroll */
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }

      /* --- Neon Glow Effects --- */
    //   .text-glow {
    //       text-shadow: 0 0 6px var(--neon-primary),
    //                    0 0 10px var(--neon-primary),
    //                    0 0 20px rgba(0, 242, 234, 0.5);
    //   }

      .btn-neon-primary {
          position: relative;
          background: var(--neon-primary);
          color: var(--bg-dark);
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 0 8px var(--neon-primary),
                      0 0 16px rgba(0, 242, 234, 0.7);
      }

      .btn-neon-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 12px var(--neon-primary),
                      0 0 24px var(--neon-primary),
                      0 0 48px rgba(0, 242, 234, 0.7);
      }

      .btn-neon-outline {
          position: relative;
          border: 2px solid var(--neon-primary);
          color: var(--neon-primary);
          transition: all 0.3s ease;
          text-shadow: 0 0 4px var(--neon-primary);
      }

    //   .btn-neon-outline:hover {
    //       background: var(--neon-primary);
    //       color: var(--bg-dark);
    //       box-shadow: 0 0 10px var(--neon-primary),
    //                   0 0 20px rgba(0, 242, 234, 0.5);
    //       text-shadow: none;
    //   }

      /* --- Parallax Background Effect --- */
      .parallax-bg {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
      }

      #hero {
          position: relative;
          height: 100vh;
      }

      #hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            rgba(5, 2, 10, 0.7),
            rgba(5, 2, 10, 0.9)
          ), url('https://placehold.co/1920x1080/1a1a2e/00f2ea?text=Mumbai+Gullies+Visual');
          background-size: cover;
          background-position: center;
          z-index: -1;
          /* JS will control transform for parallax */
      }

      #hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 150px;
          background: linear-gradient(to top, var(--bg-dark), transparent);
      }

      /* --- Client Logo Scroller --- */
      @keyframes scroll-clients {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
      }

      .client-track {
          display: flex;
          animation: scroll-clients 40s linear infinite;
      }

      .client-logo {
          width: 200px;
          filter: grayscale(100%) opacity(0.6);
          transition: all 0.3s ease;
      }

      .client-logo:hover {
          filter: grayscale(0%) opacity(1);
          transform: scale(1.1);
          color: var(--neon-primary);
      }

      /* --- 3D Tilt Cards (Portfolio) --- */
      .tilt-card {
          transform-style: preserve-3d;
          transform: perspective(1000px);
          transition: transform 0.1s linear;
      }

      .tilt-card-inner {
          transform: translateZ(20px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .tilt-card:hover .tilt-card-inner {
          transform: translateZ(50px) scale(1.05);
          box-shadow: 0 10px 40px rgba(0, 242, 234, 0.2);
      }

      /* --- Testimonial Carousel --- */
      .carousel-track {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      }

      .carousel-slide {
          flex: 0 0 100%;
      }

      /* --- Scroll-triggered Animations --- */
      .reveal {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
      }

      .reveal.visible {
          opacity: 1;
          transform: translateY(0);
      }

      .reveal-delay-100 { transition-delay: 100ms; }
      .reveal-delay-200 { transition-delay: 200ms; }
      .reveal-delay-300 { transition-delay: 300ms; }

      /* --- Custom Form Styles --- */
      .form-input {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--glass-border);
          transition: all 0.3s ease;
      }

      .form-input:focus {
          background: rgba(0, 0, 0, 0.3);
          border-color: var(--neon-primary);
          box-shadow: 0 0 10px rgba(0, 242, 234, 0.3);
          outline: none;
      }

      /* --- Footer Icon Glow --- */
      .social-icon:hover {
          color: var(--neon-primary);
          filter: drop-shadow(0 0 8px var(--neon-primary));
          transform: translateY(-3px);
      }
    `}</style>
  );
}
