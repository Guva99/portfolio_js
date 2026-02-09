import { HeroSection } from "@/components/ui/hero-section";
import { SkillsSection } from "@/components/ui/skills-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { RecommendationsSection } from "@/components/ui/recommendations-section";
import { ExperienceSection } from "@/components/ui/experience-section";
import { Footer } from "@/components/ui/footer";
import colorfulSmoke from "@/assets/images/colorful-smoke.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-violet-500/30 relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 z-50"></div>
      
      {/* Cinematic Smoke Effect Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full mix-blend-screen animate-smoke-flow">
          <img 
            src={colorfulSmoke} 
            alt="" 
            className="w-full h-full object-cover md:object-contain opacity-90 scale-125"
          />
        </div>
      </div>

      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <RecommendationsSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      
      <Footer />
    </div>
  );
}
