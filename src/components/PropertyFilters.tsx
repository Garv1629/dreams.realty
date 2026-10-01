"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PropertyFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    location: searchParams.get("location") || "",
    type: searchParams.get("type") || "",
    budget: searchParams.get("budget") || "",
    bhk: searchParams.get("bhk") || "",
    status: searchParams.get("status") || ""
  });

  const updateFilter = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`);
  };

  const removeFilter = (key: string) => {
    updateFilter(key, "");
  };

  const clearFilters = () => {
    setFilters({ location: "", type: "", budget: "", bhk: "", status: "" });
    router.push("?");
  };

  const activeFiltersEntries = Object.entries(filters).filter(([_, val]) => val !== "");
  const hasActiveFilters = activeFiltersEntries.length > 0;

  const FilterContent = () => (
    <>
      <div className="flex items-center justify-between mb-6 border-b border-[#1F3A5F]/15 pb-4">
        <h3 className="font-serif text-xl text-[#1F3A5F] font-normal">Filter Portfolio</h3>
        {hasActiveFilters && (
          <button onClick={clearFilters} className="text-xs uppercase tracking-widest font-mono text-[#4F7399] hover:underline">
            Clear All
          </button>
        )}
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-6">
          {activeFiltersEntries.map(([key, value]) => (
            <span key={key} className="bg-[#1F3A5F] text-[#F8F5ED] text-xs px-3 py-1 font-mono flex items-center gap-2">
              {value}
              <button onClick={() => removeFilter(key)} className="hover:text-[#A7B8CC]">×</button>
            </span>
          ))}
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label className="block text-xs font-semibold text-[#1F3A5F] mb-2 uppercase font-mono tracking-widest">District</label>
          <select 
            className="w-full bg-[#DCD3C4]/30 border border-[#1F3A5F]/20 p-3 text-xs text-[#1F3A5F] focus:border-[#4F7399] outline-none cursor-pointer"
            value={filters.location}
            onChange={(e) => updateFilter("location", e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="Whitefield">Whitefield</option>
            <option value="Indiranagar">Indiranagar</option>
            <option value="Malleswaram">Malleswaram</option>
            <option value="Hegde Nagar">Hegde Nagar</option>
            <option value="Hennur Road">Hennur Road</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1F3A5F] mb-2 uppercase font-mono tracking-widest">Typology</label>
          <select 
            className="w-full bg-[#DCD3C4]/30 border border-[#1F3A5F]/20 p-3 text-xs text-[#1F3A5F] focus:border-[#4F7399] outline-none cursor-pointer"
            value={filters.type}
            onChange={(e) => updateFilter("type", e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Villa">Villa & Estates</option>
            <option value="Apartment">Sky Penthouses</option>
            <option value="Plot">Private Sanctuaries</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1F3A5F] mb-2 uppercase font-mono tracking-widest">Configuration</label>
          <div className="flex flex-wrap gap-2">
            {["1", "2", "3", "4", "5+"].map(bhk => (
              <button
                key={bhk}
                onClick={() => updateFilter("bhk", filters.bhk === bhk ? "" : bhk)}
                className={`px-4 py-2 text-xs font-mono border transition-colors ${filters.bhk === bhk ? "bg-[#1F3A5F] text-[#F8F5ED] border-[#1F3A5F]" : "bg-[#F8F5ED] text-[#1F3A5F] border-[#1F3A5F]/20 hover:border-[#4F7399]"}`}
              >
                {bhk} BHK
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1F3A5F] mb-2 uppercase font-mono tracking-widest">Status</label>
          <div className="space-y-2 text-xs font-mono">
            {["Under Construction", "Ready Homes", "New Launch", "Resale"].map(status => (
              <label key={status} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="radio" 
                  name="status"
                  className="w-4 h-4 accent-[#1F3A5F]" 
                  checked={filters.status === status}
                  onChange={() => updateFilter("status", status)}
                />
                <span className="text-[#1F3A5F] group-hover:text-[#4F7399] transition-colors">{status}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block bg-[#F8F5ED] border border-[#1F3A5F]/15 p-6 shadow-sm sticky top-24">
        <FilterContent />
      </div>

      {/* Mobile Drawer Trigger */}
      <div className="lg:hidden sticky top-[72px] z-30 bg-[#F8F5ED] p-4 border-b border-[#1F3A5F]/15">
        <button 
          onClick={() => setIsMobileOpen(true)}
          className="w-full flex justify-between items-center bg-[#1F3A5F] text-[#F8F5ED] px-6 py-3 text-xs uppercase font-mono tracking-widest font-semibold"
        >
          <span>Filters {hasActiveFilters && `(${activeFiltersEntries.length})`}</span>
          <span>≡</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#F8F5ED] overflow-y-auto"
          >
            <div className="p-6">
              <button 
                onClick={() => setIsMobileOpen(false)}
                className="absolute top-6 right-6 text-3xl text-[#1F3A5F] hover:text-[#4F7399]"
              >
                ×
              </button>
              <div className="mt-8">
                <FilterContent />
                <button 
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full mt-8 bg-[#1F3A5F] hover:bg-[#4F7399] text-[#F8F5ED] px-6 py-4 text-xs uppercase font-mono tracking-widest font-semibold transition-colors shadow-sm"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
