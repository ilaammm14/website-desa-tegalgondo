/**
 * data/gallery.ts
 * ============================================
 * DATA GALERI — DESA TEGALGONDO
 *
 * PENTING:
 * - Jangan gunakan gambar AI-generated sebagai dokumentasi nyata desa
 * - Semua item saat ini adalah placeholder — foto akan diperbarui
 *   setelah dokumentasi foto asli Desa Tegalgondo tersedia
 * - Set isPlaceholder: false setelah foto asli ditambahkan
 *
 * CARA MENAMBAH FOTO:
 * 1. Simpan foto di /public/images/gallery/[nama-file].jpg
 * 2. Update field image: "/images/gallery/[nama-file].jpg"
 * 3. Set isPlaceholder: false
 * ============================================
 */

export type GalleryCategory =
  | "semua"
  | "pertanian"
  | "industri umkm"
  | "sdm"
  | "lingkungan & bank sampah"
  | "sosial kemasyarakatan"
  | "balai desa";

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: Exclude<GalleryCategory, "semua">;
  isPlaceholder: boolean;
}

export const galleryCategories: { value: GalleryCategory; label: string }[] = [
  { value: "semua", label: "Semua" },
  { value: "pertanian", label: "Pertanian" },
  { value: "industri umkm", label: "Industri UMKM" },
  { value: "sdm", label: "SDM" },
  { value: "lingkungan & bank sampah", label: "Lingkungan & Bank Sampah" },
  { value: "sosial kemasyarakatan", label: "Sosial Kemasyarakatan" },
  { value: "balai desa", label: "Balai Desa" },
];

