"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Share2,
  Clock,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { villageInfo } from "@/data/village";

type ContactItemProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  isPlaceholder?: boolean;
  href?: string;
  delay: number;
  isInView: boolean;
};

function ContactItem({
  icon: Icon,
  label,
  value,
  isPlaceholder,
  href,
  delay,
  isInView,
}: ContactItemProps) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div className="w-11 h-11 rounded-xl bg-natural/10 flex items-center justify-center flex-shrink-0 group-hover:bg-natural/20 transition-colors duration-300">
        <Icon size={20} className="text-natural" />
      </div>
      <div>
        <span className="block text-[10px] font-inter font-semibold tracking-widest uppercase text-charcoal/40 mb-1">
          {label}
        </span>
        <span
          className={`block font-inter text-sm leading-6 ${
            isPlaceholder
              ? "text-charcoal/35 italic"
              : href
              ? "text-natural hover:text-forest transition-colors duration-200"
              : "text-charcoal/80"
          }`}
        >
          {value}
        </span>
      </div>
      {href && !isPlaceholder && (
        <ExternalLink
          size={14}
          className="text-natural/40 mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {href && !isPlaceholder ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={`${label}: ${value}`}
        >
          {content}
        </a>
      ) : (
        <div>{content}</div>
      )}
    </motion.div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { contact } = villageInfo;

  // Cek apakah data belum tersedia
  const isPending = (val: string) =>
    val.startsWith("[") ||
    val === "Data belum tersedia" ||
    val.toLowerCase().includes("belum tersedia");

  return (
    <section
      id="kontak"
      ref={ref}
      className="section-padding bg-cream"
      aria-labelledby="contact-heading"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left: heading */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-3 mb-6"
            >
              <div className="divider-gold" />
              <span className="section-label">Kontak</span>
            </motion.div>

            <motion.h2
              id="contact-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-heading mb-6"
            >
              Terhubung dengan{" "}
              <span className="text-natural italic">
                Desa Tegalgondo
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="prose-village text-sm leading-7 mb-10 max-w-sm"
            >
              Kami senang mendengar dari Anda. Silakan hubungi kantor desa
              pada jam operasional untuk mendapatkan informasi lebih lanjut.
            </motion.p>

            {/* Office hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 px-5 py-4 rounded-2xl bg-natural/5 border border-natural/15"
            >
              <Clock size={18} className="text-natural flex-shrink-0" />
              <div>
                <span className="block text-[10px] font-inter font-semibold tracking-widest uppercase text-charcoal/40 mb-0.5">
                  Jam Pelayanan
                </span>
                <span className="text-charcoal/80 text-sm font-inter">
                  {villageInfo.officeHours}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: contact info */}
          <div className="space-y-6">
            <ContactItem
              icon={MapPin}
              label="Alamat"
              value={contact.address}
              isPlaceholder={isPending(contact.address)}
              delay={0.15}
              isInView={isInView}
            />
            <ContactItem
              icon={Phone}
              label="Telepon"
              value={contact.phone}
              isPlaceholder={isPending(contact.phone)}
              href={isPending(contact.phone) ? undefined : `tel:${contact.phone}`}
              delay={0.2}
              isInView={isInView}
            />
            <ContactItem
              icon={Mail}
              label="Email"
              value={contact.email}
              isPlaceholder={isPending(contact.email)}
              href={isPending(contact.email) ? undefined : `mailto:${contact.email}`}
              delay={0.25}
              isInView={isInView}
            />
            <ContactItem
              icon={Share2}
              label="Instagram"
              value={
                isPending(contact.instagram)
                  ? contact.instagram
                  : `@${contact.instagram}`
              }
              isPlaceholder={isPending(contact.instagram)}
              href={
                isPending(contact.instagram)
                  ? undefined
                  : `https://instagram.com/${contact.instagram}`
              }
              delay={0.3}
              isInView={isInView}
            />
            <ContactItem
              icon={Globe}
              label="Facebook"
              value={contact.facebook}
              isPlaceholder={isPending(contact.facebook)}
              href={
                isPending(contact.facebook)
                  ? undefined
                  : `https://facebook.com/${contact.facebook}`
              }
              delay={0.35}
              isInView={isInView}
            />
            <ContactItem
              icon={MapPin}
              label="Google Maps"
              value="Lihat di Google Maps"
              isPlaceholder={false}
              href={contact.googleMapsUrl}
              delay={0.4}
              isInView={isInView}
            />

            {/* Catatan data */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-charcoal/30 text-xs font-inter italic pt-4 border-t border-beige-200"
            >
              * Data kontak yang belum tersedia akan diperbarui setelah konfirmasi
              dari Pemerintah Desa Tegalgondo.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
