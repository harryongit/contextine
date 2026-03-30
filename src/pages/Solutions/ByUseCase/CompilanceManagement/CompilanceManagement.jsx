import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { Shield, Target, Activity, Zap, TrendingUp, Star, Search, Workflow, BarChart3, Clock, CheckCircle2, Layout } from 'lucide-react'
import UseCaseHero from '../Common/UseCaseHero'
import UseCasePainPoints from '../Common/UseCasePainPoints'
import UseCaseFeatures from '../Common/UseCaseFeatures'
import UseCaseBenefits from '../Common/UseCaseBenefits'
import UseCaseScenario from '../Common/UseCaseScenario'

import GrowthStories from '../../../Home/GrowthStories'
import Blog from '../../../Home/Blog'
import CtaSection from '../../../Home/CtaSection'

const CompilanceManagement = () => {
  const painPoints = [
    "Fragmented compliance tracking across spreadsheets and silos",
    "Audit preparation stress that consumes team focus",
    "Manual documentation that is obsolete before it's saved"
  ]

  const features = [
    {
      title: "Framework Orchestrator",
      desc: "Manage SOC 2, ISO 27001, HIPAA, and more from a single dashboard.",
      icon: Layout
    },
    {
      title: "Real-time Compliance Hub",
      desc: "Visualize your entire compliance mesh in real-time with automated data feeds.",
      icon: BarChart3
    },
    {
      title: "Automated Evidence Engine",
      desc: "Pull technical proof directly from your cloud-stack automatically 24/7.",
      icon: Zap
    }
  ]

  const benefits = [
    {
      title: "Continuous Compliance",
      desc: "Move from seasonal audit prep to permanent, continuous compliance posture.",
      icon: Shield
    },
    {
      title: "Faster Audit Logic",
      desc: "Reduce external auditor friction with high-fidelity technical proof documentation.",
      icon: Clock
    },
    {
      title: "Reduced Risk Surface",
      desc: "Identify security visibility gaps before they impact your audit outcome.",
      icon: TrendingUp
    }
  ]

  return (
    <>
      <main className="bg-white selection:bg-brand/10 selection:text-brand min-h-screen overflow-hidden">
        <UseCaseHero 
          badgeText="Compliance Logic v5.0"
          title="Stay Audit-Ready"
          highlightTitle="24/7."
          subtext="Manage compliance across all frameworks from a single platform with Contextine's high-fidelity automation engine."
          primaryBtnText="Book Demo"
          secondaryBtnText="Explore Frameworks"
          floatingIcon={CheckCircle2}
          floatingText="SOC2/ISO Ready"
        />

        <UseCasePainPoints 
            badgeText="The Operational Friction"
            title="Beyond Spreadsheet Chaos"
            painPoints={painPoints}
        />

        <UseCaseFeatures 
            badgeText="Intelligence Hub"
            title="Engineered for"
            highlightTitle="Compliance Speed."
            description="Our platform converts technical data into high-fidelity compliance logic automatically."
            features={features}
        />

        <UseCaseBenefits 
            badgeText="Business Value"
            title="Moving from reaction"
            highlightTitle="To Continuous Trust."
            benefitsList={benefits}
        />

        <UseCaseScenario 
            title="Evidence Sync"
            desc="How growing technology firms stay compliant while scaling."
            scenario="A FinTech scale-up maintaining SOC 2 compliance across 10+ pod teams by automating evidence collection globally."
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default CompilanceManagement
