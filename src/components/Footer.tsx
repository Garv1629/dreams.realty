"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/campaign")) return null;

  return (
    <footer className="bg-[#1F3A5F] text-[#F8F5ED] border-t border-[#A7B8CC]/20 pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 architectural-grid opacity-10 pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 md:px-12 relative z-10">
        {/* Main Colophon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[#A7B8CC]/25">
          {/* Brand & Editorial Manifesto */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-3xl tracking-[0.2em] text-[#F8F5ED] font-normal group-hover:text-[#DCD3C4] transition-colors">
                DREAMS REALTY
              </span>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A7B8CC] mt-1 font-semibold">
                ARCHITECTURAL ADVISORY • BENGALURU
              </p>
            </Link>
            <p className="text-sm text-[#F8F5ED]/80 font-light leading-relaxed max-w-md">
              We represent authenticated luxury residences, private villas, and landmark architectural developments
              across Bangalore. Each listing undergoes rigorous title, zoning, and structural provenance audits.
            </p>
            <div className="pt-2 text-xs font-mono tracking-widest text-[#F8F5ED]/70 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4F7399] inline-block" />
              <span>ESTABLISHED 2009 • 15+ YEARS OF CONTINUOUS CUSTODIANSHIP</span>
            </div>
          </div>

          {/* Sales & Concierge Advisory */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs uppercase font-mono tracking-[0.25em] text-[#A7B8CC] font-semibold">
              CONCIERGE & ADVISORY
            </p>
            <ul className="space-y-3 text-sm text-[#F8F5ED]/80 font-light">
              <li>
                <a href="tel:+918150041742" className="hover:text-[#DCD3C4] transition-colors font-mono text-xs">
                  +91 81500 41742
                </a>
              </li>
              <li>
                <a href="tel:+918553999922" className="hover:text-[#DCD3C4] transition-colors font-mono text-xs">
                  +91 85539 99922
                </a>
              </li>
              <li>
                <a href="tel:+919663982707" className="hover:text-[#DCD3C4] transition-colors font-mono text-xs">
                  +91 96639 82707
                </a>
              </li>
              <li>
                <a href="mailto:info@dreamsrealty.co.in" className="hover:text-[#DCD3C4] transition-colors font-mono text-xs">
                  info@dreamsrealty.co.in
                </a>
              </li>
            </ul>
          </div>

          {/* Portfolio & Navigation Index */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs uppercase font-mono tracking-[0.25em] text-[#A7B8CC] font-semibold">
              PORTFOLIO INDEX
            </p>
            <ul className="space-y-2.5 text-xs text-[#F8F5ED]/80 uppercase tracking-wider font-light">
              <li><Link href="/property-for-sale" className="hover:text-[#DCD3C4] transition-colors">Acquisitions</Link></li>
              <li><Link href="/property-for-rent" className="hover:text-[#DCD3C4] transition-colors">Leasehold</Link></li>
              <li><Link href="/properties-by-location" className="hover:text-[#DCD3C4] transition-colors">Prime Enclaves</Link></li>
              <li><Link href="/properties-by-developers" className="hover:text-[#DCD3C4] transition-colors">Partner Developers</Link></li>
              <li><Link href="/buy-sell" className="hover:text-[#DCD3C4] transition-colors">Divestment Flow</Link></li>
            </ul>
          </div>

          {/* Atelier & Legal */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs uppercase font-mono tracking-[0.25em] text-[#A7B8CC] font-semibold">
              ATELIER & ETHOS
            </p>
            <ul className="space-y-2.5 text-xs text-[#F8F5ED]/80 uppercase tracking-wider font-light">
              <li><Link href="/about-us" className="hover:text-[#DCD3C4] transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-[#DCD3C4] transition-colors">Journal</Link></li>
              <li><Link href="/guidelines-value" className="hover:text-[#DCD3C4] transition-colors">Guideline Values</Link></li>
              <li><Link href="/career" className="hover:text-[#DCD3C4] transition-colors">Careers</Link></li>
              <li><Link href="/admin/leads" className="hover:text-[#DCD3C4] transition-colors">Client Portal</Link></li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Colophon Disclaimers */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[11px] font-mono text-[#F8F5ED]/60 border-b border-[#A7B8CC]/20 pb-10">
          <p>© {new Date().getFullYear()} DREAMS REALTY. ALL RIGHTS RESERVED. BENGALURU, KARNATAKA.</p>
          <div className="flex flex-wrap gap-6 text-[11px] font-mono">
            <Link href="/privacy-policy" className="hover:text-[#DCD3C4] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#DCD3C4] transition-colors">Terms of Service</Link>
            <Link href="/guidelines-value" className="hover:text-[#DCD3C4] transition-colors">Guidelines Value</Link>
            <Link href="/style-guide" className="hover:text-[#DCD3C4] transition-colors">Design System</Link>
          </div>
        </div>

        {/* Mandatory Genuine Disclaimer */}
        <p className="pt-8 text-[10px] font-mono text-[#F8F5ED]/50 max-w-4xl leading-relaxed">
          DISCLAIMER: Any content mentioned in this website is sourced from the Developer / Builder for information
          purposes only and not to be considered as an official developer website. Dreams Realty operates as an
          authorized real estate advisory and verified sales partner in Bangalore.
        </p>
      </div>
    </footer>
  );
}
