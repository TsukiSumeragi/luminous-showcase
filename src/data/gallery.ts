import residential1 from "@/assets/gallery/residential-1.jpg";
import residential2 from "@/assets/gallery/residential-2.jpg";
import commercial1 from "@/assets/gallery/commercial-1.jpg";
import commercial2 from "@/assets/gallery/commercial-2.jpg";
import resepsionis from "@/assets/gallery/resepsionis.jpeg";

// New gallery images
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
  // RESIDENSIAL (15 items)
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
    image: bedroom,
    title: "Kamar Tidur",
    titleEn: "Bedroom",
    description: "Headboard dan dinding aksen dengan efek cahaya yang menenangkan",
    descriptionEn: "Headboard and accent wall with soothing light effect",
    category: "residential",
    subCategory: "bedroom",
  },
  {
    id: "r4",
    image: dinningRoom,
    title: "Ruang Makan",
    titleEn: "Dining Room",
    description: "Panel dinding luminous menciptakan suasana makan yang elegan",
    descriptionEn: "Luminous wall panels create an elegant dining atmosphere",
    category: "residential",
    subCategory: "dining-room",
  },
  {
    id: "r5",
    image: studyRoom,
    title: "Ruang Kerja",
    titleEn: "Home Office",
    description: "Backdrop luminous untuk ruang kerja yang inspiratif",
    descriptionEn: "Luminous backdrop for an inspiring workspace",
    category: "residential",
    subCategory: "home-office",
  },
  {
    id: "r6",
    image: kitchen,
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
  {
    id: "r8",
    image: foyerEntrance,
    title: "Foyer & Entrance",
    titleEn: "Foyer & Entrance",
    description: "Sambut tamu dengan kesan pertama yang memukau di area foyer",
    descriptionEn: "Welcome guests with a stunning first impression in the foyer area",
    category: "residential",
    subCategory: "foyer",
  },
  {
    id: "r9",
    image: residential1,
    title: "Walk-in Closet",
    titleEn: "Walk-in Closet",
    description: "Lemari pakaian mewah dengan panel backlit yang elegan",
    descriptionEn: "Luxury wardrobe with elegant backlit panels",
    category: "residential",
    subCategory: "closet",
  },
  {
    id: "r10",
    image: residential2,
    title: "Ruang Keluarga",
    titleEn: "Family Room",
    description: "Area berkumpul keluarga yang hangat dengan pencahayaan ambient luminous",
    descriptionEn: "Warm family gathering area with luminous ambient lighting",
    category: "residential",
    subCategory: "family-room",
  },
  {
    id: "r11",
    image: bioskop,
    title: "Home Theater",
    titleEn: "Home Theater",
    description: "Ruang bioskop pribadi dengan panel dinding yang dramatis",
    descriptionEn: "Private cinema room with dramatic wall panels",
    category: "residential",
    subCategory: "theater",
  },
  {
    id: "r12",
    image: balkon,
    title: "Balkon & Teras",
    titleEn: "Balcony & Terrace",
    description: "Area outdoor yang menawan dengan panel luminous tahan cuaca",
    descriptionEn: "Charming outdoor area with weather-resistant luminous panels",
    category: "residential",
    subCategory: "balcony",
  },
  {
    id: "r13",
    image: pool,
    title: "Kolam Renang Pribadi",
    titleEn: "Private Pool",
    description: "Dinding kolam renang rumah dengan efek underwater glow",
    descriptionEn: "Home pool walls with underwater glow effect",
    category: "residential",
    subCategory: "pool",
  },
  {
    id: "r14",
    image: residential2,
    title: "Ruang Baca",
    titleEn: "Reading Room",
    description: "Sudut baca yang nyaman dengan pencahayaan lembut dari panel batu",
    descriptionEn: "Cozy reading corner with soft lighting from stone panels",
    category: "residential",
    subCategory: "reading-room",
  },
  {
    id: "r15",
    image: miniBar,
    title: "Mini Bar Rumah",
    titleEn: "Home Mini Bar",
    description: "Bar counter pribadi dengan efek backlit yang memikat",
    descriptionEn: "Private bar counter with captivating backlit effect",
    category: "residential",
    subCategory: "home-bar",
  },
  // =====================
  // KOMERSIAL (20 items)
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
    image: lobyHotel,
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
    title: "Kolam Renang Hotel",
    titleEn: "Hotel Swimming Pool",
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
  {
    id: "c11",
    image: commercial1,
    title: "Ballroom & Function Hall",
    titleEn: "Ballroom & Function Hall",
    description: "Aula pesta dan ballroom dengan panel dinding yang megah",
    descriptionEn: "Party hall and ballroom with magnificent wall panels",
    category: "commercial",
    subCategory: "ballroom",
  },
  {
    id: "c12",
    image: commercial2,
    title: "Bank & Financial",
    titleEn: "Bank & Financial",
    description: "Interior bank dan lembaga keuangan dengan kesan premium",
    descriptionEn: "Bank and financial institution interior with premium impression",
    category: "commercial",
    subCategory: "bank",
  },
  {
    id: "c13",
    image: resepsionis,
    title: "Klinik & Rumah Sakit",
    titleEn: "Clinic & Hospital",
    description: "Resepsionis klinik dengan panel yang menciptakan suasana tenang",
    descriptionEn: "Clinic reception with panels creating a calm atmosphere",
    category: "commercial",
    subCategory: "clinic",
  },
  {
    id: "c14",
    image: commercial1,
    title: "Dealer Mobil",
    titleEn: "Car Dealership",
    description: "Showroom mobil premium dengan backdrop luminous yang impresif",
    descriptionEn: "Premium car showroom with impressive luminous backdrop",
    category: "commercial",
    subCategory: "dealership",
  },
  {
    id: "c15",
    image: commercial2,
    title: "Salon & Barbershop",
    titleEn: "Salon & Barbershop",
    description: "Interior salon kecantikan dengan pencahayaan yang memanjakan",
    descriptionEn: "Beauty salon interior with pampering lighting",
    category: "commercial",
    subCategory: "salon",
  },
  {
    id: "c16",
    image: resepsionis,
    title: "Studio Foto",
    titleEn: "Photo Studio",
    description: "Backdrop studio foto dengan variasi pencahayaan yang unik",
    descriptionEn: "Photo studio backdrop with unique lighting variations",
    category: "commercial",
    subCategory: "studio",
  },
  {
    id: "c17",
    image: commercial1,
    title: "Galeri Seni",
    titleEn: "Art Gallery",
    description: "Dinding galeri dengan pencahayaan yang menonjolkan karya seni",
    descriptionEn: "Gallery walls with lighting that highlights artwork",
    category: "commercial",
    subCategory: "gallery",
  },
  {
    id: "c18",
    image: workspace,
    title: "Kantor Eksekutif",
    titleEn: "Executive Office",
    description: "Ruang kerja eksekutif dengan panel dinding yang prestisius",
    descriptionEn: "Executive workspace with prestigious wall panels",
    category: "commercial",
    subCategory: "executive-office",
  },
  {
    id: "c19",
    image: resepsionis,
    title: "Toko Perhiasan",
    titleEn: "Jewelry Store",
    description: "Display perhiasan yang berkilau dengan panel luminous sebagai latar",
    descriptionEn: "Sparkling jewelry display with luminous panels as background",
    category: "commercial",
    subCategory: "jewelry",
  },
  {
    id: "c20",
    image: commercial1,
    title: "Club & Nightlife",
    titleEn: "Club & Nightlife",
    description: "Interior club malam dengan efek pencahayaan yang dinamis",
    descriptionEn: "Nightclub interior with dynamic lighting effects",
    category: "commercial",
    subCategory: "club",
  },
];

export const getResidentialGallery = (): GalleryItem[] => {
  return galleryItems.filter((item) => item.category === "residential");
};

export const getCommercialGallery = (): GalleryItem[] => {
  return galleryItems.filter((item) => item.category === "commercial");
};
