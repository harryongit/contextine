import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Lock, ChevronRight, Activity } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProductSuite = () => {
  return (
    <section className="py-12 px-6 bg-[#F5F3FF] relative">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(124,58,237,0.06)_0%,_transparent_55%)] -z-10"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-10 max-w-2xl">
          <span className="px-2.5 py-0.5 rounded-md bg-white border border-indigo-100 text-indigo-600 font-bold text-[9px] uppercase tracking-widest mb-5 inline-block shadow-sm">
            The Core Contextine Stack
          </span>

          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            One UI. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
              Unified Context.
            </span>
          </h2>

          <p className="text-xs md:text-sm text-slate-500 opacity-80">
            From evidence mapping to real-time risk heatmaps—everything is synchronized in real time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 w-full">
          {[
            {
              title: "Audit Hub",
              desc: "Continuous evidence mapping for SOC 2, ISO 27001, and HIPAA.",
              icon: ShieldCheck,
              color: "text-indigo-600",
              bg: "bg-indigo-50",
              stat: "98.4%",
              label: "Sync Rate",
              href: "/products/audit-management"
            },
            {
              title: "Risk Canvas",
              desc: "Visualize your entire threat landscape with real-time scoring.",
              icon: Zap,
              color: "text-amber-500",
              bg: "bg-amber-50",
              stat: "Now",
              label: "Response",
              href: "/products/grc-platform"
            },
            {
              title: "Legal Vault",
              desc: "Litigation holds and policy enforcement with strong security.",
              icon: Lock,
              color: "text-fuchsia-500",
              bg: "bg-fuchsia-50",
              stat: "0.0s",
              label: "Latency",
              href: "/products/case-management"
            }
          ].map((mod, i) => (
            <Link
              key={i}
              to={mod.href}
              className="no-underline block h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-white border border-indigo-50 flex flex-col group hover:shadow-lg transition-all h-full"
              >

                {/* Icon */}
                <div className={`h-14 w-14 rounded-xl ${mod.bg} flex items-center justify-center mb-4`}>
                  <mod.icon className={`h-5 w-5 ${mod.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {mod.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  {mod.desc}
                </p>

                {/* Inline Stat */}
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400">
                    {mod.label}
                  </span>
                  <span className={`text-sm font-bold ${mod.color}`}>
                    {mod.stat}
                  </span>
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-indigo-600 group-hover:gap-3 transition-all mt-auto">
                  Explore <ChevronRight className="h-3 w-3" />
                </button>

              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSuite