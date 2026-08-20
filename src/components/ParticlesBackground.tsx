"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  kind: "float" | "burst";
};

const GREEN = "184, 255, 46";
const WHITE = "244, 244, 244";

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let raf = 0;
    let lastBurst = 0;
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawnFloat = (count: number) => {
      for (let i = 0; i < count; i++) {
        const green = Math.random() > 0.45;
        particles.push({
          x: rand(0, window.innerWidth),
          y: rand(0, window.innerHeight),
          vx: rand(-0.15, 0.15),
          vy: rand(-0.25, -0.05),
          life: rand(180, 420),
          maxLife: 420,
          size: rand(1, 2.4),
          color: green ? GREEN : WHITE,
          kind: "float",
        });
      }
    };

    const explode = (x?: number, y?: number) => {
      const cx = x ?? rand(window.innerWidth * 0.15, window.innerWidth * 0.85);
      const cy = y ?? rand(window.innerHeight * 0.2, window.innerHeight * 0.75);
      const count = Math.floor(rand(16, 28));

      for (let i = 0; i < count; i++) {
        const angle = rand(0, Math.PI * 2);
        const speed = rand(0.4, 1.8);
        const green = Math.random() > 0.35;
        particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: rand(40, 90),
          maxLife: 90,
          size: rand(1.2, 3.2),
          color: green ? GREEN : WHITE,
          kind: "burst",
        });
      }
    };

    const tick = (time: number) => {
      if (!running) return;

      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      if (time - lastBurst > rand(2200, 3800)) {
        explode();
        lastBurst = time;
      }

      if (particles.filter((p) => p.kind === "float").length < 55) {
        spawnFloat(2);
      }

      particles = particles.filter((p) => p.life > 0);

      for (const p of particles) {
        p.life -= 1;
        p.x += p.vx;
        p.y += p.vy;

        if (p.kind === "burst") {
          p.vx *= 0.98;
          p.vy *= 0.98;
          p.vy += 0.01;
        } else {
          p.x += Math.sin((p.y + time * 0.02) * 0.01) * 0.15;
          if (p.y < -10) {
            p.y = h + 10;
            p.x = rand(0, w);
          }
        }

        const alpha =
          p.kind === "burst"
            ? Math.max(0, p.life / p.maxLife)
            : 0.15 + 0.35 * Math.max(0, Math.min(1, p.life / 120));

        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color}, ${alpha})`;
        ctx.shadowBlur = p.kind === "burst" ? 12 : 6;
        ctx.shadowColor = `rgba(${p.color}, ${alpha * 0.8})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      raf = window.requestAnimationFrame(tick);
    };

    resize();
    spawnFloat(60);
    explode(window.innerWidth * 0.5, window.innerHeight * 0.35);
    lastBurst = performance.now();
    raf = window.requestAnimationFrame(tick);

    const onResize = () => resize();
    const onClick = (e: MouseEvent) => explode(e.clientX, e.clientY);

    window.addEventListener("resize", onResize);
    window.addEventListener("click", onClick);

    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1]"
    />
  );
}
