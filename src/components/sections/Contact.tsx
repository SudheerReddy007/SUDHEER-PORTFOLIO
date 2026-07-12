"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    
    // REPLACE WITH YOUR FORMSPREE ENDPOINT URL
    const endpoint = "https://formspree.io/f/your_form_id_here";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Let's build something amazing together.</h2>
          <p className="text-xl text-muted-foreground mb-12 text-balance mx-auto">
            I'm currently available for freelance projects and full-time opportunities. If you have a project that needs some creative magic, I'd love to hear about it.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass p-12 rounded-3xl flex flex-col items-center justify-center text-center max-w-md mx-auto relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-3xl" />
              <CheckCircle className="text-primary mb-4 relative z-10" size={48} />
              <h3 className="text-2xl font-bold mb-2 relative z-10">Message Sent!</h3>
              <p className="text-muted-foreground relative z-10">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 text-sm font-semibold text-primary hover:text-accent transition-colors relative z-10"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground/90">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-5 py-4 rounded-xl glass focus:bg-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground/90">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-5 py-4 rounded-xl glass focus:bg-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground/90">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl glass focus:bg-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              {status === "error" && (
                <p className="text-red-400 text-sm font-medium">Something went wrong. Please try again or email me directly.</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-4 flex items-center justify-center gap-3 px-8 py-4 rounded-full btn-primary font-semibold text-base disabled:opacity-50 disabled:cursor-not-allowed w-full"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
