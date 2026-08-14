export type ProductSpecification = {
  label: string;
  value: string;
};

export type ProductVisual = {
  label: string;
  from: string;
  to: string;
  accent: string;
};

export type ProductOrigin = {
  country: string;
  ports: string[];
};

export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  image?: string;
  images?: string[];
  imageAlt?: string;
  tradeSegment?: string;
  types: string[];
  specifications?: ProductSpecification[];
  applications?: string[];
  features?: string[];
  origins?: ProductOrigin[];
  visual: ProductVisual;
};

export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
};

export type ProductCategoryWithProducts = ProductCategory & {
  products: Product[];
};

export const categories: ProductCategory[] = [
  {
    slug: "agriculture",
    name: "Import & Export",
    shortDescription:
      "International import and export of commodities, agricultural products, food products, and other traded goods.",
    description:
      "ARP Ventures facilitates international trade and sourcing opportunities across a growing range of commodities and products, connecting buyers and suppliers through a global network and reliable commercial trade support.",
  },
  {
    slug: "financial",
    name: "Financial",
    shortDescription:
      "Financial services and solutions for individuals and businesses.",
    description:
      "Comprehensive financial services tailored to meet diverse investment and business financing needs.",
  },
  {
    slug: "residence-consultancy",
    name: "Residence Consultancy",
    shortDescription:
      "Expert guidance for residential relocation and settlement services.",
    description:
      "Professional residence consultancy services to assist with visa applications, relocation, and settlement in various countries.",
  },
  {
    slug: "education",
    name: "Education",
    shortDescription:
      "Educational opportunities and academic support services.",
    description:
      "Quality educational programs and consultancy services for students seeking academic excellence and international opportunities.",
  },
  {
    slug: "health",
    name: "Health",
    shortDescription:
      "Healthcare services and wellness solutions for better living.",
    description:
      "Professional health and wellness services designed to promote optimal health outcomes and quality of life.",
  },
  {
    slug: "others",
    name: "Others",
    shortDescription:
      "Additional services and products beyond our core categories.",
    description:
      "Diverse range of services and products to meet various business and personal needs.",
  },
];

