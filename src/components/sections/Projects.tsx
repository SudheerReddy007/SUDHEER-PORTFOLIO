"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data";
import { XpyreIllustration, SpiIllustration, RadarIllustration, SafetyIllustration } from "@/components/ui/ProjectIllustrations";

const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const ProjectIllustration = ({ slug }: { slug: string }) => {
  switch (slug) {
    case "xpyre": return <XpyreIllustration />;
    case "spi": return <SpiIllustration />;
    case "radar": return <RadarIllustration />;
    case "safety": return <SafetyIllustration />;
    default: return <div className="w-full h-full bg-muted/50" />;
  }
};

export function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 150, ease: "linear" }} className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/5 to-transparent opacity-50 blur-[100px]" />
      </div>

      <div className="max-w-[1550px] w-[93%] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl text-balance">
              Premium software and hardware engineering work.
            </p>
          </div>
          <a
            href="https://github.com/sudheerreddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-transparent text-sm font-semibold hover:bg-muted transition-colors whitespace-nowrap"
          >
            View GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              // Hover lift (12px) and glowing shadow
              className="group relative flex flex-col rounded-[20px] hover:-translate-y-3 transition-transform duration-500 ease-out z-0 hover:z-10"
            >
              {/* Animated Gradient Border (Behind card) */}
              <div className="absolute -inset-[1.5px] rounded-[22px] bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500 group-hover:animate-pulse" />
              
              {/* Massive neon drop shadow on hover */}
              <div className="absolute inset-0 rounded-[20px] shadow-[0_20px_40px_rgba(124,58,237,0)] group-hover:shadow-[0_20px_40px_rgba(124,58,237,0.2)] transition-shadow duration-500" />

              {/* Card Content (Glassmorphism) */}
              <div className="relative flex-1 flex flex-col bg-background/90 dark:bg-[#070B14]/90 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-[20px] overflow-hidden">
                
                {/* Illustration Container */}
                <div className="aspect-[16/10] w-full relative border-b border-black/5 dark:border-white/5 overflow-hidden">
                  <motion.div 
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProjectIllustration slug={project.slug} />
                  </motion.div>
                  {/* Overlay shadow for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                
                <div className="p-4 flex-1 flex flex-col relative z-10 bg-gradient-to-b from-transparent to-background/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary/90">{project.client}</span>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                          <GithubIcon size={14} />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-base font-bold mb-1.5 leading-tight text-foreground/90 group-hover:text-primary transition-colors">{project.title}</h3>
                  
                  <p className="text-muted-foreground mb-4 flex-1 text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-md text-foreground/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
