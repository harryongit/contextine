import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Hero from '../HeroSectionResources.jsx';
import GrowthStories from '../../Home/GrowthStories.jsx';
import CtaSection from '../../Home/CtaSection.jsx';
import { motion } from 'framer-motion';

const frameworkData = {
  soc2: {
    heroType: "soc2",
    badge: "Trust Standard",
    title: "Master Your SOC 2 Audit",
    text: "Contextine automates evidence collection across Security, Availability, Processing Integrity, Confidentiality, and Privacy criteria.",
    features: ["AICPA Control Mapping", "Continuous Monitoring", "Auditor Dashboards", "Automated TSC Checklists"],
    color: "indigo",
    benefits: [
      { id: "01", title: "Type II Performance", desc: "Maintain your posture 24/7 with automated look-back evidence.", color: "indigo" },
      { id: "02", title: "Trust Services Criteria", desc: "Expertly mapped controls for all five SOC 2 trust principles.", color: "green" },
      { id: "03", title: "Fast-Track Audit", desc: "Reduce auditor friction with pre-packaged documentation packs.", color: "amber" }
    ]
  },
  iso27001: {
    heroType: "iso27001",
    badge: "Global Standard",
    title: "ISO 27001 ISMS Suite",
    text: "Scale your Information Security Management System internationally. Align with ISO/IEC 27001:2022 standards effortlessly.",
    features: ["Annex A Automation", "SoA Builder", "Risk Assessment Hub", "Policy Approval Workflows"],
    color: "green",
    benefits: [
      { id: "01", title: "Annex A Compliance", desc: "Automate technical evidence for all ISO security controls.", color: "indigo" },
      { id: "02", title: "Global Certification", desc: "Prove your compliance to international enterprise clients easily.", color: "green" },
      { id: "03", title: "Scalable Governance", desc: "Manage your ISMS lifecycle from one central dashboard.", color: "amber" }
    ]
  },
  gdpr: {
    heroType: "gdpr",
    badge: "Privacy First",
    title: "GDPR Privacy Hub",
    text: "Simplify EU data protection. Manage DPOs, DSARs, and DPIAs within a single, compliant workspace.",
    features: ["DSAR Workflows", "Automated ROPA Mapping", "DPIA Builder", "Data Transfer Tracking"],
    color: "red",
    benefits: [
      { id: "01", title: "EU Regulatory Fit", desc: "Stay ahead of evolving European data privacy requirements.", color: "indigo" },
      { id: "02", title: "Data Subject Privacy", desc: "Efficiently handle subject access requests at enterprise scale.", color: "green" },
      { id: "03", title: "Fine Avoidance", desc: "Ensure continuous compliance to mitigate regulatory risk.", color: "amber" }
    ]
  },
  pcidss: {
    heroType: "pcidss",
    badge: "Payments",
    title: "PCI DSS Security",
    text: "Secure your cardholder data environment. Contextine automates SAQ-D audits and maintains your CDE security posture.",
    features: ["CDE Isolation Monitoring", "SAQ-D Automation", "Vulnerability Scans", "Cardholder Data Logs"],
    color: "blue",
    benefits: [
      { id: "01", title: "Transaction Trust", desc: "Enable frictionless payments with verified level-1 security.", color: "indigo" },
      { id: "02", title: "Network Security", desc: "Continuously monitor and secure your payment pipelines.", color: "green" },
      { id: "03", title: "Audit Automation", desc: "Gather evidence for all 12 PCI requirements automatically.", color: "amber" }
    ]
  },
  hipaa: {
    heroType: "hipaa",
    badge: "Health Protection",
    title: "HIPAA PHI Security",
    text: "Protect patient health data according to US federal laws. Manage BAAs and security policies with medical-grade precision.",
    features: ["PHI Encryption Hub", "BAA Management", "OCR Readiness Packs", "Strict Access Control"],
    color: "blue",
    benefits: [
      { id: "01", title: "Patient Privacy", desc: "Build healthcare systems based on uncompromising data security.", color: "indigo" },
      { id: "02", title: "OCR Audit Ready", desc: "Prepare for federal audits with one-click report exports.", color: "green" },
      { id: "03", title: "BAA Workflow", desc: "Centralize agreements for every health-tech partner.", color: "amber" }
    ]
  },
  'nist-ai': {
    heroType: "nist-ai",
    badge: "AI Governance",
    title: "NIST AI RMF Hub",
    text: "Develop trustworthy AI. Govern your machine learning models and training loops with our NIST-tailored GRC system.",
    features: ["Bias Risk Assessment", "Model Metric Tracking", "AI Governance Framework", "Training Data Lineage"],
    color: "indigo",
    benefits: [
      { id: "01", title: "Trustworthy ML", desc: "Scale AI projects while adhering to the NIST risk framework.", color: "indigo" },
      { id: "02", title: "Ethical AI Policy", desc: "Automate policy distribution for your data science teams.", color: "green" },
      { id: "03", title: "Model Transparency", desc: "Verify and track the performance of your AI assets.", color: "amber" }
    ]
  },
  custom: {
    heroType: "custom",
    badge: "Flexible GRC",
    title: "Custom Compliance Hub",
    text: "Build compliance your way. Create bespoke controls and map unique internal requirements to our automation engine for tailored industry needs.",
    features: ["Custom Control Builder", "Tailored Evidence Pipelines", "Multi-Framework Mapping", "Dynamic Dashboard Tags"],
    color: "amber",
    benefits: [
      { id: "01", title: "Hyper-Specific GRC", desc: "Address niche regulatory requirements that haven't been standardized yet.", color: "indigo" },
      { id: "02", title: "Internal Security Baseline", desc: "Establish your own 'Gold Standard' and track it across the organization.", color: "green" },
      { id: "03", title: "Future-Proof Design", desc: "Modify your custom frameworks as your business requirements evolve.", color: "amber" }
    ]
  },
  all: {
    heroType: "all-frameworks",
    badge: "Full Library",
    title: "Global Framework Hub",
    text: "Access over 60+ frameworks from around the globe. Contextine's cross-mapping engine ensures that when you comply with one, you're on the path to all.",
    features: ["Cross-Framework Mapping", "Global Regulatory Library", "One-Click Deployment", "Audit-Ready Aggregation"],
    color: "indigo",
    benefits: [
      { id: "01", title: "Unprecedented Coverage", desc: "Scale from local privacy laws to international enterprise standards.", color: "indigo" },
      { id: "02", title: "Efficiency Boost", desc: "Leverage 'collect once, apply many' technology to reduce work by 90%.", color: "green" },
      { id: "03", title: "Unified Oversight", desc: "Visualize your entire global compliance posture in one powerful view.", color: "amber" }
    ]
  }
};

