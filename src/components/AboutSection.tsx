const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              About Navjot Dass
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Navjot Dass is the Managing Director of JDass Group, a diversified Canadian enterprise founded in 1986. With decades of experience in business operations and strategic oversight, Navjot plays a pivotal role in guiding the group's growth and ensuring its continued legacy of excellence.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Under his leadership, JDass has strengthened its position as a trusted name in real estate & land development, metals, retail, hospitality, and financial services. 
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Navjot's approach to leadership is rooted in integrity, accountability, and innovation — values that reflect both his family's vision and his personal dedication to sustainable business practices.
              </p>
            </div>
            
            <div className="bg-secondary p-8 rounded-lg shadow-card">
              <h3 className="text-2xl font-bold text-primary mb-6">JDass Group Industries</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Real Estate & Land Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Metals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Retail</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Hospitality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Financial Services</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-accent-muted rounded-lg">
                <p className="text-primary font-semibold text-center">
                  "Tomorrow's vision, today."
                </p>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  JDass Group Founding Vision
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;