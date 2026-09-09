/**
 * data/dusun.ts
 * ============================================
 * DATA 5 DUSUN — DESA TEGALGONDO
 *
 * Data terverifikasi:
 * - Nama 5 dusun: Gondang, Babatan, Wunutsari, Dawuhan, Ketangi
 *   Sumber: Data Kecamatan Karangploso
 *
 * Data belum tersedia:
 * - Pembagian RT/RW per dusun (tidak ada sumber resmi yang tersedia)
 * - Jumlah penduduk per dusun
 * - Kepala Dusun aktif
 *
 * JANGAN menambahkan angka RT/RW per dusun tanpa sumber resmi.
 * ============================================
 */

import type { DataStatus } from "./village";

export interface DusunItem {
  id: string;
  name: string;
  description: string;
  /** Placeholder sampai foto dusun tersedia di /public/images/dusun/ */
  image: string;
  status: DataStatus;
  details: {
    label: string;
    value: string;
    status: DataStatus;
  }[];
}

// ============================================================
// 5 DUSUN DESA TEGALGONDO
// Nama dusun: TERVERIFIKASI (Sumber: Data Kecamatan Karangploso)
// Detail per dusun: PENDING — belum ada sumber resmi per dusun
// ============================================================
export const dusunList: DusunItem[] = [
  {
    id: "gondang",
    name: "Dusun Gondang",
    description:
      "Dusun Gondang merupakan salah satu dari lima dusun yang membentuk wilayah administratif Desa Tegalgondo. Informasi lebih lanjut mengenai dusun ini akan diperbarui setelah data resmi tersedia.",
    image: "/images/dusun/gondang.jpg",
    status: "verified",
    details: [
      {
        label: "Nama Dusun",
        value: "Gondang",
        status: "verified",
      },
      {
        label: "Jumlah RT",
        value: "Data belum tersedia",
        status: "pending",
      },
      {
        label: "Jumlah RW",
        value: "Data belum tersedia",
        status: "pending",
      },
      {
        label: "Kepala Dusun",
        value: "Data belum tersedia",
        status: "pending",
      },
    ],
  },
  {
    id: "babatan",
    name: "Dusun Babatan",
    description:
      "Dusun Babatan merupakan salah satu dari lima dusun yang membentuk wilayah administratif Desa Tegalgondo. Informasi lebih lanjut mengenai dusun ini akan diperbarui setelah data resmi tersedia.",
    image: "/images/dusun/babatan.jpg",
    status: "verified",
    details: [
      {
        label: "Nama Dusun",
        value: "Babatan",
        status: "verified",
      },
      {
        label: "Jumlah RT",
        value: "Data belum tersedia",
        status: "pending",
      },
      {
        label: "Jumlah RW",
        value: "Data belum tersedia",
        status: "pending",
      },
      {
        label: "Kepala Dusun",
        value: "Data belum tersedia",
        status: "pending",
      },
    ],
  },
  {
    id: "wunutsari",
    name: "Dusun Wunutsari",
    description:
      "Dusun Wunutsari merupakan salah satu dari lima dusun yang membentuk wilayah administratif Desa Tegalgondo. Informasi lebih lanjut mengenai dusun ini akan diperbarui setelah data resmi tersedia.",
    image: "/images/dusun/wunutsari.jpg",
    status: "verified",
    details: [
      {
        label: "Nama Dusun",
        value: "Wunutsari",
        status: "verified",
      },
      {
        label: "Jumlah RT",
        value: "Data belum tersedia",
        status: "pending",
      },
      {
        label: "Jumlah RW",
        value: "Data belum tersedia",
        status: "pending",
      },
      {
        label: "Kepala Dusun",
        value: "Data belum tersedia",
        status: "pending",
      },
    ],
  },
  {
    id: "dawuhan",
    name: "Dusun Dawuhan",
    description:
      "Dusun Dawuhan merupakan salah satu dari lima dusun yang membentuk wilayah administratif Desa Tegalgondo. Informasi lebih lanjut mengenai dusun ini akan diperbarui setelah data resmi tersedia.",
    image: "/images/dusun/dawuhan.jpg",
    status: "verified",
    details: [
      {
        label: "Nama Dusun",
        value: "Dawuhan",
        status: "verified",
      },
      {
        label: "Jumlah RT",
        value: "Data belum tersedia",
        status: "pending",
      },
      {
        label: "Jumlah RW",
        value: "Data belum tersedia",
        status: "pending",
      },
      {
        label: "Kepala Dusun",
        value: "Data belum tersedia",
        status: "pending",
      },
    ],
  },
  {
    id: "ketangi",
    name: "Dusun Ketangi",
    description:
      "Dusun Ketangi merupakan salah satu dari lima dusun yang membentuk wilayah administratif Desa Tegalgondo. Informasi lebih lanjut mengenai dusun ini akan diperbarui setelah data resmi tersedia.",
    image: "/images/dusun/ketangi.jpg",
    status: "verified",
    details: [
      {
        label: "Nama Dusun",
        value: "Ketangi",
        status: "verified",
      },
      {
        label: "Jumlah RT",
        value: "Data belum tersedia",
        status: "pending",
      },
      {
        label: "Jumlah RW",
        value: "Data belum tersedia",
        status: "pending",
      },
      {
        label: "Kepala Dusun",
        value: "Data belum tersedia",
        status: "pending",
      },
    ],
  },
];
