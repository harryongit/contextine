import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { Shield, Target, Activity, Zap, TrendingUp, Star, Search } from 'lucide-react'
import FeatureHero from '../common/FeatureHero'
import FeatureProblemSolution from '../common/FeatureProblemSolution'
import FeatureCapabilities from '../common/FeatureCapabilities'
import FeatureBenefits from '../common/FeatureBenefits'
import FeatureUseCase from '../common/FeatureUseCase'

import GrowthStories from '../../../Home/GrowthStories'
import Blog from '../../../Home/Blog'
import CtaSection from '../../../Home/CtaSection'

const RiskManagement = () => {
  const { scrollYProgress } = useScroll()

  const capabilities = [
    {
      title: "Real-time Hub Discovery",
      desc: "Our engine automatically detects and surfaces organizational risks by scanning your digital footprint 24/7.",
      icon: Search
    },
    {
      title: "Impact Probabilities",
      desc: "Quantify risks with automated scoring models based on your specific business context and technical data.",
      icon: Activity
    },
    {
      title: "Mitigation Orchestration",
      desc: "Track the entire lifecycle of risk mitigation from detection to resolution with bulletproof audit fidelity.",
      icon: Shield
    }
  ]

  const benefits = [
    {
      title: "Predictive Security",
      desc: "Identify shifts in your risk profile before they become critical security incidents.",
      icon: TrendingUp
    },
    {
      title: "Unified Mesh Visibility",
      desc: "Get a unified view of your risk posture across Infrastructure, Product, and Operations.",
      icon: Shield
    },
    {
      title: "Technical Compliance ROI",
      desc: "Demonstrate that compliance is not just a checkbox, but an active driver of risk reduction.",
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
          badgeIcon={Shield}
          badgeText="Risk Orchestration v5.1"
          title="Identify and mitigate"
          highlightTitle="risk in real-time."
          description="Contextine's Risk Management engine converts organizational uncertainty into a distinct advantage through real-time risk orchestration."
          primaryBtnText="Deploy Risk Canvas"
          secondaryBtnText="Explore Risk Metrics"
          floatingIcon={Shield}
          floatingText="Active Mitigate"
        />

        <FeatureProblemSolution 
            problemTitle="The Risk Blindspot"
            problemDesc="Disconnected tools and siloed departments make it impossible to see your true risk posture. Static checks leave your operations exposed."
            solutionTitle="Proactive Mesh"
            solutionDesc="Contextine produces a unified, real-time risk mesh that automatically identifies, assesses, and orchestrates mitigation across every digital layer."
        />

        <FeatureCapabilities 
            badgeText="Risk Engine Hub"
            title="Engineered for"
            highlightTitle="Proactive Mitigation."
            description="Our platform gives you the visibility to manage your organizational risk with absolute certainty."
            capabilities={capabilities}
        />

        <FeatureBenefits 
            badgeText="The Risk Advantage"
            title="Moving from reaction"
            highlightTitle="To Risk Velocity."
            benefitsList={benefits}
        />

        <FeatureUseCase 
            title="Strategic Mitigation"
            desc="How Enterprise teams use Contextine to manage complex risk graphs."
            scenario="A global Enterprise identifying cloud-native risks and automatically routing them to specific engineering pods for immediate corrective action."
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default RiskManagement
