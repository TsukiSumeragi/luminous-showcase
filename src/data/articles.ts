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
  {
    id: "5",
    slug: "luminous-stone-untuk-ruang-tamu",
    title: "Luminous Stone untuk Ruang Tamu: Inspirasi Desain Mewah",
    titleEn: "Luminous Stone for Living Room: Luxury Design Inspiration",
    excerpt: "Transformasi ruang tamu Anda menjadi ruangan yang elegan dengan panel Luminous Stone sebagai focal point.",
    excerptEn: "Transform your living room into an elegant space with Luminous Stone panels as a focal point.",
    content: `
## Mengapa Luminous Stone Cocok untuk Ruang Tamu?

Ruang tamu adalah pusat aktivitas keluarga dan tempat menerima tamu. Dengan Luminous Stone, Anda dapat menciptakan kesan pertama yang memukau dan suasana hangat yang menyambut.

### Ide Aplikasi

**1. Backdrop TV**
Pasang Luminous Stone sebagai backdrop di belakang TV untuk menciptakan focal point yang dramatis. Saat lampu backlit dinyalakan, panel batu akan memancarkan cahaya lembut yang menambah dimensi ruangan.

**2. Feature Wall**
Jadikan satu sisi dinding sebagai feature wall dengan Luminous Stone. Kombinasikan dengan pencahayaan LED untuk efek yang lebih menakjubkan.

**3. Partisi Ruangan**
Gunakan panel Luminous Stone sebagai partisi transparan antara ruang tamu dan ruang makan, menciptakan pemisahan ruang yang artistik.

### Tips Penataan

- Pilih tone warna yang sesuai dengan tema interior Anda
- Gunakan LED warm white untuk suasana hangat dan cozy
- Kombinasikan dengan furniture minimalis untuk keseimbangan visual
- Tambahkan dimmer untuk kontrol intensitas cahaya
    `,
    contentEn: `
## Why is Luminous Stone Perfect for Living Rooms?

The living room is the center of family activities and a place to receive guests. With Luminous Stone, you can create a stunning first impression and a warm welcoming atmosphere.

### Application Ideas

**1. TV Backdrop**
Install Luminous Stone as a backdrop behind your TV to create a dramatic focal point. When the backlight is turned on, the stone panel will emit a soft glow that adds dimension to the room.

**2. Feature Wall**
Make one side of the wall a feature wall with Luminous Stone. Combine with LED lighting for an even more stunning effect.

**3. Room Partition**
Use Luminous Stone panels as a transparent partition between living and dining rooms, creating an artistic spatial separation.

### Arrangement Tips

- Choose color tones that match your interior theme
- Use warm white LED for a warm and cozy atmosphere
- Combine with minimalist furniture for visual balance
- Add a dimmer for light intensity control
    `,
    image: article2,
    date: "2024-11-28",
    tags: ["Ruang Tamu", "Desain", "Interior"],
    tagsEn: ["Living Room", "Design", "Interior"],
    readTime: "4 menit",
    readTimeEn: "4 min",
  },
  {
    id: "6",
    slug: "luminous-stone-untuk-kamar-mandi",
    title: "Luminous Stone untuk Kamar Mandi: Spa Experience di Rumah",
    titleEn: "Luminous Stone for Bathroom: Spa Experience at Home",
    excerpt: "Hadirkan nuansa spa mewah di kamar mandi Anda dengan panel Luminous Stone yang tahan kelembapan.",
    excerptEn: "Bring a luxurious spa vibe to your bathroom with moisture-resistant Luminous Stone panels.",
    content: `
## Kamar Mandi dengan Sentuhan Mewah

Kamar mandi bukan lagi sekadar ruang fungsional. Dengan Luminous Stone, Anda dapat mengubahnya menjadi oasis relaksasi pribadi layaknya spa hotel bintang lima.

### Keunggulan untuk Kamar Mandi

**Tahan Kelembapan**
Luminous Stone tidak mudah menyerap air sehingga aman digunakan di area basah seperti kamar mandi.

**Mudah Dibersihkan**
Permukaan yang halus memudahkan pembersihan dari noda sabun dan air.

**Tampilan Elegan**
Efek backlit menciptakan suasana tenang dan mewah yang sempurna untuk relaksasi.

### Aplikasi di Kamar Mandi

- **Dinding Shower** - Panel luminous di belakang shower area
- **Bathtub Surround** - Mengelilingi bathtub dengan cahaya lembut
- **Vanity Backdrop** - Di belakang cermin wastafel
- **Ceiling Panel** - Plafon dengan efek langit bercahaya
    `,
    contentEn: `
## Bathroom with a Luxurious Touch

Bathrooms are no longer just functional spaces. With Luminous Stone, you can transform it into a personal relaxation oasis like a five-star hotel spa.

### Advantages for Bathrooms

**Moisture Resistant**
Luminous Stone does not easily absorb water, making it safe for wet areas like bathrooms.

**Easy to Clean**
The smooth surface makes it easy to clean soap and water stains.

**Elegant Appearance**
The backlit effect creates a calm and luxurious atmosphere perfect for relaxation.

### Bathroom Applications

- **Shower Wall** - Luminous panels behind the shower area
- **Bathtub Surround** - Surrounding the bathtub with soft light
- **Vanity Backdrop** - Behind the sink mirror
- **Ceiling Panel** - Ceiling with glowing sky effect
    `,
    image: article3,
    date: "2024-11-25",
    tags: ["Kamar Mandi", "Spa", "Interior"],
    tagsEn: ["Bathroom", "Spa", "Interior"],
    readTime: "4 menit",
    readTimeEn: "4 min",
  },
  {
    id: "7",
    slug: "luminous-stone-untuk-hotel-dan-restoran",
    title: "Luminous Stone untuk Hotel dan Restoran: Menciptakan Kesan Premium",
    titleEn: "Luminous Stone for Hotels and Restaurants: Creating a Premium Impression",
    excerpt: "Tingkatkan nilai estetika properti komersial Anda dengan material Luminous Stone yang memukau.",
    excerptEn: "Enhance the aesthetic value of your commercial property with stunning Luminous Stone material.",
    content: `
## Luminous Stone di Dunia Hospitality

Industri hotel dan restoran berlomba-lomba menciptakan pengalaman visual yang tak terlupakan. Luminous Stone menjadi pilihan favorit desainer interior untuk proyek-proyek high-end.

### Aplikasi di Hotel

**Lobby & Resepsionis**
Meja resepsionis dengan panel backlit menjadi focal point yang mengesankan saat tamu pertama kali masuk.

**Koridor & Lift**
Dinding koridor dan interior lift dengan Luminous Stone menciptakan perjalanan yang elegan.

**Kamar Tamu**
Headboard dan dinding aksen di kamar premium memberikan pengalaman menginap yang berbeda.

### Aplikasi di Restoran

**Bar Counter**
Bar counter dengan efek backlit menjadi pusat perhatian dan meningkatkan suasana premium.

**Private Dining**
Ruang VIP dengan panel luminous untuk pengalaman makan yang eksklusif.

**Fasad Eksterior**
Dinding luar restoran yang eye-catching menarik perhatian pengunjung.

### ROI untuk Bisnis

- Meningkatkan perceived value properti
- Diferensiasi dari kompetitor
- Pengalaman visual yang instagrammable
- Daya tahan tinggi mengurangi biaya renovasi
    `,
    contentEn: `
## Luminous Stone in the Hospitality World

The hotel and restaurant industry competes to create unforgettable visual experiences. Luminous Stone has become a favorite choice of interior designers for high-end projects.

### Hotel Applications

**Lobby & Reception**
A reception desk with backlit panels becomes an impressive focal point when guests first enter.

**Corridors & Elevators**
Corridor walls and elevator interiors with Luminous Stone create an elegant journey.

**Guest Rooms**
Headboards and accent walls in premium rooms provide a different staying experience.

### Restaurant Applications

**Bar Counter**
A backlit bar counter becomes the center of attention and enhances the premium atmosphere.

**Private Dining**
VIP rooms with luminous panels for an exclusive dining experience.

**Exterior Facade**
Eye-catching exterior restaurant walls attract visitors' attention.

### ROI for Business

- Increases perceived property value
- Differentiation from competitors
- Instagrammable visual experience
- High durability reduces renovation costs
    `,
    image: article1,
    date: "2024-11-20",
    tags: ["Hotel", "Restoran", "Komersial"],
    tagsEn: ["Hotel", "Restaurant", "Commercial"],
    readTime: "5 menit",
    readTimeEn: "5 min",
  },
  {
    id: "8",
    slug: "perbandingan-luminous-stone-vs-onyx",
    title: "Perbandingan Luminous Stone vs Onyx Alami: Mana yang Lebih Baik?",
    titleEn: "Luminous Stone vs Natural Onyx Comparison: Which is Better?",
    excerpt: "Analisis mendalam tentang perbedaan Luminous Stone dengan batu onyx alami dari segi harga, instalasi, dan performa.",
    excerptEn: "In-depth analysis of the differences between Luminous Stone and natural onyx in terms of price, installation, and performance.",
    content: `
## Onyx Alami vs Luminous Stone

Banyak yang bertanya, apa bedanya Luminous Stone dengan onyx alami? Berikut perbandingan lengkapnya:

### Berat & Ketebalan

| Aspek | Onyx Alami | Luminous Stone |
|-------|------------|----------------|
| Ketebalan | 15-20 mm | 2-3 mm |
| Berat | 40-50 kg/m² | 6-8 kg/sheet |

### Instalasi

**Onyx Alami:**
- Membutuhkan struktur penopang khusus
- Proses instalasi lebih lama
- Risiko retak saat pengangkutan tinggi

**Luminous Stone:**
- Dapat dipasang pada dinding biasa
- Instalasi cepat dan praktis
- Fleksibel dan tidak mudah retak

### Harga

Luminous Stone menawarkan tampilan serupa dengan harga yang jauh lebih terjangkau dibanding onyx alami.

### Perawatan

Luminous Stone lebih mudah dirawat karena permukaannya yang dilapisi resin berkualitas tinggi.

### Kesimpulan

Luminous Stone adalah pilihan cerdas bagi yang menginginkan keindahan onyx tanpa kompleksitas dan biaya tinggi dari material alami.
    `,
    contentEn: `
## Natural Onyx vs Luminous Stone

Many ask, what's the difference between Luminous Stone and natural onyx? Here's a complete comparison:

### Weight & Thickness

| Aspect | Natural Onyx | Luminous Stone |
|--------|--------------|----------------|
| Thickness | 15-20 mm | 2-3 mm |
| Weight | 40-50 kg/m² | 6-8 kg/sheet |

### Installation

**Natural Onyx:**
- Requires special support structure
- Longer installation process
- High risk of cracking during transport

**Luminous Stone:**
- Can be installed on regular walls
- Quick and practical installation
- Flexible and not easily cracked

### Price

Luminous Stone offers a similar appearance at a much more affordable price compared to natural onyx.

### Maintenance

Luminous Stone is easier to maintain due to its high-quality resin-coated surface.

### Conclusion

Luminous Stone is a smart choice for those who want the beauty of onyx without the complexity and high cost of natural materials.
    `,
    image: article2,
    date: "2024-11-15",
    tags: ["Perbandingan", "Onyx", "Material"],
    tagsEn: ["Comparison", "Onyx", "Material"],
    readTime: "6 menit",
    readTimeEn: "6 min",
  },
  {
    id: "9",
    slug: "ide-pencahayaan-untuk-luminous-stone",
    title: "Ide Pencahayaan untuk Luminous Stone: Memaksimalkan Efek Backlit",
    titleEn: "Lighting Ideas for Luminous Stone: Maximizing the Backlit Effect",
    excerpt: "Panduan memilih dan mengatur pencahayaan LED untuk hasil backlit Luminous Stone yang optimal.",
    excerptEn: "Guide to choosing and setting up LED lighting for optimal Luminous Stone backlit results.",
    content: `
## Pentingnya Pencahayaan yang Tepat

Luminous Stone mencapai keindahan maksimalnya saat diberi pencahayaan dari belakang. Berikut tips memilih sistem pencahayaan yang tepat:

### Jenis LED yang Direkomendasikan

**LED Strip**
- Fleksibel untuk area dengan kontur
- Tersedia berbagai warna temperatur
- Mudah dipotong sesuai ukuran

**LED Panel**
- Pencahayaan lebih merata
- Cocok untuk area luas
- Umur pakai lebih lama

### Temperatur Warna

- **Warm White (2700-3000K):** Suasana hangat, cocok untuk residential
- **Natural White (4000K):** Keseimbangan, cocok untuk showroom
- **Cool White (6000K):** Kesan modern, cocok untuk komersial

### Tips Instalasi Lighting

1. Gunakan diffuser akrilik untuk cahaya merata
2. Jaga jarak 4-8 cm antara LED dan panel stone
3. Pasang dimmer untuk kontrol intensitas
4. Gunakan HPL putih glossy sebagai reflektor
    `,
    contentEn: `
## The Importance of Proper Lighting

Luminous Stone achieves its maximum beauty when backlit. Here are tips for choosing the right lighting system:

### Recommended LED Types

**LED Strip**
- Flexible for contoured areas
- Available in various color temperatures
- Easy to cut to size

**LED Panel**
- More even lighting
- Suitable for large areas
- Longer lifespan

### Color Temperature

- **Warm White (2700-3000K):** Warm atmosphere, suitable for residential
- **Natural White (4000K):** Balance, suitable for showrooms
- **Cool White (6000K):** Modern impression, suitable for commercial

### Lighting Installation Tips

1. Use acrylic diffuser for even light
2. Maintain 4-8 cm distance between LED and stone panel
3. Install dimmer for intensity control
4. Use glossy white HPL as reflector
    `,
    image: article3,
    date: "2024-11-10",
    tags: ["Pencahayaan", "LED", "Tips"],
    tagsEn: ["Lighting", "LED", "Tips"],
    readTime: "5 menit",
    readTimeEn: "5 min",
  },
  {
    id: "10",
    slug: "luminous-stone-untuk-eksterior",
    title: "Luminous Stone untuk Eksterior: Fasad dan Dinding Luar",
    titleEn: "Luminous Stone for Exterior: Facade and Outdoor Walls",
    excerpt: "Material tahan cuaca yang sempurna untuk aplikasi eksterior dengan tampilan premium.",
    excerptEn: "Weather-resistant material perfect for exterior applications with a premium look.",
    content: `
## Luminous Stone di Luar Ruangan

Salah satu keunggulan Luminous Stone adalah ketahanannya terhadap cuaca, menjadikannya pilihan ideal untuk aplikasi eksterior.

### Keunggulan untuk Eksterior

**Tahan UV**
Warna dan kualitas tidak pudar meski terpapar sinar matahari langsung.

**Tahan Cuaca**
Kuat menghadapi hujan, panas, dan perubahan temperatur.

**Anti-Jamur**
Tidak menyerap kelembapan sehingga mencegah pertumbuhan jamur.

### Aplikasi Eksterior

- **Fasad Bangunan** - Tampilan gedung yang memukau
- **Entrance & Gate** - Gerbang masuk yang impressive
- **Pillar Cladding** - Pelapis pilar eksterior
- **Garden Wall** - Dinding taman dengan backlit
- **Pool Area** - Dinding kolam renang

### Pertimbangan Instalasi

- Gunakan sealant yang sesuai untuk outdoor
- Pastikan drainase air yang baik
- Lindungi sambungan dari infiltrasi air
- Gunakan LED outdoor-rated untuk backlit
    `,
    contentEn: `
## Luminous Stone Outdoors

One of Luminous Stone's advantages is its weather resistance, making it an ideal choice for exterior applications.

### Advantages for Exterior

**UV Resistant**
Color and quality don't fade even under direct sunlight.

**Weather Resistant**
Strong against rain, heat, and temperature changes.

**Anti-Mold**
Doesn't absorb moisture, preventing mold growth.

### Exterior Applications

- **Building Facade** - Stunning building appearance
- **Entrance & Gate** - Impressive entry gates
- **Pillar Cladding** - Exterior pillar covering
- **Garden Wall** - Garden wall with backlit
- **Pool Area** - Swimming pool walls

### Installation Considerations

- Use appropriate outdoor sealant
- Ensure proper water drainage
- Protect joints from water infiltration
- Use outdoor-rated LED for backlit
    `,
    image: article1,
    date: "2024-11-05",
    tags: ["Eksterior", "Fasad", "Outdoor"],
    tagsEn: ["Exterior", "Facade", "Outdoor"],
    readTime: "4 menit",
    readTimeEn: "4 min",
  },
  {
    id: "11",
    slug: "luminous-stone-untuk-ceiling",
    title: "Luminous Stone untuk Ceiling: Langit-Langit yang Memukau",
    titleEn: "Luminous Stone for Ceiling: Stunning Overhead Installations",
    excerpt: "Aplikasi Luminous Stone di plafon untuk menciptakan efek visual yang dramatis dan unik.",
    excerptEn: "Luminous Stone ceiling applications to create dramatic and unique visual effects.",
    content: `
## Plafon dengan Efek Bercahaya

Penggunaan Luminous Stone di ceiling adalah salah satu aplikasi paling spektakuler. Bayangkan langit-langit yang memancarkan cahaya lembut seperti langit berbintang.

### Mengapa Ceiling?

**Ringan**
Dengan berat hanya 6-8 kg per sheet, Luminous Stone aman untuk instalasi ceiling tanpa beban struktural berlebih.

**Efek WOW**
Plafon bercahaya menciptakan pengalaman ruang yang benar-benar berbeda dan memorable.

**Pencahayaan Ambient**
Menggantikan lampu konvensional dengan pencahayaan ambient yang lembut dan merata.

### Aplikasi Ceiling

- **Ruang Tamu** - Living room ceiling feature
- **Lobby Hotel** - Grand entrance ceiling
- **Spa Room** - Relaxing atmosphere ceiling
- **Bedroom** - Romantic ambiance ceiling
- **Restaurant** - Fine dining ceiling

### Tips Instalasi Ceiling

1. Gunakan rangka aluminium yang kuat
2. Pastikan akses untuk maintenance LED
3. Pertimbangkan heat dissipation
4. Gunakan panel akrilik sebagai diffuser
    `,
    contentEn: `
## Ceiling with Glowing Effect

Using Luminous Stone on ceilings is one of the most spectacular applications. Imagine a ceiling that emits soft light like a starry sky.

### Why Ceiling?

**Lightweight**
With only 6-8 kg per sheet, Luminous Stone is safe for ceiling installation without excessive structural load.

**WOW Effect**
A glowing ceiling creates a completely different and memorable spatial experience.

**Ambient Lighting**
Replaces conventional lights with soft and even ambient lighting.

### Ceiling Applications

- **Living Room** - Living room ceiling feature
- **Hotel Lobby** - Grand entrance ceiling
- **Spa Room** - Relaxing atmosphere ceiling
- **Bedroom** - Romantic ambiance ceiling
- **Restaurant** - Fine dining ceiling

### Ceiling Installation Tips

1. Use strong aluminum frame
2. Ensure access for LED maintenance
3. Consider heat dissipation
4. Use acrylic panels as diffuser
    `,
    image: article2,
    date: "2024-10-30",
    tags: ["Ceiling", "Plafon", "Interior"],
    tagsEn: ["Ceiling", "Plafond", "Interior"],
    readTime: "4 menit",
    readTimeEn: "4 min",
  },
  {
    id: "12",
    slug: "kesalahan-umum-instalasi-luminous-stone",
    title: "Kesalahan Umum dalam Instalasi Luminous Stone dan Cara Menghindarinya",
    titleEn: "Common Luminous Stone Installation Mistakes and How to Avoid Them",
    excerpt: "Hindari kesalahan-kesalahan ini agar hasil pemasangan Luminous Stone Anda sempurna.",
    excerptEn: "Avoid these mistakes for perfect Luminous Stone installation results.",
    content: `
## Kesalahan yang Sering Terjadi

Meski instalasi Luminous Stone relatif mudah, ada beberapa kesalahan umum yang harus dihindari:

### 1. Jarak LED Terlalu Dekat

**Masalah:** Muncul hotspot atau titik terang yang tidak merata
**Solusi:** Jaga jarak 4-8 cm antara LED dan panel stone

### 2. Tidak Menggunakan Diffuser

**Masalah:** Cahaya tidak menyebar merata, terlihat garis-garis LED
**Solusi:** Gunakan akrilik diffuser (susu/opal) di antara LED dan stone

### 3. Lem yang Tidak Sesuai

**Masalah:** Panel terlepas atau menguning
**Solusi:** Gunakan epoxy resin clear yang direkomendasikan

### 4. Permukaan Tidak Rata

**Masalah:** Panel tidak menempel sempurna
**Solusi:** Pastikan permukaan pemasangan rata dan bersih

### 5. Tidak Ada Sealant di Tepi

**Masalah:** Debu dan air masuk ke celah
**Solusi:** Aplikasikan silicone sealant transparan di semua tepi

### 6. LED Tidak Berkualitas

**Masalah:** Cahaya tidak merata atau cepat rusak
**Solusi:** Gunakan LED strip/panel berkualitas dengan garansi
    `,
    contentEn: `
## Common Mistakes

Although Luminous Stone installation is relatively easy, there are common mistakes to avoid:

### 1. LED Distance Too Close

**Problem:** Hotspots or uneven bright spots appear
**Solution:** Maintain 4-8 cm distance between LED and stone panel

### 2. Not Using Diffuser

**Problem:** Light doesn't spread evenly, LED lines visible
**Solution:** Use diffuser acrylic (milky/opal) between LED and stone

### 3. Wrong Adhesive

**Problem:** Panels come off or turn yellow
**Solution:** Use recommended clear epoxy resin

### 4. Uneven Surface

**Problem:** Panel doesn't stick perfectly
**Solution:** Ensure mounting surface is flat and clean

### 5. No Edge Sealant

**Problem:** Dust and water enter gaps
**Solution:** Apply transparent silicone sealant on all edges

### 6. Low Quality LED

**Problem:** Uneven light or quick failure
**Solution:** Use quality LED strip/panel with warranty
    `,
    image: article3,
    date: "2024-10-25",
    tags: ["Instalasi", "Tips", "Kesalahan"],
    tagsEn: ["Installation", "Tips", "Mistakes"],
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
