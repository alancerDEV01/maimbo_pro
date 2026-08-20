"use client";

import Image from "next/image";
import { categories } from "@/data/catalog";

export function Footer() {
  return (
    <footer id="footer" className="bg-black pt-14 pb-8">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1.2fr_1fr_1fr] lg:px-6">
        <div>
          <Image
            src="/logo-maimbo.png"
            alt="MAIMBO"
            width={160}
            height={48}
            className="h-12 w-auto object-contain"
          />
          <p className="mt-4 max-w-sm text-sm text-muted">
            MAIMBO no vende ropa básica. Vende pertenencia, actitud y piezas para
            romper la calle.
          </p>
          <form
            className="mt-6 flex max-w-md gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="newsletter">
              Email newsletter
            </label>
            <input
              id="newsletter"
              type="email"
              required
              placeholder="Tu email para drops"
              className="w-full border border-line bg-bg-elevated px-3 py-3 text-sm text-text outline-none placeholder:text-muted focus:border-accent"
            />
            <button
              type="submit"
              className="display shrink-0 bg-accent px-4 py-3 text-lg text-black transition hover:bg-white"
            >
              Unirme
            </button>
          </form>
        </div>

        <div>
          <p className="display text-2xl text-text">Shop</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {categories.slice(0, 6).map((cat) => (
              <li key={cat}>
                <a href={`#${cat.toLowerCase()}`} className="transition hover:text-accent">
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="display text-2xl text-text">Legal</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href="#" className="transition hover:text-accent">
                Términos y condiciones
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-accent">
                Política de cambios
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-accent">
                Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-accent">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-accent">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-line px-4 pt-6 text-[11px] uppercase tracking-[0.16em] text-muted lg:px-6">
        <p>© {new Date().getFullYear()} MAIMBO · Prototype</p>
        <p>Streetwear only · Hecho con actitud</p>
      </div>
    </footer>
  );
}
