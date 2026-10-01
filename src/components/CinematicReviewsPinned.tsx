"use client";
import React, { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { AUTHENTIC_REVIEWS } from "@/data/editorial";
import SectionHeadingReveal from "@/components/animations/SectionHeadingReveal";

export default function CinematicReviewsPinned() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const reviews = AUTHENTIC_REVIEWS;
  const current = reviews[currentIdx];
  const shouldReduceMotion = useReducedMotion();

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const itemFadeUp = (delay: number) => ({
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  });

  return (
    <section
      id="reviews-section"
      className="relative w-full bg-[#F8F5ED] text-[#1F3A5F] py-24 md:py-32 px-6 md:px-12 border-t border-[#1F3A5F]/10 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading with Text-Mask Reveal */}
        <SectionHeadingReveal
          chapter="CUSTOMER REVIEWS"
          title="Our Customer Reviews (Google)"
          rightLabel="VERIFIED 5-STAR REVIEWS"
        />

        {/* Carousel Controls Bar */}
        <div className="flex items-center justify-between pb-6 mb-6">
          <div className="text-xs font-mono tracking-widest text-[#1F3A5F]">
            <span className="text-[#1F3A5F] font-bold">0{currentIdx + 1}</span>
            <span className="mx-2 text-[#1F3A5F]/30">/</span>
            <span className="text-[#1F3A5F]/60">0{reviews.length}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="w-10 h-10 border border-[#1F3A5F]/20 hover:border-[#4F7399] text-[#1F3A5F] bg-[#F8F5ED] hover:bg-[#DCD3C4]/40 flex items-center justify-center transition-colors shadow-sm"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="w-10 h-10 border border-[#1F3A5F]/20 hover:border-[#4F7399] text-[#1F3A5F] bg-[#F8F5ED] hover:bg-[#DCD3C4]/40 flex items-center justify-center transition-colors shadow-sm"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Active Testimonial Card with Sequential Reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#DCD3C4]/40 border border-[#1F3A5F]/15 p-8 sm:p-14 lg:p-16 relative shadow-sm"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial="hidden"
              animate="visible"
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10, transition: { duration: 0.25 } }}
              className="space-y-6"
            >
              {/* 1. Quote Mark (First) */}
              <motion.span
                variants={itemFadeUp(0)}
                className="font-serif text-6xl sm:text-8xl text-[#A7B8CC] select-none leading-none block"
              >
                “
              </motion.span>

              {/* 2. Review Text (Second) */}
              <motion.blockquote
                variants={itemFadeUp(0.15)}
                className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1F3A5F] font-normal leading-relaxed tracking-tight max-w-5xl"
              >
                {current.quote}
              </motion.blockquote>

              {/* 3. Reviewer Name & 4. Rating in Sequence */}
              <div className="pt-10 mt-10 border-t border-[#1F3A5F]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <motion.div variants={itemFadeUp(0.3)}>
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-xl text-[#1F3A5F] font-medium">
                      {current.author}
                    </span>
                    <span className="bg-[#A7B8CC]/30 text-[#1F3A5F] text-[9px] uppercase font-mono px-2 py-0.5 tracking-wider font-semibold">
                      VERIFIED PATRON
                    </span>
                  </div>
                  <span className="text-xs text-[#1F3A5F]/70 font-mono mt-1 block">
                    {current.role} • {current.location}
                  </span>
                </motion.div>

                {/* 4. Rating Stars (Fourth) */}
                <motion.div
                  variants={itemFadeUp(0.42)}
                  className="flex items-center gap-1 text-[#4F7399] text-base"
                >
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
