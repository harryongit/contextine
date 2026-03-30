import React from 'react'
import { motion, useScroll } from 'framer-motion'
import WhyHero from './WhyHero.jsx'
import ProblemSection from './ProblemSection.jsx'
import SolutionOverview from './SolutionOverview.jsx'
import DifferentiatorGrid from './DifferentiatorGrid.jsx'
import ComparisonSection from './ComparisonSection.jsx'
import TrustSection from './TrustSection.jsx'


import GrowthStories from '../../../Home/GrowthStories.jsx'
import CtaSection from '../../../Home/CtaSection.jsx'
import Blog from '../../../Home/Blog.jsx'

const WhyContextine = () => {
  const { scrollYProgress } = useScroll()

  return (
    <main className="bg-white selection:bg-brand/10 selection:text-brand min-h-screen">
      <WhyHero />

      <div className="relative">
        {/* Animated Journey Line */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-brand/5 via-brand/20 to-brand/5 -translate-x-1/2 origin-top -z-10 hidden lg:block"
        />

        <ProblemSection />
        <SolutionOverview />
        <DifferentiatorGrid />
        <ComparisonSection />
        <TrustSection />


        <GrowthStories />
        <Blog />
        <CtaSection />
      </div>
    </main>
  )
}

export default WhyContextine
