"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AUTHENTIC_REVIEWS } from "@/data/editorial";

export default function EditorialReviews() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const reviews = AUTHENTIC_REVIEWS;
  const current = reviews[currentIdx];

  // Subtle auto-advance every 9 seconds, or manual control
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % reviews.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="relative w-full bg-graphite-950 py-36 md:py-48 overflow-hidden border-t border-white/5">
      {/* Calm Architectural Visual Backdrop with Shallow Depth & Slow Ambient Light */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about_us_architecture.jpg"
          alt="Architectural Visual Texture"
          fill
          className="object-cover object-center filter blur-xl scale-110 opacity-20"
        />
        {/* Soft Ambient Light Drift */}
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/85 to-graphite-950" />
        <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Marker */}
        <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-16">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-brass" />
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-brass">
              PROVENANCE & CLIENT TESTIMONY
            </span>
          </div>

          <div className="text-xs font-mono tracking-widest text-ivory-dim">
            <span className="text-brass-bright font-bold">0{currentIdx + 1}</span>
            <span className="mx-2 text-white/20">/</span>
            <span>0{reviews.length}</span>
          </div>
        </div>

        {/* Large Pull Quote Exhibition */}
        <div className="min-h-[300px] sm:min-h-[340px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ivory font-light leading-[1.25] tracking-tight">
                "{current.quote}"
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/10">
                <div>
                  <p className="font-serif text-xl sm:text-2xl text-brass-bright font-normal">
                    {current.author}
                  </p>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-ivory-dim mt-1">
                    {current.role} • {current.location}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 bg-graphite-900 border border-white/10 px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-widest text-brass-bright">
                    <span>★ ★ ★ ★ ★</span>
                    <span className="text-white/40 ml-1">({current.source})</span>
                  </span>
                  <span className="text-xs font-mono text-ivory-dim/60">
                    {current.year}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subtle Architectural Pagination Buttons */}
        <div className="flex items-center gap-2 mt-16 pt-8 border-t border-white/10">
          {reviews.map((r, i) => (
            <button
              key={r.id}
              onClick={() => setCurrentIdx(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-[2px] transition-all duration-500 ${
                currentIdx === i ? "w-16 bg-brass-bright" : "w-6 bg-white/10 hover:bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Institutional Partner Colophon (Real Builders & Banks) */}
        <div className="mt-24 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-12 text-xs font-mono text-ivory-dim/60">
          <div>
            <p className="uppercase tracking-[0.25em] text-brass mb-3">
              REPRESENTED DEVELOPER ATELIERS
            </p>
            <p className="leading-relaxed tracking-wider">
              Prestige Group • Sobha Developers • Brigade Group • Puravankara • Total Environment • Embassy Group • Godrej Properties
            </p>
          </div>
          <div>
            <p className="uppercase tracking-[0.25em] text-brass mb-3">
              INSTITUTIONAL BANKING CHANNELS
            </p>
            <p className="leading-relaxed tracking-wider">
              HDFC Bank Home Loans • State Bank of India (SBI) • ICICI Bank Wealth • Axis Bank
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
