import { HeroSection } from "@/components/ui/hero-section";
import { SkillsSection } from "@/components/ui/skills-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { RecommendationsSection } from "@/components/ui/recommendations-section";
import { ExperienceSection } from "@/components/ui/experience-section";
import { Footer } from "@/components/ui/footer";
import smokeTexture from "@/assets/images/smoke-texture.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-violet-500/30 relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 z-50"></div>
      
      {/* Smoke Effect Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        {/* Purple Smoke Layer */}
        <div 
          className="absolute inset-0 z-10 opacity-60 animate-smoke w-[200%] flex blur-3xl mix-blend-screen"
          style={{ 
            maskImage: `url(${smokeTexture})`,
            maskMode: 'luminance',
            maskSize: 'contain',
            maskRepeat: 'repeat',
            WebkitMaskImage: `url(${smokeTexture})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'repeat',
          }}
        >
          <div className="w-full h-full bg-violet-600/50"></div>
        </div>

        {/* Orange Smoke Layer - Moving Reverse */}
        <div 
          className="absolute inset-0 z-10 opacity-50 animate-smoke-reverse w-[200%] flex blur-3xl mix-blend-screen"
          style={{ 
            maskImage: `url(${smokeTexture})`,
            maskMode: 'luminance',
            maskSize: 'contain',
            maskRepeat: 'repeat',
            WebkitMaskImage: `url(${smokeTexture})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'repeat',
          }}
        >
           <div className="w-full h-full bg-orange-500/50"></div>
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
