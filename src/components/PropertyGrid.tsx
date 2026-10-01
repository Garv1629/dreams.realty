"use client";
import { useSearchParams } from "next/navigation";
import { MOCK_PROPERTIES } from "@/data/properties";
import PropertyCard from "./PropertyCard";
import { motion } from "framer-motion";

export default function PropertyGrid({ purpose }: { purpose?: "Sale" | "Rent" }) {
  const searchParams = useSearchParams();
  
  const locationFilter = searchParams.get("location");
  const typeFilter = searchParams.get("type");
  const bhkFilter = searchParams.get("bhk");
  const statusFilter = searchParams.get("status");

  let filteredProperties = MOCK_PROPERTIES;
  
  if (purpose) {
    filteredProperties = filteredProperties.filter(p => p.purpose === purpose);
  }
  if (locationFilter) {
    filteredProperties = filteredProperties.filter(p => p.location.includes(locationFilter));
  }
  if (typeFilter) {
    filteredProperties = filteredProperties.filter(p => p.type === typeFilter);
  }
  if (bhkFilter) {
    filteredProperties = filteredProperties.filter(p => p.bhk === bhkFilter || (bhkFilter === "5+" && parseInt(p.bhk) >= 5));
  }
  if (statusFilter) {
    filteredProperties = filteredProperties.filter(p => p.status === statusFilter);
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center text-sm text-stone-muted">
        <p>Showing <span className="font-bold text-charcoal-deep">{filteredProperties.length}</span> properties</p>
        <div className="flex items-center gap-2">
          <span>Sort by:</span>
          <select className="bg-transparent border-none outline-none font-bold text-charcoal-deep cursor-pointer">
            <option>Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProperties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-center py-20 bg-white border border-stone-muted/20"
        >
          <div className="font-serif text-3xl text-stone-muted mb-4">No Properties Found</div>
          <p className="text-stone-muted/80">Try adjusting your filters to see more results.</p>
        </motion.div>
      )}
    </div>
  );
}
