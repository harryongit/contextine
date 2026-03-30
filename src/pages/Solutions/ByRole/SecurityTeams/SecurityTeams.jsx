import React from 'react'
import { Shield, Target, Activity, Zap, TrendingUp, Star, Search, ShieldCheck } from 'lucide-react'
import SolutionHero from '../Common/SolutionHero'
import SolutionPainPoints from '../Common/SolutionPainPoints'
import SolutionFeatures from '../Common/SolutionFeatures'
import SolutionBenefits from '../Common/SolutionBenefits'
import SolutionUseCase from '../Common/SolutionUseCase'

import GrowthStories from '../../../Home/GrowthStories'
import Blog from '../../../Home/Blog'
import CtaSection from '../../../Home/CtaSection'

const SecurityTeams = () => {
  const painPoints = [
    "Lack of visibility into fragmented risks across cloud stacks",
    "Scattered security controls that lead to fatal bypasses",
    "Slow incident response cycles hindered by broken data"
  ]

  const features = [
    {
      title: "Risk Monitoring Canvas",
      desc: "Visualize your entire threat landscape from a single platform with near-perfect fidelity.",
      icon: Search
    },
    {
      title: "Continuous Compliance Alerts",
      desc: "Instant notifications for security drifted controls, allowing for zero-latency mitigation.",
      icon: Zap
    },
    {
      title: "Automated Security Reports",
      desc: "Generate high-fidelity security posture reports for stakeholders and executive boards.",
      icon: ShieldCheck
    }
  ]

  const benefits = [
    {
      title: "Reduce Incidents",
      desc: "Identify and neutralize cloud misconfigurations before they manifest as critical breaches.",
      icon: TrendingUp
    },
    {
      title: "Improve Oversight",
      desc: "Total transparency of your security mesh with automated resource ownership mapping.",
      icon: Target
    },
    {
      title: "Centralize Risk Data",
      desc: "Replace fragmented spreadsheets with a high-fidelity graph of your organizational risk.",
      icon: Activity
    }
  ]

  return (
    <>
      <main className="bg-white selection:bg-brand/10 selection:text-brand min-h-screen overflow-hidden">
        <SolutionHero 
          badgeText="For Security Teams"
          title="Strengthen Your"
          highlightTitle="Security Posture."
          subtext="Monitor, detect, and mitigate risks from a single platform with absolute certainty at cloud-scale."
          primaryBtnText="Book Demo"
          secondaryBtnText="Explore Mesh"
          floatingIcon={Shield}
          floatingText="Active Mitigate"
        />

        <SolutionPainPoints 
            badgeText="The Security Friction"
            title="The Gap in Security Logic"
            painPoints={painPoints}
        />

        <SolutionFeatures 
            badgeText="The Platform Logic"
            title="Engineered for"
            highlightTitle="Proactive Mitigation."
            description="Our mesh architecture puts the control back into your team's hands automatically."
            features={features}
        />

        <SolutionBenefits 
            badgeText="Security Outcome"
            title="Moving from reaction"
            highlightTitle="To Absolute Response."
            benefitsList={benefits}
        />

        <SolutionUseCase 
            title="Threat Orchestration"
            desc="How security leads manage complex cloud risk environments using Contextine."
            scenario="A global Enterprise routing infrastructure misconfigurations directly to DevOps pods for immediate resolution."
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default SecurityTeams
