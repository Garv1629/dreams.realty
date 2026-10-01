export type Property = {
  id: string;
  title: string;
  type: string;
  purpose: "Sale" | "Rent";
  location: string;
  developer: string;
  price: string;
  priceValue: number;
  area: string;
  areaValue: number;
  bhk: string;
  configuration?: string;
  status: string;
  furnishing: string;
  facing: string;
  images: string[];
  description: string;
  amenities: string[];
  isFeatured?: boolean;
};

export const MOCK_PROPERTIES: Property[] = [
  {
    id: "prop-1",
    title: "Prestige Lakeside Habitat",
    type: "Villa",
    purpose: "Sale",
    location: "Whitefield, Bangalore",
    developer: "Prestige Group",
    price: "₹ 4.5 Cr",
    priceValue: 45000000,
    area: "3500 sqft",
    areaValue: 3500,
    bhk: "4",
    configuration: "4 BHK",
    isFeatured: true,
    status: "Ready Homes",
    furnishing: "Semi-furnished",
    facing: "East",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687931-cebf14cd01f8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
    ],
    description: "Experience luxury living at its finest in this exquisite villa located in the heart of Whitefield. Boasting premium finishes and expansive living spaces, it offers an unparalleled lifestyle.",
    amenities: ["Swimming Pool", "Clubhouse", "Gymnasium", "24/7 Security", "Landscaped Gardens"]
  },
  {
    id: "prop-2",
    title: "Sobha City Casa Paradiso",
    type: "Apartment",
    purpose: "Sale",
    location: "Hegde Nagar, Bangalore",
    developer: "Sobha Developers",
    price: "₹ 2.1 Cr",
    priceValue: 21000000,
    area: "2100 sqft",
    areaValue: 2100,
    bhk: "3",
    configuration: "3 BHK",
    isFeatured: true,
    status: "Ready Homes",
    furnishing: "Unfurnished",
    facing: "North",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop"
    ],
    description: "A premium 3 BHK apartment offering Mediterranean-style architecture, lush green spaces, and world-class amenities in a well-connected neighborhood.",
    amenities: ["Tennis Court", "Swimming Pool", "Jogging Track", "Power Backup"]
  },
  {
    id: "prop-3",
    title: "Brigade Gateway",
    type: "Apartment",
    purpose: "Rent",
    location: "Malleswaram, Bangalore",
    developer: "Brigade Group",
    price: "₹ 85,000 / month",
    priceValue: 85000,
    area: "1600 sqft",
    areaValue: 1600,
    bhk: "3",
    configuration: "3 BHK",
    isFeatured: true,
    status: "Ready Homes",
    furnishing: "Furnished",
    facing: "East",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop"
    ],
    description: "Fully furnished premium apartment in the iconic Brigade Gateway enclave. Features modern interiors, natural light, and access to an exclusive lifestyle club.",
    amenities: ["Mall Access", "Hospital within campus", "School", "Clubhouse", "Lake"]
  },
  {
    id: "prop-4",
    title: "Purva Palm Beach",
    type: "Apartment",
    purpose: "Sale",
    location: "Hennur Road, Bangalore",
    developer: "Puravankara",
    price: "₹ 1.8 Cr",
    priceValue: 18000000,
    area: "1800 sqft",
    areaValue: 1800,
    bhk: "3",
    configuration: "3 BHK",
    isFeatured: false,
    status: "Under Construction",
    furnishing: "Unfurnished",
    facing: "North-East",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800&auto=format&fit=crop"
    ],
    description: "Beach-themed luxury apartments on Hennur Road. Enjoy a lagoon, wave pool, and sunken bar right at your doorstep.",
    amenities: ["Wave Pool", "Gym", "Spa", "Kids Play Area"]
  }
];
