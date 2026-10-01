"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { EDITORIAL_CHAPTERS } from "@/data/editorial";

export default function EditorialBrandStory() {
  const [activeChapter, setActiveChapter] = useState(0);
  const chapter = EDITORIAL_CHAPTERS[activeChapter];

  return (
    <section className="relative w-full bg-graphite-900 py-32 md:py-44 overflow-hidden border-t border-white/5">
      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-brass" />
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-brass">
                EDITORIAL MONOGRAPH • CHAPTER 03
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-light leading-[1.08] tracking-tight max-w-3xl">
              Fifteen Years of <br />
              <span className="italic text-brass-bright font-normal">Architectural Discernment.</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-ivory-dim font-light max-w-md leading-relaxed">
            We do not act as an open marketplace. Dreams Realty functions as an architectural atelier,
            representing exclusively authenticated residences across Bangalore’s premier enclaves.
          </p>
        </div>

        {/* Chapter Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {EDITORIAL_CHAPTERS.map((item, idx) => (
            <button
              key={item.number}
              onClick={() => setActiveChapter(idx)}
              className={`text-left p-6 md:p-8 border transition-all duration-500 relative ${
                activeChapter === idx
                  ? "bg-graphite-950 border-brass shadow-2xl"
                  : "bg-graphite-950/40 border-white/5 hover:border-white/20 opacity-60 hover:opacity-100"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono tracking-[0.25em] text-brass">
                  {item.number}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ivory-dim/60">
                  {item.label}
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-ivory font-light">
                {item.title}
              </h3>
              {activeChapter === idx && (
                <motion.div
                  layoutId="activeChapterBar"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-brass-bright"
                />
              )}
            </button>
          ))}
        </div>

        {/* Active Chapter Presentation: Two-Column Asymmetrical Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Metrics */}
          <div className="lg:col-span-6 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={chapter.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="inline-block bg-brass/10 border border-brass/30 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-brass-bright">
                  VERIFIED DIRECTIVE {chapter.number}
                </div>

                <p className="font-serif text-2xl sm:text-3xl text-ivory font-light leading-snug">
                  "{chapter.lead}"
                </p>

                <p className="text-sm md:text-base text-ivory-dim font-light leading-relaxed">
                  {chapter.description}
                </p>

                {/* Metrics Readout */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                  {chapter.metrics.map((m, i) => (
                    <div key={i}>
                      <p className="font-serif text-2xl sm:text-3xl text-brass-bright font-light">
                        {m.value}
                      </p>
                      <p className="text-[11px] font-mono uppercase tracking-widest text-ivory-dim/70 mt-1">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Directive Action */}
                <div className="pt-6">
                  <Link
                    href="/about-us"
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-ivory hover:text-brass-bright transition-colors font-mono group"
                  >
                    <span>EXPLORE ATELIER HERITAGE</span>
                    <span className="w-8 h-[1px] bg-brass group-hover:w-14 transition-all duration-300" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Layered Architectural Blueprint & Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[450px] sm:h-[550px] bg-graphite-950 border border-white/10 overflow-hidden shadow-2xl p-8 flex flex-col justify-between">
              {/* Architectural Linework SVG Blueprint */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Elevation Grid Lines */}
                <path d="M50 550H550" stroke="#C5A880" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M50 400H550" stroke="#C5A880" strokeWidth="0.5" strokeDasharray="2 2" />
                <path d="M50 250H550" stroke="#C5A880" strokeWidth="0.5" strokeDasharray="2 2" />
                <path d="M50 100H550" stroke="#C5A880" strokeWidth="0.5" strokeDasharray="2 2" />
                {/* Structural Traces */}
                <rect x="120" y="160" width="160" height="390" stroke="#FFFFFF" strokeWidth="1" />
                <rect x="240" y="220" width="220" height="330" stroke="#C5A880" strokeWidth="1.2" />
                <line x1="240" y1="120" x2="350" y2="120" stroke="#C5A880" strokeWidth="1" />
                <circle cx="350" cy="120" r="3" fill="#C5A880" />
                <line x1="120" y1="550" x2="460" y2="550" stroke="#FFFFFF" strokeWidth="2" />
                {/* Coordinate Markers */}
                <text x="70" y="105" fill="#C5A880" fontSize="10" fontFamily="monospace">
                  EL. +120.00 M
                </text>
                <text x="70" y="255" fill="#C5A880" fontSize="10" fontFamily="monospace">
                  EL. +75.00 M
                </text>
                <text x="70" y="405" fill="#C5A880" fontSize="10" fontFamily="monospace">
                  EL. +30.00 M
                </text>
              </svg>

              {/* Offset High-Res Architectural Visual Card */}
              <div className="relative z-10 w-4/5 h-64 sm:h-80 ml-auto border border-white/15 overflow-hidden shadow-2xl">
                <Image
                  src="/images/about_us_architecture.jpg"
                  alt="Contemporary Bangalore Residential Architecture"
                  fill
                  className="object-cover object-center filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-brass">
                      ARCHITECTURAL DISCIPLINE
                    </p>
                    <p className="font-serif text-sm text-ivory">Stone, Glass & Daylight Dynamics</p>
                  </div>
                  <span className="text-[10px] font-mono text-ivory-dim/70">REF. 2009-2024</span>
                </div>
              </div>

              {/* Secondary Layered Technical Caption Box */}
              <div className="relative z-20 max-w-xs bg-graphite-900/90 backdrop-blur-xl border border-brass/30 p-5 mt-auto shadow-2xl">
                <p className="text-[10px] uppercase font-mono tracking-widest text-brass mb-1">
                  Institutional Affiliations
                </p>
                <p className="text-xs text-ivory font-light leading-relaxed">
                  Authorized advisory partner for Prestige, Sobha, Brigade, and Puravankara, backed by
                  direct HDFC, SBI, and ICICI institutional banking channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
