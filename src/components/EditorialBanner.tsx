"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";

export function EditorialBanner() {
  return (
    <section className="border-b border-line">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80"
            alt="Luxury Tracksuits campaign"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 z-10">
            <BrandLogo size="md" href={null} />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center bg-bg-elevated px-6 py-14 lg:px-14"
        >
          <BrandLogo size="sm" href={null} className="mb-4 self-start" />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Campaign
          </p>
          <h2 className="display mt-3 text-5xl text-text sm:text-6xl lg:text-7xl">
            LUXURY TRACKSUITS
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Conjuntos densos, insumos premium y diseños disruptivos. No es ropa
            básica: es identidad para romper la calle.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#tracksuits"
              className="display bg-accent px-6 py-3 text-xl text-black transition hover:bg-white"
            >
              Comprar ahora
            </a>
            <a
              href="#drops"
              className="display border border-line px-6 py-3 text-xl text-text transition hover:border-accent hover:text-accent"
            >
              Ver más
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
