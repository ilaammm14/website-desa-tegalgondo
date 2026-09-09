"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Wheat,
  Store,
  Users,
  Music2,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { potentials } from "@/data/potentials";
import type { Potential } from "@/data/potentials";

const iconMap: Record<string, LucideIcon> = {
  Wheat,
  Store,
  Users,
  Music2,
  Leaf,
};

const gradients = [
  "from-forest via-natural to-leaf",
  "from-natural via-leaf to-leaf/50",
  "from-forest-700 via-natural to-forest",
  "from-gold/70 via-natural to-forest",
  "from-leaf via-natural-300 to-forest",
  "from-forest-800 via-forest to-natural",
];

function PotentialCard({
  item,
  index,
  isInView,
}: {
  item: Potential;
  index: number;
  isInView: boolean;
}) {
  const Icon = iconMap[item.icon] || Leaf;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.1,
      }}
      className="group relative overflow-hidden rounded-3xl bg-white border border-beige-200 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-1"
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-beige-100">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${gradients[index % 6]} transition-transform duration-700 group-hover:scale-105`}
          />
        )}

        {/* Icon badge */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
          <Icon size={18} className="text-white" />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-playfair text-xl font-semibold text-forest">
            {item.title}
          </h3>
          <div className="w-9 h-9 rounded-xl bg-natural/10 flex items-center justify-center flex-shrink-0 ml-3">
            <Icon size={18} className="text-natural" />
          </div>
        </div>

        {/* Description */}
        <p className="text-charcoal/65 text-sm leading-6 font-inter line-clamp-3">
          {item.description}
        </p>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="tag text-xs bg-natural/10 text-natural"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-natural to-leaf scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.article>
  );
}

export default function Potentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="potensi"
      ref={ref}
      className="section-padding bg-beige-50"
      aria-labelledby="potentials-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-3 mb-6"
            >
              <div className="divider-gold" />
              <span className="section-label">Potensi Desa</span>
            </motion.div>

            <motion.h2
              id="potentials-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-heading"
            >
              Potensi{" "}
              <span className="text-natural italic">Tegalgondo</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-charcoal/60 font-inter text-sm leading-7 max-w-sm"
          >
            Sumber daya dan kekuatan yang tumbuh bersama masyarakat Desa
            Tegalgondo. Informasi berdasarkan sumber yang tersedia.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {potentials.map((item, index) => (
            <PotentialCard
              key={item.id}
              item={item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
