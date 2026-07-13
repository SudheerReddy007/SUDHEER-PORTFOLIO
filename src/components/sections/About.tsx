"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Cpu, Rocket, Lightbulb, BookOpen, Sparkles, Layers } from "lucide-react";

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
      value: "VLSI & Circuits",
      desc: "Physical Design & RTL",
      color: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-400"
    },
    {
      icon: Rocket,
      title: "Interests",
      value: "Software & IoT",
      desc: "Fullstack Java & IoT Prototypes",
      color: "from-orange-500/10 to-amber-500/10",
      iconColor: "text-orange-400"
    }
  ];

  const driveCards = [
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Creating hardware-software interfaces that optimize logic design and improve physical design throughput.",
      color: "group-hover:border-[#7C3AED]/50"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      desc: "Proactively diving into HDL verification workflows (SystemVerilog), advanced VLSI toolchains, and modern web tech.",
      color: "group-hover:border-[#8B5CF6]/50"
    },
    {
      icon: Sparkles,
      title: "Problem Solving",
      desc: "Approaching logical problems with analytical depth—whether it is cell routing layout optimization or system APIs.",
      color: "group-hover:border-[#A855F7]/50"
    },
    {
      icon: Layers,
      title: "Real-World Products",
      desc: "Focusing on tangible execution, building fully integrated hardware radar modules and expiratory tracking software.",
      color: "group-hover:border-[#7C3AED]/50"
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

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[42fr_58fr] gap-16 items-start">
          
          {/* Left Column: Glass Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center lg:sticky lg:top-28"
          >
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-[28px] p-[2px] bg-gradient-to-b from-white/10 to-white/0 overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Inner Liquid Glass Card overlay */}
              <div className="absolute inset-0 bg-neutral-950/80 rounded-[26px] z-0" />
              
              {/* Floating gradient glow behind image */}
              <div className="absolute inset-4 bg-[#7C3AED]/15 blur-[35px] rounded-[24px] z-10 transition-all duration-500 group-hover:bg-[#8B5CF6]/25 group-hover:scale-105" />

              {/* Animated border glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-[28px]" />

              {/* Content Holder */}
              <div className="relative w-full h-full rounded-[26px] overflow-hidden z-20 flex items-center justify-center">
                <img
                  src="/images/portrait.png"
                  alt="Sudheer Reddy Portrait"
                  className="w-[90%] h-[90%] object-contain drop-shadow-[0_15px_30px_rgba(124,58,237,0.25)] transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0.8) 85%, rgba(0,0,0,0.4) 93%, rgba(0,0,0,0) 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0.8) 85%, rgba(0,0,0,0.4) 93%, rgba(0,0,0,0) 100%)"
                  }}
                />
                
                {/* Shimmer Light Reflection Overlay */}
                <div className="absolute top-0 -inset-x-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40 group-hover:animate-shine z-30" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: About Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-10"
          >
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-[#B4B4C4] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-left">
                About Me
              </h2>
              
              {/* Frosted Glass Content Panel */}
              <div className="glass p-8 rounded-3xl border border-white/10 text-left relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                <p className="text-lg text-[#B4B4C4] leading-relaxed relative z-10">
                  I am an enthusiastic and dedicated final-year Electronics and Communication Engineering student (<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] font-bold">ECE Student</span>) at Vellore Institute of Technology. I specialize as a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] font-bold">VLSI Enthusiast</span> and a versatile <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED] font-bold">Software Developer</span>. As a committed <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] font-bold">Java Developer</span> and logical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] font-bold">Problem Solver</span>, I enjoy bridging the gap between digital circuit implementation and building highly optimized, creative software solutions.
                </p>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:shadow-lg flex items-start gap-4 text-left"
                  >
                    {/* Liquid glass glow overlay */}
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

            {/* "What Drives Me" Grid */}
            <div className="flex flex-col gap-6 pt-4">
              <h3 className="text-2xl font-bold tracking-tighter text-left">
                What Drives Me
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {driveCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4 }}
                      className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:shadow-lg text-left"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none rounded-2xl" />
                      
                      {/* Sub-hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/0 to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" />

                      <div className="p-3 rounded-xl bg-white/5 text-[#8B5CF6] w-fit mb-4 group-hover:bg-[#8B5CF6]/15 group-hover:text-white transition-all duration-300">
                        <Icon size={20} />
                      </div>
                      <h4 className="font-semibold text-white mb-2 text-sm uppercase tracking-wider">{card.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                      
                      {/* Liquid glass light shine reflection */}
                      <div className="absolute top-0 -inset-x-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20 group-hover:animate-shine rounded-2xl pointer-events-none" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
