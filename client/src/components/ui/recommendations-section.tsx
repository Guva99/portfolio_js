import { motion } from "framer-motion";
import letterApeiron from "@/assets/images/letter-apeiron.png";
import letter2Sky from "@/assets/images/letter-2sky.png";
import letterWowTickets from "@/assets/images/letter-wowtickets.png";
import { ZoomIn } from "lucide-react";
import { useState } from "react";

const recommendations = [
  {
    image: letterWowTickets,
    alt: "WowTickets Recommendation Letter",
    company: "Wowtickets.com",
    role: "Mobile Application Developer"
  },
  {
    image: letter2Sky,
    alt: "2Sky Mobile Recommendation Letter",
    company: "2Sky Mobile",
    role: "Flutter Developer"
  },
  {
    image: letterApeiron,
    alt: "ApeironSpace Recommendation Letter",
    company: "ApeironSpace",
    role: "Mobile Developer"
  }
];

export function RecommendationsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">Recommendation <span className="text-[#00d3f3]">Letters</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(rec.image)}
            >
              <div className="bg-white p-2 rounded-lg shadow-xl transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="relative overflow-hidden rounded border border-slate-200 aspect-[3/4]">
                  <img 
                    src={rec.image} 
                    alt={rec.alt} 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm">
                      <ZoomIn className="w-6 h-6 text-violet-600" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center pb-2">
                  <h4 className="font-bold text-slate-900">{rec.company}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{rec.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Recommendation Letter Full" 
              className="w-full h-full max-h-[90vh] object-contain rounded-lg shadow-2xl bg-white"
            />
            <button 
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
