import { HeroSection } from "@/components/ui/hero-section";
import { SkillsSection } from "@/components/ui/skills-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { RecommendationsSection } from "@/components/ui/recommendations-section";
import { ExperienceSection } from "@/components/ui/experience-section";
import { Footer } from "@/components/ui/footer";
import smokePlume from "@/assets/images/smoke-plume.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-violet-500/30 relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 z-50"></div>
      
      {/* Smoke Effect Overlay - Corner Plumes */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        
        {/* Bottom Left Purple Plume */}
        <div 
          className="absolute -bottom-[20%] -left-[10%] w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] z-10 opacity-70 animate-smoke-1 mix-blend-screen pointer-events-none"
          style={{ 
            maskImage: `url(${smokePlume})`,
            maskMode: 'luminance',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskImage: `url(${smokePlume})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
          }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-violet-600 via-violet-800 to-transparent"></div>
        </div>

        {/* Bottom Right Orange Plume */}
        <div 
          className="absolute -bottom-[10%] -right-[10%] w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] z-10 opacity-60 animate-smoke-2 mix-blend-screen pointer-events-none"
          style={{ 
            maskImage: `url(${smokePlume})`,
            maskMode: 'luminance',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskImage: `url(${smokePlume})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
          }}
        >
           <div className="w-full h-full bg-gradient-to-tl from-orange-500 via-orange-700 to-transparent"></div>
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
