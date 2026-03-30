import React from 'react'
import { ShieldCheck, Target, Activity, Zap, TrendingUp, Star, Shield } from 'lucide-react'
import SolutionHero from '../Common/SolutionHero'
import SolutionPainPoints from '../Common/SolutionPainPoints'
import SolutionFeatures from '../Common/SolutionFeatures'
import SolutionBenefits from '../Common/SolutionBenefits'
import SolutionUseCase from '../Common/SolutionUseCase'

import GrowthStories from '../../../Home/GrowthStories'
import Blog from '../../../Home/Blog'
import CtaSection from '../../../Home/CtaSection'

const ComplianceTeams = () => {
  const painPoints = [
    "Manual compliance processes that drain resources",
    "Audit preparation stress and visibility gaps",
    "Fragmented tools that don't talk to each other"
  ]

  const features = [
    {
      title: "Audit Automation",
      desc: "Simplify the entire audit cycle with automated evidence collection and framework mapping.",
      icon: Zap
    },
    {
      title: "Compliance Tracking",
      desc: "Stay audit-ready 24/7 with real-time tracking across all your technical and operational controls.",
      icon: ShieldCheck
    },
    {
      title: "Real-time Dashboards",
      desc: "Get instant visibility into your compliance posture with executive-grade visualization.",
      icon: Shield
    }
  ]

  const benefits = [
    {
      title: "Save Time",
      desc: "Reduce manual effort by up to 80% through automated orchestration of compliance workflows.",
      icon: TrendingUp
    },
    {
      title: "Reduce Errors",
      desc: "Eliminate human error and data entry lapses with direct technical stack synchronization.",
      icon: Target
    },
    {
      title: "Continuous Compliance",
      desc: "Maintain a state of permanent audit-readiness instead of seasonal firefighting.",
      icon: Star
    }
  ]

  return (
    <>
      <main className="bg-white selection:bg-brand/10 selection:text-brand min-h-screen overflow-hidden">
        <SolutionHero 
          badgeText="For Compliance Teams"
          title="Simplify Compliance"
          highlightTitle="for Your Team."
          subtext="Automate workflows, stay audit-ready, and reduce risk with Contextine's high-fidelity governance engine."
          primaryBtnText="Book Demo"
          secondaryBtnText="Get Started"
          floatingIcon={ShieldCheck}
          floatingText="SOC2/ISO Ready"
        />

        <SolutionPainPoints 
            title="The Cost of Manual Governance"
            painPoints={painPoints}
        />

        <SolutionFeatures 
            badgeText="The Platform Solution"
            title="High-Fidelity"
            highlightTitle="Compliance Hub."
            description="Contextine unifies your entire compliance lifecycle into a single canvas for absolute certainty."
            features={features}
        />

        <SolutionBenefits 
            badgeText="Operational Impact"
            title="Compliance is more"
            highlightTitle="than just a checkbox."
            benefitsList={benefits}
        />

        <SolutionUseCase 
            title="Evidence Velocity"
            desc="How modern compliance teams leverage Contextine platform for growth."
            scenario="A high-growth FinTech firm automating SOC2 and GDPR evidence gathering to clear Enterprise security reviews in half the time."
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default ComplianceTeams
