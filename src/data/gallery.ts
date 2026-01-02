import residential1 from "@/assets/gallery/residential-1.jpg";
import residential2 from "@/assets/gallery/residential-2.jpg";
import commercial1 from "@/assets/gallery/commercial-1.jpg";
import commercial2 from "@/assets/gallery/commercial-2.jpg";
import resepsionis from "@/assets/gallery/resepsionis.jpeg";

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  category: "residential" | "commercial";
  subCategory: string;
}

export const galleryItems: GalleryItem[] = [
  // Residensial
  {
    id: "r1",
    image: residential1,
    title: "Ruang Tamu",
    titleEn: "Living Room",
    description: "Dinding onyx backlit sebagai focal point ruang tamu mewah",
    descriptionEn: "Backlit onyx wall as a luxury living room focal point",
    category: "residential",
    subCategory: "living-room",
  },
  {
    id: "r2",
    image: residential2,
    title: "Kamar Mandi Spa",
    titleEn: "Spa Bathroom",
    description: "Transformasi bathroom menjadi spa pribadi dengan panel marmer luminous",
    descriptionEn: "Transform your bathroom into a private spa with luminous marble panels",
    category: "residential",
    subCategory: "bathroom",
  },
  {
    id: "r3",
    image: residential1,
    title: "Ruang Tidur",
    titleEn: "Bedroom",
    description: "Headboard dan dinding aksen dengan efek cahaya yang menenangkan",
    descriptionEn: "Headboard and accent wall with soothing light effect",
    category: "residential",
    subCategory: "bedroom",
  },
  {
    id: "r4",
    image: residential2,
    title: "Ruang Makan",
    titleEn: "Dining Room",
    description: "Panel dinding luminous menciptakan suasana makan yang elegan",
    descriptionEn: "Luminous wall panels create an elegant dining atmosphere",
    category: "residential",
    subCategory: "dining-room",
  },
  {
    id: "r5",
    image: residential1,
    title: "Ruang Kerja",
    titleEn: "Home Office",
    description: "Backdrop luminous untuk ruang kerja yang inspiratif",
    descriptionEn: "Luminous backdrop for an inspiring workspace",
    category: "residential",
    subCategory: "home-office",
  },
  {
    id: "r6",
    image: residential2,
    title: "Dapur",
    titleEn: "Kitchen",
    description: "Backsplash dan island dapur dengan efek backlit yang memukau",
    descriptionEn: "Kitchen backsplash and island with stunning backlit effect",
    category: "residential",
    subCategory: "kitchen",
  },
  {
    id: "r7",
    image: residential1,
    title: "Lorong & Tangga",
    titleEn: "Hallway & Stairs",
    description: "Panel luminous menerangi lorong dan area tangga dengan elegan",
    descriptionEn: "Luminous panels elegantly illuminate hallways and stairways",
    category: "residential",
    subCategory: "hallway",
  },
  // Komersial
  {
    id: "c1",
    image: resepsionis,
    title: "Resepsionis Hotel",
    titleEn: "Hotel Reception",
    description: "Meja resepsionis hotel bintang lima dengan onyx backlit",
    descriptionEn: "Five-star hotel reception desk with backlit onyx",
    category: "commercial",
    subCategory: "reception",
  },
  {
    id: "c2",
    image: commercial1,
    title: "Bar & Restoran",
    titleEn: "Bar & Restaurant",
    description: "Bar counter restoran mewah dengan stone panel illuminated",
    descriptionEn: "Luxury restaurant bar counter with illuminated stone panels",
    category: "commercial",
    subCategory: "restaurant",
  },
  {
    id: "c3",
    image: commercial2,
    title: "Lobi Gedung",
    titleEn: "Building Lobby",
    description: "Feature wall pada lobi gedung perkantoran premium",
    descriptionEn: "Feature wall in premium office building lobby",
    category: "commercial",
    subCategory: "lobby",
  },
  {
    id: "c4",
    image: resepsionis,
    title: "Spa & Wellness",
    titleEn: "Spa & Wellness",
    description: "Dinding aksen spa dengan efek cahaya yang menenangkan",
    descriptionEn: "Spa accent wall with soothing light effects",
    category: "commercial",
    subCategory: "spa",
  },
  {
    id: "c5",
    image: commercial1,
    title: "Kolam Renang",
    titleEn: "Swimming Pool",
    description: "Dinding kolam renang dengan panel luminous waterproof",
    descriptionEn: "Pool walls with waterproof luminous panels",
    category: "commercial",
    subCategory: "pool",
  },
  {
    id: "c6",
    image: commercial2,
    title: "Showroom",
    titleEn: "Showroom",
    description: "Display produk mewah dengan backdrop batu luminous",
    descriptionEn: "Luxury product display with luminous stone backdrop",
    category: "commercial",
    subCategory: "showroom",
  },
  {
    id: "c7",
    image: resepsionis,
    title: "Ruang Meeting",
    titleEn: "Meeting Room",
    description: "Panel dinding ruang meeting untuk kesan profesional",
    descriptionEn: "Meeting room wall panels for a professional impression",
    category: "commercial",
    subCategory: "meeting-room",
  },
  {
    id: "c8",
    image: commercial1,
    title: "Butik & Retail",
    titleEn: "Boutique & Retail",
    description: "Interior toko butik dengan aksen luminous yang memikat",
    descriptionEn: "Boutique store interior with captivating luminous accents",
    category: "commercial",
    subCategory: "retail",
  },
  {
    id: "c9",
    image: commercial2,
    title: "Lift & Elevator",
    titleEn: "Elevator",
    description: "Interior lift gedung dengan panel batu backlit eksklusif",
    descriptionEn: "Building elevator interior with exclusive backlit stone panels",
    category: "commercial",
    subCategory: "elevator",
  },
  {
    id: "c10",
    image: resepsionis,
    title: "Kafe & Lounge",
    titleEn: "Cafe & Lounge",
    description: "Suasana kafe yang hangat dengan pencahayaan stone panel",
    descriptionEn: "Warm cafe atmosphere with stone panel lighting",
    category: "commercial",
    subCategory: "cafe",
  },
];

export const getResidentialGallery = (): GalleryItem[] => {
  return galleryItems.filter((item) => item.category === "residential");
};

export const getCommercialGallery = (): GalleryItem[] => {
  return galleryItems.filter((item) => item.category === "commercial");
};