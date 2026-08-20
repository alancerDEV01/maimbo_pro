"use client";

import { motion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";

const lines = [
  "Local en Sucre — Ostria Reyes 555",
  "Enviamos a todo Bolivia",
  "Escríbenos para pedidos",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + i * 0.08,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function StoreLocation() {
  return (
    <section
      id="tienda"
      className="relative overflow-hidden border-b border-line bg-gradient-to-b from-bg via-bg-elevated to-black py-20 lg:py-28"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.9, 1.15, 0.9] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex justify-center"
        >
          <BrandLogo size="lg" href={null} />
        </motion.div>

        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-[11px] font-semibold uppercase tracking-[0.36em] text-accent"
        >
          Nos encontramos en
        </motion.p>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="editorial mt-4 text-4xl leading-[1.05] text-text sm:text-5xl md:text-6xl lg:text-7xl"
        >
          MAIMBO
          <motion.span
            className="mx-2 inline-block text-accent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            |
          </motion.span>
          <span className="italic text-chrome">Vende Estilo</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 h-px w-40 origin-center bg-gradient-to-r from-transparent via-accent to-transparent"
        />

        <div className="mt-8 space-y-3">
          {lines.map((line, i) => (
            <motion.p
              key={line}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="text-sm tracking-[0.04em] text-muted sm:text-base"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="https://wa.me/59175769315"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="cta-glow display bg-accent px-7 py-3 text-xl text-black transition hover:bg-white"
          >
            WhatsApp 75769315
          </motion.a>
          <motion.a
            href="https://www.instagram.com/maimbo.stre"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="display border border-chrome/35 px-7 py-3 text-xl text-text transition hover:border-accent hover:text-accent"
          >
            @maimbo.stre
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
