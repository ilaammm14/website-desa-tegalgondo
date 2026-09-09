/**
 * data/government.ts
 * ============================================
 * DATA PEMERINTAHAN DESA TEGALGONDO
 *
 * STATUS: Data perangkat desa aktif belum tersedia dari sumber resmi terbaru.
 * Seluruh posisi ditampilkan sebagai "Data belum tersedia" hingga
 * Pemerintah Desa Tegalgondo menyediakan informasi resmi.
 *
 * RIWAYAT KEPALA DESA tersedia di data/village.ts → villageHeadHistory
 * ============================================
 */

import type { DataStatus } from "./village";

export interface Official {
  id: string;
  name: string;
  position: string;
  division?: string;
  level: "kepala" | "sekretaris" | "kaur" | "kasi" | "kadus";
  status: DataStatus;
  note?: string;
}

// ============================================================
// PERANGKAT DESA TEGALGONDO
// Status: PENDING — Menunggu data resmi dari Pemerintah Desa
// ============================================================
export const officials: Official[] = [
  {
    id: "kepala-desa",
    name: "H. Usman Junaidi",
    position: "Kepala Desa",
    level: "kepala",
    status: "verified",
  },
  {
    id: "sekretaris-desa",
    name: "Sanik Dharmawati",
    position: "Sekretaris Desa",
    level: "sekretaris",
    status: "verified",
  },
  {
    id: "kaur-Tata Usaha dan Umum",
    name: "M. Bahktiar I.R",
    position: "Kaur Umum & TU",
    division: "Umum & Perencanaan",
    level: "kaur",
    status: "verified",
  },
  {
    id: "kaur-perencanaan",
    name: "Tarmudi",
    position: "Kaur Perencanaan",
    division: "Umum & Perencanaan",
    level: "kaur",
    status: "verified",
  },
  {
    id: "kaur-keuangan",
    name: "Wawan Tri W.",
    position: "Kaur Keuangan",
    division: "Keuangan",
    level: "kaur",
    status: "verified",
  },
  {
    id: "kasi-pemerintahan",
    name: "Ninik Indahwati",
    position: "Kasi Pemerintahan",
    division: "Pelayanan",
    level: "kasi",
    status: "verified",
  },
  {
    id: "kasi-kesejahteraan",
    name: "Joyo Warsito",
    position: "Kasi Kesejahteraan",
    division: "Pelayanan",
    level: "kasi",
    status: "verified",
  },
  {
    id: "kasi-pelayanan",
    name: "Erik Irwanto",
    position: "Kasi Pelayanan",
    division: "Pelayanan",
    level: "kasi",
    status: "verified",
  },
  {
    id: "kadus-gondang",
    name: "Hermastur",
    position: "Kepala Dusun Gondang",
    level: "kadus",
    status: "verified",
  },
  {
    id: "kadus-babatan",
    name: "Hermastur",
    position: "Kepala Dusun Babatan",
    level: "kadus",
    status: "verified",
  },
  {
    id: "kadus-wunutsari",
    name: "M. Saiful Arifin",
    position: "Kepala Dusun Wunutsari",
    level: "kadus",
    status: "verified",
  },
  {
    id: "kadus-dawuhan",
    name: "Abdul Kholil",
    position: "Kepala Dusun Dawuhan",
    level: "kadus",
    status: "verified",
  },
  {
    id: "kadus-ketangi",
    name: "M. Efendi",
    position: "Kepala Dusun Ketangi",
    level: "kadus",
    status: "verified",
  },
];

export const governmentPendingMessage =
  "Informasi perangkat Pemerintah Desa Tegalgondo telah diperbarui. " +
  "Untuk informasi lebih lanjut, silakan menghubungi Kantor Desa Tegalgondo.";
