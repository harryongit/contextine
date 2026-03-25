import React from 'react';
import { motion } from 'framer-motion';
import mapSvg from '../../../assets/map.svg';

const MapPin = ({ top, left, delay }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0, y: 10 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay, type: 'spring', stiffness: 200, damping: 15 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute flex items-center justify-center group z-10"
        style={{ top, left, transform: 'translate(-50%, -50%)' }}
    >
        {/* Ripple Effect */}
        <span className="absolute w-10 h-10 rounded-full bg-[#00DF8F]/30 animate-ping" style={{ animationDuration: '3s' }}></span>

        {/* Pin Body */}
        <div className="relative w-8 h-8 bg-[#00DF8F] rounded-full flex items-center justify-center shadow-md shadow-[#00DF8F]/30 cursor-pointer group-hover:scale-110 group-hover:bg-[#00c981] transition-all duration-300">
            {/* Small internal S or logo shape matching the reference */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#062F24]">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.333 13.6c-1.133 1.133-2.6 1.733-4.266 1.733-1.667 0-3.134-.6-4.267-1.733-.333-.333-.333-.8 0-1.133.333-.333.8-.333 1.134 0 .866.867 1.933 1.267 3.133 1.267 1.2 0 2.267-.4 3.133-1.267.867-.866 1.267-1.933 1.267-3.133 0-1.2-.4-2.267-1.267-3.134C13.067 7 11.667 6.4 10.067 6.4c-1.6 0-3.067.6-4.2 1.733-.333.334-.333.8 0 1.134.333.333.8.333 1.133 0 .867-.867 1.934-1.267 3.067-1.267 1.133 0 2.2.4 3.066 1.267.867.867 1.267 1.933 1.267 3.067 0 1.133-.4 2.2-1.267 3.066z" fill="currentColor" />
            </svg>
        </div>
    </motion.div>
);

const WhereWeAre = () => {
    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Decorative top pattern/fade not necessary as it matches AboutSection bg */}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Text */}
                <div className="text-center mb-16 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-[2.5rem] md:text-[4rem] font-extrabold text-[#0F172A] mb-4 tracking-tight leading-tight"
                    >
                        6 hubs across 3 countries
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-[#475569] text-base md:text-lg max-w-2xl mx-auto font-medium"
                    >
                        We're distributed across San Francisco, New York, Austin, Denver, Toronto, and London.
                    </motion.p>
                </div>

                {/* Map Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative w-full rounded-3xl md:rounded-[2.5rem] border border-gray-100 p-6 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                    <div className="relative w-full aspect-[16/10] md:aspect-[1.8/1] overflow-hidden flex items-center justify-center">
                        {/* The Map SVG */}
                        <img
                            src={mapSvg}
                            alt="World Map showing Contextine Hubs"
                            className="absolute w-full h-full object-contain object-center"
                        />

                        {/* Map Pins */}
                        {/* San Francisco */}
                        <MapPin top="68%" left="19%" delay={0.3} />
                        {/* Denver */}
                        <MapPin top="61%" left="22%" delay={0.4} />
                        {/* Austin */}
                        <MapPin top="72%" left="25%" delay={0.5} />
                        {/* Toronto */}
                        <MapPin top="56%" left="33%" delay={0.6} />
                        {/* New York */}
                        <MapPin top="62%" left="35%" delay={0.7} />
                        {/* London */}
                        <MapPin top="52%" left="58%" delay={0.8} />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default WhereWeAre;
