import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function BeforeAndAfter() {
  const [active, setActive] = useState(false);

  return (
    <section className="bg-[#050B3D] pt-12 pb-32 text-white relative isolate overflow-hidden">
      {/* Dynamic Background Noise / Blur effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white drop-shadow-md">
            The Cost of Compliance Chaos
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            See how Contextine transforms frantic audit firefighting into a seamless, automated state of confidence.
          </p>
        </div>

        {/* Premium Toggle Button */}
        <div className="flex justify-center mb-16 relative z-20">
          <div className="relative flex items-center p-1.5 bg-[#0A1146]/50 border border-white/10 backdrop-blur-xl rounded-full shadow-2xl">
            <button
              onClick={() => setActive(false)}
              className={`relative px-6 md:px-10 py-3 rounded-full text-sm font-semibold transition-all duration-300 z-10 ${!active ? "text-white" : "text-gray-400 hover:text-white"
                }`}
            >
              Before Contextine
              {!active && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/40 rounded-full -z-10 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </button>
            <button
              onClick={() => setActive(true)}
              className={`relative px-6 md:px-10 py-3 rounded-full text-sm font-semibold transition-all duration-300 z-10 ${active ? "text-white" : "text-gray-400 hover:text-white"
                }`}
            >
              After Contextine
              {active && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-full -z-10 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Interactive Interactive Visualizer */}
        <div className="relative w-full rounded-3xl min-h-[550px] transition-all duration-700">
          <AnimatePresence mode="wait">
            {!active ? (
              <motion.div
                key="before"
                initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full rounded-3xl border border-red-500/20 bg-[#060814] shadow-[0_0_50px_rgba(239,68,68,0.08)] overflow-hidden flex flex-col md:flex-row items-center justify-center p-6 md:p-8"
              >
                {/* Chaos Grid & Grid Red */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/20 blur-[130px] rounded-full pointer-events-none" />

                <div className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center pointer-events-none">
                  {/* Central Node */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute z-30 bg-gradient-to-br from-red-600/30 to-red-900/30 backdrop-blur-md border border-red-400/50 p-6 rounded-2xl shadow-[0_0_40px_rgba(239,68,68,0.4)] text-center w-[280px]"
                  >
                    <div className="w-14 h-14 bg-red-500/20 border border-red-500/50 rounded-full flex items-center justify-center mx-auto mb-4 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">SOC 2 Audit Delayed</h3>
                    <p className="text-red-200 text-sm">Critical policy gaps identified. Projected delay: \n2 months.</p>
                  </motion.div>

                  {/* Floating Chaos Elements */}
                  <motion.div
                    animate={{ y: [0, 10, 0], rotate: [-2, 2, -2] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="hidden md:block absolute top-[15%] left-[5%] bg-[#0f172a]/90 backdrop-blur-xl border border-orange-500/30 p-5 rounded-xl shadow-xl z-20 w-72"
                  >
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
                      <span className="text-xs text-orange-400 font-bold uppercase tracking-wider">Auditor Email</span>
                    </div>
                    <p className="text-sm text-gray-300 italic">"We are still missing the employee data retention policy..."</p>
                  </motion.div>

                  <motion.div
                    animate={{ x: [0, -10, 0], y: [0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="hidden md:block absolute bottom-[20%] left-[8%] bg-[#0f172a]/90 backdrop-blur-xl border border-red-500/40 p-5 rounded-xl shadow-xl z-20 w-64"
                  >
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
                      <span className="text-xs text-red-400 font-bold uppercase tracking-wider">🚨 Vulnerability</span>
                    </div>
                    <p className="text-sm text-gray-300">Third-party vendor <span className="text-red-300 font-semibold">Not Assessed</span> prior to onboarding.</p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -15, 0], rotate: [3, 0, 3] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="hidden md:block absolute top-[10%] right-[3%] bg-yellow-400/10 backdrop-blur-xl border border-yellow-500/40 p-5 rounded-xl shadow-xl z-20 w-72"
                  >
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
                      <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      <span className="text-xs text-yellow-400 font-bold uppercase tracking-wider">Sales Escalation</span>
                    </div>
                    <p className="text-sm text-yellow-100 italic">"Security questionnaire due tomorrow. Huge deal at risk!"</p>
                  </motion.div>

                  <motion.div
                    animate={{ x: [0, 8, 0], y: [0, 8, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="hidden md:block absolute bottom-[15%] right-[8%] bg-[#4A154B]/50 backdrop-blur-xl border border-[#4A154B] p-5 rounded-xl shadow-[0_0_20px_rgba(74,21,75,0.4)] z-20 w-64"
                  >
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
                      <span className="text-xs text-white font-bold tracking-wider">slack (#engineering)</span>
                    </div>
                    <div className="space-y-3">
                      <p className="text-xs text-gray-200"><span className="font-bold text-white">DevOps:</span> Enable S3 deletion protection now!</p>
                      <p className="text-xs text-gray-400 ml-4"><span className="font-bold text-gray-300">Julia:</span> For which accounts exactly?</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="after"
                initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative h-full w-full rounded-3xl border border-cyan-500/20 bg-[#061121] shadow-[0_0_60px_rgba(6,182,212,0.12)] p-6 md:p-10 flex items-center justify-center overflow-hidden"
              >
                {/* Clean Grid & Cyan Glow */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none rounded-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 w-full max-w-5xl mx-auto">

                  {/* Stats Bento */}
                  <div className="col-span-1 md:col-span-3 grid grid-cols-2 lg:grid-cols-6 gap-4">
                    {[
                      { label: "Open Risks", value: "0", color: "text-emerald-400", trend: "↓ 100%" },
                      { label: "Critical Issues", value: "0", color: "text-emerald-400", trend: "None" },
                      { label: "Vendors Fixed", value: "14", color: "text-white", trend: "↑ 2" },
                      { label: "Policies Enforced", value: "48", color: "text-white", trend: "All" },
                      { label: "Audit Readiness", value: "99%", color: "text-cyan-400", trend: "Ready" },
                      { label: "Tasks Due", value: "0", color: "text-emerald-400", trend: "Clear" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-2xl p-5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <p className="text-xs text-gray-400 mb-2 font-medium">{stat.label}</p>
                        <div className="flex items-end justify-between">
                          <p className={`text-2xl font-bold tracking-tight ${stat.color}`}>{stat.value}</p>
                          <span className="text-[10px] font-semibold bg-white/[0.08] px-2 py-1 rounded text-gray-300">{stat.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Main Compliance progress */}
                  <div className="col-span-1 border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-md rounded-3xl p-6 flex flex-col items-center justify-center relative shadow-lg group hover:border-white/10 transition-colors">
                    <div className="absolute top-6 left-6 w-full pr-12 flex justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">SOC 2 Type II</h3>
                        <p className="text-xs text-cyan-400 font-medium tracking-wide uppercase mt-1">Continuous Monitoring</p>
                      </div>
                      <svg className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>

                    {/* SVG Progress Circle */}
                    <div className="mt-12 relative w-44 h-44 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                        <circle
                          cx="50" cy="50" r="45" fill="none" stroke="#22d3ee" strokeWidth="8" strokeDasharray="283" strokeDashoffset="28" strokeLinecap="round"
                          className="drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] group-hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.9)] transition-all duration-300"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center">
                        <span className="text-5xl font-bold tracking-tighter text-white">91<span className="text-2xl text-cyan-400">%</span></span>
                        <span className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-semibold">Compliant</span>
                      </div>
                    </div>
                  </div>

                  {/* Auto-remediation feed */}
                  <div className="col-span-1 md:col-span-2 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 hover:border-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-lg font-bold tracking-tight">Automated Remediation Firehose</h3>
                      <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">All Systems Active</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: "Vendor Risk Scanned", desc: "Stripe compliance certs auto-verified.", time: "2m ago" },
                        { icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>, title: "MFA Policy Enforced", desc: "Blocked 3 users missing 2FA setup.", time: "1h ago" },
                        { icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, title: "Policy Distribution", desc: "100% employees acknowledged ISMS.", time: "4h ago" },
                        { icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>, title: "Automated Evidence", desc: "Github access reviews auto-gathered.", time: "6h ago" }
                      ].map((event, i) => (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + (i * 0.1) }}
                          key={i}
                          className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.02] hover:border-white/[0.08] transition-all group"
                        >
                          <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                            {event.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-1">
                              <h4 className="text-sm font-bold text-gray-100 truncate pr-2">{event.title}</h4>
                              <span className="text-[10px] uppercase font-bold text-cyan-500/70 shrink-0">{event.time}</span>
                            </div>
                            <p className="text-xs text-gray-400 truncate">{event.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
      {/* Client Logos Section */}
      <div className="relative w-full overflow-hidden border-y border-white/5 bg-white/[0.02] mt-24 py-12 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-400/50"></div>
            <p className="text-sm font-semibold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 uppercase text-center">
              Trusted by Innovative Teams
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blue-400/50"></div>
          </div>
        </div>

        <div className="relative flex max-w-[100vw] overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#050B3D] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#050B3D] to-transparent z-10" />

          <motion.div
            className="flex items-center gap-16 sm:gap-24 px-8 sm:px-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 sm:gap-24 shrink-0">
                {[
                  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" },
                  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google" },

                  { src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", alt: "Apple" },
                  { src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", alt: "IBM" },
                  { src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", alt: "Netflix" }
                ].map((logo, index) => (
                  <img
                    key={`${i}-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 sm:h-10 w-[120px] object-contain shrink-0 brightness-0 invert opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}