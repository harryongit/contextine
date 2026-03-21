import { motion } from "framer-motion";

const features = [
  {
    title: "Automate",
    subtitle: "Faster assessments against 30+ frameworks",
    desc: "Questionnaire-based automation updates scores in real time and highlights risk with AI-driven remediation advice.",
    color: "bg-[#2FB3C0]",
    icon: "🤖",
  },
  {
    title: "Manage Risk",
    subtitle: "Identify and track risks in one place",
    desc: "Centralize risk visibility, prioritize critical issues, and track remediation progress across your organization.",
    color: "bg-[#6C63FF]",
    icon: "⚠️",
  },
  {
    title: "Third-Party Oversight",
    subtitle: "Monitor vendors continuously",
    desc: "Assess, track, and manage third-party risk with automated workflows and real-time updates.",
    color: "bg-[#FF7A59]",
    icon: "🔗",
  },
  {
    title: "Stay Audit-Ready",
    subtitle: "Be prepared at all times",
    desc: "Maintain continuous compliance with real-time reporting and audit-ready documentation.",
    color: "bg-[#00A86B]",
    icon: "📊",
  },
];

export default function Projects() {
  return (
    <section className="bg-[#F5F7FA] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Header */}
        <h2 className="text-4xl font-semibold text-[#1F2D3D] mb-4">
          What Contextine Delivers
        </h2>

        <p className="text-sm tracking-widest text-gray-500 max-w-3xl mx-auto uppercase">
          An end-to-end security and compliance platform to streamline
          assessments, manage risk, oversee third parties, and stay continuously
          audit-ready.
        </p>

        {/* Scroll Section */}
<div className="mt-20">

  {features.map((item, index) => (
    <div key={index} className="h-[50vh] relative flex items-center">

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 80 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ amount: 0.6 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-24 w-full"
        style={{ zIndex: 50 + index }}
      >
        <div
          className={`${item.color} rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl`}
        >

          {/* LEFT */}
          <div className="text-left max-w-md">
            <div className="mb-5">
              <div className="w-12 h-12 border-2 border-black rounded-md flex items-center justify-center">
                {item.icon}
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-semibold text-black mb-3">
              {item.title}
            </h3>

            <p className="text-xs tracking-widest uppercase text-black/70 mb-3">
              {item.subtitle}
            </p>

            <p className="text-sm text-black/80 leading-relaxed mb-6">
              {item.desc}
            </p>

            <button className="border border-black px-5 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
              Learn more
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative w-full max-w-sm">

            <div className="bg-white rounded-2xl shadow-lg p-4">
              <div className="h-8 bg-[#0B2345] rounded-t-xl mb-4" />

              <div className="space-y-3">
                <div className="h-3 bg-gray-200 rounded w-1/3" />
                <div className="h-10 bg-gray-100 rounded" />

                <div className="grid grid-cols-3 gap-2 mt-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-12 border rounded-lg bg-white shadow-sm"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 w-36">
              <div className="text-xs text-gray-500 text-center">
                80% Completed
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  ))}

</div>
      </div>
    </section>
  );
}