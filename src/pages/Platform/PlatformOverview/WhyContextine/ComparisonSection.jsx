import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, ShieldCheck, Zap, Layers, Activity } from 'lucide-react'

const ComparisonSection = () => {
    
    // Comparison metrics for high-end value communication
    const metrics = [
        { label: "Onboarding Speed", contextine: "2-4 Weeks", traditional: "6-12 Months", icon: Zap },
        { label: "Evidence Collection", contextine: "100% Automated", traditional: "Manual Spreadsheets", icon: Layers },
        { label: "Data Architecture", contextine: "Unified Graph", traditional: "Fragmented Silos", icon: Activity },
        { label: "Case Integration", contextine: "Deep Litigation Holds", traditional: "None / Third-party", icon: ShieldCheck }
    ]

  return (
    <section className="py-16 px-6 md:px-12 bg-white relative overflow-hidden">
        {/* Subtle Backdrop branding - representing the clarity of the comparison */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand/3 blur-[140px] rounded-full -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-accent/2 blur-[120px] rounded-full -z-10 transition-transform duration-1000"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
            <div className="text-center mb-12 max-w-4xl mx-auto">
               <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="px-5 py-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] mb-8 inline-block shadow-sm"
               >
                 The Competitive Truth
               </motion.span>
               <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                 The GRC Gap <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-accent drop-shadow-sm">Finally Closed.</span>
               </h2>
               <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed opacity-70">
                 Moving from legacy tools to Contextine isn't just an upgrade; it's a paradigm shift in how you <br className="hidden md:block" />
                 manage risk and compliance at scale.
               </p>
            </div>

            <div className="w-full overflow-x-auto">
               <div className="min-w-[800px] p-4 rounded-[4rem] bg-slate-50 border border-slate-100 shadow-2xl relative overflow-hidden group">
                  <div className="grid grid-cols-3 gap-10 p-8 border-b border-slate-200/50 bg-white/50 rounded-t-[3rem]">
                     <div className="text-xl font-black text-slate-400 tracking-widest uppercase">Metric</div>
                     <div className="flex items-center gap-4 text-2xl font-black text-brand tracking-tighter"><ShieldCheck className="h-7 w-7" /> Contextine</div>
                     <div className="text-2xl font-bold text-slate-400 tracking-tighter">Legacy GRC</div>
                  </div>

                  {metrics.map((metric, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 10 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className="grid grid-cols-3 gap-10 items-center p-8 hover:bg-white transition-all transform hover:-translate-y-1 group"
                    >
                       <div className="flex items-center gap-4">
                          <div className="h-100% w-1.5 bg-brand/20 group-hover:bg-brand transition-all rounded-full h-10"></div>
                          <div className="text-lg font-bold text-slate-900 tracking-tight">{metric.label}</div>
                       </div>
                       <div className="flex items-center gap-4 text-brand font-black text-xl tracking-tighter"><CheckCircle2 className="h-6 w-6 fill-brand/10" /> {metric.contextine}</div>
                       <div className="flex items-center gap-4 text-slate-400 font-bold text-lg tracking-tight"><XCircle className="h-6 w-6 opacity-30" /> {metric.traditional}</div>
                    </motion.div>
                  ))}

                  {/* Highlight Contextine Row Detail */}
                  <div className="p-8 text-center bg-white border-t border-slate-100 rounded-b-[3rem]">
                     <div className="text-[10px] font-black uppercase text-slate-400 tracking-[0.5em] animate-pulse">Contextine Outperforms Traditional GRC by 500%</div>
                  </div>
               </div>
            </div>
        </div>
    </section>
  )
}

export default ComparisonSection
