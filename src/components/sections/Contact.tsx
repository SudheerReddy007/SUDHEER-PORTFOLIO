"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { CONTACT_EMAIL } from "@/constants";

// Custom inline SVG icons for social platforms because of local lucide-react version compatibility
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const DEFAULT_MESSAGE = `Hi Sudheer,

I found your portfolio and would like to connect.

I'm reaching out regarding:
• Job Opportunity
• Internship
• Freelance Project
• Collaboration
• General Inquiry

Please let me know a convenient time to connect.

Best regards,`;

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!name.trim()) return;
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    if (!message.trim()) return;

    setStatus("submitting");

    const serviceId = "service_8j86glv";
    const publicKey = "6rCybvFtcbAahUoIo";
    const templateId = "YOUR_TEMPLATE_ID";

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: name,
            from_email: email,
            message: message,
          },
        }),
      });

      if (response.ok) {
        setToast({
          message: "✅ Thank you! Your message has been sent successfully. I'll get back to you soon.",
          type: "success"
        });
        setName("");
        setEmail("");
        setMessage(DEFAULT_MESSAGE);
        setStatus("success");
        setTimeout(() => setToast(null), 5000);
      } else {
        setToast({
          message: "❌ Failed to send your message. Please try again.",
          type: "error"
        });
        setStatus("error");
        setTimeout(() => setToast(null), 5000);
      }
    } catch (error) {
      setToast({
        message: "❌ Failed to send your message. Please try again.",
        type: "error"
      });
      setStatus("error");
      setTimeout(() => setToast(null), 5000);
    } finally {
      // Revert status to idle so the user can send again if needed, or if it failed
      setTimeout(() => setStatus("idle"), 1000);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#09090B] text-white">
      {/* Background ambient glow behind contact cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-8 right-8 z-50 px-6 py-4 rounded-2xl border backdrop-blur-md shadow-2xl flex items-center gap-3 text-sm font-semibold max-w-md ${
              toast.type === "success" 
                ? "border-emerald-500/20 bg-emerald-950/80 text-emerald-200" 
                : "border-rose-500/20 bg-rose-950/80 text-rose-200"
            }`}
          >
            <span>{toast.message}</span>
            <button 
              onClick={() => setToast(null)} 
              className="ml-auto text-xs opacity-60 hover:opacity-100 transition-opacity"
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Connect Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-[#B4B4C4] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
                Let's Connect
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-left">
                Let's Connect
              </h2>
              <p className="text-lg text-muted-foreground text-left max-w-lg">
                I'm currently available for freelance projects and full-time opportunities. If you have a project that needs some creative magic, I'd love to hear about it.
              </p>
            </div>

            {/* Email CTA Button */}
            <div className="flex justify-start">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sudheer.sreeyapureddy@gmail.com&su=Connect%20via%20Portfolio&body=Hi%20Sudheer,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ARegards,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white text-sm font-semibold shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300"
              >
                <Mail size={16} />
                Email Me Directly
              </a>
            </div>

            {/* Social Cards Group */}
            <div className="flex flex-col gap-4 mt-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#B4B4C4] text-left flex items-center gap-2">
                <span>📍</span> Connect With Me
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* LinkedIn Card */}
                <a
                  href="https://www.linkedin.com/in/sudheerreddy007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-white/5 text-[#8B5CF6] group-hover:bg-[#8B5CF6]/20 group-hover:text-white transition-all duration-300">
                        <LinkedinIcon className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs text-[#B4B4C4] block uppercase font-bold tracking-widest mb-0.5">LinkedIn</span>
                        <span className="font-semibold text-white text-sm group-hover:text-[#8B5CF6] transition-colors break-all">sudheerreddy007</span>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-[#B4B4C4] group-hover:text-white transition-colors" />
                  </div>
                </a>

                {/* GitHub Card */}
                <a
                  href="https://github.com/SudheerReddy007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-white/5 text-[#8B5CF6] group-hover:bg-[#8B5CF6]/20 group-hover:text-white transition-all duration-300">
                        <GithubIcon className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs text-[#B4B4C4] block uppercase font-bold tracking-widest mb-0.5">GitHub</span>
                        <span className="font-semibold text-white text-sm group-hover:text-[#8B5CF6] transition-colors break-all">SudheerReddy007</span>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-[#B4B4C4] group-hover:text-white transition-colors" />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 w-full"
          >
            <div className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground/90">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/15 focus:bg-white/20 focus:border-[#8B5CF6]/50 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all text-sm text-white"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground/90">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/15 focus:bg-white/20 focus:border-[#8B5CF6]/50 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all text-sm text-white"
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground/90">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={10}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/15 focus:bg-white/20 focus:border-[#8B5CF6]/50 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all resize-none text-sm text-white"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] font-semibold text-base text-white hover:opacity-95 shadow-[0_0_20px_rgba(124,58,237,0.2)] disabled:opacity-50 disabled:cursor-not-allowed w-full transition-all duration-300"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
