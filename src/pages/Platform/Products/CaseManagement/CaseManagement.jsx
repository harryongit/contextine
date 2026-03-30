import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { Activity, UserCheck, LayoutList, ZapOff, Layout, Zap, ChevronsUp, Eye, Scale, ShieldAlert } from 'lucide-react'
import Hero from '../common/Hero'
import PainPoints from '../common/PainPoints'
import Features from '../common/Features'
import Benefits from '../common/Benefits'
import UseCases from '../common/UseCases'


import GrowthStories from '../../../Home/GrowthStories'
import Blog from '../../../Home/Blog'
import CtaSection from '../../../Home/CtaSection'

const CaseManagement = () => {
  const { scrollYProgress } = useScroll()

  const problems = [
    {
      title: "Disorganized Case Tracking",
      desc: "Disconnected tools and scattered communication lead to dangerous visibility gaps and information silos.",
      icon: LayoutList,
      color: "text-rose-500",
      bg: "bg-rose-500/5",
      border: "border-rose-500/10"
    },
    {
      title: "The Slow Resolution Cycle",
      desc: "Manual hand-offs and lack of automation create bottlenecks that delay critical resolution for days or weeks.",
      icon: ZapOff,
      color: "text-amber-500",
      bg: "bg-amber-500/5",
      border: "border-amber-500/10"
    }
  ]

  const features = [
    {
      title: "Complete Case Lifecycle Tracking",
      desc: "From initial report to final resolution, get a unified view of your entire case history with deep chronological depth.",
      icon: Layout,
      color: "text-brand",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      title: "Intelligent Workflow Automation",
      desc: "Define custom resolution paths that trigger instantly based on case type, priority, and source.",
      icon: Zap,
      color: "text-emerald-600",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Automated Assignment & Escalation",
      desc: "Never let a case sit stagnant. Smart routing and SLA-based escalation keep your response team moving at full speed.",
      icon: ChevronsUp,
      color: "text-blue-500",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    }
  ]

  const benefits = [
    {
      title: "Accelerated Resolution",
      metric: "40%",
      sub: "Faster Mean-Time-To-Resolve (MTTR)",
      desc: "Automation and centralized workflows cut down on manual overhead and idle case time.",
      icon: Zap,
      color: "text-brand"
    },
    {
      title: "360-Degree Visibility",
      metric: "100%",
      sub: "End-to-end case transparency",
      desc: "Get real-time updates on case status and audit-ready logs for every interaction in your workspace.",
      icon: Eye,
      color: "text-emerald-500"
    }
  ]

  const useCases = [
    {
      title: "Legal Operations & Discovery",
      desc: "Manage legal holds, e-discovery, and litigation workflows with bulletproof audit trails and unified case tracking.",
      icon: Scale,
      color: "text-brand",
      bg: "bg-indigo-50",
      border: "border-indigo-100/50"
    },
    {
      title: "Security & Incident Response",
      desc: "Close security incidents faster with automated triage, evidence gathering, and stakeholder assignment.",
      icon: ShieldAlert,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      border: "border-emerald-100/50"
    }
  ]

  return (
    <>
      <main className="bg-slate-50 selection:bg-brand/10 selection:text-brand min-h-screen overflow-hidden">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="fixed left-6 top-0 w-0.5 h-full bg-linear-to-b from-brand/5 via-brand/30 to-brand/5 origin-top z-50 hidden xl:block"
        />

        <Hero 
          badgeText="Resolution Nexus v3.1"
          title="Manage and resolve"
          highlightTitle="cases efficiently."
          description="Contextine Case Management turns chaotic tracking into a streamlined resolution engine. Closing cases faster with zero visibility gaps."
          primaryBtnText="Open Discovery Session"
          secondaryBtnText="Explore Workflows"
          floatingIcon={UserCheck}
          floatingText="Instant Assign"
        />

        <PainPoints 
          badgeText="The Resolution Friction Gap"
          title="Chaos is the enemy"
          highlightTitle="of resolution."
          description="Legacy tools were built for storage, not for action. When it comes to critical incidents, every second matters."
          problems={problems}
        />

        <Features 
          badgeText="Precision Resolution Features"
          title="Designed for"
          highlightTitle="High-Stakes Environments."
          description="Contextine provides the technical depth and operational scale for absolute certainty in resolution."
          featuresList={features}
        />

        <Benefits 
          badgeText="Exceptional Outcomes"
          title="Moving from reaction"
          highlightTitle="To Resolution Velocity."
          description="Contextine's case management engine is built on absolute certainty. We help you turn resolution into a competitive advantage."
          benefitsList={benefits}
        />

        <UseCases 
          badgeText="Flexible Use Cases"
          title="Engineered for"
          highlightTitle="Complexity at Scale."
          description="From incident response to complex legal operations, Contextine provides absolute certainty."
          useCasesList={useCases}
          ctaTitle="Scale resolution with certainty."
          ctaBtnText="Get an Expert Demo"
        />
      </main>
      
      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default CaseManagement
