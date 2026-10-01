import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career | Dreams Realty",
  description: "Join the Dreams Realty team in Bangalore. Explore career opportunities with a trusted real estate partner.",
};

export default function Career() {
  return (
    <main className="min-h-screen bg-ivory-warm pt-32 pb-24">
      <div className="max-w-[1000px] mx-auto px-6 md:px-16 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-deep mb-8">
          Build Your Career With Us
        </h1>
        <p className="text-stone-muted text-lg mb-12 max-w-2xl mx-auto">
          We are constantly looking for talented, passionate individuals to join our growing team of real estate professionals. If you have what it takes to deliver exceptional customer experiences, we want to hear from you.
        </p>

        <div className="bg-white p-8 md:p-12 border border-stone-muted/20 text-left max-w-[600px] mx-auto shadow-sm">
          <h3 className="font-serif text-2xl text-charcoal-deep mb-6 border-b border-stone-muted/20 pb-4">Submit Your Profile</h3>
          
          <form className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-charcoal-deep mb-2">Full Name</label>
              <input type="text" placeholder="Your Name" required className="w-full bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/50" />
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-charcoal-deep mb-2">Email Address</label>
              <input type="email" placeholder="Your Email" required className="w-full bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/50" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-charcoal-deep mb-2">Phone Number</label>
              <input type="tel" placeholder="Your Phone" required className="w-full bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/50" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-charcoal-deep mb-2">Role Applying For</label>
              <select className="w-full bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors cursor-pointer">
                <option>Sales Executive</option>
                <option>Property Consultant</option>
                <option>Marketing</option>
                <option>Operations</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-charcoal-deep mb-2">Resume URL / LinkedIn Profile</label>
              <input type="url" placeholder="Link to your profile" required className="w-full bg-transparent border-b border-stone-muted/30 pb-3 text-charcoal-deep focus:outline-none focus:border-brass-elegant transition-colors placeholder:text-stone-muted/50" />
            </div>

            <button type="submit" className="w-full bg-charcoal-deep text-ivory-warm py-4 text-sm uppercase tracking-widest font-bold hover:bg-brass-elegant transition-colors mt-8">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
