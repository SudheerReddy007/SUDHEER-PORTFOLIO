"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">About Me</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I aspire to gain practical industry experience through internships and projects, while contributing innovative ideas and technical skills to organizational growth. I am committed to continuous learning and building a strong career in the field of electronics and communication.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Education</h3>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="font-bold text-foreground">Vellore Institute Of Technology AP (VIT-AP)</span>
                  <span className="text-sm">B. Tech in Electronics and Communication Engineering (2023-2027) | CGPA: 9.32</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-foreground">Sri Chaitanya Junior College</span>
                  <span className="text-sm">M.P.C (June 2021 – April 2023) | Percentage: 97.9%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-border">
            {[
              { label: "CGPA", value: "9.32" },
              { label: "Projects", value: "2+" },
              { label: "Internships", value: "1" },
              { label: "Graduation", value: "2027" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col gap-2">
                <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
