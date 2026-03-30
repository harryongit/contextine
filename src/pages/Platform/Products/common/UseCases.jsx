import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Globe } from 'lucide-react'
import Button from '../../../../common/Button'

const UseCases = ({
  badgeText,
  title,
  highlightTitle,
  description,
  useCasesList,
  ctaTitle,
  ctaBtnText,
  ctaSubtitle = "Trusted by 500+ security teams globally"
}) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F8FAFC] relative overflow-hidden text-slate-900 border-y border-slate-100">
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-slate-200/50 blur-[130px] rounded-full -z-0"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="px-5 py-2 rounded-xl bg-white border border-slate-100/50 text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] mb-10 inline-block shadow-sm"
          >
            {badgeText}
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-[0.9] mb-10">
            {title} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-400 to-slate-600 italic">{highlightTitle}</span>
          </h2>
          <p className="text-lg text-slate-500/80 font-inter font-medium max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full mb-20 max-w-5xl">
          {useCasesList.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`p-10 md:p-14 rounded-[4rem] bg-white border ${useCase.border || 'border-slate-100'} flex flex-col group transition-all hover:bg-white/95 relative overflow-hidden shadow-sm hover:shadow-2xl`}
            >
              <div className={`h-16 w-16 rounded-[1.5rem] ${useCase.bg || 'bg-slate-50'} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700 shadow-inner`}>
                <useCase.icon className={`h-8 w-8 ${useCase.color || 'text-slate-400'} transition-transform group-hover:rotate-6 duration-700`} />
              </div>
              <h3 className="text-3xl font-display font-black mb-6 text-slate-900 tracking-tighter leading-tight group-hover:text-black transition-colors">{useCase.title}</h3>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-inter font-medium opacity-80 group-hover:opacity-100 transition-opacity">{useCase.desc}</p>

              <div className="absolute top-0 right-[-10%] p-10 opacity-0 group-hover:opacity-5 transition-opacity">
                <useCase.icon className={`h-40 w-40 ${useCase.color || 'text-slate-400'}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center p-14 rounded-[4.5rem] bg-white border border-brand/20 shadow-[0_80px_160px_-40px_rgba(124,58,237,0.2)] flex flex-col items-center justify-center relative overflow-hidden group"
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-brand/40 to-transparent"></div>
          <h4 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tighter mb-10">{ctaTitle}</h4>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button variant="primary" size="lg" className="px-12 rounded-2xl h-16 text-lg font-black bg-brand hover:scale-105 shadow-2xl shadow-brand/20 transition-all border-none">
              {ctaBtnText}
            </Button>
            <button className="flex items-center gap-3 text-slate-400 font-bold hover:text-slate-900 transition-all group-hover:translate-x-1">
              View Product Roadmap <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          {ctaSubtitle && (
            <div className="mt-10 flex items-center gap-4 text-[10px] font-black uppercase text-slate-400 tracking-[0.4em]">
              <Globe className="h-4 w-4" /> {ctaSubtitle}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default UseCases
