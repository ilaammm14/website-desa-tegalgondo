/**
 * data/village.ts
 * ============================================
 * DATA UTAMA DESA TEGALGONDO
 *
 * STATUS DATA:
 * - "verified"   → Data terverifikasi dari sumber resmi
 * - "historical" → Data dari sumber terdahulu/akademik, bukan data terbaru
 * - "pending"    → Data terbaru belum tersedia, menunggu konfirmasi resmi
 *
 * SUMBER DATA YANG DIGUNAKAN:
 * [1] Data Kecamatan Karangploso (untuk RT, RW, luas, dusun)
 * [2] Profil desa/sumber akademik terdahulu (untuk populasi historis, batas, visi/misi, kepala desa)
 *
 * ATURAN PENGISIAN DATA:
 * - Jangan mengarang data baru
 * - Jangan mengubah angka terverifikasi
 * - Tandai semua data historis dengan status: "historical"
 * - Tandai data belum tersedia dengan status: "pending"
 * ============================================
 */

// ============================================================
// TIPE DATA
// ============================================================

/** Status ketersediaan dan keandalan data */
export type DataStatus = "verified" | "historical" | "pending";

export interface VillageContact {
  address: string;
  phone: string;
  email: string;
  instagram: string;
  facebook: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
}

export interface VillageStats {
  label: string;
  value: string;
  unit?: string;
  status: DataStatus;
  note?: string;
}

export interface VillageInfo {
  name: string;
  slug: string;
  district: string;
  regency: string;
  province: string;
  country: string;
  postalCode: string;
  description: string;
  shortDescription: string;
  about: string[];
  contact: VillageContact;
  stats: VillageStats[];
  officeHours: string;
}

// ============================================================
// DATA DESA TEGALGONDO
// ============================================================
export const villageInfo: VillageInfo = {
  name: "Desa Tegalgondo",
  slug: "tegalgondo",
  district: "Karangploso",
  regency: "Malang",
  province: "Jawa Timur",
  country: "Indonesia",

  // TODO: Konfirmasi kode pos resmi kepada Pemerintah Desa Tegalgondo
  postalCode: "65152",

  shortDescription:
    "Desa Tegalgondo, Kecamatan Karangploso, Kabupaten Malang, Jawa Timur.",

  description:
    "Website profil Desa Tegalgondo, Kecamatan Karangploso, Kabupaten Malang, Jawa Timur. Mengenal profil, potensi, masyarakat, kegiatan, dan informasi Desa Tegalgondo.",

  // Deskripsi umum desa — informasi berbasis fakta terverifikasi
  about: [
    "Desa Tegalgondo merupakan salah satu desa yang terletak di Kecamatan Karangploso, Kabupaten Malang, Jawa Timur. Desa ini terdiri dari lima dusun, yaitu Dusun Gondang, Babatan, Wunutsari, Dawuhan, dan Ketangi.",
    "Secara administratif, Desa Tegalgondo memiliki 9 RW dan 43 RT yang tersebar di lima dusun. Dengan luas wilayah sekitar 220,235 hektar, desa ini berada di kawasan Kecamatan Karangploso.",
    "Masyarakat Desa Tegalgondo dikenal dengan semangat gotong royong yang kuat, dengan berbagai organisasi kemasyarakatan yang aktif dalam pembangunan dan pemberdayaan desa.",
  ],

  // ============================================================
  // KONTAK
  // Sumber: Pemerintah Desa Tegalgondo
  // ============================================================
  contact: {
    // Alamat berdasarkan lokasi desa yang terverifikasi
    address: "Desa Tegalgondo, Kecamatan Karangploso, Kabupaten Malang, Jawa Timur",
    phone: "Data belum tersedia",
    email: "tegalgondomaju@gmail.com",
    instagram: "tegalgondomaju",
    facebook: "tegalgondoofficial",
    // Link Google Maps pencarian berdasarkan nama desa
    googleMapsUrl:
      "https://maps.google.com/?q=Desa+Tegalgondo+Karangploso+Malang",
    // Embed Google Maps — pencarian berdasarkan nama desa
    googleMapsEmbed:
      "https://maps.google.com/maps?q=Desa+Tegalgondo+Karangploso+Malang&output=embed",
  },

  // TODO: Konfirmasi jam operasional resmi kepada Pemerintah Desa
  officeHours: "Senin – Jumat: 08.00 – 15.00 WIB",

  // ============================================================
  // STATISTIK UTAMA
  // Sumber [1]: Data Kecamatan Karangploso (RT, RW, Dusun, Luas)
  // ============================================================
  stats: [
    {
      label: "Dusun",
      value: "5",
      status: "verified",
      // Sumber: Data administratif Kecamatan Karangploso
      note: "Gondang, Babatan, Wunutsari, Dawuhan, Ketangi",
    },
    {
      label: "Luas Wilayah",
      value: "±220,235",
      unit: "Ha",
      status: "verified",
      // Sumber: Data Kecamatan Karangploso
      note: "Sumber: Data Kecamatan Karangploso",
    },
    {
      label: "Penduduk",
      value: "—",
      status: "pending",
      note: "Data kependudukan terbaru belum tersedia",
    },
    {
      label: "RT",
      value: "43",
      status: "verified",
      // Sumber: Data administratif Kecamatan Karangploso
      note: "Sumber: Data Kecamatan Karangploso",
    },
    {
      label: "RW",
      value: "9",
      status: "verified",
      // Sumber: Data administratif Kecamatan Karangploso
      note: "Sumber: Data Kecamatan Karangploso",
    },
  ],
};

