import React from 'react'
import { BarChart3, Target, Activity, Zap, TrendingUp, Star, Search, ShieldCheck, Workflow } from 'lucide-react'
import SolutionHero from '../Common/SolutionHero'
import SolutionPainPoints from '../Common/SolutionPainPoints'
import SolutionFeatures from '../Common/SolutionFeatures'
import SolutionBenefits from '../Common/SolutionBenefits'
import SolutionUseCase from '../Common/SolutionUseCase'

import GrowthStories from '../../../Home/GrowthStories'
import Blog from '../../../Home/Blog'
import CtaSection from '../../../Home/CtaSection'

const RiskAndAuditTeams = () => {
  const painPoints = [
    "Time-consuming manual audit collection through email",
    "Extreme difficulty in tracking organization-wide risks",
    "Fragile, manual spreadsheets that break during audits"
  ]

  const features = [
    {
      title: "Automated Audit Workflows",
      desc: "Run end-to-end audits with pre-defined logical sequences for high-fidelity compliance.",
      icon: Workflow
    },
    {
      title: "Centralized Risk Dashboards",
      desc: "A single canvas to track every organizational risk and technical control automatically.",
      icon: BarChart3
    },
    {
      title: "Evidence Collection Hub",
      desc: "Direct-to-source technical evidence reporting for SOC 2, ISO 27001, and beyond.",
      icon: Search
    }
  ]

  const benefits = [
    {
      title: "Faster Audits",
      desc: "Clear audit preparation in weeks, not months, by automating the data collection cycles.",
      icon: Zap
    },
    {
      title: "Reduced Errors",
      desc: "Ensure data integrity by pulling evidence directly from technical infrastructure.",
      icon: Target
    },
    {
      title: "Full Visibility",
      desc: "Comprehensive oversight across your entire organizational riskPosture with near-perfect logic.",
      icon: TrendingUp
    }
  ]

  return (
    <>
      <main className="bg-white selection:bg-brand/10 selection:text-brand min-h-screen overflow-hidden">
        <SolutionHero 
          badgeText="For Risk & Audit"
          title="Streamline Risk"
          highlightTitle="& Audit Management."
          subtext="Run audits, track risks, and stay compliant effortlessly with Contextine's high-fidelity orchestration."
          primaryBtnText="Book Demo"
          secondaryBtnText="Explore Audit Hub"
          floatingIcon={BarChart3}
          floatingText="SOC2 Ready Logic"
        />

        <SolutionPainPoints 
            badgeText="Operational Load"
            title="Beyond Spreadsheets"
            painPoints={painPoints}
        />

        <SolutionFeatures 
            badgeText="Intelligence Platform"
            title="Engineered for"
            highlightTitle="Audit Velocity."
            description="Our platform converts technical data into executive-grade audit insights automatically."
            features={features}
        />

        <SolutionBenefits 
            badgeText="Outcome Focus"
            title="Moving from reaction"
            highlightTitle="To Risk Certainty."
            benefitsList={benefits}
        />

        <SolutionUseCase 
            title="Audit Velocity"
            desc="How security-conscious teams use Contextine to scale audit frequency."
            scenario="A high-scale E-commerce platform running quarterly internal audits to maintain zero-drift compliance posture."
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default RiskAndAuditTeams
