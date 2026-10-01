"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AUTHENTIC_REVIEWS } from "@/data/editorial";

export default function ReviewsEditorial() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  const reviews = AUTHENTIC_REVIEWS;
  const current = reviews[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current || !bgImageRef.current) return;

      // Slow background image drift on scroll
      gsap.fromTo(
        bgImageRef.current,
        { y: -40, scale: 1.1 },
        {
          y: 40,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-graphite-950 py-36 md:py-48 overflow-hidden border-t border-white/5"
    >
      {/* Slow Moving Architectural Background with Shallow Depth */}
      <div ref={bgImageRef} className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/about_us_architecture.jpg"
          alt="Architectural Backdrop"
          fill
          className="object-cover object-center filter blur-2xl opacity-15 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/90 to-graphite-950" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Top Provenance Header & Controls */}
        <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-16">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-brass" />
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-brass">
              CLIENT TESTIMONY • VERIFIED REPUTATION
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-xs font-mono tracking-widest text-ivory-dim">
              <span className="text-brass-bright font-bold">0{currentIdx + 1}</span>
              <span className="mx-2 text-white/20">/</span>
              <span>0{reviews.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-11 h-11 border border-white/10 hover:border-brass text-ivory flex items-center justify-center transition-colors group"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
                  <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-11 h-11 border border-white/10 hover:border-brass text-ivory flex items-center justify-center transition-colors group"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Large Editorial Quote */}
        <div className="min-h-[300px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -25, filter: "blur(6px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ivory font-light leading-[1.28] tracking-tight">
                "{current.quote}"
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/10">
                <div>
                  <p className="font-serif text-2xl text-brass-bright font-normal">
                    {current.author}
                  </p>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-ivory-dim mt-1">
                    {current.role} • {current.location}
                  </p>
                </div>

                <div className="flex items-center gap-4">
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

        {/* Architectural Pagination Lines */}
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

        {/* Builder & Bank Partner Monograph */}
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
