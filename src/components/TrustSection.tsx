"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function TrustSection() {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    {
      number: "01",
      tag: "DUE DILIGENCE",
      title: "Comprehensive & Verified Properties",
      description:
        "Every single villa, apartment, and plot in our portfolio undergoes thorough physical inspection and complete legal title verification, so you invest with complete peace of mind.",
      perks: ["100% Legal Title Verification", "Physical Site & Amenity Audit", "Transparent Documentation"]
    },
    {
      number: "02",
      tag: "MARKET EXCELLENCE",
      title: "Exhaustive Search for Buying & Renting",
      description:
        "As Bangalore's most trusted luxury realtor, we curate prime inventory across East, North, Central, and South Bengaluru. Whether acquiring a generational villa or leasing an executive penthouse, we tailor choices to your exact lifestyle.",
      perks: ["Curated High-Growth Corridors", "Personalized Property Shortlists", "Transparent Commercial Negotiations"]
    },
    {
      number: "03",
      tag: "FULL SPECTRUM ADVISORY",
      title: "15+ Years of Solutions & Certitude",
      description:
        "Real estate decisions require seasoned guidance. Our in-house legal experts, mortgage advisors, and property consultants assist you at every milestone—from initial site visits to tax advisory, registration, and key handover.",
      perks: ["Banking & Home Loan Assistance", "Lawyer-Led Gift Deeds & e-Khata", "Seamless Registration Support"]
    }
  ];

  return (
    <section id="trust-section" className="py-24 bg-gradient-to-b from-[#F8F5ED] via-[#EBE5D9]/40 to-[#F8F5ED] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.22em] font-semibold text-[#4F7399] block mb-3"
          >
            Why Bangalore Trusts Dreams Realty
          </motion.span>
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F3A5F] leading-[1.15]"
          >
            The Gold Standard of Real Estate Advisory.
          </motion.h2>
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#1F3A5F]/80 text-base md:text-lg mt-4 leading-relaxed"
          >
            Founded on integrity, precision, and verified documentation. We eliminate the uncertainty in Bangalore real estate.
          </motion.p>
        </div>

        {/* 3 Benefit Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[20px] p-8 shadow-[0_10px_32px_rgba(31,58,95,0.05)] hover:shadow-[0_16px_40px_rgba(31,58,95,0.09)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-bold text-[#4F7399]/40 group-hover:text-[#4F7399] transition-colors">
                    {item.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#4F7399] bg-[#4F7399]/10 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1F3A5F] mb-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#1F3A5F]/75 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Perks List */}
              <div className="pt-6 border-t border-[#1F3A5F]/10 flex flex-col gap-2.5">
                {item.perks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-[#1F3A5F] font-medium">
                    <span className="w-4 h-4 rounded-full bg-[#1F3A5F] text-[#F8F5ED] flex items-center justify-center text-[10px] flex-shrink-0">
                      ✓
                    </span>
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Stats Strip */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white/70 backdrop-blur-md border border-[#1F3A5F]/10 rounded-[20px] p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div>
            <div className="font-serif text-3xl md:text-4xl font-bold text-[#1F3A5F]">15+</div>
            <div className="text-xs uppercase tracking-[0.16em] text-[#4F7399] font-medium mt-1">Years of Trust</div>
          </div>
          <div>
            <div className="font-serif text-3xl md:text-4xl font-bold text-[#1F3A5F]">100%</div>
            <div className="text-xs uppercase tracking-[0.16em] text-[#4F7399] font-medium mt-1">Title Verification</div>
          </div>
          <div>
            <div className="font-serif text-3xl md:text-4xl font-bold text-[#1F3A5F]">5.0 ★</div>
            <div className="text-xs uppercase tracking-[0.16em] text-[#4F7399] font-medium mt-1">Google Rating</div>
          </div>
          <div>
            <div className="font-serif text-3xl md:text-4xl font-bold text-[#1F3A5F]">₹ 0</div>
            <div className="text-xs uppercase tracking-[0.16em] text-[#4F7399] font-medium mt-1">Hidden Charges</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