export default function FrameworkHub() {
  const { id } = useParams();
  const data = frameworkData[id];

  if (!data) return <Navigate to="/framework-guides" />;

  const colorStyles = {
    indigo: "bg-indigo-600",
    green: "bg-green-600",
    red: "bg-red-600",
    blue: "bg-blue-600",
    amber: "bg-amber-600"
  };

  const textStyles = {
    indigo: "text-indigo-600",
    green: "text-green-600",
    red: "text-red-600",
    blue: "text-blue-600",
    amber: "text-amber-600"
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Hero type={data.heroType} />

      {/* Main Content Section */}
      <section className="py-20 md:py-32 bg-[#FAF8F5] border-t-[3px] border-[#0B1521] border-dashed font-sans">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Left Content */}
            <div className="lg:w-[55%]">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 border-2 border-[#0B1521] shadow-[2px_2px_0_0_#0B1521] bg-white ${textStyles[data.color]}`}
              >
                {data.badge}
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-[#0B1521] mb-8 leading-[1.1] tracking-tight"
              >
                The Future of <span className={textStyles[data.color]}>{data.title.split(' ').pop()} Compliance</span>
              </motion.h2>
              
              <p className="text-[#64748B] text-lg md:text-xl leading-relaxed mb-12 font-medium">
                {data.text}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white border-2 border-[#0B1521] shadow-[2px_2px_0_0_#0B1521] ${colorStyles[data.color]}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="font-bold text-[#0B1521] text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Information Pack */}
            <div className="lg:w-[45%]">
              <div className="relative">
                <div className={`absolute inset-0 rounded-[3rem] -rotate-3 opacity-10 border-4 border-dashed border-[#0B1521] ${colorStyles[data.color]}`}></div>
                <div className="relative bg-white border-4 border-[#0B1521] rounded-[3rem] p-10 md:p-14 shadow-[16px_16px_0_0_#0B1521]">
                  <h3 className="text-2xl font-black text-[#0B1521] mb-10 uppercase tracking-tight">Focus <span className={textStyles[data.color]}>Areas</span></h3>
                  
                  <div className="space-y-12">
                    {data.benefits.map((benefit) => (
                      <div key={benefit.id} className="flex gap-6 group cursor-default">
                        <div className={`w-14 h-14 shrink-0 rounded-[1.2rem] border-2 border-[#0B1521] flex items-center justify-center font-black text-xl shadow-[4px_4px_0_0_#0B1521] group-hover:scale-110 transition-transform ${textStyles[benefit.color]} bg-white`}>
                          {benefit.id}
                        </div>
                        <div className="flex flex-col">
                          <h4 className="font-black text-xl text-[#0B1521] leading-tight mb-2 uppercase">{benefit.title}</h4>
                          <p className="text-sm text-[#64748B] font-bold leading-relaxed">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <GrowthStories />
      <CtaSection />
    </div>
  );
}
