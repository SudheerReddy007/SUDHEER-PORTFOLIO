import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { LearningJourney } from "@/components/sections/LearningJourney";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#09090B]">
      <Hero />
      <About />
      <LearningJourney />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
