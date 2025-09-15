import { useState, useEffect } from "react";
import jdassLogo from "@/assets/jdass-logo.webp";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      scrolled ? 'bg-background/95 backdrop-blur-sm shadow-card' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <img 
            src={jdassLogo} 
            alt="JDass Group Logo" 
            className="h-8 w-auto"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;