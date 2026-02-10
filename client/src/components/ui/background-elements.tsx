import { motion } from "framer-motion";
import geoPlus from "@/assets/images/geo-plus.png";
import geoTriangle from "@/assets/images/geo-triangle.png";
import geoThunder from "@/assets/images/geo-thunder.png";
import geoCircle from "@/assets/images/geo-circle.png";

export function BackgroundElements() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
      {/* --- SECTION 1 (0-20%) --- */}
      <motion.img 
         src={geoPlus} alt=""
         initial={{ opacity: 0 }} animate={{ opacity: 0.15, rotate: 360, y: [0, -20, 0] }}
         transition={{ opacity: { duration: 1 }, rotate: { duration: 40, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
         className="absolute top-[5%] left-[5%] w-16 h-16 blur-[1px] mix-blend-overlay"
      />
      <motion.img 
         src={geoTriangle} alt=""
         initial={{ opacity: 0 }} animate={{ opacity: 0.15, rotate: -360, y: [0, 30, 0] }}
         transition={{ opacity: { duration: 1, delay: 0.5 }, rotate: { duration: 50, repeat: Infinity, ease: "linear" }, y: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
         className="absolute top-[8%] right-[8%] w-24 h-24 blur-[2px] mix-blend-overlay"
      />
      <motion.img 
         src={geoCircle} alt=""
         initial={{ opacity: 0 }} animate={{ opacity: 0.1, rotate: 360, scale: [1, 1.1, 1] }}
         transition={{ opacity: { duration: 1, delay: 0.5 }, rotate: { duration: 60, repeat: Infinity, ease: "linear" }, scale: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
         className="absolute top-[15%] left-[15%] w-12 h-12 blur-[2px] mix-blend-overlay"
      />

      {/* --- SECTION 2 (20-40%) --- */}
      <motion.img 
         src={geoThunder} alt=""
         initial={{ opacity: 0 }} animate={{ opacity: 0.1, rotate: 180, x: [0, 10, 0] }}
         transition={{ opacity: { duration: 1, delay: 1 }, rotate: { duration: 45, repeat: Infinity, ease: "linear" }, x: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
         className="absolute top-[25%] right-[20%] w-14 h-14 blur-[1px] mix-blend-overlay"
      />
      <motion.img 
         src={geoPlus} alt=""
         initial={{ opacity: 0 }} animate={{ opacity: 0.12, rotate: -180, scale: [1, 1.2, 1] }}
         transition={{ opacity: { duration: 1, delay: 1.2 }, rotate: { duration: 55, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
         className="absolute top-[32%] left-[25%] w-10 h-10 blur-[1px] mix-blend-overlay"
      />

      {/* --- SECTION 3 (40-60%) --- */}
      <motion.img 
         src={geoThunder} alt=""
         initial={{ opacity: 0 }} animate={{ opacity: 0.12, rotate: 180, y: [0, -40, 0] }}
         transition={{ opacity: { duration: 1, delay: 0.2 }, rotate: { duration: 35, repeat: Infinity, ease: "linear", repeatType: "reverse" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
         className="absolute top-[45%] left-[2%] w-20 h-20 blur-[2px] mix-blend-overlay"
      />
      <motion.img 
         src={geoCircle} alt=""
         initial={{ opacity: 0 }} animate={{ opacity: 0.15, rotate: -360, scale: [1, 0.9, 1] }}
         transition={{ opacity: { duration: 1, delay: 0.8 }, rotate: { duration: 55, repeat: Infinity, ease: "linear" }, scale: { duration: 9, repeat: Infinity, ease: "easeInOut" } }}
         className="absolute top-[50%] right-[5%] w-28 h-28 blur-[3px] mix-blend-overlay"
      />
      <motion.img 
         src={geoTriangle} alt=""
         initial={{ opacity: 0 }} animate={{ opacity: 0.08, rotate: 360, scale: [1, 1.2, 1] }}
         transition={{ opacity: { duration: 1, delay: 1.5 }, rotate: { duration: 70, repeat: Infinity, ease: "linear" }, scale: { duration: 12, repeat: Infinity, ease: "easeInOut" } }}
         className="absolute top-[55%] left-[12%] w-16 h-16 blur-[3px] mix-blend-overlay"
      />

      {/* --- SECTION 4 (60-80%) --- */}
      <motion.img 
         src={geoPlus} alt=""
         initial={{ opacity: 0 }} animate={{ opacity: 0.1, rotate: 180, y: [0, 20, 0] }}
         transition={{ opacity: { duration: 1, delay: 2 }, rotate: { duration: 45, repeat: Infinity, ease: "linear" }, y: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
         className="absolute top-[65%] right-[15%] w-10 h-10 blur-[1px] mix-blend-overlay"
      />
      <motion.img 
         src={geoThunder} alt=""
         initial={{ opacity: 0 }} animate={{ opacity: 0.1, rotate: -90, x: [0, -15, 0] }}
         transition={{ opacity: { duration: 1, delay: 0.7 }, rotate: { duration: 40, repeat: Infinity, ease: "linear" }, x: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
         className="absolute top-[72%] left-[8%] w-18 h-18 blur-[2px] mix-blend-overlay"
      />
      <motion.img 
         src={geoCircle} alt=""
         initial={{ opacity: 0 }} animate={{ opacity: 0.12, rotate: 360, scale: [1, 1.1, 1] }}
         transition={{ opacity: { duration: 1, delay: 1.1 }, rotate: { duration: 65, repeat: Infinity, ease: "linear" }, scale: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
         className="absolute top-[78%] right-[25%] w-12 h-12 blur-[1px] mix-blend-overlay"
      />

      {/* --- SECTION 5 (80-100%) --- */}
      <motion.img 
         src={geoPlus} alt=""
         initial={{ opacity: 0 }} animate={{ opacity: 0.12, rotate: 360, x: [0, -15, 0] }}
         transition={{ opacity: { duration: 1, delay: 1 }, rotate: { duration: 50, repeat: Infinity, ease: "linear" }, x: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
         className="absolute top-[85%] left-[18%] w-14 h-14 blur-[2px] mix-blend-overlay"
      />
      <motion.img 
         src={geoThunder} alt=""
         initial={{ opacity: 0 }} animate={{ opacity: 0.15, rotate: -180, y: [0, -25, 0] }}
         transition={{ opacity: { duration: 1, delay: 0.5 }, rotate: { duration: 40, repeat: Infinity, ease: "linear" }, y: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
         className="absolute top-[90%] right-[12%] w-18 h-18 blur-[2px] mix-blend-overlay"
      />
      <motion.img 
         src={geoTriangle} alt=""
         initial={{ opacity: 0 }} animate={{ opacity: 0.1, rotate: 360, scale: [1, 1.1, 1] }}
         transition={{ opacity: { duration: 1, delay: 1.2 }, rotate: { duration: 60, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
         className="absolute top-[95%] right-[35%] w-12 h-12 blur-[1px] mix-blend-overlay"
      />
      <motion.img 
         src={geoCircle} alt=""
         initial={{ opacity: 0 }} animate={{ opacity: 0.08, rotate: -180, scale: [1, 1.3, 1] }}
         transition={{ opacity: { duration: 1, delay: 1.8 }, rotate: { duration: 75, repeat: Infinity, ease: "linear" }, scale: { duration: 11, repeat: Infinity, ease: "easeInOut" } }}
         className="absolute top-[92%] left-[5%] w-24 h-24 blur-[3px] mix-blend-overlay"
      />
    </div>
  );
}
