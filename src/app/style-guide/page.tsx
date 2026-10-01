import React from "react";
import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import { MOCK_PROPERTIES } from "@/data/properties";

export const metadata = {
  title: "Brand & Style Guide | Dreams Realty",
  description: "Internal design system and component library.",
  robots: { index: false, follow: false }, // Keep it internal
};

export default function StyleGuide() {
  return (
    <main className="min-h-screen bg-ivory-warm pt-32 pb-24 selection:bg-brass-elegant selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        {/* Header */}
        <header className="mb-24 pb-12 border-b border-stone-muted/20">
          <p className="text-sm uppercase tracking-widest text-stone-muted font-bold mb-4">Internal Documentation</p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal-deep mb-6">Dreams Realty Design System</h1>
          <p className="text-xl text-charcoal-deep max-w-2xl leading-relaxed">
            A premium, trusted, and distinctly Bangalore-focused real estate design system.
          </p>
        </header>

        {/* Brand & Logo Usage */}
        <section className="mb-24">
          <h2 className="font-serif text-4xl text-charcoal-deep mb-8">Brand Identity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-stone-muted mb-4">Logo Usage Rules</h3>
              <ul className="space-y-4 text-charcoal-deep">
                <li className="flex gap-4"><span className="text-brass-elegant">✦</span> <strong>Primary (Light Backgrounds):</strong> Use the charcoal deep logo.</li>
                <li className="flex gap-4"><span className="text-brass-elegant">✦</span> <strong>Reversed (Dark Backgrounds):</strong> Use the ivory warm logo.</li>
                <li className="flex gap-4"><span className="text-brass-elegant">✦</span> <strong>Favicon & App Icon:</strong> Use the "DR" monogram without text.</li>
                <li className="flex gap-4"><span className="text-brass-elegant">✦</span> <strong>Mobile Nav:</strong> Use the compact logomark to preserve horizontal space.</li>
                <li className="flex gap-4"><span className="text-brass-elegant">✦</span> <strong>Clear Space:</strong> Always maintain a padding equal to the height of the "D" around the logo.</li>
              </ul>
            </div>
            <div className="bg-charcoal-deep p-12 flex items-center justify-center border border-stone-muted/20">
               <span className="font-serif text-3xl text-ivory-warm">DREAMS REALTY</span>
            </div>
          </div>
        </section>

        {/* Design Tokens - Colors */}
        <section className="mb-24">
          <h2 className="font-serif text-4xl text-charcoal-deep mb-8">Design Tokens: Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="space-y-2">
              <div className="h-24 bg-[#1a1a1a] border border-stone-muted/20"></div>
              <p className="font-bold text-charcoal-deep">Charcoal Deep</p>
              <p className="text-xs uppercase text-stone-muted">#1A1A1A • Primary Text</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-[#f4f1eb] border border-stone-muted/20"></div>
              <p className="font-bold text-charcoal-deep">Ivory Warm</p>
              <p className="text-xs uppercase text-stone-muted">#F4F1EB • Background</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-[#a9a59b] border border-stone-muted/20"></div>
              <p className="font-bold text-charcoal-deep">Stone Muted</p>
              <p className="text-xs uppercase text-stone-muted">#A9A59B • Borders / UI</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-[#d4af37] border border-stone-muted/20"></div>
              <p className="font-bold text-charcoal-deep">Brass Elegant</p>
              <p className="text-xs uppercase text-stone-muted">#D4AF37 • Accents</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-[#8a9a86] border border-stone-muted/20"></div>
              <p className="font-bold text-charcoal-deep">Sage Restrained</p>
              <p className="text-xs uppercase text-stone-muted">#8A9A86 • Secondary</p>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-red-50 text-red-900 border border-red-200 p-6">
                <p className="font-bold text-sm uppercase tracking-widest mb-1">Error State</p>
                <p>Use for validation failures and destructive actions.</p>
             </div>
             <div className="bg-green-50 text-green-900 border border-green-200 p-6">
                <p className="font-bold text-sm uppercase tracking-widest mb-1">Success State</p>
                <p>Use for form submissions and positive feedback.</p>
             </div>
          </div>
        </section>

        {/* Design Tokens - Typography */}
        <section className="mb-24">
          <h2 className="font-serif text-4xl text-charcoal-deep mb-8">Design Tokens: Typography</h2>
          <div className="space-y-12 border-l border-stone-muted/20 pl-8">
            <div>
              <p className="text-sm uppercase tracking-widest text-stone-muted font-bold mb-2">Display (Playfair Display / Serif)</p>
              <h1 className="font-serif text-6xl text-charcoal-deep leading-tight">Exceptional Homes in Bangalore</h1>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-stone-muted font-bold mb-2">Heading 2 (Playfair Display / Serif)</p>
              <h2 className="font-serif text-4xl text-charcoal-deep">Curated Properties</h2>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-stone-muted font-bold mb-2">Body Large (Inter / Sans-Serif)</p>
              <p className="text-xl text-charcoal-deep max-w-3xl leading-relaxed">Dreams Realty brings 15 years of excellence to the Bangalore real estate market. We specialize in premium properties.</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-stone-muted font-bold mb-2">UI Label / Subtitle (Inter / Sans-Serif)</p>
              <p className="text-sm uppercase tracking-widest font-bold text-charcoal-deep">Properties for Sale</p>
            </div>
          </div>
        </section>

        {/* Components - Buttons & Inputs */}
        <section className="mb-24">
          <h2 className="font-serif text-4xl text-charcoal-deep mb-8">Components: Interactive Elements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Buttons */}
            <div>
               <h3 className="text-sm uppercase tracking-widest font-bold text-stone-muted mb-6">Buttons</h3>
               <div className="space-y-4">
                  <button className="block w-full bg-charcoal-deep text-ivory-warm px-6 py-4 text-sm uppercase tracking-widest font-bold hover:bg-brass-elegant transition-colors">
                     Primary Action
                  </button>
                  <button className="block w-full border border-charcoal-deep text-charcoal-deep px-6 py-4 text-sm uppercase tracking-widest font-bold hover:bg-charcoal-deep hover:text-ivory-warm transition-colors">
                     Secondary Action
                  </button>
                  <button className="block w-full text-charcoal-deep px-6 py-4 text-sm uppercase tracking-widest font-bold hover:text-brass-elegant transition-colors text-left underline underline-offset-4">
                     Tertiary / Text Link
                  </button>
               </div>
            </div>

            {/* Inputs & Forms */}
            <div>
               <h3 className="text-sm uppercase tracking-widest font-bold text-stone-muted mb-6">Form Elements</h3>
               <div className="space-y-6">
                 <div>
                   <label className="block text-sm font-bold text-charcoal-deep mb-2 uppercase tracking-widest">Text Input</label>
                   <input type="text" placeholder="Placeholder..." className="w-full bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/70" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-charcoal-deep mb-2 uppercase tracking-widest">Select Dropdown</label>
                   <select className="w-full bg-stone-muted/10 border border-stone-muted/30 p-3 text-sm text-charcoal-deep focus:border-brass-elegant outline-none cursor-pointer">
                      <option>Option 1</option>
                      <option>Option 2</option>
                   </select>
                 </div>
                 <label className="flex items-start gap-3 mt-4 text-xs text-stone-muted cursor-pointer group">
                   <input type="checkbox" className="mt-0.5 accent-brass-elegant w-4 h-4 flex-shrink-0" defaultChecked />
                   <span className="group-hover:text-charcoal-deep transition-colors leading-relaxed">Checkbox option with consent text label.</span>
                 </label>
               </div>
            </div>
          </div>
        </section>

        {/* Components - Cards */}
        <section className="mb-24">
          <h2 className="font-serif text-4xl text-charcoal-deep mb-8">Components: Property Cards</h2>
          <p className="text-stone-muted mb-8 max-w-2xl">Cards use small corner radii (subtle framing), avoid heavy box-shadows (unless hovering), and maintain a clear visual hierarchy prioritizing the image and price.</p>
          <div className="max-w-md">
             <PropertyCard property={MOCK_PROPERTIES[0]} />
          </div>
        </section>

        {/* Layout Rules */}
        <section className="mb-24 border border-stone-muted/20 p-12 bg-white">
           <h2 className="font-serif text-3xl text-charcoal-deep mb-6">Core Design Rules</h2>
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-charcoal-deep">
             <li className="space-y-2">
                <strong>Subtle Framing:</strong> <br/>
                Keep cards and sections subtly framed. Avoid oversized rounded corners; use `rounded-none` or `rounded-sm`.
             </li>
             <li className="space-y-2">
                <strong>Cliché Avoidance:</strong> <br/>
                No oversized gradients, heavy glass effects, decorative organic blobs, or generic luxury clichés. Focus on precise geometry.
             </li>
             <li className="space-y-2">
                <strong>Accessibility First:</strong> <br/>
                All interactive elements must have visible focus rings (`focus:outline-none focus:border-brass-elegant`). Ensure contrast pairs pass WCAG AA.
             </li>
             <li className="space-y-2">
                <strong>Iconography:</strong> <br/>
                Use familiar icons (like 🛏 for beds, 📐 for area, 📍 for location) instead of dense text labels where appropriate, to reduce cognitive load.
             </li>
           </ul>
        </section>

      </div>
    </main>
  );
}
