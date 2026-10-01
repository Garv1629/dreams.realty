"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BANGALORE_LOCALITIES, LocalityPoint } from "@/data/editorial";

export default function LocationDiscoveryScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridPlaneRef = useRef<HTMLDivElement>(null);
  const connectingLineRef = useRef<SVGPathElement>(null);

  const [selectedLocality, setSelectedLocality] = useState<LocalityPoint>(BANGALORE_LOCALITIES[0]);
  const [zoomLevel, setZoomLevel] = useState<"city" | "neighbourhood" | "property">("neighbourhood");

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // 1. Grid plane subtle perspective tilt on scroll
      if (gridPlaneRef.current) {
        gsap.fromTo(
          gridPlaneRef.current,
          { rotateX: 65, rotateZ: -35, scale: 0.9, opacity: 0.6 },
          {
            rotateX: 52,
            rotateZ: -22,
            scale: 1.0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "center center",
              scrub: 1,
            },
          }
        );
      }

      // 2. Sequential emergence of locality markers
      const markers = gsap.utils.toArray<HTMLElement>(".locality-marker-node");
      if (markers.length > 0) {
        gsap.fromTo(
          markers,
          { scale: 0, opacity: 0, y: 20 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
            },
          }
        );
      }

      // 3. Connect markers with fine animated line
      if (connectingLineRef.current) {
        const length = connectingLineRef.current.getTotalLength?.() || 800;
        gsap.set(connectingLineRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(connectingLineRef.current, {
          strokeDashoffset: 0,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
            end: "center 45%",
            scrub: 1.2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-graphite-950 py-32 md:py-44 overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 architectural-blueprint opacity-20 pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-10 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-12 h-[1px] bg-brass" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-brass">
                LOCATION DISCOVERY • TOPOGRAPHICAL GRID
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory font-light tracking-tight">
              Bangalore Enclave Matrix
            </h2>
          </div>

          {/* Level Switcher (City vs Neighbourhood vs Property) */}
          <div className="flex items-center gap-2 bg-graphite-900 border border-white/10 p-1.5 self-start md:self-auto">
            <button
              onClick={() => setZoomLevel("city")}
              className={`px-3 py-1.5 text-[10px] uppercase font-mono tracking-widest transition-colors ${
                zoomLevel === "city" ? "bg-brass text-graphite-950 font-bold" : "text-ivory-dim hover:text-ivory"
              }`}
            >
              City
            </button>
            <button
              onClick={() => setZoomLevel("neighbourhood")}
              className={`px-3 py-1.5 text-[10px] uppercase font-mono tracking-widest transition-colors ${
                zoomLevel === "neighbourhood" ? "bg-brass text-graphite-950 font-bold" : "text-ivory-dim hover:text-ivory"
              }`}
            >
              Enclave
            </button>
            <button
              onClick={() => setZoomLevel("property")}
              className={`px-3 py-1.5 text-[10px] uppercase font-mono tracking-widest transition-colors ${
                zoomLevel === "property" ? "bg-brass text-graphite-950 font-bold" : "text-ivory-dim hover:text-ivory"
              }`}
            >
              Exemplar
            </button>
          </div>
        </div>

        {/* Interactive Matrix Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Isometric Perspective Canvas */}
          <div className="lg:col-span-7 bg-graphite-900 border border-white/10 p-6 sm:p-12 relative overflow-hidden min-h-[480px] sm:min-h-[540px] flex items-center justify-center">
            {/* North Compass Indicator */}
            <div className="absolute top-6 left-6 flex flex-col items-center gap-1 opacity-40 font-mono text-[9px] text-ivory">
              <span>N</span>
              <div className="w-[1px] h-8 bg-white/40" />
            </div>

            {/* 3D Isometric Bangalore Plane */}
            <div
              ref={gridPlaneRef}
              className={`relative w-[340px] sm:w-[460px] md:w-[500px] h-[320px] sm:h-[380px] transition-transform duration-700 ease-out ${
                zoomLevel === "city"
                  ? "scale-90"
                  : zoomLevel === "property"
                  ? "scale-110"
                  : "scale-100"
              }`}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="absolute inset-0 border border-brass/25 bg-graphite-950/85 shadow-2xl transition-all duration-700"
                style={{
                  transform: "rotateX(52deg) rotateZ(-22deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Connecting Animated Arterial Lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path
                    ref={connectingLineRef}
                    d="M 120 90 L 230 180 L 170 140 L 270 200 L 400 140"
                    stroke="rgba(197, 168, 128, 0.45)"
                    strokeWidth="1.2"
                    fill="none"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Hotspot Markers */}
                {/* 1. Whitefield */}
                <button
                  onClick={() => setSelectedLocality(BANGALORE_LOCALITIES[0])}
                  className="locality-marker-node absolute top-[38%] right-[15%] group focus:outline-none"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className={`relative flex items-center justify-center transition-transform ${selectedLocality.id === "whitefield" ? "scale-125" : ""}`}>
                    <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-brass opacity-30" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-brass-bright border-2 border-graphite-950" />
                  </div>
                  <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono tracking-widest text-ivory bg-graphite-950/90 px-2 py-0.5 border border-white/10 shadow-lg">
                    Whitefield
                  </span>
                </button>

                {/* 2. Malleswaram */}
                <button
                  onClick={() => setSelectedLocality(BANGALORE_LOCALITIES[1])}
                  className="locality-marker-node absolute top-[25%] left-[20%] group focus:outline-none"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className={`relative flex items-center justify-center transition-transform ${selectedLocality.id === "malleswaram" ? "scale-125" : ""}`}>
                    <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-brass opacity-20" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brass border-2 border-graphite-950" />
                  </div>
                  <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono tracking-widest text-ivory bg-graphite-950/90 px-2 py-0.5 border border-white/10 shadow-lg">
                    Malleswaram
                  </span>
                </button>

                {/* 3. Indiranagar */}
                <button
                  onClick={() => setSelectedLocality(BANGALORE_LOCALITIES[2])}
                  className="locality-marker-node absolute top-[52%] left-[54%] group focus:outline-none"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className={`relative flex items-center justify-center transition-transform ${selectedLocality.id === "indiranagar" ? "scale-125" : ""}`}>
                    <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-brass opacity-20" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brass-bright border-2 border-graphite-950" />
                  </div>
                  <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono tracking-widest text-ivory bg-graphite-950/90 px-2 py-0.5 border border-white/10 shadow-lg">
                    Indiranagar
                  </span>
                </button>

                {/* 4. Hennur Road */}
                <button
                  onClick={() => setSelectedLocality(BANGALORE_LOCALITIES[3])}
                  className="locality-marker-node absolute top-[18%] left-[50%] group focus:outline-none"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className={`relative flex items-center justify-center transition-transform ${selectedLocality.id === "hennur-road" ? "scale-125" : ""}`}>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brass/80 border-2 border-graphite-950" />
                  </div>
                  <span className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-mono tracking-widest text-ivory bg-graphite-950/90 px-1.5 py-0.5 border border-white/10 shadow-lg">
                    Hennur
                  </span>
                </button>

                {/* 5. Sadashivanagar */}
                <button
                  onClick={() => setSelectedLocality(BANGALORE_LOCALITIES[4])}
                  className="locality-marker-node absolute top-[38%] left-[36%] group focus:outline-none"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className={`relative flex items-center justify-center transition-transform ${selectedLocality.id === "sadashivanagar" ? "scale-125" : ""}`}>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brass border-2 border-graphite-950" />
                  </div>
                  <span className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-mono tracking-widest text-ivory bg-graphite-950/90 px-1.5 py-0.5 border border-white/10 shadow-lg">
                    Sadashivanagar
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Enclave Monograph & Exemplar Inspector */}
          <div className="lg:col-span-5">
            <div className="bg-graphite-900 border border-white/10 p-8 sm:p-10 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[11px] font-mono tracking-[0.25em] text-brass uppercase">
                  {selectedLocality.mapCoords}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-ivory-dim/70">
                  {selectedLocality.propertiesCount} VERIFIED RESIDENCES
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-light">
                  {selectedLocality.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-brass-bright font-mono mt-1">
                  {selectedLocality.tagline}
                </p>
              </div>

              <p className="text-sm text-ivory-dim leading-relaxed font-light">
                {selectedLocality.character}
              </p>

              {/* Exemplar Box */}
              <div className="bg-graphite-950 p-5 border border-white/10">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-ivory-dim/60">
                    EXEMPLAR RESIDENCE
                  </span>
                  <span className="text-[10px] font-mono text-brass-bright font-bold">
                    {selectedLocality.highlightProperty.price}
                  </span>
                </div>
                <p className="font-serif text-lg text-ivory">
                  {selectedLocality.highlightProperty.title}
                </p>
                <p className="text-xs text-ivory-dim/70 mt-0.5">
                  {selectedLocality.highlightProperty.type}
                </p>
              </div>

              {/* Action */}
              <div className="pt-2">
                <Link
                  href={`/property-for-sale?location=${encodeURIComponent(selectedLocality.name)}`}
                  className="w-full inline-block text-center bg-brass hover:bg-brass-bright text-graphite-950 font-serif text-xs uppercase tracking-[0.2em] font-semibold py-4 px-6 transition-all duration-300 shadow-xl"
                >
                  Inspect {selectedLocality.name} Enclave
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
