"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Jane is an exceptional designer. She has a unique ability to translate complex business requirements into elegant, intuitive user interfaces. Her work on our dashboard directly contributed to a significant increase in user engagement.",
    author: "Alex Morgan",
    role: "VP of Product, Nova Bank"
  },
  {
    quote: "Working with Jane was a game-changer for our mobile app. She brings a perfect balance of aesthetic sensibility and usability best practices. She is highly collaborative and always delivers beyond expectations.",
    author: "Sarah Chen",
    role: "CEO, Luxe Fashion"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">What People Say</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 md:p-10 rounded-2xl relative"
            >
              <Quote size={40} className="text-primary/10 absolute top-8 left-8" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
