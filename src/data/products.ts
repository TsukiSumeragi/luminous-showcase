import fls1001Off from "@/assets/products/fls-1001-off.jpg";
import fls1001On from "@/assets/products/fls-1001-on.jpg";
import fls1002Off from "@/assets/products/fls-1002-off.jpg";
import fls1002On from "@/assets/products/fls-1002-on.jpg";
import fls1003Off from "@/assets/products/fls-1003-off.jpg";
import fls1003On from "@/assets/products/fls-1003-on.jpg";
import fls1004Off from "@/assets/products/fls-1004-off.jpg";
import fls1004On from "@/assets/products/fls-1004-on.jpg";
import fls1005Off from "@/assets/products/fls-1005-off.jpg";
import fls1005On from "@/assets/products/fls-1005-on.jpg";

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  shortDescription: string;
  imageOff: string;
  imageOn: string;
  material: string;
  dimensions: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    code: "FLS-1001",
    name: "Volcanic Ember",
    description: "Panel batu vulkanik premium dengan sistem pencahayaan LED internal yang menghasilkan efek magma yang memukau. Material ini menggabungkan keindahan alam dengan teknologi modern, menciptakan focal point yang dramatis untuk ruang interior mewah Anda. Setiap panel dibuat dengan presisi tinggi untuk memastikan kualitas dan durabilitas maksimal.",
    shortDescription: "Panel batu vulkanik dengan efek pencahayaan magma yang dramatis",
    imageOff: fls1001Off,
    imageOn: fls1001On,
    material: "Batu Vulkanik Premium",
    dimensions: "60 x 120 cm",
    features: ["LED Internal", "Tahan Air", "Garansi 5 Tahun", "Instalasi Mudah"],
  },
  {
    id: "2",
    code: "FLS-1002",
    name: "Honey Onyx",
    description: "Onyx translucent berkualitas tinggi dengan pola urat madu alami yang indah. Saat diiluminasi, batu ini mengungkapkan kedalaman dan kompleksitas warna yang luar biasa, menciptakan suasana hangat dan mewah. Ideal untuk dinding aksen, bar counter, atau instalasi seni.",
    shortDescription: "Onyx translucent dengan pola urat madu yang memukau",
    imageOff: fls1002Off,
    imageOn: fls1002On,
    material: "Onyx Alami",
    dimensions: "80 x 80 cm",
    features: ["Translucent", "Pola Unik", "Custom Size", "LED Warm White"],
  },
  {
    id: "3",
    code: "FLS-1003",
    name: "Carrara Hexa",
    description: "Panel marmer Carrara berbentuk heksagonal dengan desain modern yang elegan. Sistem pencahayaan terintegrasi memungkinkan kreasi pola geometris yang menakjubkan. Sempurna untuk lobby hotel, showroom mewah, atau ruang tamu kontemporer.",
    shortDescription: "Panel marmer Carrara heksagonal dengan desain geometris modern",
    imageOff: fls1003Off,
    imageOn: fls1003On,
    material: "Marmer Carrara Italia",
    dimensions: "45 cm (Diameter)",
    features: ["Modular Design", "Easy Connect", "Dimmable", "Smart Control Ready"],
  },
  {
    id: "4",
    code: "FLS-1004",
    name: "Azure Agate",
    description: "Lembaran agate biru langka dengan struktur kristal internal yang spektakuler. Ketika dinyalakan, panel ini memancarkan cahaya biru mistis yang menenangkan, sempurna untuk spa, bathroom mewah, atau ruang meditasi.",
    shortDescription: "Agate biru dengan efek kristal internal yang mistis",
    imageOff: fls1004Off,
    imageOn: fls1004On,
    material: "Agate Biru Premium",
    dimensions: "50 cm (Diameter)",
    features: ["Rare Material", "Blue LED", "Statement Piece", "Framed Option"],
  },
  {
    id: "5",
    code: "FLS-1005",
    name: "Golden Travertine",
    description: "Panel travertine ukuran besar dengan tekstur alami dan nada emas hangat. Pencahayaan backlit menekankan keindahan pori dan tekstur alami batu, menciptakan dinding aksen yang megah untuk ruang-ruang berukuran besar.",
    shortDescription: "Panel travertine besar dengan pencahayaan ambient hangat",
    imageOff: fls1005Off,
    imageOn: fls1005On,
    material: "Travertine Premium",
    dimensions: "100 x 200 cm",
    features: ["Large Format", "Natural Texture", "Warm Ambient", "Wall Mounting Kit"],
  },
];

export const getProductByCode = (code: string): Product | undefined => {
  return products.find((p) => p.code === code);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};
