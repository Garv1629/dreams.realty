"use server";
import { sendLeadToCRM } from "@/lib/crm";

export async function submitLead(formData: FormData, contextData: any) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;

  if (!name || !phone || !email) {
    return { success: false, error: "Please fill all required fields." };
  }

  // Use the CRM layer
  const result = await sendLeadToCRM({
    name,
    phone,
    email,
    source: contextData.source || "Unknown",
    propertyId: contextData.propertyId,
    propertyTitle: contextData.propertyTitle,
    route: contextData.route || "/",
    activeFilters: contextData.activeFilters || "",
    utm_source: contextData.utm_source,
    utm_medium: contextData.utm_medium,
    utm_campaign: contextData.utm_campaign,
  });

  return result;
}
