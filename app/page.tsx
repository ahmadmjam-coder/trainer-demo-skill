import DemoBanner from '@/components/DemoBanner'
import SiteHeader from '@/components/SiteHeader'
import Hero from '@/components/sections/Hero'
import ProblemRecognition from '@/components/sections/ProblemRecognition'
import TheMethod from '@/components/sections/TheMethod'
import JourneyMap from '@/components/sections/JourneyMap'
import Results from '@/components/sections/Results'
import Testimonials from '@/components/sections/Testimonials'
import AboutTrainer from '@/components/sections/AboutTrainer'
import WhatIsIncluded from '@/components/sections/WhatIsIncluded'
import FAQ from '@/components/sections/FAQ'
import LeadCapture from '@/components/sections/LeadCapture'

export default function Home() {
  return (
    <>
      {/* Sticky bar: demo notice always above nav */}
      <div id="sticky-header" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
        <DemoBanner />
        <SiteHeader />
      </div>

      <Hero />
      <ProblemRecognition />
      <TheMethod />
      <JourneyMap />
      <Results />
      <Testimonials />
      <AboutTrainer />
      <WhatIsIncluded />
      <FAQ />
      <LeadCapture />
    </>
  )
}
