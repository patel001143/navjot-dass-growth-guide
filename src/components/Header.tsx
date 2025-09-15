import { useState, useEffect } from "react";

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
      scrolled ? 'bg-background/95 backdrop-blur-sm shadow-card' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            Navjot Dass
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('leadership')} 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Leadership
            </button>
            <button 
              onClick={() => scrollToSection('community')} 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Community
            </button>
            <button 
              onClick={() => scrollToSection('values')} 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Values
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary-dark transition-smooth"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;