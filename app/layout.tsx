import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// ============================================================
// VIEWPORT
// ============================================================
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// ============================================================
// FONTS
// ============================================================
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// ============================================================
// METADATA
// ============================================================
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://tegalgondo.vercel.app"
  ),
  title: {
    default: "Desa Tegalgondo — Kecamatan Karangploso, Kabupaten Malang",
    template: "%s | Desa Tegalgondo",
  },
  description:
    "Website profil Desa Tegalgondo, Kecamatan Karangploso, Kabupaten Malang, Jawa Timur. Mengenal profil, potensi, masyarakat, kegiatan, dan informasi Desa Tegalgondo.",
  keywords: [
    "Desa Tegalgondo",
    "Karangploso",
    "Kabupaten Malang",
    "Jawa Timur",
    "profil desa",
    "pemerintah desa",
    "potensi desa",
    "Tegalgondo",
  ],
  authors: [{ name: "Pemerintah Desa Tegalgondo" }],
  creator: "Pemerintah Desa Tegalgondo",
  publisher: "Pemerintah Desa Tegalgondo",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://tegalgondo.desa.id",
    siteName: "Desa Tegalgondo",
    title: "Desa Tegalgondo — Kecamatan Karangploso, Kabupaten Malang",
    description:
      "Website profil Desa Tegalgondo, Kecamatan Karangploso, Kabupaten Malang, Jawa Timur.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Desa Tegalgondo, Kecamatan Karangploso, Kabupaten Malang",
      },
    ],
  },

  // Twitter/X card
  twitter: {
    card: "summary_large_image",
    title: "Desa Tegalgondo — Kecamatan Karangploso, Kabupaten Malang",
    description:
      "Website profil Desa Tegalgondo, Kecamatan Karangploso, Kabupaten Malang, Jawa Timur.",
    images: ["/og-image.jpg"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Alternates
  alternates: {
    canonical: "https://tegalgondo.desa.id",
  },
};

// ============================================================
// ROOT LAYOUT
// ============================================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable} scroll-smooth w-full overflow-x-hidden`}
    >
      <body className="font-inter antialiased w-full max-w-full overflow-x-hidden min-h-screen bg-cream text-charcoal">
        {children}
      </body>
    </html>
  );
}
