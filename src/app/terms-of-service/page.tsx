import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Dreams Realty",
  description: "Terms of Service for Dreams Realty.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-ivory-warm pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-6 md:px-16">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-deep mb-12 border-b border-stone-muted/20 pb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg text-stone-muted max-w-none prose-headings:font-serif prose-headings:text-charcoal-deep prose-headings:font-normal prose-strong:text-charcoal-deep prose-a:text-brass-elegant">
          <p><strong>1. Acceptance of Terms</strong></p>
          <p>By accessing and using the Dreams Realty website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
          
          <p><strong>2. Authorized Channel Partner</strong></p>
          <p>Dreams Realty operates as an authorized affiliate channel sales partner for various real estate developers. We provide information regarding real estate projects for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.</p>

          <p><strong>3. Use of Site</strong></p>
          <p>This site and its components are offered for informational purposes only; this site shall not be responsible or liable for the accuracy, usefulness or availability of any information transmitted or made available via the site, and shall not be responsible or liable for any error or omissions in that information.</p>
          
          <p><strong>4. User Data and Consent</strong></p>
          <p>By providing your contact details on our website, you authorize Dreams Realty and its representatives to Call, SMS, Email or WhatsApp you regarding its products and offers. This consent overrides any registration for DNC/NDNC.</p>

          <p><strong>5. Modifications</strong></p>
          <p>We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you should review these pages periodically.</p>

          <p><strong>6. Contact</strong></p>
          <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:info@dreamsrealty.co.in">info@dreamsrealty.co.in</a>.</p>
        </div>
      </div>
    </main>
  );
}
