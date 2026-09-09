"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { villageInfo } from "@/data/village";

function StatItem({
  stat,
  index,
}: {
  stat: (typeof villageInfo.stats)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const isPending = stat.status === "pending";
  const isHistorical = stat.status === "historical";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="flex flex-col items-center text-center px-2 sm:px-4 py-5 sm:py-6 group w-full"
    >
      {/* Value & Unit */}
      <div className="flex items-baseline justify-center gap-1 mb-1.5 w-full">
        <span
          className={`font-playfair font-bold leading-none transition-colors duration-300 ${
            isPending
              ? "text-xl sm:text-3xl text-charcoal/30"
              : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-forest"
          }`}
        >
          {stat.value}
        </span>
        {stat.unit && !isPending && (
          <span className="font-inter text-[10px] sm:text-xs md:text-sm font-medium text-natural/70 ml-0.5 flex-shrink-0">
            {stat.unit}
          </span>
        )}
      </div>

      {/* Label */}
      <span className="text-[11px] sm:text-xs md:text-sm font-inter font-medium text-charcoal/70">
        {stat.label}
      </span>

      {/* Status note */}
      {isPending && (
        <span className="mt-1 text-charcoal/40 text-[10px] sm:text-[11px] font-inter italic">
          Data terbaru belum tersedia
        </span>
      )}
      {isHistorical && (
        <span className="mt-1 text-charcoal/40 text-[10px] sm:text-[11px] font-inter italic">
          Data historis
        </span>
      )}
    </motion.div>
  );
}

export default function Statistics() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="bg-white border-y border-beige-200 w-full max-w-full overflow-hidden"
      aria-label="Statistik Desa Tegalgondo"
    >
      <div className="section-container">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="pt-10 sm:pt-12 pb-3 sm:pb-4 text-center"
        >
          <span className="section-label">Selayang Pandang</span>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-beige-200 w-full overflow-hidden">
          {villageInfo.stats.map((stat, index) => (
            <div key={stat.label} className="relative w-full overflow-hidden">
              <StatItem stat={stat} index={index} />
              {/* Vertical separator — desktop only */}
              {index < villageInfo.stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-beige-200" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
