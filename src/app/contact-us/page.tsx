import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dreams Realty | Get in Touch for Property Assistance",
  description: "Contact Dreams Realty for expert help with buying, selling, or renting properties in Bangalore. Get personalized guidance and support from our trusted team.",
};

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-[#F8F5ED] text-[#1F3A5F] pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#4F7399] block mb-3">
              Direct Advisory
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-[#1F3A5F] mb-6 leading-tight">
              Where Your Bangalore Home Dreams Come True
            </h1>
            <p className="text-[#1F3A5F]/80 text-lg mb-12 leading-relaxed">
              Passionate about simplifying property decisions with 15+ years of trusted advisory in Bangalore. We offer personalized consultations, on-ground site assistance, and complete title verification.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 border-b border-[#1F3A5F]/15 pb-8">
                <div className="text-2xl mt-1">📞</div>
                <div>
                  <h4 className="font-bold text-[#1F3A5F] uppercase tracking-widest text-xs mb-2">Phone</h4>
                  <div className="flex flex-col gap-1 text-[#4F7399]">
                    <a href="tel:+918150041742" className="hover:text-[#1F3A5F] transition-colors font-medium">+91 8150041742</a>
                    <a href="tel:+918553999922" className="hover:text-[#1F3A5F] transition-colors font-medium">+91 8553999922</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 border-b border-[#1F3A5F]/15 pb-8">
                <div className="text-2xl mt-1">✉️</div>
                <div>
                  <h4 className="font-bold text-[#1F3A5F] uppercase tracking-widest text-xs mb-2">Email</h4>
                  <a href="mailto:contact@dreamsrealty.co.in" className="text-[#4F7399] hover:text-[#1F3A5F] transition-colors font-medium">contact@dreamsrealty.co.in</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">📍</div>
                <div>
                  <h4 className="font-bold text-[#1F3A5F] uppercase tracking-widest text-xs mb-2">Office Address</h4>
                  <p className="text-[#1F3A5F]/85 leading-relaxed font-medium">
                    3rd Floor, Above Federal Bank, Ramagondanahalli,<br />
                    Whitefield, Bangalore, Karnataka - 560066
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white/85 backdrop-blur-md border border-[#1F3A5F]/15 p-8 md:p-12 rounded-[24px] shadow-[0_12px_40px_rgba(31,58,95,0.06)]">
              <h3 className="font-serif text-3xl text-[#1F3A5F] mb-6">Request Advisory</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-[#1F3A5F] mb-2">Full Name</label>
                  <input type="text" placeholder="Your Name" required className="w-full bg-[#F8F5ED]/50 border border-[#1F3A5F]/20 rounded-[10px] px-4 py-3 text-[#1F3A5F] focus:outline-none focus:border-[#1F3A5F] transition-colors placeholder:text-[#1F3A5F]/40" />
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-[#1F3A5F] mb-2">Email Address</label>
                  <input type="email" placeholder="name@example.com" required className="w-full bg-[#F8F5ED]/50 border border-[#1F3A5F]/20 rounded-[10px] px-4 py-3 text-[#1F3A5F] focus:outline-none focus:border-[#1F3A5F] transition-colors placeholder:text-[#1F3A5F]/40" />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-[#1F3A5F] mb-2">Phone Number</label>
                  <div className="flex gap-3">
                    <select className="bg-[#F8F5ED]/50 border border-[#1F3A5F]/20 rounded-[10px] px-3 py-3 text-[#1F3A5F] focus:outline-none focus:border-[#1F3A5F] transition-colors w-28 cursor-pointer font-medium">
                      <option>+91 (IN)</option>
                    </select>
                    <input type="tel" placeholder="Mobile Number" required className="flex-1 bg-[#F8F5ED]/50 border border-[#1F3A5F]/20 rounded-[10px] px-4 py-3 text-[#1F3A5F] focus:outline-none focus:border-[#1F3A5F] transition-colors placeholder:text-[#1F3A5F]/40" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-[#1F3A5F] mb-2">Requirement & Notes</label>
                  <textarea rows={4} placeholder="Looking for 3/4 BHK Villa or Apartment in Whitefield..." className="w-full bg-[#F8F5ED]/50 border border-[#1F3A5F]/20 rounded-[10px] px-4 py-3 text-[#1F3A5F] focus:outline-none focus:border-[#1F3A5F] transition-colors placeholder:text-[#1F3A5F]/40 resize-none"></textarea>
                </div>

                <label className="flex items-start gap-3 mt-6 text-xs text-[#4F7399] cursor-pointer group">
                  <input type="checkbox" className="mt-0.5 accent-[#1F3A5F] w-4 h-4 flex-shrink-0" defaultChecked required />
                  <span className="group-hover:text-[#1F3A5F] transition-colors leading-relaxed">I authorize Dreams Realty representatives to connect via Call, SMS, Email or WhatsApp regarding property advisory.</span>
                </label>

                <button type="submit" className="w-full bg-[#1F3A5F] text-[#F8F5ED] hover:bg-[#4F7399] py-4 text-xs uppercase tracking-[0.2em] font-semibold rounded-full shadow-md transition-all duration-300">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-20 aspect-[21/9] w-full rounded-[24px] border border-[#1F3A5F]/15 overflow-hidden shadow-[0_10px_30px_rgba(31,58,95,0.06)]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.704920332148!2d77.7331093!3d12.9925483!3m2!1i768!4f13.1!3m3!1m2!1s0x0%3A0x4c854df840a4a56f!2sDreams%20Realty!5e0!3m2!1sen!2sin!4v1625655683165!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
