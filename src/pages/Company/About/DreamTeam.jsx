import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: 'James Wilson',
        role: 'Product Designer',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80',
        shapeSVG: (
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#E0F2F1] fill-current">
                <rect x="15" y="15" width="70" height="70" rx="20" />
            </svg>
        ),
    },
    {
        name: 'Emily Chen',
        role: 'Frontend Engineer',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
        shapeSVG: (
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#FDF0D5] fill-current">
                <path d="M50 0 L60 35 L100 50 L60 65 L50 100 L40 65 L0 50 L40 35 Z" />
            </svg>
        ),
    },
    {
        name: 'Marcus Johnson',
        role: 'Backend Developer',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
        shapeSVG: (
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#E6E0F8] fill-current">
                <path d="M10 90 L50 20 L90 90 Z" />
            </svg>
        ),
    },
    {
        name: 'Sarah Lee',
        role: 'Growth Marketing',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80',
        shapeSVG: (
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#FAEOE4] fill-current">
                <path d="M20 20 Q 50 -10, 80 20 Q 110 50, 80 80 Q 50 110, 20 80 Q -10 50, 20 20" />
            </svg>
        ),
    }
];

export default function DreamTeam() {
    return (
        <section className="bg-[#FAF8F5] pt-12 pb-24 relative overflow-hidden font-sans">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1521] mb-6 relative inline-block">
                        The dream team
                        <motion.svg initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }} viewport={{ once: true, margin: "-100px" }} className="absolute -bottom-3 left-0 w-full overflow-visible h-[15px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M 0 10 Q 50 20, 100 10" fill="none" stroke="#2DD4BF" strokeWidth="6" strokeLinecap="round" />
                        </motion.svg>
                    </h2>
                    <p className="text-[#202939] font-medium text-lg leading-relaxed max-w-2xl mx-auto mt-4">
                        We have spent years scaling start-ups, building out digital
                        experiences and working at big tech – including Google, Amazon,
                        Fitbit, D2L, Typeform, Lazer, and Redbull.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.15, type: "spring", stiffness: 100, damping: 20 }}
                            key={index}
                            className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left group"
                        >
                            {/* Image Container with Background Shape */}
                            <div className="relative w-full aspect-square mb-6 flex justify-center items-end overflow-hidden pb-0 bg-[#F9F9F9] rounded-2xl">
                                {/* Background Colored Shape */}
                                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
                                  {member.shapeSVG}
                                </div>
                                {/* Subject Image - Grayscale turning color on hover */}
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="relative z-10 w-[85%] h-[95%] object-cover grayscale object-top brightness-110 contrast-125 mix-blend-darken group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500"
                                />
                            </div>

                            {/* Info */}
                            <div className="mb-6 w-full text-center sm:text-left">
                                <h3 className="text-xl font-bold text-[#0B1521] mb-1">{member.name}</h3>
                                <p className="text-[#64748B] font-medium text-sm lg:text-base">{member.role}</p>
                            </div>

                            {/* Socials */}
                            <div className="pt-5 border-t border-gray-100 w-full flex justify-center sm:justify-start gap-4">
                                <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-slate-100 text-[#0B1521] flex items-center justify-center hover:bg-[#00DF8F] hover:text-white transition-colors duration-300">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                                <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-slate-100 text-[#0B1521] flex items-center justify-center hover:bg-[#00DF8F] hover:text-white transition-colors duration-300">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
