import { HeroSection } from "@/components/ui/hero-section";
import { SkillsSection } from "@/components/ui/skills-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { RecommendationsSection } from "@/components/ui/recommendations-section";
import { ExperienceSection } from "@/components/ui/experience-section";
import { Footer } from "@/components/ui/footer";
import Lottie from "lottie-react";
import smokeAnimation from "@/assets/animations/smoke.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-violet-500/30 relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 z-50"></div>
      
      {/* Lottie Smoke Effect Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        
        {/* Purple Smoke Layer - Left */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[100vw] h-[100vw] md:w-[70vw] md:h-[70vw] opacity-60 mix-blend-screen pointer-events-none">
          <div className="w-full h-full relative">
             <div className="absolute inset-0 bg-violet-600 mix-blend-color z-10"></div>
             <Lottie 
                animationData={smokeAnimation} 
                loop={true} 
                className="w-full h-full opacity-80"
             />
          </div>
        </div>

        {/* Orange Smoke Layer - Right */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[100vw] h-[100vw] md:w-[70vw] md:h-[70vw] opacity-50 mix-blend-screen pointer-events-none">
          <div className="w-full h-full relative">
             <div className="absolute inset-0 bg-orange-600 mix-blend-color z-10"></div>
             <Lottie 
                animationData={smokeAnimation}
                loop={true} 
                className="w-full h-full opacity-80"
                style={{ transform: 'scaleX(-1)' }} 
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
