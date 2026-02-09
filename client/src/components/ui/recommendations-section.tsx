import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const recommendations = [
  {
    name: "Alex Morgan",
    role: "CTO at TechFlow",
    text: "One of the most talented Flutter developers I've worked with. The attention to detail in animations and performance optimization is unmatched.",
    date: "Oct 2023"
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    text: "Delivered the MVP two weeks ahead of schedule. The code quality was exceptional and the UI looked even better than the designs.",
    date: "Jan 2024"
  },
  {
    name: "Michael Ross",
    role: "Lead Designer",
    text: "Finally a developer who cares about design fidelity! Every pixel was in the right place, and the custom transitions added so much polish.",
    date: "Dec 2023"
  }
];

export function RecommendationsSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">What People <span className="text-violet-500">Say</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-sm shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300 relative"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center border border-slate-300 shadow-sm">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              </div>
              
              <Quote className="w-8 h-8 text-violet-500 mb-4 opacity-50" />
              
              <p className="text-slate-800 font-serif italic text-lg mb-6 leading-relaxed">
                "{rec.text}"
              </p>
              
              <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-slate-900">{rec.name}</h4>
                  <p className="text-sm text-slate-500">{rec.role}</p>
                </div>
                <span className="text-xs text-slate-400 font-mono">{rec.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
