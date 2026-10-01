"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BuySell() {
  const [intent, setIntent] = useState<"buy" | "sell" | null>(null);

  return (
    <main className="min-h-screen bg-ivory-warm pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-6 md:px-16 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-deep mb-4">
          How can we help you?
        </h1>
        <p className="text-stone-muted text-lg mb-12">
          Select your goal below to get started with our dedicated property experts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <button 
            onClick={() => setIntent("buy")}
            className={`p-12 border transition-all duration-300 ${intent === "buy" ? 'border-brass-elegant bg-white shadow-md' : 'border-stone-muted/20 bg-stone-muted/5 hover:bg-white hover:border-brass-elegant/50'}`}
          >
            <div className="text-4xl mb-4">🔑</div>
            <h3 className="font-serif text-2xl text-charcoal-deep mb-2">I want to Buy</h3>
            <p className="text-sm text-stone-muted">Find your dream home from our verified listings.</p>
          </button>
          
          <button 
            onClick={() => setIntent("sell")}
            className={`p-12 border transition-all duration-300 ${intent === "sell" ? 'border-brass-elegant bg-white shadow-md' : 'border-stone-muted/20 bg-stone-muted/5 hover:bg-white hover:border-brass-elegant/50'}`}
          >
            <div className="text-4xl mb-4">🏡</div>
            <h3 className="font-serif text-2xl text-charcoal-deep mb-2">I want to Sell</h3>
            <p className="text-sm text-stone-muted">Get the best market value for your property.</p>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {intent && (
            <motion.div 
              key={intent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-8 md:p-12 border border-stone-muted/20 shadow-lg text-left"
            >
              <h3 className="font-serif text-3xl text-charcoal-deep mb-8 border-b border-stone-muted/20 pb-4">
                {intent === "buy" ? "Buyer Details" : "Property Details"}
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-charcoal-deep mb-2">Full Name</label>
                  <input type="text" placeholder="Your Name" required className="w-full bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/50" />
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-1">
                    <label className="block text-xs uppercase tracking-widest font-bold text-charcoal-deep mb-2">Email Address</label>
                    <input type="email" placeholder="Your Email" required className="w-full bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/50" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs uppercase tracking-widest font-bold text-charcoal-deep mb-2">Phone Number</label>
                    <input type="tel" placeholder="Your Phone" required className="w-full bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/50" />
                  </div>
                </div>

                {intent === "buy" ? (
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-charcoal-deep mb-2">Requirements</label>
                    <textarea rows={3} placeholder="What kind of property are you looking for?" required className="w-full bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/50 resize-none"></textarea>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-charcoal-deep mb-2">Property Description</label>
                    <textarea rows={3} placeholder="Location, size, type, and expected price" required className="w-full bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/50 resize-none"></textarea>
                  </div>
                )}

                <label className="flex items-start gap-3 mt-8 text-xs text-stone-muted cursor-pointer group">
                  <input type="checkbox" className="mt-0.5 accent-brass-elegant w-4 h-4 flex-shrink-0" defaultChecked required />
                  <span className="group-hover:text-charcoal-deep transition-colors leading-relaxed">I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.</span>
                </label>

                <button type="submit" className="w-full bg-charcoal-deep text-ivory-warm py-4 text-sm uppercase tracking-widest font-bold hover:bg-brass-elegant transition-colors mt-8">
                  Submit Request
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
