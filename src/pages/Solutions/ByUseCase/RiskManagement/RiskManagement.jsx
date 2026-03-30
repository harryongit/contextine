import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { Shield, Target, Activity, Zap, TrendingUp, Star, Search, Workflow, BarChart3, Clock, AlertTriangle } from 'lucide-react'
import UseCaseHero from '../Common/UseCaseHero'
import UseCasePainPoints from '../Common/UseCasePainPoints'
import UseCaseFeatures from '../Common/UseCaseFeatures'
import UseCaseBenefits from '../Common/UseCaseBenefits'
import UseCaseScenario from '../Common/UseCaseScenario'

import GrowthStories from '../../../Home/GrowthStories'
import Blog from '../../../Home/Blog'
import CtaSection from '../../../Home/CtaSection'

const RiskManagement = () => {
  const painPoints = [
    "Lack of visibility into critical fragmented risk areas",
    "Manual tracking leading to out-of-date risk scores",
    "Inconsistent reporting for stakeholders and board"
  ]

  const features = [
    {
      title: "Risk Monitoring Dashboards",
      desc: "Visualize your entire risk surface with real-time data from every connected security tool.",
      icon: BarChart3
    },
    {
      title: "Automated Alerts",
      desc: "Instant notifications for security drifted controls that impact your risk score.",
      icon: Zap
    },
    {
      title: "Risk Scoring & Prioritization",
      desc: "Automatically score and prioritize risks based on business impact and technical severity.",
      icon: Target
    }
  ]

  const benefits = [
    {
      title: "Reduce Incidents",
      desc: "Identify and neutralize cloud misconfigurations before they manifest as breaches.",
      icon: Shield
    },
    {
      title: "Improve Oversight",
      desc: "Total transparency of your security mesh with automated resource mapping.",
      icon: TrendingUp
    },
    {
      title: "Prioritize Impact",
      desc: "Direct your limited security resources to the highest-impact risk areas first.",
      icon: Activity
    }
  ]

  return (
    <>
      <main className="bg-white selection:bg-brand/10 selection:text-brand min-h-screen overflow-hidden">
        <UseCaseHero 
          badgeText="Risk Logic v3.8"
          title="Identify and Mitigate"
          highlightTitle="Risks in Real-Time."
          subtext="Centralize risk monitoring and stay proactive with Contextine's high-fidelity visibility engine."
          primaryBtnText="Book Demo"
          secondaryBtnText="Explore Risk Hub"
          floatingIcon={AlertTriangle}
          floatingText="Zero Drift Risk"
        />

        <UseCasePainPoints 
            badgeText="Risk Friction"
            title="Beyond Scattered Data"
            painPoints={painPoints}
        />

        <UseCaseFeatures 
            badgeText="The Mitigation Core"
            title="Intelligent"
            highlightTitle="Posturing Logic."
            description="Our platform unifies fragmented infrastructure risk into a single executive dashboard."
            features={features}
        />

        <UseCaseBenefits 
            badgeText="Operational Impact"
            title="Moving from reaction"
            highlightTitle="To Absolute Oversight."
            benefitsList={benefits}
        />

        <UseCaseScenario 
            title="Mitigation Flow"
            desc="How security leads manage complex enterprise risk using Contextine."
            scenario="A global Enterprise routing cloud infrastructure risks directly to DevOps pods for immediate resolution based on severity."
        />
      </main>

      <GrowthStories />
      <Blog />
      <CtaSection />
    </>
  )
}

export default RiskManagement