// ============================================================
// VISI & MISI
// Status: HISTORIS — Bersumber dari profil/kajian akademik terdahulu
// BUKAN visi/misi resmi terbaru. Perlu dikonfirmasi ke Pemerintah Desa.
// ============================================================
export interface VisionMissionData {
  vision: string;
  visionStatus: DataStatus;
  visionNote: string;
  missions: string[];
  missionStatus: DataStatus;
  missionNote: string;
}

export const visionMission: VisionMissionData = {
  // Visi dari sumber akademik/profil terdahulu
  vision:
    "Membawa Desa Tegalgondo menuju desa yang adil, sejahtera dan bermartabat.",
  visionStatus: "historical",
  visionNote:
    "Visi ini bersumber dari profil desa terdahulu. Visi resmi terbaru perlu dikonfirmasi kepada Pemerintah Desa Tegalgondo.",

  // Misi dari sumber akademik/profil terdahulu
  missions: [
    "Meningkatkan kualitas pelayanan dasar yang dibutuhkan masyarakat.",
    "Mendorong pemberdayaan ekonomi melalui PKK dan lembaga kemasyarakatan desa.",
    "Meningkatkan kualitas lingkungan dan kesehatan masyarakat.",
    "Mendorong pengembangan potensi desa, masyarakat, pertanian, peternakan, kerajinan, serta kebudayaan dengan nilai-nilai religius.",
  ],
  missionStatus: "historical",
  missionNote:
    "Misi ini bersumber dari profil desa terdahulu. Misi resmi terbaru perlu dikonfirmasi kepada Pemerintah Desa Tegalgondo.",
};

// ============================================================
// RIWAYAT KEPALA DESA
// Status: HISTORIS — Bersumber dari sumber akademik/profil terdahulu
// Bukan daftar resmi pejabat aktif.
// ============================================================
export interface VillageHead {
  name: string;
  period: string;
  status: DataStatus;
}

export const villageHeadHistory: VillageHead[] = [
  {
    name: "H. Nur Halim",
    period: "1922 – 1969",
    status: "historical",
  },
  {
    name: "Samsul Supeno",
    period: "1971 – 1981",
    status: "historical",
  },
  {
    name: "H. Syakroni",
    period: "1982 – 1990",
    status: "historical",
  },
  {
    name: "Drs. Jamil, SH., MH.",
    period: "1992 – 2011",
    status: "historical",
  },
  {
    name: "H. Usman Junaidi",
    period: "2011 – 2016",
    status: "historical",
  },
  {
    name: "Nur Mahmud",
    period: "2017 – 2022",
    status: "historical",
  },
  {
    // Kepala Desa aktif setelah 2022 belum terverifikasi
    name: "Data belum tersedia",
    period: "2022 – sekarang",
    status: "pending",
  },
];

// ============================================================
// SEJARAH & LATAR BELAKANG
// ============================================================
export interface HistoryItem {
  era: string;
  title: string;
  description: string;
  status: DataStatus;
}

