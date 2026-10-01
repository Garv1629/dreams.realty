"use client";
import { motion, useReducedMotion } from "framer-motion";
import { AUTHENTIC_REVIEWS } from "@/data/editorial";

export default function CustomerReviewsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-[#F8F5ED] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#1F3A5F]/15 mb-3 shadow-xs"
          >
            <span className="text-amber-500 font-bold text-xs">★★★★★</span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1F3A5F]">
              5.0 Star Rated on Google
            </span>
          </motion.div>

          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F3A5F] leading-tight"
          >
            Words from Bangalore Homeowners
          </motion.h2>

          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#1F3A5F]/75 text-sm sm:text-base mt-3"
          >
            Read authentic reviews from clients who bought, leased, or sold through Dreams Realty.
          </motion.p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AUTHENTIC_REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/85 backdrop-blur-md border border-white/80 rounded-[20px] p-8 shadow-[0_10px_32px_rgba(31,58,95,0.05)] hover:shadow-[0_16px_40px_rgba(31,58,95,0.09)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Star Rating and Google Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-500 text-sm">
                    {"★".repeat(review.rating)}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#4F7399] bg-[#4F7399]/10 px-2.5 py-1 rounded-full">
                    {review.source}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-[#1F3A5F]/85 leading-relaxed font-normal italic mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-[#1F3A5F]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1F3A5F]">
                    {review.author}
                  </h4>
                  <p className="text-xs text-[#4F7399] mt-0.5">
                    {review.role} • {review.location}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#1F3A5F]/10 flex items-center justify-center text-[#1F3A5F] font-serif font-bold text-xs">
                  {review.author.charAt(0).toUpperCase()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Footnote */}
        <div className="mt-12 text-center text-xs text-[#4F7399] font-medium">
          <span>All reviews publicly published and verified on Google Maps for Dreams Realty, Bangalore.</span>
        </div>

      </div>
    </section>
  );
}
