"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TreePine, Users, Landmark } from "lucide-react";
import { villageInfo } from "@/data/village";

// Data statistik ringkas — hanya gunakan data terverifikasi
const accentStats = [
  { icon: TreePine, value: "5", label: "Dusun" },
  { icon: Users, value: "43 RT / 9 RW", label: "Administratif" },
  { icon: Landmark, value: "±220 Ha", label: "Luas Wilayah" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="profil"
      ref={ref}
      className="section-padding bg-cream w-full max-w-full overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left — Text */}
          <div className="w-full max-w-full">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="divider-gold" />
              <span className="section-label">Tentang Desa</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-heading mb-8"
            >
              Mengenal Tegalgondo{" "}
              <span className="text-natural italic">Lebih Dekat</span>
            </motion.h2>

            {/* Paragraphs */}
            <div className="space-y-5 mb-10">
              {villageInfo.about.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="prose-village text-sm sm:text-base leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Accent stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10"
            >
              {accentStats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-beige-100 border border-beige-200"
                >
                  <Icon size={20} className="text-natural mb-2" />
                  <span className="font-playfair text-lg sm:text-xl font-bold text-forest">
                    {value}
                  </span>
                  <span className="text-charcoal/50 text-xs font-inter mt-0.5">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                onClick={() => {
                  const el = document.getElementById("sejarah");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="btn-primary"
                aria-label="Selengkapnya tentang Desa Tegalgondo"
              >
                Selengkapnya
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-full"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-strong w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/balai%20desa/balai%20desa%20tegalgondo.jpeg"
                alt="Balai Desa Tegalgondo"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest/40 to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-forest rounded-2xl p-4 sm:p-6 shadow-strong max-w-[180px] sm:max-w-[200px]"
              aria-hidden="true"
            >
              <div className="text-gold text-2xl sm:text-3xl font-playfair font-bold mb-1">
                5
              </div>
              <div className="text-white/80 text-xs font-inter leading-tight">
                Dusun yang bersatu dalam satu desa
              </div>
            </motion.div>

            {/* Secondary image accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-2 right-2 sm:-top-4 sm:-right-4 w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 sm:border-4 border-cream shadow-medium"
              aria-hidden="true"
            >
              {/* Small accent image placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-leaf-300 to-leaf-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
