import DemoBanner from '@/components/DemoBanner'
import Hero from '@/components/sections/Hero'
import ProblemRecognition from '@/components/sections/ProblemRecognition'
import TheMethod from '@/components/sections/TheMethod'
import JourneyMap from '@/components/sections/JourneyMap'
import Results from '@/components/sections/Results'
import Testimonials from '@/components/sections/Testimonials'

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
    </>
  )
}
