"use server";
import { sendLeadToCRM } from "@/lib/crm";

export type SubmitLeadResult = {
  success: boolean;
  duplicate?: boolean;
  error?: string;
};

export async function submitLead(formData: FormData, contextData: any): Promise<SubmitLeadResult> {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;

  if (!name || !phone || !email) {
    return { success: false, error: "Please fill all required fields." };
  }

  try {
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

    if ("error" in result && result.error) {
      return { success: false, error: String(result.error) };
    }

    return {
      success: Boolean(result.success),
      duplicate: "duplicate" in result ? Boolean(result.duplicate) : undefined,
    };
  } catch (err: any) {
    return { success: false, error: err?.message || "Failed to submit enquiry." };
  }
}
