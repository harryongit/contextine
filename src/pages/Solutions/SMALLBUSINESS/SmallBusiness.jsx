import React from 'react'
import { Shield, Target, Activity, Zap, TrendingUp, Star, Workflow, Layout, Briefcase, CheckCircle2 } from 'lucide-react'
import StageHero from '../common/StageHero'
import StageFeatures from '../common/StageFeatures'
import StageBenefits from '../common/StageBenefits'

import GrowthStories from '../../Home/GrowthStories'
import Blog from '../../Home/Blog'
import CtaSection from '../../Home/CtaSection'

const SmallBusiness = () => {
  const features = [
    {
      title: "Scalable Audit Workflows",
      desc: "Get started with simplified audit sequences that grow with your business complexity.",
      icon: Workflow
    },
    {
      title: "Simple Risk Tracking",
      desc: "Identify and manage your most critical risks without the enterprise overhead.",
      icon: Target
    },
    {
      title: "Case Management",
      desc: "Unified tracking for incidents and legal matters designed for lean, fast-moving teams.",
      icon: Briefcase
    }
  ]

  const benefits = [
    {
      title: "Save Time",
      desc: "Remove the manual overhead of compliance and stay focused on your core growth.",
      icon: Zap
    },
    {
      title: "Reduce Risk",
      desc: "Eliminate early-stage visibility gaps that could stall your enterprise deals.",
      icon: Shield
    },
    {
      title: "Scale Easily",
      desc: "Build a foundation of trust that adapts as you move from Seed to Series A and beyond.",
      icon: TrendingUp
    }
  ]

  return (
    <>
      <main className="bg-white selection:bg-brand/10 selection:text-brand min-h-screen overflow-hidden">
        <StageHero 
          badgeText="Growth Stage Solutions"
          title="Boost Business with"
          highlightTitle="Compliance Made Easy."
          subtext="Simplify audits, risk management, and case tracking for growing teams with Contextine's high-fidelity platform."
          primaryBtnText="Book Demo"
          secondaryBtnText="Explore Growth Track"
          floatingIcon={Zap}
          floatingText="Fast Track SOC2"
        />

        <StageFeatures 
            badgeText="Simplified Platform"
            title="Engineered for"
            highlightTitle="Operational Speed."
            description="Our platform converts technical complexity into a simple, high-fidelity compliance ledger."
            features={features}
        />

        <StageBenefits 
            badgeText="Market Impact"
            title="Moving from reaction"
            highlightTitle="To Foundational Trust."
            benefitsList={benefits}
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default SmallBusiness
