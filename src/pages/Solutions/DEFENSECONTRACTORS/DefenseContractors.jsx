import React from 'react'
import { Shield, Target, Activity, Zap, TrendingUp, Star, Workflow, BarChart3, Briefcase, CheckCircle2, Search, Database } from 'lucide-react'
import StageHero from '../common/StageHero'
import StageFeatures from '../common/StageFeatures'
import StageBenefits from '../common/StageBenefits'

import GrowthStories from '../../Home/GrowthStories'
import Blog from '../../Home/Blog'
import CtaSection from '../../Home/CtaSection'

const DefenseContractors = () => {
  const features = [
    {
      title: "CMMC 2.0 Dashboards",
      desc: "Visualize your CMMC readiness against all required cybersecurity levels with precision.",
      icon: BarChart3
    },
    {
      title: "Automated Audit Reporting",
      desc: "Instant generation of evidence packets for external auditors and contract reviewers.",
      icon: Search
    },
    {
      title: "Evidence Collection Hub",
      desc: "Direct synchronization with your secure infrastructure for technical proof gathering.",
      icon: Database
    }
  ]

  const benefits = [
    {
      title: "Reduce Audit Risk",
      desc: "Neutralize CMMC compliance gaps before they manifest in failed contract audits.",
      icon: Shield
    },
    {
      title: "Save Time",
      desc: "Accelerate your path to certification by automating mapping of controls to CMMC logic.",
      icon: Zap
    },
    {
      title: "Ensure Contract Eligibility",
      desc: "Maintain constant verification required for winning and retaining defense contracts.",
      icon: Star
    }
  ]

  return (
    <>
      <main className="bg-white selection:bg-brand/10 selection:text-brand min-h-screen overflow-hidden">
        <StageHero 
          badgeText="Strategic Defense Solutions"
          title="Win and Retain"
          highlightTitle="Defense Contracts."
          subtext="Simplify CMMC standards compliance and secure your strategic infrastructure automatically."
          primaryBtnText="Book Demo"
          secondaryBtnText="Explore CMMC Guide"
          floatingIcon={Shield}
          floatingText="CMMC 2.0 Ready"
        />

        <StageFeatures 
            badgeText="The Compliance Logic"
            title="Engineered for"
            highlightTitle="Contract Security."
            description="Our platform converts CMMC complexity into clear, logical, and technical audit paths."
            features={features}
        />

        <StageBenefits 
            badgeText="Business Value"
            title="Moving from reaction"
            highlightTitle="To Contract Safety."
            benefitsList={benefits}
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default DefenseContractors
