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

  origins?: ProductOrigin[];
  deliveryTerms?: string[];

  specifications?: ProductSpecification[];
  applications?: string[];
  features?: string[];

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

/* =========================================================
   CATEGORIES
========================================================= */

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
      "Financial services and solutions tailored to meet diverse investment and business financing needs.",
  },

  {
    slug: "residence-consultancy",
    name: "Residence Consultancy",
    shortDescription:
      "Expert guidance for residential relocation and settlement services.",
    description:
      "Professional residence consultancy services to assist with relocation, visa applications, and settlement requirements.",
  },

  {
    slug: "education",
    name: "Education",
    shortDescription:
      "Educational opportunities and academic support services.",
    description:
      "Educational programs and consultancy services for students seeking academic and international opportunities.",
  },

  {
    slug: "health",
    name: "Health",
    shortDescription:
      "Healthcare services and wellness solutions.",
    description:
      "Health and wellness services designed to support better living and wellbeing.",
  },

  {
    slug: "others",
    name: "Others",
    shortDescription:
      "Additional services and products beyond our core categories.",
    description:
      "A range of additional services and products to meet business and personal requirements.",
  },
];

/* =========================================================
   PRODUCTS
========================================================= */

export const products: Product[] = [
  /* =======================================================
     PKE
  ======================================================= */

  {
    slug: "palm-kernel-expeller",
    name: "Palm Kernel Expeller (PKE)",
    categorySlug: "agriculture",
    tradeSegment: "Animal Feed",

    shortDescription:
      "Palm Kernel Expeller (PKE) for animal feed manufacturers, feed mills, distributors, and international commodity buyers.",

    description:
      "Palm Kernel Expeller sourced through established supplier networks for commercial animal feed and agricultural applications. Availability, origin, loading port, quantity, specifications, packaging, destination, and delivery terms can be discussed according to buyer requirements.",

    image: "/products/pke.jpg",
    imageAlt:
      "Palm Kernel Expeller PKE for international commodity trade",

    types: [
      "Feed Grade",
      "Bulk Supply",
      "Commercial Grade",
    ],

    origins: [
      {
        country: "Malaysia",
        ports: [
          "Port Klang",
          "Pasir Gudang",
          "Penang",
          "Other Malaysian Ports",
        ],
      },
      {
        country: "Indonesia",
        ports: [
          "Belawan",
          "Dumai",
          "Tanjung Priok",
          "Tanjung Perak",
          "Other Indonesian Ports",
        ],
      },
    ],

    deliveryTerms: [
      "FOB",
      "CFR",
      "CIF",
    ],

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
        label: "Origin",
        value: "Malaysia / Indonesia",
      },
      {
        label: "Loading Port",
        value: "Subject to availability and quotation",
      },
      {
        label: "Supply",
        value: "Commercial Quantities",
      },
      {
        label: "Delivery Terms",
        value: "FOB / CFR / CIF",
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
      "Malaysia and Indonesia sourcing options",
      "Multiple loading port options",
      "International buyer enquiries",
      "Flexible delivery terms",
      "Destination-based quotation",
    ],

    visual: {
      label: "PKE",
      from: "#e7d0a3",
      to: "#7a5435",
      accent: "#2d5f3a",
    },
  },

  /* =======================================================
     PALM OIL
  ======================================================= */

  {
    slug: "palm-oil",
    name: "Palm Oil",
    categorySlug: "agriculture",
    tradeSegment: "Edible Oils",

    shortDescription:
      "Commercial palm oil supply for food manufacturers, distributors, traders, and international buyers.",

    description:
      "Palm oil sourced through international supplier networks for commercial buyers. Product grade, origin, quantity, packaging, destination, and delivery terms can be discussed during the quotation process.",

    image: "/products/palm-oil.jpg",
    imageAlt: "Palm oil for international trade",

    types: [
      "Crude Palm Oil",
      "Refined Palm Oil",
      "Edible Palm Oil",
      "Industrial Grade",
    ],

    origins: [
      {
        country: "Malaysia",
        ports: [
          "Port Klang",
          "Pasir Gudang",
          "Penang",
          "Other Malaysian Ports",
        ],
      },
      {
        country: "Indonesia",
        ports: [
          "Dumai",
          "Belawan",
          "Tanjung Priok",
          "Tanjung Perak",
          "Other Indonesian Ports",
        ],
      },
    ],

    deliveryTerms: [
      "FOB",
      "CFR",
      "CIF",
    ],

    specifications: [
      {
        label: "Category",
        value: "Palm Oil",
      },
      {
        label: "Origin",
        value: "Malaysia / Indonesia",
      },
      {
        label: "Supply",
        value: "Commercial Quantities",
      },
      {
        label: "Delivery",
        value: "FOB / CFR / CIF",
      },
    ],

    applications: [
      "Food manufacturing",
      "Edible oil distribution",
      "Food processing",
      "Industrial applications",
    ],

    features: [
      "International sourcing",
      "Commercial supply",
      "Multiple origin options",
      "Buyer-specific specifications",
    ],

    visual: {
      label: "Palm Oil",
      from: "#ffe5b7",
      to: "#b15f2b",
      accent: "#234f34",
    },
  },

  /* =======================================================
     RICE
  ======================================================= */

  {
    slug: "rice",
    name: "Premium Rice",
    categorySlug: "agriculture",
    tradeSegment: "Grains & Cereals",

    shortDescription:
      "Premium Basmati and non-Basmati rice for wholesalers, distributors, food businesses, and international buyers.",

    description:
      "Premium rice sourced through international supplier networks. Basmati and non-Basmati varieties can be discussed according to grade, origin, packaging, quantity, destination, and buyer requirements.",

    image: "/products/rice.jpg",
    imageAlt: "Premium rice for international trade",

    types: [
      "Basmati",
      "Non-Basmati",
      "Long Grain",
      "Parboiled",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: [
          "Port Qasim",
          "Karachi Port",
        ],
      },
      {
        country: "India",
        ports: [
          "Mundra",
          "Kandla",
          "Nhava Sheva",
          "Other Indian Ports",
        ],
      },
    ],

    deliveryTerms: [
      "FOB",
      "CFR",
      "CIF",
    ],

    specifications: [
      {
        label: "Category",
        value: "Rice",
      },
      {
        label: "Origin",
        value: "Pakistan / India",
      },
      {
        label: "Supply",
        value: "Commercial Quantities",
      },
      {
        label: "Delivery",
        value: "FOB / CFR / CIF",
      },
    ],

    applications: [
      "Wholesale distribution",
      "Food service",
      "Retail",
      "Food processing",
      "International markets",
    ],

    features: [
      "Basmati and non-Basmati options",
      "International supplier network",
      "Commercial quantities",
      "Buyer-specific specifications",
    ],

    visual: {
      label: "Rice",
      from: "#f7f3e3",
      to: "#b9c27b",
      accent: "#315a39",
    },
  },

  /* =======================================================
     SPICES
  ======================================================= */

  {
    slug: "spices",
    name: "Spices & Herbs",
    categorySlug: "agriculture",
    tradeSegment: "Spices & Food Ingredients",

    shortDescription:
      "Spices and herbs for food manufacturers, wholesalers, distributors, and international buyers.",

    description:
      "A range of spices and herbs available through international sourcing networks. Product selection, grade, origin, packaging, quantity, destination, and delivery terms can be discussed according to buyer requirements.",

    types: [
      "Red Chilli",
      "Cumin",
      "Turmeric",
      "Coriander",
      "Fennel",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: [
          "Karachi Port",
          "Port Qasim",
        ],
      },
      {
        country: "India",
        ports: [
          "Mundra",
          "Nhava Sheva",
          "Other Indian Ports",
        ],
      },
    ],

    deliveryTerms: [
      "FOB",
      "CFR",
      "CIF",
    ],

    specifications: [
      {
        label: "Category",
        value: "Spices & Herbs",
      },
      {
        label: "Supply",
        value: "Global Sourcing",
      },
      {
        label: "Delivery",
        value: "FOB / CFR / CIF",
      },
    ],

    applications: [
      "Food manufacturing",
      "Wholesale",
      "Restaurants",
      "Retail",
      "Food processing",
    ],

    features: [
      "Multiple spice varieties",
      "International supplier network",
      "Commercial buyer enquiries",
      "Flexible sourcing options",
    ],

    visual: {
      label: "Spices",
      from: "#f3d3a5",
      to: "#9d4d2a",
      accent: "#35633c",
    },
  },

  /* =======================================================
     MANGOES
  ======================================================= */

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

    types: [
      "Export Grade",
      "Commercial Grade",
      "Premium Grade",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: [
          "Karachi Port",
          "Port Qasim",
        ],
      },
      {
        country: "India",
        ports: [
          "Mundra",
          "Nhava Sheva",
          "Other Indian Ports",
        ],
      },
    ],

    deliveryTerms: [
      "FOB",
      "CFR",
      "CIF",
    ],

    specifications: [
      {
        label: "Category",
        value: "Fresh Fruit",
      },
      {
        label: "Origin",
        value: "Pakistan / India",
      },
      {
        label: "Supply",
        value: "Seasonal",
      },
      {
        label: "Delivery",
        value: "FOB / CFR / CIF",
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
      "Buyer-specific packing options",
    ],

    visual: {
      label: "Mangoes",
      from: "#fff3cf",
      to: "#d87b2a",
      accent: "#256d39",
    },
  },

  /* =======================================================
     KINNOW
  ======================================================= */

  {
    slug: "oranges-kinnow",
    name: "Oranges & Kinnow",
    categorySlug: "agriculture",
    tradeSegment: "Fresh Fruits",

    shortDescription:
      "Fresh oranges and Kinnow for international fruit buyers, wholesalers, and distributors.",

    description:
      "Fresh oranges and Kinnow sourced for commercial markets. Availability, grade, packaging, quantity, season, origin, destination, and delivery terms can be discussed through the quotation process.",

    types: [
      "Kinnow",
      "Fresh Oranges",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: [
          "Karachi Port",
          "Port Qasim",
        ],
      },
      {
        country: "India",
        ports: [
          "Mundra",
          "Nhava Sheva",
          "Other Indian Ports",
        ],
      },
    ],

    deliveryTerms: [
      "FOB",
      "CFR",
      "CIF",
    ],

    specifications: [
      {
        label: "Category",
        value: "Fresh Fruit",
      },
      {
        label: "Origin",
        value: "Pakistan / India",
      },
      {
        label: "Supply",
        value: "Seasonal",
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

    visual: {
      label: "Kinnow",
      from: "#ffe0a8",
      to: "#e47b20",
      accent: "#2f6d44",
    },
  },

  /* =======================================================
     VEGETABLES
  ======================================================= */

  {
    slug: "fresh-vegetables",
    name: "Fresh Vegetables",
    categorySlug: "agriculture",
    tradeSegment: "Fresh Produce",

    shortDescription:
      "Fresh vegetables including onions, potatoes, and seasonal produce for commercial buyers.",

    description:
      "Fresh vegetables available through international sourcing networks for commercial buyers and international markets. Product selection, season, grade, packaging, quantity, origin, destination, and delivery terms can be confirmed during inquiry.",

    types: [
      "Onions",
      "Potatoes",
      "Seasonal Vegetables",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: [
          "Karachi Port",
          "Port Qasim",
        ],
      },
      {
        country: "India",
        ports: [
          "Mundra",
          "Nhava Sheva",
        ],
      },
    ],

    deliveryTerms: [
      "FOB",
      "CFR",
      "CIF",
    ],

    specifications: [
      {
        label: "Category",
        value: "Fresh Produce",
      },
      {
        label: "Supply",
        value: "Seasonal / Commercial",
      },
      {
        label: "Delivery",
        value: "FOB / CFR / CIF",
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

    visual: {
      label: "Vegetables",
      from: "#dcebcf",
      to: "#6b8e45",
      accent: "#28583a",
    },
  },

  /* =======================================================
     HALAL MEAT
  ======================================================= */

  {
    slug: "meat",
    name: "Halal Meat",
    categorySlug: "agriculture",
    tradeSegment: "Meat & Food Products",

    shortDescription:
      "Halal meat supply for approved international buyers, distributors, and food businesses.",

    description:
      "Halal meat inquiries can be supported through suitable supplier networks, subject to applicable import, veterinary, food safety, halal certification, and destination-country requirements.",

    types: [
      "Beef",
      "Buffalo Meat",
      "Mutton",
      "Goat Meat",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: [
          "Karachi Port",
          "Port Qasim",
        ],
      },
      {
        country: "India",
        ports: [
          "Nhava Sheva",
          "Mundra",
        ],
      },
    ],

    deliveryTerms: [
      "FOB",
      "CFR",
      "CIF",
    ],

    specifications: [
      {
        label: "Category",
        value: "Meat Products",
      },
      {
        label: "Certification",
        value: "Subject to destination requirements",
      },
      {
        label: "Delivery",
        value: "FOB / CFR / CIF",
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

    visual: {
      label: "Halal Meat",
      from: "#ead6ce",
      to: "#9d5a4f",
      accent: "#28563a",
    },
  },

  /* =======================================================
     SEAFOOD
  ======================================================= */

  {
    slug: "seafood",
    name: "Seafood",
    categorySlug: "agriculture",
    tradeSegment: "Seafood",

    shortDescription:
      "Fish and seafood products for commercial importers, distributors, food businesses, and international markets.",

    description:
      "Seafood inquiries can be handled for commercial buyers seeking fish and other seafood products. Product type, processing, freezing, packaging, quantity, origin, destination, and applicable import requirements can be reviewed.",

    types: [
      "Fish",
      "Shrimp & Prawns",
      "Frozen Seafood",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: [
          "Karachi Port",
          "Port Qasim",
        ],
      },
      {
        country: "India",
        ports: [
          "Nhava Sheva",
          "Mundra",
        ],
      },
      {
        country: "Indonesia",
        ports: [
          "Tanjung Priok",
          "Tanjung Perak",
        ],
      },
    ],

    deliveryTerms: [
      "FOB",
      "CFR",
      "CIF",
    ],

    specifications: [
      {
        label: "Category",
        value: "Seafood",
      },
      {
        label: "Supply",
        value: "Fresh / Frozen",
      },
      {
        label: "Delivery",
        value: "FOB / CFR / CIF",
      },
    ],

    applications: [
      "Wholesale distribution",
      "Food service",
      "Food processing",
    ],

    features: [
      "Commercial supply enquiries",
      "Fresh or frozen requirements",
      "International markets",
    ],

    visual: {
      label: "Seafood",
      from: "#d7e7e9",
      to: "#477e86",
      accent: "#285b45",
    },
  },

  /* =======================================================
     GRAINS & PULSES
  ======================================================= */

  {
    slug: "grains-pulses",
    name: "Grains & Pulses",
    categorySlug: "agriculture",
    tradeSegment: "Grains & Pulses",

    shortDescription:
      "Grains, pulses, and agricultural commodities for wholesalers, food manufacturers, distributors, and international buyers.",

    description:
      "Grains and pulses can be sourced through international supplier networks for wholesalers, distributors, food manufacturers, and international buyers. Product, grade, quantity, packaging, origin, destination, and delivery terms can be discussed during inquiry.",

    types: [
      "Maize / Corn",
      "Chickpeas",
      "Lentils",
      "Other Pulses",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: [
          "Karachi Port",
          "Port Qasim",
        ],
      },
      {
        country: "India",
        ports: [
          "Mundra",
          "Kandla",
          "Nhava Sheva",
        ],
      },
    ],

    deliveryTerms: [
      "FOB",
      "CFR",
      "CIF",
    ],

    specifications: [
      {
        label: "Category",
        value: "Grains & Pulses",
      },
      {
        label: "Supply",
        value: "Commercial Quantities",
      },
      {
        label: "Delivery",
        value: "FOB / CFR / CIF",
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

    visual: {
      label: "Grains",
      from: "#eee0b9",
      to: "#9b7b42",
      accent: "#38603e",
    },
  },

  /* =======================================================
     MAIZE
  ======================================================= */

  {
    slug: "maize-corn",
    name: "Maize / Corn",
    categorySlug: "agriculture",
    tradeSegment: "Grains & Cereals",

    shortDescription:
      "Reliable maize and corn supply for food, feed, and industrial applications.",

    description:
      "Maize and corn inquiries can be handled for buyers seeking agricultural supply for food, feed, or industrial applications. Requirements can be reviewed based on grade, quantity, origin, destination, and intended use.",

    types: [
      "Food Grade",
      "Feed Grade",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: [
          "Karachi Port",
          "Port Qasim",
        ],
      },
      {
        country: "India",
        ports: [
          "Mundra",
          "Kandla",
          "Nhava Sheva",
        ],
      },
      {
        country: "Argentina",
        ports: [
          "Rosario",
          "Bahía Blanca",
        ],
      },
      {
        country: "Brazil",
        ports: [
          "Santos",
          "Paranaguá",
        ],
      },
    ],

    deliveryTerms: [
      "FOB",
      "CFR",
      "CIF",
    ],

    specifications: [
      {
        label: "Category",
        value: "Maize & Corn",
      },
      {
        label: "Application",
        value: "Food / Feed / Industrial",
      },
      {
        label: "Supply",
        value: "Commercial Quantities",
      },
      {
        label: "Delivery",
        value: "FOB / CFR / CIF",
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
      "Multiple origin options",
      "International sourcing",
    ],

    visual: {
      label: "Maize",
      from: "#fff1b8",
      to: "#c79022",
      accent: "#2e6438",
    },
  },

  /* =======================================================
     TEXTILES
  ======================================================= */

  {
    slug: "textiles-towels",
    name: "Towels & Home Textiles",
    categorySlug: "agriculture",
    tradeSegment: "Textiles",

    shortDescription:
      "Cotton towels and home textile products for wholesalers, distributors, hospitality businesses, and international buyers.",

    description:
      "Towels and selected home textile products can be sourced through international supplier networks. Specifications, sizes, GSM, packaging, origin, quantities, destination, and delivery terms can be discussed according to buyer requirements.",

    image: "/products/towels.jpg",
    imageAlt: "Towels and home textiles for international trade",

    types: [
      "Bath Towels",
      "Hand Towels",
      "Kitchen Towels",
      "Home Textiles",
    ],

    origins: [
      {
        country: "Pakistan",
        ports: [
          "Karachi Port",
          "Port Qasim",
        ],
      },
      {
        country: "India",
        ports: [
          "Mundra",
          "Nhava Sheva",
        ],
      },
      {
        country: "Bangladesh",
        ports: [
          "Chattogram",
          "Mongla",
        ],
      },
    ],

    deliveryTerms: [
      "FOB",
      "CFR",
      "CIF",
    ],

    specifications: [
      {
        label: "Category",
        value: "Textiles",
      },
      {
        label: "Supply",
        value: "Commercial Quantities",
      },
      {
        label: "Delivery",
        value: "FOB / CFR / CIF",
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
      "International sourcing",
    ],

    visual: {
      label: "Textiles",
      from: "#f0eee7",
      to: "#a6a49b",
      accent: "#356342",
    },
  },
];

/* =========================================================
   HELPER FUNCTIONS
========================================================= */

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