import residentialImage from "@/assets/gallery/living-room.png";
import commercialImage from "@/assets/gallery/lobby-hotel.jpg";

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
    description: "Batu alami yang dikupas tipis dipadukan dengan resin transparan berkualitas tinggi. Memiliki sifat tembus cahaya yang menghasilkan efek bercahaya saat diberi pencahayaan belakang (backlit), memberikan tampilan mewah dan hangat. Sangat cocok untuk dinding aksen, backdrop, maupun area eksterior.",
    shortDescription: "Panel batu transparan dengan efek backlit yang menghadirkan nuansa hangat alami.",
    material: "Lapisan Batu Alam + Resin Transparan",
    features: ["Tembus Cahaya (Translucent)", "Tahan Sinar Matahari", "Ringan & Fleksibel", "Tahan Cuaca"],
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
    shortDescription: "Tekstur batu abu-abu rustik untuk desain modern minimalis.",
    material: "Lapisan Batu Alam + Resin Transparan",
    features: ["Tahan Kelembapan", "Tahan Cuaca", "Tahan Noda", "Pola Alami"],
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
    shortDescription: "Pola batuan canyon dengan rona perunggu yang mewah dan dramatis.",
    material: "Lapisan Batu Alam + Resin Transparan",
    features: ["Tembus Cahaya (Translucent)", "Ringan & Fleksibel", "Mudah Dipasang", "Pola Alami"],
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
    shortDescription: "Visual elemen bumi yang elegan dengan daya tahan tinggi untuk area komersial.",
    material: "Lapisan Batu Alam + Resin Transparan",
    features: ["Tahan Sinar Matahari", "Tahan Cuaca", "Tahan Noda", "Pola Alami"],
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
    shortDescription: "Tampilan vintage klasik untuk aplikasi backdrop, ceiling, dan countertop.",
    material: "Lapisan Batu Alam + Resin Transparan",
    features: ["Ringan & Fleksibel", "Tahan Kelembapan", "Mudah Dipasang", "Tahan Noda"],
    category: "luminous-stone",
    specifications: { size: "1220 mm x 2440 mm", thickness: "2 mm - 3 mm", weight: "6 - 8 kg/sheet" }
  }
];

export const applicationCategories = [
  {
    id: "1",
    title: "Residensial",
    subtitle: "Aplikasi Hunian",
    description: "Ciptakan suasana hangat dan elegan di rumah Anda dengan Luminous Stone. Cocok untuk dinding aksen, backdrop TV, atau area kamar mandi.",
    image: residentialImage,
    category: "Residential"
  },
  {
    id: "2",
    title: "Komersial",
    subtitle: "Aplikasi Bisnis",
    description: "Tingkatkan kesan premium pada ruang komersial Anda. Ideal untuk lobby hotel, meja resepsionis, bar counter, dan restoran.",
    image: commercialImage,
    category: "Commercial"
  }
];

export const getProductByCode = (code: string) => products.find(p => p.code === code);
