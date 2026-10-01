export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  source: string;
  rating: number;
  year: string;
}

// Verified Google Reviews from dreamsrealty.co.in
export const AUTHENTIC_REVIEWS: Testimonial[] = [
  {
    id: "rev-1",
    quote: "We had a wonderful experience purchasing our villa through Dreams Realty. From the first interaction to the villa handover, everything was managed with professionalism and genuine care.",
    author: "Ramakrishna E",
    role: "Homeowner",
    location: "Bangalore",
    source: "Verified Google Review",
    rating: 5,
    year: "2025"
  },
  {
    id: "rev-2",
    quote: "We had a great experience with Dreams Realty. The entire registration process was smooth and well-managed. Thanks to Lokesh for his support throughout the process.",
    author: "hema santhosh",
    role: "Homeowner",
    location: "Bangalore",
    source: "Verified Google Review",
    rating: 5,
    year: "2025"
  },
  {
    id: "rev-3",
    quote: "Got a very good services from Dreams Realty. Their lawyers are very good. The team helped us to pay all the pending property taxes, and got the e-Khata and got the gift deed executed.",
    author: "Ramanan Sanjeevi Krishnan",
    role: "Property Owner",
    location: "Bangalore",
    source: "Verified Google Review",
    rating: 5,
    year: "2025"
  },
  {
    id: "rev-4",
    quote: "I had a brilliant experience selling my apartment at Republic of Whitefield through Dreams Realty. They managed every detail from start to finish: finding the right buyer, facilitating smooth negotiations, and managing all the paperwork.",
    author: "Aurelius Pinheiro",
    role: "Apartment Seller",
    location: "Whitefield, Bangalore",
    source: "Verified Google Review",
    rating: 5,
    year: "2025"
  },
  {
    id: "rev-5",
    quote: "We had a wonderful experience with Dreams Realty. The entire process was smooth, well-managed, and handled with great professionalism. We truly appreciate the team's dedication and effort.",
    author: "Anukriti",
    role: "Homeowner",
    location: "Bangalore",
    source: "Verified Google Review",
    rating: 5,
    year: "2025"
  }
];

export interface LocalityPoint {
  id: string;
  name: string;
  tagline: string;
  coordinates: { x: number; y: number; z: number };
  mapCoords: string;
  character: string;
  propertiesCount: number;
  highlightProperty: {
    title: string;
    type: string;
    price: string;
    id: string;
  };
}

// These localities are used for the discovery map UI
// Property counts and highlight properties are illustrative for the search UI
export const BANGALORE_LOCALITIES: LocalityPoint[] = [
  {
    id: "whitefield",
    name: "Whitefield",
    tagline: "IT Corridor & Residential Hub",
    coordinates: { x: 2.8, y: 0.2, z: -1.5 },
    mapCoords: "12.9698° N, 77.7500° E",
    character: "Popular residential area with villas and apartments near IT parks.",
    propertiesCount: 0,
    highlightProperty: {
      title: "Browse Whitefield Properties",
      type: "Various",
      price: "Contact for details",
      id: "whitefield"
    }
  },
  {
    id: "malleswaram",
    name: "Malleswaram",
    tagline: "Heritage & Culture",
    coordinates: { x: -2.1, y: 0.5, z: -2.2 },
    mapCoords: "13.0031° N, 77.5643° E",
    character: "Heritage neighbourhood with traditional charm and modern amenities.",
    propertiesCount: 0,
    highlightProperty: {
      title: "Browse Malleswaram Properties",
      type: "Various",
      price: "Contact for details",
      id: "malleswaram"
    }
  },
  {
    id: "indiranagar",
    name: "Indiranagar",
    tagline: "Central Bangalore",
    coordinates: { x: 1.1, y: 0.3, z: 0.8 },
    mapCoords: "12.9784° N, 77.6408° E",
    character: "Premium central area with restaurants, shops, and residential properties.",
    propertiesCount: 0,
    highlightProperty: {
      title: "Browse Indiranagar Properties",
      type: "Various",
      price: "Contact for details",
      id: "indiranagar"
    }
  },
  {
    id: "hennur-road",
    name: "Hennur Road",
    tagline: "North Bangalore",
    coordinates: { x: 0.2, y: 0.1, z: -3.4 },
    mapCoords: "13.0422° N, 77.6446° E",
    character: "Growing residential area with new developments and good connectivity.",
    propertiesCount: 0,
    highlightProperty: {
      title: "Browse Hennur Road Properties",
      type: "Various",
      price: "Contact for details",
      id: "hennur-road"
    }
  },
];

export const EDITORIAL_CHAPTERS = [
  {
    number: "01",
    label: "VERIFIED PROPERTIES",
    title: "Comprehensive & Verified Properties",
    lead: "Our team personally verifies each property before listing.",
    description: "Our team personally verifies each property before listing them on the website, to offer you the best class facilities and living experience.",
    metrics: [
      { label: "Property Verification", value: "100%" },
      { label: "Builder Partners", value: "Multiple" },
      { label: "Portfolio", value: "Buy & Rent" }
    ]
  },
  {
    number: "02",
    label: "SEARCH OPTIONS",
    title: "Exhaustive Search for Buying and Renting",
    lead: "Most trusted realtor in Bangalore offering abundant options.",
    description: "Most trusted realtor in Bangalore to enlist properties, offering you abundant options to choose from while you search for your dream home.",
    metrics: [
      { label: "Experience", value: "15+ Years" },
      { label: "Locations", value: "All Bangalore" },
      { label: "Client Satisfaction", value: "5 Stars" }
    ]
  },
  {
    number: "03",
    label: "SOLUTIONS",
    title: "Providing Solutions for 15 Years",
    lead: "A history of certitude in the industry.",
    description: "With a history of certitude in the industry, we continue to offer best investment decisions for our clients.",
    metrics: [
      { label: "Bank Partners", value: "Multiple" },
      { label: "Top Developers", value: "Listed" },
      { label: "Client Privacy", value: "Assured" }
    ]
  }
];
