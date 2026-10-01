"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeadingReveal from "@/components/animations/SectionHeadingReveal";

export default function BuyVsRentSplit() {
  const shouldReduceMotion = useReducedMotion();

  const buyPanelVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, x: 0 }
      : { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const rentPanelVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, x: 0 }
      : { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const buttonFadeVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.35,
        ease: "easeOut"
      }
    }
  };

  const imageRevealVariants = {
    hidden: shouldReduceMotion
      ? { scale: 1 }
      : { scale: 1.12 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      id="buy-vs-rent-section"
      className="relative w-full bg-[#DCD3C4]/35 text-[#1F3A5F] py-24 md:py-32 px-6 md:px-12 border-t border-[#1F3A5F]/10 overflow-hidden"
    >
      <div className="max-w-[1560px] mx-auto">
        {/* Section Heading with Text Mask Reveal */}
        <SectionHeadingReveal
          chapter="BUY OR RENT"
          title="Buy or Rent a Property"
          rightLabel="CHOOSE YOUR PATHWAY"
        />

        {/* Split Cards Container: Buy enters from left, Rent enters from right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[520px]">
          {/* Left: Purchase Journey (Enters from Left) */}
          <motion.div
            variants={buyPanelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative min-h-[440px] p-8 sm:p-12 flex flex-col justify-end bg-[#F8F5ED] border border-[#1F3A5F]/15 overflow-hidden group shadow-sm hover:shadow-xl transition-[border-color,box-shadow] duration-300 hover:border-[#4F7399]"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <motion.div variants={imageRevealVariants} className="relative w-full h-full">
                <Image
                  src="/images/hero_fallback_desktop.jpg"
                  alt="Daylight Architecture Bangalore - Purchase"
                  fill
                  className="object-cover object-center filter brightness-[1.02] contrast-95 opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#F8F5ED] via-[#F8F5ED]/80 to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-lg space-y-4">
              <span className="inline-block bg-[#1F3A5F] text-[#F8F5ED] text-[10px] font-mono uppercase tracking-[0.25em] px-3.5 py-1.5 font-bold">
                PERMANENCE • ACQUISITION
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#1F3A5F] font-normal leading-tight">
                Generational Estates & Private Sanctuaries
              </h3>
              <p className="text-sm text-[#1F3A5F]/80 font-light leading-relaxed">
                Unencumbered freehold properties, verified title deeds, and bespoke villas in Bangalore's
                most enduring addresses.
              </p>
              
              {/* Button fades upward after content */}
              <motion.div variants={buttonFadeVariants} className="pt-4">
                <Link
                  href="/property-for-sale"
                  className="inline-flex items-center gap-3 bg-[#1F3A5F] hover:bg-[#4F7399] text-[#F8F5ED] font-serif text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 transition-colors shadow-sm"
                >
                  <span>Inspect Sale Portfolio</span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Leasehold Journey (Enters from Right) */}
          <motion.div
            variants={rentPanelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative min-h-[440px] p-8 sm:p-12 flex flex-col justify-end bg-[#DCD3C4]/60 border border-[#1F3A5F]/15 overflow-hidden group shadow-sm hover:shadow-xl transition-[border-color,box-shadow] duration-300 hover:border-[#4F7399]"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <motion.div variants={imageRevealVariants} className="relative w-full h-full">
                <Image
                  src="/images/pattern_subtle.jpg"
                  alt="Evening Atmosphere Bangalore - Rent"
                  fill
                  className="object-cover object-center filter brightness-[1.05] contrast-95 opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#DCD3C4] via-[#DCD3C4]/85 to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-lg space-y-4">
              <span className="inline-block bg-[#4F7399] text-[#F8F5ED] text-[10px] font-mono uppercase tracking-[0.25em] px-3.5 py-1.5 font-bold">
                FLEXIBILITY • LEASEHOLD
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#1F3A5F] font-normal leading-tight">
                Sky Suites & Executive Penthouses
              </h3>
              <p className="text-sm text-[#1F3A5F]/80 font-light leading-relaxed">
                Furnished and bare-shell luxury residences for corporate leaders and expatriates,
                with direct institutional ownership.
              </p>
              
              {/* Button fades upward after content */}
              <motion.div variants={buttonFadeVariants} className="pt-4">
                <Link
                  href="/property-for-rent"
                  className="inline-flex items-center gap-3 bg-[#F8F5ED] border border-[#1F3A5F] text-[#1F3A5F] hover:bg-[#1F3A5F] hover:text-[#F8F5ED] font-serif text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 transition-colors shadow-sm"
                >
                  <span>Inspect Rental Portfolio</span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
