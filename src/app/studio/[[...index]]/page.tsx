import Link from 'next/link';

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-stone-muted/10 p-8 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white border border-stone-muted/20 shadow-xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-3 h-3 rounded-full bg-brass-elegant"></span>
          <h1 className="font-serif text-3xl text-charcoal-deep font-bold">Dreams Realty Studio</h1>
        </div>
        
        <p className="text-stone-muted mb-6 leading-relaxed">
          The headless CMS configuration for Dreams Realty is initialized. You can manage internal leads, CRM syncs, and content schemas directly.
        </p>

        <div className="bg-ivory-warm border border-stone-muted/20 p-6 mb-8 space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="font-bold text-charcoal-deep">Studio Status</span>
            <span className="text-emerald-700 bg-emerald-50 px-3 py-1 font-semibold text-xs rounded-full">Ready for Link</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="font-bold text-charcoal-deep">Admin Security</span>
            <span className="text-charcoal-deep text-xs">HTTP Basic Auth Enabled</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="font-bold text-charcoal-deep">Lead Capture Engine</span>
            <span className="text-emerald-700 font-semibold text-xs">Active (Internal JSON DB + Webhook)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/admin/leads"
            className="flex-1 text-center bg-charcoal-deep text-ivory-warm py-3 px-6 text-xs uppercase tracking-widest font-bold hover:bg-brass-elegant transition-colors"
          >
            Open Leads CRM
          </Link>
          <Link
            href="/"
            className="flex-1 text-center border border-charcoal-deep text-charcoal-deep py-3 px-6 text-xs uppercase tracking-widest font-bold hover:bg-charcoal-deep hover:text-ivory-warm transition-colors"
          >
            Back to Website
          </Link>
        </div>

        <p className="text-xs text-stone-muted mt-8 text-center">
          To connect a hosted Sanity Studio instance, refer to <code className="bg-stone-100 px-1 py-0.5 rounded">CMS_SETUP.md</code> in the repository root.
        </p>
      </div>
    </main>
  );
}
