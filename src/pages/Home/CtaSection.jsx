import { motion } from "framer-motion";
import { MousePointer2, Phone, LayoutDashboard, ArrowRight } from "lucide-react";
import Button from "../../common/Button";

export default function CtaSection() {
    const benefits = [
        {
            title: "One click",
            description: "Automate evidence collection and workflow triggers instantly.",
            icon: <MousePointer2 className="w-6 h-6 text-teal-400" />,
            gradient: "from-teal-500/20 to-emerald-500/20"
        },
        {
            title: "One call",
            description: "Get direct access to certified compliance experts when you need them.",
            icon: <Phone className="w-6 h-6 text-blue-400" />,
            gradient: "from-blue-500/20 to-indigo-500/20"
        },
        {
            title: "A whole lot of clarity",
            description: "Replace messy spreadsheets with a single, unified dashboard.",
            icon: <LayoutDashboard className="w-6 h-6 text-purple-400" />,
            gradient: "from-purple-500/20 to-fuchsia-500/20"
        }
    ];

    return (
        <section className="relative w-full bg-[#06152D] overflow-hidden flex items-center justify-center">

            {/* Background Ambient Glows */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Main Container */}

            {/* Glassmorphic Card */}
            <div className="relative">

                {/* Subtle grid pattern overlay inside card */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

                <div className="p-8 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-20">

                    {/* Left Column: CTA Content */}
                    <div className="space-y-8 lg:pr-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-teal-300 backdrop-blur-md"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                            </span>
                            Level up your compliance
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-white"
                        >
                            Ready to see what <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400">
                                security-first GRC
                            </span>
                            <br /> really looks like?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-gray-400 max-w-lg leading-relaxed"
                        >
                            Contextine is the platform that helps you move fast, stay compliant, and build securely from the start. Say goodbye to audit anxiety.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button size="lg" variant="teal">
                                Book a Demo
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>

                        </motion.div>
                    </div>

                    {/* Right Column: Benefit Features */}
                    <div className="flex flex-col gap-4">
                        {benefits.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
                                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/20 transition-all cursor-pointer overflow-hidden"
                            >
                                {/* Subtle hover gradient background */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                                <div className="relative z-10 flex items-start sm:items-center gap-5">
                                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-xl">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                            {item.text || item.title}
                                        </h4>
                                        <p className="text-sm text-gray-400 leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
}
