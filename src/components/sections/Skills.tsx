"use client";

import { motion } from "framer-motion";

export function Skills() {
  const categories = [
    {
      title: "Programming",
      skills: ["Java", "C", "Python"],
      glow: "hover:border-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]",
      bulletColor: "bg-blue-400"
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      glow: "hover:border-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)]",
      bulletColor: "bg-cyan-400"
    },
    {
      title: "Hardware & VLSI",
      skills: ["Verilog", "SystemVerilog", "CMOS VLSI", "Physical Design", "UART", "SPI", "I2C"],
      glow: "hover:border-pink-500/20 hover:shadow-[0_0_20px_rgba(236,72,153,0.08)]",
      bulletColor: "bg-pink-400"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Qflow", "Yosys", "OpenSTA", "QRouter"],
      glow: "hover:border-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.08)]",
      bulletColor: "bg-purple-400"
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#09090B] text-white border-t border-white/5">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/3 right-1/10 w-[450px] h-[450px] bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/10 w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#B4B4C4]/60 mb-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            Abilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Technical Skills
          </h2>
          <p className="text-base text-muted-foreground text-balance">
            Technologies and tools I use to build scalable, modern solutions.
          </p>
        </motion.div>

        {/* Categories 2x2 Grid (Extremely Compact) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[95%] md:max-w-[85%] mx-auto">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-300 ${cat.glow} text-left`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none rounded-2xl" />
              
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                {cat.title}
              </h3>
              
              {/* Skill Chips wrapper */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="relative px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/90 hover:border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/5 transition-all duration-200 cursor-default flex items-center gap-1.5 overflow-hidden group/chip"
                  >
                    <span className={`w-1 h-1 rounded-full ${cat.bulletColor}`} />
                    <span>{skill}</span>
                    
                    {/* Subtle shine on hover */}
                    <div className="absolute top-0 -inset-x-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30 group-hover/chip:animate-shine pointer-events-none" />
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
