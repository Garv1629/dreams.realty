"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero3D() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  // Search State
  const [intent, setIntent] = useState<"Sale" | "Rent">("Sale");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");

  const handleLaunchSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedType !== "All") params.set("type", selectedType);
    if (selectedLocation !== "All") params.set("location", selectedLocation);
    const path = intent === "Sale" ? "/property-for-sale" : "/property-for-rent";
    router.push(`${path}?${params.toString()}`);
  };

  // Animation orchestration easing
  const ease = [0.22, 1, 0.36, 1] as const;

  // Badge entrance
  const badgeVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0, filter: "none" }
      : { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease, delay: 0.1 }
    }
  };

  // Word-by-word headline reveal
  const headlineWords = [
    { text: "Find", italic: false },
    { text: "Your", italic: false },
    { text: "Perfect", italic: false },
    { text: "Home.", italic: true },
  ];

  const wordVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0, filter: "none" }
      : { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease,
        delay: shouldReduceMotion ? 0 : 0.3 + i * 0.12
      }
    })
  };

  // Subtitle entrance
  const subtitleVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease, delay: shouldReduceMotion ? 0 : 0.85 }
    }
  };

  // Search panel rises from below
  const searchPanelVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease, delay: shouldReduceMotion ? 0 : 1.1 }
    }
  };

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[100svh] bg-[#F8F5ED] flex flex-col justify-between overflow-hidden"
    >
      {/* Background gradient atmosphere (no missing image dependency) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A7B8CC]/30 via-[#F8F5ED] to-[#DCD3C4]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F5ED] via-[#F8F5ED]/40 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1560px] mx-auto px-6 md:px-12 pt-28 sm:pt-32 pb-8 flex-1 flex flex-col justify-between">
        {/* Left Column Typography */}
        <div className="max-w-xl lg:max-w-2xl mt-4 sm:mt-8">
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#A7B8CC]/25 border border-[#1F3A5F]/15 mb-4"
          >
            <span className="w-2 h-2 bg-[#4F7399] rounded-full animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-[#1F3A5F] font-semibold">
              MOST TRUSTED REALTOR IN BANGALORE
            </span>
          </motion.div>

          {/* Word-by-word headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] text-[#1F3A5F] font-normal leading-[1.06] tracking-tight flex flex-wrap gap-x-3 sm:gap-x-5">
            {headlineWords.map((item, idx) => (
              <div key={idx} className="overflow-hidden">
                <motion.span
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  custom={idx}
                  className={`inline-block ${item.italic ? "italic font-light text-[#4F7399]" : ""}`}
                >
                  {item.text}
                </motion.span>
              </div>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#1F3A5F]/80 font-light max-w-lg leading-relaxed"
          >
            Buy or rent verified luxury properties in Bangalore with Dreams Realty.
            Expert guidance to find your perfect home.
          </motion.p>
        </div>

        {/* Search Panel */}
        <motion.div
          variants={searchPanelVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl mt-8 mb-2"
        >
          <div className="bg-[#DCD3C4]/90 backdrop-blur-md border border-[#1F3A5F]/15 p-4 sm:p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4F7399] to-transparent" />

            <form onSubmit={handleLaunchSearch} className="flex flex-col gap-4">
              {/* Buy / Rent Tabs */}
              <div className="flex items-center justify-between border-b border-[#1F3A5F]/15 pb-3">
                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    onClick={() => setIntent("Sale")}
                    className={`text-xs uppercase tracking-[0.2em] font-semibold transition-all relative pb-1 ${
                      intent === "Sale" ? "text-[#1F3A5F]" : "text-[#1F3A5F]/60 hover:text-[#1F3A5F]"
                    }`}
                  >
                    <span>Properties to Buy</span>
                    {intent === "Sale" && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4F7399]" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIntent("Rent")}
                    className={`text-xs uppercase tracking-[0.2em] font-semibold transition-all relative pb-1 ${
                      intent === "Rent" ? "text-[#1F3A5F]" : "text-[#1F3A5F]/60 hover:text-[#1F3A5F]"
                    }`}
                  >
                    <span>Properties to Rent</span>
                    {intent === "Rent" && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4F7399]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Input Filters Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-widest text-[#1F3A5F]/80 font-mono mb-1 font-semibold">
                    Property Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="bg-[#F8F5ED] border border-[#1F3A5F]/20 text-[#1F3A5F] text-xs px-3 py-2.5 focus:outline-none focus:border-[#4F7399] focus:ring-1 focus:ring-[#4F7399] transition-colors cursor-pointer"
                  >
                    <option value="All">All Types</option>
                    <option value="Villa">Villas</option>
                    <option value="Apartment">Apartments / Flats</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-widest text-[#1F3A5F]/80 font-mono mb-1 font-semibold">
                    Location
                  </label>
                  <input
                    type="text"
                    value={selectedLocation === "All" ? "" : selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value || "All")}
                    placeholder="Search Properties"
                    className="bg-[#F8F5ED] border border-[#1F3A5F]/20 text-[#1F3A5F] text-xs px-3 py-2.5 focus:outline-none focus:border-[#4F7399] focus:ring-1 focus:ring-[#4F7399] transition-colors placeholder:text-[#1F3A5F]/40"
                  />
                </div>

                <div className="flex flex-col self-end">
                  <button
                    type="submit"
                    className="w-full bg-[#1F3A5F] hover:bg-[#4F7399] text-[#F8F5ED] font-serif text-xs py-3 px-5 uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7399]"
                  >
                    <span>Search Now</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
