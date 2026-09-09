"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ImageIcon } from "lucide-react";
import { galleryItems, galleryCategories } from "@/data/gallery";
import type { GalleryCategory } from "@/data/gallery";

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("semua");

  const filtered =
    activeCategory === "semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  // Assign different aspect ratios to create masonry-like effect
  const getAspect = (index: number) => {
    const patterns = [
      "aspect-square",
      "aspect-[3/4]",
      "aspect-[4/3]",
      "aspect-[3/4]",
      "aspect-square",
      "aspect-[4/3]",
      "aspect-[3/4]",
      "aspect-square",
      "aspect-[4/3]",
      "aspect-square",
      "aspect-[3/4]",
      "aspect-[4/3]",
    ];
    return patterns[index % patterns.length];
  };

  // Gradient colors for placeholders
  const getGradient = (index: number) => {
    const gradients = [
      "from-forest via-natural to-leaf",
      "from-natural-700 via-leaf to-leaf/60",
      "from-forest-800 via-natural to-forest-500",
      "from-leaf-700 via-natural-400 to-forest",
      "from-forest via-forest-600 to-natural",
      "from-natural-600 via-leaf-400 to-leaf-200",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section
      id="galeri"
      ref={ref}
      className="section-padding bg-white"
      aria-labelledby="gallery-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-3 mb-6"
            >
              <div className="divider-gold" />
              <span className="section-label">Galeri</span>
            </motion.div>

            <motion.h2
              id="gallery-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-heading"
            >
              Potret{" "}
              <span className="text-natural italic">Tegalgondo</span>
            </motion.h2>
          </div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter galeri"
          >
            {galleryCategories.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setActiveCategory(value)}
                aria-pressed={activeCategory === value}
                className={`px-4 py-2 rounded-xl text-xs font-inter font-semibold tracking-wide transition-all duration-300 ${
                  activeCategory === value
                    ? "bg-forest text-white shadow-green"
                    : "bg-beige-50 text-charcoal/60 hover:bg-beige-100 hover:text-charcoal border border-beige-200"
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-charcoal/40">
                <ImageIcon size={40} className="mx-auto mb-4 opacity-30" />
                <p className="font-inter text-sm">
                  Belum ada foto pada kategori ini.
                </p>
              </div>
            ) : (
              <div className="columns-2 md:columns-3 lg:columns-4 gap-3 [column-gap:0.75rem]">
                {filtered.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="break-inside-avoid mb-3 group cursor-pointer"
                  >
                    <div
                      className={`relative ${getAspect(index)} rounded-2xl overflow-hidden bg-beige-100`}
                    >
                      {/* Real image or gradient fallback */}
                      {item.isPlaceholder ? (
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${getGradient(
                            index
                          )} transition-transform duration-700 group-hover:scale-105`}
                        />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-forest/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-start justify-end p-4">
                        <span className="tag bg-gold/30 text-white text-[10px] mb-2 capitalize">
                          {item.category}
                        </span>
                        <h3 className="font-playfair text-sm font-semibold text-white leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Spacer bottom */}
        <div className="mt-6" />
      </div>
    </section>
  );
}
