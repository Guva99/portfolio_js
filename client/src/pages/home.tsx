import { HeroSection } from "@/components/ui/hero-section";
import { SkillsSection } from "@/components/ui/skills-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { RecommendationsSection } from "@/components/ui/recommendations-section";
import { ExperienceSection } from "@/components/ui/experience-section";
import { Footer } from "@/components/ui/footer";
import smokeVideo from "@/assets/videos/smoke-overlay-v9.mp4";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-violet-500/30 relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 z-50"></div>
      
      {/* Cinematic Smoke Effect Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full mix-blend-screen"
             style={{ animation: 'fade-cycle 8s linear infinite' }}>
          <div className="relative w-full h-full">
             <video 
              src={smokeVideo} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-left-bottom scale-125"
              style={{ 
                transformOrigin: 'bottom left',
                filter: 'brightness(1.5) contrast(1.2)' // Boost brightness to make colors pop
              }}
            />
            {/* Rainbow Gradient Overlay */}
            {/* Using mix-blend-color ensures the white smoke takes the color while preserving its luminance structure */}
            {/* Using a radial gradient from the source makes it look more natural */}
            <div 
              className="absolute inset-0 w-full h-full mix-blend-color opacity-100"
              style={{
                background: 'radial-gradient(circle at bottom left, #8b5cf6, #3b82f6, #10b981, #facc15, #ef4444)',
                filter: 'saturate(2)'
              }}
            />
          </div>
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
