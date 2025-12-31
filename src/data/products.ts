import fls1001Off from "@/assets/products/FLS-1001 SUNSET STONE-OFF.webp";
import fls1001On from "@/assets/products/FLS-1001 SUNSET STONE-ON.webp";
import fls1002Off from "@/assets/products/FLS-1002 RUSTIC GREY-OFF.webp";
import fls1002On from "@/assets/products/FLS-1002 RUSTIC GREY-ON.webp";
import fls1003Off from "@/assets/products/FLS-1003 BRONZE CANYON-OFF.webp";
import fls1003On from "@/assets/products/FLS-1003 BRONZE CANYON-ON.webp";
import fls1004Off from "@/assets/products/FLS-1004 EARTH FOSSIL-OFF.webp";
import fls1004On from "@/assets/products/FLS-1004 EARTH FOSSIL-ON.webp";
import fls1005Off from "@/assets/products/FLS-1005 SAVANA VINTAGE-OFF.webp";
import fls1005On from "@/assets/products/FLS-1005 SAVANA VINTAGE-ON.webp";

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  shortDescription: string;
  imageOff: string;
  imageOn: string;
  material: string;
  size: string;
  thickness: string;
  weight: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    code: "FLS-1001",
    name: "Sunset Stone",
    description: "Luminous Stone is a translucent stone veneer that exposes a stunning glow effect in backlit. The purposes to feature walls, front counters, ceiling, backdrop or display areas, it combines visual elegance with functional durability. It's lightweight material, easy to install and enhances any space with a clean, contemporary finish that aligns with today's modern design approach, making it a perfect choice for both exterior and interior applications.",
    shortDescription: "Translucent stone veneer dengan efek glow yang memukau saat dinyalakan",
    imageOff: fls1001Off,
    imageOn: fls1001On,
    material: "Frantinco Luminous Stone",
    size: "1220 mm x 2440 mm",
    thickness: "2 - 3 mm",
    weight: "6 - 8 kg/sheet",
    features: ["Light Resistance", "Sun Resistance", "Lightweight", "Moisture Control", "Waterproof", "Fireproof"],
  },
  {
    id: "2",
    code: "FLS-1002",
    name: "Rustic Grey",
    description: "Luminous Stone is a translucent stone veneer that exposes a stunning glow effect in backlit. The purposes to feature walls, front counters, ceiling, backdrop or display areas, it combines visual elegance with functional durability. It's lightweight material, easy to install and enhances any space with a clean, contemporary finish that aligns with today's modern design approach, making it a perfect choice for both exterior and interior applications.",
    shortDescription: "Translucent stone veneer dengan efek glow yang memukau saat dinyalakan",
    imageOff: fls1002Off,
    imageOn: fls1002On,
    material: "Frantinco Luminous Stone",
    size: "1220 mm x 2440 mm",
    thickness: "2 - 3 mm",
    weight: "6 - 8 kg/sheet",
    features: ["Light Resistance", "Sun Resistance", "Lightweight", "Moisture Control", "Waterproof", "Fireproof"],
  },
  {
    id: "3",
    code: "FLS-1003",
    name: "Bronze Canyon",
    description: "Luminous Stone is a translucent stone veneer that exposes a stunning glow effect in backlit. The purposes to feature walls, front counters, ceiling, backdrop or display areas, it combines visual elegance with functional durability. It's lightweight material, easy to install and enhances any space with a clean, contemporary finish that aligns with today's modern design approach, making it a perfect choice for both exterior and interior applications.",
    shortDescription: "Translucent stone veneer dengan efek glow yang memukau saat dinyalakan",
    imageOff: fls1003Off,
    imageOn: fls1003On,
    material: "Frantinco Luminous Stone",
    size: "1220 mm x 2440 mm",
    thickness: "2 - 3 mm",
    weight: "6 - 8 kg/sheet",
    features: ["Light Resistance", "Sun Resistance", "Lightweight", "Moisture Control", "Waterproof", "Fireproof"],
  },
  {
    id: "4",
    code: "FLS-1004",
    name: "Earth Fossil",
    description: "Luminous Stone is a translucent stone veneer that exposes a stunning glow effect in backlit. The purposes to feature walls, front counters, ceiling, backdrop or display areas, it combines visual elegance with functional durability. It's lightweight material, easy to install and enhances any space with a clean, contemporary finish that aligns with today's modern design approach, making it a perfect choice for both exterior and interior applications.",
    shortDescription: "Translucent stone veneer dengan efek glow yang memukau saat dinyalakan",
    imageOff: fls1004Off,
    imageOn: fls1004On,
    material: "Frantinco Luminous Stone",
    size: "1220 mm x 2440 mm",
    thickness: "2 - 3 mm",
    weight: "6 - 8 kg/sheet",
    features: ["Light Resistance", "Sun Resistance", "Lightweight", "Moisture Control", "Waterproof", "Fireproof"],
  },
  {
    id: "5",
    code: "FLS-1005",
    name: "Savana Vintage",
    description: "Luminous Stone is a translucent stone veneer that exposes a stunning glow effect in backlit. The purposes to feature walls, front counters, ceiling, backdrop or display areas, it combines visual elegance with functional durability. It's lightweight material, easy to install and enhances any space with a clean, contemporary finish that aligns with today's modern design approach, making it a perfect choice for both exterior and interior applications.",
    shortDescription: "Translucent stone veneer dengan efek glow yang memukau saat dinyalakan",
    imageOff: fls1005Off,
    imageOn: fls1005On,
    material: "Frantinco Luminous Stone",
    size: "1220 mm x 2440 mm",
    thickness: "2 - 3 mm",
    weight: "6 - 8 kg/sheet",
    features: ["Light Resistance", "Sun Resistance", "Lightweight", "Moisture Control", "Waterproof", "Fireproof"],
  },
];

export const getProductByCode = (code: string): Product | undefined => {
  return products.find((p) => p.code === code);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};
