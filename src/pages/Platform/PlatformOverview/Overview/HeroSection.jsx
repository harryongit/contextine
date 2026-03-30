import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Telescope, Shield, Zap, Target, BarChart3 } from 'lucide-react'
import Button from '../../../../common/Button'

export const Doodle = ({ className = "", d = "M10 50 Q 25 25 50 50 T 90 50", delay = 0, color = "currentColor" }) => (
  <svg className={`absolute pointer-events-none -z-10 ${className}`} width="120" height="120" viewBox="0 0 100 100" fill="none">
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut", delay }}
      d={d}
      stroke={color}
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeDasharray="4 4"
      className="opacity-[0.1]"
    />
  </svg>
)

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-16 pb-24 overflow-visible bg-[#020617] z-30">
      {/* Cinematic Background Architecture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(124,58,237,0.12)_0%,_transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Sparkles className="h-3 w-3 text-brand" />
            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/50">
              The Security OS for Hypergrowth
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-black mb-5 leading-[1.05] tracking-tighter text-white"
          >
            Automate audits. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-indigo-400 to-emerald-400">
              Win more trust.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/30 mb-8 max-w-xl leading-relaxed font-medium"
          >
            Contextine is the all-in-one platform for SOC 2, ISO 27001, and enterprise-grade risk management. Built for engineers, trusted by auditors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button variant="primary" size="md" className="px-8 h-12 text-sm rounded-xl shadow-2xl shadow-brand/30 border-none group">
              Book a Demo <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <button className="flex items-center gap-2 text-white/50 hover:text-white transition-all text-sm font-bold">
              Watch Video <div className="h-7 w-7 flex items-center justify-center rounded-full bg-white/10 border border-white/10"><Zap className="h-3 w-3 fill-white text-white" /></div>
            </button>
          </motion.div>
        </div>

        <div className="flex-1 relative hidden lg:block">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="relative"
            >
                <div className="w-[400px] h-[400px] rounded-full bg-linear-to-br from-brand/10 to-accent/5 flex items-center justify-center border border-white/5 relative shadow-2xl backdrop-blur-3xl">
                   <Telescope className="h-32 w-32 text-white/10" />
                   
                   {/* Floating Badges */}
                   <div className="absolute top-8 right-0 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl animate-bounce-subtle">
                      <div className="flex items-center gap-3">
                         <div className="h-8 w-8 rounded-full bg-brand/20 flex items-center justify-center"><Shield className="h-4 w-4 text-brand" /></div>
                         <div className="text-xs font-bold text-white">Full SOC 2 Ready</div>
                      </div>
                   </div>

                   <div className="absolute bottom-10 left-0 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl animate-pulse">
                      <div className="flex items-center gap-3">
                         <div className="h-8 w-8 rounded-full bg-emerald-400/20 flex items-center justify-center"><Target className="h-4 w-4 text-emerald-400" /></div>
                         <div className="text-xs font-bold text-white">4 Risks Resolved</div>
                      </div>
                   </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Hero Stat Grid - Pinned to the very bottom, ensuring it overlays next section correctly */}
      <div className="max-w-6xl mx-auto w-full px-6 grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 lg:absolute lg:bottom-[-60px] lg:left-1/2 lg:-translate-x-1/2 z-50">
         {[
           { label: "SOC 2 Type II", value: "Ready", sub: "In 2 weeks", icon: Shield, color: "text-blue-400", bg: "bg-blue-500/10" },
           { label: "Internal Risks", value: "98%", sub: "Coverage", icon: Target, color: "text-amber-400", bg: "bg-amber-500/10" },
           { label: "Integrations", value: "300+", sub: "Cloud native", icon: Zap, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10" },
           { label: "Efficiency", value: "10x", sub: "Faster audits", icon: BarChart3, color: "text-emerald-400", bg: "bg-emerald-500/10" }
         ].map((stat, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 + (i * 0.05) }}
             className={`p-4 rounded-xl bg-white border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] flex flex-col gap-2 group hover:scale-[1.02] transition-transform backdrop-blur-3xl`}
           >
              <div className={`h-8 w-8 rounded-lg ${stat.bg} flex items-center justify-center`}>
                 <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
              <div>
                 <div className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{stat.label}</div>
                 <div className="text-xl font-black text-slate-900 leading-none">{stat.value}</div>
                 <div className="text-[10px] font-bold text-slate-400 mt-1">{stat.sub}</div>
              </div>
           </motion.div>
         ))}
      </div>
    </section>
  )
}

export default HeroSection
