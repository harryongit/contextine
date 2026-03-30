import React from 'react'
import { Shield, Target, Activity, Zap, TrendingUp, Star, Workflow, BarChart3, Briefcase, CheckCircle2 } from 'lucide-react'
import StageHero from '../common/StageHero'
import StageFeatures from '../common/StageFeatures'
import StageBenefits from '../common/StageBenefits'

import GrowthStories from '../../Home/GrowthStories'
import Blog from '../../Home/Blog'
import CtaSection from '../../Home/CtaSection'

const Enterprise = () => {
  const features = [
    {
      title: "Advanced Audit Management",
      desc: "Manage multi-framework audits across global divisions from a single high-fidelity canvas.",
      icon: Workflow
    },
    {
      title: "Risk Dashboards & Analytics",
      desc: "Executive-grade visualization of your entire organizational riskPosture and technical drift.",
      icon: BarChart3
    },
    {
      title: "Enterprise Case Management",
      desc: "Sophisticated orchestration for legal, HR, and security incidents with automated escalation.",
      icon: Briefcase
    }
  ]

  const benefits = [
    {
      title: "Faster Audits",
      desc: "Reduce global audit cycles by months by automating evidence across your entire mesh.",
      icon: Zap
    },
    {
      title: "Full Visibility",
      desc: "Total transparency of your security posture across cloud environments and business units.",
      icon: Activity
    },
    {
      title: "Scalable Operations",
      desc: "Future-proof your GRC program with an engine built to handle enterprise-scale complexity.",
      icon: Target
    }
  ]

  return (
    <>
      <main className="bg-white selection:bg-brand/10 selection:text-brand min-h-screen overflow-hidden">
        <StageHero 
          badgeText="Enterprise Scale"
          title="Give Your Team"
          highlightTitle="Time Back."
          subtext="The High-Fidelity GRC platform for complex global operations and cross-functional certainty."
          primaryBtnText="Book Demo"
          secondaryBtnText="Explore Mesh Architecture"
          floatingIcon={BarChart3}
          floatingText="Enterprise Ready"
        />

        <StageFeatures 
            badgeText="The Core Engine"
            title="Engineered for"
            highlightTitle="Complexity at Scale."
            description="Our platform unifies fragmented enterprise risk areas into a high-fidelity control mesh."
            features={features}
        />

        <StageBenefits 
            badgeText="Proven Outcome"
            title="Moving from reaction"
            highlightTitle="To Absolute Response."
            benefitsList={benefits}
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default Enterprise
