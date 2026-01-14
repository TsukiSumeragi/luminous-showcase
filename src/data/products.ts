import residentialImage from "@/assets/gallery/living-room.png";
import commercialImage from "@/assets/gallery/lobby-hotel.jpg";

import FLS_1001_ON from "@/assets/products/1001.jpg";
import FLS_1001_OFF from "@/assets/products/1001 SUNSET STONE.jpg";
import FLS_1002_ON from "@/assets/products/1002.jpg";
import FLS_1002_OFF from "@/assets/products/1002 RUSTIC GREY.jpg";
import FLS_1003_ON from "@/assets/products/1003.jpg";
import FLS_1003_OFF from "@/assets/products/1003 BRONZE CANYON.jpg";
import FLS_1004_ON from "@/assets/products/1004.jpg";
import FLS_1004_OFF from "@/assets/products/1004 EARTH FOSSIL.jpg";
import FLS_1005_ON from "@/assets/products/1005.jpg";
import FLS_1005_OFF from "@/assets/products/1005 SAVANA VINTAGE.jpg";

export interface Product {
  id: string;
  code: string;
  name: string;
  series: string;
  imageOff: string;
  imageOn: string;
  description: string;
  descriptionEn: string;
  shortDescription: string;
  shortDescriptionEn: string;
  material: string;
  materialEn: string;
  features: string[];
  featuresEn: string[];
  category: "luminous-stone";
  specifications: {
    size: string;
    thickness: string;
    weight: string;
  };
}

