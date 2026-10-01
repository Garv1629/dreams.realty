"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BANGALORE_LOCALITIES, LocalityPoint } from "@/data/editorial";

export default function BangaloreCityGrid() {
  const [selectedLocality, setSelectedLocality] = useState<LocalityPoint>(BANGALORE_LOCALITIES[0]);

  return (
    <section className="relative w-full bg-graphite-950 py-32 md:py-44 overflow-hidden border-t border-white/5">
      {/* Background Grid Elements */}
      <div className="absolute inset-0 architectural-blueprint opacity-20 pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-12 h-[1px] bg-brass" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-brass">
                TOPOGRAPHICAL DISCOVERY • BENGALURU
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory font-light tracking-tight">
              Bangalore Enclave Matrix
            </h2>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono tracking-widest text-brass-bright">
              5 PRIME REGIONS INDEXED
            </span>
            <p className="text-xs text-ivory-dim/70 mt-1">Select an enclave coordinate to inspect</p>
          </div>
        </div>

        {/* Interactive Grid Canvas & Locality Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left / Center: Isometric 3D-inspired Map Grid */}
          <div className="lg:col-span-7 bg-graphite-900 border border-white/10 p-6 md:p-12 relative overflow-hidden min-h-[460px] md:min-h-[520px] flex items-center justify-center">
            {/* Compass Rose Accent */}
            <div className="absolute top-6 left-6 flex flex-col items-center gap-1 opacity-40 font-mono text-[9px] text-ivory">
              <span>N</span>
              <div className="w-[1px] h-8 bg-white/40" />
            </div>

            {/* Bangalore City Isometric Grid Plane */}
            <div
              className="relative w-[340px] sm:w-[460px] md:w-[500px] h-[320px] sm:h-[380px] transition-transform duration-700 ease-out"
              style={{
                perspective: "900px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Floor Surface Grids */}
              <div
                className="absolute inset-0 border border-brass/20 bg-graphite-950/80 shadow-2xl transition-all duration-700"
                style={{
                  transform: "rotateX(55deg) rotateZ(-25deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Arterial Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="rgba(197, 168, 128, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50%" y1="50%" x2="80%" y2="40%" stroke="rgba(197, 168, 128, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50%" y1="50%" x2="55%" y2="80%" stroke="rgba(197, 168, 128, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="30%" y1="70%" x2="50%" y2="50%" stroke="rgba(197, 168, 128, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
                </svg>

                {/* Hotspot Markers placed across the isometric field */}
                {/* 1. Whitefield (East) */}
                <button
                  onClick={() => setSelectedLocality(BANGALORE_LOCALITIES[0])}
                  className="absolute top-[38%] right-[15%] group focus:outline-none"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className={`relative flex items-center justify-center ${selectedLocality.id === "whitefield" ? "scale-125" : ""}`}>
                    <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-brass opacity-30" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-brass-bright border-2 border-graphite-950" />
                  </div>
                  <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono tracking-widest text-ivory bg-graphite-950/90 px-2 py-0.5 border border-white/10">
                    Whitefield
                  </span>
                </button>

                {/* 2. Malleswaram (North-West) */}
                <button
                  onClick={() => setSelectedLocality(BANGALORE_LOCALITIES[1])}
                  className="absolute top-[25%] left-[20%] group focus:outline-none"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className={`relative flex items-center justify-center ${selectedLocality.id === "malleswaram" ? "scale-125" : ""}`}>
                    <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-brass opacity-20" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brass border-2 border-graphite-950" />
                  </div>
                  <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono tracking-widest text-ivory bg-graphite-950/90 px-2 py-0.5 border border-white/10">
                    Malleswaram
                  </span>
                </button>

                {/* 3. Indiranagar (Central-East) */}
                <button
                  onClick={() => setSelectedLocality(BANGALORE_LOCALITIES[2])}
                  className="absolute top-[52%] left-[54%] group focus:outline-none"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className={`relative flex items-center justify-center ${selectedLocality.id === "indiranagar" ? "scale-125" : ""}`}>
                    <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-brass opacity-20" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brass-bright border-2 border-graphite-950" />
                  </div>
                  <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono tracking-widest text-ivory bg-graphite-950/90 px-2 py-0.5 border border-white/10">
                    Indiranagar
                  </span>
                </button>

                {/* 4. Hennur Road (North) */}
                <button
                  onClick={() => setSelectedLocality(BANGALORE_LOCALITIES[3])}
                  className="absolute top-[18%] left-[50%] group focus:outline-none"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className={`relative flex items-center justify-center ${selectedLocality.id === "hennur-road" ? "scale-125" : ""}`}>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brass/80 border-2 border-graphite-950" />
                  </div>
                  <span className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-mono tracking-widest text-ivory bg-graphite-950/90 px-1.5 py-0.5 border border-white/10">
                    Hennur
                  </span>
                </button>

                {/* 5. Sadashivanagar (Central) */}
                <button
                  onClick={() => setSelectedLocality(BANGALORE_LOCALITIES[4])}
                  className="absolute top-[38%] left-[36%] group focus:outline-none"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className={`relative flex items-center justify-center ${selectedLocality.id === "sadashivanagar" ? "scale-125" : ""}`}>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brass border-2 border-graphite-950" />
                  </div>
                  <span className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-mono tracking-widest text-ivory bg-graphite-950/90 px-1.5 py-0.5 border border-white/10">
                    Sadashivanagar
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Selected Enclave Architectural Monograph Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLocality.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-graphite-900 border border-white/10 p-8 sm:p-10 shadow-2xl space-y-6 relative"
              >
                {/* Top Coordinates Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-[11px] font-mono tracking-[0.25em] text-brass uppercase">
                    {selectedLocality.mapCoords}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-ivory-dim/70">
                    {selectedLocality.propertiesCount} RESIDENCES
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-light">
                    {selectedLocality.name}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-brass-bright font-mono mt-1">
                    {selectedLocality.tagline}
                  </p>
                </div>

                {/* Locality Character */}
                <p className="text-sm text-ivory-dim leading-relaxed font-light">
                  {selectedLocality.character}
                </p>

                {/* Highlight Property Featured in this District */}
                <div className="bg-graphite-950 p-5 border border-white/10">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-ivory-dim/60 mb-1">
                    EXEMPLAR RESIDENCE
                  </p>
                  <div className="flex justify-between items-baseline">
                    <p className="font-serif text-lg text-ivory">
                      {selectedLocality.highlightProperty.title}
                    </p>
                    <p className="font-serif text-sm text-brass-bright font-semibold">
                      {selectedLocality.highlightProperty.price}
                    </p>
                  </div>
                  <p className="text-xs text-ivory-dim/70 mt-0.5">
                    {selectedLocality.highlightProperty.type}
                  </p>
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <Link
                    href={`/property-for-sale?location=${encodeURIComponent(selectedLocality.name)}`}
                    className="w-full inline-block text-center bg-brass hover:bg-brass-bright text-graphite-950 font-serif text-xs uppercase tracking-[0.2em] font-semibold py-4 px-6 transition-all duration-300 shadow-lg"
                  >
                    Inspect {selectedLocality.name} Enclave
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