export const villageHistory: HistoryItem[] = [
  {
    era: "Riwayat Pemerintahan",
    title: "Kepemimpinan Desa Tegalgondo",
    description:
      "Berdasarkan sumber terdahulu yang tersedia, Desa Tegalgondo telah dipimpin oleh sejumlah kepala desa sejak tahun 1922. Tercatat H. Nur Halim memimpin selama periode 1922–1969, diikuti oleh beberapa kepala desa berikutnya hingga Nur Mahmud yang menjabat pada periode 2017–2022.",
    status: "historical",
  },
  {
    era: "Potensi Wilayah",
    title: "Pertanian, Industri, dan Lingkungan",
    description:
      "Data profil terdahulu menunjukkan bahwa sebagian masyarakat Desa Tegalgondo bermata pencaharian di sektor pertanian, peternakan, perdagangan, dan industri. Terdapat pula kegiatan kemasyarakatan seperti bank sampah yang mencerminkan kepedulian lingkungan.",
    status: "historical",
  },
  {
    era: "Perkembangan",
    title: "Catatan Sejarah Menunggu Dokumentasi",
    description:
      "Informasi sejarah lengkap Desa Tegalgondo sedang menunggu konfirmasi dan dokumentasi resmi dari Pemerintah Desa. Data yang tersedia saat ini berasal dari sumber sekunder dan akademik terdahulu.",
    status: "pending",
  },
];

// ============================================================
// DATA WILAYAH — INFORMASI TAMBAHAN
// ============================================================

/** Ketinggian wilayah — dari sumber profil terdahulu */
export const altitudeInfo = {
  value: "±421",
  unit: "mdpl",
  status: "historical" as DataStatus,
  note: "Berdasarkan data profil yang tersedia sebelumnya. Bukan data survei terbaru.",
};

/** Batas wilayah — dari sumber terdahulu */
export interface BoundaryInfo {
  north: string;
  east: string;
  south: string;
  west: string;
  status: DataStatus;
  note: string;
}

export const boundaryInfo: BoundaryInfo = {
  north: "Desa Ampeldento",
  east: "Kelurahan Tunggulwulung",
  south: "Kelurahan Tlogomas",
  west: "Desa Pendem",
  status: "historical",
  note: "Batas wilayah berdasarkan sumber terdahulu. Batas administratif terbaru perlu dikonfirmasi kepada Pemerintah Desa Tegalgondo.",
};

// ============================================================
// DATA HISTORIS KEPENDUDUKAN
// Status: HISTORIS — Bukan data terbaru/data 2026
// Sumber: Profil desa terdahulu
// ============================================================
export interface HistoricalPopulation {
  total: string;
  male: string;
  female: string;
  households: string;
  status: DataStatus;
  note: string;
}

export const historicalPopulation: HistoricalPopulation = {
  total: "7.087",
  male: "3.609",
  female: "3.478",
  households: "1.796",
  status: "historical",
  note: "Data kependudukan berdasarkan profil desa terdahulu. Bukan data kependudukan terbaru. Data terkini perlu diperoleh dari Pemerintah Desa Tegalgondo.",
};

// ============================================================
// DATA KATEGORISASI DESA — Untuk komponen VillageData
// ============================================================
export interface DataItem {
  label: string;
  value: string;
  status: DataStatus;
  note?: string;
}

export interface DataCategory {
  id: string;
  label: string;
  icon: string;
  items: DataItem[];
}

