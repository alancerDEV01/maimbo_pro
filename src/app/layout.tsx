import type { Metadata } from "next";
import { Bebas_Neue, Archivo, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const editorial = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAIMBO | Vende Estilo",
  description:
    "MAIMBO streetwear en Sucre. Local en Ostria Reyes 555. Envíos a todo Bolivia.",
  metadataBase: new URL("https://maimbo.local"),
  openGraph: {
    title: "MAIMBO | Vende Estilo",
    description: "Local en Sucre · Envíos a todo Bolivia · Streetwear.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${body.variable} ${editorial.variable} antialiased`}>
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
