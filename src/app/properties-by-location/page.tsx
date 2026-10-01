import { Suspense } from "react";
import PropertyFilters from "@/components/PropertyFilters";
import PropertyGrid from "@/components/PropertyGrid";

export default function PropertiesByLocation() {
  return (
    <main className="min-h-screen bg-ivory-warm pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal-deep mb-4">Properties by Location</h1>
          <p className="text-stone-muted max-w-2xl text-lg">Browse premium real estate properties across top localities in Bangalore.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <aside className="w-full lg:w-1/4">
            <Suspense fallback={<div className="h-96 bg-stone-muted/10 animate-pulse border border-stone-muted/20"></div>}>
              <PropertyFilters />
            </Suspense>
          </aside>
          
          <div className="w-full lg:w-3/4">
            <Suspense fallback={<div className="h-screen bg-stone-muted/10 animate-pulse border border-stone-muted/20"></div>}>
              <PropertyGrid />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
