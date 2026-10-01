import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dreams Realty",
  description: "Privacy Policy for Dreams Realty, outlining our practices regarding the collection, use, and disclosure of your information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-ivory-warm pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-6 md:px-16">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-deep mb-12 border-b border-stone-muted/20 pb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg text-stone-muted max-w-none prose-headings:font-serif prose-headings:text-charcoal-deep prose-headings:font-normal prose-strong:text-charcoal-deep prose-a:text-brass-elegant">
          <p><strong>Introduction:</strong></p>
          <p>Welcome to DreamsRealty, your trusted source for real estate listings and information. This privacy policy outlines our practices regarding the collection, use, and disclosure of your information through our website and services. By accessing or using our website, you agree to the terms of this policy.</p>
          
          <p><strong>Information Collection:</strong></p>
          <p>We collect information from you when you register on our site, subscribe to our newsletter, fill out a form, or use our services. The types of personal information collected may include:</p>
          <ul>
            <li>Your Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Other Relevant details for providing our services.</li>
          </ul>

          <p><strong>Use of Information:</strong></p>
          <p>The information we collect from you may be used in the following ways:</p>
          <ul>
            <li>To personalize your experience and meet your specific needs</li>
            <li>To improve our website and services</li>
            <li>To process transactions and provide updates on your transactions</li>
            <li>To send periodic emails regarding our services or other relevant information</li>
          </ul>

          <p><strong>Cookies and Tracking Technologies:</strong></p>
          <p>We use cookies and similar tracking technologies to track the activity on our website and hold certain information, enhancing your experience and understanding of how our website is used.</p>
          
          <p><strong>Sharing of Information:</strong></p>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our website, conducting our business, or serving you, so long as those parties agree to keep this information confidential. This does not include affiliate partners with whom we share information for completing transactions or offering integrated services, provided you have given us your consent.</p>
          
          <p><strong>Affiliate Partners Disclosure:</strong></p>
          <p>We are authorized affiliate channel sales partners for various real estate developers. We may receive commissions for referrals or sales generated through our affiliate links. Our affiliate relationships do not influence the information on our website, and we strive to provide unbiased, accurate information to assist your real estate decisions.</p>
          
          <p><strong>Data Security:</strong></p>
          <p>We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights and are required to keep the information confidential.</p>
          
          <p><strong>Your Rights:</strong></p>
          <p>You have the right to access, correct, or delete your personal data stored with us at any time. Please contact us directly to exercise these rights.</p>
          
          <p><strong>Changes to This Privacy Policy:</strong></p>
          <p>We reserve the right to update or change our privacy policy at any time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.</p>
          
          <p><strong>Contact Us:</strong></p>
          <p>If you have any questions about this privacy policy, please contact us at Our Email Support: <a href="mailto:info@dreamsrealty.co.in">info@dreamsrealty.co.in</a> Or Call Us: +91 85539 99922, +91 97319 09047.</p>
        </div>
      </div>
    </main>
  );
}
