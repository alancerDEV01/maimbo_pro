import type { Metadata } from "next";
import { Bebas_Neue, Archivo } from "next/font/google";
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

export const metadata: Metadata = {
  title: "MAIMBO | Streetwear Only",
  description:
    "Prototype e-commerce streetwear MAIMBO. Drops, actitud y ropa urbana para romper la calle.",
  metadataBase: new URL("https://maimbo.local"),
  openGraph: {
    title: "MAIMBO | Streetwear Only",
    description: "Drip mode activated. Piezas urbanas, drops y actitud.",
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
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
