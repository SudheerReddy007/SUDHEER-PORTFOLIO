"use client";

import { motion } from "framer-motion";
import { Terminal, Coffee, Cpu, Sparkles } from "lucide-react";

export function LearningJourney() {
  const timelineEvents = [
    {
      year: "2023",
      icon: Terminal,
      items: [
        "Started B.Tech in Electronics & Communication Engineering.",
        "Learned C Programming fundamentals.",
        "Built logical thinking and programming basics."
      ]
    },
    {
      year: "2024",
      icon: Coffee,
      items: [
        "Learned Java and Object-Oriented Programming.",
        "Strengthened Data Structures and problem-solving.",
        "Started working on Arduino-based embedded projects."
      ]
    },
    {
      year: "2025",
      icon: Cpu,
      items: [
        "Learned Verilog and SystemVerilog.",
        "Studied CMOS VLSI fundamentals.",
        "Learned SPI, I2C, UART, and other communication protocols.",
        "Completed VLSI Physical Design Internship.",
        "Worked with Qflow, Yosys, Graywolf, OpenSTA, and QRouter.",
        "Built hardware and embedded system projects."
      ]
    },
    {
      year: "2026",
      icon: Sparkles,
      items: [
        "Exploring advanced VLSI Physical Design.",
        "Improving software development skills.",
        "Building modern web applications and personal projects.",
        "Preparing for Software and VLSI career opportunities."
      ]
    }
  ];

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[#09090B] text-white border-t border-white/5">
      <div className="max-w-[1550px] w-[93%] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12 text-center"
        >
          <div className="flex flex-col gap-8 w-full max-w-[90%] mx-auto">
            <h3 className="text-3xl font-bold tracking-tighter text-left border-b border-white/5 pb-4">
              My Learning Journey
            </h3>
            
            <div className="relative border-l border-white/10 pl-8 ml-4 space-y-12 text-left">
              {/* Timeline line vertical connector */}
              <div className="absolute top-0 bottom-0 left-0 w-[1.5px] bg-gradient-to-b from-[#7C3AED] via-[#8B5CF6] to-transparent" />

              {timelineEvents.map((evt, index) => {
                const Icon = evt.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Circle Node */}
                    <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-[#09090B] bg-[#7C3AED] flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.5)] z-20">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    </div>

                    <div className="glass p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] transition-all duration-300 relative text-left group">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none rounded-3xl" />
                      
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#7C3AED]/20 text-[#8B5CF6] border border-[#7C3AED]/30">
                          {evt.year}
                        </span>
                        <div className="p-1.5 rounded-lg bg-white/5 text-[#8B5CF6] group-hover:bg-[#8B5CF6]/15 group-hover:text-white transition-all duration-300">
                          <Icon size={16} />
                        </div>
                      </div>
                      
                      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                        {evt.items.map((item, i) => (
                          <li key={i} className="leading-relaxed hover:text-[#B4B4C4] transition-colors">{item}</li>
                        ))}
                      </ul>
                      
                      {/* Liquid glass light shine reflection */}
                      <div className="absolute top-0 -inset-x-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20 group-hover:animate-shine rounded-3xl pointer-events-none" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
