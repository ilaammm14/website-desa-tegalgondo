"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User2 } from "lucide-react";
import { villageHistory, villageHeadHistory } from "@/data/village";

export default function History() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="sejarah"
      ref={ref}
      className="section-padding bg-forest overflow-hidden"
      aria-labelledby="history-heading"
    >
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-gold" />
            <span className="section-label text-white/60">Sejarah Desa</span>
            <div className="h-px w-8 bg-gold" />
          </motion.div>

          <motion.h2
            id="history-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-display-sm sm:text-display-md text-white leading-tight"
          >
            Riwayat{" "}
            <span className="text-gold italic">Kepala Desa</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-white/40 text-xs font-inter italic"
          >
            Berdasarkan sumber historis yang tersedia — bukan daftar resmi terbaru.
          </motion.p>
        </div>

        {/* Context items (timeline style) */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Center line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-white/20 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-12 lg:space-y-16">
            {villageHistory.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={item.era}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + index * 0.15,
                  }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content side */}
                  <div
                    className={`flex-1 pl-10 md:pl-0 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    {/* Era badge */}
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[10px] font-inter font-semibold tracking-widest uppercase mb-3 ${
                        item.status === "pending"
                          ? "bg-white/10 text-white/40"
                          : "bg-gold/20 text-gold"
                      }`}
                    >
                      {item.era}
                    </span>

                    {/* Title */}
                    <h3
                      className={`font-playfair text-xl sm:text-2xl font-semibold mb-3 ${
                        item.status === "pending"
                          ? "text-white/40 italic"
                          : "text-white"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-sm leading-7 font-inter ${
                        item.status === "pending"
                          ? "text-white/35 italic"
                          : "text-white/60"
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Status label */}
                    {item.status === "historical" && (
                      <span className="inline-block mt-2 text-white/30 text-xs font-inter italic">
                        * Sumber historis terdahulu
                      </span>
                    )}
                    {item.status === "pending" && (
                      <span className="inline-block mt-2 text-white/25 text-xs font-inter italic">
                        * Menunggu data resmi
                      </span>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-0 md:left-1/2 top-2 md:-translate-x-1/2 flex-shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full bg-forest border-2 flex items-center justify-center shadow-gold ${
                        item.status === "pending"
                          ? "border-white/20"
                          : "border-gold/60"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item.status === "pending" ? "bg-white/20" : "bg-gold"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Riwayat Kepala Desa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <h3 className="font-playfair text-lg text-white font-semibold mb-2 text-center">
              Riwayat Kepala Desa Tegalgondo
            </h3>
            <p className="text-white/40 text-xs font-inter italic text-center mb-8">
              Berdasarkan sumber historis yang tersedia
            </p>

            <ol className="space-y-3" role="list">
              {villageHeadHistory.map((head, index) => (
                <motion.li
                  key={head.period}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.07 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      head.status === "pending"
                        ? "bg-white/5 border border-white/10"
                        : "bg-gold/15 border border-gold/25"
                    }`}
                  >
                    <User2
                      size={14}
                      className={
                        head.status === "pending"
                          ? "text-white/20"
                          : "text-gold/70"
                      }
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-between gap-3">
                    <span
                      className={`font-inter text-sm ${
                        head.status === "pending"
                          ? "text-white/30 italic"
                          : "text-white/80"
                      }`}
                    >
                      {head.name}
                    </span>
                    <span
                      className={`font-inter text-xs flex-shrink-0 ${
                        head.status === "pending"
                          ? "text-white/20"
                          : "text-white/40"
                      }`}
                    >
                      {head.period}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-10 text-center"
        >
          <p className="text-white/30 text-xs font-inter italic max-w-lg mx-auto">
            * Data riwayat kepala desa berdasarkan sumber historis yang tersedia — bukan daftar resmi terbaru.
            Data kepemimpinan setelah 2022 menunggu konfirmasi dari Pemerintah Desa Tegalgondo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
