"use client";
import { useState, useEffect, useRef } from "react";
import { MOCK_PROPERTIES } from "@/data/properties";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("dreams_recent_searches");
    if (saved) {
      try { setRecentSearches(JSON.parse(saved)); } catch {}
    }
  }, []);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    
    // Save to recent
    const updated = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem("dreams_recent_searches", JSON.stringify(updated));
    
    setIsOpen(false);
    setQuery("");
    // We navigate to properties list with a search parameter
    router.push(`/properties-for-sale?q=${encodeURIComponent(searchTerm)}`);
  };

  const results = query.length > 1 
    ? MOCK_PROPERTIES.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase()) || 
        p.location.toLowerCase().includes(query.toLowerCase()) ||
        p.developer.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <>
      <button 
        onClick={() => { setIsOpen(true); setTimeout(() => inputRef.current?.focus(), 100); }}
        className="text-[#1F3A5F] hover:text-[#4F7399] transition-colors text-lg p-2"
        aria-label="Open Search"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-[#F8F5ED]/98 backdrop-blur-md flex flex-col items-center pt-32 px-6"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-3xl text-[#1F3A5F] hover:text-[#4F7399] transition-colors"
            >
              ✕
            </button>

            <div className="w-full max-w-2xl relative">
              <input 
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
                placeholder="Search by locality, developer, or project..."
                className="w-full bg-transparent border-b-2 border-[#1F3A5F]/20 pb-4 text-2xl sm:text-3xl font-serif text-[#1F3A5F] focus:outline-none focus:border-[#4F7399] placeholder:text-[#1F3A5F]/40 transition-colors"
              />

              <div className="mt-8 text-left">
                {query.length > 1 ? (
                  results.length > 0 ? (
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-[#4F7399] font-mono font-bold mb-4">Suggestions</h4>
                      <div className="flex flex-col gap-2">
                        {results.map(r => (
                          <Link 
                            key={r.id} 
                            href={`/property/${r.id}`}
                            onClick={() => setIsOpen(false)}
                            className="flex justify-between items-center p-4 bg-[#F8F5ED] border border-[#1F3A5F]/10 hover:bg-[#DCD3C4]/40 transition-colors group shadow-sm"
                          >
                            <div>
                              <p className="font-serif font-medium text-[#1F3A5F] group-hover:text-[#4F7399]">{r.title}</p>
                              <p className="text-sm text-[#1F3A5F]/70">{r.location} • {r.developer}</p>
                            </div>
                            <span className="text-xs uppercase tracking-widest bg-[#1F3A5F] text-[#F8F5ED] px-2.5 py-1 font-mono font-medium">{r.purpose}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                       <p className="text-xl font-serif text-[#1F3A5F] mb-2">No exact matches found</p>
                       <p className="text-sm text-[#1F3A5F]/70 mb-6">Try searching for broader locations or browse our categories.</p>
                       <div className="flex justify-center gap-4">
                         <Link href="/property-for-sale" onClick={() => setIsOpen(false)} className="text-xs uppercase tracking-widest font-mono font-semibold border border-[#1F3A5F] px-4 py-2 text-[#1F3A5F] hover:bg-[#1F3A5F] hover:text-[#F8F5ED] transition-colors">Properties for Sale</Link>
                         <Link href="/property-for-rent" onClick={() => setIsOpen(false)} className="text-xs uppercase tracking-widest font-mono font-semibold border border-[#1F3A5F] px-4 py-2 text-[#1F3A5F] hover:bg-[#1F3A5F] hover:text-[#F8F5ED] transition-colors">Properties for Rent</Link>
                       </div>
                    </div>
                  )
                ) : (
                  recentSearches.length > 0 && (
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-[#4F7399] font-mono font-bold mb-4">Recent Searches</h4>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((s, i) => (
                          <button 
                            key={i} 
                            onClick={() => handleSearch(s)}
                            className="bg-[#DCD3C4]/40 border border-[#1F3A5F]/15 text-[#1F3A5F] px-4 py-2 rounded-none text-xs font-mono hover:bg-[#1F3A5F] hover:text-[#F8F5ED] transition-colors"
                          >
                            ⏱ {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
