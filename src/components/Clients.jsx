export default function Clients({ clientTrackRef }) {
  const clientLogos = [
    { src: "https://img.icons8.com/?size=100&id=SDDUyPtXiQRf&format=png&color=FFFFFF", alt: "Client 2" },
    { src: "https://img.icons8.com/?size=100&id=38240&format=png&color=FFFFFF", alt: "Client 3" },
    { src: "https://img.icons8.com/?size=100&id=M3rdcQjtEtJP&format=png&color=FFFFFF", alt: "Client 4" },
    { src: "https://img.icons8.com/?size=100&id=12504&format=png&color=FFFFFF", alt: "Client 5" },
    { src: "https://img.icons8.com/?size=100&id=39848&format=png&color=FFFFFF", alt: "Client 6" },
    { src: "https://img.icons8.com/?size=100&id=mgtksf7Mnzqy&format=png&color=FFFFFF", alt: "Client 7" },
  ];

  return (
    <section id="clients" className="py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <h3 className="font-heading text-xs sm:text-sm uppercase text-gray-400 tracking-widest reveal">
          Trusted By The Best
        </h3>
        
        {/* Logo Scroller */}
        <div className="relative w-full mt-6 sm:mt-8 md:mt-12 overflow-hidden mask-gradient">
          <div 
            className="client-track flex" 
            ref={clientTrackRef} 
            style={{ 
              width: `calc(${150}px * ${clientLogos.length * 2})`,
              animation: 'scroll 30s linear infinite'
            }}
          >
            {/* Render logos set 1 */}
            {clientLogos.map((logo, index) => (
              <div 
                key={`logo-a-${index}`} 
                className="client-logo flex-shrink-0 flex items-center justify-center p-4 sm:p-6 md:p-8"
                style={{ width: '150px' }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            
            {/* Render logos set 2 (for seamless loop) */}
            {clientLogos.map((logo, index) => (
              <div 
                key={`logo-b-${index}`} 
                className="client-logo flex-shrink-0 flex items-center justify-center p-4 sm:p-6 md:p-8"
                style={{ width: '150px' }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add keyframes for animation if not already in your CSS */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .client-track:hover {
          animation-play-state: paused;
        }

        .mask-gradient {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}