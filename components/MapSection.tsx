"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { villageInfo } from "@/data/village";

export default function MapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="peta"
      ref={ref}
      className="section-padding bg-forest overflow-hidden"
      aria-labelledby="map-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
          {/* Left: Info */}
          <div className="lg:max-w-sm xl:max-w-md flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-gold" />
              <span className="section-label text-white/60">Lokasi</span>
            </motion.div>

            <motion.h2
              id="map-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-playfair text-display-sm sm:text-display-md text-white leading-tight mb-8"
            >
              Jelajahi{" "}
              <span className="text-gold italic">Tegalgondo</span>
            </motion.h2>

            {/* Location info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-4 mb-10"
            >
              {[
                { label: "Desa", value: villageInfo.name },
                { label: "Kecamatan", value: villageInfo.district },
                { label: "Kabupaten", value: `Kabupaten ${villageInfo.regency}` },
                { label: "Provinsi", value: villageInfo.province },
                { label: "Kode Pos", value: villageInfo.postalCode },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-baseline gap-3 pb-3 border-b border-white/10"
                >
                  <span className="text-white/40 text-xs font-inter w-24 flex-shrink-0">
                    {label}
                  </span>
                  <span className="text-white font-inter text-sm">
                    {value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Location icon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-3 mb-8"
            >
              <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
              <p className="text-white/60 text-sm font-inter leading-6">
                Desa Tegalgondo terletak di wilayah Kecamatan Karangploso,
                Kabupaten Malang, Jawa Timur, Indonesia.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <a
                href={villageInfo.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-forest font-inter font-semibold text-sm rounded-xl hover:bg-gold/90 transition-all duration-300 hover:-translate-y-0.5 shadow-gold"
                aria-label="Buka lokasi di Google Maps"
              >
                <Navigation size={16} />
                Buka di Google Maps
                <ExternalLink size={14} className="opacity-60" />
              </a>
            </motion.div>
          </div>

          {/* Right: Map iframe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 min-w-0"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-strong aspect-[4/3] lg:aspect-auto lg:h-[500px]">
              {/*
                ============================================
                GOOGLE MAPS EMBED
                ============================================
                Cara mengganti URL:
                1. Buka Google Maps (maps.google.com)
                2. Cari "Desa Tegalgondo Karangploso Malang"
                3. Klik tombol Share (ikon berbagi)
                4. Pilih tab "Embed a map"
                5. Salin URL dari atribut src="" iframe
                6. Tempel di sini menggantikan URL placeholder di bawah

                URL saat ini adalah PLACEHOLDER dan mungkin tidak menampilkan
                lokasi yang tepat. Harap diperbarui dengan URL resmi.
                ============================================
              */}
              <iframe
                src={villageInfo.contact.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta lokasi Desa Tegalgondo, Kecamatan Karangploso, Kabupaten Malang"
                className="w-full h-full"
              />

              {/* Overlay note for development */}
              <div className="absolute bottom-0 left-0 right-0 bg-forest/80 backdrop-blur-sm p-3 text-center">
                <p className="text-white/60 text-xs font-inter">
                  📍 Desa Tegalgondo · Karangploso · Malang · Jawa Timur
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
