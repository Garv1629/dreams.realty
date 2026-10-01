"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Property, MOCK_PROPERTIES } from "@/data/properties";

export default function CinematicGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const properties = MOCK_PROPERTIES;
  const current = properties[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % properties.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-graphite-950 py-24 md:py-32 overflow-hidden flex flex-col justify-between border-t border-white/5">
      {/* Background Architectural Watermark */}
      <div className="absolute top-12 right-12 text-[14vw] font-serif text-white/[0.02] select-none pointer-events-none leading-none">
        0{activeIndex + 1}
      </div>

      {/* Top Gallery Header */}
      <div className="max-w-[1560px] mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-12 h-[1px] bg-brass" />
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-brass">
              EXHIBITION GALLERY • AUTUMN SELECTION
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-light tracking-tight">
            Curated Architectural Works
          </h2>
        </div>

        {/* Gallery Navigation Controls */}
        <div className="flex items-center gap-6">
          <div className="text-xs font-mono tracking-widest text-ivory-dim">
            <span className="text-brass-bright font-bold">0{activeIndex + 1}</span>
            <span className="mx-2 text-white/20">/</span>
            <span>0{properties.length}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Property"
              className="w-12 h-12 border border-white/10 hover:border-brass text-ivory flex items-center justify-center transition-colors group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="group-hover:-translate-x-0.5 transition-transform"
              >
                <path
                  d="M10 13L5 8L10 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Property"
              className="w-12 h-12 border border-white/10 hover:border-brass text-ivory flex items-center justify-center transition-colors group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path
                  d="M6 3L11 8L6 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Single Large Property Exhibition Canvas */}
      <div className="max-w-[1560px] mx-auto w-full px-6 md:px-12 flex-1 flex flex-col justify-center">
        <div className="relative w-full h-[60vh] min-h-[500px] max-h-[750px] overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Full-bleed Architectural Photography */}
              <Image
                src={current.images[0]}
                alt={current.title}
                fill
                priority
                sizes="(max-width: 1560px) 100vw, 1560px"
                className="object-cover object-center filter brightness-[0.88] group-hover:scale-105 transition-transform duration-1000 ease-out"
              />

              {/* Architectural Film Gradient Layers */}
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/80 via-transparent to-transparent hidden md:block" />

              {/* Overlay Metadata & Floating Slate */}
              <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-between pointer-events-none">
                {/* Top Badge Indicators */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="bg-graphite-950/90 text-ivory text-[10px] uppercase font-mono tracking-[0.25em] px-4 py-2 border border-white/10 backdrop-blur-md">
                      {current.purpose === "Sale" ? "ACQUISITION" : "LEASEHOLD"}
                    </span>
                    <span className="bg-brass/90 text-graphite-950 text-[10px] uppercase font-mono tracking-[0.25em] px-4 py-2 font-bold backdrop-blur-md">
                      {current.type}
                    </span>
                  </div>

                  <span className="hidden md:inline-block text-xs font-mono tracking-[0.2em] text-ivory-dim/70">
                    DEV: {current.developer.toUpperCase()}
                  </span>
                </div>

                {/* Bottom Architectural Story & Specs */}
                <div className="max-w-2xl pointer-events-auto">
                  <p className="text-xs uppercase font-mono tracking-[0.25em] text-brass-bright mb-2">
                    {current.location}
                  </p>
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory font-light leading-tight mb-4 drop-shadow-lg">
                    {current.title}
                  </h3>
                  <p className="text-sm md:text-base text-ivory-dim line-clamp-2 md:line-clamp-3 mb-8 leading-relaxed font-light">
                    {current.description}
                  </p>

                  {/* Architectural Specs Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-t border-b border-white/15 backdrop-blur-sm mb-8">
                    <div>
                      <p className="text-[10px] uppercase font-mono tracking-widest text-ivory-dim/70">
                        Configuration
                      </p>
                      <p className="font-serif text-lg text-ivory mt-0.5">{current.configuration || `${current.bhk} BHK`}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-mono tracking-widest text-ivory-dim/70">
                        Total Extent
                      </p>
                      <p className="font-serif text-lg text-ivory mt-0.5">{current.area}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-mono tracking-widest text-ivory-dim/70">
                        Orientation
                      </p>
                      <p className="font-serif text-lg text-ivory mt-0.5">{current.facing} Facing</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-mono tracking-widest text-ivory-dim/70">
                        Valuation
                      </p>
                      <p className="font-serif text-lg text-brass-bright font-bold mt-0.5">{current.price}</p>
                    </div>
                  </div>

                  {/* Direct Actions */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href={`/property/${current.id}`}
                      className="bg-ivory text-graphite-950 font-serif text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 hover:bg-brass transition-colors shadow-xl"
                    >
                      Examine Monograph
                    </Link>
                    <Link
                      href={`/contact-us?property=${encodeURIComponent(current.title)}`}
                      className="border border-white/20 bg-graphite-950/60 backdrop-blur-md text-ivory font-serif text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 hover:border-brass hover:text-brass transition-colors"
                    >
                      Request Private Viewing
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          {properties.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveIndex(idx)}
              className={`relative text-left p-4 border transition-all duration-300 ${
                activeIndex === idx
                  ? "border-brass bg-graphite-900 shadow-lg"
                  : "border-white/5 bg-graphite-950/40 hover:border-white/20 opacity-60 hover:opacity-100"
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-mono tracking-widest text-brass">
                  0{idx + 1}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-ivory-dim/60">
                  {p.purpose.toUpperCase()}
                </span>
              </div>
              <p className="font-serif text-sm text-ivory line-clamp-1">{p.title}</p>
              <p className="text-xs text-brass-bright font-mono mt-1">{p.price}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
