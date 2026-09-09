"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Tag, ImageIcon } from "lucide-react";
import {
  activities,
  activityCategoryLabels,
  activityCategoryColors,
} from "@/data/activities";

export default function Activities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Gradient per category
  const getCategoryGradient = (index: number) => {
    const gradients = [
      "from-forest via-natural to-leaf",
      "from-natural-700 to-leaf",
      "from-gold/60 via-natural to-forest",
      "from-forest-800 to-natural-500",
      "from-leaf-700 to-forest",
      "from-natural to-forest-800",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section
      id="kegiatan"
      ref={ref}
      className="section-padding bg-beige-50 w-full max-w-full overflow-hidden"
      aria-labelledby="activities-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-3 mb-6"
            >
              <div className="divider-gold" />
              <span className="section-label">Kegiatan</span>
            </motion.div>

            <motion.h2
              id="activities-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-heading"
            >
              Kegiatan{" "}
              <span className="text-natural italic">Desa Tegalgondo</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-charcoal/60 text-sm font-inter leading-7 max-w-xs"
          >
            Dokumentasi berbagai kegiatan dan program yang dilaksanakan oleh
            pemerintah dan masyarakat Desa Tegalgondo.
          </motion.p>
        </div>

        {/* Activities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.article
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-white rounded-3xl overflow-hidden border border-beige-200 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-400"
            >
              {/* Image area */}
              <div
                className={`relative aspect-[16/9] overflow-hidden ${
                  activity.isPlaceholder
                    ? `bg-gradient-to-br ${getCategoryGradient(index)}`
                    : "bg-beige-100"
                }`}
              >
                {!activity.isPlaceholder ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <>
                    {/* Icon overlay for placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ImageIcon size={32} className="text-white/20" />
                    </div>
                    {/* Hover scale */}
                    <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/30 transition-colors duration-300" />
                  </>
                )}

                {!activity.isPlaceholder && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                )}

                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`tag text-[10px] font-semibold ${
                      activityCategoryColors[activity.category]
                    } bg-white/90 backdrop-blur-sm`}
                  >
                    {activityCategoryLabels[activity.category]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date & Location */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1.5 text-charcoal/40 text-xs font-inter">
                    <Calendar size={12} />
                    <span
                      className={
                        activity.date.startsWith("[")
                          ? "italic text-charcoal/30"
                          : ""
                      }
                    >
                      {activity.date}
                    </span>
                  </div>
                  {activity.location && (
                    <div className="flex items-center gap-1.5 text-charcoal/40 text-xs font-inter">
                      <MapPin size={12} />
                      <span
                        className={`truncate max-w-[120px] ${
                          activity.location.startsWith("[")
                            ? "italic text-charcoal/30"
                            : ""
                        }`}
                      >
                        {activity.location}
                      </span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3
                  className={`font-playfair text-lg font-semibold mb-3 leading-tight ${
                    activity.title.startsWith("[")
                      ? "text-charcoal/30 italic text-base"
                      : "text-forest"
                  }`}
                >
                  {activity.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm font-inter leading-6 line-clamp-3 ${
                    activity.description.startsWith("[")
                      ? "text-charcoal/30 italic"
                      : "text-charcoal/65"
                  }`}
                >
                  {activity.description}
                </p>

                {/* Organizer */}
                {activity.organizer && !activity.organizer.startsWith("[") && (
                  <div className="mt-4 pt-4 border-t border-beige-100 flex items-center gap-2">
                    <Tag size={11} className="text-charcoal/30" />
                    <span className="text-charcoal/40 text-xs font-inter">
                      {activity.organizer}
                    </span>
                  </div>
                )}

                {/* Placeholder note */}
                {activity.isPlaceholder && (
                  <p className="mt-3 text-charcoal/25 text-[10px] font-inter italic">
                    * Data belum diisi — perbarui di data/activities.ts
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
