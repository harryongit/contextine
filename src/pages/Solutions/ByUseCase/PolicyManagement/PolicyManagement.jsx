import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { Shield, Target, Activity, Zap, TrendingUp, Star, Workflow, BarChart3, Clock, Layout, Newspaper, Bell } from 'lucide-react'
import UseCaseHero from '../Common/UseCaseHero'
import UseCasePainPoints from '../Common/UseCasePainPoints'
import UseCaseFeatures from '../Common/UseCaseFeatures'
import UseCaseBenefits from '../Common/UseCaseBenefits'
import UseCaseScenario from '../Common/UseCaseScenario'

import GrowthStories from '../../../Home/GrowthStories'
import Blog from '../../../Home/Blog'
import CtaSection from '../../../Home/CtaSection'

const PolicyManagement = () => {
  const painPoints = [
    "Policies scattered across various fragmented systems",
    "Manual updates that are difficult to track across teams",
    "Low employee compliance due to broken review cycles"
  ]

  const features = [
    {
      title: "Policy Library Canvas",
      desc: "Centralize every internal and regulatory policy in one high-fidelity library.",
      icon: Newspaper
    },
    {
      title: "Automated Updates",
      desc: "Notify stakeholders and tracked users automatically when policies change.",
      icon: Bell
    },
    {
      title: "Compliance Dashboards",
      desc: "Visualize your entire policy alignment posture in real-time.",
      icon: BarChart3
    }
  ]

  const benefits = [
    {
      title: "Ensure Alignment",
      desc: "Keep your entire organization synchronized with internal security standards.",
      icon: Target
    },
    {
      title: "Reduce Risk",
      desc: "Eliminate liability by ensuring 100% of employees acknowledge critical policies.",
      icon: Shield
    },
    {
      title: "Simplify Audits",
      desc: "Hand over a high-fidelity policy-ledger to auditors in seconds.",
      icon: TrendingUp
    }
  ]

  return (
    <>
      <main className="bg-white selection:bg-brand/10 selection:text-brand min-h-screen overflow-hidden">
        <UseCaseHero 
          badgeText="Governance Logic v2.8"
          title="Create, Manage,"
          highlightTitle="and Enforce Policies."
          subtext="Keep your organization aligned with internal security and regulatory requirements from one unified platform."
          primaryBtnText="Book Demo"
          secondaryBtnText="Explore Library"
          floatingIcon={Newspaper}
          floatingText="Policy Ledger"
        />

        <UseCasePainPoints 
            badgeText="Governance Load"
            title="Beyond Scattered Docs"
            painPoints={painPoints}
        />

        <UseCaseFeatures 
            badgeText="Intelligence Central"
            title="Engineered for"
            highlightTitle="Policy Fidelity."
            description="Our platform converts document complexity into clear logical governance."
            features={features}
        />

        <UseCaseBenefits 
            badgeText="The Outcome"
            title="Moving from reaction"
            highlightTitle="To Absolute Alignment."
            benefitsList={benefits}
        />

        <UseCaseScenario 
            title="Centralized Oversight"
            desc="How growing technology firms stay organized with policies."
            scenario="A Security Team managing GRC policies across 5 global regions with automated localized review notifications."
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default PolicyManagement
