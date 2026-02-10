import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/images/hero-portrait.webp";
import bgTexture from "@/assets/images/bg-texture.webp";
import geoPlus from "@/assets/images/geo-plus.png";
import geoTriangle from "@/assets/images/geo-triangle.png";
import geoThunder from "@/assets/images/geo-thunder.png";
import geoCircle from "@/assets/images/geo-circle.png";
import { Download, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Background with texture overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent opacity-90 z-10"></div>
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, 50, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen"
        />

        {/* Floating Geometric Elements (Images) */}
        <motion.img 
           src={geoPlus}
           alt="Plus"
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.4, rotate: 360, y: [0, -20, 0] }}
           transition={{ 
             opacity: { duration: 1 },
             rotate: { duration: 40, repeat: Infinity, ease: "linear" },
             y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
           }}
           className="absolute top-20 left-[20%] w-16 h-16 blur-[2px] opacity-40 mix-blend-overlay"
        />
        <motion.img 
           src={geoTriangle}
           alt="Triangle"
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.3, rotate: -360, y: [0, 30, 0] }}
           transition={{ 
             opacity: { duration: 1, delay: 0.5 },
             rotate: { duration: 50, repeat: Infinity, ease: "linear" },
             y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
           }}
           className="absolute top-1/3 right-[15%] w-24 h-24 blur-[3px] opacity-30 mix-blend-overlay"
        />
        <motion.img 
           src={geoThunder}
           alt="Thunder"
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.4, rotate: 180, y: [0, -40, 0] }}
           transition={{ 
             opacity: { duration: 1, delay: 0.2 },
             rotate: { duration: 35, repeat: Infinity, ease: "linear", repeatType: "reverse" },
             y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
           }}
           className="absolute bottom-1/3 left-[10%] w-20 h-20 blur-[2px] opacity-40 mix-blend-overlay"
        />
        <motion.img 
           src={geoCircle}
           alt="Circle"
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.3, rotate: 360, scale: [1, 1.1, 1] }}
           transition={{ 
             opacity: { duration: 1, delay: 0.8 },
             rotate: { duration: 60, repeat: Infinity, ease: "linear" },
             scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
           }}
           className="absolute bottom-20 right-[25%] w-28 h-28 blur-[4px] opacity-30 mix-blend-overlay"
        />

        <motion.img 
          src={bgTexture}  
          alt="Texture" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay z-20"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
            filter: ["hue-rotate(0deg)", "hue-rotate(15deg)", "hue-rotate(0deg)"]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-20"></div>
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight tracking-tighter">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Idea.</span>
              <span className="block text-violet-500 text-glow">Code.</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Release.</span>
              <span className="block text-cyan-400 text-glow">Done.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-slate-400 max-w-lg font-light border-l-2 border-violet-500 pl-6"
          >
            Senior Flutter Developer with 5+ years of experience crafting high-performance, pixel-perfect mobile experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="h-14 px-8 bg-violet-600 hover:bg-violet-700 text-white rounded-full text-lg shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all hover:scale-105">
              Download CV <Download className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 border-slate-700 text-slate-300 hover:text-white hover:border-white rounded-full text-lg backdrop-blur-sm bg-white/5">
              Contact Me <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
          transition={{ 
            opacity: { delay: 0.2, duration: 1 },
            scale: { delay: 0.2, duration: 1 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative z-10 w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden neon-border group">
            {/* Tech Scan Line */}
            <motion.div 
              className="absolute w-full h-[2px] bg-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20 pointer-events-none"
              initial={{ top: "0%", opacity: 0 }}
              animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
              transition={{ delay: 1, duration: 2, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 to-transparent z-10 mix-blend-multiply"></div>
            <img 
              src={heroPortrait} 
              alt="Developer Portrait" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-xl z-20">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm text-cyan-400 font-mono mb-1">CURRENT STATUS</p>
                  <p className="text-white font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Available for projects
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">5+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Years Exp.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-violet-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-600/20 rounded-full blur-[100px]"></div>
        </motion.div>
      </div>
    </section>
  );
}
