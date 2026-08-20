"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg" | "hero";
  href?: string | null;
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: { width: 120, height: 60, className: "h-10 w-auto sm:h-11" },
  md: { width: 180, height: 90, className: "h-12 w-auto sm:h-14" },
  lg: { width: 280, height: 140, className: "h-20 w-auto sm:h-24" },
  hero: { width: 520, height: 260, className: "h-28 w-auto sm:h-40 md:h-48 lg:h-56" },
};

export function BrandLogo({
  size = "md",
  href = "#inicio",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const s = sizes[size];

  const content = (
    <motion.span
      className={`logo-wrap relative inline-flex items-center justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.86, y: 10 }}
      {...(priority
        ? { animate: { opacity: 1, scale: 1, y: 0 } }
        : {
            whileInView: { opacity: 1, scale: 1, y: 0 },
            viewport: { once: true },
          })}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
    >
      <motion.span
        className="logo-aura absolute inset-[-18%] rounded-full"
        aria-hidden
        animate={{
          opacity: [0.4, 0.95, 0.4],
          scale: [0.9, 1.12, 0.9],
        }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="logo-ring" aria-hidden />
      <span className="logo-ring" style={{ animationDelay: "0.9s" }} aria-hidden />
      <motion.span
        className="relative z-10 inline-flex"
        animate={{ y: [0, -5, 0], rotate: [0, -0.6, 0.6, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/logo-maimbo.png"
          alt="MAIMBO"
          width={s.width}
          height={s.height}
          priority={priority}
          className={`${s.className} logo-shine object-contain`}
        />
      </motion.span>
    </motion.span>
  );

  if (!href) return content;

  return (
    <a href={href} className="inline-flex" aria-label="MAIMBO inicio">
      {content}
    </a>
  );
}
