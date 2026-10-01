import fs from "fs";
import path from "path";

export type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  source: string;
  propertyId?: string;
  propertyTitle?: string;
  route: string;
  activeFilters: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  timestamp: string;
  status: "new" | "contacted" | "qualified" | "failed";
};

// Simple file-based DB for the internal default CRM
const DB_PATH = path.join(process.cwd(), ".data", "leads.json");

function ensureDb() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DB_PATH)) fs.writeFileSync(DB_PATH, JSON.stringify([]));
}

export async function getLeads(): Promise<Lead[]> {
  try {
    ensureDb();
    const data = fs.readFileSync(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

export async function saveLeadInternal(lead: Lead) {
  const leads = await getLeads();
  
  // Duplicate lead protection (same email/phone within last 24 hours for the same property)
  const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const isDuplicate = leads.some(l => 
    (l.email === lead.email || l.phone === lead.phone) && 
    l.propertyId === lead.propertyId && 
    l.timestamp > twentyFourHoursAgo
  );

  if (isDuplicate) {
    console.warn("Duplicate lead prevented", lead.email);
    return { success: true, duplicate: true }; // Treat as success to frontend, but don't save
  }

  leads.push(lead);
  fs.writeFileSync(DB_PATH, JSON.stringify(leads, null, 2));
  return { success: true };
}

// Main integration layer
export async function sendLeadToCRM(lead: Omit<Lead, "id" | "timestamp" | "status">) {
  const fullLead: Lead = {
    ...lead,
    id: Math.random().toString(36).substring(2, 9),
    timestamp: new Date().toISOString(),
    status: "new"
  };

  const provider = process.env.CRM_PROVIDER || "internal";
  
  if (provider === "webhook") {
    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("CRM Webhook URL missing, falling back to internal DB.");
      return saveLeadInternal({ ...fullLead, status: "failed" });
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.CRM_API_KEY || ""}`
        },
        body: JSON.stringify(fullLead)
      });

      if (!response.ok) throw new Error("CRM rejected webhook");
      
      // Save a copy locally as well for the dashboard
      await saveLeadInternal(fullLead);
      return { success: true };
    } catch (error) {
      console.error("CRM Webhook delivery failed", error);
      // Save locally with failed status for retry capability
      await saveLeadInternal({ ...fullLead, status: "failed" });
      return { success: false, error };
    }
  }

  // Default to internal DB
  return saveLeadInternal(fullLead);
}
