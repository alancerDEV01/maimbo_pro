"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { heroes } from "@/data/catalog";

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % heroes.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  const slide = heroes[index];

  return (
    <section id="inicio" className="relative isolate min-h-[92vh] overflow-hidden border-b border-line">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-20 lg:justify-center lg:px-6 lg:pb-24">
        <motion.p
          key={`${slide.id}-eye`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent"
        >
          {slide.eyebrow}
        </motion.p>
        <motion.h1
          key={`${slide.id}-title`}
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.18 }}
          className="display max-w-4xl text-5xl leading-[0.92] text-text sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {slide.title}
        </motion.h1>
        <motion.p
          key={`${slide.id}-sub`}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.26 }}
          className="mt-4 max-w-xl text-base text-muted sm:text-lg"
        >
          {slide.subtitle}
        </motion.p>
        <motion.div
          key={`${slide.id}-cta`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.34 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#tracksuits"
            className="cta-glow display bg-accent px-7 py-3 text-xl text-black transition hover:bg-white"
          >
            {slide.cta}
          </a>
          <a
            href="#tienda"
            className="display border border-chrome/40 px-7 py-3 text-xl text-text transition hover:border-accent hover:text-accent"
          >
            {slide.secondary}
          </a>
        </motion.div>
        <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted">
          Streetwear · Sucre · Envíos a Bolivia · WhatsApp
        </p>
      </div>

      <div className="absolute bottom-6 right-4 z-10 flex gap-2 lg:right-8">
        {heroes.map((h, i) => (
          <button
            key={h.id}
            type="button"
            aria-label={`Ir a slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 w-8 transition ${i === index ? "bg-accent" : "bg-white/25"}`}
          />
        ))}
      </div>
    </section>
  );
}
