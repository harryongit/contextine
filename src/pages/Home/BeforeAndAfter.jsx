import { motion } from "framer-motion";
import { useState } from "react";

export default function BeforeAndAfter() {
  const [active, setActive] = useState(false);

  return (
    <section className="bg-[#06152D] py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div
            onClick={() => setActive(!active)}
            className="flex items-center gap-4 bg-[#0B2345] px-6 py-3 rounded-full cursor-pointer"
          >
            <span className={`text-lg ${!active ? "text-white" : "text-gray-400"}`}>
              Before Contextine
            </span>

            <div className="w-14 h-7 bg-[#0E2A52] rounded-full relative">
              <motion.div
                animate={{ x: active ? 28 : 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-6 h-6 bg-white rounded-full absolute top-0.5"
              />
            </div>

            <span className={`text-lg ${active ? "text-green-400" : "text-gray-400"}`}>
              After Contextine
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative">

          {/* BEFORE */}
     {!active && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="h-[520px] rounded-2xl border border-white/10 bg-[#081B34] flex items-center justify-center relative overflow-hidden"
  >
    {/* Background Grid */}
    <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

    {/* Glow Blob */}
    <div className="absolute inset-0 flex items-center justify-center z-0">
      <div className="w-[650px] h-[320px] bg-[#0E2A52] opacity-50 blur-3xl rounded-full" />
    </div>

    {/* Top Banner */}
    <div className="absolute top-6 left-1/2 -translate-x-1/2 rotate-[-3deg] bg-[#1E3A5F]/80 backdrop-blur-md px-6 py-2 rounded-full text-xs shadow z-20">
      Endless Audit & Compliance Firefighting
    </div>

    {/* Center Message (MAIN FOCUS) */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-7 py-4 rounded-xl shadow-2xl text-lg font-semibold z-30">
      SOC 2 audit delayed by 2 months
    </div>

    {/* Email Card */}
    <div className="absolute top-12 right-32 rotate-[8deg] bg-[#1E3A5F]/90 backdrop-blur px-5 py-3 rounded-xl text-sm shadow-lg w-[260px] z-20">
      <p className="text-xs text-gray-300">📩 Auditor Email</p>
      <p className="text-xs mt-1 text-gray-400">
        Missing employee data retention policy
      </p>
    </div>

    {/* Sales Pressure */}
    <div className="absolute top-32 right-10 rotate-[5deg] bg-yellow-400 text-black px-5 py-3 rounded-xl text-sm shadow-xl w-[260px] z-20">
      <p className="font-semibold">Sales Escalation</p>
      <p className="text-xs mt-1">
        Security questionnaire due tomorrow
      </p>
    </div>

    {/* Slack Chaos */}
    <div className="absolute bottom-20 left-16 rotate-[7deg] bg-purple-700/90 backdrop-blur px-5 py-4 rounded-xl text-xs shadow-lg w-[240px] z-20">
      <p className="text-gray-200">Robert • 3h ago</p>
      <p className="mt-1">Enable S3 deletion protection</p>

      <p className="text-gray-400 mt-2">Julia • 3h ago</p>
      <p>Which accounts?</p>
    </div>

    {/* Ops Request */}
    <div className="absolute bottom-24 right-20 rotate-[-7deg] bg-cyan-600/90 px-5 py-3 rounded-xl text-sm shadow-lg w-[260px] z-20">
      <p>Urgent: AWS IAM review needed</p>
      <p className="text-xs mt-1 text-cyan-100">
        Last sent during ISO 27001 audit
      </p>
    </div>

    {/* Risk Alert */}
    <div className="absolute left-20 top-44 rotate-[-6deg] bg-red-500 px-4 py-2 rounded-lg text-xs shadow z-20">
      Risk Blindspots
    </div>

    {/* Secondary Alerts */}
    <div className="absolute top-1/3 left-10 rotate-[6deg] bg-orange-400 text-black px-4 py-2 rounded-lg text-xs shadow z-20">
      Vendor not assessed
    </div>

    <div className="absolute bottom-16 right-1/3 rotate-[4deg] bg-pink-500 px-4 py-2 rounded-lg text-xs shadow z-20">
      Policy outdated
    </div>

    {/* Noise Pills (LOW IMPORTANCE) */}
    <div className="absolute top-1/2 left-1/4 rotate-[3deg] bg-white/10 px-3 py-1 rounded-full text-[10px] z-10">
      Compliance overload
    </div>

    <div className="absolute top-1/2 right-1/3 rotate-[-3deg] bg-white/10 px-3 py-1 rounded-full text-[10px] z-10">
      Siloed data
    </div>

    <div className="absolute bottom-32 left-1/2 rotate-[5deg] bg-white/10 px-3 py-1 rounded-full text-[10px] z-10">
      Failing controls
    </div>

    {/* Subtle vignette for focus */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#06152D]/60 z-10" />
  </motion.div>
)}

          {/* AFTER */}
         
{active && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-6"
  >
    {/* Stats Row */}
    <div className="col-span-2 grid grid-cols-2 md:grid-cols-6 gap-4">
      {[
        { label: "Open Risks", value: 6 },
        { label: "Critical", value: 2 },
        { label: "Vendors", value: 12 },
        { label: "Employees", value: 124 },
        { label: "Audits", value: 3 },
        { label: "Tasks Due", value: 18 },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-[#0B2345] p-4 rounded-xl border border-white/10"
        >
          <p className="text-sm text-gray-400">{item.label}</p>
          <p className="text-2xl font-semibold">{item.value}</p>
        </div>
      ))}
    </div>

    {/* Compliance */}
    <div className="bg-[#0B2345] p-6 rounded-2xl border border-white/10">
      <h3 className="mb-4 text-lg">Compliance Progress</h3>
      <div className="flex flex-col items-center justify-center h-40 gap-2">
        <div className="text-4xl font-bold text-green-400">91%</div>
        <p className="text-sm text-gray-400">SOC 2 Ready</p>
      </div>
    </div>

    {/* Risk Trend */}
    <div className="bg-[#0B2345] p-6 rounded-2xl border border-white/10">
      <h3 className="mb-4 text-lg">Risk Trend</h3>
      <div className="h-40 flex flex-col justify-center text-gray-400 text-sm gap-2">
        <p>⬇️ Risks decreased by 34%</p>
        <p>⬆️ Vendor reviews increased</p>
        <p>➡️ Stable security posture</p>
      </div>
    </div>

    {/* Risks Table */}
    <div className="col-span-2 bg-[#0B2345] p-6 rounded-2xl border border-white/10">
      <h3 className="mb-4 text-lg">Top Risks</h3>

      <div className="space-y-3 text-sm">
        {[
          { name: "Weak MFA Policy", level: "High" },
          { name: "Unreviewed Vendor: Stripe", level: "Medium" },
          { name: "Missing Employee Training", level: "High" },
          { name: "Expired Security Test", level: "Low" },
        ].map((risk, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-[#081B34] px-4 py-3 rounded-lg"
          >
            <span>{risk.name}</span>
            <span
              className={`text-xs px-2 py-1 rounded ${
                risk.level === "High"
                  ? "bg-red-500/20 text-red-400"
                  : risk.level === "Medium"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-green-500/20 text-green-400"
              }`}
            >
              {risk.level}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Activity Feed */}
    <div className="bg-[#0B2345] p-6 rounded-2xl border border-white/10">
      <h3 className="mb-4 text-lg">Recent Activity</h3>
      <ul className="space-y-3 text-sm text-gray-300">
        <li>✔️ Vendor “AWS” approved</li>
        <li>⚠️ New risk detected</li>
        <li>👤 Employee added to policy group</li>
        <li>🧪 Security test completed</li>
      </ul>
    </div>

    {/* Recommendations */}
    <div className="bg-[#0B2345] p-6 rounded-2xl border border-white/10">
      <h3 className="mb-4 text-lg">Recommendations</h3>
      <ul className="space-y-3 text-gray-300 text-sm">
        <li>Fix 2 critical risks immediately</li>
        <li>Review 3 pending vendors</li>
        <li>Complete 18 overdue tasks</li>
        <li>Enable MFA for all admins</li>
      </ul>
    </div>
  </motion.div>
)}
        </div>
      </div>
    </section>
  );
}