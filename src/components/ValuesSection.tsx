const ValuesSection = () => {
  const values = [
    {
      title: "Integrity",
      description: "in decision-making",
      icon: "⚖️"
    },
    {
      title: "Innovation", 
      description: "in business operations",
      icon: "🚀"
    },
    {
      title: "Accountability",
      description: "to stakeholders and the community", 
      icon: "🎯"
    },
    {
      title: "Commitment",
      description: "to building a resilient and inclusive Canadian economy",
      icon: "🏗️"
    }
  ];

  return (
    <section id="values" className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Vision & Values
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Navjot Dass leads with a clear vision: growth that benefits business, community, and country.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
                <div className="bg-card p-8 rounded-lg shadow-card hover:shadow-professional transition-smooth h-full">
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-smooth">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-card p-10 rounded-lg shadow-professional">
            <h3 className="text-3xl font-bold text-primary text-center mb-8">
              News & Insights
            </h3>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Stay tuned for updates, articles, and insights from Navjot Dass on topics such as:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-secondary rounded-lg">
                <h4 className="font-semibold text-primary mb-3">
                  Real Estate Development
                </h4>
                <p className="text-sm text-muted-foreground">
                  The future of real estate development in Ontario
                </p>
              </div>
              <div className="text-center p-6 bg-secondary rounded-lg">
                <h4 className="font-semibold text-primary mb-3">
                  Canadian Manufacturing
                </h4>
                <p className="text-sm text-muted-foreground">
                  The importance of Canadian manufacturing and metals
                </p>
              </div>
              <div className="text-center p-6 bg-secondary rounded-lg">
                <h4 className="font-semibold text-primary mb-3">
                  Leadership Lessons
                </h4>
                <p className="text-sm text-muted-foreground">
                  Leadership lessons from managing diversified enterprises
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;