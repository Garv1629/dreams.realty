"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BANGALORE_LOCALITIES } from "@/data/editorial";
import SectionHeadingReveal from "@/components/animations/SectionHeadingReveal";

export default function PropertyDiscoveryMap() {
  const [selectedLoc, setSelectedLoc] = useState(BANGALORE_LOCALITIES[0]);
  const localities = BANGALORE_LOCALITIES;
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  return (
    <section
      id="property-discovery-section"
      className="relative w-full bg-[#F8F5ED] text-[#1F3A5F] py-24 md:py-32 px-6 md:px-12 border-t border-[#1F3A5F]/10 overflow-hidden"
    >
      <div className="max-w-[1560px] mx-auto">
        {/* Section Heading with Text-Mask Reveal */}
        <SectionHeadingReveal
          chapter="PROPERTIES BY LOCATION"
          title="Popular Areas in Bangalore"
          rightLabel="SELECT A LOCATION TO BROWSE PROPERTIES"
        />

        {/* Map Composition */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="relative min-h-[520px] bg-[#DCD3C4]/35 border border-[#1F3A5F]/15 overflow-hidden p-6 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-sm"
        >
          {/* Topographic Contour Vectors SVG Background */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
              <ellipse cx="500" cy="300" rx="420" ry="220" stroke="#4F7399" strokeWidth="0.8" strokeDasharray="4 4" />
              <ellipse cx="500" cy="300" rx="320" ry="170" stroke="#A7B8CC" strokeWidth="0.6" strokeDasharray="3 3" />
              <ellipse cx="500" cy="300" rx="220" ry="120" stroke="#1F3A5F" strokeWidth="0.8" strokeDasharray="2 2" />
              <ellipse cx="500" cy="300" rx="120" ry="70" stroke="#4F7399" strokeWidth="0.8" />
            </svg>
          </div>

          {/* Interactive Locality Cards with Staggered Entrance */}
          <div className="relative z-10 w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {localities.map((loc) => {
              const isSelected = selectedLoc.id === loc.id;
              return (
                <motion.button
                  key={loc.id}
                  variants={cardVariants}
                  onClick={() => setSelectedLoc(loc)}
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  className={`p-5 text-left border transition-all duration-200 ${
                    isSelected
                      ? "bg-[#F8F5ED] border-2 border-[#1F3A5F] text-[#1F3A5F] shadow-sm"
                      : "bg-[#F8F5ED]/75 border-[#1F3A5F]/15 text-[#1F3A5F]/80 hover:bg-[#F8F5ED] hover:border-[#4F7399]"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#4F7399] font-semibold">
                      {loc.name.toUpperCase()}
                    </span>
                    <span className="text-[10px] font-mono text-[#1F3A5F]/60">
                      {loc.mapCoords}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-[#1F3A5F] font-normal mb-1">{loc.name}</h4>
                  <p className="text-xs text-[#1F3A5F]/70 font-light">{loc.character}</p>
                </motion.button>
              );
            })}
          </div>

          {/* Selected Locality Detail Panel with Soft Entrance */}
          <motion.div
            variants={cardVariants}
            className="relative z-10 w-full lg:w-1/2 bg-[#F8F5ED] border border-[#1F3A5F]/15 p-8 sm:p-10 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#1F3A5F]/15 pb-4">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#4F7399] font-semibold">
                  ACTIVE CORRIDOR SELECTION
                </span>
                <span className="text-xs font-mono text-[#1F3A5F]/70">
                  {selectedLoc.mapCoords}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1F3A5F] font-normal mb-2">
                  {selectedLoc.name}
                </h3>
                <p className="text-sm text-[#1F3A5F]/80 font-light leading-relaxed">
                  {selectedLoc.tagline} • {selectedLoc.character}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1F3A5F]/15 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-[#1F3A5F]/60 block mb-1">FEATURED RESIDENCE</span>
                  <span className="text-[#1F3A5F] font-semibold">{selectedLoc.highlightProperty.title}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#1F3A5F]/60 block mb-1">ACTIVE MANDATES</span>
                  <span className="text-[#1F3A5F] font-serif text-lg font-semibold block">
                    {selectedLoc.propertiesCount} Verified Listings
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#1F3A5F]/15">
              <Link
                href={`/property-for-sale?location=${encodeURIComponent(selectedLoc.name)}`}
                className="inline-flex items-center gap-3 bg-[#1F3A5F] hover:bg-[#4F7399] text-[#F8F5ED] font-serif text-xs uppercase tracking-[0.2em] font-semibold py-3.5 px-8 transition-colors shadow-sm"
              >
                <span>Explore {selectedLoc.name} Inventory</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
