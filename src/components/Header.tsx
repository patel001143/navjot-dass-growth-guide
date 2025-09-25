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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-card' : 'bg-white'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img 
            src={jdassLogo} 
            alt="JDass Group Logo" 
            className="h-8 w-auto"
          />
          
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('leadership')}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Leadership
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('community')}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Community
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('values')}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Values
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;