import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header({ isSticky }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Games", href: "#games" },
    {
      name: "Services",
      href: "#services",
      dropdown: [
        { name: "Game Development", url: "/services/game-development" },
        { name: "Art & Design", url: "/services/art-design" },
        { name: "AR/VR Development", url: "/services/ar-vr" },
        { name: "Game Testing", url: "/services/game-testing" },
      ],
    },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "#contact" },
  ];

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);

    if (href === "/") {
      navigate("/");
      return;
    }

    if (href.startsWith("#")) {
      if (location.pathname === "/") {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        navigate("/", { state: { scrollTo: href } });
      }
    } else {
      navigate(href);
    }
  };

  const handleDropdownClick = (url) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    navigate(url);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300 ease-in-out ${
        isSticky ? "glassmorphic-sticky" : "bg-black/40 backdrop-blur-md"
      }`}
    >
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <img
          src="https://gameeon.in/wp-content/uploads/2023/06/gelogo.png"
          alt="Logo"
          className="w-auto h-8 sm:h-9 md:h-10 flex-shrink-0 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="text-gray-300 hover:text-white flex items-center gap-1 transition duration-200 text-sm xl:text-base">
                  {link.name}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute top-full left-0 mt-3 w-56 bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-700/50 transition-all duration-300 transform origin-top ${
                    isServicesOpen
                      ? "opacity-100 visible translate-y-0 scale-100"
                      : "opacity-0 invisible -translate-y-2 scale-95"
                  }`}
                >
                  <div className="py-2">
                    {link.dropdown.map((item, idx) => (
                      <button
                        key={item.name}
                        onClick={() => handleDropdownClick(item.url)}
                        className={`block w-full text-left px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 hover:text-white transition duration-200 ${
                          idx !== link.dropdown.length - 1
                            ? "border-b border-gray-700/30"
                            : ""
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm xl:text-base"
              >
                {link.name}
              </button>
            )
          )}

          <button
            onClick={() => handleLinkClick("#contact")}
            className="px-4 xl:px-5 py-2 rounded-md btn-neon-outline text-sm xl:text-base whitespace-nowrap"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[64px] left-0 w-full h-auto overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
        } bg-black/70 backdrop-blur-xl z-40`}
      >
        <div className="flex flex-col items-stretch space-y-1 py-4 px-4 sm:px-6 overflow-y-auto">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="w-full">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full text-gray-200 text-base sm:text-lg text-left px-4 py-3 hover:text-white hover:bg-white/5 rounded-lg transition flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isServicesOpen ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-1 pl-3">
                    {link.dropdown.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleDropdownClick(item.url)}
                        className="block w-full text-left px-6 py-2.5 text-sm sm:text-base text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 rounded-lg transition"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="w-full text-gray-200 hover:text-white text-base sm:text-lg px-4 py-3 hover:bg-white/5 rounded-lg transition text-left"
              >
                {link.name}
              </button>
            )
          )}
          <button
            onClick={() => handleLinkClick("#contact")}
            className="mt-3 px-6 py-2.5 rounded-md btn-neon-outline w-full text-base sm:text-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
