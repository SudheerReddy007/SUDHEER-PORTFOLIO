import { Project, Experience } from '@/types';

export const experiences: Experience[] = [
  {
    company: "Maven Silicon Company | Bangalore",
    role: "VLSI Physical Design – Summer Intern",
    duration: "May 2025 — July 2025",
    description: "Implemented the physical design of SPI using the Q-Flow open-source VLSI toolchain. Performed synthesis (Yosys), placement (Graywolf), and routing (Qrouter). Verified design with STA, DRC, and LVS using Magic, Netgen, and OpenSTA, and successfully generated a verified GDSII layout.",
  }
];

export const skills: string[] = [
  "Java", "C", "C++", "Verilog HDL", "System Verilog",
  "HTML", "CSS", "Embedded Systems",
  "Microprocessor & Microcontroller", "Digital System Design"
];

export const tools: string[] = [
  "MATLAB", "Vivado", "MS Word", "Excel", "PowerPoint"
];

export const projects: Project[] = [
  {
    title: "Xpyre",
    description: "A full-stack application aimed at reducing food waste by tracking grocery expiration dates and suggesting sustainable recipes.",
    client: "Sustainability",
    slug: "xpyre",
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#"
  },
  {
    title: "SPI Physical Design",
    description: "Complete digital design cycle from Verilog RTL to GDSII layout for a Serial Peripheral Interface using the open-source Q-Flow toolchain.",
    client: "VLSI Design",
    slug: "spi",
    tags: ["Verilog", "Q-Flow", "GDSII"],
    github: "#"
  },
  {
    title: "Ultrasonic Radar",
    description: "Hardware prototype utilizing ultrasonic sensors and servos with Arduino to detect and display objects within a 180° radius in real-time.",
    client: "Hardware",
    slug: "radar",
    tags: ["Arduino", "Sensors", "C++"],
    github: "#"
  },
  {
    title: "Road Safety System",
    description: "Smart automotive safety solution integrating AI for accident detection and adaptive headlights to improve nocturnal driving safety.",
    client: "Automotive AI",
    slug: "safety",
    tags: ["Python", "OpenCV", "IoT"],
    github: "#",
    demo: "#"
  }
];
