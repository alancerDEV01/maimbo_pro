"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/data/catalog";
import { BrandLogo } from "@/components/BrandLogo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [cartCount] = useState(2);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 lg:px-6">
        <button
          type="button"
          className="display text-2xl tracking-widest text-chrome lg:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
        >
          ≡
        </button>

        <BrandLogo size="md" priority />

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Categorías">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase()}`}
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted transition hover:text-accent"
            >
              {cat}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-muted transition hover:text-text sm:inline"
            aria-label="Buscar"
          >
            Buscar
          </button>
          <button
            type="button"
            className="relative border border-line px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition hover:border-accent hover:text-accent"
            aria-label="Carrito"
          >
            Bolsa
            <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-accent text-[10px] font-bold text-black">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="h-full w-[82%] max-w-sm border-r border-line bg-bg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <BrandLogo size="sm" href={null} />
                <button type="button" onClick={() => setOpen(false)} className="text-muted">
                  Cerrar
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {categories.map((cat) => (
                  <a
                    key={cat}
                    href={`#${cat.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="display text-3xl tracking-wide text-text transition hover:text-accent"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
