import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { BarChart3, Target, Activity, Zap, TrendingUp, Star, LineChart, Search } from 'lucide-react'
import FeatureHero from '../common/FeatureHero'
import FeatureProblemSolution from '../common/FeatureProblemSolution'
import FeatureCapabilities from '../common/FeatureCapabilities'
import FeatureBenefits from '../common/FeatureBenefits'
import FeatureUseCase from '../common/FeatureUseCase'

import GrowthStories from '../../../Home/GrowthStories'
import Blog from '../../../Home/Blog'
import CtaSection from '../../../Home/CtaSection'

const ReportingAnalytics = () => {
  const { scrollYProgress } = useScroll()

  const capabilities = [
    {
      title: "Real-time Posture Hub",
      desc: "Visualize your entire compliance surface in real-time with granular drill-down views.",
      icon: BarChart3
    },
    {
      title: "Predictive Risk Analytics",
      desc: "Monitor your compliance health over time and predict emerging risks before they impact your audit.",
      icon: LineChart
    },
    {
      title: "Executive Reporting Hub",
      desc: "Generate professional reports for stakeholders, auditors, and leadership with one-click fidelity.",
      icon: Search
    }
  ]

  const benefits = [
    {
      title: "Actionable Intelligence",
      desc: "High-fidelity data decisions based on live visibility across your entire security framework.",
      icon: TrendingUp
    },
    {
      title: "Leadership Clarity",
      desc: "Demonstrate security ROI and compliance status to the board with high-fidelity analytics.",
      icon: Target
    },
    {
      title: "Audit Connectivity",
      desc: "Share live evidence with auditors and eliminate time spent manually collecting documentation.",
      icon: Star
    }
  ]

  return (
    <>
      <main className="bg-slate-50 selection:bg-brand/10 selection:text-brand min-h-screen overflow-hidden">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="fixed left-6 top-0 w-0.5 h-full bg-linear-to-b from-brand/5 via-brand/30 to-brand/5 origin-top z-50 hidden xl:block"
        />

        <FeatureHero 
          badgeIcon={BarChart3}
          badgeText="Insight Analytics v3.2"
          title="Visualize posture"
          highlightTitle="with absolute clarity."
          description="Transform raw infrastructure data into actionable compliance intelligence. Contextine analytics give you 360-degree board-level visibility."
          primaryBtnText="View Intelligence Hub"
          secondaryBtnText="Explore Custom Reports"
          floatingIcon={Activity}
          floatingText="Live Posture Updates"
        />

        <FeatureProblemSolution 
            problemTitle="The Visibility Gap"
            problemDesc="Disconnected tools and fragmented data make it impossible to see your true risk posture. Static reports are obsolete the second they're exported."
            solutionTitle="Real-time Logic"
            solutionDesc="Contextine unified data hub converts technical evidence into board-ready visualization with zero data latency."
        />

        <FeatureCapabilities 
            badgeText="Intelligence Hub"
            title="Visualized"
            highlightTitle="Security Intelligence."
            description="Our platform converts technical proof into executive-grade insight dashboards automatically."
            capabilities={capabilities}
        />

        <FeatureBenefits 
            badgeText="Outcome Focus"
            title="Decisions based on"
            highlightTitle="Absolute Certainty."
            benefitsList={benefits}
        />

        <FeatureUseCase 
            title="Evidence Transparency"
            desc="How security leaders demonstrate progress using Contextine platform."
            scenario="A Security Director at a FinTech firm using automated dashboards to provide weekly compliance updates during audit prep."
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default ReportingAnalytics
