import article1 from "@/assets/articles/article-1.jpg";
import article2 from "@/assets/articles/article-2.jpg";
import article3 from "@/assets/articles/article-3.jpg";

export interface Article {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  image: string;
  date: string;
  tags: string[];
  tagsEn: string[];
  readTime: string;
  readTimeEn: string;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "mengenal-luminous-stone",
    title: "Mengenal Luminous Stone: Bahan dan Keunggulan",
    titleEn: "Understanding Luminous Stone: Materials and Advantages",
    excerpt: "Luminous Stone adalah batu alami yang dikupas tipis dipadukan dengan resin transparan berkualitas tinggi, menciptakan efek bercahaya yang memukau.",
    excerptEn: "Luminous Stone is natural stone thinly sliced and combined with high-quality transparent resin, creating a stunning glowing effect.",
    content: `
## Bahan-bahan Produk

Luminous Stone adalah batu alami yang dikupas tipis dipadukan dengan resin transparan berkualitas tinggi. Kombinasi ini membuat material tetap mempertahankan tekstur alami batu, namun lebih ringan, tipis, dan fleksibel.

Sifat tembus cahaya dari resin memungkinkan efek bercahaya saat diberi pencahayaan belakang atau backlit. Selain itu, material ini kuat, tahan lama, dan mudah diaplikasikan pada berbagai permukaan, sehingga sangat sesuai untuk kebutuhan dekorasi modern baik di area interior maupun eksterior.

## Keunggulan Produk

### Tembus Cahaya
Memiliki sifat tembus cahaya yang menghasilkan efek bercahaya saat diberi pencahayaan belakang (backlit), memberikan tampilan mewah dan modern.

### Tahan Sinar Matahari
Tahan terhadap paparan sinar matahari sehingga warna dan kualitas material tetap terjaga meski digunakan di area eksterior.

### Ringan
Bobotnya ringan karena terbuat dari lapisan tipis batu alami dan resin, sehingga lebih mudah diaplikasikan dibandingkan batu alam (onyx). Cocok untuk dekorasi ceiling.

### Tahan Kelembapan
Tidak mudah menyerap kelembapan, sehingga mengurangi risiko jamur atau kerusakan akibat kelembapan air.

### Awet dan Tahan Cuaca
Kuat dan tahan terhadap perubahan cuaca, menjadikannya material yang awet untuk penggunaan jangka panjang.

### Kuat & Tahan Noda
Tidak mudah retak atau patah dan tahan noda sehingga lebih aman dan cocok untuk berbagai kebutuhan dekorasi.

### Tampil Natural
Berbahan lapisan batu asli alam sehingga corak/pola menjadi natural, memberikan kesan tampilan alami.
    `,
    contentEn: `
## Product Materials

Luminous Stone is natural stone thinly sliced and combined with high-quality transparent resin. This combination allows the material to maintain the natural texture of stone while being lighter, thinner, and more flexible.

The translucent nature of the resin enables a glowing effect when backlit. Additionally, this material is strong, durable, and easy to apply to various surfaces, making it highly suitable for modern decoration needs in both interior and exterior areas.

## Product Advantages

### Translucent
Features translucent properties that create a glowing effect when backlit, providing a luxurious and modern appearance.

### UV Resistant
Resistant to sunlight exposure, so color and material quality remain preserved even when used in exterior areas.

### Lightweight
Lightweight because it's made from thin layers of natural stone and resin, making it easier to apply compared to natural stone (onyx). Suitable for ceiling decoration.

### Moisture Resistant
Does not easily absorb moisture, reducing the risk of mold or damage from water humidity.

### Durable and Weather Resistant
Strong and resistant to weather changes, making it a durable material for long-term use.

### Strong & Stain Resistant
Does not easily crack or break and is stain-resistant, making it safer and suitable for various decoration needs.

### Natural Appearance
Made from real natural stone layers, so the patterns become natural, giving a natural appearance impression.
    `,
    image: article1,
    date: "2024-12-15",
    tags: ["Material", "Keunggulan", "Produk"],
    tagsEn: ["Material", "Advantages", "Product"],
    readTime: "5 menit",
    readTimeEn: "5 min",
  },
  {
    id: "2",
    slug: "penanganan-dan-penyimpanan-luminous-stone",
    title: "Penanganan dan Penyimpanan Luminous Stone",
    titleEn: "Handling and Storage of Luminous Stone",
    excerpt: "Panduan lengkap tentang cara pengangkutan dan penyimpanan Luminous Stone agar kualitas produk tetap terjaga.",
    excerptEn: "Complete guide on how to transport and store Luminous Stone to maintain product quality.",
    content: `
## Pengangkutan Barang

1. **Hindari membanting atau menjatuhkan** Luminous Stone untuk mencegah retak.

2. Selama pengangkutan, pastikan lembaran Luminous Stone **tidak terjepit atau terbentur** dengan benda keras untuk menghindari keretakan atau goresan pada permukaannya.

3. Gunakan **pelindung seperti kardus tebal, bubble wrap, atau styrofoam** untuk menghindari kerusakan akibat gesekan atau guncangan.

4. Letakkan produk dalam **posisi horizontal** dan hindari menumpuk terlalu tinggi agar tidak membebani lembaran material.

5. Saat memindahkan lembaran Luminous Stone dalam jumlah banyak, gunakan **palet atau troli** untuk mengurangi risiko kerusakan akibat jatuh atau benturan.

## Penyimpanan Barang

1. **Simpan di tempat yang baik** dan terlindung dari sinar matahari langsung atau hujan untuk menjaga kualitas produk.

2. Jika disimpan dalam waktu lama, **tumpuk secara horizontal** dengan alas tambahan yang rata untuk menjaga permukaan dan bentuknya.

3. **Hindari menumpuknya secara sembarangan** agar tidak patah atau retak.

4. Berikan **alas kayu atau palet** di bawah tumpukan untuk menghindari kontak langsung dengan lantai.

5. Gunakan **penutup seperti terpal atau plastik pelindung** untuk melindungi lembaran Luminous Stone dari debu/kotoran, tetapi pastikan ada sirkulasi udara untuk mencegah kelembapan terperangkap.
    `,
    contentEn: `
## Transporting Goods

1. **Avoid dropping or throwing** Luminous Stone to prevent cracking.

2. During transportation, ensure Luminous Stone sheets are **not pinched or hit** by hard objects to avoid cracks or scratches on the surface.

3. Use **protection such as thick cardboard, bubble wrap, or styrofoam** to prevent damage from friction or shaking.

4. Place products in a **horizontal position** and avoid stacking too high to prevent overloading the material sheets.

5. When moving large quantities of Luminous Stone sheets, use **pallets or trolleys** to reduce the risk of damage from falling or impact.

## Storage

1. **Store in a good place** protected from direct sunlight or rain to maintain product quality.

2. If stored for a long time, **stack horizontally** with additional flat padding to maintain surface and shape.

3. **Avoid stacking carelessly** to prevent breaking or cracking.

4. Provide **wooden base or pallet** under the stack to avoid direct contact with the floor.

5. Use **covers such as tarp or protective plastic** to protect Luminous Stone sheets from dust/dirt, but ensure there is air circulation to prevent trapped moisture.
    `,
    image: article2,
    date: "2024-12-10",
    tags: ["Penanganan", "Penyimpanan", "Panduan"],
    tagsEn: ["Handling", "Storage", "Guide"],
    readTime: "6 menit",
    readTimeEn: "6 min",
  },
  {
    id: "3",
    slug: "panduan-pemasangan-luminous-stone",
    title: "Panduan Pemasangan Luminous Stone",
    titleEn: "Luminous Stone Installation Guide",
    excerpt: "Langkah demi langkah proses pemasangan Luminous Stone baik untuk dinding biasa maupun dengan backlit.",
    excerptEn: "Step by step Luminous Stone installation process for both regular walls and backlit applications.",
    content: `
## Alat dan Bahan yang Dibutuhkan

- Luminous Stone sesuai ukuran & motif yang diinginkan
- Alat potong ceramic atau circular bar tajam
- Meteran & pensil (untuk ukur area pemasangan)
- Perekat khusus batu ringan atau lem epoxy resin bening
- Sealant silikon (untuk menutup celah tepi/pinggir jika diperlukan)
- Leveling atau waterpass untuk memastikan pemasangan lurus/rata
- Alat-alat tambahan seperti amplas, busa/kain lap

## Persiapan Area Pemasangan

1. Bersihkan area pemasangan dari debu, kotoran, atau sisa bahan. Jika ada retakan atau lubang, tambal terlebih dahulu.
2. Pastikan permukaan pemasangan rata dan tidak bergelombang.
3. Ukur dengan meteran area pemasangan dan buat tanda panduan.
4. Untuk pemasangan dengan backlit, tentukan area dan buat rangka (hollow aluminium atau kayu) dengan jarak ± 4-8 cm dari dinding.

## Pemasangan dengan Backlit

1. Siapkan box/rumah lampu sesuai ukuran sebagai jarak antara dinding dan Luminous Stone.
2. Pasang Lampu LED strip/panel LED (warm white/white/cool white sesuai konsep) dan install jaringan listrik kabel & adaptor/trafo lampu.
3. Siapkan based acrylic 3-10 mm (opsi clear/susu) untuk menyebarkan cahaya lampu rata di balik batu.
4. Based rumah lampu gunakan HPL putih glossy untuk pantulan lampu.

## Langkah Pemasangan Dinding Biasa

1. Potong Luminous Stone sesuai ukuran, pastikan hasil potongan rapi terutama pada bagian tepi.
2. Oleskan lem khusus (epoxy resin clear) di dinding dan bagian belakang Luminous Stone.
3. Tempelkan dari bawah ke atas, tekan perlahan agar menempel rata.
4. Pastikan sambungan antar panel rapi dan rapat. Gunakan sealant silikon transparan untuk menutup celah.

## Langkah Pemasangan dengan Backlit

1. Pasang LED strip atau panel LED di dalam rangka box. Tambahkan akrilik diffuser untuk cahaya merata.
2. Potong lembaran Luminous Stone sesuai ukuran.
3. Sekrup acrylic ke rangka box lampu terlebih dahulu.
4. Oleskan lem epoxy resin clear/transparan di bagian belakang luminous stone dengan based acrylic.
5. Tempelkan Luminous Stone ke based acrylic, mulai dari bawah ke atas.
6. Tutup celah pinggir dengan sealant silikon transparan.
7. Nyalakan lampu untuk uji coba pencahayaan.

## Finishing

1. Bersihkan sisa lem sebelum mengering sepenuhnya.
2. Biarkan lem mengering.
3. Pastikan tidak ada gelembung, celah, atau panel tidak rata.
4. Gunakan sealant pada bagian pinggir atau sudut untuk mencegah masuknya debu dan air.
    `,
    contentEn: `
## Tools and Materials Needed

- Luminous Stone according to desired size & pattern
- Ceramic cutting tool or sharp circular bar
- Measuring tape & pencil (for measuring installation area)
- Special lightweight stone adhesive or clear epoxy resin glue
- Silicone sealant (for closing edge gaps if needed)
- Level or waterpass to ensure straight/flat installation
- Additional tools such as sandpaper, sponge/cloth for cleaning

## Installation Area Preparation

1. Clean the installation area from dust, dirt, or residual materials. Fill any cracks or holes first.
2. Ensure the installation surface is flat and not wavy.
3. Measure the installation area with measuring tape and make guide marks.
4. For backlit installation, determine the area and create a frame (aluminum hollow or wood) with a distance of ± 4-8 cm from the wall.

## Backlit Installation

1. Prepare the light box according to size as distance between wall and Luminous Stone.
2. Install LED strip/panel LED (warm white/white/cool white according to concept) and install electrical wiring & adapter/transformer.
3. Prepare 3-10 mm acrylic base (clear/milky option) to spread light evenly behind the stone.
4. Use glossy white HPL for the light box base for lamp reflection.

## Regular Wall Installation Steps

1. Cut Luminous Stone to size, ensure clean cuts especially on edges.
2. Apply special glue (clear epoxy resin) on wall and back of Luminous Stone.
3. Apply from bottom to top, press slowly to stick evenly.
4. Ensure connections between panels are neat and tight. Use transparent silicone sealant to close gaps.

## Backlit Installation Steps

1. Install LED strip or LED panel inside the frame box. Add acrylic diffuser for even light.
2. Cut Luminous Stone sheets to size.
3. Screw acrylic to the lamp frame box first.
4. Apply clear/transparent epoxy resin glue on the back of luminous stone with acrylic base.
5. Attach Luminous Stone to acrylic base, starting from bottom to top.
6. Close edge gaps with transparent silicone sealant.
7. Turn on lights for lighting test.

## Finishing

1. Clean remaining glue before it dries completely.
2. Let the glue dry.
3. Ensure there are no bubbles, gaps, or uneven panels.
4. Use sealant on edges or corners to prevent dust and water entry.
    `,
    image: article3,
    date: "2024-12-05",
    tags: ["Pemasangan", "Backlit", "Panduan"],
    tagsEn: ["Installation", "Backlit", "Guide"],
    readTime: "8 menit",
    readTimeEn: "8 min",
  },
  {
    id: "4",
    slug: "penggunaan-dan-pemeliharaan-luminous-stone",
    title: "Penggunaan dan Pemeliharaan Luminous Stone",
    titleEn: "Usage and Maintenance of Luminous Stone",
    excerpt: "Berbagai aplikasi penggunaan Luminous Stone dan cara merawatnya agar tetap awet dan indah.",
    excerptEn: "Various applications of Luminous Stone and how to maintain it to stay durable and beautiful.",
    content: `
## Penggunaan Produk

### Panel Dinding (Interior & Eksterior)
Luminous Stone bisa diaplikasikan pada plafond & dinding interior maupun eksterior. Cocok untuk rumah, kantor, hotel, restoran, hingga gedung komersial. Memberikan kesan alami seperti batu asli dengan pemasangan yang lebih ringan dan praktis.

### Kebutuhan Dekorasi
Ideal untuk berbagai ide dekorasi seperti backdrop, aksen dinding, partisi, ceiling atau elemen interior & eksterior lainnya. Hadir dengan tampilan alami namun tetap modern sehingga mempercantik suasana ruang.

### Fasad & Bangunan Umum
Karena tahan cuaca, produk ini cocok digunakan pada fasad bangunan, area publik, maupun dinding luar ruangan. Memberikan tampilan elegan, alami, sekaligus tahan lama.

### Meja Resepsionis, Barcounter, & Shopfront
Luminous Stone dapat diaplikasikan pada meja resepsionis, meja bar, atau etalase toko. Memberikan kesan menarik, elegan dan lebih memikat perhatian pengunjung.

## Pemeliharaan Produk

1. **Bersihkan secara rutin** dengan kain lembut atau gunakan busa halus untuk menghilangkan debu dan kotoran.

2. Jika ada noda, gunakan **sabun cair/netral yang dicampur air**. Hindari penggunaan alat atau bahan pembersih yang keras, seperti sikat kawat atau cairan pembersih berbasis asam kuat, karena bisa merusak permukaan & membekas.

3. **Jauhkan dari sumber api/panas langsung** seperti panas gas/titik atau sumbu api yang dapat mempengaruhi tampilan permukaan.

4. **Hindari menggunakan benda tajam atau abrasif** (kasar) yang bisa meninggalkan goresan.

5. **Periksa bagian sambungan atau perekat secara berkala** untuk memastikan tetap kuat menempel.

Material ini praktis, cukup dibersihkan secara berkala untuk menjaga tampilan tetap alami dan elegan.
    `,
    contentEn: `
## Product Usage

### Wall Panels (Interior & Exterior)
Luminous Stone can be applied to ceiling & walls for both interior and exterior. Suitable for homes, offices, hotels, restaurants, to commercial buildings. Provides a natural impression like real stone with lighter and more practical installation.

### Decoration Needs
Ideal for various decoration ideas such as backdrops, wall accents, partitions, ceiling or other interior & exterior elements. Comes with a natural yet modern appearance that beautifies the room atmosphere.

### Facade & Public Buildings
Because it's weather resistant, this product is suitable for building facades, public areas, and outdoor walls. Provides an elegant, natural, and durable appearance.

### Reception Desk, Bar Counter, & Shopfront
Luminous Stone can be applied to reception desks, bar tables, or store displays. Provides an attractive, elegant impression and captures more visitor attention.

## Product Maintenance

1. **Clean regularly** with a soft cloth or use a fine sponge to remove dust and dirt.

2. If there are stains, use **liquid soap/neutral mixed with water**. Avoid using harsh cleaning tools or materials, such as wire brushes or strong acid-based cleaning liquids, as they can damage the surface & leave marks.

3. **Keep away from direct fire/heat sources** such as gas heat/points or fire wicks that can affect the surface appearance.

4. **Avoid using sharp or abrasive objects** that could leave scratches.

5. **Check connections or adhesive periodically** to ensure they remain firmly attached.

This material is practical, just clean it periodically to maintain a natural and elegant appearance.
    `,
    image: article1,
    date: "2024-12-01",
    tags: ["Penggunaan", "Pemeliharaan", "Tips"],
    tagsEn: ["Usage", "Maintenance", "Tips"],
    readTime: "5 menit",
    readTimeEn: "5 min",
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
