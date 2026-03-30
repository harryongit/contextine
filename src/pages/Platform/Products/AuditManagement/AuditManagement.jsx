import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { Activity, ShieldCheck, FileX, ShieldAlert, TimerOff, Zap, Database, Layout, Gauge, Star } from 'lucide-react'
import Hero from '../common/Hero'
import PainPoints from '../common/PainPoints'
import Features from '../common/Features'
import Benefits from '../common/Benefits'
import UseCases from '../common/UseCases'

import GrowthStories from '../../../Home/GrowthStories'
import Blog from '../../../Home/Blog'
import CtaSection from '../../../Home/CtaSection'


const AuditManagement = () => {
  const { scrollYProgress } = useScroll()

  const problems = [
    {
      title: "The Manual Evidence Trap",
      desc: "Months of manual evidence gathering and spreadsheet-based tracking that leads to auditor frustration.",
      icon: FileX,
      color: "text-rose-500",
      bg: "bg-rose-500/5",
      border: "border-rose-500/10"
    },
    {
      title: "The Scattered Data Maze",
      desc: "Disconnected tools for audit and risk management create dangerous visibility gaps and duplicate efforts.",
      icon: ShieldAlert,
      color: "text-amber-500",
      bg: "bg-amber-500/5",
      border: "border-amber-500/10"
    },
    {
      title: "The Time-Consuming Fatigue",
      desc: "Audit preparation and compliance updates are always behind, leaving your organization exposed for weeks.",
      icon: TimerOff,
      color: "text-indigo-400",
      bg: "bg-indigo-500/5",
      border: "border-indigo-500/10"
    }
  ]

  const features = [
    {
      title: "Automated Audit Workflows",
      desc: "Orchestrate your entire audit lifecycle from preparation to sign-off with dynamic automated sequences.",
      icon: Zap,
      color: "text-emerald-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Evidence Collection Engine",
      desc: "Connect once, collect forever. Our engine pulls evidence from your cloud stack in 24-bit fidelity automatically.",
      icon: Database,
      color: "text-brand",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2026&auto=format&fit=crop"
    },
    {
      title: "Real-time Audit Tracking",
      desc: "Stop guessing your status. Our live canvas shows exact completion percentages for every control in your audit.",
      icon: Layout,
      color: "text-blue-500",
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2070&auto=format&fit=crop"
    }
  ]

  const benefits = [
    {
      title: "Faster Audits",
      metric: "75%",
      sub: "Reduction in preparation time",
      desc: "Automate the drudgery of evidence gathering and preparation to complete audits weeks ahead of schedule.",
      icon: Gauge,
      color: "text-brand"
    },
    {
      title: "Reduced Errors",
      metric: "99%",
      sub: "Accuracy in evidence mapping",
      desc: "Our AI-powered engine automatically maps evidence to controls with near-perfect precision, eliminating manual oversight.",
      icon: Star,
      color: "text-emerald-500"
    },
    {
      title: "Better Compliance",
      metric: "24/7",
      sub: "Continuous audit monitoring",
      desc: "Moving from period-in-time checks to continuous compliance posture updates across your entire digital infrastructure.",
      icon: ShieldCheck,
      color: "text-indigo-600"
    }
  ]

  const useCases = [
    {
      title: "Internal Audits",
      desc: "Continuously monitor and manage your internal controls, policy compliance, and risk registers.",
      icon: ShieldCheck,
      color: "text-brand",
      bg: "bg-indigo-50",
      border: "border-indigo-100/50"
    },
    {
      title: "External Audits",
      desc: "Manage SOC2, ISO 27001, and HIPAA audits with seamless external auditor collaboration.",
      icon: Activity,
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
          badgeText="Smart Compliance Engine v2.0"
          title="Automate and"
          highlightTitle="simplify audits."
          description="From manual evidence gathering to real-time risk visibility. Contextine handles the heavy lifting of audit preparation."
          primaryBtnText="Start Your First Audit"
          secondaryBtnText="Watch Demo"
          floatingIcon={ShieldCheck}
          floatingText="SOC2/ISO Ready"
        />

        <PainPoints 
          badgeText="The Audit Friction Gap"
          title="The traditional audit"
          highlightTitle="is fundamentally broken."
          description="Traditional tools are designed for static reports. In today's landscape, you need real-time certainty."
          problems={problems}
        />

        <Features 
          badgeText="Precision Audit Features"
          title="Engineered for"
          highlightTitle="Absolute Certainty."
          description="Contextine creates a living compliance graph by synchronizing with every layer of your security stack."
          featuresList={features}
        />

        <Benefits 
          badgeText="Value Driven Impact"
          title="Compliance is not enough."
          highlightTitle="Choose Velocity."
          description="Contextine doesn't just help you pass audits; it helps you build a culture of iron-clad governance."
          benefitsList={benefits}
        />

        <UseCases 
          badgeText="Flexible Use Cases"
          title="Built for"
          highlightTitle="Every Modern Enterprise."
          description="From seed-stage startups to Fortune 500 companies, Contextine provides absolute certainty."
          useCasesList={useCases}
          ctaTitle="Ready to automate your audits?"
          ctaBtnText="Book an Audit Roadmap"
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default AuditManagement
