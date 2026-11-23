import * as React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Image-led case-study card (adapted from a "destination card"): full-bleed
 * screenshot, a dark brand-tinted gradient for legibility and a glass CTA bar.
 * Colors are HSL triplets without `hsl()`, e.g. "20 85% 55%".
 */
interface ProjectCardProps {
  href: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  cta: string;
  /** Deep brand tone used for the bottom gradient (keep lightness ~14–22%). */
  themeColor: string;
  /** Bright brand tone used for the glow, CTA border and hover accents. */
  accentColor: string;
  /** CSS object-position for the screenshot, e.g. "top" or "70% center". */
  imagePosition?: string;
  className?: string;
}

export function ProjectCard({
  href,
  imageUrl,
  title,
  subtitle,
  description,
  tech,
  cta,
  themeColor,
  accentColor,
  imagePosition = "top",
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      aria-label={`${title} — ${cta}`}
      style={{ "--theme": themeColor, "--accent": accentColor } as React.CSSProperties}
      className={cn(
        "group relative block h-[440px] rounded-3xl overflow-hidden border border-white/10 bg-slate-900",
        "shadow-[0_0_40px_-18px_hsl(var(--accent)/0.35)] transition-[transform,box-shadow,border-color] duration-500 ease-out",
        "hover:border-[hsl(var(--accent)/0.4)] hover:shadow-[0_0_60px_-15px_hsl(var(--accent)/0.5)] motion-safe:hover:-translate-y-1",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
        className,
      )}
    >
      <img
        src={imageUrl}
        alt=""
        loading="lazy"
        decoding="async"
        style={{ objectPosition: imagePosition }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
      />

      {/* Dark, brand-tinted gradient keeps the text readable on light screenshots */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgb(2 6 23) 0%, hsl(var(--theme) / 0.98) 40%, hsl(var(--theme) / 0.9) 56%, hsl(var(--theme) / 0.45) 70%, transparent 85%)",
        }}
      />

      <div className="relative flex h-full flex-col justify-end p-6 text-white">
        <p className="text-sm font-medium text-[hsl(var(--accent))]">{subtitle}</p>
        <h3 className="mt-1 text-3xl font-bold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/75 line-clamp-2">{description}</p>
        <p className="mt-3 text-xs font-medium text-white/60">{tech.join(" · ")}</p>

        <div
          className={cn(
            "mt-5 flex items-center justify-between rounded-xl px-4 py-3 backdrop-blur-md transition-colors duration-300",
            "border border-[hsl(var(--accent)/0.3)] bg-[hsl(var(--accent)/0.12)]",
            "group-hover:border-[hsl(var(--accent)/0.55)] group-hover:bg-[hsl(var(--accent)/0.22)]",
          )}
        >
          <span className="text-sm font-semibold">{cta}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover:translate-x-1" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
