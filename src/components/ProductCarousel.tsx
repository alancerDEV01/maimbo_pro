"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import type { Product } from "@/data/catalog";
import { formatPrice } from "@/data/catalog";

type Props = {
  title: string;
  subtitle: string;
  products: Product[];
};

export function ProductCarousel({ title, subtitle, products }: Props) {
  const scroller = useRef<HTMLDivElement>(null);
  const anchor = title.toLowerCase().includes("tracksuit")
    ? "tracksuits"
    : title.toLowerCase().includes("hoodie")
      ? "hoodies"
      : title.toLowerCase().includes("polo")
        ? "polos"
        : title.toLowerCase().includes("jean")
          ? "jeans"
          : title.toLowerCase().includes("mujer")
            ? "mujer"
            : title.toLowerCase().includes("accesorio")
              ? "accesorios"
              : title.toLowerCase().replace(/\s+/g, "-");

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id={anchor} className="border-b border-line py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display text-5xl text-text sm:text-6xl"
            >
              {title}
            </motion.h2>
            <p className="mt-2 max-w-md text-sm text-muted">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="border border-line px-3 py-2 text-xs uppercase tracking-widest text-muted transition hover:border-accent hover:text-accent"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="border border-line px-3 py-2 text-xs uppercase tracking-widest text-muted transition hover:border-accent hover:text-accent"
              aria-label="Siguiente"
            >
              →
            </button>
            <a
              href="#tienda"
              className="ml-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent transition hover:text-white"
            >
              Ver colección
            </a>
          </div>
        </div>

        <div
          ref={scroller}
          className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
        >
          {products.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: Math.min(i * 0.04, 0.24) }}
              className="group relative w-[72vw] shrink-0 snap-start sm:w-[260px] lg:w-[280px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-bg-soft">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="280px"
                />
                {product.tag && (
                  <span className="absolute left-3 top-3 bg-accent px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                    {product.tag}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/80 p-3 transition duration-300 group-hover:translate-y-0">
                  <button
                    type="button"
                    className="display w-full bg-accent py-2 text-lg text-black transition hover:bg-white"
                  >
                    Ver producto
                  </button>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-text">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-chrome">{formatPrice(product.price)}</p>
                  {product.compareAt && (
                    <p className="text-xs text-muted line-through">
                      {formatPrice(product.compareAt)}
                    </p>
                  )}
                </div>
                <div className="flex gap-1.5 pt-1">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      className="h-7 w-7 border border-line text-[10px] text-muted transition hover:border-accent hover:text-accent"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
