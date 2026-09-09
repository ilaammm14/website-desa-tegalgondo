"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#profil", label: "Profil" },
  { href: "#pemerintahan", label: "Pemerintahan" },
  { href: "#potensi", label: "Potensi" },
  { href: "#dusun", label: "Dusun" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kegiatan", label: "Kegiatan" },
  { href: "#peta", label: "Peta" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const menuRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -60% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Close menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
          ? "bg-forest shadow-strong py-3"
          : "bg-transparent py-5"
        }`}
      role="banner"
    >
      <div className="section-container">
        <nav
          className="flex items-center justify-between"
          aria-label="Navigasi utama"
        >
          {/* Logo */}
          <Link
            href="#beranda"
            onClick={() => handleNavClick("#beranda")}
            className="flex flex-col group focus-visible:outline-none"
            aria-label="Desa Tegalgondo - Beranda"
          >
            <span className="font-playfair text-xl font-bold text-white tracking-wide group-hover:text-gold transition-colors duration-300">
              TEGALGONDO
            </span>
            <span className="text-white/60 text-[9px] font-inter font-medium tracking-[0.18em] uppercase mt-0.5">
              Desa · Karangploso · Malang
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" role="navigation">
            {navLinks.map(({ href, label }) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`relative px-3.5 py-2 text-sm font-inter font-medium transition-all duration-200 rounded-lg group
                    ${isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                  <span
                    className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-gold rounded-full transition-all duration-300 origin-left
                      ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative z-50 p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute inset-0 transition-all duration-300 ${menuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                  }`}
              >
                <X size={24} />
              </span>
              <span
                className={`absolute inset-0 transition-all duration-300 ${menuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                  }`}
              >
                <Menu size={24} />
              </span>
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        aria-hidden={!menuOpen}
      >
        <div className="bg-forest border-t border-white/10 px-4 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-inter font-medium transition-all duration-200
                    ${isActive
                      ? "bg-white/15 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Mobile footer info */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-white/40 text-xs font-inter text-center tracking-widest uppercase">
              Desa Tegalgondo · Karangploso · Malang
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
