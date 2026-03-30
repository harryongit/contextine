import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Lock, Globe, Database, Activity, Target } from 'lucide-react'

const TrustSection = () => {
    
    // Security metrics for high-end reliability communication
    const securityPoints = [
        { label: "SOC 2 Type II", val: "Continuous", sub: "Monitoring in 24-bit fidelity", icon: ShieldCheck },
        { label: "Data Encryption", val: "AES-256", sub: "At rest and in transit", icon: Lock },
        { label: "Compliance Hub", val: "Multi-Cloud", sub: "GCP, AWS, Azure, On-prem", icon: Globe },
        { label: "Uptime SLA", val: "99.99%", sub: "Enterprise grade reliability", icon: Activity }
    ]

  return (
    <section className="py-16 px-6 md:px-12 bg-[#020617] text-white relative overflow-hidden">
        {/* Subtle Backdrop Branding - representing the security and reliability */}
        <div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-brand opacity-10 blur-[160px] rounded-full translate-y-1/2 -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-[-5%] left-[-10%] w-[800px] h-[800px] bg-accent opacity-[0.05] blur-[130px] rounded-full -translate-y-1/2 -z-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
            <div className="text-center mb-12 max-w-4xl mx-auto">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-3xl text-white/40 font-black text-[10px] uppercase tracking-[0.4em] mb-8 inline-block shadow-inner"
               >
                 Security First Infrastructure
               </motion.span>
               <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter leading-[0.9] mb-8">
                 Compliance is not enough. <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-indigo-400 drop-shadow-[0_0_40px_rgba(124,58,237,0.5)] italic">Choose Certainty.</span>
               </h2>
               <p className="text-lg md:text-xl text-white/40 font-medium max-w-2xl mx-auto leading-relaxed opacity-80">
                 Contextine is built on a foundation of absolute security. We don't just help you pass audits; <br className="hidden md:block" />
                 we help you build a culture of iron-clad governance and trust.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-16">
                {securityPoints.map((point, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                       className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl flex flex-col group transition-all hover:bg-white/[0.08] hover:shadow-3xl relative overflow-hidden shadow-2xl"
                    >
                       <div className="h-16 w-16 mb-8 rounded-2xl bg-brand/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <point.icon className="h-8 w-8 text-brand animate-pulse" />
                       </div>
                       <div className="text-[10px] font-black uppercase text-white/40 tracking-[0.3em] mb-3 leading-none">{point.label}</div>
                       <div className="text-2xl font-black text-white tracking-tighter mb-3">{point.val}</div>
                       <p className="text-white/40 text-sm font-bold opacity-80 group-hover:opacity-100 transition-opacity max-w-[160px] leading-relaxed">{point.sub}</p>
                       
                       <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-5 transition-opacity">
                            <point.icon className="h-24 w-24 text-brand" />
                       </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Proof Section Detail */}
            <div className="w-full p-10 rounded-[3rem] bg-white border border-brand/20 shadow-[0_80px_150px_-30px_rgba(124,58,237,0.3)] flex flex-col md:flex-row items-center justify-between gap-12 group">
                 <div className="flex-1">
                    <div className="text-[10px] font-black uppercase text-brand tracking-[0.5em] mb-4 leading-none">Global Impact Proof</div>
                    <div className="text-3xl font-display font-black text-slate-900 tracking-tighter leading-[1.1]">Trusted by high-growth startups <br className="hidden lg:block" /> and Fortune 500s.</div>
                 </div>
                 <div className="flex items-center gap-14">
                    <div className="text-center group-hover:scale-110 transition-transform"><div className="text-4xl font-black text-brand tracking-tighter mb-2">$4B+</div><div className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none">Revenue Unlocked</div></div>
                    <div className="text-center group-hover:scale-110 transition-transform"><div className="text-4xl font-black text-slate-900 tracking-tighter mb-2">99%</div><div className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none">Audit Pass Rate</div></div>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default TrustSection
