"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-[#F8F5ED] border border-[#1F3A5F]/15 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500 w-full"
    >
      <Link href={`/property/${property.id}`} className="block h-full">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#DCD3C4]/30">
          <motion.div
            style={{ transformStyle: "preserve-3d" }}
            className="w-full h-full"
          >
            {property.images && property.images.length > 0 ? (
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#1F3A5F]/60 text-sm uppercase tracking-widest font-mono">
                No Image
              </div>
            )}
          </motion.div>
          
          <div className="absolute top-4 left-4 flex gap-2" style={{ transform: "translateZ(30px)" }}>
            <span className="bg-[#1F3A5F] text-[#F8F5ED] text-xs uppercase font-mono tracking-widest px-3 py-1 font-semibold">
              {property.purpose}
            </span>
            {property.isFeatured && (
              <span className="bg-[#4F7399] text-[#F8F5ED] text-xs uppercase font-mono tracking-widest px-3 py-1 font-semibold shadow-sm">
                Featured
              </span>
            )}
          </div>
          
          <div className="absolute bottom-4 right-4 bg-[#F8F5ED]/95 backdrop-blur-sm border border-[#1F3A5F]/15 px-4 py-2" style={{ transform: "translateZ(20px)" }}>
            <span className="font-serif text-lg text-[#1F3A5F] font-semibold">{property.price}</span>
          </div>
        </div>

        <div className="p-6 relative bg-[#F8F5ED] z-10 flex flex-col justify-between h-full">
          <div>
            <h3 className="font-serif text-xl text-[#1F3A5F] mb-2 line-clamp-1 group-hover:text-[#4F7399] transition-colors">
              {property.title}
            </h3>
            <p className="text-xs text-[#1F3A5F]/70 mb-4 font-mono uppercase tracking-wider font-medium">
              {property.location}
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-[#1F3A5F]/70 pt-4 border-t border-[#1F3A5F]/15">
              {property.configuration && (
                <span className="flex items-center gap-1.5">
                  <span className="text-[#4F7399]">🛏</span> {property.configuration}
                </span>
              )}
              {property.area && (
                <span className="flex items-center gap-1.5">
                  <span className="text-[#4F7399]">📐</span> {property.area}
                </span>
              )}
            </div>
          </div>
          
          <div className="mt-6">
            <span className="inline-block w-full text-center border border-[#1F3A5F] text-[#1F3A5F] py-2.5 text-xs font-mono uppercase tracking-widest font-semibold group-hover:bg-[#1F3A5F] group-hover:text-[#F8F5ED] transition-colors">
              Enquire Now
            </span>
          </div>
        </div>
        
        {/* Subtle hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </Link>
    </motion.div>
  );
}
