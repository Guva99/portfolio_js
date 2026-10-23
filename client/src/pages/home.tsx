import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { SkillsSection } from "@/components/ui/skills-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { ExperienceSection } from "@/components/ui/experience-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground overflow-x-hidden selection:bg-violet-500/30 relative">
      
      <Navbar />
      
      {/* Gradient Balls Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-20"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-15"></div>
        </div>
      </div>
      

      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      
    </div>
  );
}
