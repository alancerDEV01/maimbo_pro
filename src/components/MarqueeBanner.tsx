"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MarqueeBanner() {
  const items = [
    "DRIP MODE ACTIVATED",
    "STREETWEAR ONLY",
    "MAIMBO",
    "50% OFF SELECTED",
    "SHADOW DIVISION",
    "WAR DRIP",
  ];

  const row = [...items, ...items, ...items, ...items];

  return (
    <section className="overflow-hidden border-b border-line bg-bg-soft py-3" aria-label="Promoción">
      <div className="marquee-track items-center gap-6 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-6"
          >
            {(i % 3 === 0) && (
              <motion.span
                className="relative inline-flex h-8 w-[72px] shrink-0 items-center justify-center sm:h-9 sm:w-[84px]"
                animate={{ filter: ["brightness(1)", "brightness(1.35)", "brightness(1)"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/logo-maimbo.png"
                  alt=""
                  width={84}
                  height={42}
                  className="logo-shine h-full w-auto object-contain"
                />
              </motion.span>
            )}
            <span className="display text-2xl text-chrome/90 sm:text-3xl">{item}</span>
            <span className="text-accent">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
