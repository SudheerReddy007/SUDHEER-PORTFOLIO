"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";





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

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[54fr_46fr] gap-8 items-center relative z-10">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left lg:pl-8"
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
            className="text-[3.25rem] md:text-[5.25rem] font-bold tracking-tighter text-balance mb-5 leading-none"
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
            className="text-2xl font-semibold text-[#8B5CF6] tracking-wide mb-6 uppercase flex items-center gap-2"
          >
            ECE Student / Circuit Designer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl text-[#B4B4C4] max-w-[740px] mb-5 leading-[1.7]"
          >
            An enthusiastic and dedicated final-year Electronics and Communication Engineering student with a solid academic background in circuit design, communication systems, and digital electronics. Passionate about VLSI, software development, and building innovative digital solutions that combine creativity with engineering excellence.
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

        </motion.div>

        {/* Right Column - Portrait & Ambient Glow */}
        <div className="flex items-center justify-center relative min-h-[480px] md:min-h-[580px] lg:min-h-[680px] w-full self-center">
          {/* Layered glows and concentric rings behind the portrait */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-125 -translate-y-12">
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
            className="relative z-10 w-full max-w-[380px] md:max-w-[460px] lg:max-w-[500px] aspect-[4/5] flex items-center justify-center -translate-y-12"
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
