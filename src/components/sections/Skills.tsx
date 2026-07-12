"use client";

import { motion } from "framer-motion";
import { skills, tools } from "@/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 text-sm font-medium glass rounded-full hover:bg-white/10 hover:-translate-y-0.5 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Tools & Software</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 text-sm font-medium glass rounded-full hover:bg-white/10 hover:-translate-y-0.5 transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
