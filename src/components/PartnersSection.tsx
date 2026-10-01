"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function PartnersSection() {
  const shouldReduceMotion = useReducedMotion();

  const developers = [
    { name: "Prestige Group", type: "Leading National Developer" },
    { name: "Sobha Developers", type: "Craftsmanship & Precision" },
    { name: "Brigade Group", type: "Integrated Enclaves" },
    { name: "Puravankara", type: "Iconic Luxury Living" },
    { name: "Total Environment", type: "Nature-Crafted Homes" },
    { name: "Godrej Properties", type: "Sustainable Architecture" },
    { name: "Embassy Group", type: "World-Class Residences" },
  ];

  const banks = [
    { name: "HDFC Bank", perk: "Preferred Partner Rates" },
    { name: "State Bank of India", perk: "Govt. Backed Security" },
    { name: "ICICI Bank", perk: "Instant Sanction Support" },
    { name: "Axis Bank", perk: "Flexible Tenure Plans" },
    { name: "Bank of Baroda", perk: "Competitive Rate of Interest" },
    { name: "Kotak Mahindra Bank", perk: "Bespoke Wealth Mortgage" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F8F5ED] via-[#EBE5D9]/30 to-[#F8F5ED] border-y border-[#1F3A5F]/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.22em] font-semibold text-[#4F7399] block mb-2"
          >
            Esteemed Associations
          </motion.span>
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl text-[#1F3A5F]"
          >
            India's Premier Developers & Financial Institutions
          </motion.h2>
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#1F3A5F]/75 text-sm mt-3"
          >
            Offering you direct builder access, transparent approvals, and pre-negotiated home loan clearances.
          </motion.p>
        </div>

        {/* Developers Showcase */}
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#4F7399] mb-4 text-center sm:text-left">
            Prominent Builder Partners
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
            {developers.map((dev, idx) => (
              <motion.div
                key={dev.name}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[14px] p-4 text-center shadow-xs hover:shadow-[0_8px_20px_rgba(31,58,95,0.06)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-center items-center h-24"
              >
                <span className="font-serif font-bold text-sm text-[#1F3A5F] block leading-tight">
                  {dev.name}
                </span>
                <span className="text-[10px] text-[#4F7399] mt-1 block">
                  {dev.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Banking Partners Showcase */}
        <div>
          <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#4F7399] mb-4 text-center sm:text-left">
            Approved Banking & Mortgage Partners
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {banks.map((bank, idx) => (
              <motion.div
                key={bank.name}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}
                className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[14px] p-4 text-center shadow-xs hover:shadow-[0_8px_20px_rgba(31,58,95,0.06)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-center items-center h-24"
              >
                <div className="flex items-center gap-1.5 justify-center mb-1">
                  <span className="text-xs">🏦</span>
                  <span className="font-serif font-bold text-xs sm:text-sm text-[#1F3A5F]">
                    {bank.name}
                  </span>
                </div>
                <span className="text-[10px] text-[#4F7399] block font-medium">
                  {bank.perk}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
