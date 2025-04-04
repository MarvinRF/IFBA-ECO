import { Navbar } from "@/components/navbar";
import { HeroCarousel } from "@/components/hero-carousel";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";

import { Footer } from "@/components/footer";
import { SupportMapSection } from "@/components/contact-section";
import { ConceptSection } from "@/components/concept-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <ConceptSection />
      <AboutSection />
      <ProjectsSection />
      <SupportMapSection />
      <Footer />
    </main>
  );
}
