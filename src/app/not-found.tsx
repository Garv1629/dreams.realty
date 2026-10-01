import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ivory-warm pt-32 pb-24 flex items-center justify-center">
      <div className="max-w-[600px] w-full mx-auto px-6 text-center">
        <h1 className="font-serif text-6xl text-charcoal-deep mb-4">404</h1>
        <h2 className="font-serif text-3xl text-charcoal-deep mb-4">Page Not Found</h2>
        <p className="text-stone-muted text-lg mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block bg-charcoal-deep text-ivory-warm py-4 px-8 text-sm uppercase tracking-widest font-bold hover:bg-brass-elegant transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}
