const LeadershipSection = () => {
  const focusAreas = [
    {
      title: "Strategic Growth",
      description: "Driving expansion into new markets and industries.",
      icon: "📈"
    },
    {
      title: "Innovation",
      description: "Guiding modernization across JDass divisions.",
      icon: "💡"
    },
    {
      title: "Resilience", 
      description: "Building sustainable systems that ensure long-term value creation.",
      icon: "🛡️"
    },
    {
      title: "Community Impact",
      description: "Ensuring JDass contributes to local economies and supports Canadian industries.",
      icon: "🤝"
    }
  ];

  return (
    <section id="leadership" className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Leadership at JDass Group
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              As Managing Director, Navjot Dass focuses on strategic initiatives that drive sustainable growth and create lasting value for stakeholders and communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="group">
                <div className="bg-card p-8 rounded-lg shadow-card hover:shadow-professional transition-smooth h-full">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-smooth">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-primary p-8 rounded-lg shadow-professional">
              <p className="text-xl text-primary-foreground font-light italic">
                "Navjot's leadership ensures that JDass Group remains aligned with its founding vision: 'Tomorrow's vision, today.'"
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://www.linkedin.com/in/navjot-dass-a9b20b1a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-card hover:bg-accent transition-smooth p-8 rounded-lg shadow-card hover:shadow-professional group"
            >
              <div className="flex items-center justify-center gap-4">
                <svg className="w-12 h-12 text-primary group-hover:text-primary-foreground transition-smooth" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-primary-foreground transition-smooth">
                    LinkedIn
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-smooth">
                    Professional Network
                  </p>
                  <p className="text-sm text-primary group-hover:text-primary-foreground transition-smooth font-medium">
                    [LinkedIn Profile]
                  </p>
                </div>
              </div>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;