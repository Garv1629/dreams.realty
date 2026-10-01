import { MOCK_CAMPAIGNS } from "@/data/campaigns";
import { MOCK_PROPERTIES } from "@/data/properties";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import PropertyCard from "@/components/PropertyCard";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const campaign = MOCK_CAMPAIGNS.find(c => c.slug === params.slug);
  if (!campaign) return { title: "Campaign Not Found" };
  
  return {
    title: `${campaign.title} | Dreams Realty`,
    description: campaign.description,
    robots: {
      index: false,
      follow: false
    }
  };
}

export default function CampaignPage({ params }: { params: { slug: string } }) {
  const campaign = MOCK_CAMPAIGNS.find(c => c.slug === params.slug);
  
  if (!campaign) {
    notFound();
  }

  // Resolve properties
  const campaignProperties = campaign.properties
    .map(id => MOCK_PROPERTIES.find(p => p.id === id))
    .filter(Boolean) as typeof MOCK_PROPERTIES;

  const primaryImage = campaign.featuredImage || (campaignProperties.length > 0 ? campaignProperties[0].images[0] : "/images/hero-fallback-desktop.jpg");

  return (
    <main className="min-h-screen bg-ivory-warm flex flex-col">
      {/* Minimal Campaign Navigation */}
      <header className="bg-ivory-warm/95 backdrop-blur-md border-b border-stone-muted/20 sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-charcoal-deep">
            Dreams Realty
          </Link>
          <div className="flex items-center gap-4">
            <a href="tel:+918150041742" className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-charcoal-deep hover:text-brass-elegant transition-colors">
              <span>📞</span> +91 8150041742
            </a>
            <a href="https://api.whatsapp.com/send?phone=918553999922" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-4 py-2 text-xs uppercase tracking-widest font-bold shadow-sm hover:bg-charcoal-deep transition-colors flex items-center gap-2">
              WhatsApp Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-charcoal-deep overflow-hidden">
         <Image 
           src={primaryImage} 
           alt={campaign.title} 
           fill 
           className="object-cover opacity-50"
           priority
         />
         <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep to-transparent" />
         
         <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 w-full">
            <div className="max-w-3xl">
              <span className="inline-block bg-brass-elegant text-white px-3 py-1 text-xs uppercase tracking-widest font-bold mb-6">
                Featured Campaign
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-ivory-warm leading-tight mb-6">
                {campaign.headline}
              </h1>
              <p className="text-xl text-stone-muted/90 leading-relaxed">
                {campaign.description}
              </p>
            </div>
         </div>
      </section>

      {/* Content & Lead Form */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-20 w-full flex-1">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-2/3">
             {/* Benefits */}
             <div className="mb-16">
                <h2 className="font-serif text-3xl text-charcoal-deep mb-8">Why Book With Us?</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {campaign.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 bg-white border border-stone-muted/20">
                      <div className="text-brass-elegant text-2xl mt-1">✓</div>
                      <p className="font-bold text-charcoal-deep leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
             </div>

             {/* Featured Properties */}
             {campaignProperties.length > 0 && (
               <div className="mb-16">
                 <h2 className="font-serif text-3xl text-charcoal-deep mb-8">Included Properties</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {campaignProperties.map(prop => (
                     <PropertyCard key={prop.id} property={prop} />
                   ))}
                 </div>
               </div>
             )}
          </div>

          {/* Sticky Form */}
          <div className="lg:w-1/3">
             <div className="sticky top-28">
               <EnquiryForm 
                 source={`Campaign: ${campaign.title}`} 
               />
               <p className="text-xs text-stone-muted mt-4 text-center">
                 By submitting this form, you agree to our <Link href="/privacy-policy" className="underline">Privacy Policy</Link> and <Link href="/terms-of-service" className="underline">Terms</Link>.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-charcoal-deep text-stone-muted/60 text-xs py-8 text-center border-t border-stone-muted/10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="mb-4">
            Disclaimer: The information provided on this landing page is for promotional purposes. While we strive for accuracy based on verified sources, availability and pricing are subject to change without prior notice.
          </p>
          <div className="flex justify-center gap-6">
             <Link href="/privacy-policy" className="hover:text-ivory-warm">Privacy Policy</Link>
             <Link href="/terms-of-service" className="hover:text-ivory-warm">Terms of Service</Link>
             <Link href="/" className="hover:text-ivory-warm">Main Website</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
