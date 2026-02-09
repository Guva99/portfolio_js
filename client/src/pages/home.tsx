import { useEffect, useRef } from "react";
import { HeroSection } from "@/components/ui/hero-section";
import { SkillsSection } from "@/components/ui/skills-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { RecommendationsSection } from "@/components/ui/recommendations-section";
import { ExperienceSection } from "@/components/ui/experience-section";
import { Footer } from "@/components/ui/footer";
import smokeVideo from "@/assets/videos/smoke-overlay-v4.mp4";

export default function Home() {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const setSlowMo = (video: HTMLVideoElement | null) => {
      if (!video) return;
      video.playbackRate = 0.2; // Constant ultra-slow speed (8s / 0.2 = 40s duration)
    };

    setSlowMo(videoRef1.current);
    setSlowMo(videoRef2.current);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-violet-500/30 relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 z-50"></div>
      
      {/* Cinematic Smoke Effect Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full mix-blend-screen opacity-60">
          <video 
            ref={videoRef1}
            src={smokeVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-left-bottom scale-125 origin-bottom-left"
          />
          {/* Second layer for density and seamlessness */}
           <video 
            ref={videoRef2}
            src={smokeVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-left-bottom scale-150 origin-bottom-left opacity-50 mix-blend-screen"
            style={{ animationDelay: '-4s' }}
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
