import React from 'react'
import { Briefcase, Target, Activity, Zap, TrendingUp, Star, Workflow, Layout, CheckCircle2 } from 'lucide-react'
import SolutionHero from '../Common/SolutionHero'
import SolutionPainPoints from '../Common/SolutionPainPoints'
import SolutionFeatures from '../Common/SolutionFeatures'
import SolutionBenefits from '../Common/SolutionBenefits'
import SolutionUseCase from '../Common/SolutionUseCase'

import GrowthStories from '../../../Home/GrowthStories'
import Blog from '../../../Home/Blog'
import CtaSection from '../../../Home/CtaSection'

const LegalAndOperations = () => {
  const painPoints = [
    "Case tracking chaos across fragmented emails and chats",
    "Dangerous delays in resolution of critical legal items",
    "Fragmented tools that slow down operational velocity"
  ]

  const features = [
    {
      title: "Case Management Canvas",
      desc: "A single, high-fidelity dashboard for tracking cases, incidents, and legal matters.",
      icon: Layout
    },
    {
      title: "Workflow Automation",
      desc: "Assign and automate case lifecycle from intake to absolute resolution.",
      icon: Workflow
    },
    {
      title: "Escalation Logic",
      desc: "Automated routing and escalation to ensure the right stakeholders are always updated.",
      icon: TrendingUp
    }
  ]

  const benefits = [
    {
      title: "Faster Resolution",
      desc: "Close more cases in less time by removing operational technical debt from your cycles.",
      icon: Zap
    },
    {
      title: "Better Visibility",
      desc: "Real-time oversight into your entire case and legal roadmap with high-fidelity analytics.",
      icon: Target
    },
    {
      title: "Streamlined Ops",
      desc: "A unified canvas that converts complexity into clear operational logic.",
      icon: CheckCircle2
    }
  ]

  return (
    <>
      <main className="bg-white selection:bg-brand/10 selection:text-brand min-h-screen overflow-hidden">
        <SolutionHero 
          badgeText="For Legal Ops"
          title="Manage Cases &"
          highlightTitle="Workflows Efficiently."
          subtext="Track legal matters, incidents, and policies seamlessly across your entire organization."
          primaryBtnText="Book Demo"
          secondaryBtnText="Explore Workflow"
          floatingIcon={Briefcase}
          floatingText="Legal Ops v3.0"
        />

        <SolutionPainPoints 
            badgeText="Operational Load"
            title="The Resolution Gap"
            painPoints={painPoints}
        />

        <SolutionFeatures 
            badgeText="High-Fidelity Platform"
            title="Engineered for"
            highlightTitle="Operational Velocity."
            description="Our platform converts legal complexity into simple, high-fidelity orchestration."
            features={features}
        />

        <SolutionBenefits 
            badgeText="The Contextine Advantage"
            title="Moving from chaos"
            highlightTitle="To Absolute Response."
            benefitsList={benefits}
        />

        <SolutionUseCase 
            title="Matter Management"
            desc="How modern legal teams scale operational capacity using Contextine."
            scenario="A high-scale Legal Ops team tracking 500+ litigation matters with automated resource indicators and SLA notifications."
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default LegalAndOperations
