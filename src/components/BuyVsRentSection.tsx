"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function BuyVsRentSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-[#F8F5ED] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.22em] font-semibold text-[#4F7399] block mb-2"
          >
            Tailored Pathways
          </motion.span>
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F3A5F]"
          >
            Buy or Rent in Bangalore
          </motion.h2>
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#1F3A5F]/75 text-sm sm:text-base mt-3"
          >
            Select your journey to explore authentic, personally inspected properties.
          </motion.p>
        </div>

        {/* 2 Visual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Buy */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-[24px] overflow-hidden border border-[#DCD3C4]/60 shadow-[0_12px_36px_rgba(31,58,95,0.06)] hover:shadow-[0_20px_50px_rgba(31,58,95,0.12)] transition-all duration-300 flex flex-col group"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#DCD3C4]/30">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
                alt="Properties for Sale in Bangalore"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/80 via-transparent to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="text-xs uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-full bg-white/95 text-[#1F3A5F] shadow-sm">
                  Acquisitions
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-1">
                  Properties for Sale
                </h3>
                <p className="text-xs text-white/85">
                  Apartments, Ready Villas & Penthouses in Bangalore
                </p>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <p className="text-sm text-[#1F3A5F]/80 leading-relaxed mb-6">
                Make a secure investment with verified title clearance, direct builder tie-ups, and complete banking support. From Whitefield villas to Central Bangalore heritage homes.
              </p>

              <div className="space-y-3 mb-8 text-xs text-[#1F3A5F] font-medium">
                <div className="flex items-center gap-3">
                  <span className="text-[#4F7399] font-bold">✓</span>
                  <span>100% Verified Legal Documentation & Encumbrance Clearance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#4F7399] font-bold">✓</span>
                  <span>Leading Developer Portfolio (Prestige, Sobha, Brigade, Purva)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#4F7399] font-bold">✓</span>
                  <span>Zero-Hassle Bank Loan & Registration Processing</span>
                </div>
              </div>

              <Link
                href="/property-for-sale"
                className="w-full text-center bg-[#1F3A5F] hover:bg-[#4F7399] text-[#F8F5ED] text-xs uppercase tracking-[0.2em] font-bold py-4 px-6 rounded-full transition-all duration-300 shadow-sm hover:shadow-[0_6px_20px_rgba(79,115,153,0.35)]"
              >
                Browse Properties for Sale →
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Rent */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-[24px] overflow-hidden border border-[#DCD3C4]/60 shadow-[0_12px_36px_rgba(31,58,95,0.06)] hover:shadow-[0_20px_50px_rgba(31,58,95,0.12)] transition-all duration-300 flex flex-col group"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#DCD3C4]/30">
              <Image
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop"
                alt="Properties for Rent in Bangalore"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/80 via-transparent to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="text-xs uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-full bg-white/95 text-[#1F3A5F] shadow-sm">
                  Leasing
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-1">
                  Properties for Rent
                </h3>
                <p className="text-xs text-white/85">
                  Curated Rental Residences in Gated Communities
                </p>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <p className="text-sm text-[#1F3A5F]/80 leading-relaxed mb-6">
                Discover fully furnished and premium semi-furnished homes in Bangalore's most desirable communities. Enjoy hassle-free tenancy agreements, transparent deposits, and move-in support.
              </p>

              <div className="space-y-3 mb-8 text-xs text-[#1F3A5F] font-medium">
                <div className="flex items-center gap-3">
                  <span className="text-[#4F7399] font-bold">✓</span>
                  <span>Verified Owners & Clean Rental Agreements</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#4F7399] font-bold">✓</span>
                  <span>Premium Amenities: Clubhouses, Pools, 24/7 Power & Security</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#4F7399] font-bold">✓</span>
                  <span>Immediate Move-In Ready Options in Whitefield & Malleswaram</span>
                </div>
              </div>

              <Link
                href="/property-for-rent"
                className="w-full text-center bg-white hover:bg-[#1F3A5F] text-[#1F3A5F] hover:text-[#F8F5ED] border border-[#1F3A5F]/30 text-xs uppercase tracking-[0.2em] font-bold py-4 px-6 rounded-full transition-all duration-300 shadow-sm"
              >
                Browse Properties for Rent →
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
