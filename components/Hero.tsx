"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";

// Helper to smooth scroll
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

// Animation variants
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative w-full max-w-full min-h-[100svh] min-h-screen flex flex-col justify-end overflow-hidden"
      aria-label="Hero - Selamat Datang di Desa Tegalgondo"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/hero-bg.jpg"
          alt="Pemandangan Desa Tegalgondo"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-leaf/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/6 w-96 h-96 rounded-full bg-natural/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full px-6 sm:px-8 pb-16 sm:pb-28 lg:pb-32 pt-28 sm:pt-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-3xl w-full"
        >
          {/* Small label */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="h-px w-6 sm:w-8 bg-gold" />
              <span className="section-label text-white/80 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em]">
                SELAMAT DATANG DI DESA TEGALGONDO
              </span>
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] mb-5 sm:mb-6"
          >
            Mengenal Desa,{" "}
            <span className="text-gold italic block sm:inline">Menggali Potensi,</span>{" "}
            <span className="block">Membangun Bersama.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-white/80 text-sm sm:text-base md:text-lg font-inter leading-relaxed mb-8 sm:mb-10 max-w-xl"
          >
            Desa Tegalgondo, Kecamatan Karangploso, Kabupaten Malang, Jawa
            Timur. Bersama membangun desa yang lebih baik, maju, dan
            sejahtera.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <button
              onClick={() => scrollToSection("potensi")}
              className="btn-primary bg-natural hover:bg-leaf border-0 text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl w-full sm:w-auto justify-center"
              aria-label="Jelajahi Desa Tegalgondo"
            >
              Jelajahi Desa
              <ChevronDown size={18} />
            </button>
            <button
              onClick={() => scrollToSection("profil")}
              className="btn-ghost text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl w-full sm:w-auto justify-center"
              aria-label="Tentang Desa Tegalgondo"
            >
              Tentang Desa
            </button>
          </motion.div>
        </motion.div>

        {/* Location indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex items-center gap-3"
        >
          <div className="flex items-center gap-1.5 text-white/60 text-xs font-inter">
            <MapPin size={13} className="text-gold flex-shrink-0" />
            <span>Karangploso</span>
          </div>
          <span className="text-white/30 text-xs">·</span>
          <span className="text-white/60 text-xs font-inter">Kabupaten Malang</span>
          <span className="text-white/30 text-xs">·</span>
          <span className="text-white/60 text-xs font-inter">Jawa Timur</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/40 text-[10px] font-inter tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
