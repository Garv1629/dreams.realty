import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `Blog | Dreams Realty`,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Since there are no articles available, any slug is technically not found, but we will render a fallback template.
  
  return (
    <main className="min-h-screen bg-ivory-warm pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-6 md:px-16">
        <Link href="/blog" className="text-sm uppercase tracking-widest text-stone-muted hover:text-brass-elegant font-bold mb-8 inline-block">
          ← Back to Journal
        </Link>
        
        <article className="bg-white border border-stone-muted/20 p-8 md:p-12 shadow-sm">
          <header className="mb-8 border-b border-stone-muted/20 pb-8">
            <h1 className="font-serif text-3xl md:text-5xl text-charcoal-deep mb-4 leading-tight">
              Article Not Found
            </h1>
            <p className="text-stone-muted text-lg">
              The article you are looking for is currently unavailable or has been removed.
            </p>
          </header>
          
          <div className="prose prose-lg text-stone-muted max-w-none prose-headings:font-serif prose-headings:text-charcoal-deep prose-headings:font-normal prose-strong:text-charcoal-deep prose-a:text-brass-elegant">
            <p>Please check back later or explore other properties and services on our website.</p>
          </div>
        </article>

        {/* CTA */}
        <div className="mt-16 bg-charcoal-deep p-12 text-center text-ivory-warm">
          <h3 className="font-serif text-3xl mb-4">Looking for a property?</h3>
          <p className="mb-8 text-stone-muted/80">Our experts are ready to help you find your dream home in Bangalore.</p>
          <Link href="/contact-us" className="inline-block border border-ivory-warm py-4 px-8 text-sm uppercase tracking-widest font-bold hover:bg-brass-elegant hover:border-brass-elegant transition-colors">
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
