"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EDITORIAL_CHAPTERS } from "@/data/editorial";

export default function BrandStoryEditorial() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const blueprintPathRef = useRef<SVGPathElement>(null);
  const photoParallaxRef = useRef<HTMLDivElement>(null);
  const lightSweepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      // 1. Line-by-line mask animation for oversized headline
      const tlHeadline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "top 35%",
          scrub: 1,
        },
      });

      if (headlineLine1Ref.current && headlineLine2Ref.current) {
        tlHeadline
          .fromTo(
            headlineLine1Ref.current,
            { y: "110%", opacity: 0 },
            { y: "0%", opacity: 1, ease: "power2.out" }
          )
          .fromTo(
            headlineLine2Ref.current,
            { y: "110%", opacity: 0 },
            { y: "0%", opacity: 1, ease: "power2.out" },
            "-=0.5"
          );
      }

      // 2. Animate architectural blueprint line drawings
      if (blueprintPathRef.current) {
        const length = blueprintPathRef.current.getTotalLength?.() || 1200;
        gsap.set(blueprintPathRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(blueprintPathRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1.5,
          },
        });
      }

      // 3. Multi-speed parallax layers
      if (photoParallaxRef.current) {
        gsap.fromTo(
          photoParallaxRef.current,
          { y: 80 },
          {
            y: -80,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // 4. Restrained brass light sweep across dividers
      if (lightSweepRef.current) {
        gsap.fromTo(
          lightSweepRef.current,
          { x: "-100%" },
          {
            x: "100%",
            duration: 2.5,
            repeat: -1,
            ease: "power2.inOut",
            repeatDelay: 3,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const chapters = EDITORIAL_CHAPTERS;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-graphite-900 py-32 md:py-48 overflow-hidden border-t border-white/5"
    >
      {/* Subtle Grid System */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 md:px-12 relative z-10">
        {/* Top Tag with Restrained Brass Divider & Light Sweep */}
        <div className="relative mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-brass" />
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-brass">
              THE MONOGRAPH • HERITAGE & PROVENANCE
            </span>
          </div>

          <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
            <div
              ref={lightSweepRef}
              className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-brass-bright to-transparent"
            />
          </div>
        </div>

        {/* Oversized Masked Headline */}
        <div className="mb-20 max-w-5xl">
          <div className="overflow-hidden">
            <span
              ref={headlineLine1Ref}
              className="block font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory font-light leading-[1.08] tracking-tight"
            >
              Architectural Discernment.
            </span>
          </div>
          <div className="overflow-hidden mt-2">
            <span
              ref={headlineLine2Ref}
              className="block font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-brass-bright italic font-normal leading-[1.08] tracking-tight"
            >
              Fifteen Years Unbroken.
            </span>
          </div>

          <p className="mt-8 text-base sm:text-lg md:text-xl text-ivory-dim font-light max-w-2xl leading-relaxed">
            We operate as a private real estate atelier, rejecting the noise of open aggregators.
            Every residence represented undergoes structural audits, unencumbered title checks,
            and environmental provenance scrutiny.
          </p>
        </div>

        {/* Layered Architectural Blueprint & Parallax Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          {/* Left Column: Blueprint Traces & Linework */}
          <div className="lg:col-span-6 relative bg-graphite-950 border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl min-h-[460px] flex flex-col justify-between">
            {/* SVG Drawing Linework that animates on scroll */}
            <svg
              className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
              viewBox="0 0 600 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Structural grid lines */}
              <line x1="40" y1="80" x2="560" y2="80" stroke="#C5A880" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="40" y1="220" x2="560" y2="220" stroke="#C5A880" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="40" y1="360" x2="560" y2="360" stroke="#C5A880" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="40" y1="460" x2="560" y2="460" stroke="#FFFFFF" strokeWidth="1" />

              {/* Master architectural section trace path */}
              <path
                ref={blueprintPathRef}
                d="M 60 460 L 60 200 L 160 200 L 160 120 L 320 120 L 320 280 L 480 280 L 480 460 M 160 460 L 160 200 M 320 460 L 320 120"
                stroke="#C5A880"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle cx="320" cy="120" r="4" fill="#C5A880" />
              <circle cx="160" cy="120" r="4" fill="#C5A880" />

              <text x="65" y="70" fill="#C5A880" fontSize="9" fontFamily="monospace">
                TOP ELEVATION: +85.00M
              </text>
              <text x="65" y="210" fill="#C5A880" fontSize="9" fontFamily="monospace">
                TERRACE DATUM: +42.50M
              </text>
              <text x="65" y="450" fill="#FFFFFF" fontSize="9" fontFamily="monospace">
                GROUND LEVEL: ±0.00M
              </text>
            </svg>

            {/* Foreground Monograph Callout */}
            <div className="relative z-10 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brass-bright bg-brass/10 border border-brass/30 px-3 py-1">
                BLUEPRINT DISCIPLINE
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl text-ivory font-light leading-snug">
                "Rejecting 82% of inventory to protect the sanctity of your acquisition."
              </h4>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 flex justify-between items-center text-xs font-mono text-ivory-dim/70">
              <span>BENGALURU PRIME RESIDENTIAL</span>
              <span>STANDARDS RATIO 1:5.5</span>
            </div>
          </div>

          {/* Right Column: Layered Architectural Photography with Parallax Speed */}
          <div className="lg:col-span-6 relative">
            <div
              ref={photoParallaxRef}
              className="relative w-full h-[480px] sm:h-[560px] border border-white/10 overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/about_us_architecture.jpg"
                alt="Dreams Realty Modern Architecture Bangalore"
                fill
                className="object-cover object-center filter brightness-[0.88] contrast-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Inset Vignette & Brass Frame Accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-brass-bright">
                    MATERIAL INTEGRITY
                  </p>
                  <p className="font-serif text-lg text-ivory font-light">
                    Natural Stone, Monolithic Concrete & Bangalore Light
                  </p>
                </div>
                <span className="text-xs font-mono text-ivory-dim/60">EST. 2009</span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Editorial Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chapters.map((chap) => (
            <div
              key={chap.number}
              className="bg-graphite-950 border border-white/10 p-8 sm:p-10 relative group hover:border-brass/50 transition-all duration-500 shadow-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono tracking-[0.25em] text-brass">
                  {chap.number}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-ivory-dim/60">
                  {chap.label}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-ivory font-light mb-4 leading-snug">
                {chap.title}
              </h3>

              <p className="text-sm text-ivory-dim font-light leading-relaxed mb-8">
                {chap.description}
              </p>

              {/* Metric Row */}
              <div className="pt-6 border-t border-white/10 flex justify-between items-baseline">
                {chap.metrics.slice(0, 2).map((m, i) => (
                  <div key={i}>
                    <p className="font-serif text-2xl text-brass-bright font-light">{m.value}</p>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-ivory-dim/60 mt-1">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
