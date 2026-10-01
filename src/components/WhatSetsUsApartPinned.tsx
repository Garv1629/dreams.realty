"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface NarrativeScene {
  id: string;
  tag: string;
  index: string;
  headline: string;
  italicHeadline: string;
  description: string;
  metrics: { label: string; value: string }[];
  ctaText: string;
  ctaLink: string;
  image: string;
  ambientColor: string;
}

const SCENES: NarrativeScene[] = [
  {
    id: "scene-1",
    index: "01",
    tag: "VERIFIED CURATION",
    headline: "Every Blueprint Verified",
    italicHeadline: "Prior to Exhibition.",
    description:
      "We eliminate ambiguous titles, litigation risks, and speculative floorplans. Every residence represented by Dreams Realty undergoes rigorous legal title scrutiny, structural inspection, and developer provenance checks before appearing in our private portfolio.",
    metrics: [
      { label: "Inventory Rejection Rate", value: "82%" },
      { label: "Title Verification Standard", value: "100%" },
      { label: "Encumbrance Scrutiny", value: "Exhaustive" },
    ],
    ctaText: "Inspect Acquisitions",
    ctaLink: "/property-for-sale",
    image: "/images/hero_fallback_desktop.jpg",
    ambientColor: "from-brass/10 via-transparent to-graphite-950",
  },
  {
    id: "scene-2",
    index: "02",
    tag: "BIFURCATED MANDATES",
    headline: "Curated Acquisitions &",
    italicHeadline: "Tailored Leaseholds.",
    description:
      "Whether acquiring a multi-generational estate or leasing a high-floor executive residence for corporate relocation, our advisory spans both purchase and leasehold with equal architectural discernment.",
    metrics: [
      { label: "Prime Enclaves", value: "8 Core" },
      { label: "Direct Builder Mandates", value: "Tier-1 Only" },
      { label: "Turnaround Window", value: "Discreet" },
    ],
    ctaText: "Explore Leasehold",
    ctaLink: "/property-for-rent",
    image: "/images/about_us_architecture.jpg",
    ambientColor: "from-emerald-950/20 via-transparent to-graphite-950",
  },
  {
    id: "scene-3",
    index: "03",
    tag: "INDUSTRY HERITAGE",
    headline: "Fifteen Years Immersed in",
    italicHeadline: "Bangalore's Topography.",
    description:
      "Established in 2009. Over 1,200 discreet, successful property transactions. Long-standing relationships with Prestige Group, Sobha, Brigade, and Puravankara, backed by direct institutional bank authorizations with HDFC, SBI, and ICICI.",
    metrics: [
      { label: "Advisory Heritage", value: "15+ Years" },
      { label: "Verified Transactions", value: "1,200+" },
      { label: "Banking Alliances", value: "HDFC • SBI • ICICI" },
    ],
    ctaText: "Consult a Partner",
    ctaLink: "/contact-us",
    image: "/images/pattern_subtle.jpg",
    ambientColor: "from-brass-muted/15 via-transparent to-graphite-950",
  },
];

