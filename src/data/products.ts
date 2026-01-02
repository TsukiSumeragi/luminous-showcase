import PENGAPLIKASIAN_1 from "@/assets/PENGAPLIKASIAN/PENGAPLIKASIAN (1).webp";
import PENGAPLIKASIAN_1_1 from "@/assets/PENGAPLIKASIAN/PENGAPLIKASIAN (1) (1).webp";
import PENGAPLIKASIAN_2 from "@/assets/PENGAPLIKASIAN/PENGAPLIKASIAN (2).webp";
import PENGAPLIKASIAN_2_1 from "@/assets/PENGAPLIKASIAN/PENGAPLIKASIAN (2) (1).webp";

import FLS_1001_OFF from "@/assets/products/FLS-1001 SUNSET STONE-OFF.webp";
import FLS_1001_ON from "@/assets/products/FLS-1001 SUNSET STONE-ON.webp";
import FLS_1002_OFF from "@/assets/products/FLS-1002 RUSTIC GREY-OFF.webp";
import FLS_1002_ON from "@/assets/products/FLS-1002 RUSTIC GREY-ON.webp";
import FLS_1003_OFF from "@/assets/products/FLS-1003 BRONZE CANYON-OFF.webp";
import FLS_1003_ON from "@/assets/products/FLS-1003 BRONZE CANYON-ON.webp";
import FLS_1004_OFF from "@/assets/products/FLS-1004 EARTH FOSSIL-OFF.webp";
import FLS_1004_ON from "@/assets/products/FLS-1004 EARTH FOSSIL-ON.webp";
import FLS_1005_OFF from "@/assets/products/FLS-1005 SAVANA VINTAGE-OFF.webp";
import FLS_1005_ON from "@/assets/products/FLS-1005 SAVANA VINTAGE-ON.webp";

export interface Product {
  id: string;
  code: string;
  name: string;
  series: string;
  imageOff: string;
  imageOn: string;
  description: string;
  shortDescription: string;
  material: string;
  features: string[];
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
    description: "Veneer batu transparan yang memberikan efek kilauan menakjubkan saat terkena cahaya latar (backlit). Menghadirkan nuansa hangat alami yang cocok untuk dinding aksen interior maupun eksterior.",
    shortDescription: "Veneer batu transparan dengan efek cahaya latar yang menakjubkan.",
    material: "Real Stone + Resin + Backing Board",
    features: ["Sun Resistance", "Lightweight", "Fireproof", "Waterproof"],
    category: "luminous-stone",
    specifications: { 
      size: "1220 mm x 2440 mm", 
      thickness: "2 mm - 3 mm", 
      weight: "6 - 8 kg/sheet" 
    }
  },
  {
    id: "2",
    code: "FLS-1002",
    name: "RUSTIC GREY",
    series: "Luminous Stone",
    imageOff: FLS_1002_OFF,
    imageOn: FLS_1002_ON,
    description: "Menawarkan estetika modern dengan tekstur batu alam yang elegan. Material ini sangat ringan dan mudah dipasang untuk berbagai kebutuhan dekorasi kontemporer.",
    shortDescription: "Tekstur batu abu-abu rustik untuk desain modern minimalis.",
    material: "Real Stone + Resin + Backing Board",
    features: ["Moisture Control", "Weather Resistance", "Impact Resistance", "Durable"],
    category: "luminous-stone",
    specifications: { 
      size: "1220 mm x 2440 mm", 
      thickness: "2 mm - 3 mm", 
      weight: "6 - 8 kg/sheet" 
    }
  },
  {
    id: "3",
    code: "FLS-1003",
    name: "BRONZE CANYON",
    series: "Luminous Stone",
    imageOff: FLS_1003_OFF,
    imageOn: FLS_1003_ON,
    description: "Menghadirkan kemewahan tebing alam ke dalam ruangan dengan pola yang dramatis. Sangat ideal untuk aplikasi pada meja resepsionis atau bar counter.",
    shortDescription: "Pola batuan canyon dengan rona perunggu yang mewah.",
    material: "Real Stone + Resin + Backing Board",
    features: ["Lightweight", "Easy Installation", "Tear Resistance", "Interior Wall"],
    category: "luminous-stone",
    specifications: { 
      size: "1220 mm x 2440 mm", 
      thickness: "2 mm - 3 mm", 
      weight: "6 - 8 kg/sheet" 
    }
  },
  {
    id: "4",
    code: "FLS-1004",
    name: "EARTH FOSSIL",
    series: "Luminous Stone",
    imageOff: FLS_1004_OFF,
    imageOn: FLS_1004_ON,
    description: "Menangkap esensi elemen bumi yang murni. Menggabungkan keanggunan visual dengan ketahanan fungsional yang luar biasa untuk area komersial.",
    shortDescription: "Visual elemen bumi yang elegan dengan daya tahan tinggi.",
    material: "Real Stone + Resin + Backing Board",
    features: ["Fireproof", "Sun Resistance", "Modern Design", "Durable"],
    category: "luminous-stone",
    specifications: { 
      size: "1220 mm x 2440 mm", 
      thickness: "2 mm - 3 mm", 
      weight: "6 - 8 kg/sheet" 
    }
  },
  {
    id: "5",
    code: "FLS-1005",
    name: "SAVANA VINTAGE",
    series: "Luminous Stone",
    imageOff: FLS_1005_OFF,
    imageOn: FLS_1005_ON,
    description: "Memberikan tampilan klasik yang tak lekang oleh waktu. Material ini fleksibel untuk diaplikasikan pada ceiling, backdrop, maupun area tampilan lainnya.",
    shortDescription: "Tampilan vintage klasik untuk aplikasi backdrop dan ceiling.",
    material: "Real Stone + Resin + Backing Board",
    features: ["Waterproof", "Moisture Control", "Contemporary Finish", "Impact Resistance"],
    category: "luminous-stone",
    specifications: {
      size: "1220 mm x 2440 mm", 
      thickness: "2 mm - 3 mm", 
      weight: "6 - 8 kg/sheet" 
    }
  }
];

export const articles = [
  {
    id: "1",
    title: "Residensial",
    subtitle: "Aplikasi Hunian",
    description: "Ciptakan suasana hangat dan elegan di rumah Anda dengan Luminous Stone.",
    image: PENGAPLIKASIAN_1,
    category: "Residential"
  },
  {
    id: "2",
    title: "Komersial",
    subtitle: "Aplikasi Bisnis",
    description: "Tingkatkan kesan premium pada ruang komersial Anda.",
    image: PENGAPLIKASIAN_2,
    category: "Commercial"
  }
];

export const applicationImages = [
  { id: "1", src: PENGAPLIKASIAN_1, alt: "Residential 1", category: "residential" },
  { id: "2", src: PENGAPLIKASIAN_1_1, alt: "Residential 2", category: "residential" },
  { id: "3", src: PENGAPLIKASIAN_2, alt: "Commercial 1", category: "commercial" },
  { id: "4", src: PENGAPLIKASIAN_2_1, alt: "Commercial 2", category: "commercial" }
];

export const getProductByCode = (code: string) => products.find(p => p.code === code);