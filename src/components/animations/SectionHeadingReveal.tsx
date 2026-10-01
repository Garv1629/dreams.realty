"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingRevealProps {
  chapter?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  rightLabel?: string;
  className?: string;
}

export default function SectionHeadingReveal({
  chapter,
  title,
  subtitle,
  description,
  rightLabel,
  className = ""
}: SectionHeadingRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.05
      }
    }
  };

  const itemVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0, filter: "none" }
      : { opacity: 0, y: 60, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] // power3.out equivalent
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`flex flex-col md:flex-row md:items-end justify-between border-b border-[#1F3A5F]/15 pb-8 mb-16 gap-6 ${className}`}
    >
      <div className="space-y-3 max-w-4xl">
        {chapter && (
          <div className="overflow-hidden">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-1">
              <span className="w-12 h-[1px] bg-[#4F7399]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-mono text-[#4F7399] font-semibold">
                {chapter}
              </span>
            </motion.div>
          </div>
        )}

        <div className="overflow-hidden">
          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1F3A5F] font-normal tracking-tight"
          >
            {title}
          </motion.h2>
        </div>

        {subtitle && (
          <div className="overflow-hidden">
            <motion.div variants={itemVariants}>
              {subtitle}
            </motion.div>
          </div>
        )}

        {description && (
          <div className="overflow-hidden">
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#1F3A5F]/70 pt-2"
            >
              {description}
            </motion.p>
          </div>
        )}
      </div>

      {rightLabel && (
        <div className="overflow-hidden">
          <motion.p
            variants={itemVariants}
            className="text-xs font-mono uppercase tracking-widest text-[#1F3A5F]/70 max-w-sm md:text-right"
          >
            {rightLabel}
          </motion.p>
        </div>
      )}
    </motion.div>
  );
}
