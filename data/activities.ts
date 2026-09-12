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
    title: "Pembersihan Lingkungan Desa",
    description:
      "Kegiatan pembersihan lingkungan dan kerja bakti rutin merupakan bentuk gotong royong warga Desa Tegalgondo.",
    category: "kemasyarakatan",
    date: "Kegiatan Rutin",
    location: "Desa Tegalgondo",
    organizer: "Pemerintah Desa Tegalgondo",
    image: "/images/4.%20lingkungan%20%26%20bank%20sampah/pembersihan%20lingkungan.jpeg",
    isPlaceholder: false,
  },
  {
    id: "act-posyandu",
    title: "Posyandu Balita & Lansia",
    description:
      "Pelayanan kesehatan rutin untuk menjaga kesehatan balita, ibu, dan lansia di wilayah Desa Tegalgondo.",
    category: "kesehatan",
    date: "Kegiatan Rutin",
    location: "Posyandu Gondang",
    organizer: "PKK Desa Tegalgondo",
    image: "/images/3.%20sdm/posyandu%20gondang.jpeg",
    isPlaceholder: false,
  },
  {
    id: "act-bank-sampah",
    title: "Bank Sampah Tegalgondo",
    description:
      "Pengelolaan lingkungan berbasis masyarakat melalui gerakan memilah sampah dengan bijak.",
    category: "lingkungan",
    date: "Kegiatan Rutin",
    location: "Desa Tegalgondo",
    organizer: "Pengelola Bank Sampah",
    image: "/images/4.%20lingkungan%20%26%20bank%20sampah/bank%20sampah%20tegalgondo.jpeg",
    isPlaceholder: false,
  },
  {
    id: "act-pkk",
    title: "Pemberdayaan PKK RW 09",
    description:
      "Program edukasi kesehatan DAGUSIBU dan pemberdayaan ekonomi perempuan bersama Ibu PKK RW 09.",
    category: "pemberdayaan",
    date: "Kegiatan Rutin",
    location: "RW 09 Tegalgondo",
    organizer: "PKK RW 09",
    image: "/images/3.%20sdm/edukasi%20dagusibu%20bersama%20ibu%20pkk%20rw%2009.jpeg",
    isPlaceholder: false,
  },
  {
    id: "act-keagamaan",
    title: "Tarawih & Kajian Bersama",
    description:
      "Kegiatan keagamaan dan ibadah bersama masyarakat Desa Tegalgondo untuk mempererat silaturahmi.",
    category: "keagamaan",
    date: "Kegiatan Rutin",
    location: "Masjid & Musholla Desa",
    organizer: "Masyarakat Desa Tegalgondo",
    image: "/images/5.%20sosial%20kemasyarakatan/tarawih%20bersama.jpeg",
    isPlaceholder: false,
  },
  {
    id: "act-karang-taruna",
    title: "Sosialisasi & Kegiatan Kepemudaan",
    description:
      "Kegiatan edukasi dan olahraga bagi generasi muda Desa Tegalgondo.",
    category: "kepemudaan",
    date: "Kegiatan Rutin",
    location: "Desa Tegalgondo",
    organizer: "Karang Taruna Tegalgondo",
    image: "/images/3.%20sdm/sosialisasi%20penanganan%20cidera%20pada%20pemain%20sepakbola.jpeg",
    isPlaceholder: false,
  },
];
