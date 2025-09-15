const CommunitySection = () => {
  const commitments = [
    {
      title: "Hiring Canadian Talent",
      description: "Strengthening local industries through strategic Canadian workforce development."
    },
    {
      title: "Canadian Suppliers",
      description: "Partnering with Canadian suppliers whenever possible to support local businesses."
    },
    {
      title: "Economic Independence",
      description: "Investing in projects that enhance Canada's economic independence and resilience."
    },
    {
      title: "Sustainable Value",
      description: "Supporting policies and practices that create lasting value for all Canadians."
    }
  ];

  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Vaughan Commitment */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Commitment to Vaughan, Ontario
              </h2>
              <div className="w-24 h-1 bg-accent mb-8"></div>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Vaughan has been home to JDass Group for decades, and Navjot Dass is deeply committed to the city's continued growth.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through investments, business expansion, and job creation, Navjot ensures JDass contributes meaningfully to Vaughan's economic development. Beyond business, he advocates for community partnerships, local initiatives, and building opportunities that uplift Vaughan residents.
                </p>
                
                <div className="bg-accent-muted p-6 rounded-lg">
                  <p className="text-primary font-semibold text-lg">
                    "For Navjot, Vaughan is more than just headquarters — it is a community worth investing in for generations to come."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Canada-First */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Canada-First Commitment
              </h2>
              <div className="w-24 h-1 bg-accent mb-8"></div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Navjot Dass believes in a Canada-First approach to business. Under his leadership, JDass prioritizes:
              </p>
              
              <div className="space-y-4">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary group-hover:text-accent transition-smooth">
                        {commitment.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {commitment.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-primary rounded-lg">
                <p className="text-primary-foreground font-medium">
                  This commitment reflects Navjot's vision of a prosperous, sustainable future for Canada, built on strong foundations and ethical leadership.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;