export const products: Product[] = [
  {
    id: "1",
    code: "FLS-1001",
    name: "SUNSET STONE",
    series: "Luminous Stone",
    imageOff: FLS_1001_OFF,
    imageOn: FLS_1001_ON,
    description: "Batu alami yang dikupas tipis dipadukan dengan resin transparan berkualitas tinggi. Memiliki sifat tembus cahaya yang menghasilkan efek bercahaya saat diberi pencahayaan belakang (backlit), memberikan tampilan mewah dan hangat. Sangat cocok untuk dinding aksen, backdrop, maupun area eksterior.",
    descriptionEn: "Thinly sliced natural stone combined with high-quality transparent resin. Features translucent properties that create a glowing effect when backlit, providing a luxurious and warm appearance. Perfect for accent walls, backdrops, and exterior areas.",
    shortDescription: "Panel batu transparan dengan efek backlit yang menghadirkan nuansa hangat alami.",
    shortDescriptionEn: "Translucent stone panel with backlit effect bringing natural warm ambiance.",
    material: "Lapisan Batu Alam + Resin Transparan",
    materialEn: "Natural Stone Layer + Transparent Resin",
    features: ["Tembus Cahaya (Translucent)", "Tahan Sinar Matahari", "Ringan & Fleksibel", "Tahan Cuaca"],
    featuresEn: ["Translucent", "UV Resistant", "Lightweight & Flexible", "Weather Resistant"],
    category: "luminous-stone",
    specifications: { size: "1220 mm x 2440 mm", thickness: "2 mm - 3 mm", weight: "6 - 8 kg/sheet" }
  },
  {
    id: "2",
    code: "FLS-1002",
    name: "RUSTIC GREY",
    series: "Luminous Stone",
    imageOff: FLS_1002_OFF,
    imageOn: FLS_1002_ON,
    description: "Material batu alam tipis dengan tekstur abu-abu elegan yang dipadukan resin berkualitas tinggi. Ringan, fleksibel, dan tahan terhadap kelembapan, menjadikannya pilihan sempurna untuk dekorasi modern kontemporer baik di interior maupun eksterior.",
    descriptionEn: "Thin natural stone material with elegant grey texture combined with high-quality resin. Lightweight, flexible, and moisture-resistant, making it a perfect choice for contemporary modern decoration in both interior and exterior.",
    shortDescription: "Tekstur batu abu-abu rustik untuk desain modern minimalis.",
    shortDescriptionEn: "Rustic grey stone texture for modern minimalist design.",
    material: "Lapisan Batu Alam + Resin Transparan",
    materialEn: "Natural Stone Layer + Transparent Resin",
    features: ["Tahan Kelembapan", "Tahan Cuaca", "Tahan Noda", "Pola Alami"],
    featuresEn: ["Moisture Resistant", "Weather Resistant", "Stain Resistant", "Natural Pattern"],
    category: "luminous-stone",
    specifications: { size: "1220 mm x 2440 mm", thickness: "2 mm - 3 mm", weight: "6 - 8 kg/sheet" }
  },
  {
    id: "3",
    code: "FLS-1003",
    name: "BRONZE CANYON",
    series: "Luminous Stone",
    imageOff: FLS_1003_OFF,
    imageOn: FLS_1003_ON,
    description: "Menghadirkan kemewahan tebing alam dengan pola dramatis dan rona perunggu. Dapat dipasang dengan LED strip/panel menggunakan diffuser akrilik untuk pencahayaan merata. Ideal untuk resepsionis, bar counter, atau backdrop ruangan.",
    descriptionEn: "Brings the luxury of natural cliffs with dramatic patterns and bronze hues. Can be installed with LED strip/panel using acrylic diffuser for even lighting. Ideal for reception areas, bar counters, or room backdrops.",
    shortDescription: "Pola batuan canyon dengan rona perunggu yang mewah dan dramatis.",
    shortDescriptionEn: "Canyon rock pattern with luxurious and dramatic bronze hues.",
    material: "Lapisan Batu Alam + Resin Transparan",
    materialEn: "Natural Stone Layer + Transparent Resin",
    features: ["Tembus Cahaya (Translucent)", "Ringan & Fleksibel", "Mudah Dipasang", "Pola Alami"],
    featuresEn: ["Translucent", "Lightweight & Flexible", "Easy to Install", "Natural Pattern"],
    category: "luminous-stone",
    specifications: { size: "1220 mm x 2440 mm", thickness: "2 mm - 3 mm", weight: "6 - 8 kg/sheet" }
  },
  {
    id: "4",
    code: "FLS-1004",
    name: "EARTH FOSSIL",
    series: "Luminous Stone",
    imageOff: FLS_1004_OFF,
    imageOn: FLS_1004_ON,
    description: "Menangkap esensi elemen bumi yang murni dengan pola fosil alami. Tahan sinar matahari, awet, dan kuat terhadap perubahan cuaca. Cocok untuk aplikasi ceiling, dinding interior/eksterior, dan area komersial.",
    descriptionEn: "Captures the essence of pure earth elements with natural fossil patterns. UV resistant, durable, and strong against weather changes. Suitable for ceiling applications, interior/exterior walls, and commercial areas.",
    shortDescription: "Visual elemen bumi yang elegan dengan daya tahan tinggi untuk area komersial.",
    shortDescriptionEn: "Elegant earth element visual with high durability for commercial areas.",
    material: "Lapisan Batu Alam + Resin Transparan",
    materialEn: "Natural Stone Layer + Transparent Resin",
    features: ["Tahan Sinar Matahari", "Tahan Cuaca", "Tahan Noda", "Pola Alami"],
    featuresEn: ["UV Resistant", "Weather Resistant", "Stain Resistant", "Natural Pattern"],
    category: "luminous-stone",
    specifications: { size: "1220 mm x 2440 mm", thickness: "2 mm - 3 mm", weight: "6 - 8 kg/sheet" }
  },
  {
    id: "5",
    code: "FLS-1005",
    name: "SAVANA VINTAGE",
    series: "Luminous Stone",
    imageOff: FLS_1005_OFF,
    imageOn: FLS_1005_ON,
    description: "Tampilan klasik yang tak lekang oleh waktu dengan corak alami. Material fleksibel yang cocok diaplikasikan pada ceiling, backdrop, countertop, maupun dinding. Ringan sehingga ideal untuk dekorasi plafon.",
    descriptionEn: "Timeless classic appearance with natural patterns. Flexible material suitable for ceiling, backdrop, countertop, and wall applications. Lightweight making it ideal for ceiling decoration.",
    shortDescription: "Tampilan vintage klasik untuk aplikasi backdrop, ceiling, dan countertop.",
    shortDescriptionEn: "Classic vintage appearance for backdrop, ceiling, and countertop applications.",
    material: "Lapisan Batu Alam + Resin Transparan",
    materialEn: "Natural Stone Layer + Transparent Resin",
    features: ["Ringan & Fleksibel", "Tahan Kelembapan", "Mudah Dipasang", "Tahan Noda"],
    featuresEn: ["Lightweight & Flexible", "Moisture Resistant", "Easy to Install", "Stain Resistant"],
    category: "luminous-stone",
    specifications: { size: "1220 mm x 2440 mm", thickness: "2 mm - 3 mm", weight: "6 - 8 kg/sheet" }
  }
];

export const applicationCategories = [
  {
    id: "1",
    title: "Residensial",
    titleEn: "Residential",
    subtitle: "Aplikasi Hunian",
    subtitleEn: "Home Applications",
    description: "Ciptakan suasana hangat dan elegan di rumah Anda dengan Luminous Stone. Cocok untuk dinding aksen, backdrop TV, atau area kamar mandi.",
    descriptionEn: "Create a warm and elegant atmosphere in your home with Luminous Stone. Perfect for accent walls, TV backdrops, or bathroom areas.",
    image: residentialImage,
    category: "Residential"
  },
  {
    id: "2",
    title: "Komersial",
    titleEn: "Commercial",
    subtitle: "Aplikasi Bisnis",
    subtitleEn: "Business Applications",
    description: "Tingkatkan kesan premium pada ruang komersial Anda. Ideal untuk lobby hotel, meja resepsionis, bar counter, dan restoran.",
    descriptionEn: "Elevate the premium impression of your commercial space. Ideal for hotel lobbies, reception desks, bar counters, and restaurants.",
    image: commercialImage,
    category: "Commercial"
  }
];

export const getProductByCode = (code: string) => products.find(p => p.code === code);
