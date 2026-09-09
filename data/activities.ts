/**
 * data/activities.ts
 * ============================================
 * DATA KEGIATAN DESA TEGALGONDO
 *
 * Kegiatan yang ditampilkan adalah jenis-jenis kegiatan
 * yang umum dilakukan di Desa Tegalgondo berdasarkan informasi
 * yang tersedia dari sumber terdahulu.
 *
 * JANGAN:
 * - Menambahkan tanggal spesifik yang tidak terverifikasi
 * - Mencantumkan jumlah peserta tanpa sumber
 * - Menyatakan kegiatan lama sebagai kegiatan yang "sedang berlangsung 2026"
 *
 * Developer: Perbarui data ini dengan kegiatan aktual dari
 * Pemerintah Desa Tegalgondo saat informasi tersedia.
 * ============================================
 */

export type ActivityCategory =
  | "kemasyarakatan"
  | "kesehatan"
  | "lingkungan"
  | "keagamaan"
  | "kepemudaan"
  | "pemberdayaan";

export const activityCategoryLabels: Record<ActivityCategory, string> = {
  kemasyarakatan: "Kemasyarakatan",
  kesehatan: "Kesehatan",
  lingkungan: "Lingkungan",
  keagamaan: "Keagamaan",
  kepemudaan: "Kepemudaan",
  pemberdayaan: "Pemberdayaan",
};

export const activityCategoryColors: Record<ActivityCategory, string> = {
  kemasyarakatan: "text-forest",
  kesehatan: "text-natural",
  lingkungan: "text-leaf",
  keagamaan: "text-gold",
  kepemudaan: "text-forest",
  pemberdayaan: "text-natural",
};

export interface Activity {
  id: string;
  title: string;
  description: string;
  category: ActivityCategory;
  /** Isi tanggal aktual saat kegiatan terjadi, kosongkan jika belum tersedia */
  date: string;
  /** Lokasi kegiatan */
  location: string;
  /** Penyelenggara kegiatan */
  organizer: string;
  /** Path ke foto kegiatan — isi setelah foto tersedia di /public/images/activities/ */
  image: string;
  /** true = placeholder, belum ada data aktual */
  isPlaceholder: boolean;
}

// ============================================================
// KEGIATAN MASYARAKAT DESA TEGALGONDO
// Berdasarkan jenis kegiatan yang tersedia dari informasi terdahulu
// Tanggal dan detail kegiatan akan diperbarui oleh developer
// ============================================================
export const activities: Activity[] = [
  {
    id: "act-kerja-bakti",
    title: "Kerja Bakti Desa",
    description:
      "Kegiatan kerja bakti merupakan salah satu bentuk gotong royong masyarakat Desa Tegalgondo dalam menjaga kebersihan dan keindahan lingkungan desa.",
    category: "kemasyarakatan",
    date: "Jadwal menyusul",
    location: "Desa Tegalgondo",
    organizer: "Pemerintah Desa Tegalgondo",
    image: "/images/activities/kerja-bakti.jpg",
    isPlaceholder: false,
  },
  {
    id: "act-posyandu",
    title: "Posyandu Balita & Lansia",
    description:
      "Posyandu merupakan kegiatan kesehatan rutin yang diselenggarakan untuk melayani kesehatan balita dan warga lansia di Desa Tegalgondo.",
    category: "kesehatan",
    date: "Jadwal menyusul",
    location: "Desa Tegalgondo",
    organizer: "PKK Desa Tegalgondo",
    image: "/images/activities/posyandu.jpg",
    isPlaceholder: false,
  },
  {
    id: "act-bank-sampah",
    title: "Bank Sampah",
    description:
      "Bank sampah merupakan kegiatan pengelolaan lingkungan berbasis masyarakat di Desa Tegalgondo. Kegiatan ini mencerminkan kepedulian warga terhadap kebersihan dan pengelolaan sampah.",
    category: "lingkungan",
    date: "Jadwal menyusul",
    location: "Desa Tegalgondo",
    organizer: "Pemerintah Desa Tegalgondo",
    image: "/images/activities/bank-sampah.jpg",
    isPlaceholder: false,
  },
  {
    id: "act-pkk",
    title: "Kegiatan PKK",
    description:
      "Pemberdayaan dan Kesejahteraan Keluarga (PKK) aktif menjalankan berbagai program kemasyarakatan di Desa Tegalgondo, termasuk pelatihan, sosialisasi kesehatan, dan kegiatan pemberdayaan perempuan.",
    category: "pemberdayaan",
    date: "Jadwal menyusul",
    location: "Desa Tegalgondo",
    organizer: "PKK Desa Tegalgondo",
    image: "/images/activities/pkk.jpg",
    isPlaceholder: false,
  },
  {
    id: "act-keagamaan",
    title: "Kegiatan Keagamaan",
    description:
      "Kegiatan keagamaan secara rutin dilaksanakan oleh warga Desa Tegalgondo. Nilai-nilai religius menjadi bagian dari kehidupan sosial dan budaya masyarakat desa.",
    category: "keagamaan",
    date: "Jadwal menyusul",
    location: "Desa Tegalgondo",
    organizer: "Masyarakat Desa Tegalgondo",
    image: "/images/activities/keagamaan.jpg",
    isPlaceholder: false,
  },
  {
    id: "act-karang-taruna",
    title: "Kegiatan Karang Taruna",
    description:
      "Karang Taruna Desa Tegalgondo aktif menjalankan kegiatan kepemudaan, sosial, dan pemberdayaan generasi muda demi kemajuan desa.",
    category: "kepemudaan",
    date: "Jadwal menyusul",
    location: "Desa Tegalgondo",
    organizer: "Karang Taruna Desa Tegalgondo",
    image: "/images/activities/karang-taruna.jpg",
    isPlaceholder: false,
  },
];
