import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Search, ClipboardCheck, MessageSquareWarning } from 'lucide-react';

const TESTIMONIALS = [
    {
        quote: "Contextine streamlined our investigations—no more exporting data or switching tools.",
        name: "Mike Matta",
        role: "Founder & CEO, Solink",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704m"
    },
    {
        quote: "Our case management is now faster, clearer, and far more efficient.",
        name: "Gulzar Ahmed",
        role: "Loss Prevention & Corporate Security",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704g"
    },
    {
        quote: "We complete investigations quicker with better collaboration across teams.",
        name: "Aaron Rogers",
        role: "Sr. Director, Retail Operations",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704a"
    }
];

export default function StatsTestimonials() {
    const containerRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const handleNext = () => setActiveSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    const handlePrev = () => setActiveSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const doodleY = useTransform(scrollYProgress, [0, 1], [-50, 250]);
    const doodleRotate = useTransform(scrollYProgress, [0, 1], [-10, 20]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1, y: 0, scale: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section ref={containerRef} className="py-24 lg:py-32 relative bg-white overflow-hidden font-sans text-slate-900 border-t border-slate-100">

            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50/50 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-[-200px] w-[800px] h-[500px] bg-indigo-50/40 rounded-full blur-[120px] pointer-events-none -z-10" />

            {/* Background Animated Tech Doodle */}
            <motion.div
                style={{ y: doodleY, rotate: doodleRotate }}
                className="absolute top-10 left-[10%] opacity-[0.04] pointer-events-none text-slate-900 z-0"
            >
                <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
                    {/* A giant floating scribbled arrow pointing towards the cards */}
                    <motion.path
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut" }} viewport={{ once: true }}
                        d="M100 200 C 300 100, 500 400, 700 200 S 500 600, 300 500"
                        stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeDasharray="20 20"
                    />
                    <path d="M700 200 L680 180 M700 200 L660 210" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                    <circle cx="150" cy="500" r="30" stroke="currentColor" strokeWidth="6" />
                    <circle cx="250" cy="200" r="10" stroke="currentColor" strokeWidth="6" />
                    <path d="M100 450 Q 80 480 120 480 T 140 500" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
            </motion.div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 w-full">

                {/* Title Block */}
                <div className="mb-20 md:mb-28 text-center max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
                        className="text-[2.5rem] md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-[1.1]"
                    >
                        We're not just a platform;<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">we're your partner in numbers.</span>
                    </motion.h2>
                </div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
                >

                    {/* Row 1, Card 1: Investigation cases handled */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="lg:col-span-4 bg-rose-100 rounded-3xl p-8 lg:p-10 flex flex-col justify-between h-[300px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(225,29,72,0.15)] transition-all duration-300 relative overflow-hidden group border border-rose-100/50"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                        <div className="relative z-10 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-rose-200 flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform duration-500 ease-out">
                                <Search size={28} strokeWidth={2.5} />
                            </div>
                        </div>
                        <div className="relative z-10 mt-auto">
                            <h3 className="text-4xl lg:text-[45px] font-black text-rose-600 tracking-tighter mb-2">500,000+</h3>
                            <p className="text-[17px] text-rose-900/70 font-semibold leading-snug">Investigation cases handled</p>
                        </div>
                    </motion.div>

                    {/* Row 1, Card 2: Audit carried out */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="lg:col-span-4 bg-indigo-100 rounded-3xl p-8 lg:p-10 flex flex-col justify-between h-[300px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] transition-all duration-300 relative overflow-hidden group border border-indigo-100/50"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                        <div className="relative z-10 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-200 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-500 ease-out">
                                <ClipboardCheck size={28} strokeWidth={2.5} />
                            </div>
                        </div>
                        <div className="relative z-10 mt-auto">
                            <h3 className="text-4xl lg:text-[45px] font-black text-indigo-600 tracking-tighter mb-2">50,000+</h3>
                            <p className="text-[17px] text-indigo-900/70 font-semibold leading-snug">Audit carried out</p>
                        </div>
                    </motion.div>

                    {/* Row 1, Card 3: Customer complaints managed */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="lg:col-span-4 bg-emerald-100 rounded-3xl p-8 lg:p-10 flex flex-col justify-between h-[300px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] transition-all duration-300 relative overflow-hidden group border border-emerald-100/50"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                        <div className="relative z-10 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-500 ease-out">
                                <MessageSquareWarning size={28} strokeWidth={2.5} />
                            </div>
                        </div>
                        <div className="relative z-10 mt-auto">
                            <h3 className="text-4xl lg:text-[45px] font-black text-emerald-600 tracking-tighter mb-2">40,000+</h3>
                            <p className="text-[17px] text-emerald-900/70 font-semibold leading-snug">Customer complaints managed</p>
                        </div>
                    </motion.div>

                    {/* Row 2, Card 4: Assets monitored */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="md:col-span-1 lg:col-span-3 bg-blue-100 rounded-3xl p-8 lg:p-10 flex flex-col justify-between h-[300px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-300 relative overflow-hidden group border border-blue-100/50"
                    >
                        <div className="absolute top-0 right-0 w-40 h-auto bg-white/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-500 ease-out">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 7V5a2 2 0 0 1 2-2h2" /><path d="M16 3h2a2 2 0 0 1 2 2v2" /><path d="M20 17v2a2 2 0 0 1-2 2h-2" /><path d="M8 21H6a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="3" fill="currentColor" /><path d="M3 12c2.5-4.5 6.5-7 9-7s6.5 2.5 9 7-6.5 7-9 7-6.5-2.5-9-7z" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative z-10 mt-auto">
                            <h3 className="text-[2.5rem] lg:text-5xl font-black text-blue-700 tracking-tighter mb-2">10M+</h3>
                            <p className="text-[17px] text-blue-900/70 font-semibold leading-snug">Assets monitored every month</p>
                        </div>
                    </motion.div>

                    {/* Row 2, Card 5: Customers */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="md:col-span-1 lg:col-span-3 bg-amber-100 rounded-3xl p-8 lg:p-10 flex flex-col justify-between h-[300px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(217,119,6,0.15)] transition-all duration-300 relative overflow-hidden group border border-amber-100/50"
                    >
                        <div className="absolute top-0 right-0 w-40 h-auto bg-white/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-amber-200 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform duration-500 ease-out">
                                <svg width="28" height="28" viewBox="0 0 44 44" fill="none">
                                    <circle cx="15" cy="13" r="7" fill="currentColor" />
                                    <path d="M3 36c0-6 6-12 12-12h2.51c-1.35 1.77-2.3 4.2-2.5 6.8-.18 2.21.36 4.39 1.48 6.2H3z" fill="currentColor" />
                                    <path d="M22 25l9-4 9 4v7.7c0 5.4-7.5 9.3-9 10.3-1.5-1-9-4.9-9-10.3V25z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative z-10 mt-auto">
                            <h3 className="text-[2.5rem] lg:text-5xl font-black text-amber-600 tracking-tighter mb-2">2,500+</h3>
                            <p className="text-[17px] text-amber-900/70 font-semibold leading-snug">Continuously compliant customers</p>
                        </div>
                    </motion.div>

                    {/* Row 2, Card 6: Testimonial Carousel */}
                    <motion.div
                        variants={cardVariants}
                        className="md:col-span-2 lg:col-span-6 bg-purple-100 rounded-3xl p-8 lg:p-10 flex flex-col justify-between h-[300px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden group border border-purple-100/50"
                    >
                        {/* Ambient Background Blob */}
                        <div className="absolute -top-20 -right-20 w-auto h-auto bg-purple-200/40 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-200/60 transition-colors duration-700" />

                        <div className="relative z-10 mb-4 lg:mb-6 w-full max-w-2xl flex items-center">
                            <div className="absolute top-0 left-0">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-300 opacity-60">
                                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4-.047 1.488-.047 3 .047 4z" />
                                </svg>
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activeSlide}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-[17px] lg:text-[19px] tracking-tight leading-relaxed transition-colors text-slate-800 font-medium pl-2 pt-4"
                                >
                                    "{TESTIMONIALS[activeSlide].quote}"
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mt-auto gap-6 md:gap-0">
                            {/* Profile Block */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSlide}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 15 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center gap-4 w-full"
                                >
                                    <div className="w-[52px] h-[52px] shrink-0 rounded-full overflow-hidden border-2 border-white shadow-sm ring-2 ring-purple-100">
                                        <img src={TESTIMONIALS[activeSlide].image} alt={TESTIMONIALS[activeSlide].name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-[17px] text-slate-900 tracking-tight leading-snug">{TESTIMONIALS[activeSlide].name}</span>
                                        <span className="text-[14px] text-slate-500 font-semibold leading-snug max-w-[250px] line-clamp-2">{TESTIMONIALS[activeSlide].role}</span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Slider Arrows */}
                            <div className="flex items-center gap-3 shrink-0 self-end md:self-auto w-full md:w-auto justify-end">
                                <button
                                    onClick={handlePrev}
                                    className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-slate-50 hover:-translate-y-0.5 transition-all text-slate-600 hover:text-indigo-600 hover:shadow-md ring-1 ring-slate-100 outline-none"
                                >
                                    <ChevronLeft size={22} strokeWidth={2.5} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-slate-50 hover:-translate-y-0.5 transition-all text-slate-600 hover:text-indigo-600 hover:shadow-md ring-1 ring-slate-100 outline-none"
                                >
                                    <ChevronRight size={22} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>

                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
