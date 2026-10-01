"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MOCK_PROPERTIES, Property } from "@/data/properties";

export default function FeaturedPropertiesSection() {
  const shouldReduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<"All" | "Sale" | "Rent">("All");

  const displayedProperties = MOCK_PROPERTIES.filter((p) => {
    if (filter === "All") return true;
    return p.purpose === filter;
  });

  return (
    <section id="featured-section" className="py-24 bg-[#F8F5ED] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#4F7399] block mb-2">
              Curated Bangalore Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F3A5F] leading-tight">
              Featured Properties
            </h2>
          </motion.div>

          {/* Filter Pills */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 bg-white/70 backdrop-blur-md p-1.5 rounded-full border border-[#1F3A5F]/10 w-fit"
          >
            {(["All", "Sale", "Rent"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`text-xs uppercase tracking-[0.16em] font-semibold px-5 py-2 rounded-full transition-all duration-200 ${
                  filter === tab
                    ? "bg-[#1F3A5F] text-[#F8F5ED] shadow-sm"
                    : "text-[#1F3A5F]/70 hover:text-[#1F3A5F]"
                }`}
              >
                {tab === "All" ? "All Homes" : tab === "Sale" ? "To Buy" : "To Rent"}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProperties.slice(0, 6).map((property, idx) => (
            <motion.div
              key={property.id}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-[20px] overflow-hidden border border-[#DCD3C4]/60 shadow-[0_8px_30px_rgba(31,58,95,0.05)] hover:shadow-[0_16px_40px_rgba(31,58,95,0.1)] transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#DCD3C4]/30">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {/* Purpose Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full backdrop-blur-md shadow-xs ${
                      property.purpose === "Sale"
                        ? "bg-[#1F3A5F]/90 text-white"
                        : "bg-[#4F7399]/90 text-white"
                    }`}
                  >
                    For {property.purpose}
                  </span>
                </div>

                {/* Developer Tag */}
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] uppercase tracking-[0.16em] font-semibold px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#1F3A5F]">
                    {property.developer}
                  </span>
                </div>

                {/* Price Pill Over Image Bottom */}
                <div className="absolute bottom-4 left-4">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                    {property.price}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#4F7399] mb-2 font-medium">
                    <span>📍</span>
                    <span>{property.location}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1F3A5F] group-hover:text-[#4F7399] transition-colors mb-3">
                    {property.title}
                  </h3>

                  <p className="text-xs text-[#1F3A5F]/75 line-clamp-2 leading-relaxed mb-4">
                    {property.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#1F3A5F]/10 text-xs text-[#1F3A5F]/80">
                    <div className="flex items-center gap-2">
                      <span className="text-[#4F7399]">🛏️</span>
                      <span>{property.configuration || `${property.bhk} BHK`}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#4F7399]">📐</span>
                      <span>{property.area}</span>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-5 mt-4 border-t border-[#1F3A5F]/10 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#4F7399]">
                    {property.type}
                  </span>
                  <Link
                    href={`/property/${property.id}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-bold text-[#1F3A5F] group-hover:text-[#4F7399] transition-colors"
                  >
                    <span>View Property</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <Link
            href="/property-for-sale"
            className="inline-flex items-center gap-3 bg-white hover:bg-[#1F3A5F] text-[#1F3A5F] hover:text-[#F8F5ED] text-xs uppercase tracking-[0.2em] font-bold py-4 px-8 rounded-full border border-[#1F3A5F]/20 shadow-sm transition-all duration-300 hover:shadow-[0_8px_24px_rgba(31,58,95,0.15)]"
          >
            <span>Explore All Bangalore Properties</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
