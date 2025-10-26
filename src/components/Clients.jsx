export default function Clients  ({ clientTrackRef })  {
  const clientLogos = [
    { src: "https://img.icons8.com/?size=100&id=SDDUyPtXiQRf&format=png&color=FFFFFF", alt: "Client 2" },
    { src: "https://img.icons8.com/?size=100&id=38240&format=png&color=FFFFFF", alt: "Client 3" },
    { src: "https://img.icons8.com/?size=100&id=M3rdcQjtEtJP&format=png&color=FFFFFF", alt: "Client 4" },
    { src: "https://img.icons8.com/?size=100&id=12504&format=png&color=FFFFFF", alt: "Client 5" },
    { src: "https://img.icons8.com/?size=100&id=39848&format=png&color=FFFFFF", alt: "Client 6" },
    { src: "https://img.icons8.com/?size=100&id=mgtksf7Mnzqy&format=png&color=FFFFFF", alt: "Client 7" },
  ];

  // The track is duplicated in the App's useEffect to create the seamless loop
  return (
    <section id="clients" className="py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <h3 className="font-heading text-sm uppercase text-gray-400 tracking-widest reveal">
          Trusted By The Best
        </h3>
        {/* Logo Scroller */}
        <div className="relative w-full mt-12 overflow-hidden mask-gradient">
          <div 
            className="client-track" 
            ref={clientTrackRef} 
            style={{ width: `calc(200px * ${clientLogos.length * 2})` }}
          >
            {/* Render logos set 1 */}
            {clientLogos.map((logo, index) => (
              <div key={`logo-a-${index}`} className="client-logo flex-shrink-0 flex items-center justify-center p-8">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
            {/* Render logos set 2 (for seamless loop) */}
            {clientLogos.map((logo, index) => (
              <div key={`logo-b-${index}`} className="client-logo flex-shrink-0 flex items-center justify-center p-8">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};