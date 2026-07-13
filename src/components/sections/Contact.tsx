"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { CONTACT_EMAIL } from "@/constants";
import emailjs from "@emailjs/browser";

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
    if (!name.trim()) {
      console.warn("EmailJS Submission Blocked: Name cannot be empty.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.warn("EmailJS Submission Blocked: Invalid Email Address.");
      return;
    }
    if (!message.trim()) {
      console.warn("EmailJS Submission Blocked: Message body cannot be empty.");
      return;
    }

    setStatus("submitting");

    const serviceId = "service_8j86glv";
    const publicKey = "6rCybvFtcbAahUoIo";
    const templateId = "template_2od1boa";

    const from_name = name;
    const from_email = email;

    // Logging values being used
    console.log("EmailJS Credentials Configuration:", {
      serviceId,
      templateId,
      publicKey
    });

    console.log("EmailJS Template Parameters:", {
      from_name,
      from_email,
      message
    });

    // Verify none of them are undefined or empty
    if (!serviceId) {
      console.error("EmailJS Config Error: serviceId is empty or undefined");
      return;
    }
    if (!templateId) {
      console.error("EmailJS Config Error: templateId is empty or undefined");
      return;
    }
    if (!publicKey) {
      console.error("EmailJS Config Error: publicKey is empty or undefined");
      return;
    }
    if (!from_name || !from_name.trim()) {
      console.error("EmailJS Config Error: from_name is empty or undefined");
      return;
    }
    if (!from_email || !from_email.trim()) {
      console.error("EmailJS Config Error: from_email is empty or undefined");
      return;
    }
    if (!message || !message.trim()) {
      console.error("EmailJS Config Error: message is empty or undefined");
      return;
    }

    try {
      // Explicitly initialize EmailJS correctly before sending
      console.log("Initializing EmailJS with Public Key:", publicKey);
      emailjs.init(publicKey);

      console.log("Invoking emailjs.send()...");
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name,
          from_email,
          message
        },
        publicKey
      );

      console.log("EmailJS Response Status:", result.status);
      console.log("EmailJS Response Text:", result.text);
      console.log("EmailJS Full Response Object:", result);

      if (result.status === 200) {
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
        console.error("EmailJS API returned non-200 status:", result);
        setToast({
          message: "❌ Failed to send your message. Please try again.",
          type: "error"
        });
        setStatus("error");
        setTimeout(() => setToast(null), 5000);
      }
    } catch (error: any) {
      console.error("EmailJS Error Object:", error);
      if (error && typeof error === "object") {
        console.error("EmailJS Error Status:", error.status);
        console.error("EmailJS Error Text:", error.text);
        console.error("EmailJS Error Name:", error.name);
        console.error("EmailJS Error Message:", error.message);
      } else {
        console.error("EmailJS Error Message (Raw):", error);
      }
      setToast({
        message: "❌ Failed to send your message. Please try again.",
        type: "error"
      });
      setStatus("error");
      setTimeout(() => setToast(null), 5000);
    } finally {
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

            {/* Social Links - Minimal Style */}
            <div className="flex flex-col gap-3 mt-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#B4B4C4]/60 text-left">
                Secondary Actions
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-3">
                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/sudheerreddy007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between sm:justify-start gap-2.5 px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 hover:shadow-md transition-all duration-200 text-sm group cursor-pointer w-full sm:w-auto"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-muted-foreground group-hover:text-white transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span className="font-medium text-white/90">LinkedIn</span>
                  </div>
                  <span className="text-xs text-[#B4B4C4]/50 ml-auto sm:ml-2">/sudheerreddy007</span>
                </a>

                {/* GitHub Link */}
                <a
                  href="https://github.com/SudheerReddy007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between sm:justify-start gap-2.5 px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 hover:shadow-md transition-all duration-200 text-sm group cursor-pointer w-full sm:w-auto"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-muted-foreground group-hover:text-white transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span className="font-medium text-white/90">GitHub</span>
                  </div>
                  <span className="text-xs text-[#B4B4C4]/50 ml-auto sm:ml-2">/SudheerReddy007</span>
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
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] font-semibold text-base text-white hover:opacity-95 shadow-[0_0_20px_rgba(124,58,237,0.2)] disabled:opacity-50 disabled:cursor-not-allowed w-full transition-all duration-300 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
