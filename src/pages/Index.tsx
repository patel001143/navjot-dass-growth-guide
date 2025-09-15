import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import CommunitySection from "@/components/CommunitySection";
import ValuesSection from "@/components/ValuesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <LeadershipSection />
      <CommunitySection />
      <ValuesSection />
      <ContactSection />
    </main>
  );
};

export default Index;
