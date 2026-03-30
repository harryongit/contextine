import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { ShieldCheck, Target, Activity, Zap, TrendingUp, Star } from 'lucide-react'
import FeatureHero from '../common/FeatureHero'
import FeatureProblemSolution from '../common/FeatureProblemSolution'
import FeatureCapabilities from '../common/FeatureCapabilities'
import FeatureBenefits from '../common/FeatureBenefits'
import FeatureUseCase from '../common/FeatureUseCase'

import GrowthStories from '../../../Home/GrowthStories'
import Blog from '../../../Home/Blog'
import CtaSection from '../../../Home/CtaSection'

const ComplianceTracking = () => {
  const { scrollYProgress } = useScroll()

  const capabilities = [
    {
      title: "Automated Control Mapping",
      desc: "Automatically map your proof of compliance to framework controls like SOC2, ISO 27001, and HIPAA.",
      icon: Target
    },
    {
      title: "Deep Tech-Stack Scanning",
      desc: "Connect once and let Contextine scan your entire cloud stack for security evidence 24/7.",
      icon: Activity
    },
    {
      title: "Real-time Drift Detection",
      desc: "Get instant alerts when a control falls out of compliance, allowing for immediate corrective action.",
      icon: Zap
    }
  ]

  const benefits = [
    {
      title: "Audit Efficiency",
      desc: "Reduce audit preparation time by up to 75% with automated evidence gathering.",
      icon: TrendingUp
    },
    {
      title: "Continuous Assurance",
      desc: "Move from period-in-time checks to continuous compliance posture updates.",
      icon: ShieldCheck
    },
    {
      title: "Reduced Risk",
      desc: "Minimize human error and visibility gaps in your compliance framework.",
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
          badgeText="Precision Compliance v4.0"
          title="Automate proof"
          highlightTitle="and track compliance."
          description="Contextine's Compliance Tracking engine turns manual spreadsheet chaos into a living compliance graph with absolute certainty across every framework."
          primaryBtnText="Deploy Evidence Hub"
          secondaryBtnText="Explore Frameworks"
          floatingIcon={ShieldCheck}
          floatingText="SOC2/ISO Ready"
        />

        <FeatureProblemSolution 
            problemTitle="Evidence Fatigue"
            problemDesc="Months of manual evidence gathering and spreadsheet-based tracking lead to dangerous visibility gaps and terminal auditor frustration."
            solutionTitle="Hub Synchronization"
            solutionDesc="Contextine produces a living compliance graph by synchronizing with every layer of your security stack in real-time."
        />

        <FeatureCapabilities 
            badgeText="The Compliance Core"
            title="Precision"
            highlightTitle="Evidence Engine."
            description="Our platform connects to your cloud-stack and pulls high-fidelity technical proof automatically."
            capabilities={capabilities}
        />

        <FeatureBenefits 
            badgeText="The Compliance Velocity"
            title="Compliance is not enough."
            highlightTitle="Choose Speed."
            benefitsList={benefits}
        />

        <FeatureUseCase 
            title="Scaling with Proof"
            desc="How modern security teams leverage Contextine to maintain hyper-growth."
            scenario="A seed-stage startup automating SOC2 evidence collection to close their first Enterprise deal in record time."
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default ComplianceTracking
