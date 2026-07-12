"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Premium Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none opacity-40" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-border/50 glass shadow-xl p-1 relative">
            <div className="w-full h-full bg-muted rounded-full overflow-hidden flex items-center justify-center">
               <span className="text-4xl text-primary font-bold">SR</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-balance mb-6"
        >
          Hi, I'm <span className="text-glow text-primary">Sudheer</span>.<br />
          <span className="text-muted-foreground/80">ECE Student.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mb-10 text-balance leading-relaxed"
        >
          An enthusiastic and dedicated final-year Electronics and Communication Engineering student with a solid academic background in circuit design, communication systems, and digital electronics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full btn-primary text-sm font-semibold flex items-center gap-2"
          >
            View Work
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-foreground text-sm font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
