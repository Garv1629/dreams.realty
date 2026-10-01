import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Dreams Realty | Trusted Real Estate Experts in Bangalore",
  description: "Learn about Dreams Realty, a trusted real estate partner in Bangalore. Explore our mission, values, and commitment to helping you buy, sell, or rent easily.",
};

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-ivory-warm pt-32 pb-24">
      <div className="max-w-[1000px] mx-auto px-6 md:px-16">
        <div className="mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal-deep mb-8 leading-tight">
            Real estate: Where your home dreams come true
          </h1>
          
          <div className="prose prose-lg text-stone-muted">
            <h2 className="font-serif text-3xl text-charcoal-deep mt-12 mb-6">Own Your Dreams.</h2>
            <p className="mb-6">
              We are a new age real estate advisory, brokerage and investment firm based out in East of Bengaluru primarily dealing with luxurious villas and apartments. Our clients include Top Developers, Potential home buyers of top-notch IT Professionals & NRIs, Sellers and Investors in the Bengaluru market. Our team of local market experts advise our clients on their real estate transactions leading to exceptional customer experience for them.
            </p>

            <h2 className="font-serif text-3xl text-charcoal-deep mt-12 mb-6">Our Vision</h2>
            <p className="mb-6 font-bold text-charcoal-deep">We help you find your Dream Home</p>
            <p className="mb-6">
              We believe in transparent and hassle-free deals with our customers, providing end to end services from villa/ apartment search to the happiness of ownership. We at Dreams Realty offer customers with properties best in the market by understanding customer needs and requirements. In addition to it we also provide services in Home Loans, Legal and Documents Works, Interior Designing & Property Management.
            </p>

            <h2 className="font-serif text-3xl text-charcoal-deep mt-12 mb-6">What do we do?</h2>
            <ul className="list-disc pl-6 space-y-2 mb-12">
              <li>Buy / Sell Property</li>
              <li>Understand, Valuate & Search</li>
              <li>Detail, Compare & Consult</li>
              <li>Visit, Virtual Tour & Feedback</li>
              <li>Negotiate, Documentation & Legal Assistance</li>
              <li>Interior Designing & Property Management</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 border border-stone-muted/20 text-center">
            <h4 className="font-bold text-charcoal-deep mb-4 uppercase tracking-widest text-sm">Comprehensive & Verified Properties</h4>
          </div>
          <div className="bg-white p-8 border border-stone-muted/20 text-center">
            <h4 className="font-bold text-charcoal-deep mb-4 uppercase tracking-widest text-sm">Exhaustive search options for renting and buying</h4>
          </div>
          <div className="bg-white p-8 border border-stone-muted/20 text-center">
            <h4 className="font-bold text-charcoal-deep mb-4 uppercase tracking-widest text-sm">Providing solutions for 15 Years in Bangalore</h4>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-serif text-4xl text-charcoal-deep mb-8">FAQ</h2>
          <div className="space-y-6">
            <details className="group border border-stone-muted/20 bg-white p-6 cursor-pointer">
              <summary className="font-bold text-charcoal-deep uppercase tracking-widest text-sm">Do you offer consultation services for properties?</summary>
              <div className="mt-4 text-stone-muted">
                Yes, we do offer property investment consultation services. We believe in offering properties that yield good returns for our investors. Being in the business past 11 years, our team has experts in analysing the growth potential of each investments we extend. Be it for personal living in luxury homes, premium apartments or for pure investment that you are in search for, let our team walk you through.
              </div>
            </details>
            <details className="group border border-stone-muted/20 bg-white p-6 cursor-pointer">
              <summary className="font-bold text-charcoal-deep uppercase tracking-widest text-sm">What all properties do you deal with?</summary>
              <div className="mt-4 text-stone-muted">
                We deal with both residential and commercial properties. While we talk about residential properties it includes premium villas, apartments, villaments and pent houes in gated communities of the top builders.
              </div>
            </details>
            <details className="group border border-stone-muted/20 bg-white p-6 cursor-pointer">
              <summary className="font-bold text-charcoal-deep uppercase tracking-widest text-sm">How do I verify the documents of the property I am interested in?</summary>
              <div className="mt-4 text-stone-muted">
                Dreams Realty has a team dedicated to take care of all the documents and clearance aspects of the purchase. Before we even host a property for sale, we conduct a thorough background check on various legalities around the property. Once you show interest on a property, we are obliged to produce before you any document that is involved in the transaction.
              </div>
            </details>
            <details className="group border border-stone-muted/20 bg-white p-6 cursor-pointer">
              <summary className="font-bold text-charcoal-deep uppercase tracking-widest text-sm">Which part of Bangalore do you offer service in?</summary>
              <div className="mt-4 text-stone-muted">
                Our office is in Whitefield. We offer luxury real estate services in parts of Bangalore wherever there is high growth potential in terms of real estate value. Majorly our efforts fall in East Bangalore.
              </div>
            </details>
          </div>
        </div>

      </div>
    </main>
  );
}
