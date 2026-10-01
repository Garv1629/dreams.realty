import { MOCK_PROPERTIES, Property } from "./properties";

export type Campaign = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  properties: string[]; // array of property IDs
  type: "project" | "location" | "developer" | "general";
  featuredImage?: string;
  benefits: string[];
};

export const MOCK_CAMPAIGNS: Campaign[] = [
  {
    slug: "villas-in-whitefield",
    title: "Luxury Villas in Whitefield",
    headline: "Discover Your Private Sanctuary in Whitefield",
    description: "Explore our handpicked collection of premium villas in Whitefield. Featuring expansive layouts, private gardens, and world-class amenities from top developers.",
    type: "location",
    properties: ["1"], // ID from MOCK_PROPERTIES
    benefits: [
      "Zero Brokerage on New Projects",
      "Verified Floor Plans & Legal Status",
      "Exclusive Deals for Early Bookings",
      "Dedicated Relationship Manager"
    ]
  },
  {
    slug: "prestige-new-launch",
    title: "Prestige Group New Launches",
    headline: "Exclusive Preview: Prestige Group's Newest Masterpiece",
    description: "Be the first to access Prestige Group's upcoming luxury developments in Bangalore. Unmatched quality, prime locations, and incredible launch prices.",
    type: "developer",
    properties: ["1", "3"],
    featuredImage: "/images/hero-fallback-desktop.jpg",
    benefits: [
      "Priority Allocation",
      "Special Launch Pricing",
      "Premium Inventory Access",
      "No Additional Fees"
    ]
  }
];
