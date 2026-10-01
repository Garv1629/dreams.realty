import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Dreams Realty",
  description: "Read the latest news, tips, and insights on the Bangalore real estate market from Dreams Realty.",
};

export default function Blogs() {
  const articles: any[] = []; // No articles available on original site currently

  return (
    <main className="min-h-screen bg-ivory-warm pt-32 pb-24">
      <div className="max-w-[1000px] mx-auto px-6 md:px-16">
        <div className="mb-16 border-b border-stone-muted/20 pb-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal-deep mb-4">
            Journal
          </h1>
          <p className="text-stone-muted text-lg max-w-2xl mx-auto">
            Insights, market updates, and expert advice for property buyers and sellers in Bangalore.
          </p>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Article map would go here */}
          </div>
        ) : (
          <div className="text-center py-24 bg-white border border-stone-muted/20 shadow-sm">
            <h3 className="font-serif text-2xl text-charcoal-deep mb-2">No Articles Available</h3>
            <p className="text-stone-muted">Check back soon for our latest real estate insights.</p>
          </div>
        )}
      </div>
    </main>
  );
}
