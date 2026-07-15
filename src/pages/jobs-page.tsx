import {
  CareersHeroSection,
  CareersWhyFondiSection,
  CareersExpectationsSection,
  CareersJobsSection,
} from '@/components/sections'

export function JobsPage() {
  return (
    <main>
      <section
        id="careers"
        className="bg-neutral-100 border-t border-neutral-200 px-5 sm:px-8 md:px-12 pt-[calc(70px+56px)] md:pt-[calc(70px+76px)] pb-14 md:pb-[76px]"
      >
        <CareersHeroSection />
        <CareersWhyFondiSection />
        <CareersExpectationsSection />
        <CareersJobsSection />
      </section>
    </main>
  )
}
