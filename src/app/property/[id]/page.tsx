import { MOCK_PROPERTIES } from "@/data/properties";
import { notFound } from "next/navigation";
import PropertyGallery from "@/components/PropertyGallery";
import EnquiryForm from "@/components/EnquiryForm";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const property = MOCK_PROPERTIES.find(p => p.id === params.id);
  if (!property) return { title: "Property Not Found" };
  
  return {
    title: `${property.title} | ${property.location} | Dreams Realty`,
    description: property.description,
  };
}

export default function PropertyDetail({ params }: { params: { id: string } }) {
  const property = MOCK_PROPERTIES.find(p => p.id === params.id);
  
  if (!property) {
    notFound();
  }

  const similarProperties = MOCK_PROPERTIES.filter(p => p.type === property.type && p.id !== property.id).slice(0, 3);
  
  // Assume a property has 3D assets if it's featured, just for demonstration
  const has3D = property.isFeatured; 

  // Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": property.title,
    "description": property.description,
    "offers": {
      "@type": "Offer",
      "price": property.priceValue,
      "priceCurrency": "INR"
    },
    "about": {
      "@type": "Residence",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": property.location,
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "numberOfRooms": property.bhk,
      "floorSize": {
        "@type": "QuantitativeValue",
        "value": property.areaValue,
        "unitCode": "SQF"
      }
    }
  };

  return (
    <main className="min-h-screen bg-ivory-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Reduced padding top to allow full-width gallery visual opening */}
      <div className="pt-24 pb-8 max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-stone-muted flex flex-wrap gap-2 uppercase tracking-widest font-bold">
          <Link href="/" className="hover:text-brass-elegant transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/property-for-${property.purpose.toLowerCase()}`} className="hover:text-brass-elegant transition-colors">Properties for {property.purpose}</Link>
          <span>/</span>
          <span className="text-charcoal-deep truncate">{property.title}</span>
        </nav>

        {/* Cinematic Gallery Opening */}
        <PropertyGallery images={property.images} has3D={has3D} />

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 mt-12 relative">
          
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            {/* Header Info */}
            <div className="mb-12 border-b border-stone-muted/20 pb-8">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-charcoal-deep text-ivory-warm px-4 py-1.5 text-xs uppercase tracking-widest font-bold">{property.type}</span>
                <span className="bg-brass-elegant text-ivory-warm px-4 py-1.5 text-xs uppercase tracking-widest font-bold shadow-sm">For {property.purpose}</span>
                <span className="bg-stone-muted/10 text-charcoal-deep border border-stone-muted/20 px-4 py-1.5 text-xs uppercase tracking-widest font-bold">{property.status}</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-deep mb-4 leading-tight">
                {property.title}
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <p className="text-lg text-stone-muted flex items-center gap-2">
                  <span className="text-xl">📍</span> {property.location}
                  <span className="mx-2 hidden sm:inline">•</span>
                  <span className="block sm:inline mt-1 sm:mt-0">By <span className="font-bold text-charcoal-deep">{property.developer}</span></span>
                </p>
                <div className="text-left sm:text-right">
                  <p className="text-sm text-stone-muted uppercase tracking-widest font-bold mb-1">Asking Price</p>
                  <p className="font-serif text-4xl text-charcoal-deep">{property.price}</p>
                </div>
              </div>
            </div>

            {/* Key Specifications (Timeline/Visual Structure) */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl text-charcoal-deep mb-8">Key Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
                <div className="border-l-2 border-brass-elegant pl-4">
                  <p className="text-xs text-stone-muted uppercase tracking-widest font-bold mb-2">Configuration</p>
                  <p className="text-xl font-bold text-charcoal-deep">{property.bhk} BHK</p>
                </div>
                <div className="border-l-2 border-brass-elegant pl-4">
                  <p className="text-xs text-stone-muted uppercase tracking-widest font-bold mb-2">Super Built-up Area</p>
                  <p className="text-xl font-bold text-charcoal-deep">{property.area}</p>
                </div>
                <div className="border-l-2 border-brass-elegant pl-4">
                  <p className="text-xs text-stone-muted uppercase tracking-widest font-bold mb-2">Furnishing</p>
                  <p className="text-xl font-bold text-charcoal-deep">{property.furnishing}</p>
                </div>
                <div className="border-l-2 border-brass-elegant pl-4">
                  <p className="text-xs text-stone-muted uppercase tracking-widest font-bold mb-2">Facing</p>
                  <p className="text-xl font-bold text-charcoal-deep">{property.facing}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl text-charcoal-deep mb-6">About the Property</h2>
              <div className="prose prose-lg text-stone-muted max-w-none">
                <p className="leading-relaxed">{property.description}</p>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl text-charcoal-deep mb-8">Amenities & Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {property.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3 text-charcoal-deep group">
                    <div className="w-8 h-8 rounded-full bg-stone-muted/10 flex items-center justify-center text-brass-elegant group-hover:bg-brass-elegant group-hover:text-white transition-colors">
                      ✦
                    </div>
                    <span className="font-medium text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Location verified */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl text-charcoal-deep mb-8">Verified Location</h2>
              <div className="aspect-video bg-stone-muted/5 border border-stone-muted/20 flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] transition-opacity group-hover:opacity-30"></div>
                 <div className="z-10 text-center bg-white/90 backdrop-blur-md p-8 shadow-sm">
                    <p className="text-sm text-stone-muted uppercase tracking-widest font-bold mb-2">Located in</p>
                    <p className="font-serif text-2xl text-charcoal-deep mb-6">{property.location}, Bangalore</p>
                    <button className="text-xs uppercase tracking-widest text-ivory-warm bg-charcoal-deep font-bold px-6 py-3 hover:bg-brass-elegant transition-colors">
                      View on Google Maps
                    </button>
                 </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Sticky Enquiry Panel */}
          <div className="lg:w-1/3">
             <div className="sticky top-24">
                <EnquiryForm propertyId={property.id} propertyTitle={property.title} source="Property Detail" />
             </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-24 pt-16 border-t border-stone-muted/20">
            <h2 className="font-serif text-3xl text-charcoal-deep mb-8">Similar Properties in Bangalore</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarProperties.map(prop => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Fixed Enquiry Action */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-muted/20 p-4 flex gap-2 z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
         <a href="tel:+918150041742" className="flex-1 bg-charcoal-deep text-ivory-warm text-center py-3 text-sm uppercase tracking-widest font-bold">Call</a>
         <a href="https://api.whatsapp.com/send?phone=918553999922" className="flex-1 bg-[#25D366] text-white text-center py-3 text-sm uppercase tracking-widest font-bold">WhatsApp</a>
      </div>
    </main>
  );
}
