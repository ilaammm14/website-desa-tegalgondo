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
      "Kegiatan pertanian merupakan salah satu mata pencaharian masyarakat Desa Tegalgondo. Sektor pertanian dan hidroponik menjadi bagian dari kehidupan ekonomi warga desa.",
    tags: ["Pertanian", "Hidroponik", "Lahan"],
    image: "/images/1.%20pertanian/hidroponik.jpeg",
  },
  {
    id: "balai-desa",
    icon: "Landmark",
    title: "Balai Desa Tegalgondo",
    description:
      "Pusat pelayanan administratif dan kegiatan kemasyarakatan Pemerintah Desa Tegalgondo yang siap melayani kebutuhan warga.",
    tags: ["Balai Desa", "Pelayanan Publik"],
    image: "/images/balai%20desa/balai%20desa%20tegalgondo.jpeg",
  },
  {
    id: "industri-perdagangan",
    icon: "Store",
    title: "Industri & UMKM",
    description:
      "Aktivitas industri lokal dan Usaha Mikro Kecil Menengah (UMKM) berkembang di Desa Tegalgondo, mendukung perekonomian dan kemandirian masyarakat.",
    tags: ["Industri", "UMKM", "Perdagangan"],
    image: "/images/2.%20industri%20umkm/omahsehat%20jamu.jpeg",
  },
  {
    id: "sumber-daya-manusia",
    icon: "Users",
    title: "Sumber Daya Manusia (SDM)",
    description:
      "Desa Tegalgondo memiliki SDM yang aktif dengan kegiatan pemberdayaan masyarakat, PKK, pelatihan digitalisasi, dan edukasi kesehatan.",
    tags: ["SDM", "PKK", "Pemberdayaan"],
    image: "/images/3.%20sdm/musyawarah%20desa.jpeg",
  },
  {
    id: "lingkungan",
    icon: "Leaf",
    title: "Lingkungan & Bank Sampah",
    description:
      "Kepedulian lingkungan di Desa Tegalgondo diwujudkan melalui penguatan Bank Sampah dan kegiatan kebersihan bersama warga.",
    tags: ["Lingkungan", "Bank Sampah", "Ecodesa"],
    image: "/images/4.%20lingkungan%20%26%20bank%20sampah/bank%20sampah%20tegalgondo.jpeg",
  },
  {
    id: "sosial-budaya",
    icon: "Music2",
    title: "Sosial & Kemasyarakatan",
    description:
      "Kehidupan sosial yang harmonis ditunjukkan dengan tradisi gotong royong, keagamaan, dan kegiatan silaturahmi antarwarga.",
    tags: ["Sosial", "Kemasyarakatan", "Gotong Royong"],
    image: "/images/5.%20sosial%20kemasyarakatan/selametan%20dusun%20ketangi.jpeg",
  },
];
