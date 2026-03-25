import BeforeAndAfter from './BeforeAndAfter.jsx'
import Hero from './Hero.jsx'
import ShowWhyYouNeed from './ShowWhyYouNeed.jsx'
import ShowWhyYouNeedsection from './ShowWhyYouNeedsection.jsx'
import StatsTestimonials from './StatsTestimonials.jsx'
import FeaturesProvide from './FeaturesProvide.jsx'
import Projects from './Projects.jsx'
import GrowthStories from './GrowthStories.jsx'
import Blog from './Blog.jsx'
import CtaSection from './CtaSection.jsx'

function HomeSection() {
  return (
    <>
      <Hero />

      <BeforeAndAfter />
      <FeaturesProvide />
      <Projects />

      <StatsTestimonials />
      <ShowWhyYouNeed />
      {/* <ShowWhyYouNeedsection /> */}
      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default HomeSection
