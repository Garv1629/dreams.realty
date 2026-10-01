"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FooterEnding() {
  const pathname = usePathname();
  const footerRef = useRef<HTMLElement>(null);
  const nightSkyRef = useRef<HTMLDivElement>(null);
  const contentStaggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || pathname?.startsWith("/campaign")) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!footerRef.current) return;

      // 1. Transition into calm dark architectural night scene
      if (nightSkyRef.current) {
        gsap.fromTo(
          nightSkyRef.current,
          { opacity: 0, scale: 1.05 },
          {
            opacity: 1,
            scale: 1.0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 80%",
              end: "top 30%",
              scrub: 1,
            },
          }
        );
      }

      // 2. Clean staggered reveals of contact and colophon
      const elements = contentStaggerRef.current?.querySelectorAll(".footer-stagger-item");
      if (elements && elements.length > 0) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 65%",
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, [pathname]);

  if (pathname?.startsWith("/campaign")) return null;

  return (
    <footer
      ref={footerRef}
      className="relative bg-graphite-950 text-ivory pt-32 pb-20 overflow-hidden border-t border-white/5"
    >
      {/* Calm Architectural Night Scene Backdrop */}
      <div
        ref={nightSkyRef}
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-1000"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-graphite-900 via-graphite-950 to-[#040507]" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-radial-gradient from-brass/5 via-transparent to-transparent opacity-40" />
        <div className="absolute inset-0 architectural-blueprint opacity-10" />
      </div>

      <div
        ref={contentStaggerRef}
        className="max-w-[1560px] mx-auto px-6 md:px-12 relative z-10 space-y-24"
      >
        {/* Memorable Closing Consultation Sanctuary */}
        <div className="footer-stagger-item max-w-4xl mx-auto text-center space-y-8 pb-16 border-b border-white/10">
          <span className="text-[11px] uppercase font-mono tracking-[0.3em] text-brass-bright">
            CONFIDENTIAL CLIENT REPRESENTATION
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-light leading-tight tracking-tight">
            Initiate a Private Dialogue with a Principal Advisor.
          </h2>
          <p className="text-base sm:text-lg text-ivory-dim font-light max-w-2xl mx-auto leading-relaxed">
            Whether acquiring an off-market private sanctuary or commissioning a discreet divestment,
            our senior partners provide unhurried, verified counsel.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto bg-brass hover:bg-brass-bright text-graphite-950 font-serif text-xs uppercase tracking-[0.25em] font-semibold px-10 py-5 transition-all duration-300 shadow-2xl"
            >
              Arrange Consultation
            </Link>
            <a
              href="https://wa.me/918150041742?text=Hello%20Dreams%20Realty%2C%20I%20would%20like%20to%20inquire%20about%20your%20curated%20properties"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/20 hover:border-brass text-ivory font-serif text-xs uppercase tracking-[0.25em] font-medium px-10 py-5 transition-all duration-300 bg-graphite-900/60 backdrop-blur-md"
            >
              Discreet WhatsApp (+91 81500 41742)
            </a>
          </div>
        </div>

        {/* Colophon Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          <div className="footer-stagger-item md:col-span-5 space-y-6">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-3xl tracking-[0.2em] text-ivory font-light group-hover:text-brass-bright transition-colors">
                DREAMS REALTY
              </span>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-brass mt-1">
                ARCHITECTURAL ADVISORY • BENGALURU
              </p>
            </Link>
            <p className="text-sm text-ivory-dim font-light leading-relaxed max-w-md">
              We represent authenticated luxury residences, private villas, and landmark architectural developments
              across Bangalore. Every asset undergoes title, zoning, and structural provenance audits.
            </p>
            <div className="pt-2 text-xs font-mono tracking-widest text-ivory-dim/70 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span>ESTABLISHED 2009 • 15+ YEARS OF CONTINUOUS CUSTODIANSHIP</span>
            </div>
          </div>

          <div className="footer-stagger-item md:col-span-3 space-y-4">
            <p className="text-xs uppercase font-mono tracking-[0.25em] text-brass">
              CONCIERGE & ADVISORY
            </p>
            <ul className="space-y-3 text-sm text-ivory-dim font-light">
              <li>
                <a href="tel:+918150041742" className="hover:text-brass-bright transition-colors font-mono text-xs">
                  +91 81500 41742
                </a>
              </li>
              <li>
                <a href="tel:+918553999922" className="hover:text-brass-bright transition-colors font-mono text-xs">
                  +91 85539 99922
                </a>
              </li>
              <li>
                <a href="tel:+919663982707" className="hover:text-brass-bright transition-colors font-mono text-xs">
                  +91 96639 82707
                </a>
              </li>
              <li>
                <a href="mailto:info@dreamsrealty.co.in" className="hover:text-brass-bright transition-colors font-mono text-xs">
                  info@dreamsrealty.co.in
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-stagger-item md:col-span-2 space-y-4">
            <p className="text-xs uppercase font-mono tracking-[0.25em] text-brass">
              PORTFOLIO INDEX
            </p>
            <ul className="space-y-2.5 text-xs text-ivory-dim uppercase tracking-wider font-light">
              <li><Link href="/property-for-sale" className="hover:text-ivory transition-colors">Acquisitions</Link></li>
              <li><Link href="/property-for-rent" className="hover:text-ivory transition-colors">Leasehold</Link></li>
              <li><Link href="/properties-by-location" className="hover:text-ivory transition-colors">Prime Enclaves</Link></li>
              <li><Link href="/properties-by-developers" className="hover:text-ivory transition-colors">Partner Developers</Link></li>
              <li><Link href="/buy-sell" className="hover:text-ivory transition-colors">Divestment Flow</Link></li>
            </ul>
          </div>

          <div className="footer-stagger-item md:col-span-2 space-y-4">
            <p className="text-xs uppercase font-mono tracking-[0.25em] text-brass">
              ATELIER & ETHOS
            </p>
            <ul className="space-y-2.5 text-xs text-ivory-dim uppercase tracking-wider font-light">
              <li><Link href="/about-us" className="hover:text-ivory transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-ivory transition-colors">Journal</Link></li>
              <li><Link href="/guidelines-value" className="hover:text-ivory transition-colors">Guideline Values</Link></li>
              <li><Link href="/career" className="hover:text-ivory transition-colors">Careers</Link></li>
              <li><Link href="/admin/leads" className="hover:text-brass transition-colors">Client Portal</Link></li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Disclaimers */}
        <div className="footer-stagger-item pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[11px] font-mono text-ivory-dim/50 border-b border-white/5 pb-8">
          <p>© {new Date().getFullYear()} DREAMS REALTY. ALL RIGHTS RESERVED. BENGALURU, KARNATAKA.</p>
          <div className="flex flex-wrap gap-6 text-[11px] font-mono">
            <Link href="/privacy-policy" className="hover:text-ivory transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-ivory transition-colors">Terms of Service</Link>
            <Link href="/guidelines-value" className="hover:text-ivory transition-colors">Guidelines Value</Link>
            <Link href="/style-guide" className="hover:text-brass transition-colors">Design System</Link>
          </div>
        </div>

        <p className="footer-stagger-item text-[10px] font-mono text-ivory-dim/40 max-w-4xl leading-relaxed">
          DISCLAIMER: Any content mentioned in this website is sourced from the Developer / Builder for information
          purposes only and not to be considered as an official developer website. Dreams Realty operates as an
          authorized real estate advisory and verified sales partner in Bangalore.
        </p>
      </div>
    </footer>
  );
}
