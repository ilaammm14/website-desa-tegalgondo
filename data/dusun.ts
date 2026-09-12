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
      "Wilayah Dusun Gondang melingkupi RT 1–8 di Desa Tegalgondo.",
    image: "/images/dusun/gondang.jpg",
    status: "verified",
    details: [
      {
        label: "Nama Wilayah",
        value: "Gondang",
        status: "verified",
      },
      {
        label: "Pembagian RT",
        value: "RT 1–8",
        status: "verified",
      },
      {
        label: "Penanggung Jawab",
        value: "Pak Tarmudi",
        status: "verified",
      },
    ],
  },
  {
    id: "babatan",
    name: "Dusun Babatan",
    description:
      "Wilayah Dusun Babatan melingkupi RT 9–11 di Desa Tegalgondo.",
    image: "/images/dusun/babatan.jpg",
    status: "verified",
    details: [
      {
        label: "Nama Wilayah",
        value: "Babatan",
        status: "verified",
      },
      {
        label: "Pembagian RT",
        value: "RT 9–11",
        status: "verified",
      },
      {
        label: "Penanggung Jawab",
        value: "Pak Wawan",
        status: "verified",
      },
    ],
  },
  {
    id: "wunutsari",
    name: "Dusun Wunutsari",
    description:
      "Wilayah Dusun Wunutsari melingkupi RT 12–15 di Desa Tegalgondo.",
    image: "/images/dusun/wunutsari.jpg",
    status: "verified",
    details: [
      {
        label: "Nama Wilayah",
        value: "Wunutsari",
        status: "verified",
      },
      {
        label: "Pembagian RT",
        value: "RT 12–15",
        status: "verified",
      },
      {
        label: "Penanggung Jawab",
        value: "Pak Samsul",
        status: "verified",
      },
    ],
  },
  {
    id: "dawuhan",
    name: "Dusun Dawuhan",
    description:
      "Wilayah Dusun Dawuhan melingkupi RT 16–24 di Desa Tegalgondo.",
    image: "/images/dusun/dawuhan.jpg",
    status: "verified",
    details: [
      {
        label: "Nama Wilayah",
        value: "Dawuhan",
        status: "verified",
      },
      {
        label: "Pembagian RT",
        value: "RT 16–24",
        status: "verified",
      },
      {
        label: "Penanggung Jawab",
        value: "Pak Dul",
        status: "verified",
      },
    ],
  },
  {
    id: "ketangi",
    name: "Dusun Ketangi",
    description:
      "Wilayah Dusun Ketangi melingkupi RT 25–39 di Desa Tegalgondo.",
    image: "/images/dusun/ketangi.jpg",
    status: "verified",
    details: [
      {
        label: "Nama Wilayah",
        value: "Ketangi",
        status: "verified",
      },
      {
        label: "Pembagian RT",
        value: "RT 25–39",
        status: "verified",
      },
      {
        label: "Penanggung Jawab",
        value: "Pak Efendi",
        status: "verified",
      },
    ],
  },
  {
    id: "perum-ikip",
    name: "Perum IKIP",
    description:
      "Wilayah Perum IKIP melingkupi RT 40–43 di Desa Tegalgondo.",
    image: "/images/3.%20sdm/merayakan%20hut%20ri%20ke%2081%20bersama%20ibu%20dawis%201%20rt%2040%20perum%20ikip%20tegalgondo%20asri.jpeg",
    status: "verified",
    details: [
      {
        label: "Nama Wilayah",
        value: "Perum IKIP",
        status: "verified",
      },
      {
        label: "Pembagian RT",
        value: "RT 40–43",
        status: "verified",
      },
      {
        label: "Penanggung Jawab",
        value: "Pak Samsul",
        status: "verified",
      },
    ],
  },
];
