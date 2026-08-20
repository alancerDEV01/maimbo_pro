import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { TrustBar } from "@/components/TrustBar";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { ProductCarousel } from "@/components/ProductCarousel";
import { EditorialBanner } from "@/components/EditorialBanner";
import { CategoryTiles } from "@/components/CategoryTiles";
import { DropsSection } from "@/components/DropsSection";
import { StoreLocation } from "@/components/StoreLocation";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { byCollection, products } from "@/data/catalog";

export default function HomePage() {
  const novedades = products.filter((p) => p.tag === "NEW" || p.tag === "DROP").slice(0, 8);
  const masVendidos = products.filter((p) => p.tag === "HOT").concat(products.slice(0, 4)).slice(0, 8);

  return (
    <main>
      <AnnouncementBar />
      <Header />
      <HeroSlider />
      <TrustBar />
      <MarqueeBanner />
      <ProductCarousel
        title="TRACKSUITS"
        subtitle="El conjunto perfecto para romper la calle."
        products={byCollection("tracksuits")}
      />
      <ProductCarousel
        title="NEW ARRIVALS"
        subtitle="Drop nuevo. Curaduría sin repetición."
        products={novedades}
      />
      <EditorialBanner />
      <ProductCarousel
        title="MÁS VENDIDOS"
        subtitle="Lo que más se está llevando ahora."
        products={masVendidos}
      />
      <ProductCarousel
        title="POLOS"
        subtitle="Marcas fuertes. Siluetas limpias."
        products={byCollection("polos")}
      />
      <ProductCarousel
        title="HOODIES"
        subtitle="Piezas densas para clima y actitud."
        products={byCollection("hoodies")}
      />
      <CategoryTiles />
      <ProductCarousel
        title="MUJER"
        subtitle="Tops y bodies con DNA MAIMBO."
        products={byCollection("mujer")}
      />
      <ProductCarousel
        title="JEANS"
        subtitle="Baggy, flared y cargo para el flow."
        products={byCollection("jeans")}
      />
      <DropsSection />
      <ProductCarousel
        title="ACCESORIOS"
        subtitle="El detalle que cierra el look."
        products={byCollection("accesorios")}
      />
      <StoreLocation />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
