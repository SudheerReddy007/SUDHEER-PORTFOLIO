"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Custom inline SVG icons for social platforms because of local lucide-react version compatibility
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);



export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  // Generate background particles on mount
  useEffect(() => {
    const generatedParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5
    }));
    setParticles(generatedParticles);

    // Track mouse coordinates for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / 35;
      const y = (clientY - innerHeight / 2) / 35;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#09090B] text-white">
      {/* Background Radial Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[140px] pointer-events-none opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none opacity-30" />
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-[#A855F7]/10 rounded-full blur-[100px] pointer-events-none opacity-30" />

      {/* Floating Star Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-white/40 rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: ["0px", "-60px", "0px"],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left"
          style={{ x: mousePos.x * 0.2, y: mousePos.y * 0.2 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-[#B4B4C4] mb-3 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            Welcome to my portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-balance mb-5 leading-tight"
          >
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
              Sudheer Reddy
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl font-medium text-[#8B5CF6] tracking-wide mb-6 uppercase flex items-center gap-2"
          >
            ECE Student / Circuit Designer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base md:text-lg text-[#B4B4C4] max-w-xl mb-8 leading-relaxed text-balance"
          >
            An enthusiastic and dedicated final-year Electronics and Communication Engineering student with a solid academic background in circuit design, communication systems, and digital electronics.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white text-sm font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all duration-300"
            >
              View Work
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm shadow-lg"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center gap-6 text-[#B4B4C4]"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <GithubIcon className="w-[22px] h-[22px]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-[22px] h-[22px]" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-[22px] h-[22px]" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Portrait & Ambient Glow */}
        <div className="lg:col-span-5 flex items-center justify-center relative min-h-[480px] md:min-h-[580px] lg:min-h-[680px] w-full self-center">
          {/* Layered glows and concentric rings behind the portrait */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-125 -translate-y-8">
            {/* Glowing cores */}
            <div className="absolute w-[120%] h-[120%] bg-[#7C3AED]/35 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
            <div className="absolute w-[95%] h-[95%] bg-[#8B5CF6]/28 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "5s" }} />
            <div className="absolute w-[70%] h-[70%] bg-[#A855F7]/22 rounded-full blur-[80px]" />

            {/* Glowing ring 1 */}
            <motion.div
              className="absolute w-[90%] h-[90%] rounded-full border border-[#7C3AED]/25 blur-[2px]"
              animate={{ scale: [0.97, 1.03, 0.97], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Glowing ring 2 - concentric dashed */}
            <motion.div
              className="absolute w-[75%] h-[75%] rounded-full border border-dashed border-[#8B5CF6]/35"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* Glowing ring 3 */}
            <motion.div
              className="absolute w-[60%] h-[60%] rounded-full border-2 border-[#A855F7]/15 blur-[0.5px]"
              animate={{ scale: [1.03, 0.97, 1.03], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Glowing ring 4 */}
            <motion.div
              className="absolute w-[45%] h-[45%] rounded-full border border-[#7C3AED]/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Portrait Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[380px] md:max-w-[460px] lg:max-w-[500px] aspect-[4/5] flex items-center justify-center -translate-y-8"
            style={{ x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
          >
            <motion.img
              src="/images/portrait.png"
              alt="Sudheer Reddy Portrait"
              className="w-full h-auto object-contain drop-shadow-[0_15px_50px_rgba(124,58,237,0.35)]"
              style={{
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.8) 65%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.8) 65%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0) 100%)"
              }}
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
