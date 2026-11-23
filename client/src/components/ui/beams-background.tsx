import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BeamsBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: "subtle" | "medium" | "strong";
  /** Hue range of the beams in degrees, e.g. [190, 260] for cyan→violet. */
  hue?: [number, number];
}

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

const opacityMap = { subtle: 0.8, medium: 1.2, strong: 1.6 } as const;
const BEAM_COUNT = 30;

function createBeam(width: number, height: number, [hueMin, hueMax]: [number, number]): Beam {
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle: -35 + Math.random() * 10,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.12 + Math.random() * 0.16,
    hue: hueMin + Math.random() * (hueMax - hueMin),
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  };
}

/**
 * Animated light beams drawn on a canvas. Fills its parent (use it as an
 * absolutely positioned layer), pauses when off-screen and renders a single
 * static frame for users who prefer reduced motion.
 */
export function BeamsBackground({ className, children, intensity = "medium", hue = [190, 260] }: BeamsBackgroundProps) {
  const [hueMin, hueMax] = hue;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!wrapper || !canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let beams: Beam[] = [];
    let frame = 0;
    let visible = true;

    const resetBeam = (beam: Beam, index: number) => {
      const spacing = width / 3;
      beam.y = height + 100;
      beam.x = (index % 3) * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
      beam.width = 100 + Math.random() * 100;
      beam.speed = 0.5 + Math.random() * 0.4;
      beam.hue = hueMin + (index * (hueMax - hueMin)) / beams.length;
      beam.opacity = 0.2 + Math.random() * 0.1;
    };

    const drawBeam = (beam: Beam) => {
      const alpha = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2) * opacityMap[intensity];
      const color = (a: number) => `hsla(${beam.hue}, 85%, 65%, ${a})`;
      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, color(0));
      gradient.addColorStop(0.1, color(alpha * 0.5));
      gradient.addColorStop(0.4, color(alpha));
      gradient.addColorStop(0.6, color(alpha));
      gradient.addColorStop(0.9, color(alpha * 0.5));
      gradient.addColorStop(1, color(0));

      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);
      ctx.fillStyle = gradient;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      beams.forEach(drawBeam);
    };

    const tick = () => {
      beams.forEach((beam, index) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -100) resetBeam(beam, index);
      });
      render();
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      if (reduceMotion) render();
      else if (visible) frame = requestAnimationFrame(tick);
    };

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();
      // The canvas is heavily blurred, so a 1x backing store is plenty and much cheaper.
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      canvas.width = width;
      canvas.height = height;
      beams = Array.from({ length: BEAM_COUNT }, () => createBeam(width, height, [hueMin, hueMax]));
      start();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(wrapper);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else cancelAnimationFrame(frame);
    });
    intersectionObserver.observe(wrapper);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [intensity, hueMin, hueMax]);

  return (
    <div ref={wrapperRef} className={cn("relative w-full overflow-hidden", className)}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full pointer-events-none"
        style={{ filter: "blur(30px)" }}
      />
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
