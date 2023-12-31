import { HeroSection } from '../components/HeroSection'
import { HowSection } from '../components/HowSection'
import { IntroSection } from '../components/IntroSection'
import { LoopSection } from '../components/LoopSection'

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <LoopSection />
      <a
        href="/home"
        className="m-auto cursor-pointer bg-black px-20 py-4 text-lg font-extralight uppercase text-white no-underline hover:bg-btn-hover "
      >
        join the loop
      </a>
      <HowSection />
    </>
  )
}
