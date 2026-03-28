import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import heroVideo from '../../assets/web-homepage-hero-1920x1200_final.mp4'
import left from '../../assets/hero-img.svg'
import right from '../../assets/hero-img1.svg'
import Button from '../../common/Button.jsx'
import rightgroupiconhero from '../../assets/rightgroupiconhero.svg'
import leftgroupiconhero from '../../assets/leftgroupiconhero.svg'
export default function Hero() {
  const ref = useRef(null);

  // Track scroll relative to section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 🔥 Strong but smooth zoom OUT
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  // optional slight move (adds depth)
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-[radial-gradient(125%_130.93%_at_50%_-20%,_#112D5B_0%,_#050B3D_100%)] py-20  "
    >
      {/* Background */}
      <img
        src={right}
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/2 -translate-y-1/2 opacity-90 -z-10"

      />
      <motion.img
        src={leftgroupiconhero}
        className="absolute left-4 top-[18%] h-auto -z-10"
        alt="Group Icon Hero"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <img
        src={left}
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 opacity-90 -z-10"
      />
      <motion.img
        src={rightgroupiconhero}
        className="absolute right-0 top-[20%] h-auto -z-10"
        alt="Group Icon Hero"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="relative mx-auto px-4 pb-32">
        <div className="mx-auto text-center z-10">

          {/* ✨ Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Compliance That Drives Real Advantage
          </motion.h1>

          {/* ✨ Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-lg text-white/80"
          >
            But regular compliance audits save businesses $2.86 million on average. <br />
            Ensure compliance in your operations with Contextine.
          </motion.p>

          {/* ✨ Button */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <Button href="#" variant="teal" size="lg">
              Schedule a Demo
            </Button>
          </motion.div>

          {/* 🎥 Zoom Out Animation */}
          <motion.div
            style={{ scale, y }}
            className="mt-10"
          >
            <video
              src={heroVideo}
              className="mx-auto w-full max-w-4xl rounded-xl shadow-2xl ring-1 ring-white/10 "
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>

        </div>

      </div>

    </section>
  );
}