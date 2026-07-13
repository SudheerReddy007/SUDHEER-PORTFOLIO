"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#09090B] text-white border-t border-white/5">
      <div className="max-w-[1350px] w-[90%] mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[90%] mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#B4B4C4]/60 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            History
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-left">Experience</h2>
        </motion.div>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12 max-w-[90%] mx-auto w-full text-left">
          {/* Vertical connecting line */}
          <div className="absolute top-0 bottom-0 left-0 w-[1.5px] bg-gradient-to-b from-[#7C3AED] via-[#8B5CF6] to-transparent" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 18 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline circle node */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-[#09090B] bg-[#7C3AED] flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.5)] z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                </div>
                
                <div className="glass p-8 rounded-[24px] hover:border-white/10 hover:shadow-[0_8px_32px_rgba(124,58,237,0.1)] transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none rounded-[24px]" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2 relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#8B5CF6] transition-colors">{exp.role}</h3>
                    <span className="text-sm font-semibold text-[#8B5CF6] bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-4 py-1.5 rounded-full inline-block w-fit">
                      {exp.duration}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-muted-foreground mb-4 relative z-10">{exp.company}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm relative z-10">
                    {exp.description}
                  </p>
                  
                  {/* Liquid shine sweep on card */}
                  <div className="absolute top-0 -inset-x-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20 group-hover:animate-shine pointer-events-none rounded-[24px]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
