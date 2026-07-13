"use client";

import { motion } from "framer-motion";
import { Coffee, Atom, GitBranch, Database, Cpu } from "lucide-react";

// Custom inline SVG icons for ECE-specific categories
const VlsiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 9h6v6H9z" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
  </svg>
);

const LogicGateIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 5h6a7 7 0 0 1 0 14H5V5z" />
    <path d="M1 8h4M1 16h4M18 12h5" />
  </svg>
);

export function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "C++", "Verilog HDL", "SystemVerilog"],
      glow: "hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
    },
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
      glow: "hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git & GitHub", "Arduino IDE", "Vivado IDE", "MATLAB", "Q-Flow", "Yosys"],
      glow: "hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
    },
    {
      title: "Core Knowledge",
      skills: ["VLSI Design", "Physical Design", "Embedded Systems", "Digital System Design", "Microcontrollers"],
      glow: "hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
    }
  ];

  const showcaseTechs = [
    {
      icon: Coffee,
      name: "Java",
      desc: "Robust backend system architecture, object-oriented structuring, and software algorithms.",
      glow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] hover:border-red-500/30",
      iconColor: "text-red-400"
    },
    {
      icon: Atom,
      name: "React",
      desc: "Interactive components-based frontends, dynamic states, and performant web renderers.",
      glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:border-cyan-500/30",
      iconColor: "text-cyan-400"
    },
    {
      icon: GitBranch,
      name: "Git & GitHub",
      desc: "Distributed configuration repository tracing, code versioning, and secure teamwork sync.",
      glow: "group-hover:shadow-[0_0_30px_rgba(240,80,51,0.2)] hover:border-orange-500/30",
      iconColor: "text-orange-400"
    },
    {
      icon: Database,
      name: "SQL Databases",
      desc: "Data persistence systems, query structures, data structures, and relational definitions.",
      glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:border-blue-500/30",
      iconColor: "text-blue-400"
    },
    {
      icon: Cpu,
      name: "Arduino",
      desc: "Hardware microcontroller prototyping, sensory system modules, and hardware integration.",
      glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:border-emerald-500/30",
      iconColor: "text-emerald-400"
    },
    {
      icon: VlsiIcon,
      name: "VLSI Layout",
      desc: "Silicon layout placements, routing cycles, DRC/LVS assertions, and GDSII generation.",
      glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] hover:border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      icon: LogicGateIcon,
      name: "Verilog HDL",
      desc: "Behavioral and structural hardware modeling, gate-level RTL, and circuit synthesis.",
      glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] hover:border-pink-500/30",
      iconColor: "text-pink-400"
    },
    {
      icon: LogicGateIcon,
      name: "SystemVerilog",
      desc: "Advanced logic modeling verification, testbench design structures, and assertion checks.",
      glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:border-amber-500/30",
      iconColor: "text-amber-400"
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

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header section */}
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

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-300 ${cat.glow} text-left`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none rounded-3xl" />
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-white/5 pb-3">
                {cat.title}
              </h3>
              
              {/* Skill chips wrapper */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="relative px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/90 hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.25)] transition-all duration-200 cursor-default flex items-center gap-1.5 overflow-hidden group/chip"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                    <span>{skill}</span>
                    
                    {/* Liquid shine effect inside chip */}
                    <div className="absolute top-0 -inset-x-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-40 group-hover/chip:animate-shine pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Showcase Tech Grid */}
        <div className="flex flex-col gap-10">
          <h3 className="text-2xl font-bold tracking-tighter text-left">
            Tech Stack Showcase
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseTechs.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -6, rotateY: 3, rotateX: -3 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className={`group relative p-6 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-300 flex flex-col gap-4 text-left ${tech.glow}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none rounded-3xl" />
                  
                  {/* Icon with scaling & color transition */}
                  <div className={`p-4 rounded-2xl bg-white/5 ${tech.iconColor} w-fit group-hover:bg-white/10 transition-colors duration-300`}>
                    <Icon size={24} className="transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">{tech.name}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tech.desc}</p>
                  </div>

                  {/* Liquid glass shimmer shine reflection */}
                  <div className="absolute top-0 -inset-x-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20 group-hover:animate-shine rounded-3xl pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
