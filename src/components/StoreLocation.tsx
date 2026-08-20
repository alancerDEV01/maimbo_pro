"use client";

import { motion } from "framer-motion";

export function StoreLocation() {
  return (
    <section id="tienda" className="border-b border-line bg-bg-elevated py-14 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Tienda física
          </p>
          <h2 className="display mt-3 text-5xl text-text sm:text-6xl">
            ESTAMOS EN GAMARRA
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
            Ven a probar tallas, tocar las piezas y cerrar el drop en persona. Canal
            humano, sin fricción.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-text">
            <li className="border-l-2 border-accent pl-4">
              <strong className="block uppercase tracking-wider">Galería Católica · 3er piso</strong>
              <span className="text-muted">Av. Isabel La Católica 1588</span>
            </li>
            <li className="border-l-2 border-line pl-4">
              <strong className="block uppercase tracking-wider">
                C.C. El Paraíso · 4to piso
              </strong>
              <span className="text-muted">Jr. Antonio Bazo 805</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden border border-line bg-bg p-8"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
          <p className="display text-4xl text-chrome">WHATSAPP</p>
          <p className="mt-3 text-sm text-muted">
            Consulta stock, tallas y combos. Respuesta rápida en horario de tienda.
          </p>
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-glow display mt-8 inline-block bg-accent px-6 py-3 text-xl text-black transition hover:bg-white"
          >
            Escribir ahora
          </a>
          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted">
            Prototype · Número demo
          </p>
        </motion.div>
      </div>
    </section>
  );
}
