import { getLeads } from "@/lib/crm";

export default async function AdminLeadsDashboard() {
  const leads = await getLeads();

  // Basic stats
  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === "new").length;
  const failedLeads = leads.filter(l => l.status === "failed").length;

  return (
    <main className="min-h-screen bg-stone-muted/5 p-8">
      <div className="max-w-[1440px] mx-auto bg-white border border-stone-muted/20 shadow-sm">
        <header className="px-8 py-6 border-b border-stone-muted/20 flex justify-between items-center bg-charcoal-deep text-ivory-warm">
          <div>
            <h1 className="font-serif text-3xl font-bold">Leads Dashboard</h1>
            <p className="text-sm opacity-80 mt-1">Internal Lead Management & CRM Status</p>
          </div>
          <button className="bg-brass-elegant text-white text-xs uppercase tracking-widest font-bold px-6 py-3 hover:bg-ivory-warm hover:text-charcoal-deep transition-colors">
            Export CSV
          </button>
        </header>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-b border-stone-muted/20">
           <div className="p-8 border-b md:border-b-0 md:border-r border-stone-muted/20">
             <p className="text-xs uppercase tracking-widest text-stone-muted font-bold mb-2">Total Leads</p>
             <p className="text-4xl font-serif text-charcoal-deep">{totalLeads}</p>
           </div>
           <div className="p-8 border-b md:border-b-0 md:border-r border-stone-muted/20">
             <p className="text-xs uppercase tracking-widest text-stone-muted font-bold mb-2">New</p>
             <p className="text-4xl font-serif text-brass-elegant">{newLeads}</p>
           </div>
           <div className="p-8 border-b md:border-b-0 md:border-r border-stone-muted/20">
             <p className="text-xs uppercase tracking-widest text-stone-muted font-bold mb-2">CRM Sync Failed</p>
             <p className="text-4xl font-serif text-red-600">{failedLeads}</p>
           </div>
           <div className="p-8 flex items-center justify-center">
              <span className="bg-stone-muted/10 text-charcoal-deep px-4 py-2 text-xs uppercase tracking-widest font-bold rounded-full">
                {process.env.CRM_PROVIDER ? `External CRM Active (${process.env.CRM_PROVIDER})` : "Using Internal DB Only"}
              </span>
           </div>
        </div>

        {/* Lead Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-muted/5 border-b border-stone-muted/20">
                <th className="p-6 text-xs uppercase tracking-widest text-stone-muted font-bold">Date</th>
                <th className="p-6 text-xs uppercase tracking-widest text-stone-muted font-bold">Contact</th>
                <th className="p-6 text-xs uppercase tracking-widest text-stone-muted font-bold">Source / Campaign</th>
                <th className="p-6 text-xs uppercase tracking-widest text-stone-muted font-bold">Property Ref</th>
                <th className="p-6 text-xs uppercase tracking-widest text-stone-muted font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 ? (
                 <tr>
                    <td colSpan={5} className="p-12 text-center text-stone-muted">No leads captured yet.</td>
                 </tr>
              ) : (
                leads.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).map(lead => (
                  <tr key={lead.id} className="border-b border-stone-muted/10 hover:bg-stone-muted/5 transition-colors">
                    <td className="p-6 whitespace-nowrap text-sm text-charcoal-deep">
                      {new Date(lead.timestamp).toLocaleDateString()} <br/>
                      <span className="text-xs text-stone-muted">{new Date(lead.timestamp).toLocaleTimeString()}</span>
                    </td>
                    <td className="p-6">
                      <p className="font-bold text-charcoal-deep">{lead.name}</p>
                      <p className="text-sm text-stone-muted">{lead.email}</p>
                      <p className="text-sm text-stone-muted">{lead.phone}</p>
                    </td>
                    <td className="p-6">
                      <p className="text-sm font-bold text-charcoal-deep">{lead.source}</p>
                      {lead.utm_campaign && <p className="text-xs bg-stone-muted/10 inline-block px-2 py-1 mt-1">UTM: {lead.utm_campaign}</p>}
                    </td>
                    <td className="p-6">
                      {lead.propertyTitle ? (
                         <div className="text-sm max-w-[200px] truncate" title={lead.propertyTitle}>
                           <span className="font-bold text-brass-elegant">{lead.propertyId}</span><br/>
                           {lead.propertyTitle}
                         </div>
                      ) : <span className="text-sm text-stone-muted">-</span>}
                    </td>
                    <td className="p-6">
                       <span className={`text-xs uppercase tracking-widest font-bold px-3 py-1 ${lead.status === 'new' ? 'bg-brass-elegant/20 text-brass-elegant' : lead.status === 'failed' ? 'bg-red-100 text-red-700' : 'bg-stone-muted/20 text-charcoal-deep'}`}>
                         {lead.status}
                       </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}
