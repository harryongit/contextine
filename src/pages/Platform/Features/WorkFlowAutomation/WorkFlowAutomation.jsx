import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { Zap, Target, Activity, CheckCircle2, TrendingUp, Star, GitPullRequest } from 'lucide-react'
import FeatureHero from '../common/FeatureHero'
import FeatureProblemSolution from '../common/FeatureProblemSolution'
import FeatureCapabilities from '../common/FeatureCapabilities'
import FeatureBenefits from '../common/FeatureBenefits'
import FeatureUseCase from '../common/FeatureUseCase'

import GrowthStories from '../../../Home/GrowthStories'
import Blog from '../../../Home/Blog'
import CtaSection from '../../../Home/CtaSection'

const WorkFlowAutomation = () => {
  const { scrollYProgress } = useScroll()

  const capabilities = [
    {
      title: "Automated Incident Routing",
      desc: "Assign security alerts and compliance fixes to the right engineer instantly based on resource ownership.",
      icon: GitPullRequest
    },
    {
      title: "Remediation Blueprints",
      desc: "Create logical remediation paths that guide stakeholders from detection to resolution automatically.",
      icon: Activity
    },
    {
      title: "SLA-Based Escalation",
      desc: "Never let a risk sit stagnant. Automated escalations ensure corporate response to critical security items.",
      icon: Zap
    }
  ]

  const benefits = [
    {
      title: "Resolution Velocity",
      desc: "Accelerate your Mean-Time-To-Resolve (MTTR) with automated triage and resource routing.",
      icon: TrendingUp
    },
    {
      title: "Operational Scale",
      desc: "Handle 10x more compliance checks without increasing your security head count.",
      icon: Zap
    },
    {
      title: "Absolute Response",
      desc: "Know exactly who is working on what, with bulletproof audit trails of every automated correction.",
      icon: CheckCircle2
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
          badgeIcon={Zap}
          badgeText="Automation Engine v5.0"
          title="Automate the heavy"
          highlightTitle="governance workflows."
          description="Contextine's Automation Engine handles triage, assignment, and escalation. Bridge the gap between detection and absolute correction."
          primaryBtnText="Deploy Logical Hub"
          secondaryBtnText="Explore Workflows"
          floatingIcon={CheckCircle2}
          floatingText="Instant Remediate"
        />

        <FeatureProblemSolution 
            problemTitle="The Triage Gap"
            problemDesc="Manual hand-offs and static checklists create dangerous bottlenecks. Security teams are overwhelmed, and corporate resolution is delayed by weeks."
            solutionTitle="Orchestration"
            solutionDesc="Contextine orchestrates your entire governance hub from detection to closure with absolute certainty at scale."
        />

        <FeatureCapabilities 
            badgeText="Orchestration Hub"
            title="Accelerate"
            highlightTitle="Security Velocity."
            description="Our engine creates logical remediation paths for every technical alert automatically."
            capabilities={capabilities}
        />

        <FeatureBenefits 
            badgeText="Speed Focus"
            title="Moving from reaction"
            highlightTitle="To Absolute Response."
            benefitsList={benefits}
        />

        <FeatureUseCase 
            title="Incident Workflow"
            desc="How automated triage accelerates deep risk mitigation."
            scenario="A global E-commerce platform automatically routing cloud misconfigurations to specific DevOps pods in seconds."
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default WorkFlowAutomation
