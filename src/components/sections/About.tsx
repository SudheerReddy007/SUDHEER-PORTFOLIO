"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Cpu, Rocket, Terminal, Coffee, Sparkles, Layers } from "lucide-react";

export function About() {
  const infoCards = [
    {
      icon: MapPin,
      title: "Location",
      value: "Andhra Pradesh, India",
      desc: "Vellore Institute of Technology",
      color: "from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-400"
    },
    {
      icon: GraduationCap,
      title: "Education",
      value: "B.Tech in ECE",
      desc: "CGPA: 9.32 | 2023 - 2027",
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-400"
    },
    {
      icon: Cpu,
      title: "Specialization",
      value: "VLSI & Digital Design",
      desc: "Physical Design & RTL",
      color: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-400"
    },
    {
      icon: Rocket,
      title: "ECE Interests",
      value: "Hardware & Software",
      desc: "RTL, Embedded, C++ & Java",
      color: "from-orange-500/10 to-amber-500/10",
      iconColor: "text-orange-400"
    }
  ];

  const interestItems = [
    { label: "📡 Digital Design", desc: "Modeling logical circuits, simulation testing, and structural synthesis." },
    { label: "🔬 VLSI & Physical Design", desc: "SPI cell routing layouts, DRC/LVS analysis, and GDSII generation." },
    { label: "📶 Embedded Systems", desc: "Prototyping microcontroller sensors, firmware logic, and IoT circuits." },
    { label: "⚡ Semiconductor Technology", desc: "Understanding CMOS fundamentals, transistor properties, and physics." },
    { label: "📖 Learning New Hardware Protocols", desc: "Exploring SPI, I2C, UART, and custom system bus communications." }
  ];

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
    <section id="about" className="py-32 relative overflow-hidden bg-[#09090B] text-white">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#8B5CF6]/40 rounded-full"
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12 text-center"
        >
          {/* Header */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#B4B4C4] mb-3 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-center">
              About Me
            </h2>
          </div>

          {/* Professional Introduction Card */}
          <div className="glass p-8 rounded-3xl border border-white/10 text-left relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
            <p className="text-lg text-[#B4B4C4] leading-relaxed relative z-10">
              I am a dedicated final-year Electronics and Communication Engineering student at Vellore Institute of Technology, specializing in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] font-bold">VLSI Physical Design</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] font-bold">Embedded Systems</span>, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED] font-bold">Digital Design</span>. I enjoy combining physical hardware foundations with clean, robust <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] font-bold">Software Development</span>. As an active problem solver, I work to bridge RTL code simulations with concrete hardware architectures and end-to-end web tooling.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:shadow-lg flex items-start gap-4 text-left"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none rounded-2xl" />
                  
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} ${card.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest block mb-0.5">{card.title}</span>
                    <span className="font-semibold text-white block text-sm">{card.value}</span>
                    <span className="text-xs text-[#B4B4C4]/70 block mt-0.5">{card.desc}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interests Card */}
          <div className="flex flex-col gap-6 text-left">
            <h3 className="text-2xl font-bold tracking-tighter">
              Core ECE Focus & Interests
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interestItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  className="group relative p-5 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-300 hover:border-[#8B5CF6]/30 hover:shadow-md text-left"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none rounded-2xl" />
                  <h4 className="font-bold text-white text-sm mb-1.5">{item.label}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Learning Journey Timeline */}
          <div className="flex flex-col gap-8 pt-8 w-full">
            <h3 className="text-2xl font-bold tracking-tighter text-left border-b border-white/5 pb-3">
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
                    <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full border-4 border-[#09090B] bg-[#7C3AED] flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.5)] z-20">
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
