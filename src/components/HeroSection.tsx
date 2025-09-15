import facilityImage from "@/assets/jdass-facility.jpg";
const HeroSection = () => {
  return <section className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Navjot Dass
            </h1>
            <div className="text-xl lg:text-2xl text-accent mb-8 font-semibold">
              Managing Director, JDass Group
            </div>
            <h2 className="text-2xl lg:text-3xl text-primary-foreground mb-8 font-light">
              Guiding Growth, Strengthening Communities.
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-10 leading-relaxed max-w-2xl">
              As Managing Director of JDass Group, Navjot Dass provides strategic leadership across diverse industries — from real estate and metals to hospitality and financial ventures — with a steadfast commitment to Vaughan, Ontario and a Canada-First future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => document.getElementById('about')?.scrollIntoView({
              behavior: 'smooth'
            })} className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-smooth shadow-accent">
                Learn More
              </button>
              
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-60 lg:w-96 lg:h-72 rounded-lg overflow-hidden shadow-professional border-4 border-accent">
                <img src={facilityImage} alt="JDass Group facility in Vaughan, Ontario - Industrial complex representing decades of Canadian business excellence" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-accent">
                <span className="text-accent-foreground font-bold text-sm">JDass</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>;
};
export default HeroSection;