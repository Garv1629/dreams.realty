"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroModern() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [purpose, setPurpose] = useState<"Sale" | "Rent">("Sale");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bhk, setBhk] = useState("");
  const [budget, setBudget] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (purpose) params.set("purpose", purpose);
    if (location) params.set("location", location);
    if (propertyType) params.set("type", propertyType);
    if (bhk) params.set("bhk", bhk);
    if (budget) params.set("budget", budget);

    const targetRoute = purpose === "Rent" ? "/property-for-rent" : "/property-for-sale";
    router.push(`${targetRoute}?${params.toString()}`);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F8F5ED] via-[#F8F5ED] to-[#EBE5D9]/40">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#4F7399_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text & Search Content (7 Columns) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Pill Tagline */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[#1F3A5F]/15 px-3.5 sm:px-4 py-1.5 rounded-full mb-5 sm:mb-6 w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#4F7399] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#1F3A5F]">
                Most Trusted Realtor in Bangalore
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-[#1F3A5F] text-[32px] sm:text-[42px] lg:text-[64px] leading-[1.1] sm:leading-[1.08] tracking-[-0.01em] mb-5 sm:mb-6">
              Verified Luxury Homes <br />
              <span className="italic font-normal text-[#4F7399]">in Prime Bangalore.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#1F3A5F]/80 text-sm sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-6 sm:mb-8">
              Guiding you to exceptional apartments, ready villas, and penthouses. Experience personalized advisory, 100% title verification, and 15+ years of unmatched real estate certitude.
            </p>

            {/* Glass Search Panel */}
            <div className="bg-white/85 backdrop-blur-md border border-white/80 rounded-[18px] sm:rounded-[20px] p-4 sm:p-7 shadow-[0_12px_40px_rgba(31,58,95,0.08)] max-w-2xl">
              {/* Buy / Rent Switch */}
              <div className="flex items-center gap-2 mb-4 sm:mb-5 border-b border-[#1F3A5F]/10 pb-3 sm:pb-4">
                <button
                  type="button"
                  onClick={() => setPurpose("Sale")}
                  className={`text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-semibold px-4 sm:px-5 py-2 rounded-full transition-all duration-200 ${
                    purpose === "Sale"
                      ? "bg-[#1F3A5F] text-[#F8F5ED] shadow-sm"
                      : "text-[#1F3A5F]/70 hover:text-[#1F3A5F] hover:bg-black/5"
                  }`}
                >
                  Buy Property
                </button>
                <button
                  type="button"
                  onClick={() => setPurpose("Rent")}
                  className={`text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-semibold px-4 sm:px-5 py-2 rounded-full transition-all duration-200 ${
                    purpose === "Rent"
                      ? "bg-[#1F3A5F] text-[#F8F5ED] shadow-sm"
                      : "text-[#1F3A5F]/70 hover:text-[#1F3A5F] hover:bg-black/5"
                  }`}
                >
                  Rent Property
                </button>
              </div>

              {/* Filter Fields Form */}
              <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {/* Location */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] font-bold text-[#4F7399] mb-1.5">
                    Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#F8F5ED]/90 border border-[#1F3A5F]/15 rounded-[10px] px-3 py-2.5 text-xs text-[#1F3A5F] font-medium focus:outline-none focus:ring-2 focus:ring-[#4F7399] cursor-pointer"
                  >
                    <option value="">All Locations</option>
                    <option value="Whitefield">Whitefield</option>
                    <option value="Malleswaram">Malleswaram</option>
                    <option value="Indiranagar">Indiranagar</option>
                    <option value="Hennur Road">Hennur Road</option>
                    <option value="Hegde Nagar">Hegde Nagar</option>
                  </select>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] font-bold text-[#4F7399] mb-1.5">
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-[#F8F5ED]/90 border border-[#1F3A5F]/15 rounded-[10px] px-3 py-2.5 text-xs text-[#1F3A5F] font-medium focus:outline-none focus:ring-2 focus:ring-[#4F7399] cursor-pointer"
                  >
                    <option value="">All Types</option>
                    <option value="Villa">Villa</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Penthouse">Penthouse</option>
                  </select>
                </div>

                {/* BHK */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] font-bold text-[#4F7399] mb-1.5">
                    BHK
                  </label>
                  <select
                    value={bhk}
                    onChange={(e) => setBhk(e.target.value)}
                    className="w-full bg-[#F8F5ED]/90 border border-[#1F3A5F]/15 rounded-[10px] px-3 py-2.5 text-xs text-[#1F3A5F] font-medium focus:outline-none focus:ring-2 focus:ring-[#4F7399] cursor-pointer"
                  >
                    <option value="">Any BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4 BHK</option>
                    <option value="5">5+ BHK</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="flex items-end sm:col-span-2 md:col-span-1">
                  <button
                    type="submit"
                    className="w-full bg-[#1F3A5F] hover:bg-[#4F7399] text-[#F8F5ED] text-xs uppercase tracking-[0.2em] font-bold py-3 px-4 rounded-[10px] transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(79,115,153,0.4)] flex items-center justify-center gap-2"
                  >
                    <span>Search</span>
                    <span>→</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 mt-8 pt-4">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1F3A5F]">15+</span>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#4F7399] font-medium">Years in Bangalore</span>
              </div>
              <div className="w-[1px] h-9 bg-[#1F3A5F]/15 hidden sm:block" />
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1F3A5F]">100%</span>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#4F7399] font-medium">Verified Legal Titles</span>
              </div>
              <div className="w-[1px] h-9 bg-[#1F3A5F]/15 hidden sm:block" />
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1F3A5F]">5.0 ★</span>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#4F7399] font-medium">Google Rating</span>
              </div>
            </div>
          </motion.div>

          {/* Right Architectural Image Showcase (5 Columns) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main Rounded Frame */}
            <div className="relative rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(31,58,95,0.14)] border-4 border-white aspect-[4/5] max-h-[580px] w-full group">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury Bangalore Residence - Prestige Lakeside Habitat"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/60 via-transparent to-transparent" />

              {/* In-Image Glass Caption */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#1F3A5F]/85 backdrop-blur-md border border-white/25 rounded-[14px] p-4 text-white shadow-lg">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#A7B8CC] font-bold block mb-1">
                  Featured Property • Whitefield
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F8F5ED]">
                  Prestige Lakeside Habitat
                </h3>
                <p className="text-xs text-[#DCD3C4] mt-0.5 font-medium">
                  4 BHK Luxury Villa • 3,500 sqft • ₹ 4.5 Cr
                </p>
              </div>
            </div>

            {/* Floating Glass Badge 1: Verification */}
            <motion.div
              initial={shouldReduceMotion ? false : { y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -top-4 -left-4 sm:-left-6 bg-white/90 backdrop-blur-md border border-white/80 rounded-[16px] px-4 py-3 shadow-[0_10px_25px_rgba(31,58,95,0.08)] flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-[#1F3A5F] text-white flex items-center justify-center text-sm font-bold">
                ✓
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#1F3A5F] block uppercase tracking-wider">
                  Title Verified
                </span>
                <span className="text-[10px] text-[#4F7399]">
                  100% Legal Verification
                </span>
              </div>
            </motion.div>

            {/* Floating Glass Badge 2: Google Reviews */}
            <motion.div
              initial={shouldReduceMotion ? false : { y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md border border-white/80 rounded-[16px] px-5 py-3.5 shadow-[0_10px_25px_rgba(31,58,95,0.08)] flex items-center gap-3"
            >
              <div className="text-xl">⭐</div>
              <div>
                <span className="text-[12px] font-bold text-[#1F3A5F] block">
                  5.0 Google Rating
                </span>
                <span className="text-[10px] text-[#4F7399]">
                  Verified Client Reviews
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
