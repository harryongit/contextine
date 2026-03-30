import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { Shield, Target, Activity, Zap, TrendingUp, Star, Search, Workflow, BarChart3, Clock } from 'lucide-react'
import UseCaseHero from '../Common/UseCaseHero'
import UseCasePainPoints from '../Common/UseCasePainPoints'
import UseCaseFeatures from '../Common/UseCaseFeatures'
import UseCaseBenefits from '../Common/UseCaseBenefits'
import UseCaseScenario from '../Common/UseCaseScenario'

import GrowthStories from '../../../Home/GrowthStories'
import Blog from '../../../Home/Blog'
import CtaSection from '../../../Home/CtaSection'

const AuditAutomation = () => {
  const painPoints = [
    "Manual audit tracking that leads to documentation debt",
    "Error-prone spreadsheets that crash under audit scrutiny",
    "Time-intensive manual evidence collection cycles"
  ]

  const features = [
    {
      title: "Prebuilt Audit Workflows",
      desc: "Deploy pre-configured logical audit sequences for SOC 2, ISO 27001, and HIPAA in minutes.",
      icon: Workflow
    },
    {
      title: "Evidence Collection Hub",
      desc: "Synchronize directly with your cloud stack to pull technical evidence automatically.",
      icon: Search
    },
    {
      title: "Audit Reporting Dashboards",
      desc: "Generate high-fidelity audit reports for internal and external stakeholders with one-click.",
      icon: BarChart3
    }
  ]

  const benefits = [
    {
      title: "Faster Audits",
      desc: "Reduce audit cycle times by up to 70% with automated technical orchestration.",
      icon: Clock
    },
    {
      title: "Reduced Errors",
      desc: "Eliminate data integrity issues by removing manual spreadsheet entry from the loop.",
      icon: Target
    },
    {
      title: "Compliance Readiness",
      desc: "Stay in a permanent state of audit-readiness with continuous technical evidence sync.",
      icon: Shield
    }
  ]

  return (
    <>
      <main className="bg-white selection:bg-brand/10 selection:text-brand min-h-screen overflow-hidden">
        <UseCaseHero 
          badgeText="Audit Logic v4.2"
          title="Automate Your"
          highlightTitle="Audits End-to-End."
          subtext="Collect evidence, run audits, and generate high-fidelity reports automatically with Contextine's orchestration engine."
          primaryBtnText="Book Demo"
          secondaryBtnText="Explore Workflow"
          floatingIcon={Workflow}
          floatingText="Audit Ready"
        />

        <UseCasePainPoints 
            badgeText="The Operational Load"
            title="Beyond Manual Review"
            painPoints={painPoints}
        />

        <UseCaseFeatures 
            badgeText="Technical Engine"
            title="High-Fidelity"
            highlightTitle="Audit Intelligence."
            description="Our platform unifies fragmented security data into a permanent audit logic."
            features={features}
        />

        <UseCaseBenefits 
            badgeText="Business Impact"
            title="Moving from reaction"
            highlightTitle="To Continuous Assurance."
            benefitsList={benefits}
        />

        <UseCaseScenario 
            title="Evidence Clarity"
            desc="How security leads manage complex audit cycles using Contextine."
            scenario="A FinTech startup clearing their SOC 2 Type 1 and Type 2 audits in record time by automating 90% of technical evidence collection."
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default AuditAutomation
