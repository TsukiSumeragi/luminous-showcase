// Gallery images - Residential
import livingRoom from "@/assets/gallery/living room.png";
import bedroom from "@/assets/gallery/bedroom.png";
import dinningRoom from "@/assets/gallery/dinning room.png";
import studyRoom from "@/assets/gallery/study room.png";
import kitchen from "@/assets/gallery/kitchen1.png";
import foyerEntrance from "@/assets/gallery/foyer entrance.png";
import bioskop from "@/assets/gallery/bioskop.png";
import balkon from "@/assets/gallery/balkon.png";
import pool from "@/assets/gallery/pool.png";
import miniBar from "@/assets/gallery/mini bar.png";

// Gallery images - Commercial
import resepsionis from "@/assets/gallery/resepsionis.jpeg";
import lobyHotel from "@/assets/gallery/loby hotel.jpg";
import workspace from "@/assets/gallery/workspcae.png";

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
  // =====================
  // RESIDENSIAL (10 items)
  // =====================
  {
    id: "r1",
    image: livingRoom,
    title: "Ruang Tamu",
    titleEn: "Living Room",
    description: "Dinding onyx backlit sebagai focal point ruang tamu mewah",
    descriptionEn: "Backlit onyx wall as a luxury living room focal point",
    category: "residential",
    subCategory: "living-room",
  },
  {
    id: "r2",
    image: bedroom,
    title: "Kamar Tidur",
    titleEn: "Bedroom",
    description: "Headboard dan dinding aksen dengan efek cahaya yang menenangkan",
    descriptionEn: "Headboard and accent wall with soothing light effect",
    category: "residential",
    subCategory: "bedroom",
  },
  {
    id: "r3",
    image: dinningRoom,
    title: "Ruang Makan",
    titleEn: "Dining Room",
    description: "Panel dinding luminous menciptakan suasana makan yang elegan",
    descriptionEn: "Luminous wall panels create an elegant dining atmosphere",
    category: "residential",
    subCategory: "dining-room",
  },
  {
    id: "r4",
    image: studyRoom,
    title: "Ruang Kerja",
    titleEn: "Home Office",
    description: "Backdrop luminous untuk ruang kerja yang inspiratif",
    descriptionEn: "Luminous backdrop for an inspiring workspace",
    category: "residential",
    subCategory: "home-office",
  },
  {
    id: "r5",
    image: kitchen,
    title: "Dapur",
    titleEn: "Kitchen",
    description: "Backsplash dan island dapur dengan efek backlit yang memukau",
    descriptionEn: "Kitchen backsplash and island with stunning backlit effect",
    category: "residential",
    subCategory: "kitchen",
  },
  {
    id: "r6",
    image: foyerEntrance,
    title: "Foyer & Entrance",
    titleEn: "Foyer & Entrance",
    description: "Sambut tamu dengan kesan pertama yang memukau di area foyer",
    descriptionEn: "Welcome guests with a stunning first impression in the foyer area",
    category: "residential",
    subCategory: "foyer",
  },
  {
    id: "r7",
    image: bioskop,
    title: "Home Theater",
    titleEn: "Home Theater",
    description: "Ruang bioskop pribadi dengan panel dinding yang dramatis",
    descriptionEn: "Private cinema room with dramatic wall panels",
    category: "residential",
    subCategory: "theater",
  },
  {
    id: "r8",
    image: balkon,
    title: "Balkon & Teras",
    titleEn: "Balcony & Terrace",
    description: "Area outdoor yang menawan dengan panel luminous tahan cuaca",
    descriptionEn: "Charming outdoor area with weather-resistant luminous panels",
    category: "residential",
    subCategory: "balcony",
  },
  {
    id: "r9",
    image: pool,
    title: "Kolam Renang Pribadi",
    titleEn: "Private Pool",
    description: "Dinding kolam renang rumah dengan efek underwater glow",
    descriptionEn: "Home pool walls with underwater glow effect",
    category: "residential",
    subCategory: "pool",
  },
  {
    id: "r10",
    image: miniBar,
    title: "Mini Bar Rumah",
    titleEn: "Home Mini Bar",
    description: "Bar counter pribadi dengan efek backlit yang memikat",
    descriptionEn: "Private bar counter with captivating backlit effect",
    category: "residential",
    subCategory: "home-bar",
  },
  // =====================
  // KOMERSIAL (3 items)
  // =====================
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
    image: lobyHotel,
    title: "Lobi Hotel",
    titleEn: "Hotel Lobby",
    description: "Feature wall pada lobi hotel premium",
    descriptionEn: "Feature wall in premium hotel lobby",
    category: "commercial",
    subCategory: "lobby",
  },
  {
    id: "c3",
    image: workspace,
    title: "Kantor Eksekutif",
    titleEn: "Executive Office",
    description: "Ruang kerja eksekutif dengan panel dinding yang prestisius",
    descriptionEn: "Executive workspace with prestigious wall panels",
    category: "commercial",
    subCategory: "executive-office",
  },
];

export const getResidentialGallery = (): GalleryItem[] => {
  return galleryItems.filter((item) => item.category === "residential");
};

export const getCommercialGallery = (): GalleryItem[] => {
  return galleryItems.filter((item) => item.category === "commercial");
};
