"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, ChevronRight } from "lucide-react";
import { dusunList } from "@/data/dusun";

const gradients = [
  "from-forest to-leaf",
  "from-natural-700 to-leaf-400",
  "from-forest-600 to-natural-400",
  "from-forest-800 to-natural-500",
  "from-natural to-leaf-300",
];

export default function Dusun() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeDusun, setActiveDusun] = useState(0);

  const active = dusunList[activeDusun];

  return (
    <section
      id="dusun"
      ref={ref}
      className="section-padding bg-white w-full max-w-full overflow-hidden"
      aria-labelledby="dusun-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-3 mb-6"
          >
            <div className="divider-gold" />
            <span className="section-label">Wilayah & RT</span>
          </motion.div>

          <motion.h2
            id="dusun-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-heading"
          >
            Pembagian Wilayah,{" "}
            <span className="text-natural italic">RT & Penanggung Jawab</span>
          </motion.h2>
        </div>

        {/* Desktop layout: list + detail panel */}
        <div className="hidden lg:grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Dusun list */}
          <div className="space-y-3">
            {dusunList.map((dusun, index) => (
              <motion.button
                key={dusun.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.08 }}
                onClick={() => setActiveDusun(index)}
                aria-selected={activeDusun === index}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 text-left ${
                  activeDusun === index
                    ? "bg-forest text-white shadow-green"
                    : "bg-beige-50 text-charcoal/70 border border-beige-200 hover:border-natural/30 hover:bg-beige-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <MapPin
                    size={16}
                    className={
                      activeDusun === index ? "text-gold" : "text-natural/50"
                    }
                  />
                  <span className="font-inter font-medium text-sm">
                    {dusun.name}
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  className={
                    activeDusun === index ? "text-white/60" : "text-charcoal/30"
                  }
                />
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <motion.div
            key={activeDusun}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl overflow-hidden bg-beige-50 border border-beige-200"
          >
            {/* Image area */}
            <div className="aspect-[16/7] relative bg-beige-100 overflow-hidden">
              {active.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={active.image}
                  alt={active.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-br ${gradients[activeDusun % 5]}`}
                />
              )}
              <div className="absolute inset-0 hero-overlay" />
              <div className="absolute bottom-6 left-6 text-white z-10">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={14} className="text-gold" />
                  <span className="text-xs font-inter text-white/70">
                    Desa Tegalgondo · Karangploso · Malang
                  </span>
                </div>
                <h3 className="font-playfair text-3xl font-bold">
                  {active.name}
                </h3>
              </div>
            </div>

            <div className="p-8">
              <p className="font-inter text-sm leading-7 text-charcoal/70">
                {active.description}
              </p>

              {/* Detail items */}
              <div className="mt-6 pt-6 border-t border-beige-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {active.details.map((detail) => (
                  <div key={detail.label}>
                    <span className="block text-[10px] font-inter font-semibold tracking-widest uppercase text-charcoal/40 mb-1">
                      {detail.label}
                    </span>
                    <span
                      className={`block font-inter text-sm ${
                        detail.status === "pending"
                          ? "text-charcoal/30 italic"
                          : detail.status === "verified"
                          ? "text-forest font-semibold"
                          : "text-charcoal/60"
                      }`}
                    >
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile layout: stacked cards */}
        <div className="lg:hidden space-y-6">
          {dusunList.map((dusun, index) => (
            <motion.article
              key={dusun.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="rounded-2xl overflow-hidden bg-beige-50 border border-beige-200 shadow-soft"
            >
              {/* Image area */}
              <div className="h-36 relative bg-beige-100 overflow-hidden">
                {dusun.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={dusun.image}
                    alt={dusun.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${gradients[index % 5]}`}
                  />
                )}
                <div className="absolute inset-0 bg-forest/40" />
                <div className="absolute bottom-4 left-4 z-10">
                  <h3 className="font-playfair text-xl font-bold text-white">
                    {dusun.name}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm leading-6 font-inter text-charcoal/70 mb-4">
                  {dusun.description}
                </p>
                <div className="pt-3 border-t border-beige-200 grid grid-cols-2 gap-3">
                  {dusun.details.map((detail) => (
                    <div key={detail.label}>
                      <span className="block text-[10px] font-inter font-semibold tracking-widest uppercase text-charcoal/40 mb-0.5">
                        {detail.label}
                      </span>
                      <span className="block font-inter text-xs text-forest font-semibold">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
