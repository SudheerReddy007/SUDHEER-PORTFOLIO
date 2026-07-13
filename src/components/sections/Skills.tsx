"use client";

import { motion, Variants } from "framer-motion";

export function Skills() {
  const categories = [
    {
      title: "Programming",
      skills: ["Java", "C", "Python"],
      bulletColor: "bg-blue-400"
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      bulletColor: "bg-cyan-400"
    },
    {
      title: "Hardware & VLSI",
      skills: ["Verilog", "SystemVerilog", "CMOS VLSI", "Physical Design", "UART", "SPI", "I2C"],
      bulletColor: "bg-pink-400"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Qflow", "Yosys", "OpenSTA", "QRouter"],
      bulletColor: "bg-purple-400"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const chipVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#09090B] text-white border-t border-white/5">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/3 right-1/10 w-[550px] h-[550px] bg-[#8B5CF6]/5 rounded-full blur-[145px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/10 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1550px] w-[93%] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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

        {/* Single Large Premium Glass Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="glass p-10 md:p-12 rounded-[32px] border border-white/10 relative overflow-hidden shadow-2xl w-full max-w-[90%] mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none rounded-[32px]" />
          
          {/* Shimmer light reflection overlay */}
          <div className="absolute top-0 -inset-x-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-10 hover:animate-shine pointer-events-none" />

          {/* Grid Layout containing the 4 categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col gap-6 text-left"
              >
                {/* Category Header */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest border-b border-white/5 pb-3">
                    {cat.title}
                  </h3>
                </div>

                {/* Staggered Skill Chips */}
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                >
                  {cat.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      variants={chipVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="relative px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/95 hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.25)] transition-all duration-200 cursor-default flex items-center gap-1.5 overflow-hidden group/chip"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${cat.bulletColor}`} />
                      <span>{skill}</span>
                      
                      {/* Subtle chip shimmer */}
                      <div className="absolute top-0 -inset-x-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30 group-hover/chip:animate-shine pointer-events-none" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
