export type Product = {
  id: string;
  name: string;
  price: number;
  compareAt?: number;
  collection: string;
  tag?: string;
  image: string;
};

export const categories = [
  "Tracksuits",
  "Polos",
  "Hoodies",
  "Jeans",
  "Shorts",
  "Mujer",
  "Accesorios",
  "Drops",
] as const;

export const heroes = [
  {
    id: "h1",
    eyebrow: "DROP 01",
    title: "SHADOW DIVISION",
    subtitle: "Piezas densas para romper la noche. Stock limitado.",
    cta: "Comprar ahora",
    secondary: "Ver colección",
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "h2",
    eyebrow: "CAMPAÑA",
    title: "WAR DRIP",
    subtitle: "Siluetas agresivas. Actitud limpia. Streetwear sin filtro.",
    cta: "Comprar ahora",
    secondary: "Ver novedades",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "h3",
    eyebrow: "ARTIST MODE",
    title: "CHROME NIGHTS",
    subtitle: "Colaboraciones, drops y flow propio. Bienvenido a MAIMBO.",
    cta: "Explorar drop",
    secondary: "Ver más",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80",
  },
];

export const benefits = [
  { title: "Envíos a todo Bolivia", detail: "Despacho nacional" },
  { title: "Pago seguro", detail: "Checkout protegido" },
  { title: "Cambios de talla", detail: "Consulta por WhatsApp" },
  { title: "WhatsApp directo", detail: "75769315" },
  { title: "Tienda física", detail: "Sucre · Ostria Reyes 555" },
];

const img = {
  suit1:
    "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80",
  suit2:
    "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80",
  suit3:
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
  suit4:
    "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80",
  suit5:
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
  suit6:
    "https://images.unsplash.com/photo-1496360167021-07b75adcac4b?auto=format&fit=crop&w=800&q=80",
  hoodie1:
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
  hoodie2:
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
  hoodie3:
    "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&w=800&q=80",
  hoodie4:
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
  jacket:
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
  tee1:
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  tee2:
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
  tee3:
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
  tee4:
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
  tee5:
    "https://images.unsplash.com/photo-1618354691438-25bc04584c23?auto=format&fit=crop&w=800&q=80",
  jean1:
    "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
  jean2:
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
  jean3:
    "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
  jean4:
    "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=800&q=80",
  women1:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
  women2:
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
  women3:
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
  women4:
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
  women5:
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
  bag:
    "https://images.unsplash.com/photo-1548036328-c085554afee5?auto=format&fit=crop&w=800&q=80",
  cap:
    "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
  shoe:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  watch:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
};

