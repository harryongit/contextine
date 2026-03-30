import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { Activity, ShieldCheck, Gavel, TriangleAlert, FileCheck, SearchCode, FileText, Target, Layout } from 'lucide-react'
import Hero from '../common/Hero'
import PainPoints from '../common/PainPoints'
import Features from '../common/Features'
import Benefits from '../common/Benefits'


import GrowthStories from '../../../Home/GrowthStories'
import Blog from '../../../Home/Blog'
import CtaSection from '../../../Home/CtaSection'

const GRC = () => {
  const { scrollYProgress } = useScroll()

  const problems = [
    {
      title: "Governance",
      desc: "Set the standard for your organization with integrated policy mapping and unified decision-making frameworks.",
      icon: Gavel,
      color: "text-brand",
      bg: "bg-indigo-50",
      border: "border-indigo-100/50"
    },
    {
      title: "Risk Management",
      desc: "Identify, assess, and mitigate risks in real-time before they impact your business operations.",
      icon: TriangleAlert,
      color: "text-amber-500",
      bg: "bg-amber-500/5",
      border: "border-amber-500/10"
    },
    {
      title: "Compliance",
      desc: "Automate tracking across multiple frameworks like SOC2, ISO, and HIPAA with one unified Hub.",
      icon: FileCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-500/5",
      border: "border-emerald-500/10"
    }
  ]

  const features = [
    {
      title: "Continuous Risk Identification",
      desc: "Our engine automatically detects and surfaces organizational risks by scanning your digital footprint 24/7.",
      icon: SearchCode,
      color: "text-brand",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Dynamic Policy Management",
      desc: "Create and manage your policies with automated version control and distributed stakeholder sign-off.",
      icon: FileText,
      color: "text-emerald-600",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Real-time Compliance Tracking",
      desc: "Get an instant, high-fidelity view of your compliance health across SOC2, ISO, HIPAA and much more.",
      icon: Target,
      color: "text-blue-500",
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2070&auto=format&fit=crop"
    }
  ]

  const benefits = [
    {
      title: "Centralized Control",
      metric: "100%",
      sub: "Unified visibility across silos",
      desc: "Set the standard once and govern everywhere. From infrastructure to HR, everything is unified.",
      icon: Layout,
      color: "text-brand"
    },
    {
      title: "Significant Risk Reduction",
      metric: "65%",
      sub: "Decrease in potential risk exposure",
      desc: "Automated risk surfacing and tracking reduces the gap between detection and correction.",
      icon: ShieldCheck,
      color: "text-emerald-500"
    },
    {
      title: "Constant Audit Readiness",
      metric: "24/7",
      sub: "Continuously monitoring compliance",
      desc: "Shift from periodic checks to continuous audit readiness with high-fidelity evidence gathering.",
      icon: Target,
      color: "text-blue-500"
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
          badgeText="Governance Mesh Hub v4.0"
          title="Simplify governance,"
          highlightTitle="risk, and compliance."
          description="Contextine GRC turns complex obligations into an effortless advantage. Governs with absolute certainty across the fabric."
          primaryBtnText="Explore the Hub"
          secondaryBtnText="View Compliance List"
          floatingIcon={ShieldCheck}
          floatingText="Audit Ready"
        />

        <PainPoints 
          badgeText="The GRC Trinity"
          title="Unified protection"
          highlightTitle="Across every layer."
          description="Contextine's platform is built to handle the technical depth and operational scale of modern enterprises."
          problems={problems}
        />

        <Features 
          badgeText="High-Performance GRC"
          title="Engineered for"
          highlightTitle="Operational Scale."
          description="Contextine's features provide absolute certainty across your governance workflow."
          featuresList={features}
        />

        <Benefits 
          badgeText="Unmatched Competitive Advantage"
          title="GRC as a catalyst."
          highlightTitle="For Accelerated Growth."
          description="Moving security from an obligation to an unfair advantage with Contextine's absolute GRC certainty."
          benefitsList={benefits}
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default GRC
