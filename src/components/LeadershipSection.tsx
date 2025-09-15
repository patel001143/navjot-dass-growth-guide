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
          
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;