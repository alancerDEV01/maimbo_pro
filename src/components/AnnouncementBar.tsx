"use client";

import { motion } from "framer-motion";

export function AnnouncementBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative z-40 border-b border-line bg-accent text-black"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] sm:text-xs">
        <span>Envío gratis desde S/. 199</span>
        <span className="hidden sm:inline" aria-hidden>
          ·
        </span>
        <span className="hidden sm:inline">Cambios de talla en 7 días</span>
        <span className="hidden md:inline" aria-hidden>
          ·
        </span>
        <span className="hidden md:inline">Pago seguro · Atención WhatsApp</span>
      </div>
    </motion.div>
  );
}
