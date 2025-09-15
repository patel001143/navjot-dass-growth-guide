const ContactSection = () => {
  return (
    <section id="contact" className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Contact & Connect
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          
          <p className="text-xl text-primary-foreground/90 mb-12">
            For media, community, or business inquiries
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                Location
              </h3>
              <p className="text-primary-foreground/90">
                Vaughan, Ontario<br />
                Canada
              </p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                LinkedIn
              </h3>
              <p className="text-primary-foreground/90">
                Professional Network<br />
                [LinkedIn Profile]
              </p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                Business Contact
              </h3>
              <p className="text-primary-foreground/90">
                Official Inquiries<br />
                [Business Email]
              </p>
            </div>
            
          </div>
          
          <div className="bg-accent p-8 rounded-lg shadow-accent">
            <h3 className="text-2xl font-bold text-accent-foreground mb-4">
              JDass Group
            </h3>
            <p className="text-accent-foreground/80 text-lg">
              Diversified Canadian Enterprise - Since 1986
            </p>
            <p className="text-accent-foreground/60 mt-2">
              Real Estate • Metals • Retail • Hospitality • Financial Services
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;