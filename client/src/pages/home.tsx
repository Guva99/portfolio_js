import { HeroSection } from "@/components/ui/hero-section";
import { SkillsSection } from "@/components/ui/skills-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { RecommendationsSection } from "@/components/ui/recommendations-section";
import { ExperienceSection } from "@/components/ui/experience-section";
import { Footer } from "@/components/ui/footer";
import smokePlumeV2 from "@/assets/images/smoke-plume-v2.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-violet-500/30 relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 z-50"></div>
      
      {/* Cinematic Smoke Effect Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        
        {/* Purple Smoke - Bottom Left */}
        <div className="absolute bottom-[-20%] left-[-20%] w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] mix-blend-screen opacity-80 animate-smoke-billow-1">
          <img 
            src={smokePlumeV2} 
            alt="" 
            className="w-full h-full object-contain"
            style={{ 
              filter: 'brightness(1.2) sepia(1) hue-rotate(230deg) saturate(3) contrast(1.2)'
            }}
          />
        </div>

        {/* Orange Smoke - Bottom Right */}
        <div className="absolute bottom-[-10%] right-[-20%] w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] mix-blend-screen opacity-70 animate-smoke-billow-2">
           <img 
            src={smokePlumeV2} 
            alt="" 
            className="w-full h-full object-contain"
            style={{ 
              transform: 'scaleX(-1)',
              filter: 'brightness(1.2) sepia(1) hue-rotate(-20deg) saturate(3) contrast(1.2)'
            }}
          />
        </div>

        {/* Secondary Purple Layer for Depth */}
        <div className="absolute bottom-[-30%] left-[-10%] w-[100vw] h-[100vw] mix-blend-screen opacity-40 animate-smoke-billow-3">
           <img 
            src={smokePlumeV2} 
            alt="" 
            className="w-full h-full object-contain"
            style={{ 
              filter: 'brightness(0.8) sepia(1) hue-rotate(250deg) saturate(2)'
            }}
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
