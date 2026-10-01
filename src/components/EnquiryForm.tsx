"use client";
import { useState, useTransition, Suspense } from "react";
import { submitLead } from "@/actions/submitLead";
import { usePathname, useSearchParams } from "next/navigation";

function EnquiryFormInner({ propertyId, propertyTitle, source = "Property Detail" }: { propertyId?: string, propertyTitle?: string, source?: string }) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPending || status === "success") return;
    
    const formData = new FormData(e.currentTarget);
    const contextData = {
      propertyId,
      propertyTitle,
      source,
      route: pathname,
      activeFilters: searchParams.toString(),
      utm_source: searchParams.get("utm_source") || undefined,
      utm_medium: searchParams.get("utm_medium") || undefined,
      utm_campaign: searchParams.get("utm_campaign") || undefined,
    };

    import("@/lib/analytics").then(({ trackEvent }) => {
      trackEvent("Enquiry form started", { propertyId, propertyTitle, source });
    });

    startTransition(async () => {
      const result = await submitLead(formData, contextData);
      if (result.success) {
        setStatus("success");
        import("@/lib/analytics").then(({ trackEvent }) => {
          trackEvent("Enquiry form submitted successfully", { propertyId, propertyTitle, source });
        });
      } else {
        setStatus("error");
      }
    });
  };

  if (status === "success") {
    return (
      <div className="bg-ivory-warm border border-stone-muted/20 p-8 shadow-lg text-center">
        <div className="text-4xl mb-4">✨</div>
        <h3 className="font-serif text-2xl text-charcoal-deep mb-2">Request Received</h3>
        <p className="text-stone-muted text-sm">Our experts will contact you shortly to assist with {propertyTitle || "your real estate needs"}.</p>
      </div>
    );
  }

  return (
    <div className="bg-ivory-warm border border-stone-muted/20 p-8 shadow-lg sticky top-24">
      <h3 className="font-serif text-2xl text-charcoal-deep mb-2">Interested in this property?</h3>
      <p className="text-stone-muted text-sm mb-8">Our experts will help you find the best deal.</p>
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" placeholder="Your Name" required className="w-full bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/70 disabled:opacity-50" disabled={isPending} />
        </div>
        
        <div className="flex gap-4">
          <select name="countryCode" className="bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors w-20 appearance-none cursor-pointer disabled:opacity-50" disabled={isPending}>
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
          </select>
          <input type="tel" name="phone" placeholder="Mobile Number" required className="flex-1 bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/70 disabled:opacity-50" disabled={isPending} />
        </div>

        <div>
          <input type="email" name="email" placeholder="Email Address" required className="w-full bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/70 disabled:opacity-50" disabled={isPending} />
        </div>

        <label className="flex items-start gap-3 mt-4 text-xs text-stone-muted cursor-pointer group">
          <input type="checkbox" required defaultChecked className="mt-0.5 accent-brass-elegant w-4 h-4 flex-shrink-0 disabled:opacity-50" disabled={isPending} />
          <span className="group-hover:text-charcoal-deep transition-colors leading-relaxed">I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.</span>
        </label>

        {status === "error" && (
          <p className="text-xs text-red-500 font-bold uppercase tracking-widest">Failed to submit. Please try again.</p>
        )}

        <button type="submit" disabled={isPending} className="w-full bg-charcoal-deep text-ivory-warm py-4 text-sm uppercase tracking-widest font-bold hover:bg-brass-elegant transition-colors mt-4 disabled:opacity-50 flex justify-center items-center gap-2">
          {isPending ? <div className="w-4 h-4 border-2 border-ivory-warm border-t-transparent rounded-full animate-spin" /> : null}
          {isPending ? "Submitting..." : "Get Details"}
        </button>
      </form>

      <div className="mt-8 pt-8 border-t border-stone-muted/20">
        <h4 className="text-xs uppercase tracking-widest text-stone-muted font-bold mb-4">Or Reach Us Directly</h4>
        <div className="flex flex-col gap-4">
          <a href="tel:+918150041742" className="flex items-center gap-3 text-charcoal-deep hover:text-brass-elegant transition-colors font-bold border border-stone-muted/20 p-3 justify-center group">
            <span className="group-hover:scale-110 transition-transform">📞</span> Call +91 8150041742
          </a>
          <a href="https://api.whatsapp.com/send?phone=918553999922" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-charcoal-deep hover:text-[#25D366] transition-colors font-bold border border-stone-muted/20 p-3 justify-center group">
            <span className="group-hover:scale-110 transition-transform">💬</span> WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default function EnquiryForm(props: { propertyId?: string, propertyTitle?: string, source?: string }) {
  return (
    <Suspense fallback={<div className="bg-ivory-warm border border-stone-muted/20 p-8 shadow-sm h-96 animate-pulse" />}>
      <EnquiryFormInner {...props} />
    </Suspense>
  );
}
