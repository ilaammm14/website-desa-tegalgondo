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
  | "desa"
  | "masyarakat"
  | "pertanian"
  | "kegiatan"
  | "budaya"
  | "lingkungan";

export interface GalleryItem {
  id: string;
  title: string;
  /** Path ke foto asli — isi setelah foto tersedia */
  image: string;
  category: Exclude<GalleryCategory, "semua">;
  /** true = foto belum tersedia, tampilkan placeholder gradient */
  isPlaceholder: boolean;
}

export const galleryCategories: { value: GalleryCategory; label: string }[] = [
  { value: "semua", label: "Semua" },
  { value: "desa", label: "Desa" },
  { value: "masyarakat", label: "Masyarakat" },
  { value: "pertanian", label: "Pertanian" },
  { value: "kegiatan", label: "Kegiatan" },
  { value: "budaya", label: "Budaya" },
  { value: "lingkungan", label: "Lingkungan" },
];

// ============================================================
// GALERI DESA TEGALGONDO
// Semua item di bawah adalah PLACEHOLDER — foto asli belum tersedia.
// Tidak ada gambar AI yang digunakan sebagai dokumentasi nyata.
// Developer: Ganti dengan foto dokumentasi asli Desa Tegalgondo.
// ============================================================
export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-01",
    title: "Dokumentasi Desa Tegalgondo",
    image: "/images/gallery/desa-01.jpg",
    category: "desa",
    isPlaceholder: false,
  },
  {
    id: "gallery-02",
    title: "Dokumentasi Desa Tegalgondo",
    image: "/images/gallery/desa-02.jpg",
    category: "desa",
    isPlaceholder: false,
  },
  {
    id: "gallery-03",
    title: "Dokumentasi Desa Tegalgondo",
    image: "/images/gallery/desa-03.jpg",
    category: "desa",
    isPlaceholder: false,
  },
  {
    id: "gallery-04",
    title: "Kegiatan Masyarakat",
    image: "/images/gallery/masyarakat-01.jpg",
    category: "masyarakat",
    isPlaceholder: false,
  },
  {
    id: "gallery-05",
    title: "Kegiatan Masyarakat",
    image: "/images/gallery/masyarakat-02.jpg",
    category: "masyarakat",
    isPlaceholder: false,
  },
  {
    id: "gallery-06",
    title: "Kegiatan Pertanian",
    image: "/images/gallery/pertanian-01.jpg",
    category: "pertanian",
    isPlaceholder: false,
  },
  {
    id: "gallery-07",
    title: "Kegiatan Pertanian",
    image: "/images/gallery/pertanian-02.jpg",
    category: "pertanian",
    isPlaceholder: false,
  },
  {
    id: "gallery-08",
    title: "Kegiatan Desa",
    image: "/images/gallery/kegiatan-01.jpg",
    category: "kegiatan",
    isPlaceholder: false,
  },
  {
    id: "gallery-09",
    title: "Kegiatan Desa",
    image: "/images/gallery/kegiatan-01.jpg",
    category: "kegiatan",
    isPlaceholder: false,
  },
  {
    id: "gallery-10",
    title: "Budaya Desa",
    image: "/images/gallery/budaya-01.jpg",
    category: "budaya",
    isPlaceholder: false,
  },
  {
    id: "gallery-11",
    title: "Lingkungan Desa",
    image: "/images/gallery/lingkungan-01.jpg",
    category: "lingkungan",
    isPlaceholder: false,
  },
  {
    id: "gallery-12",
    title: "Lingkungan Desa",
    image: "/images/gallery/lingkungan-02.jpg",
    category: "lingkungan",
    isPlaceholder: false,
  },
];
