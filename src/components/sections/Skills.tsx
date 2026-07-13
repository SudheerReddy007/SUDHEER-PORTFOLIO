"use client";

import { motion } from "framer-motion";

export function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      skills: ["Java", "C", "Python (Basic)"],
      glow: "hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
    },
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      glow: "hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
    },
    {
      title: "Hardware & VLSI",
      skills: ["Verilog", "SystemVerilog", "CMOS VLSI", "Physical Design", "Digital Electronics"],
      glow: "hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]"
    },
    {
      title: "Embedded Systems",
      skills: ["Arduino", "Embedded C", "UART", "SPI", "I2C"],
      glow: "hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Qflow", "Yosys", "Graywolf", "OpenSTA", "QRouter"],
      glow: "hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-[#09090B] text-white border-t border-white/5">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/3 right-1/10 w-[550px] h-[550px] bg-[#8B5CF6]/5 rounded-full blur-[145px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/10 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#7C3AED]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: ["0px", "-50px", "0px"],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#B4B4C4] mb-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            Abilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Technologies and tools I use to build scalable, modern solutions.
          </p>
        </motion.div>

        {/* Categories Grid Layout */}
        <div className="flex flex-col gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`group relative p-6 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-300 ${cat.glow} text-left`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none rounded-3xl" />
              
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                {/* Category Title */}
                <h3 className="text-sm font-bold text-white uppercase tracking-wider min-w-[200px] border-b md:border-b-0 md:border-r border-white/5 pb-2 md:pb-0 md:pr-4">
                  {cat.title}
                </h3>
                
                {/* Skill Chips Group */}
                <div className="flex flex-wrap gap-2.5 flex-1">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="relative px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/90 hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.25)] transition-all duration-200 cursor-default flex items-center gap-1.5 overflow-hidden group/chip"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                      <span>{skill}</span>
                      
                      {/* Liquid glass shine reflection */}
                      <div className="absolute top-0 -inset-x-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-40 group-hover/chip:animate-shine pointer-events-none" />
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
