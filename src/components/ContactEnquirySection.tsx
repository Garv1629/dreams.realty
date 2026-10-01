"use client";
import { useState, useTransition } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { submitLead } from "@/actions/submitLead";

export default function ContactEnquirySection() {
  const shouldReduceMotion = useReducedMotion();
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPending || status === "success") return;

    const formData = new FormData(e.currentTarget);
    const contextData = {
      source: "Homepage Consultation Section",
      route: "/",
    };

    startTransition(async () => {
      try {
        const result = await submitLead(formData, contextData);
        if (result.success) {
          setStatus("success");
        } else {
          setStatus("error");
          const msg = "error" in result && typeof result.error === "string" ? result.error : null;
          setErrorMessage(msg || "Submission failed. Please reach out via phone or WhatsApp.");
        }
      } catch (err: any) {
        setStatus("error");
        setErrorMessage("An unexpected error occurred. Please call +91 8150041742.");
      }
    });
  };

  return (
    <section id="contact-section" className="py-24 bg-gradient-to-b from-[#F8F5ED] via-[#EBE5D9]/40 to-[#F8F5ED] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact & Office Details (5 Columns) */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#4F7399] block mb-2">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F3A5F] leading-tight mb-6">
                Start Your Property Journey with Us.
              </h2>
              <p className="text-[#1F3A5F]/80 text-sm sm:text-base leading-relaxed mb-8">
                Connect with our senior property advisors for personalized assistance, verified site visits, and confidential portfolio advisory.
              </p>

              {/* Direct Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href="tel:+918150041742"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1F3A5F] hover:bg-[#4F7399] text-[#F8F5ED] text-xs uppercase tracking-[0.16em] font-semibold py-3.5 px-6 rounded-full transition-all duration-300 shadow-sm"
                >
                  <span>📞 Call Us</span>
                  <span className="font-bold">+91 8150041742</span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=918553999922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-[0.16em] font-semibold py-3.5 px-6 rounded-full transition-all duration-300 shadow-sm"
                >
                  <span>💬 WhatsApp</span>
                  <span className="font-bold">+91 8553999922</span>
                </a>
              </div>

              {/* Verified Contact Details Card */}
              <div className="bg-white/70 backdrop-blur-md border border-[#1F3A5F]/10 rounded-[20px] p-6 space-y-4 text-xs text-[#1F3A5F]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#4F7399] block mb-1">
                    Sales & Support Contact
                  </span>
                  <div className="flex flex-col sm:flex-row gap-4 font-medium">
                    <a href="tel:+918150041742" className="hover:text-[#4F7399] transition-colors">+91 8150041742</a>
                    <a href="tel:+918553999922" className="hover:text-[#4F7399] transition-colors">+91 8553999922</a>
                    <a href="tel:+919663982707" className="hover:text-[#4F7399] transition-colors">+91 9663982707</a>
                  </div>
                </div>
                <div className="pt-3 border-t border-[#1F3A5F]/10 flex flex-col sm:flex-row sm:justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#4F7399] block mb-0.5">
                      Email
                    </span>
                    <a href="mailto:info@dreamsrealty.co.in" className="hover:text-[#4F7399] transition-colors font-medium">
                      info@dreamsrealty.co.in
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#4F7399] block mb-0.5">
                      Advisory Hours
                    </span>
                    <span className="font-medium">Mon – Sun: 9:00 AM – 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Refined Glass Enquiry Form (7 Columns) */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-white/90 backdrop-blur-md border border-white/80 rounded-[24px] p-8 sm:p-10 shadow-[0_16px_40px_rgba(31,58,95,0.07)]"
          >
            <h3 className="font-serif text-2xl font-bold text-[#1F3A5F] mb-2">
              Book a Private Property Consultation
            </h3>
            <p className="text-xs text-[#1F3A5F]/75 mb-6">
              Share your preferences and an experienced advisor will get in touch within 2 hours.
            </p>

            {status === "success" ? (
              <div className="bg-[#4F7399]/15 border border-[#4F7399]/30 rounded-[16px] p-8 text-center">
                <div className="text-4xl mb-3">✓</div>
                <h4 className="font-serif text-xl font-bold text-[#1F3A5F] mb-2">
                  Thank You for Your Consultation Request
                </h4>
                <p className="text-sm text-[#1F3A5F]/80 max-w-md mx-auto">
                  A dedicated Dreams Realty consultant will contact you shortly to arrange visits and share verified options.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-xs uppercase tracking-[0.18em] font-bold text-[#1F3A5F] underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] font-bold text-[#4F7399] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="e.g. Anand Sharma"
                      className="w-full bg-[#F8F5ED]/90 border border-[#1F3A5F]/15 rounded-[10px] px-3.5 py-3 text-xs text-[#1F3A5F] font-medium focus:outline-none focus:ring-2 focus:ring-[#4F7399]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] font-bold text-[#4F7399] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#F8F5ED]/90 border border-[#1F3A5F]/15 rounded-[10px] px-3.5 py-3 text-xs text-[#1F3A5F] font-medium focus:outline-none focus:ring-2 focus:ring-[#4F7399]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] font-bold text-[#4F7399] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="anand@example.com"
                      className="w-full bg-[#F8F5ED]/90 border border-[#1F3A5F]/15 rounded-[10px] px-3.5 py-3 text-xs text-[#1F3A5F] font-medium focus:outline-none focus:ring-2 focus:ring-[#4F7399]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] font-bold text-[#4F7399] mb-1.5">
                      Interest Type
                    </label>
                    <select
                      name="interest"
                      className="w-full bg-[#F8F5ED]/90 border border-[#1F3A5F]/15 rounded-[10px] px-3.5 py-3 text-xs text-[#1F3A5F] font-medium focus:outline-none focus:ring-2 focus:ring-[#4F7399] cursor-pointer"
                    >
                      <option value="Buy Villa / Apartment">Buy Villa / Apartment</option>
                      <option value="Rent Luxury Residence">Rent Luxury Residence</option>
                      <option value="Sell My Property">Sell My Property</option>
                      <option value="Legal & Documentation Support">Legal & Documentation Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] font-bold text-[#4F7399] mb-1.5">
                    Preferred Location in Bangalore
                  </label>
                  <input
                    name="preferredLocation"
                    type="text"
                    placeholder="e.g. Whitefield, Malleswaram, Indiranagar, Hennur"
                    className="w-full bg-[#F8F5ED]/90 border border-[#1F3A5F]/15 rounded-[10px] px-3.5 py-3 text-xs text-[#1F3A5F] font-medium focus:outline-none focus:ring-2 focus:ring-[#4F7399]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] font-bold text-[#4F7399] mb-1.5">
                    Specific Requirements / Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about budget, configuration, or timelines..."
                    className="w-full bg-[#F8F5ED]/90 border border-[#1F3A5F]/15 rounded-[10px] px-3.5 py-3 text-xs text-[#1F3A5F] font-medium focus:outline-none focus:ring-2 focus:ring-[#4F7399] resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-600 font-medium">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-[#1F3A5F] hover:bg-[#4F7399] text-[#F8F5ED] text-xs uppercase tracking-[0.2em] font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-sm hover:shadow-[0_8px_24px_rgba(79,115,153,0.35)] disabled:opacity-50 cursor-pointer"
                >
                  {isPending ? "Submitting Request..." : "Schedule Confidential Consultation →"}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