export const galleryItems: GalleryItem[] = [
  // 1. Pertanian
  {
    id: "pertanian-01",
    title: "Hidroponik Desa Tegalgondo",
    image: "/images/1.%20pertanian/hidroponik.jpeg",
    category: "pertanian",
    isPlaceholder: false,
  },

  // 2. Industri UMKM
  {
    id: "umkm-01",
    title: "Omahsehat Jamu",
    image: "/images/2.%20industri%20umkm/omahsehat%20jamu.jpeg",
    category: "industri umkm",
    isPlaceholder: false,
  },

  // 3. SDM
  {
    id: "sdm-01",
    title: "Calistung TPQ Sang Surya",
    image: "/images/3.%20sdm/calistung%20tpq%20sang%20surya.jpeg",
    category: "sdm",
    isPlaceholder: false,
  },
  {
    id: "sdm-02",
    title: "Digitalisasi UMKM Bersama Ibu PKK RW 09",
    image: "/images/3.%20sdm/digitalisasi%20umkm%20bersama%20ibu%20pkk%20rw%2009.jpeg",
    category: "sdm",
    isPlaceholder: false,
  },
  {
    id: "sdm-03",
    title: "Edukasi DAGUSIBU Bersama Ibu PKK RW 09",
    image: "/images/3.%20sdm/edukasi%20dagusibu%20bersama%20ibu%20pkk%20rw%2009.jpeg",
    category: "sdm",
    isPlaceholder: false,
  },
  {
    id: "sdm-04",
    title: "Kajian Rutin SDM",
    image: "/images/3.%20sdm/kajian%20rutin.jpeg",
    category: "sdm",
    isPlaceholder: false,
  },
  {
    id: "sdm-05",
    title: "Memperingati Hari Posyandu Nasional",
    image: "/images/3.%20sdm/memperingati%20hari%20posyandu%20nasional%2029%20april%202026.jpeg",
    category: "sdm",
    isPlaceholder: false,
  },
  {
    id: "sdm-06",
    title: "Menghias Taman Baca dengan Bunga",
    image: "/images/3.%20sdm/menghias%20taman%20baca%20dengan%20bunga.jpeg",
    category: "sdm",
    isPlaceholder: false,
  },
  {
    id: "sdm-07",
    title: "Merayakan HUT RI Bersama Ibu Dawis RT 40",
    image: "/images/3.%20sdm/merayakan%20hut%20ri%20ke%2081%20bersama%20ibu%20dawis%201%20rt%2040%20perum%20ikip%20tegalgondo%20asri.jpeg",
    category: "sdm",
    isPlaceholder: false,
  },
  {
    id: "sdm-08",
    title: "Musyawarah Desa",
    image: "/images/3.%20sdm/musyawarah%20desa.jpeg",
    category: "sdm",
    isPlaceholder: false,
  },
  {
    id: "sdm-09",
    title: "Pelantikan dan Sumpah Jabatan",
    image: "/images/3.%20sdm/pelantikan%20dan%20sumpah%20jabatan.jpeg",
    category: "sdm",
    isPlaceholder: false,
  },
  {
    id: "sdm-10",
    title: "Posyandu Dawuhan",
    image: "/images/3.%20sdm/posyandu%20dawuhan.jpeg",
    category: "sdm",
    isPlaceholder: false,
  },
  {
    id: "sdm-11",
    title: "Posyandu Gondang",
    image: "/images/3.%20sdm/posyandu%20gondang.jpeg",
    category: "sdm",
    isPlaceholder: false,
  },
  {
    id: "sdm-12",
    title: "Posyandu Perum IKIP Tegalgondo Asri",
    image: "/images/3.%20sdm/posyandu%20perum%20ikip%20tegalgondo%20asri.jpeg",
    category: "sdm",
    isPlaceholder: false,
  },
  {
    id: "sdm-13",
    title: "Senam Sehat Warga",
    image: "/images/3.%20sdm/senam.jpeg",
    category: "sdm",
    isPlaceholder: false,
  },
  {
    id: "sdm-14",
    title: "Sosialisasi Penanganan Cidera Olahraga",
    image: "/images/3.%20sdm/sosialisasi%20penanganan%20cidera%20pada%20pemain%20sepakbola.jpeg",
    category: "sdm",
    isPlaceholder: false,
  },

  // 4. Lingkungan & Bank Sampah
  {
    id: "lingkungan-01",
    title: "Bank Sampah Tegalgondo",
    image: "/images/4.%20lingkungan%20%26%20bank%20sampah/bank%20sampah%20tegalgondo.jpeg",
    category: "lingkungan & bank sampah",
    isPlaceholder: false,
  },
  {
    id: "lingkungan-02",
    title: "Ecodesa Pilah Sampah dengan Bijak",
    image: "/images/4.%20lingkungan%20%26%20bank%20sampah/ecodesa%20pilah%20sampah%20dengan%20bijak.jpeg",
    category: "lingkungan & bank sampah",
    isPlaceholder: false,
  },
  {
    id: "lingkungan-03",
    title: "Operasi Semut Kebersihan",
    image: "/images/4.%20lingkungan%20%26%20bank%20sampah/operasi%20semut.jpeg",
    category: "lingkungan & bank sampah",
    isPlaceholder: false,
  },
  {
    id: "lingkungan-04",
    title: "Pembersihan Lingkungan Desa",
    image: "/images/4.%20lingkungan%20%26%20bank%20sampah/pembersihan%20lingkungan.jpeg",
    category: "lingkungan & bank sampah",
    isPlaceholder: false,
  },

  // 5. Sosial Kemasyarakatan
  {
    id: "sosial-01",
    title: "Bantuan Penyaluran Pangan",
    image: "/images/5.%20sosial%20kemasyarakatan/bantuan%20penyaluran%20pangan.jpeg",
    category: "sosial kemasyarakatan",
    isPlaceholder: false,
  },
  {
    id: "sosial-02",
    title: "Kajian Rutin Kemasyarakatan",
    image: "/images/5.%20sosial%20kemasyarakatan/kajian%20rutin.jpeg",
    category: "sosial kemasyarakatan",
    isPlaceholder: false,
  },
  {
    id: "sosial-03",
    title: "Malam Barikan Perum IKIP Tegalgondo Asri",
    image: "/images/5.%20sosial%20kemasyarakatan/malam%20barikan%20perum%20ikip%20tegalgondo%20asri.jpeg",
    category: "sosial kemasyarakatan",
    isPlaceholder: false,
  },
  {
    id: "sosial-04",
    title: "Selametan Dusun Ketangi",
    image: "/images/5.%20sosial%20kemasyarakatan/selametan%20dusun%20ketangi.jpeg",
    category: "sosial kemasyarakatan",
    isPlaceholder: false,
  },
  {
    id: "sosial-05",
    title: "Silaturahmi dan Makan Bersama",
    image: "/images/5.%20sosial%20kemasyarakatan/silaturahmi%20dan%20makan%20bersama.jpeg",
    category: "sosial kemasyarakatan",
    isPlaceholder: false,
  },
  {
    id: "sosial-06",
    title: "Tarawih Bersama Warga",
    image: "/images/5.%20sosial%20kemasyarakatan/tarawih%20bersama.jpeg",
    category: "sosial kemasyarakatan",
    isPlaceholder: false,
  },

  // 6. Balai Desa
  {
    id: "balai-01",
    title: "Balai Desa Tegalgondo",
    image: "/images/balai%20desa/balai%20desa%20tegalgondo.jpeg",
    category: "balai desa",
    isPlaceholder: false,
  },
];
