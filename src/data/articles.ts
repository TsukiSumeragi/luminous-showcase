import article1 from "@/assets/articles/article-1.jpg";
import article2 from "@/assets/articles/article-2.jpg";
import article3 from "@/assets/articles/article-3.jpg";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  tags: string[];
  readTime: string;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "keindahan-batu-luminous-dalam-arsitektur-modern",
    title: "Keindahan Batu Luminous dalam Arsitektur Modern",
    excerpt: "Eksplorasi bagaimana teknologi backlit stone mengubah pendekatan desainer interior dalam menciptakan ruang yang memukau.",
    content: `
Dalam dunia arsitektur dan desain interior kontemporer, batu luminous telah muncul sebagai elemen transformatif yang mengaburkan batas antara material alam dan teknologi modern.

## Revolusi Material

Batu-batu alam seperti onyx, agate, dan marmer translucent kini dapat diiluminasi dari belakang, mengungkapkan keindahan tersembunyi yang tidak terlihat dalam kondisi pencahayaan normal. Efek ini menciptakan focal point yang dramatis dan memukau dalam berbagai setting interior.

## Aplikasi dalam Desain

Para arsitek dan desainer interior menggunakan batu luminous untuk:

- **Dinding Aksen**: Menciptakan statement wall yang menjadi pusat perhatian
- **Bar Counter**: Memberikan efek dramatis pada area bar dan entertainment
- **Bathroom Luxury**: Transformasi ruang mandi menjadi spa pribadi
- **Lobby Hotel**: Menciptakan first impression yang tak terlupakan

## Teknologi di Balik Keindahan

Sistem LED modern memungkinkan kontrol penuh atas intensitas dan warna cahaya, memberikan fleksibilitas desain yang luar biasa. Panel-panel dapat diprogram untuk mengikuti ritme sirkadian atau menciptakan mood tertentu sesuai occasion.

## Masa Depan Luminous Stone

Dengan perkembangan teknologi smart home dan IoT, batu luminous akan semakin terintegrasi dengan ekosistem rumah pintar, memungkinkan kontrol suara dan otomatisasi yang seamless.
    `,
    image: article1,
    date: "2024-12-15",
    tags: ["Arsitektur", "Teknologi", "Desain Interior"],
    readTime: "5 menit",
  },
  {
    id: "2",
    slug: "mengenal-jenis-batu-alam-translucent",
    title: "Mengenal Jenis Batu Alam Translucent",
    excerpt: "Panduan lengkap tentang berbagai jenis batu alam yang dapat ditembus cahaya dan karakteristik uniknya.",
    content: `
Batu alam translucent adalah kategori khusus material yang memiliki kemampuan untuk meloloskan cahaya, menciptakan efek visual yang menakjubkan saat diiluminasi.

## Onyx

Onyx adalah salah satu batu paling populer untuk aplikasi backlit. Dengan pola urat yang dramatis dan variasi warna dari putih hingga madu keemasan, onyx menciptakan efek yang hangat dan mewah.

### Karakteristik:
- Translucensi tinggi
- Pola urat unik di setiap lembar
- Warna hangat saat diiluminasi
- Ideal untuk area kering

## Agate

Agate dikenal dengan pola banding konsentris dan warna-warna vivid. Batu ini sangat langka dan sering digunakan sebagai statement piece.

### Karakteristik:
- Struktur kristal internal
- Warna biru, hijau, pink tersedia
- Ukuran terbatas
- Premium pricing

## Marmer Translucent

Beberapa varietas marmer memiliki tingkat translucensi yang cukup untuk efek backlit, terutama Carrara dan Calacatta.

### Karakteristik:
- Elegance klasik
- Veining subtle
- Lebih affordable dibanding onyx
- Tersedia dalam format besar

## Tips Memilih

1. Pertimbangkan lokasi instalasi (kering vs lembab)
2. Tentukan budget dan prioritas
3. Minta sample untuk melihat efek actual
4. Konsultasikan dengan profesional
    `,
    image: article2,
    date: "2024-12-10",
    tags: ["Material", "Produk", "Panduan"],
    readTime: "7 menit",
  },
  {
    id: "3",
    slug: "panduan-instalasi-panel-batu-luminous",
    title: "Panduan Instalasi Panel Batu Luminous",
    excerpt: "Langkah demi langkah proses instalasi panel batu luminous untuk hasil yang optimal dan tahan lama.",
    content: `
Instalasi panel batu luminous membutuhkan perencanaan dan eksekusi yang tepat untuk memastikan hasil yang optimal. Berikut panduan lengkapnya.

## Persiapan

### Survey Lokasi
- Evaluasi kondisi dinding existing
- Ukur dengan presisi
- Pastikan akses listrik tersedia
- Pertimbangkan heat dissipation

### Material yang Dibutuhkan
- Panel batu luminous
- Frame mounting system
- LED strip atau panel
- Driver dan dimmer
- Kabel dan connector
- Sealant khusus batu

## Proses Instalasi

### 1. Persiapan Permukaan

Dinding harus rata, kering, dan bersih. Untuk dinding tidak rata, gunakan furring strips untuk menciptakan permukaan yang sejajar.

### 2. Instalasi Frame

Pasang frame mounting dengan level yang presisi. Frame harus mampu menopang berat panel dengan aman.

### 3. Sistem LED

- Pasang LED strip di dalam frame
- Gunakan diffuser untuk penyebaran cahaya merata
- Test sistem sebelum memasang panel
- Pastikan driver mudah diakses untuk maintenance

### 4. Pemasangan Panel

- Angkat panel dengan hati-hati menggunakan vacuum lifter
- Posisikan dan kunci dengan sistem mounting
- Apply sealant di tepi jika diperlukan

## Maintenance

- Bersihkan dengan kain lembab
- Hindari chemical abrasif
- Service LED system secara berkala
- Check electrical connection tahunan
    `,
    image: article3,
    date: "2024-12-05",
    tags: ["Instalasi", "Panduan", "Tips"],
    readTime: "8 menit",
  },
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((a) => a.slug === slug);
};

export const getArticleById = (id: string): Article | undefined => {
  return articles.find((a) => a.id === id);
};

export const getRelatedArticles = (currentId: string, tags: string[]): Article[] => {
  return articles
    .filter((a) => a.id !== currentId && a.tags.some((t) => tags.includes(t)))
    .slice(0, 3);
};
