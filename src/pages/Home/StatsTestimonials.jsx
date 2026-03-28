import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TESTIMONIALS = [
    {
        quote:
            "Contextine streamlined our investigations—no more switching tools. It's now our standard.",
        name: "Mike Matta",
        role: "Founder & CEO, Solink",
        image: "https://i.pravatar.cc/150?img=1",
    },
    {
        quote:
            "Our case management is faster, clearer, and far more efficient. ROI was immediate.",
        name: "Gulzar Ahmed",
        role: "Loss Prevention & Security",
        image: "https://i.pravatar.cc/150?img=2",
    },
    {
        quote:
            "We complete investigations quicker with better collaboration. A must-have tool.",
        name: "Aaron Rogers",
        role: "Retail Operations Director",
        image: "https://i.pravatar.cc/150?img=3",
    },
];

export default function StatsTestimonials() {
    const [index, setIndex] = useState(0);
    const [pause, setPause] = useState(false);

    // Auto-slide
    useEffect(() => {
        if (pause) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [pause]);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
        );
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Trusted by Security Teams
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        Helping enterprises manage investigations and compliance at scale.
                    </p>
                </div>

                {/* Layout */}
                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Testimonial */}
                    <div
                        onMouseEnter={() => setPause(true)}
                        onMouseLeave={() => setPause(false)}
                        className="bg-slate-50 rounded-2xl p-10 border border-slate-100 flex flex-col justify-between"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4 }}
                            >
                                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                                    “{TESTIMONIALS[index].quote}”
                                </p>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={TESTIMONIALS[index].image}
                                        alt="user"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />

                                    <div>
                                        <p className="font-semibold text-slate-900">
                                            {TESTIMONIALS[index].name}
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            {TESTIMONIALS[index].role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Bottom Controls */}
                        <div className="flex justify-end gap-3 mt-10">

                            {/* Prev */}
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100 active:scale-95 transition"
                            >
                                <ArrowLeft size={18} />
                            </button>

                            {/* Next */}
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 active:scale-95 transition"
                            >
                                <ArrowRight size={18} />
                            </button>

                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6">
                        <StatCard value="500K+" label="Investigations" bg="bg-blue-50" />
                        <StatCard value="10M+" label="Assets Monitored" bg="bg-purple-50" />
                        <StatCard value="50K+" label="Audits" bg="bg-amber-50" />
                        <StatCard value="40K+" label="Resolved Cases" bg="bg-rose-50" />
                    </div>

                </div>
            </div>
        </section>
    );
}

/* Stat Card */
function StatCard({ value, label, bg }) {
    return (
        <div className={`${bg} p-6 rounded-xl border border-slate-100`}>
            <p className="text-2xl font-bold text-slate-900">{value}</p>
            <p className="text-sm text-slate-600 mt-1">{label}</p>
        </div>
    );
}