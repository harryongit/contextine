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
 <div className="relative overflow-hidden">
  <p className="text-sm text-white/60 mb-6 tracking-widest text-center">
    TRUSTED BY TEAMS AT
  </p>

  {/* Fade edges */}
  <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#050B3D] to-transparent z-10" />
  <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#050B3D] to-transparent z-10" />

  <div className="overflow-hidden">
    <motion.div
      className="flex gap-16 w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
    >
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex gap-16 items-center">

          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="h-8 opacity-70 hover:opacity-100 transition" />

          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-8 opacity-70 hover:opacity-100 transition" />

          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="h-8 opacity-70 hover:opacity-100 transition" />

          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="h-8 invert opacity-70 hover:opacity-100 transition" />

          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" className="h-8 opacity-70 hover:opacity-100 transition" />

          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className="h-8 opacity-70 hover:opacity-100 transition" />

        </div>
      ))}
    </motion.div>
  </div>
</div>
    </section>
  );
}