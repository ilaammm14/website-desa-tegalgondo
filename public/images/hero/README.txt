FOLDER UNTUK FOTO HERO / BACKGROUND UTAMA WEBSITE

Simpan foto hero di folder ini dengan nama:
  hero-bg.jpg   (Foto landscape utama - ukuran ideal: 1920x1080px atau lebih)

Kemudian update Hero.tsx untuk menggunakan foto:
1. Buka: components/Hero.tsx
2. Ganti bagian placeholder gradient dengan:

   import Image from "next/image";
   <Image
     src="/images/hero/hero-bg.jpg"
     alt="Pemandangan Desa Tegalgondo, Kecamatan Karangploso, Kabupaten Malang"
     fill
     priority
     quality={90}
     className="object-cover"
   />

3. Simpan file dan restart dev server.

Tips foto:
- Orientasi landscape (horizontal)
- Ukuran minimal: 1280x720px
- Ukuran ideal: 1920x1080px atau 2560x1440px
- Format: JPG (kualitas 85-90%) atau WebP
- Foto: pemandangan desa, sawah, atau landmark lokal
