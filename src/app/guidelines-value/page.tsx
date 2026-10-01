import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guidelines Value | Dreams Realty",
  description: "Check the guidelines value for properties in Bangalore.",
};

export default function GuidelinesValue() {
  return (
    <main className="min-h-screen bg-ivory-warm pt-32 pb-24">
      <div className="max-w-[1000px] mx-auto px-6 md:px-16 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-deep mb-8">
          Guidelines Value
        </h1>
        <p className="text-stone-muted text-lg mb-12 max-w-2xl mx-auto">
          Understand the government guidance values for property registration in different areas of Bangalore.
        </p>

        <div className="bg-white p-12 border border-stone-muted/20 shadow-sm">
          <h3 className="font-serif text-2xl text-charcoal-deep mb-4">Need help with property valuation?</h3>
          <p className="text-stone-muted mb-8">
            Our legal and real estate experts can assist you in finding the exact guideline value for your property and calculating the registration costs.
          </p>
          <a href="/contact-us" className="inline-block bg-charcoal-deep text-ivory-warm py-4 px-8 text-sm uppercase tracking-widest font-bold hover:bg-brass-elegant transition-colors">
            Get Expert Assistance
          </a>
        </div>
      </div>
    </main>
  );
}
