"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-ivory-warm pt-32 pb-24 flex items-center justify-center">
      <div className="max-w-[600px] w-full mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl text-charcoal-deep mb-4">Something went wrong</h2>
        <p className="text-stone-muted text-lg mb-8">
          We encountered an unexpected error while loading this page. Our technical team has been notified.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-charcoal-deep text-ivory-warm py-4 px-8 text-sm uppercase tracking-widest font-bold hover:bg-brass-elegant transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="border border-stone-muted/30 text-charcoal-deep py-4 px-8 text-sm uppercase tracking-widest font-bold hover:border-brass-elegant transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
