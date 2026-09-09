"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Users,
  Map,
  GraduationCap,
  TrendingUp,
  Building2,
  Heart,
  RefreshCcw,
  type LucideIcon,
} from "lucide-react";
import { villageDataCategories } from "@/data/village";

const iconComponents: Record<string, LucideIcon> = {
  Users,
  Map,
  GraduationCap,
  TrendingUp,
  Building2,
  Heart,
};

export default function VillageData() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState(villageDataCategories[0].id);

  const current = villageDataCategories.find((c) => c.id === activeCategory)!;
  const Icon = iconComponents[current.icon] || Users;

  const allPlaceholder = current.items.every((i) => i.status === "pending");

  return (
    <section
      id="data-desa"
      ref={ref}
      className="section-padding bg-beige-50"
      aria-labelledby="data-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="divider-gold" />
            <span className="section-label">Data Desa</span>
            <div className="divider-gold" />
          </motion.div>

          <motion.h2
            id="data-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-heading mb-4"
          >
            Informasi{" "}
            <span className="text-natural italic">Desa Tegalgondo</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-charcoal/60 text-sm font-inter"
          >
            Data dan statistik desa yang terus diperbarui untuk transparansi
            informasi publik.
          </motion.p>
        </div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
          role="tablist"
          aria-label="Kategori data desa"
        >
          {villageDataCategories.map((category) => {
            const CatIcon = iconComponents[category.icon] || Users;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${category.id}`}
                id={`tab-${category.id}`}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-inter font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-forest text-white shadow-green"
                    : "bg-white border border-beige-200 text-charcoal/60 hover:border-natural/40 hover:text-natural"
                }`}
              >
                <CatIcon size={15} />
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {/* Data panel */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          id={`panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          className="max-w-3xl mx-auto"
        >
          {allPlaceholder ? (
            /* All data is placeholder — show "updating" state */
            <div className="rounded-3xl bg-white border border-beige-200 p-12 text-center shadow-soft">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-beige-100 mb-6">
                <RefreshCcw size={28} className="text-charcoal/30" />
              </div>
              <h3 className="font-playfair text-xl text-charcoal/50 mb-3">
                Data sedang diperbarui
              </h3>
              <p className="text-charcoal/40 text-sm font-inter leading-6">
                Data {current.label} Desa Tegalgondo sedang dalam proses
                pengumpulan dan verifikasi. Silakan periksa kembali dalam
                waktu dekat.
              </p>
              <p className="mt-4 text-charcoal/25 text-xs font-inter italic">
                * Developer: isi data di data/village.ts →
                villageDataCategories
              </p>
            </div>
          ) : (
            /* Show data items */
            <div className="rounded-3xl bg-white border border-beige-200 shadow-soft overflow-hidden">
              {/* Panel header */}
              <div className="bg-forest px-8 py-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold text-white">
                    {current.label}
                  </h3>
                  <p className="text-white/50 text-xs font-inter">
                    Data Desa Tegalgondo
                  </p>
                </div>
              </div>

              {/* Data list */}
              <div className="divide-y divide-beige-100">
                {current.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between px-8 py-4 hover:bg-beige-50/50 transition-colors"
                  >
                    <span className="text-charcoal/70 text-sm font-inter">
                      {item.label}
                    </span>
                    <div className="text-right">
                      <span
                        className={`font-inter font-semibold text-sm ${
                          item.status === "pending"
                            ? "text-charcoal/25 italic"
                            : item.status === "historical"
                            ? "text-charcoal/50"
                            : "text-forest"
                        }`}
                      >
                        {item.value}
                      </span>
                      {item.status === "historical" && (
                        <span className="block text-amber-500/60 text-[10px] font-inter mt-0.5 italic">
                          Historis
                        </span>
                      )}
                      {item.note && item.status !== "pending" && (
                        <span className="block text-charcoal/35 text-[10px] font-inter mt-0.5">
                          {item.note}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
