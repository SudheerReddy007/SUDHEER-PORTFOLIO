"use client";

import { motion } from "framer-motion";
import { Leaf, Cpu, Radio, Shield, CircuitBoard, AlertTriangle, Map, Navigation, Tag, Bell, Package, Car, Wifi, BarChart3, Clock, ArrowDownRight, Smartphone, MapPin, Activity, Siren } from "lucide-react";

export const XpyreIllustration = () => (
  <div className="relative w-full h-full bg-[#070B14] overflow-hidden flex items-center justify-center p-6">
    {/* Background glow */}
    <div className="absolute inset-0 bg-violet-500/10 blur-[60px] rounded-full" />
    
    {/* AI Dashboard Container */}
    <motion.div animate={{ y: [-4, 4, -4] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="relative z-10 w-full max-w-[200px] bg-white/5 dark:bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-2xl flex flex-col gap-3">
      
      {/* Dashboard Header - Analytics */}
      <div className="flex justify-between items-center pb-2 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <BarChart3 size={14} className="text-cyan-400" />
          <div className="w-12 h-1.5 bg-white/20 rounded-full" />
        </div>
        <div className="flex items-center gap-1 text-[8px] text-cyan-400 font-bold bg-cyan-500/10 px-1.5 py-0.5 rounded">
          <ArrowDownRight size={10} /> 40%
        </div>
      </div>

      {/* Supermarket Inventory / Products */}
      <div className="flex gap-2 relative">
        {/* Scanning Laser */}
        <motion.div 
          animate={{ x: [0, 160, 0] }} 
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          className="absolute -top-2 -bottom-2 left-0 w-[2px] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20"
        />

        {/* Product 1: Safe */}
        <div className="flex-1 flex flex-col items-center gap-1 bg-white/5 p-2 rounded-lg border border-white/5">
          <Package size={20} className="text-white/60" />
          <div className="w-8 h-1 bg-white/20 rounded-full" />
        </div>
        
        {/* Product 2: Expiring (Discounted) */}
        <div className="relative flex-1 flex flex-col items-center gap-1 bg-violet-500/10 p-2 rounded-lg border border-violet-500/30">
          <Package size={20} className="text-violet-400 drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
          <div className="flex items-center gap-1">
            <Clock size={8} className="text-cyan-400" />
            <div className="w-5 h-1 bg-cyan-400/80 rounded-full" />
          </div>
          {/* Floating Discount Tag */}
          <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="absolute -top-3 -right-3 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
            <div className="relative flex items-center justify-center">
              <Tag size={16} fill="currentColor" className="text-cyan-500" />
              <span className="absolute text-[6px] font-bold text-white z-10">%</span>
            </div>
          </motion.div>
        </div>
        
        {/* Product 3: Extra Inventory */}
        <div className="flex-1 flex flex-col items-center gap-1 bg-white/5 p-2 rounded-lg border border-white/5">
          <Package size={20} className="text-white/40" />
          <div className="w-6 h-1 bg-white/10 rounded-full" />
        </div>
      </div>
    </motion.div>

    {/* Floating Eco Leaf */}
    <motion.div animate={{ y: [0, 8, 0], x: [0, -5, 0], rotate: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="absolute bottom-1/4 left-1/4 text-cyan-500/50 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
      <Leaf size={28} />
    </motion.div>

    {/* Particles */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-violet-400 rounded-full"
        initial={{ opacity: 0, scale: 0, x: Math.random() * 120 - 60, y: Math.random() * 120 - 60 }}
        animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], y: "-=30" }}
        transition={{ repeat: Infinity, duration: 2 + Math.random() * 2, delay: Math.random() * 2 }}
      />
    ))}
  </div>
);

export const SpiIllustration = () => (
  <div className="relative w-full h-full bg-[#070B14] overflow-hidden flex items-center justify-center">
    {/* Background glow */}
    <div className="absolute inset-0 bg-violet-500/10 blur-[50px] rounded-full" />
    
    {/* PCB Traces */}
    <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        d="M 10 50 L 50 50 L 70 80 L 150 80" 
        fill="transparent" 
        stroke="#8B5CF6" 
        strokeWidth="2" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      />
      <motion.path 
        d="M 250 120 L 200 120 L 180 90 L 100 90" 
        fill="transparent" 
        stroke="#22D3EE" 
        strokeWidth="2" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 1 }}
      />
    </svg>

    <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="absolute z-10 text-violet-400 drop-shadow-[0_0_20px_rgba(124,58,237,0.5)]">
      <Cpu size={56} />
    </motion.div>
    
    <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute text-violet-500/20 scale-150">
      <CircuitBoard size={120} strokeWidth={1} />
    </motion.div>
  </div>
);

