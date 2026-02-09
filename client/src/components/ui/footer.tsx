import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">Let's build something <span className="text-violet-500">epic.</span></h2>
            <p className="text-slate-400">Open for new opportunities.</p>
          </div>
          
          <div className="flex gap-6">
            {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-black" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="text-center text-slate-600 text-sm border-t border-white/5 pt-8">
          <p>© 2024 Flutter Developer Portfolio. Crafted with passion.</p>
        </div>
      </div>
    </footer>
  );
}