export const villageDataCategories: DataCategory[] = [
  {
    id: "wilayah",
    label: "Wilayah",
    icon: "Map",
    items: [
      {
        label: "Luas Wilayah",
        value: "±220,235 Ha",
        status: "verified",
        note: "Sumber: Data Kecamatan Karangploso",
      },
      {
        label: "Jumlah Dusun",
        value: "5 Dusun",
        status: "verified",
        note: "Gondang, Babatan, Wunutsari, Dawuhan, Ketangi",
      },
      {
        label: "Jumlah RT",
        value: "43 RT",
        status: "verified",
        note: "Sumber: Data Kecamatan Karangploso",
      },
      {
        label: "Jumlah RW",
        value: "9 RW",
        status: "verified",
        note: "Sumber: Data Kecamatan Karangploso",
      },
      {
        label: "Ketinggian Wilayah",
        value: "±421 mdpl",
        status: "historical",
        note: "Berdasarkan data profil terdahulu",
      },
      {
        label: "Batas Utara",
        value: "Desa Ampeldento",
        status: "historical",
        note: "Berdasarkan sumber terdahulu — perlu konfirmasi resmi",
      },
      {
        label: "Batas Timur",
        value: "Kelurahan Tunggulwulung",
        status: "historical",
        note: "Berdasarkan sumber terdahulu — perlu konfirmasi resmi",
      },
      {
        label: "Batas Selatan",
        value: "Kelurahan Tlogomas",
        status: "historical",
        note: "Berdasarkan sumber terdahulu — perlu konfirmasi resmi",
      },
      {
        label: "Batas Barat",
        value: "Desa Pendem",
        status: "historical",
        note: "Berdasarkan sumber terdahulu — perlu konfirmasi resmi",
      },
    ],
  },
  {
    id: "demografi",
    label: "Demografi",
    icon: "Users",
    items: [
      {
        label: "Total Penduduk (terkini)",
        value: "Data terbaru belum tersedia",
        status: "pending",
        note: "Konfirmasi data ke Pemerintah Desa Tegalgondo",
      },
      {
        label: "Total Penduduk (historis)",
        value: "7.087 jiwa",
        status: "historical",
        note: "Berdasarkan data profil desa terdahulu — bukan data terkini",
      },
      {
        label: "Laki-laki (historis)",
        value: "3.609 jiwa",
        status: "historical",
        note: "Berdasarkan data profil desa terdahulu",
      },
      {
        label: "Perempuan (historis)",
        value: "3.478 jiwa",
        status: "historical",
        note: "Berdasarkan data profil desa terdahulu",
      },
      {
        label: "Kepala Keluarga (historis)",
        value: "1.796 KK",
        status: "historical",
        note: "Berdasarkan data profil desa terdahulu",
      },
    ],
  },
  {
    id: "pendidikan",
    label: "Pendidikan",
    icon: "GraduationCap",
    items: [
      {
        label: "Jumlah PAUD/TK (historis)",
        value: "6 unit",
        status: "historical",
        note: "Berdasarkan data profil desa terdahulu — perlu verifikasi",
      },
      {
        label: "Jumlah SD/MI (historis)",
        value: "3 unit",
        status: "historical",
        note: "Berdasarkan data profil desa terdahulu — perlu verifikasi",
      },
      {
        label: "Perguruan Tinggi (historis)",
        value: "1 unit",
        status: "historical",
        note: "Berdasarkan data profil desa terdahulu — perlu verifikasi",
      },
      {
        label: "Data fasilitas pendidikan terkini",
        value: "Data terbaru belum tersedia",
        status: "pending",
      },
    ],
  },
  {
    id: "ekonomi",
    label: "Ekonomi",
    icon: "TrendingUp",
    items: [
      {
        label: "Petani (historis)",
        value: "152 orang",
        status: "historical",
        note: "Berdasarkan data profil desa terdahulu — bukan data terkini",
      },
      {
        label: "Buruh Tani (historis)",
        value: "102 orang",
        status: "historical",
        note: "Berdasarkan data profil desa terdahulu — bukan data terkini",
      },
      {
        label: "Karyawan Industri (historis)",
        value: "±1.229 orang",
        status: "historical",
        note: "Berdasarkan data profil desa terdahulu — bukan data terkini",
      },
      {
        label: "Wiraswasta/Pedagang (historis)",
        value: "218 orang",
        status: "historical",
        note: "Berdasarkan data profil desa terdahulu — bukan data terkini",
      },
      {
        label: "Data ekonomi terkini",
        value: "Data terbaru belum tersedia",
        status: "pending",
      },
    ],
  },
  {
    id: "fasilitas",
    label: "Fasilitas",
    icon: "Building2",
    items: [
      {
        label: "Kantor Desa",
        value: "Ada",
        status: "verified",
      },
      {
        label: "Data fasilitas lengkap",
        value: "Data terbaru belum tersedia",
        status: "pending",
        note: "Perlu konfirmasi dari Pemerintah Desa Tegalgondo",
      },
    ],
  },
  {
    id: "sosial",
    label: "Sosial",
    icon: "Heart",
    items: [
      {
        label: "Data organisasi kemasyarakatan",
        value: "Data terbaru belum tersedia",
        status: "pending",
        note: "Perlu konfirmasi dari Pemerintah Desa Tegalgondo",
      },
      {
        label: "PKK",
        value: "Ada (berdasarkan sumber terdahulu)",
        status: "historical",
      },
      {
        label: "Karang Taruna",
        value: "Ada (berdasarkan sumber terdahulu)",
        status: "historical",
      },
    ],
  },
];