export const products: Product[] = [
  {
    slug: "palm-kernel-expeller",
    name: "Palm Kernel Expeller (PKE)",
    categorySlug: "agriculture",
    tradeSegment: "Animal Feed",

    shortDescription:
      "Quality Palm Kernel Expeller (PKE) for animal feed manufacturers, distributors, and international commodity buyers.",

    description:
      "Palm Kernel Expeller sourced through established supplier networks in major producing markets. ARP Ventures supports commercial enquiries based on quantity, destination, packaging, specifications, and preferred delivery terms.",

    image: "/products/pke.jpg",
    imageAlt:
      "Palm Kernel Expeller (PKE) for international commodity trade",

    types: ["Feed Grade", "Bulk Supply", "Commercial Grade"],

    specifications: [
      {
        label: "Product",
        value: "Palm Kernel Expeller (PKE)",
      },
      {
        label: "Application",
        value: "Animal Feed",
      },
      {
        label: "Supply",
        value: "Commercial Quantities",
      },
      {
        label: "Delivery Terms",
        value: "FOB / CFR / CIF – Subject to Quotation",
      },
    ],

    applications: [
      "Animal feed manufacturing",
      "Feed mills",
      "Livestock feed",
      "Agricultural applications",
      "Commodity distribution",
    ],

    features: [
      "Commercial bulk supply",
      "Multiple sourcing markets",
      "Suitable for international buyers",
      "Packaging and shipment terms can be discussed",
      "Port and delivery options subject to quotation",
    ],

    origins: [
      {
        country: "Malaysia",
        ports: [
          "Port Klang",
          "Penang Port",
          "Pasir Gudang Port",
          "Port of Tanjung Pelepas",
        ],
      },
      {
        country: "Indonesia",
        ports: [
          "Belawan Port",
          "Dumai Port",
          "Tanjung Priok Port",
          "Tanjung Perak Port",
          "Kuala Tanjung Port",
        ],
      },
    ],

    visual: {
      label: "PKE",
      from: "#e7d0a3",
      to: "#7a5435",
      accent: "#2d5f3a",
    },
  },

  {
    slug: "palm-oil",
    name: "Palm Oil",
    categorySlug: "agriculture",
    tradeSegment: "Edible Oils",

    shortDescription:
      "Commercial palm oil supply for food, manufacturing, distribution, and international markets.",

    description:
      "Palm oil sourced through qualified international supplier networks for commercial buyers, distributors, manufacturers, and international markets.",

    image: "/products/palm-oil.jpg",
    imageAlt: "Palm oil for international trade",

    types: ["Edible Oil", "Industrial Applications"],

    specifications: [
      {
        label: "Supply",
        value: "Global Sourcing",
      },
      {
        label: "Category",
        value: "Palm Oil",
      },
      {
        label: "Delivery Terms",
        value: "FOB / CFR / CIF – Subject to Quotation",
      },
    ],

    applications: [
      "Food manufacturing",
      "Edible oil distribution",
      "Industrial applications",
    ],

    features: [
      "International sourcing",
      "Commercial supply",
      "Buyer-specific specifications",
    ],

    origins: [
      {
        country: "Malaysia",
        ports: [
          "Port Klang",
          "Pasir Gudang Port",
          "Penang Port",
        ],
      },
      {
        country: "Indonesia",
        ports: [
          "Dumai Port",
          "Belawan Port",
          "Tanjung Priok Port",
          "Tanjung Perak Port",
        ],
      },
    ],

    visual: {
      label: "Palm Oil",
      from: "#ffe5b7",
      to: "#b15f2b",
      accent: "#234f34",
    },
  },

  {
    slug: "rice",
    name: "Premium Rice",
    categorySlug: "agriculture",
    tradeSegment: "Grains & Cereals",

    shortDescription:
      "Premium Basmati and non-Basmati rice for wholesalers, distributors, food businesses, and international buyers.",

    description:
      "Premium rice sourced through international supplier networks for commercial buyers. Basmati and non-Basmati varieties can be discussed according to grade, packaging, quantity, destination, and buyer requirements.",

    image: "/products/rice.jpg",
    imageAlt: "Premium rice for international trade",

    types: ["Basmati", "Non-Basmati"],

    specifications: [
      {
        label: "Supply",
        value: "Global Sourcing",
      },
      {
        label: "Category",
        value: "Rice",
      },
      {
        label: "Delivery Terms",
        value: "FOB / CFR / CIF – Subject to Quotation",
      },
    ],

    applications: [
      "Wholesale distribution",
      "Food service",
      "Retail",
      "International markets",
    ],

    features: [
      "Global supplier network",
      "Basmati and non-Basmati options",
      "Commercial quantities",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: ["Port Qasim", "Karachi Port"],
      },
      {
        country: "India",
        ports: ["Mundra Port", "Nhava Sheva Port"],
      },
      {
        country: "Thailand",
        ports: ["Laem Chabang Port", "Bangkok Port"],
      },
      {
        country: "Vietnam",
        ports: ["Cat Lai Port", "Cai Mep Port"],
      },
    ],

    visual: {
      label: "Rice",
      from: "#f7f3e3",
      to: "#b9c27b",
      accent: "#315a39",
    },
  },

  {
    slug: "spices",
    name: "Spices & Herbs",
    categorySlug: "agriculture",
    tradeSegment: "Spices & Food Ingredients",

    shortDescription:
      "Spices and herbs for food manufacturers, wholesalers, distributors, and international buyers.",

    description:
      "A range of spices and herbs available through international sourcing networks. Product selection, grade, packaging, quantity, origin, and destination can be discussed according to buyer requirements.",

    types: [
      "Red Chilli",
      "Cumin",
      "Turmeric",
      "Coriander",
      "Fennel",
    ],

    specifications: [
      {
        label: "Supply",
        value: "Global Sourcing",
      },
      {
        label: "Category",
        value: "Spices & Herbs",
      },
      {
        label: "Delivery Terms",
        value: "FOB / CFR / CIF – Subject to Quotation",
      },
    ],

    applications: [
      "Food manufacturing",
      "Wholesale",
      "Restaurants",
      "Retail",
    ],

    features: [
      "International supplier network",
      "Multiple spice varieties",
      "Commercial buyer enquiries",
    ],

    origins: [
      {
        country: "India",
        ports: ["Mundra Port", "Nhava Sheva Port"],
      },
      {
        country: "Pakistan",
        ports: ["Karachi Port", "Port Qasim"],
      },
    ],

    visual: {
      label: "Spices",
      from: "#f3d3a5",
      to: "#9d4d2a",
      accent: "#35633c",
    },
  },

  {
    slug: "mangoes",
    name: "Fresh Mangoes",
    categorySlug: "agriculture",
    tradeSegment: "Fresh Fruits",

    shortDescription:
      "Fresh mangoes for international fruit importers, wholesalers, retailers, and distributors.",

    description:
      "Fresh mangoes sourced according to international buyer requirements. Variety, quantity, packaging, harvest availability, origin, destination, and handling requirements can be discussed during the inquiry process.",

    image: "/products/mangoes.jpg",
    imageAlt: "Fresh mangoes for international trade",

    types: ["Commercial Grade", "Export Grade"],

    specifications: [
      {
        label: "Supply",
        value: "Seasonal Global Sourcing",
      },
      {
        label: "Category",
        value: "Fresh Fruit",
      },
      {
        label: "Delivery Terms",
        value: "FOB / CFR / CIF – Subject to Quotation",
      },
    ],

    applications: [
      "Fruit wholesalers",
      "Retail distribution",
      "Food service",
      "International markets",
    ],

    features: [
      "Seasonal availability",
      "International sourcing",
      "Commercial export enquiries",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: ["Karachi Port", "Port Qasim"],
      },
      {
        country: "India",
        ports: ["Nhava Sheva Port", "Mundra Port"],
      },
    ],

    visual: {
      label: "Mangoes",
      from: "#fff3cf",
      to: "#d87b2a",
      accent: "#256d39",
    },
  },

  {
    slug: "oranges-kinnow",
    name: "Oranges & Kinnow",
    categorySlug: "agriculture",
    tradeSegment: "Fresh Fruits",

    shortDescription:
      "Fresh oranges and Kinnow for international fruit buyers, wholesalers, and distributors.",

    description:
      "Fresh oranges and Kinnow sourced for commercial markets. Availability, grade, packaging, quantity, season, origin, and destination requirements can be discussed through the quotation process.",

    types: ["Kinnow", "Fresh Oranges"],

    specifications: [
      {
        label: "Supply",
        value: "Seasonal Global Sourcing",
      },
      {
        label: "Category",
        value: "Fresh Fruit",
      },
      {
        label: "Delivery Terms",
        value: "FOB / CFR / CIF – Subject to Quotation",
      },
    ],

    applications: [
      "Fruit wholesalers",
      "Retail distribution",
      "Food service",
    ],

    features: [
      "Seasonal supply",
      "International sourcing",
      "Commercial quantities",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: ["Karachi Port", "Port Qasim"],
      },
      {
        country: "Egypt",
        ports: ["Alexandria Port", "Port Said"],
      },
    ],

    visual: {
      label: "Kinnow",
      from: "#ffe0a8",
      to: "#e47b20",
      accent: "#2f6d44",
    },
  },

  {
    slug: "fresh-vegetables",
    name: "Fresh Vegetables",
    categorySlug: "agriculture",
    tradeSegment: "Fresh Produce",

    shortDescription:
      "Fresh vegetables including onions, potatoes, and seasonal produce for commercial buyers.",

    description:
      "Fresh vegetables available through international sourcing networks for commercial buyers and international markets. Product selection, season, grade, packaging, quantity, origin, and destination can be confirmed during inquiry.",

    types: ["Onions", "Potatoes", "Seasonal Vegetables"],

    specifications: [
      {
        label: "Supply",
        value: "Global Sourcing",
      },
      {
        label: "Category",
        value: "Fresh Produce",
      },
      {
        label: "Delivery Terms",
        value: "FOB / CFR / CIF – Subject to Quotation",
      },
    ],

    applications: [
      "Wholesale distribution",
      "Retail",
      "Food service",
      "Food processing",
    ],

    features: [
      "Seasonal availability",
      "Commercial quantities",
      "International buyer enquiries",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: ["Karachi Port", "Port Qasim"],
      },
      {
        country: "India",
        ports: ["Mundra Port", "Nhava Sheva Port"],
      },
    ],

    visual: {
      label: "Vegetables",
      from: "#dcebcf",
      to: "#6b8e45",
      accent: "#28583a",
    },
  },

  {
    slug: "meat",
    name: "Halal Meat",
    categorySlug: "agriculture",
    tradeSegment: "Meat & Food Products",

    shortDescription:
      "Halal meat supply for approved international buyers, distributors, and food businesses.",

    description:
      "Halal meat inquiries can be supported through suitable international supplier networks, subject to applicable import, veterinary, food safety, halal certification, and destination-country requirements.",

    types: ["Beef", "Buffalo Meat", "Mutton", "Goat Meat"],

    specifications: [
      {
        label: "Supply",
        value: "Global Sourcing",
      },
      {
        label: "Category",
        value: "Meat Products",
      },
      {
        label: "Delivery Terms",
        value: "FOB / CFR / CIF – Subject to Quotation",
      },
    ],

    applications: [
      "Food service",
      "Wholesale",
      "Food processing",
      "Retail",
    ],

    features: [
      "Halal market focus",
      "Commercial buyer enquiries",
      "Subject to destination requirements",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: ["Karachi Port", "Port Qasim"],
      },
      {
        country: "Australia",
        ports: ["Melbourne", "Sydney", "Fremantle"],
      },
    ],

    visual: {
      label: "Halal Meat",
      from: "#ead6ce",
      to: "#9d5a4f",
      accent: "#28563a",
    },
  },

  {
    slug: "seafood",
    name: "Seafood",
    categorySlug: "agriculture",
    tradeSegment: "Seafood",

    shortDescription:
      "Fish and seafood products for commercial importers, distributors, food businesses, and international markets.",

    description:
      "Seafood inquiries can be handled for commercial buyers seeking fish and other seafood products. Product type, processing, freezing, packaging, quantity, origin, destination, and applicable import requirements can be reviewed.",

    types: ["Fish", "Shrimp & Prawns", "Frozen Seafood"],

    specifications: [
      {
        label: "Supply",
        value: "Global Sourcing",
      },
      {
        label: "Category",
        value: "Seafood",
      },
      {
        label: "Delivery Terms",
        value: "FOB / CFR / CIF – Subject to Quotation",
      },
    ],

    applications: [
      "Wholesale distribution",
      "Food service",
      "Food processing",
    ],

    features: [
      "Commercial supply enquiries",
      "Fresh or frozen requirements can be discussed",
      "International markets",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: ["Karachi Port", "Port Qasim"],
      },
      {
        country: "Indonesia",
        ports: ["Jakarta", "Surabaya", "Belawan"],
      },
      {
        country: "Vietnam",
        ports: ["Cat Lai", "Cai Mep"],
      },
    ],

    visual: {
      label: "Seafood",
      from: "#d7e7e9",
      to: "#477e86",
      accent: "#285b45",
    },
  },

  {
    slug: "grains-pulses",
    name: "Grains & Pulses",
    categorySlug: "agriculture",
    tradeSegment: "Grains & Pulses",

    shortDescription:
      "Grains, pulses, and agricultural commodities for wholesalers, food manufacturers, distributors, and international buyers.",

    description:
      "Grains and pulses can be sourced through international supplier networks for wholesalers, distributors, food manufacturers, and international buyers.",

    types: [
      "Maize / Corn",
      "Chickpeas",
      "Lentils",
      "Other Pulses",
    ],

    specifications: [
      {
        label: "Supply",
        value: "Global Sourcing",
      },
      {
        label: "Category",
        value: "Grains & Pulses",
      },
      {
        label: "Delivery Terms",
        value: "FOB / CFR / CIF – Subject to Quotation",
      },
    ],

    applications: [
      "Food manufacturing",
      "Wholesale",
      "Retail",
      "Agricultural markets",
    ],

    features: [
      "Commercial quantities",
      "Multiple commodity options",
      "International buyer enquiries",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: ["Karachi Port", "Port Qasim"],
      },
      {
        country: "India",
        ports: ["Mundra Port", "Nhava Sheva Port"],
      },
      {
        country: "Australia",
        ports: ["Melbourne", "Fremantle", "Brisbane"],
      },
    ],

    visual: {
      label: "Grains",
      from: "#eee0b9",
      to: "#9b7b42",
      accent: "#38603e",
    },
  },

  {
    slug: "maize-corn",
    name: "Maize / Corn",
    categorySlug: "agriculture",
    tradeSegment: "Grains & Cereals",

    shortDescription:
      "Reliable maize and corn supply for food, feed, and industrial applications.",

    description:
      "Maize and corn inquiries can be handled for buyers seeking agricultural supply for food, feed, or industrial applications.",

    types: ["Food Grade", "Feed Grade"],

    specifications: [
      {
        label: "Supply",
        value: "Global Sourcing",
      },
      {
        label: "Category",
        value: "Maize & Corn",
      },
      {
        label: "Delivery Terms",
        value: "FOB / CFR / CIF – Subject to Quotation",
      },
    ],

    applications: [
      "Food",
      "Animal Feed",
      "Industrial Applications",
    ],

    features: [
      "Suitable for food and feed",
      "Commercial supply enquiries",
      "International sourcing",
    ],

    origins: [
      {
        country: "Brazil",
        ports: ["Santos Port", "Paranagua Port"],
      },
      {
        country: "Argentina",
        ports: ["Rosario Port", "Bahia Blanca"],
      },
      {
        country: "Australia",
        ports: ["Brisbane", "Melbourne"],
      },
    ],

    visual: {
      label: "Maize",
      from: "#fff1b8",
      to: "#c79022",
      accent: "#2e6438",
    },
  },

  {
    slug: "textiles-towels",
    name: "Towels & Home Textiles",
    categorySlug: "agriculture",
    tradeSegment: "Textiles",

    shortDescription:
      "Cotton towels and home textile products for wholesalers, distributors, hospitality businesses, and international buyers.",

    description:
      "Towels and selected home textile products can be sourced through international supplier networks. Specifications, sizes, GSM, packaging, origin, and quantities can be discussed according to buyer requirements.",

    image: "/products/towels.jpg",
    imageAlt: "Towels and home textiles for international trade",

    types: [
      "Bath Towels",
      "Hand Towels",
      "Kitchen Towels",
      "Home Textiles",
    ],

    specifications: [
      {
        label: "Supply",
        value: "Global Sourcing",
      },
      {
        label: "Category",
        value: "Textiles",
      },
      {
        label: "Delivery Terms",
        value: "FOB / CFR / CIF – Subject to Quotation",
      },
    ],

    applications: [
      "Hotels",
      "Retail",
      "Wholesale",
      "Hospitality",
    ],

    features: [
      "Cotton textile products",
      "Commercial quantities",
      "Custom specifications can be discussed",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: ["Karachi Port", "Port Qasim"],
      },
      {
        country: "India",
        ports: ["Mundra Port", "Nhava Sheva Port"],
      },
    ],

    visual: {
      label: "Textiles",
      from: "#f0eee7",
      to: "#a6a49b",
      accent: "#356342",
    },
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter(
    (product) => product.categorySlug === categorySlug,
  );
}

export function getCategoryWithProducts(
  slug: string,
): ProductCategoryWithProducts | undefined {
  const category = getCategory(slug);

  if (!category) {
    return undefined;
  }

  return {
    ...category,
    products: getProductsByCategory(slug),
  };
}

export function getPopulatedCategories() {
  return categories
    .map((category) => ({
      ...category,
      products: getProductsByCategory(category.slug),
    }))
    .filter((category) => category.products.length > 0);
}

export function getProduct(
  categorySlug: string,
  productSlug: string,
) {
  return products.find(
    (product) =>
      product.categorySlug === categorySlug &&
      product.slug === productSlug,
  );
}

export function getProductCategory(product: Product) {
  return getCategory(product.categorySlug);
}

export function getProductHref(product: Product) {
  return `/products/${product.categorySlug}/${product.slug}`;
}

export function getPrimaryProductImage(product: Product) {
  return product.images?.[0] ?? product.image;
}