export const RadarIllustration = () => (
  <div className="relative w-full h-full bg-[#070B14] overflow-hidden flex items-center justify-center">
    {/* Background glow */}
    <div className="absolute inset-0 bg-cyan-500/5 blur-[50px] rounded-full" />
    
    {/* Radar Sweep */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-48 h-48 rounded-full border border-violet-500/30 relative flex items-center justify-center">
        <div className="w-32 h-32 rounded-full border border-violet-500/20 relative flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border border-violet-500/20" />
        </div>
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[50%] h-[50%] origin-top-left"
          style={{ background: 'conic-gradient(from 180deg at 0% 0%, rgba(34,211,238,0.4) 0deg, transparent 60deg)' }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
      </div>
    </div>
    
    {/* Radio Center */}
    <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="absolute z-10 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
      <Radio size={32} />
    </motion.div>

    {/* Blips */}
    <motion.div 
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }} 
      transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 1 }}
      className="absolute top-1/4 right-1/3 w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]"
    />
    <motion.div 
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }} 
      transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 2.2 }}
      className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]"
    />
  </div>
);

export const SafetyIllustration = () => (
  <div className="relative w-full h-full bg-[#070B14] overflow-hidden flex items-center justify-center p-6">
    {/* Background glow */}
    <div className="absolute inset-0 bg-blue-500/5 blur-[60px] rounded-full" />

    {/* Ambient Ground Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-violet-500/10 blur-[40px] rounded-full z-0" />

    {/* GPS Path & Satellite Pin */}
    <svg className="absolute inset-0 w-full h-full opacity-40 z-0" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        d="M 50 150 Q 150 100 250 150" 
        fill="transparent" 
        stroke="#7C3AED" 
        strokeWidth="2" 
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
    </svg>

    <motion.div animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-1/4 right-1/3 text-violet-400 drop-shadow-[0_0_10px_rgba(124,58,237,0.6)] z-10">
      <MapPin size={24} fill="currentColor" className="text-violet-500" />
      <motion.div animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-violet-400/50 rounded-full blur-[2px]" />
    </motion.div>

    {/* Central Smart Vehicle */}
    <div className="relative z-20 flex flex-col items-center">
      {/* Ultrasonic Sensor Waves */}
      <motion.div animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }} transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }} className="absolute top-4 w-20 h-20 rounded-full border border-cyan-400/40" />
      <motion.div animate={{ scale: [1, 4, 1], opacity: [0.4, 0, 0.4] }} transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 0.3 }} className="absolute top-4 w-20 h-20 rounded-full border border-cyan-400/20" />
      
      <motion.div animate={{ y: [-2, 2, -2] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="relative text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
        <div className="bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center relative">
          <Car size={40} className="text-blue-400" />
          
          {/* Adaptive Headlights (LED Beams) */}
          <motion.div 
            animate={{ rotate: [-10, 10, -10], opacity: [0.5, 0.8, 0.5] }} 
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -right-12 top-1/2 -translate-y-1/2 w-16 h-12 bg-gradient-to-r from-cyan-400/60 to-transparent blur-[8px] origin-left rounded-r-full pointer-events-none" 
          />
          <motion.div 
            animate={{ rotate: [10, -10, 10], opacity: [0.5, 0.8, 0.5] }} 
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -left-12 top-1/2 -translate-y-1/2 w-16 h-12 bg-gradient-to-l from-cyan-400/60 to-transparent blur-[8px] origin-right rounded-l-full pointer-events-none" 
          />
        </div>
      </motion.div>
    </div>

    {/* SOS / Accident Alert System */}
    <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }} className="absolute bottom-1/4 right-1/4 z-30">
      <div className="relative bg-[#0F172A]/80 backdrop-blur-md p-2 rounded-xl border border-[#D4AF37]/30 flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
        <Smartphone size={16} className="text-[#D4AF37]" />
        <div className="flex flex-col gap-1">
          <div className="w-8 h-1 bg-white/20 rounded-full" />
          <div className="flex items-center gap-1">
            <Siren size={10} className="text-red-400" />
            <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} className="text-[8px] font-bold text-red-400">SOS</motion.div>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Safety Shield */}
    <motion.div animate={{ y: [0, -5, 0], scale: [0.9, 1.1, 0.9] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 text-cyan-400/80 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] z-20">
      <Shield size={28} />
      <Activity size={12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
    </motion.div>

    {/* Ambient Particles */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-violet-400 rounded-full"
        initial={{ opacity: 0, scale: 0, x: Math.random() * 160 - 80, y: Math.random() * 100 - 50 }}
        animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], y: "+=30" }}
        transition={{ repeat: Infinity, duration: 2 + Math.random() * 2, delay: Math.random() * 2 }}
      />
    ))}
  </div>
);
