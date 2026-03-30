import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  ShieldCheck,
  Zap,
  Globe,
  Lock,
  Activity,
  Terminal,
} from "lucide-react";

const integrations = [
  { icon: Database, label: "HR Systems" },
  { icon: ShieldCheck, label: "Cloud IAM" },
  { icon: Zap, label: "IDP Tools" },
  { icon: Globe, label: "Monitoring" },
  { icon: Lock, label: "Encryption Vault" },
  { icon: Terminal, label: "Cloud Scanners" },
];

const OnboardingSection = () => {
  return (
    <section className="py-20 px-6 bg-[#FEFCE8]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* HEADER */}
        <div className="text-center mb-12 max-w-2xl">
          <span className="px-3 py-1 rounded-md bg-white border border-amber-100 text-amber-600 font-bold text-[10px] uppercase tracking-widest mb-4 inline-block">
            Seamless Integration
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            Zero Manual Input. <br />
            <span className="text-amber-600">Pure Automation.</span>
          </h2>

          <p className="text-sm text-slate-500 max-w-lg mx-auto">
            Contextine automatically connects across your entire stack—no setup,
            no manual mapping, no gaps.
          </p>
        </div>

        {/* INTEGRATION CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl mb-16">
          {integrations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="p-5 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center gap-3 group hover:shadow-md transition"
            >
              <div className="h-10 w-10 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-amber-500 transition">
                <item.icon className="h-5 w-5 text-slate-700 group-hover:text-white transition" />
              </div>

              <span className="text-sm font-semibold text-slate-700 group-hover:text-amber-600 transition">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
          {[
            { step: "01", title: "Connect", desc: "Plug into your stack instantly." },
            { step: "02", title: "Map", desc: "Auto-map compliance controls." },
            { step: "03", title: "Scan", desc: "Detect risks in real time." },
            { step: "04", title: "Monitor", desc: "Stay compliant continuously." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-5 rounded-xl bg-white border border-amber-100"
            >
              <div className="text-xs text-amber-500 font-bold mb-1">
                {item.step}
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnboardingSection;