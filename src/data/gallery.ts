// Gallery images
import livingRoom from "@/assets/gallery/living-room.png";
import bedroom from "@/assets/gallery/bedroom.png";
import diningRoom from "@/assets/gallery/dining-room.png";
import kitchen from "@/assets/gallery/kitchen1.jpg";
import pool from "@/assets/gallery/pool.png";
import lobbyHotel from "@/assets/gallery/lobby-hotel.jpg";
import bioskop from "@/assets/gallery/bioskop.png";
import workspace from "@/assets/gallery/workspace.png";
import miniBar2 from "@/assets/gallery/mini-bar-2.png";
import earthFossil from "@/assets/gallery/earth-fossil.png";

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  category: "residential" | "commercial";
}

export const galleryItems: GalleryItem[] = [
  // Residential
  {
    id: "r1",
    image: livingRoom,
    title: "Ruang Tamu",
    titleEn: "Living Room",
    description: "Aplikasi panel Luminous Stone pada dinding utama ruang tamu.",
    descriptionEn: "Luminous Stone panel application on the main living room wall.",
    category: "residential",
  },
  {
    id: "r2",
    image: bedroom,
    title: "Kamar Tidur",
    titleEn: "Bedroom",
    description: "Headboard bercahaya yang menciptakan suasana hangat di kamar tidur.",
    descriptionEn: "Glowing headboard creating a warm atmosphere in the bedroom.",
    category: "residential",
  },
  {
    id: "r3",
    image: diningRoom,
    title: "Ruang Makan",
    titleEn: "Dining Room",
    description: "Dinding aksen mewah untuk area makan keluarga.",
    descriptionEn: "Luxurious accent wall for the family dining area.",
    category: "residential",
  },
  {
    id: "r4",
    image: kitchen,
    title: "Dapur",
    titleEn: "Kitchen",
    description: "Kitchen island dengan efek backlit yang modern dan elegan.",
    descriptionEn: "Kitchen island with modern and elegant backlit effect.",
    category: "residential",
  },
  {
    id: "r5",
    image: pool,
    title: "Kolam Renang",
    titleEn: "Swimming Pool",
    description: "Dinding kolam renang yang estetis dan tahan terhadap kelembapan.",
    descriptionEn: "Aesthetic pool walls resistant to moisture.",
    category: "residential",
  },
  // Commercial
  {
    id: "c1",
    image: lobbyHotel,
    title: "Lobi Hotel",
    titleEn: "Hotel Lobby",
    description: "Meja resepsionis hotel dengan panel onyx backlit yang mewah.",
    descriptionEn: "Hotel reception desk with luxurious backlit onyx panels.",
    category: "commercial",
  },
  {
    id: "c2",
    image: bioskop,
    title: "Bioskop",
    titleEn: "Cinema",
    description: "Aplikasi pada lounge bioskop untuk atmosfir yang dramatis.",
    descriptionEn: "Application in cinema lounge for dramatic atmosphere.",
    category: "commercial",
  },
  {
    id: "c3",
    image: workspace,
    title: "Ruang Kerja",
    titleEn: "Executive Workspace",
    description: "Desain interior kantor eksekutif dengan kesan profesional dan premium.",
    descriptionEn: "Executive office interior design with professional and premium impression.",
    category: "commercial",
  },
  {
    id: "c4",
    image: miniBar2,
    title: "Bar & Lounge",
    titleEn: "Bar & Lounge",
    description: "Pencahayaan bar counter yang dinamis.",
    descriptionEn: "Dynamic bar counter lighting.",
    category: "commercial",
  },
  {
    id: "c5",
    image: earthFossil,
    title: "Koridor",
    titleEn: "Building Corridor",
    description: "Aksen dinding koridor dengan pola natural Earth Fossil.",
    descriptionEn: "Corridor wall accent with natural Earth Fossil pattern.",
    category: "commercial",
  },
];

export const getResidentialGallery = (): GalleryItem[] => {
  return galleryItems.filter((item) => item.category === "residential");
};

export const getCommercialGallery = (): GalleryItem[] => {
  return galleryItems.filter((item) => item.category === "commercial");
};
