# Website Profil Desa Tegalgondo

Website profil modern dan profesional untuk **Desa Tegalgondo**, Kecamatan Karangploso, Kabupaten Malang, Jawa Timur.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff6b6b?logo=framer)

---

## Tech Stack

| Teknologi | Versi | Fungsi |
|---|---|---|
| Next.js | 14 | Framework (App Router) |
| React | 18 | UI Library |
| TypeScript | 5 | Type Safety |
| Tailwind CSS | 3 | Styling |
| Framer Motion | 11 | Animasi |
| Lucide React | latest | Icons |
| ESLint | 8 | Code Quality |

---

## Cara Install

### Prerequisites
- Node.js v18+
- npm v9+

### Install Dependencies

```bash
npm install
```

---

## Cara Menjalankan Development Server

```bash
npm run dev
```

Buka browser di: **http://localhost:3000**

---

## Cara Build Production

```bash
npm run build
```

---

## Cara Menjalankan Production Server

```bash
npm run start
```

---

## Cara Mengganti Data Desa

Semua data desa tersimpan di folder `data/`. Jangan edit langsung di komponen UI.

### Data Utama (village.ts)

Edit file **`data/village.ts`** untuk mengubah:
- Informasi umum desa
- Statistik (penduduk, RT, RW)
- Informasi kontak
- Visi & Misi
- Sejarah desa
- Jam operasional

### Data Pemerintahan

Edit file **`data/government.ts`** untuk mengubah nama perangkat desa.

### Data Lainnya

- Potensi desa: `data/potentials.ts`
- Data dusun: `data/dusun.ts`
- Galeri foto: `data/gallery.ts`
- Kegiatan desa: `data/activities.ts`

---

## Cara Mengganti Foto

1. Simpan foto ke folder `public/images/[kategori]/`
2. Update path di file data yang relevan
3. Update komponen untuk menggunakan `<Image>` Next.js

Folder foto tersedia:
- `public/images/hero/` - Foto hero background
- `public/images/village/` - Foto profil desa
- `public/images/government/` - Foto perangkat desa
- `public/images/potentials/` - Foto potensi desa
- `public/images/dusun/` - Foto per dusun
- `public/images/gallery/` - Foto galeri
- `public/images/activities/` - Foto kegiatan

Setiap folder memiliki file README.txt dengan instruksi lengkap.

---

## Cara Deploy ke Vercel

### Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Via GitHub

1. Push project ke repository GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import repository
4. Vercel akan otomatis mendeteksi Next.js
5. Klik Deploy

### Setelah Deploy

Update URL di:
- `app/layout.tsx` - metadata.openGraph.url
- `app/robots.ts`
- `app/sitemap.ts`

---

## Mengganti Peta Google Maps

1. Buka Google Maps - cari lokasi Desa Tegalgondo
2. Klik Share > Embed a map
3. Salin URL dari atribut src pada iframe
4. Update `data/village.ts` -> contact.googleMapsEmbed

---

## Checklist Sebelum Launch

- [ ] Semua data placeholder sudah diisi di folder data/
- [ ] Foto hero sudah dipasang di public/images/hero/
- [ ] Foto galeri sudah ditambahkan
- [ ] Google Maps embed sudah diperbarui
- [ ] Visi Misi resmi sudah diisi
- [ ] Sejarah resmi sudah diisi
- [ ] Informasi kontak sudah diisi
- [ ] npm run build berjalan tanpa error
- [ ] URL sitemap/robots sudah diperbarui dengan domain resmi
- [ ] Favicon ditambahkan di public/favicon.ico
- [ ] OG Image ditambahkan di public/og-image.jpg (1200x630px)

---

## Lisensi

2026 Pemerintah Desa Tegalgondo. Website ini dibangun untuk kepentingan publik.
