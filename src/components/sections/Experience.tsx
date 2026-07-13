"use client";

import { motion } from "framer-motion";

export function Experience() {
  const techStack = [
    "Qflow", "Yosys", "Graywolf", "OpenSTA", "QRouter", "Magic", "Netgen", "Verilog"
  ];

  const responsibilities = [
    "Implemented complete RTL to GDSII physical design flow for a Serial Peripheral Interface (SPI).",
    "Performed logic synthesis and optimization using the Yosys compiler toolchain.",
    "Executed place & route runs utilizing Graywolf placement and Qrouter routing engines.",
    "Conducted Static Timing Analysis (STA) with OpenSTA to optimize signal pathways and resolve setup/hold violations."
  ];

  const achievements = [
    "Generated a fully routed, timing-closed SPI macro layout suitable for manufacturing integration.",
    "Validated physical integrity using Magic (DRC) and Netgen (LVS) with zero rule violations.",
    "Gained practical experience applying industry-standard open-source VLSI CAD toolchains."
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#09090B] text-white border-t border-white/5">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-[95vw] max-w-[1800px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[95%] mx-auto mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#B4B4C4]/60 mb-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            History
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center">Experience</h2>
        </motion.div>

        {/* Single Premium Experience Card centered at 95% content width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="glass p-10 md:p-12 rounded-[32px] border border-white/10 relative overflow-hidden shadow-2xl space-y-8 w-full max-w-[95%] mx-auto text-left group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none rounded-[32px]" />
          
          {/* Shimmer light reflection overlay */}
          <div className="absolute top-0 -inset-x-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-10 group-hover:animate-shine pointer-events-none rounded-[32px]" />

          {/* Heading Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors">
                Maven Silicon
              </h3>
              <p className="text-lg font-semibold text-[#8B5CF6] mt-1">
                VLSI Physical Design Intern
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-2">
              <span className="text-sm font-semibold text-[#8B5CF6] bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-4 py-1.5 rounded-full inline-block w-fit">
                May 2025 — July 2025
              </span>
              <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest block">
                📍 Bangalore, India
              </span>
            </div>
          </div>

          {/* Technologies Tag Group */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-muted-foreground">
              Technologies & Flow Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-xs font-semibold text-white/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Subtle separator */}
          <div className="h-[1px] bg-white/5 w-full" />

          {/* Two column layout for responsibilities & achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-widest text-[#8B5CF6] border-b border-white/5 pb-2">
                Key Responsibilities
              </h4>
              <ul className="text-sm text-muted-foreground space-y-3 list-disc list-inside">
                {responsibilities.map((item, idx) => (
                  <li key={idx} className="leading-relaxed hover:text-[#B4B4C4] transition-colors">{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-widest text-[#8B5CF6] border-b border-white/5 pb-2">
                Internship Achievements
              </h4>
              <ul className="text-sm text-muted-foreground space-y-3 list-disc list-inside">
                {achievements.map((item, idx) => (
                  <li key={idx} className="leading-relaxed hover:text-[#B4B4C4] transition-colors">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
