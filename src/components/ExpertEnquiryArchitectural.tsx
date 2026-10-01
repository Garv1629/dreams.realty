"use client";
import { useState, useTransition, Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { submitLead } from "@/actions/submitLead";
import { usePathname, useSearchParams } from "next/navigation";

function ExpertEnquiryContent() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPending || status === "success") return;

    const formData = new FormData(e.currentTarget);
    const contextData = {
      source: "Homepage Architectural Consultation",
      route: pathname,
      activeFilters: searchParams.toString(),
      utm_source: searchParams.get("utm_source") || undefined,
      utm_medium: searchParams.get("utm_medium") || undefined,
      utm_campaign: searchParams.get("utm_campaign") || undefined,
    };

    import("@/lib/analytics").then(({ trackEvent }) => {
      trackEvent("Enquiry form started", { source: contextData.source });
    });

    startTransition(async () => {
      const result = await submitLead(formData, contextData);
      if (result.success) {
        setStatus("success");
        import("@/lib/analytics").then(({ trackEvent }) => {
          trackEvent("Enquiry form submitted successfully", { source: contextData.source });
        });
      } else {
        setStatus("error");
      }
    });
  };

  const ease = [0.22, 1, 0.36, 1] as const;

  // Left advisory panel animations
  const advisoryContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.05
      }
    }
  };

  const advisoryItemVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0, filter: "none" }
      : { opacity: 0, y: 50, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease }
    }
  };

  // Right form card
  const formCardVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease, delay: shouldReduceMotion ? 0 : 0.2 }
    }
  };

  // Form field stagger
  const formFieldsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.4
      }
    }
  };

  const formFieldVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Line draw for decorative accent
  const lineDrawVariants = {
    hidden: shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.2, ease }
    }
  };

  return (
    <section
      id="enquiry-section"
      className="relative w-full bg-[#DCD3C4]/35 text-[#1F3A5F] py-24 md:py-32 px-6 md:px-12 border-t border-[#1F3A5F]/10"
    >
      <div className="max-w-[1560px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Advisory Note — staggered reveal */}
          <motion.div
            variants={advisoryContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="overflow-hidden">
              <motion.div variants={advisoryItemVariants} className="flex items-center gap-3">
                <motion.span
                  variants={lineDrawVariants}
                  style={{ originX: 0 }}
                  className="w-12 h-[1px] bg-[#4F7399]"
                />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-mono text-[#4F7399] font-semibold">
                  CHAPTER 06 • EXPERT CONSULTATION
                </span>
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                variants={advisoryItemVariants}
                className="font-serif text-3xl sm:text-5xl text-[#1F3A5F] font-normal tracking-tight leading-tight"
              >
                Begin a Confidential Advisory Mandate
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.p
                variants={advisoryItemVariants}
                className="text-sm sm:text-base text-[#1F3A5F]/80 font-light leading-relaxed"
              >
                Whether acquiring an ancestral bungalow, acquiring off-market penthouse allocations,
                or curating an institutional rental portfolio, our senior advisory partners function
                with absolute discretion.
              </motion.p>
            </div>

            <motion.div
              variants={advisoryItemVariants}
              className="pt-6 border-t border-[#1F3A5F]/15 space-y-3 font-mono text-xs text-[#1F3A5F]/75"
            >
              <p>SALES & SUPPORT: +91 81500 41742</p>
              <p>ALTERNATE: +91 85539 99922 / +91 96639 82707</p>
              <p>EMAIL: info@dreamsrealty.co.in</p>
            </motion.div>
          </motion.div>

          {/* Right Consultation Form — card entrance with form field stagger */}
          <motion.div
            variants={formCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-7 bg-[#F8F5ED] border border-[#1F3A5F]/15 p-8 sm:p-12 shadow-sm relative"
          >
            {status === "success" ? (
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease }}
                className="py-16 text-center space-y-4"
              >
                <span className="w-12 h-12 rounded-full bg-[#A7B8CC]/30 text-[#1F3A5F] flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </span>
                <h3 className="font-serif text-3xl text-[#1F3A5F] font-normal">Mandate Received</h3>
                <p className="text-sm text-[#1F3A5F]/80 max-w-md mx-auto">
                  A senior property partner from Dreams Realty will contact you directly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                variants={formFieldsContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="space-y-6"
              >
                <motion.div variants={formFieldVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase font-mono tracking-widest text-[#1F3A5F] font-semibold block mb-2">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Anand Murthy"
                      className="w-full bg-[#DCD3C4]/30 border border-[#1F3A5F]/20 text-[#1F3A5F] placeholder:text-[#1F3A5F]/40 text-sm px-4 py-3 focus:outline-none focus:border-[#4F7399] focus:ring-1 focus:ring-[#4F7399] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-mono tracking-widest text-[#1F3A5F] font-semibold block mb-2">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#DCD3C4]/30 border border-[#1F3A5F]/20 text-[#1F3A5F] placeholder:text-[#1F3A5F]/40 text-sm px-4 py-3 focus:outline-none focus:border-[#4F7399] focus:ring-1 focus:ring-[#4F7399] transition-colors"
                    />
                  </div>
                </motion.div>

                <motion.div variants={formFieldVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase font-mono tracking-widest text-[#1F3A5F] font-semibold block mb-2">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="anand@example.com"
                      className="w-full bg-[#DCD3C4]/30 border border-[#1F3A5F]/20 text-[#1F3A5F] placeholder:text-[#1F3A5F]/40 text-sm px-4 py-3 focus:outline-none focus:border-[#4F7399] focus:ring-1 focus:ring-[#4F7399] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-mono tracking-widest text-[#1F3A5F] font-semibold block mb-2">
                      Intent
                    </label>
                    <select
                      name="propertyType"
                      className="w-full bg-[#DCD3C4]/30 border border-[#1F3A5F]/20 text-[#1F3A5F] text-sm px-4 py-3 focus:outline-none focus:border-[#4F7399] focus:ring-1 focus:ring-[#4F7399] transition-colors cursor-pointer"
                    >
                      <option value="Villa Acquisition">Villa Acquisition (Buy)</option>
                      <option value="Penthouse Acquisition">Penthouse Acquisition (Buy)</option>
                      <option value="Luxury Leasehold">Luxury Leasehold (Rent)</option>
                      <option value="Commercial Advisory">Commercial Advisory</option>
                    </select>
                  </div>
                </motion.div>

                <motion.div variants={formFieldVariants}>
                  <label className="text-[10px] uppercase font-mono tracking-widest text-[#1F3A5F] font-semibold block mb-2">
                    Specific Requirements or Preferred Enclaves
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Specific requirements regarding location, daylight, floor plan, or timeline..."
                    className="w-full bg-[#DCD3C4]/30 border border-[#1F3A5F]/20 text-[#1F3A5F] placeholder:text-[#1F3A5F]/40 text-sm px-4 py-3 focus:outline-none focus:border-[#4F7399] focus:ring-1 focus:ring-[#4F7399] transition-colors resize-none"
                  />
                </motion.div>

                {/* Consent checkbox with exact copy */}
                <motion.div variants={formFieldVariants} className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="hero-consent"
                    name="consent"
                    required
                    defaultChecked
                    className="mt-1 accent-[#1F3A5F] cursor-pointer"
                  />
                  <label htmlFor="hero-consent" className="text-xs text-[#1F3A5F]/80 font-light leading-relaxed cursor-pointer">
                    I consent to Dreams Realty contacting me regarding authenticated property mandates in Bengaluru. View our{" "}
                    <a href="/privacy-policy" className="text-[#4F7399] font-medium hover:underline">
                      Privacy Policy
                    </a>.
                  </label>
                </motion.div>

                {status === "error" && (
                  <p className="text-xs text-rose-600 font-mono">
                    Unable to dispatch request. Please contact +91 81500 41742 directly.
                  </p>
                )}

                <motion.div variants={formFieldVariants}>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-[#1F3A5F] hover:bg-[#4F7399] text-[#F8F5ED] font-serif text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 transition-colors shadow-sm disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7399]"
                  >
                    {isPending ? "Transmitting Mandate..." : "Submit Consultation Mandate"}
                  </button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function ExpertEnquiryArchitectural() {
  return (
    <Suspense fallback={<div className="min-h-[500px] bg-[#F8F5ED]" />}>
      <ExpertEnquiryContent />
    </Suspense>
  );
}
