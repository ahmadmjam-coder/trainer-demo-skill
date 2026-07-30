import DemoBanner from '@/components/DemoBanner'
import Hero from '@/components/sections/Hero'
import ProblemRecognition from '@/components/sections/ProblemRecognition'
import TheMethod from '@/components/sections/TheMethod'
import JourneyMap from '@/components/sections/JourneyMap'
import Results from '@/components/sections/Results'
import Testimonials from '@/components/sections/Testimonials'
import AboutTrainer from '@/components/sections/AboutTrainer'
import WhatIsIncluded from '@/components/sections/WhatIsIncluded'

export default function Home() {
  return (
    <>
      <DemoBanner />
      <Hero />
      <ProblemRecognition />
      <TheMethod />
      <JourneyMap />
      <Results />
      <Testimonials />
      <AboutTrainer />
      <WhatIsIncluded />
    </>
  )
}
