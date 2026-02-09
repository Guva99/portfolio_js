import { HeroSection } from "@/components/ui/hero-section";
import { SkillsSection } from "@/components/ui/skills-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { RecommendationsSection } from "@/components/ui/recommendations-section";
import { ExperienceSection } from "@/components/ui/experience-section";
import { Footer } from "@/components/ui/footer";
import smokeVideo from "@/assets/videos/smoke-overlay-v2.mp4";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-violet-500/30 relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 z-50"></div>
      
      {/* Cinematic Smoke Effect Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full mix-blend-screen opacity-60">
          <video 
            src={smokeVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-left-bottom scale-125 origin-bottom-left"
          />
          {/* Second layer for density and seamlessness */}
           <video 
            src={smokeVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-left-bottom scale-150 origin-bottom-left opacity-50 mix-blend-screen animate-pulse duration-[10000ms]"
            style={{ animationDelay: '-3s' }}
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
