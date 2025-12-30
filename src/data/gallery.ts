import residential1 from "@/assets/gallery/residential-1.jpg";
import residential2 from "@/assets/gallery/residential-2.jpg";
import commercial1 from "@/assets/gallery/commercial-1.jpg";
import commercial2 from "@/assets/gallery/commercial-2.jpg";

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  description: string;
  category: "residential" | "commercial";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "r1",
    image: residential1,
    title: "Living Room Luxury",
    description: "Dinding onyx backlit sebagai focal point ruang tamu mewah",
    category: "residential",
  },
  {
    id: "r2",
    image: residential2,
    title: "Spa Bathroom",
    description: "Transformasi bathroom menjadi spa pribadi dengan panel marmer luminous",
    category: "residential",
  },
  {
    id: "c1",
    image: commercial1,
    title: "Hotel Reception",
    description: "Meja resepsionis hotel bintang lima dengan onyx backlit",
    category: "commercial",
  },
  {
    id: "c2",
    image: commercial2,
    title: "Fine Dining Bar",
    description: "Bar counter restoran mewah dengan stone panel illuminated",
    category: "commercial",
  },
];

export const getResidentialGallery = (): GalleryItem[] => {
  return galleryItems.filter((item) => item.category === "residential");
};

export const getCommercialGallery = (): GalleryItem[] => {
  return galleryItems.filter((item) => item.category === "commercial");
};