export const products: Product[] = [
  {
    id: "p1",
    name: "TRACKSUIT SHADOW DIVISION",
    price: 199.9,
    compareAt: 249.9,
    collection: "tracksuits",
    tag: "HOT",
    image: img.suit2,
  },
  {
    id: "p2",
    name: "TRACKSUIT WAR DRIP",
    price: 189.9,
    collection: "tracksuits",
    tag: "NEW",
    image: img.suit1,
  },
  {
    id: "p3",
    name: "TRACKSUIT LUXURY DREAMS",
    price: 209.9,
    collection: "tracksuits",
    image: img.suit4,
  },
  {
    id: "p4",
    name: "TRACKSUIT REFLECTIVE",
    price: 179.9,
    collection: "tracksuits",
    image: img.suit3,
  },
  {
    id: "p5",
    name: "TRACKSUIT CHROME CORE",
    price: 199.9,
    collection: "tracksuits",
    tag: "DROP",
    image: img.suit5,
  },
  {
    id: "p6",
    name: "TRACKSUIT NIGHTFALL",
    price: 169.9,
    collection: "tracksuits",
    image: img.suit6,
  },
  {
    id: "p7",
    name: "HOODIE DEATH DRIP",
    price: 119.9,
    collection: "hoodies",
    tag: "NEW",
    image: img.hoodie1,
  },
  {
    id: "p8",
    name: "ZIP HOODIE LETTERING",
    price: 109.9,
    collection: "hoodies",
    image: img.hoodie2,
  },
  {
    id: "p9",
    name: "PHANTOM ZIP HOODIE",
    price: 129.9,
    collection: "hoodies",
    tag: "HOT",
    image: img.hoodie3,
  },
  {
    id: "p10",
    name: "JACKET NIGHTFALL",
    price: 149.9,
    collection: "hoodies",
    image: img.jacket,
  },
  {
    id: "p11",
    name: "HOODIE DIVINE DRIP",
    price: 114.9,
    collection: "hoodies",
    image: img.hoodie4,
  },
  {
    id: "p12",
    name: "HOODIE CHROME MARK",
    price: 124.9,
    collection: "hoodies",
    image: img.suit1,
  },
  {
    id: "p13",
    name: "T-SHIRT SKULL DRIP",
    price: 75,
    collection: "polos",
    tag: "NEW",
    image: img.tee1,
  },
  {
    id: "p14",
    name: "T-SHIRT DIAMOND FOCUS",
    price: 59.9,
    collection: "polos",
    image: img.tee2,
  },
  {
    id: "p15",
    name: "LONG SLEEVE WAR DRIP",
    price: 79.9,
    collection: "polos",
    image: img.tee3,
  },
  {
    id: "p16",
    name: "T-SHIRT GOTHIC MARK",
    price: 64.9,
    collection: "polos",
    image: img.tee4,
  },
  {
    id: "p17",
    name: "T-SHIRT NEW ORDER",
    price: 54.9,
    collection: "polos",
    image: img.tee5,
  },
  {
    id: "p18",
    name: "LONG SLEEVE CHROME",
    price: 84.9,
    collection: "polos",
    tag: "DROP",
    image: img.tee1,
  },
  {
    id: "p19",
    name: "JEAN BAGGY WAR DRIP",
    price: 99.9,
    collection: "jeans",
    tag: "HOT",
    image: img.jean1,
  },
  {
    id: "p20",
    name: "JEAN FLARED TRILINE",
    price: 109.9,
    collection: "jeans",
    image: img.jean2,
  },
  {
    id: "p21",
    name: "JEAN CARGO ERA",
    price: 119.9,
    collection: "jeans",
    image: img.jean3,
  },
  {
    id: "p22",
    name: "JEAN DIVINE DRIP",
    price: 119.9,
    collection: "jeans",
    image: img.jean4,
  },
  {
    id: "p23",
    name: "JEAN SLIM CALLAO",
    price: 114.9,
    collection: "jeans",
    image: img.jean1,
  },
  {
    id: "p24",
    name: "PANT COTTON FLARE",
    price: 104.9,
    collection: "jeans",
    image: img.jean2,
  },
  {
    id: "p25",
    name: "TOP CHROME",
    price: 49.9,
    collection: "mujer",
    tag: "NEW",
    image: img.women1,
  },
  {
    id: "p26",
    name: "BODY MAIMBO",
    price: 59.9,
    collection: "mujer",
    image: img.women2,
  },
  {
    id: "p27",
    name: "TOP DIAMOND",
    price: 49.9,
    collection: "mujer",
    image: img.women3,
  },
  {
    id: "p28",
    name: "TOP REFLECTIVE",
    price: 54.9,
    collection: "mujer",
    image: img.women4,
  },
  {
    id: "p29",
    name: "TOP BABY DRIP",
    price: 59.9,
    collection: "mujer",
    image: img.women5,
  },
  {
    id: "p30",
    name: "TOP CAMO",
    price: 59.9,
    collection: "mujer",
    image: img.suit5,
  },
  {
    id: "p31",
    name: "SKYMASK NEON",
    price: 35,
    collection: "accesorios",
    tag: "HOT",
    image: img.cap,
  },
  {
    id: "p32",
    name: "SKY MASK CAMO",
    price: 29.9,
    collection: "accesorios",
    image: img.shoe,
  },
  {
    id: "p33",
    name: "BALACLAVA REFLECTIVA",
    price: 35,
    collection: "accesorios",
    image: img.watch,
  },
  {
    id: "p34",
    name: "BANDOLERA CHROME",
    price: 75,
    collection: "accesorios",
    tag: "DROP",
    image: img.bag,
  },
  {
    id: "p35",
    name: "CAP MAIMBO MARK",
    price: 45,
    collection: "accesorios",
    image: img.cap,
  },
  {
    id: "p36",
    name: "GLOVES STREET CORE",
    price: 39.9,
    collection: "accesorios",
    image: img.shoe,
  },
];

export const drops = [
  {
    id: "d1",
    title: "ROA X MAIMBO",
    text: "No todas las piezas nacen para venderse. Colección pensada para romper escena.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "d2",
    title: "DRIP MUNDIAL",
    text: "Cuando el trap y MAIMBO conectan. Flow propio, rebeldía elegante.",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "d3",
    title: "CHROME SESSION",
    text: "MAIMBO no sigue modas: las diseña. Piezas para pertenecer.",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a06099aae73?auto=format&fit=crop&w=1200&q=80",
  },
];

export function byCollection(collection: string, limit = 8) {
  return products.filter((p) => p.collection === collection).slice(0, limit);
}

export function formatPrice(value: number) {
  return `S/. ${value.toFixed(2)}`;
}
