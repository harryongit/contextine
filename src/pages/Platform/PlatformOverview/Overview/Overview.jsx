import React, { useRef } from 'react'
import { useScroll } from 'framer-motion'
import HeroSection from './HeroSection.jsx'
import CapabilitiesSection from './CapabilitiesSection.jsx'
import ProductSuite from './ProductSuite.jsx'
import OnboardingSection from './OnboardingSection.jsx'
import BenefitGrid from './BenefitGrid.jsx'


import GrowthStories from '../../../Home/GrowthStories.jsx'
import CtaSection from '../../../Home/CtaSection.jsx'
import Blog from '../../../Home/Blog.jsx'

const OverviewSection = () => {
  const containerRef = useRef(null)

  // High-performance scroll tracking for orchestrating animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-brand/20 selection:text-brand font-inter overflow-x-hidden">

      {/* 1. Impactful Hero Intro */}
      <HeroSection scrollYProgress={scrollYProgress} />

      {/* 2. Hub Reveal - Pale Mint Environment */}
      <CapabilitiesSection />

      {/* 3. The Product Architecture (Bento Suite - Lavender) */}
      <ProductSuite />

      {/* 4. Implementation & Integration (Gold Hub) */}
      <OnboardingSection />

      {/* 5. Strategic Benefits & ROI (High-Impact Social Proof) */}
      <BenefitGrid />


      <GrowthStories />
      <Blog />
      <CtaSection />

      {/* Smooth Bottom Padding for Footer Transition */}
      <div className="h-24 bg-white"></div>
    </div>
  )
}

export default OverviewSection
