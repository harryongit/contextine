import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const CustomerTestimonials = () => {
  const testimonials = [
    {
      quote: "Contextine didn't just automate our SOC2. It changed the entire logical structure of how we think about risk across our global divisions.",
      name: "Marcus Aurelius",
      role: "Global Head of Security",
      company: "FinScale Technologies",
      avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      quote: "The unified high-fidelity dashboard for case management and GRC is unparalleled. It's the first time we've had a truly connected compliance mesh.",
      name: "Sarah Jenkins",
      role: "VP of Legal Operations",
      company: "CloudSecure Global",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    }
  ]

  return (
    <section className="py-12 px-6 md:px-12 bg-white relative overflow-hidden selection:bg-brand/10">
        <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-slate-50 blur-[150px] rounded-full -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-slate-100 to-transparent"></div>

        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 max-w-4xl mx-auto flex flex-col items-center">
               <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="px-4 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-brand font-black text-[9px] uppercase tracking-[0.5em] mb-6 inline-block shadow-sm relative group overflow-hidden"
               >
                 <span className="relative z-10 transition-colors group-hover:text-brand">Voice of Trust</span>
                 <div className="absolute inset-0 bg-brand/[0.03] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
               </motion.span>
               
               <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tighter leading-[0.95] mb-6">
                 Human Insight <br />
                 <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-400 to-slate-800 italic px-4">
                    In High Fidelity.
                 </span>
               </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testi, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="p-8 md:p-10 rounded-[3rem] bg-white border border-slate-100 flex flex-col group transition-all relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(124,58,237,0.1)] hover:border-brand/10 hover:-translate-y-1 ring-1 ring-slate-50 hover:ring-brand/10"
                    >
                        <div className="h-12 w-12 mb-8 rounded-xl bg-brand/10 flex items-center justify-center text-brand group-hover:rotate-12 transition-transform duration-700 shadow-inner">
                            <Quote className="h-6 w-6 fill-brand/20" />
                        </div>
                        
                        <blockquote className="text-xl md:text-2xl font-display font-italic font-black mb-8 text-slate-900 tracking-tight leading-relaxed group-hover:text-black transition-colors italic">
                            "{testi.quote}"
                        </blockquote>
                        
                        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-4 group-hover:border-brand/10 transition-colors">
                            <div className="h-12 w-12 rounded-xl border-2 border-slate-50 overflow-hidden group-hover:border-brand/20 transition-all p-0.5">
                                <img src={testi.avatar} alt={testi.name} className="h-full w-full object-cover rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <div className="text-base md:text-lg font-display font-black text-slate-900 leading-tight">
                                   {testi.name}
                                </div>
                                <div className="text-[8px] font-black uppercase text-slate-400 tracking-[0.3em] group-hover:text-brand transition-colors duration-500">
                                   {testi.role} @ {testi.company}
                                </div>
                            </div>
                            
                            <div className="ml-auto flex items-center gap-1 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="h-2.5 w-2.5 fill-brand text-brand" />
                                ))}
                            </div>
                        </div>

                        <div className="absolute top-8 right-10 text-slate-100 font-display font-black text-5xl group-hover:text-brand/[0.03] transition-colors pointer-events-none opacity-40">
                            v5.0
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default CustomerTestimonials