export default function WhatSetsUsApartPinned() {
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (typeof window === "undefined" || isMobile) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!pinSectionRef.current) return;

      const scenePanels = gsap.utils.toArray<HTMLElement>(".narrative-scene");

      // Pin the section and transition through scenes based on scroll progress
      ScrollTrigger.create({
        trigger: pinSectionRef.current,
        start: "top top",
        end: "+=2200",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            SCENES.length - 1,
            Math.floor(progress * SCENES.length)
          );
          setActiveSceneIndex(index);

          // Animate opacity and transforms of scene panels
          scenePanels.forEach((panel, i) => {
            const rangeStart = i / SCENES.length;
            const rangeEnd = (i + 1) / SCENES.length;

            if (progress >= rangeStart && progress < rangeEnd) {
              gsap.to(panel, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.4,
                overwrite: "auto",
              });
            } else {
              gsap.to(panel, {
                opacity: 0,
                y: progress < rangeStart ? 30 : -30,
                filter: "blur(8px)",
                duration: 0.4,
                overwrite: "auto",
              });
            }
          });
        },
      });
    }, pinSectionRef);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <section
      ref={pinSectionRef}
      className={`relative w-full bg-graphite-950 overflow-hidden border-t border-white/5 ${
        isMobile ? "py-24" : "h-screen"
      }`}
    >
      {/* Background Subtle Ambient Light Shift */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${SCENES[activeSceneIndex].ambientColor} transition-all duration-1000 ease-out`}
      />
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1560px] mx-auto w-full h-full px-6 md:px-12 flex flex-col justify-between py-12 md:py-20 relative z-10">
        {/* Top Header & Chapter Progress Tracker */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-brass" />
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-brass">
              THE DISTINCTION • ADVISORY CAPABILITIES
            </span>
          </div>

          {/* Stepper Tabs */}
          <div className="flex items-center gap-4 text-xs font-mono">
            {SCENES.map((scene, idx) => (
              <button
                key={scene.id}
                onClick={() => setActiveSceneIndex(idx)}
                className={`flex items-center gap-2 uppercase tracking-widest transition-colors ${
                  activeSceneIndex === idx ? "text-brass-bright" : "text-ivory-dim/50 hover:text-ivory"
                }`}
              >
                <span>{scene.index}</span>
                <span className="hidden md:inline">{scene.tag}</span>
                {idx < SCENES.length - 1 && <span className="text-white/20">/</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Central Narrative Stage (Absolute stacked on Desktop, Stacked flow on Mobile) */}
        <div className={`relative flex-1 ${isMobile ? "py-12 space-y-16" : "flex items-center"}`}>
          {SCENES.map((scene, idx) => (
            <div
              key={scene.id}
              className={`narrative-scene ${
                isMobile
                  ? "relative w-full opacity-100 block"
                  : `absolute inset-0 flex items-center ${
                      idx === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
                {/* Left: Narrative Copy */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-block bg-brass/10 border border-brass/30 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-brass-bright">
                    PILLAR {scene.index} • {scene.tag}
                  </div>

                  <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-light leading-[1.1] tracking-tight">
                    {scene.headline} <br />
                    <span className="italic font-normal text-brass-bright">{scene.italicHeadline}</span>
                  </h3>

                  <p className="text-base sm:text-lg text-ivory-dim font-light leading-relaxed max-w-xl">
                    {scene.description}
                  </p>

                  {/* Metrics Array */}
                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-lg">
                    {scene.metrics.map((m, i) => (
                      <div key={i}>
                        <p className="font-serif text-2xl sm:text-3xl text-ivory font-light">
                          {m.value}
                        </p>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-brass-bright mt-1">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={scene.ctaLink}
                      className="inline-flex items-center gap-3 bg-ivory text-graphite-950 font-serif text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 hover:bg-brass transition-colors shadow-2xl"
                    >
                      <span>{scene.ctaText}</span>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right: Layered Architectural Visual Slate */}
                <div className="lg:col-span-5 relative">
                  <div className="relative w-full h-[360px] sm:h-[440px] border border-white/10 overflow-hidden shadow-2xl bg-graphite-900 p-6 flex flex-col justify-between">
                    <Image
                      src={scene.image}
                      alt={scene.headline}
                      fill
                      className="object-cover object-center filter brightness-[0.75] contrast-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/40 to-transparent" />

                    {/* Top Blueprint Crosshair */}
                    <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-brass-bright">
                      <span>DOC. REF: DR-2024-V0{idx + 1}</span>
                      <span className="w-2 h-2 rounded-full bg-brass-bright" />
                    </div>

                    {/* Bottom Technical Callout Slate */}
                    <div className="relative z-10 bg-graphite-950/85 backdrop-blur-md border border-white/15 p-4 space-y-1">
                      <p className="text-[10px] uppercase font-mono tracking-widest text-brass">
                        GOVERNANCE & ADVISORY STANDARD
                      </p>
                      <p className="text-xs text-ivory font-light">
                        Authorized representative directly interfacing with builder leadership and institutional banking committees.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pinned Status Line */}
        <div className="border-t border-white/10 pt-4 flex justify-between items-center text-[10px] font-mono text-ivory-dim/40 uppercase tracking-[0.25em]">
          <span>DREAMS REALTY ADVISORY CHARTER</span>
          <span className="hidden sm:inline">SCROLL TO ADVANCE CAPABILITIES</span>
          <span>BENGALURU • 2009—2024</span>
        </div>
      </div>
    </section>
  );
}
