import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dreams Realty | Get in Touch for Property Assistance",
  description: "Contact Dreams Realty for expert help with buying, selling, or renting properties in Bangalore. Get personalized guidance and support from our trusted team.",
};

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-ivory-warm pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal-deep mb-8">
              Real estate: Where your home dreams come true
            </h1>
            <p className="text-stone-muted text-lg mb-12">
              Passionate about simplifying property decisions. We offer personal consultation and extensive online ecosystem. We are here to help you on any queries. Also, you can request virtual tour today.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 border-b border-stone-muted/20 pb-8">
                <div className="text-2xl mt-1">📞</div>
                <div>
                  <h4 className="font-bold text-charcoal-deep uppercase tracking-widest text-sm mb-2">Phone</h4>
                  <div className="flex flex-col gap-1 text-stone-muted">
                    <a href="tel:+918150041742" className="hover:text-brass-elegant transition-colors">+91 8150041742</a>
                    <a href="tel:+918553999922" className="hover:text-brass-elegant transition-colors">+91 8553999922</a>
                    <a href="tel:+919663982707" className="hover:text-brass-elegant transition-colors">+91 9663982707</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 border-b border-stone-muted/20 pb-8">
                <div className="text-2xl mt-1">✉️</div>
                <div>
                  <h4 className="font-bold text-charcoal-deep uppercase tracking-widest text-sm mb-2">Email</h4>
                  <a href="mailto:info@dreamsrealty.co.in" className="text-stone-muted hover:text-brass-elegant transition-colors">info@dreamsrealty.co.in</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">📍</div>
                <div>
                  <h4 className="font-bold text-charcoal-deep uppercase tracking-widest text-sm mb-2">Address</h4>
                  <p className="text-stone-muted leading-relaxed">
                    No 8, 2nd floor, Nandi Infotech,<br/>
                    Above SBI Bank, 1st Main Road,<br/>
                    ITPL Main Road, Whitefield,<br/>
                    Bengaluru, Karnataka 560048
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white border border-stone-muted/20 p-8 md:p-12 shadow-lg">
              <h3 className="font-serif text-3xl text-charcoal-deep mb-8">Get Support</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-charcoal-deep mb-2">Full Name</label>
                  <input type="text" placeholder="Full Name" required className="w-full bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/50" />
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-charcoal-deep mb-2">Email Address</label>
                  <input type="email" placeholder="Enter Email" required className="w-full bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/50" />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-charcoal-deep mb-2">Phone Number</label>
                  <div className="flex gap-4">
                    <select className="bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors w-24 cursor-pointer">
                      <option>+91 (IN)</option>
                    </select>
                    <input type="tel" placeholder="Phone Number" required className="flex-1 bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/50" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-charcoal-deep mb-2">Comments</label>
                  <textarea rows={4} placeholder="Enter Comments" className="w-full bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/50 resize-none"></textarea>
                </div>

                <label className="flex items-start gap-3 mt-8 text-xs text-stone-muted cursor-pointer group">
                  <input type="checkbox" className="mt-0.5 accent-brass-elegant w-4 h-4 flex-shrink-0" defaultChecked required />
                  <span className="group-hover:text-charcoal-deep transition-colors leading-relaxed">I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.</span>
                </label>

                <button type="submit" className="w-full bg-charcoal-deep text-ivory-warm py-4 text-sm uppercase tracking-widest font-bold hover:bg-brass-elegant transition-colors mt-8">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-24 aspect-[21/9] w-full border border-stone-muted/20 overflow-hidden bg-stone-muted/10 grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.704920332148!2d77.7331093!3d12.9925483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c854df840a4a56f!2sDreams%20Realty!5e0!3m2!1sen!2sin!4v1625655683165!5m2!1sen!2sin" 
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
