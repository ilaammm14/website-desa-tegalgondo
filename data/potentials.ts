/**
 * data/potentials.ts
 * ============================================
 * DATA POTENSI DESA TEGALGONDO
 *
 * Potensi yang ditampilkan berdasarkan konteks yang tersedia dari
 * profil desa dan sumber informasi terdahulu.
 *
 * JANGAN:
 * - Menambahkan angka produksi, omzet, jumlah pelaku usaha tanpa sumber
 * - Membuat klaim spesifik yang tidak memiliki dasar data
 *
 * SETIAP deskripsi potensi harus berdasarkan informasi yang tersedia
 * atau menggunakan kalimat umum yang tidak menyesatkan.
 * ============================================
 */

export interface Potential {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  /** Path ke foto potensi di /public/images/potentials/ */
  image: string;
}

// ============================================================
// POTENSI DESA TEGALGONDO
// Berdasarkan informasi yang tersedia dari sumber terdahulu
// ============================================================
export const potentials: Potential[] = [
  {
    id: "pertanian",
    icon: "Wheat",
    title: "Pertanian",
    description:
      "Kegiatan pertanian merupakan salah satu mata pencaharian masyarakat Desa Tegalgondo berdasarkan data profil terdahulu. Sektor ini menjadi bagian dari kehidupan ekonomi sebagian warga desa.",
    tags: ["Pertanian", "Lahan"],
    image: "/images/potentials/pertanian.jpg",
  },
  {
    id: "peternakan",
    icon: "Leaf",
    title: "Peternakan",
    description:
      "Peternakan menjadi salah satu potensi pendukung ekonomi masyarakat Desa Tegalgondo. Informasi lebih lanjut mengenai jenis dan skala peternakan akan diperbarui setelah data resmi tersedia.",
    tags: ["Peternakan", "Ekonomi Desa"],
    image: "/images/potentials/wilayah.jpg",
  },
  {
    id: "industri-perdagangan",
    icon: "Store",
    title: "Industri & Perdagangan",
    description:
      "Berdasarkan data terdahulu, sebagian besar warga Desa Tegalgondo bekerja di sektor industri. Selain itu, terdapat aktivitas perdagangan dan wirausaha yang menjadi sumber penghidupan masyarakat.",
    tags: ["Industri", "UMKM", "Perdagangan"],
    image: "/images/potentials/umkm.jpg",
  },
  {
    id: "sumber-daya-manusia",
    icon: "Users",
    title: "Sumber Daya Manusia",
    description:
      "Desa Tegalgondo memiliki organisasi kemasyarakatan yang aktif, termasuk PKK dan Karang Taruna. Kegiatan pemberdayaan masyarakat menjadi salah satu pilar pembangunan desa.",
    tags: ["PKK", "Karang Taruna", "Pemberdayaan"],
    image: "/images/potentials/sdm.jpg",
  },
  {
    id: "lingkungan",
    icon: "Leaf",
    title: "Lingkungan & Bank Sampah",
    description:
      "Terdapat kegiatan kepedulian lingkungan di Desa Tegalgondo, termasuk keberadaan bank sampah sebagai bentuk pengelolaan lingkungan berbasis masyarakat. Data lebih lanjut akan diperbarui.",
    tags: ["Lingkungan", "Bank Sampah"],
    image: "/images/potentials/lingkungan.jpg",
  },
  {
    id: "sosial-budaya",
    icon: "Music2",
    title: "Sosial & Kemasyarakatan",
    description:
      "Masyarakat Desa Tegalgondo memiliki kehidupan sosial yang aktif dengan berbagai kegiatan keagamaan, kemasyarakatan, dan kepemudaan. Nilai gotong royong menjadi bagian penting budaya desa.",
    tags: ["Sosial", "Keagamaan", "Kepemudaan"],
    image: "/images/potentials/budaya.jpg",
  },
];
