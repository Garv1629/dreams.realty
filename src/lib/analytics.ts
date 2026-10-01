"use client";

export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window === "undefined") return;

  // Check consent before pushing to dataLayer
  const consent = localStorage.getItem("dreams_analytics_consent");
  if (consent !== "granted") return;

  // Push to GTM / GA4 dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventData,
  });

  // Example Meta Pixel push
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, eventData);
  }

  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event] ${eventName}`, eventData);
  }
};
