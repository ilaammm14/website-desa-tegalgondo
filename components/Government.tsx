"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HelpCircle } from "lucide-react";
import { officials, governmentPendingMessage } from "@/data/government";
import type { Official } from "@/data/government";

function OfficialCard({
  official,
  size = "normal",
  delay = 0,
  isInView,
}: {
  official: Official;
  size?: "large" | "normal" | "small";
  delay?: number;
  isInView: boolean;
}) {
  const sizeClasses = {
    large: "px-6 py-5",
    normal: "px-4 py-4",
    small: "px-3 py-3",
  };

  // All officials are pending — no fake initials
  const isPending = official.status === "pending";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-2xl border ${
        isPending ? "border-dashed border-beige-300" : "border-beige-200"
      } shadow-soft ${sizeClasses[size]}`}
    >
      {/* Avatar */}
      <div
        className={`mx-auto mb-3 rounded-full flex items-center justify-center flex-shrink-0 bg-beige-100 border-2 border-dashed border-beige-300 ${
          size === "large" ? "w-16 h-16" : "w-12 h-12"
        }`}
      >
        <HelpCircle
          size={size === "large" ? 24 : 18}
          className="text-charcoal/25"
        />
      </div>

      {/* Position */}
      <div className="text-center">
        <span className="block text-[10px] font-inter font-semibold tracking-widest uppercase text-natural/60 mb-1">
          {official.position}
        </span>
        <span className="block font-inter text-charcoal/30 italic text-xs">
          {official.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function Government() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const kepalaDesa = officials.find((o) => o.level === "kepala")!;
  const sekretarisDesa = officials.find((o) => o.level === "sekretaris")!;
  const kaurList = officials.filter((o) => o.level === "kaur");
  const kasiList = officials.filter((o) => o.level === "kasi");
  const kadusList = officials.filter((o) => o.level === "kadus");

  return (
    <section
      id="pemerintahan"
      ref={ref}
      className="section-padding bg-cream"
      aria-labelledby="government-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="divider-gold" />
            <span className="section-label">Pemerintahan</span>
            <div className="divider-gold" />
          </motion.div>

          <motion.h2
            id="government-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-heading mb-4"
          >
            Struktur{" "}
            <span className="text-natural italic">Pemerintahan Desa</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-charcoal/60 text-sm font-inter leading-relaxed"
          >
            {governmentPendingMessage}
          </motion.p>
        </div>

        {/* Org Chart */}
        <div className="max-w-5xl mx-auto">
          {/* Level 1: Kepala Desa */}
          <div className="flex justify-center mb-6">
            <div className="w-64">
              <OfficialCard
                official={kepalaDesa}
                size="large"
                delay={0.1}
                isInView={isInView}
              />
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center mb-6" aria-hidden="true">
            <div className="w-px h-8 bg-natural/30" />
          </div>

          {/* Level 2: Sekretaris Desa */}
          <div className="flex justify-center mb-6">
            <div className="w-56">
              <OfficialCard
                official={sekretarisDesa}
                size="normal"
                delay={0.2}
                isInView={isInView}
              />
            </div>
          </div>

          {/* Connector horizontal */}
          <div className="flex justify-center mb-6" aria-hidden="true">
            <div className="flex flex-col items-center">
              <div className="w-px h-6 bg-natural/30" />
              <div className="w-full max-w-2xl h-px bg-natural/30" />
            </div>
          </div>

          {/* Level 3: Kaur, Kasi, Kadus */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            <div>
              <h3 className="text-center text-[10px] font-inter font-semibold tracking-widest uppercase text-charcoal/40 mb-3">
                Kepala Urusan (Kaur)
              </h3>
              <div className="space-y-3">
                {kaurList.map((official, i) => (
                  <OfficialCard
                    key={official.id}
                    official={official}
                    size="small"
                    delay={0.3 + i * 0.08}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-center text-[10px] font-inter font-semibold tracking-widest uppercase text-charcoal/40 mb-3">
                Kepala Seksi (Kasi)
              </h3>
              <div className="space-y-3">
                {kasiList.map((official, i) => (
                  <OfficialCard
                    key={official.id}
                    official={official}
                    size="small"
                    delay={0.35 + i * 0.08}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-center text-[10px] font-inter font-semibold tracking-widest uppercase text-charcoal/40 mb-3">
                Kepala Dusun (Kadus)
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {kadusList.map((official, i) => (
                  <OfficialCard
                    key={official.id}
                    official={official}
                    size="small"
                    delay={0.4 + i * 0.06}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
