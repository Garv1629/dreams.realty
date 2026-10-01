"use client";
import Link from "next/link";

export default function FooterNavy() {
  return (
    <footer className="bg-[#1F3A5F] text-[#F8F5ED] pt-16 pb-12 border-t border-[#4F7399]/30 relative z-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Brand & RERA Summary (4 Columns) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <div className="w-9 h-9 rounded-full bg-white text-[#1F3A5F] flex items-center justify-center font-serif font-bold text-lg">
                D
              </div>
              <span className="font-serif text-2xl tracking-[0.14em] font-semibold text-white group-hover:text-[#A7B8CC] transition-colors">
                DREAMS REALTY
              </span>
            </Link>

            <p className="text-xs text-[#A7B8CC] leading-relaxed max-w-sm mb-6">
              Bangalore's most trusted real estate consultancy for luxury villas, apartments, and penthouses. 15+ years of verified title excellence and client satisfaction.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-[12px] p-3 text-[11px] text-[#A7B8CC] leading-relaxed max-w-sm">
              <span className="font-bold text-white block mb-0.5">Statutory Compliant Advisory</span>
              Dreams Realty operates with complete adherence to regulatory guidelines and verified title documentation.
            </div>
          </div>

          {/* Quick Links (2 Columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A7B8CC]">
              <li>
                <Link href="/property-for-sale" className="hover:text-white transition-colors">
                  Properties for Sale
                </Link>
              </li>
              <li>
                <Link href="/property-for-rent" className="hover:text-white transition-colors">
                  Properties for Rent
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">
                  About Dreams Realty
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Bangalore Market Blogs
                </Link>
              </li>
              <li>
                <Link href="/guidelines-value" className="hover:text-white transition-colors">
                  Guidelines & Values
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Contact Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Bangalore Locations (3 Columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Popular Locations
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A7B8CC]">
              <li>
                <Link href="/property-for-sale?location=Whitefield" className="hover:text-white transition-colors">
                  Whitefield (IT Hub & Luxury Villas)
                </Link>
              </li>
              <li>
                <Link href="/property-for-sale?location=Malleswaram" className="hover:text-white transition-colors">
                  Malleswaram (Central Bangalore)
                </Link>
              </li>
              <li>
                <Link href="/property-for-sale?location=Indiranagar" className="hover:text-white transition-colors">
                  Indiranagar (Lifestyle Enclaves)
                </Link>
              </li>
              <li>
                <Link href="/property-for-sale?location=Hennur" className="hover:text-white transition-colors">
                  Hennur Road (North Bangalore)
                </Link>
              </li>
              <li>
                <Link href="/property-for-sale?location=Hegde+Nagar" className="hover:text-white transition-colors">
                  Hegde Nagar (Airport Corridor)
                </Link>
              </li>
            </ul>
          </div>

          {/* Office & Direct Contact (3 Columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Bangalore Office
            </h4>
            <div className="space-y-3 text-xs text-[#A7B8CC]">
              <p className="leading-relaxed">
                3rd Floor, Above Federal Bank, Ramagondanahalli, Whitefield, Bangalore - 560066
              </p>
              <div>
                <span className="block text-white font-semibold">Direct Phone:</span>
                <a href="tel:+918150041742" className="hover:text-white transition-colors font-medium">
                  +91 8150041742
                </a>
              </div>
              <div>
                <span className="block text-white font-semibold">WhatsApp Concierge:</span>
                <a
                  href="https://api.whatsapp.com/send?phone=918553999922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors font-medium"
                >
                  +91 8553999922
                </a>
              </div>
              <div>
                <span className="block text-white font-semibold">General Enquiries:</span>
                <a href="mailto:contact@dreamsrealty.co.in" className="hover:text-white transition-colors font-medium">
                  contact@dreamsrealty.co.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7B8CC]">
          <div>
            © {new Date().getFullYear()} Dreams Realty. All rights reserved. Most Trusted Realtor in Bangalore.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/style-guide" className="hover:text-white transition-colors">
              Style Guide
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
