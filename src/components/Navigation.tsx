"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import GlobalSearch from "./GlobalSearch";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname?.startsWith("/campaign")) return null;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/property-for-sale", label: "Properties for Sale" },
    { href: "/property-for-rent", label: "Properties for Rent" },
    { href: "/about-us", label: "About Us" },
    { href: "/blog", label: "Blogs" },
  ];

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2.5 px-3 sm:px-4 md:px-8" : "py-3.5 sm:py-5 px-3 sm:px-6 md:px-12"
      }`}
    >
      <div
        className={`mx-auto max-w-[1440px] transition-all duration-300 flex items-center justify-between ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border border-white/70 shadow-[0_8px_30px_rgba(31,58,95,0.06)] px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full"
            : "bg-[#F8F5ED]/80 backdrop-blur-sm border border-transparent px-2 py-1.5"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1F3A5F] flex items-center justify-center text-[#F8F5ED] font-serif font-bold text-sm sm:text-base shadow-sm group-hover:bg-[#4F7399] transition-colors shrink-0">
            D
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm sm:text-xl tracking-[0.1em] sm:tracking-[0.14em] text-[#1F3A5F] font-semibold group-hover:text-[#4F7399] transition-colors whitespace-nowrap">
              DREAMS REALTY
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-[#4F7399] font-medium hidden sm:block">
              Bangalore's Trusted Realtor
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-[0.18em] transition-colors font-medium relative py-1 ${
                  isActive
                    ? "text-[#1F3A5F] font-semibold"
                    : "text-[#1F3A5F]/75 hover:text-[#1F3A5F]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4F7399] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Phone, Search, CTA, Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <div className="hidden sm:block">
            <GlobalSearch />
          </div>

          <a
            href="tel:+918150041742"
            className="hidden xl:flex items-center gap-2 text-xs font-semibold text-[#1F3A5F] hover:text-[#4F7399] px-3 py-2 transition-colors"
          >
            <span className="text-sm">📞</span>
            <span>+91 8150041742</span>
          </a>

          <Link
            href="/contact-us"
            className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 bg-[#1F3A5F] hover:bg-[#4F7399] text-[#F8F5ED] text-xs uppercase tracking-[0.18em] font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(79,115,153,0.35)] hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Enquire Now</span>
          </Link>

          {/* Mobile Quick Call Button */}
          <a
            href="tel:+918150041742"
            aria-label="Call Dreams Realty"
            className="sm:hidden w-8 h-8 rounded-full bg-[#1F3A5F]/10 flex items-center justify-center text-xs text-[#1F3A5F]"
          >
            📞
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#1F3A5F] bg-white/90 border border-[#1F3A5F]/15 hover:bg-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 max-w-[1440px] mx-auto bg-white/95 backdrop-blur-xl border border-white/80 rounded-[20px] shadow-[0_12px_32px_rgba(31,58,95,0.08)] p-6 flex flex-col gap-4"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-[0.16em] font-medium py-2 px-3 rounded-[10px] transition-colors ${
                    pathname === link.href
                      ? "bg-[#1F3A5F]/10 text-[#1F3A5F] font-bold"
                      : "text-[#1F3A5F]/80 hover:bg-[#F8F5ED]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#1F3A5F]/10 flex flex-col gap-3">
              <a
                href="tel:+918150041742"
                className="flex items-center gap-2 text-sm font-semibold text-[#1F3A5F] px-3 py-2 rounded-[10px] hover:bg-[#F8F5ED]"
              >
                <span>📞</span> Call +91 8150041742
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=918553999922"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-[#1F3A5F] px-3 py-2 rounded-[10px] hover:bg-[#F8F5ED]"
              >
                <span>💬</span> WhatsApp Us (+91 8553999922)
              </a>
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#1F3A5F] hover:bg-[#4F7399] text-[#F8F5ED] text-xs uppercase tracking-[0.2em] font-semibold py-3 rounded-full transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
