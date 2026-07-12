"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data";

export function Experience() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">Experience</h2>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="absolute -left-10 md:-left-10 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
              
              <div className="glass p-8 rounded-3xl hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(37,99,235,0.15)] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block w-fit">
                    {exp.duration}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-muted-foreground mb-4">{exp.company}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
