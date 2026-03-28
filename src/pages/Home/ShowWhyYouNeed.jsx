import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Cloud, Database, Activity, FileCheck, Github, Shield } from 'lucide-react';

const GlowingNode = ({ icon: Icon, color, delay, top, left, label, subLabel }) => (
    <div className={`absolute -translate-y-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2`} style={{ top, left }}>
        <motion.div
            animate={{
                y: [0, -4, 0],
                boxShadow: [`0 4px 15px rgba(0,0,0,0.05)`, `0 8px 25px ${color}30`, `0 4px 15px rgba(0,0,0,0.05)`]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
            className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center relative group cursor-pointer"
        >
            <Icon size={20} color={color} strokeWidth={2} className="group-hover:scale-110 transition-transform" />

            <div className={`absolute -bottom-[1px] w-4 h-[3px] rounded-full`} style={{ backgroundColor: color }} />
        </motion.div>
        <div className="flex flex-col items-center">
            <span className="text-[9px] font-extrabold text-slate-800 uppercase tracking-widest whitespace-nowrap">{label}</span>
            <span className="text-[8px] text-slate-500 font-semibold whitespace-nowrap hidden sm:block">{subLabel}</span>
        </div>
    </div>
);

const IntegrationsPill = () => (
    <div className="absolute top-[250px] left-[10px] -translate-y-1/2 bg-white shadow-xl shadow-slate-200/50 border border-slate-100 rounded-[1.2rem] p-3 flex flex-col gap-2 z-20 w-[150px]">
        <div className="flex gap-1.5 justify-center">
            <div className="w-[30px] h-[30px] rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors">
                <Cloud size={14} className="text-sky-500" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors">
                <Github size={14} className="text-slate-700" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors">
                <Database size={14} className="text-indigo-500" />
            </div>
        </div>
        <div className="text-[9px] uppercase font-black text-center tracking-widest text-[#60A5FA] mt-1 relative z-10 drop-shadow-sm">Data Integrations</div>
        <div className="w-full h-[4px] bg-slate-100 rounded-full overflow-hidden relative">
            <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
            />
        </div>
    </div>
);

const ContextineEngine = () => (
    <div className="absolute top-[250px] left-[270px] -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] flex items-center justify-center z-10">

        {/* SOFT OUTER RING */}
        <div className="absolute inset-0 rounded-3xl border border-slate-200" />



        {/* CORE */}
        <div className="relative w-[120px] h-[120px] bg-white border border-slate-200 rounded-2xl shadow-md flex items-center justify-center">

            {/* ICON */}
            <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="flex items-center justify-center w-[54px] h-[54px] rounded-xl bg-indigo-50 border border-indigo-100"
            >
                <Shield size={24} className="text-indigo-600" />
            </motion.div>


        </div>

        {/* LABEL */}
        <div className="absolute -bottom-7 text-[10px] font-semibold text-slate-500 tracking-wide">
            Contextine Core
        </div>

    </div>
);

const ShowWhyYouNeed = () => {
    return (
        <section className="bg-white py-24 md:py-32 overflow-hidden text-slate-900 font-sans relative border-y border-slate-100">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center relative z-10 w-full">

                {/* Left Content Area */}
                <div className="max-w-xl">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[34px] md:text-[44px] lg:text-[48px] font-bold text-slate-900 leading-[1.15] mb-5 tracking-tight"
                    >
                        Your GRC program does the{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                            bare minimum
                        </span>.
                        <br />
                        <span className="text-slate-600 font-semibold">
                            It’s time to build something stronger.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-slate-500 text-[15.5px] md:text-[17px] mb-8 leading-relaxed font-medium"
                    >
                        Passing audits and closing deals isn’t enough anymore.
                        Modern teams need a security program that actually scales with them.
                    </motion.p>

                    <motion.ul
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
                        }}
                        className="space-y-5"
                    >
                        {[
                            "Maps controls to your actual business risks",
                            "Gives real-time visibility into your security posture",
                            "Keeps audits fast, simple, and distraction-free"
                        ].map((item, i) => (
                            <motion.li
                                variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
                                key={i}
                                className="flex items-start gap-4 group"
                            >
                                <div className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-1 group-hover:scale-110 transition-all">
                                    <Check size={13} strokeWidth={2.5} />
                                </div>

                                <span className="text-slate-600 font-medium text-[15px] md:text-[16px] leading-[1.6] group-hover:text-slate-900 transition-colors">
                                    {item}
                                </span>
                            </motion.li>
                        ))}
                    </motion.ul>

                </div>

                {/* Right Visual Diagram */}
                <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] flex items-center justify-start overflow-visible">
                    <div className="w-[500px] h-[500px] absolute scale-[0.65] min-[400px]:scale-[0.75] sm:scale-90 md:scale-100 transform origin-center flex-shrink-0 z-20">

                        <svg width="100%" height="100%" viewBox="0 0 500 500" className="absolute inset-0 pointer-events-none z-0">
                            <style>
                                {`
                                @keyframes dashFlow {
                                  to { stroke-dashoffset: -24; }
                                }
                                .flow-line {
                                  animation: dashFlow 1.5s linear infinite;
                                }
                              `}
                            </style>
                            <g stroke="rgba(99, 102, 241, 0.4)" fill="none" strokeWidth="2" strokeDasharray="6 4" className="flow-line">
                                <path d="M 160 250 L 180 250" />
                                <path d="M 360 250 C 400 250, 400 80, 436 80" />
                                <path d="M 360 250 L 436 250" />
                                <path d="M 360 250 C 400 250, 400 420, 436 420" />
                            </g>
                        </svg>

                        <IntegrationsPill />
                        <ContextineEngine />

                        <GlowingNode icon={ShieldCheck} color="#0D9488" top="80px" left="460px" delay={0} label="SOC 2 & ISO" subLabel="Frameworks Ready" />
                        <GlowingNode icon={Activity} color="#2563EB" top="250px" left="460px" delay={1} label="Risk Posture" subLabel="Real-Time Visibility" />
                        <GlowingNode icon={FileCheck} color="#9333EA" top="420px" left="460px" delay={2} label="Automated" subLabel="Evidence Collection" />

                    </div>
                </div>

            </div>
            <div>

            </div>
        </section>
    );
};

export default ShowWhyYouNeed;
