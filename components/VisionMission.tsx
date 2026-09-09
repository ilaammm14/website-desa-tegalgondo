"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Compass } from "lucide-react";
import { visionMission } from "@/data/village";

export default function VisionMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="visi-misi"
      ref={ref}
      className="section-padding bg-beige-50"
      aria-labelledby="visi-misi-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="divider-gold" />
            <span className="section-label">Visi & Misi</span>
            <div className="divider-gold" />
          </motion.div>

          <motion.h2
            id="visi-misi-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-heading"
          >
            Arah dan{" "}
            <span className="text-natural italic">Harapan Desa</span>
          </motion.h2>

          {/* Keterangan sumber — tampilkan jika data historis */}
          {visionMission.visionStatus === "historical" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-charcoal/50 text-xs font-inter italic"
            >
              ⚠ Berdasarkan sumber terdahulu — perlu dikonfirmasi kepada Pemerintah Desa Tegalgondo untuk data resmi terbaru.
            </motion.p>
          )}
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 xl:gap-12 max-w-5xl mx-auto">
          {/* Visi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="h-full rounded-3xl bg-forest p-8 lg:p-10 overflow-hidden">
              {/* Background decoration */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2"
                aria-hidden="true"
              />

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gold/20 mb-6">
                <Target size={24} className="text-gold" />
              </div>

              {/* Visi label */}
              <span className="block section-label text-gold/70 mb-4">
                VISI
              </span>

              {/* Visi text */}
              <blockquote
                className="font-playfair text-xl sm:text-2xl leading-relaxed text-white"
              >
                &ldquo;{visionMission.vision}&rdquo;
              </blockquote>

              {visionMission.visionStatus === "historical" && (
                <p className="mt-4 text-white/40 text-xs font-inter italic">
                  * Berdasarkan sumber terdahulu
                </p>
              )}
            </div>
          </motion.div>

          {/* Misi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="rounded-3xl bg-white border border-beige-200 p-8 lg:p-10 shadow-soft h-full">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-natural/10 mb-6">
                <Compass size={24} className="text-natural" />
              </div>

              {/* Misi label */}
              <span className="block section-label text-natural/70 mb-6">
                MISI
              </span>

              {/* Misi list */}
              <ol className="space-y-5" role="list">
                {visionMission.missions.map((mission, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    {/* Number */}
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-natural/10 flex items-center justify-center text-natural text-xs font-inter font-bold mt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Text */}
                    <p
                      className={`text-sm leading-7 font-inter ${
                        mission.startsWith("[")
                          ? "text-charcoal/30 italic"
                          : "text-charcoal/80"
                      }`}
                    >
                      {mission}
                    </p>
                  </motion.li>
                ))}
              </ol>

              {visionMission.missionStatus === "historical" && (
                <p className="mt-6 text-charcoal/40 text-xs font-inter italic border-t border-beige-200 pt-4">
                  * Berdasarkan sumber terdahulu — perlu dikonfirmasi kepada Pemerintah Desa Tegalgondo.
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
