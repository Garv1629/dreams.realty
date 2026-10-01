"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

export default function FooterFinaleNight() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  if (pathname?.startsWith("/campaign")) return null;

  const fadeUp = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const columnsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  return (
    <footer
      id="footer-section"
      className="relative w-full bg-[#1F3A5F] text-[#F8F5ED] pt-24 pb-16 px-6 md:px-12 border-t border-[#A7B8CC]/20"
    >
      <div className="max-w-[1560px] mx-auto space-y-16">
        {/* Top Statement */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#A7B8CC]/25 pb-12 gap-8"
        >
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#A7B8CC] block mb-3 font-semibold">
              MOST TRUSTED REALTOR IN BANGALORE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F8F5ED] font-normal leading-tight tracking-tight">
              Dreams Realty. <br />
              <span className="text-[#DCD3C4] italic font-light">Find Your Perfect Home.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=918553999922"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4F7399] hover:bg-[#A7B8CC] hover:text-[#1F3A5F] text-[#F8F5ED] font-serif text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 transition-colors shadow-sm"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+918150041742"
              className="border border-[#A7B8CC]/40 hover:bg-[#F8F5ED] hover:text-[#1F3A5F] text-[#F8F5ED] text-xs uppercase font-mono tracking-widest py-4 px-8 transition-colors"
            >
              Call Us
            </a>
          </div>
        </motion.div>

        {/* 4-Column Directory */}
        <motion.div
          variants={columnsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-[#A7B8CC]/25 pb-16 text-sm font-light"
        >
          {/* Col 1: Sales & Support */}
          <motion.div variants={fadeUp} className="space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#A7B8CC] block font-semibold">
              SALES & SUPPORT
            </span>
            <ul className="space-y-2.5 text-xs font-mono text-[#F8F5ED]/80">
              <li>
                <a href="tel:+918150041742" className="hover:text-[#DCD3C4] transition-colors">
                  +91 81500 41742
                </a>
              </li>
              <li>
                <a href="tel:+918553999922" className="hover:text-[#DCD3C4] transition-colors">
                  +91 85539 99922
                </a>
              </li>
              <li>
                <a href="tel:+919663982707" className="hover:text-[#DCD3C4] transition-colors">
                  +91 96639 82707
                </a>
              </li>
              <li>
                <a href="mailto:info@dreamsrealty.co.in" className="hover:text-[#DCD3C4] transition-colors">
                  info@dreamsrealty.co.in
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Col 2: Properties */}
          <motion.div variants={fadeUp} className="space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#A7B8CC] block font-semibold">
              PROPERTIES
            </span>
            <ul className="space-y-2.5 text-xs font-mono text-[#F8F5ED]/80">
              <li>
                <Link href="/property-for-sale" className="hover:text-[#DCD3C4] transition-colors">
                  Properties for Sale
                </Link>
              </li>
              <li>
                <Link href="/property-for-rent" className="hover:text-[#DCD3C4] transition-colors">
                  Properties for Rent
                </Link>
              </li>
              <li>
                <Link href="/properties-by-location" className="hover:text-[#DCD3C4] transition-colors">
                  Properties by Location
                </Link>
              </li>
              <li>
                <Link href="/properties-by-developers" className="hover:text-[#DCD3C4] transition-colors">
                  Properties by Developers
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Col 3: Company */}
          <motion.div variants={fadeUp} className="space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#A7B8CC] block font-semibold">
              COMPANY
            </span>
            <ul className="space-y-2.5 text-xs font-mono text-[#F8F5ED]/80">
              <li>
                <Link href="/about-us" className="hover:text-[#DCD3C4] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#DCD3C4] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#DCD3C4] transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-[#DCD3C4] transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/guidelines-value" className="hover:text-[#DCD3C4] transition-colors">
                  Guidelines Value
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Col 4: Follow Us */}
          <motion.div variants={fadeUp} className="space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#A7B8CC] block font-semibold">
              FOLLOW US
            </span>
            <ul className="space-y-2.5 text-xs font-mono text-[#F8F5ED]/80">
              <li>
                <a href="https://twitter.com/dreams_realty" target="_blank" rel="noopener noreferrer" className="hover:text-[#DCD3C4] transition-colors">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/residentialpropertymanagers/" target="_blank" rel="noopener noreferrer" className="hover:text-[#DCD3C4] transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dreamsrealty_whitefield/" target="_blank" rel="noopener noreferrer" className="hover:text-[#DCD3C4] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCxjAlLiq8o_owRJPxBYGNHA" target="_blank" rel="noopener noreferrer" className="hover:text-[#DCD3C4] transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/dreams-realty-pvt-ltd" target="_blank" rel="noopener noreferrer" className="hover:text-[#DCD3C4] transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-[11px] text-[#F8F5ED]/50 leading-relaxed border-b border-[#A7B8CC]/25 pb-8"
        >
          <p className="font-semibold text-[#A7B8CC] mb-2 uppercase tracking-widest text-[10px]">Privacy Policy & Disclaimer</p>
          <p>
            Any content mentioned in this website is sourced from the Developer/Builder for information purpose only
            and not to be considered as an official website. This Website belongs to Authorised Sales Partner of
            Dreams Realty and does not include Dreams Realty Sales Team. The details given here are sourced content
            from the builder but does not abide Dreams Realty to this website in any manner.
          </p>
        </motion.div>

        {/* Bottom Colophon */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F8F5ED]/60"
        >
          <p>© {new Date().getFullYear()} Dreams Realty. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#DCD3C4] transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#DCD3C4] transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
