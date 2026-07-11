import {
  HeroSection,
  TrustBarSection,
  BenefitsSection,
  // SimulatorSection, — sin tasas reales todavía; ver AmountSelectorSection más abajo. Reactivar cuando el producto tenga condiciones definidas.
  AmountSelectorSection,
  StepsSection,
  ServicesSection,
  AboutSection,
  TestimonialsSection,
  VideosSection,
  ContactSection,
} from "@/components/sections";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBarSection />
      <BenefitsSection />
      {/* <SimulatorSection /> */}
      <AmountSelectorSection />
      <StepsSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <VideosSection />
      <ContactSection />
    </main>
  );
}
