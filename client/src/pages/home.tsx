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
      
      {/* Smoke Effect Overlay - Stream from Left */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        
        {/* Continuous Stream Layers */}
        {[
          { color: "bg-violet-600", delay: "delay-1", opacity: "opacity-40" },
          { color: "bg-indigo-600", delay: "delay-2", opacity: "opacity-30" },
          { color: "bg-violet-800", delay: "delay-3", opacity: "opacity-50" }
        ].map((layer, i) => (
          <div 
            key={i}
            className={`absolute bottom-0 left-[-20%] md:left-[-10%] w-[140vw] h-[140vw] md:w-[80vh] md:h-[80vh] z-10 ${layer.opacity} animate-smoke-stream mix-blend-screen pointer-events-none ${layer.delay}`}
            style={{ 
              maskImage: `url(${smokePlume})`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskImage: `url(${smokePlume})`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
            }}
          >
            <div className={`w-full h-full ${layer.color}`}></div>
          </div>
        ))}
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
