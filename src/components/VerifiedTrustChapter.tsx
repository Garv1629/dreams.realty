"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeadingReveal from "@/components/animations/SectionHeadingReveal";

export default function VerifiedTrustChapter() {
  const shouldReduceMotion = useReducedMotion();

  const lineDrawVariants = {
    hidden: shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const textMaskVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 60, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const containerStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const pillarCardVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 36, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const childStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const childItem = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Verified "What sets us apart" content from dreamsrealty.co.in
  const pillars = [
    {
      num: "01",
      tag: "VERIFIED",
      title: "Comprehensive & Verified Properties",
      desc: "Our team personally verifies each property before listing them on the website, to offer you the best class facilities and living experience.",
    },
    {
      num: "02",
      tag: "EXHAUSTIVE",
      title: "Exhaustive Search Options for Both Renting and Buying",
      desc: "Most trusted realtor in Bangalore to enlist properties, offering you abundant options to choose from while you search for your dream home.",
    },
    {
      num: "03",
      tag: "EXPERIENCE",
      title: "Providing Solutions for 15 Years",
      desc: "With a history of certitude in the industry, we continue to offer best investment decisions for our clients.",
    }
  ];

  return (
    <section
      id="verified-trust-section"
      className="relative w-full overflow-hidden"
    >
      {/* Stage 1: Opening Statement */}
      <div className="w-full min-h-[480px] bg-[#F8F5ED] text-[#1F3A5F] py-24 md:py-32 px-6 md:px-16 lg:px-24 relative z-10 border-b border-[#1F3A5F]/10">
        <div className="max-w-[1560px] mx-auto">
          {/* Header Tag */}
          <div className="flex items-center gap-3 mb-10 overflow-hidden">
            <motion.span
              variants={lineDrawVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{ originX: 0 }}
              className="w-12 h-[1px] bg-[#4F7399]"
            />
            <motion.span
              variants={textMaskVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-[11px] uppercase tracking-[0.3em] font-mono text-[#4F7399] font-semibold"
            >
              WHAT SETS US APART
            </motion.span>
          </div>

          {/* Oversized Sentence */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-5xl mb-12"
          >
            <div className="overflow-hidden">
              <motion.h2
                variants={textMaskVariants}
                className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-[5rem] text-[#1F3A5F] font-normal leading-[1.08] tracking-tight"
              >
                Each property is verified and listed
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                variants={textMaskVariants}
                className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-[5rem] text-[#4F7399] italic font-light leading-[1.08] tracking-tight mt-2 sm:mt-4"
              >
                to deliver excellence.
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.p
                variants={textMaskVariants}
                className="mt-8 text-base sm:text-xl text-[#1F3A5F]/80 font-light max-w-2xl leading-relaxed"
              >
                We maintain an updated list of homes and other specialty properties available for buyers.
                Sellers who work with Dreams Realty can be assured that their properties will be marketed
                extensively until a suitable buyer is found.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stage 2: Three Trust Points Cards */}
      <div className="w-full bg-[#DCD3C4]/35 text-[#1F3A5F] py-24 md:py-32 px-6 md:px-12 lg:px-20 relative z-20 border-t border-[#1F3A5F]/10">
        {/* Decorative accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A7B8CC]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DCD3C4]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1560px] mx-auto relative z-10">
          <SectionHeadingReveal
            chapter="WHAT SETS US APART"
            title="Why Choose Dreams Realty"
          />

          {/* Staggered Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.num}
                variants={pillarCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.15 }}
                className="bg-[#F8F5ED] border border-[#1F3A5F]/15 p-8 sm:p-10 flex flex-col justify-between hover:border-[#4F7399] transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <motion.div
                  variants={childStagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="space-y-4"
                >
                  {/* Icon/Index Number */}
                  <motion.div variants={childItem} className="flex justify-between items-center text-xs font-mono">
                    <span className="w-8 h-8 rounded-full bg-[#4F7399]/10 text-[#4F7399] flex items-center justify-center font-bold font-mono">
                      {pillar.num}
                    </span>
                    <span className="text-[#1F3A5F]/60 uppercase tracking-widest text-[10px] font-semibold">
                      {pillar.tag}
                    </span>
                  </motion.div>

                  {/* Heading */}
                  <motion.h4 variants={childItem} className="font-serif text-2xl text-[#1F3A5F] font-normal leading-snug">
                    {pillar.title}
                  </motion.h4>

                  {/* Description */}
                  <motion.p variants={childItem} className="text-xs text-[#1F3A5F]/80 font-light leading-relaxed">
                    {pillar.desc}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
