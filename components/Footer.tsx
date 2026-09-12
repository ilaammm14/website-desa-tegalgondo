"use client";

import { Globe, Share2, MapPin } from "lucide-react";
import { villageInfo } from "@/data/village";

const footerNav = [
  { href: "#beranda", label: "Beranda" },
  { href: "#profil", label: "Profil" },
  { href: "#potensi", label: "Potensi" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Kontak" },
];

function handleNavClick(href: string) {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Footer() {
  const { contact } = villageInfo;
  const hasInstagram = !contact.instagram.startsWith("[");
  const hasFacebook = !contact.facebook.startsWith("[");

  return (
    <footer
      className="bg-forest text-white w-full max-w-full overflow-hidden"
      role="contentinfo"
      aria-label="Footer Desa Tegalgondo"
    >
      {/* Main footer */}
      <div className="section-container py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12">
          {/* Brand column */}
          <div>
            <div className="mb-6">
              <span className="block font-playfair text-2xl font-bold tracking-wide mb-1">
                TEGALGONDO
              </span>
              <span className="block text-white/40 text-[10px] font-inter tracking-[0.2em] uppercase">
                Desa · Karangploso · Malang
              </span>
            </div>

            <div className="space-y-1.5 mb-8">
              <p className="text-white/60 text-sm font-inter">
                Desa Tegalgondo
              </p>
              <p className="text-white/60 text-sm font-inter">
                Kecamatan Karangploso
              </p>
              <p className="text-white/60 text-sm font-inter">
                Kabupaten Malang, Jawa Timur
              </p>
              <p className="text-white/60 text-sm font-inter">Indonesia</p>
            </div>

            {/* Social media */}
            <div className="flex items-center gap-3">
              {hasInstagram && (
                <a
                  href={`https://www.instagram.com/${contact.instagram}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  aria-label={`Instagram Desa Tegalgondo: @${contact.instagram}`}
                >
                  <Share2 size={16} />
                </a>
              )}
              {hasFacebook && (
                <a
                  href={`https://www.facebook.com/${contact.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  aria-label={`Facebook Desa Tegalgondo: ${contact.facebook}`}
                >
                  <Globe size={16} />
                </a>
              )}
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Lokasi Desa Tegalgondo di Google Maps"
              >
                <MapPin size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
              Navigasi
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {footerNav.map(({ href, label }) => (
                  <li key={href}>
                    <button
                      onClick={() => handleNavClick(href)}
                      className="text-white/60 text-sm font-inter hover:text-white transition-colors duration-200 text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Informasi */}
          <div>
            <h3 className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
              Informasi
            </h3>
            <div className="space-y-3">
              <div>
                <span className="block text-white/40 text-[10px] font-inter mb-0.5">
                  Telepon
                </span>
                <span
                  className={`text-sm font-inter ${
                    contact.phone.startsWith("[") || contact.phone === "Data belum tersedia"
                      ? "text-white/40 italic"
                      : "text-white/70"
                  }`}
                >
                  {contact.phone}
                </span>
              </div>
              <div>
                <span className="block text-white/40 text-[10px] font-inter mb-0.5">
                  Email
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm font-inter break-all text-white/70 hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
              </div>
              <div>
                <span className="block text-white/40 text-[10px] font-inter mb-0.5">
                  Jam Pelayanan
                </span>
                <span className="text-white/70 text-sm font-inter">
                  {villageInfo.officeHours}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-inter text-center sm:text-left">
            © 2026 Pemerintah Desa Tegalgondo. Semua hak dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/25 text-xs font-inter">
              Kecamatan Karangploso · Kabupaten Malang · Jawa Timur
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
