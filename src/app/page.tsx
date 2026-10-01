import { Metadata } from "next";
import HeroModern from "@/components/HeroModern";
import FeaturedPropertiesSection from "@/components/FeaturedPropertiesSection";
import TrustSection from "@/components/TrustSection";
import BuyVsRentSection from "@/components/BuyVsRentSection";
import PartnersSection from "@/components/PartnersSection";
import CustomerReviewsSection from "@/components/CustomerReviewsSection";
import ContactEnquirySection from "@/components/ContactEnquirySection";

export const metadata: Metadata = {
  title: "Dreams Realty | Most Trusted Realtor in Bangalore",
  description: "Buy or rent verified luxury properties in Bangalore with Dreams Realty, the most trusted realtor. Expert guidance to find your perfect home.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5ED] text-[#1F3A5F] selection:bg-[#A7B8CC] selection:text-[#1F3A5F]">
      {/* 1. Hero Entrance with Editorial Headline & Glass Search */}
      <HeroModern />

      {/* 2. Featured Properties as Large Rounded Cards */}
      <FeaturedPropertiesSection />

      {/* 3. Trust Section with 3 Benefit Panels */}
      <TrustSection />

      {/* 4. Buy / Rent Split Section */}
      <BuyVsRentSection />

      {/* 5. Builder and Bank Logo Section */}
      <PartnersSection />

      {/* 6. Customer Reviews in Rounded Glass Cards */}
      <CustomerReviewsSection />

      {/* 7. Contact / Consultation Section with Refined Glass Form */}
      <ContactEnquirySection />
    </main>
  );
}
