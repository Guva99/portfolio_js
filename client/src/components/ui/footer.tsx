import { Linkedin, Mail, Send, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-10 pb-10 border-t border-white/5 bg-slate-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="flex gap-6 justify-center">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/in/guvanch-avezov-29810a349/" },
              { Icon: Mail, href: "mailto:g_avezov@bk.ru" },
              { Icon: Send, href: "https://t.me/guvva" },
              { Icon: Briefcase, href: "https://hh.ru/resume/8e35e946ff0910b7b00039ed1f4c6a6666666c" }
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                <item.Icon className="w-5 h-5 text-slate-400 group-hover:text-black" />
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
