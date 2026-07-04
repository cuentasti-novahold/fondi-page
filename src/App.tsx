import { MotionConfig } from 'motion/react'
import { Navbar } from '@/components/layout'
import { Footer } from '@/components/layout'
import {
  HeroSection,
  TrustBarSection,
  BenefitsSection,
  SimulatorSection,
  StepsSection,
  ServicesSection,
  AboutSection,
  TestimonialsSection,
  VideosSection,
  ContactSection,
} from '@/components/sections'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBarSection />
        <BenefitsSection />
        <SimulatorSection />
        <StepsSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <VideosSection />
        <ContactSection />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
