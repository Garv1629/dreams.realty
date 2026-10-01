"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MOCK_PROPERTIES } from "@/data/properties";
import SectionHeadingReveal from "@/components/animations/SectionHeadingReveal";

export default function FeaturedPropertiesHorizontal() {
  const properties = MOCK_PROPERTIES;
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: 0, y: 32, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const imageRevealVariants = {
    hidden: shouldReduceMotion
      ? { scale: 1, clipPath: "inset(0% 0% 0% 0% round 0px)" }
      : { scale: 1.12, clipPath: "inset(4% 0% 4% 0% round 4px)" },
    visible: {
      scale: 1,
      clipPath: "inset(0% 0% 0% 0% round 0px)",
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      id="featured-properties-section"
      className="relative w-full bg-[#F8F5ED] text-[#1F3A5F] py-24 md:py-32 px-6 md:px-12 border-t border-[#1F3A5F]/10"
    >
      <div className="max-w-[1560px] mx-auto">
        {/* Section Heading with Text-Mask Reveal */}
        <SectionHeadingReveal
          chapter="FEATURED PROPERTIES"
          title="Featured Properties to Buy"
          rightLabel="VERIFIED PROPERTIES IN BANGALORE"
        />

        {/* Staggered Editorial Property Cards Stack */}
        <div className="space-y-20 md:space-y-28">
          {properties.map((property, idx) => (
            <motion.article
              key={property.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="relative bg-[#DCD3C4]/40 border border-[#1F3A5F]/15 overflow-hidden shadow-sm hover:shadow-xl transition-[border-color,box-shadow] duration-300 hover:border-[#4F7399]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
                {/* Primary Photography with Rounded Clip-Path Reveal (7 cols) */}
                <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-full overflow-hidden group">
                  <motion.div
                    variants={imageRevealVariants}
                    className="relative w-full h-full min-h-[380px] lg:min-h-[560px]"
                  >
                    <Image
                      src={property.images[0]}
                      alt={property.title}
                      fill
                      priority={idx === 0}
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#DCD3C4]/60 via-transparent to-transparent lg:hidden pointer-events-none" />
                  
                  {/* Index Marker */}
                  <div className="absolute top-6 left-6 bg-[#F8F5ED]/95 backdrop-blur-md px-3.5 py-1.5 border border-[#1F3A5F]/15 shadow-sm z-10">
                    <span className="text-xs font-mono tracking-widest text-[#1F3A5F] font-bold">
                      0{idx + 1} / 0{properties.length}
                    </span>
                  </div>
                </div>

                {/* Editorial Details & Metadata (5 cols) */}
                <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-[#F8F5ED]">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-[0.25em] text-[#4F7399] font-semibold">
                      <span>{property.type}</span>
                      <span>•</span>
                      <span>{property.location}</span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl text-[#1F3A5F] font-normal leading-snug tracking-tight">
                      {property.title}
                    </h3>

                    <p className="text-sm text-[#1F3A5F]/80 font-light leading-relaxed">
                      {property.description}
                    </p>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1F3A5F]/15 font-mono text-xs">
                      <div>
                        <span className="text-[10px] text-[#1F3A5F]/60 block mb-1">TYPOLOGY</span>
                        <span className="text-[#1F3A5F] font-semibold">{property.configuration || `${property.bhk} BHK`}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#1F3A5F]/60 block mb-1">SUPER AREA</span>
                        <span className="text-[#1F3A5F] font-semibold">{property.area}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#1F3A5F]/60 block mb-1">PRICE</span>
                        <span className="text-[#1F3A5F] font-serif text-base font-semibold block">
                          {property.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-8 mt-8 border-t border-[#1F3A5F]/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <Link
                      href={`/property-for-sale/${property.id}`}
                      className="flex-1 bg-[#1F3A5F] hover:bg-[#4F7399] text-[#F8F5ED] font-serif text-xs uppercase tracking-[0.2em] font-semibold py-3.5 px-6 text-center transition-colors shadow-sm"
                    >
                      Inspect Portfolio Asset
                    </Link>
                    <a
                      href={`https://wa.me/918150041742?text=Inquiry%20regarding%20${encodeURIComponent(property.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#1F3A5F] hover:bg-[#DCD3C4]/40 text-[#1F3A5F] text-xs uppercase font-mono tracking-widest py-3.5 px-6 text-center transition-colors"
                    >
                      WhatsApp Concierge
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
