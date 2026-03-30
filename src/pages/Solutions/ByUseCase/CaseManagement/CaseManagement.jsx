import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { Shield, Target, Activity, Zap, TrendingUp, Star, Workflow, BarChart3, Clock, Layout, Briefcase } from 'lucide-react'
import UseCaseHero from '../Common/UseCaseHero'
import UseCasePainPoints from '../Common/UseCasePainPoints'
import UseCaseFeatures from '../Common/UseCaseFeatures'
import UseCaseBenefits from '../Common/UseCaseBenefits'
import UseCaseScenario from '../Common/UseCaseScenario'

import GrowthStories from '../../../Home/GrowthStories'
import Blog from '../../../Home/Blog'
import CtaSection from '../../../Home/CtaSection'

const CaseManagement = () => {
  const painPoints = [
    "Disorganized case tracking across fragmented email chains",
    "Slow resolution due to broken operational data",
    "Fragmented tools that don't speak to your risk posture"
  ]

  const features = [
    {
      title: "Case Assignment & Escalation",
      desc: "Automatically route and escalate cases based on predefined logical workflows.",
      icon: Target
    },
    {
      title: "Workflow Automation",
      desc: "Scale case resolution via automated sequences from intake to resolution.",
      icon: Workflow
    },
    {
      title: "Tracking & Reporting Hub",
      desc: "Visualize your entire case portfolio with high-fidelity real-time analytics.",
      icon: Layout
    }
  ]

  const benefits = [
    {
      title: "Faster Resolution",
      desc: "Resolve cases up to 60% faster by removing operational technical debt.",
      icon: Zap
    },
    {
      title: "Improved Visibility",
      desc: "Get total oversight into your organizational case health at a glance.",
      icon: Activity
    },
    {
      title: "Streamlined Ops",
      desc: "A unified platform that converts legal complexity into simple operational logic.",
      icon: TrendingUp
    }
  ]

  return (
    <>
      <main className="bg-white selection:bg-brand/10 selection:text-brand min-h-screen overflow-hidden">
        <UseCaseHero 
          badgeText="Resolution Logic v3.0"
          title="Track and Resolve"
          highlightTitle="Cases Efficiently."
          subtext="From legal matters to incident tracking, manage everything in one high-fidelity platform."
          primaryBtnText="Book Demo"
          secondaryBtnText="Explore Workflow"
          floatingIcon={Briefcase}
          floatingText="Legal Ops Ready"
        />

        <UseCasePainPoints 
            badgeText="Operational Friction"
            title="Beyond Chaos"
            painPoints={painPoints}
        />

        <UseCaseFeatures 
            badgeText="Intelligence Platform"
            title="High-Fidelity"
            highlightTitle="Case Orchestration."
            description="Our platform unifies your entire case lifecycle into a single high-fidelity canvas."
            features={features}
        />

        <UseCaseBenefits 
            badgeText="Business Impact"
            title="Moving from reaction"
            highlightTitle="To Absolute Response."
            benefitsList={benefits}
        />

        <UseCaseScenario 
            title="Matter Flow"
            desc="How growing technology firms stay organized with complex matters."
            scenario="A Legal Ops team tracking 200+ litigation cases with automated resource allocation and SLA notifications."
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default CaseManagement
