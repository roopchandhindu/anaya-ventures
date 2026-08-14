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
    name: "Agriculture",
    shortDescription:
      "Agricultural commodities for commercial and international buyers.",
    description:
      "Premium agricultural products sourced with a focus on quality, consistency, and reliable international supply.",
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
];export const products: Product[] = [
  {
    slug: "palm-kernel-expeller",
    name: "Palm Kernel Expeller (PKE)",
    categorySlug: "agriculture",
    tradeSegment: "Animal Feed",
    shortDescription:
      "Quality Malaysian PKE for animal feed manufacturers, distributors, and international commodity buyers.",
    description:
      "Palm Kernel Expeller (PKE) sourced from Malaysia for commercial animal feed and agricultural applications. Buyers can enquire based on quantity, destination, packaging, specifications, and preferred delivery terms.",
    image: "/products/pke.jpg",
    imageAlt: "Palm Kernel Expeller (PKE) for international trade",
    types: ["Feed Grade", "Bulk Supply"],
    specifications: [
      { label: "Origin", value: "Malaysia" },
      { label: "Application", value: "Animal Feed" },
    ],
    applications: [
      "Animal feed",
      "Feed manufacturing",
      "Agricultural applications",
    ],
    features: [
      "Malaysia origin",
      "Commercial quantities",
      "International buyer inquiries",
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
      "Commercial Malaysian palm oil supply for food, manufacturing, and international markets.",
    description:
      "Palm oil sourced from Malaysia for commercial buyers, distributors, manufacturers, and international markets. Product grade, quantity, packaging, destination, and delivery terms can be discussed during the quotation process.",
    image: "/products/palm-oil.jpg",
    imageAlt: "Malaysian palm oil for international trade",
    types: ["Edible Oil", "Industrial Applications"],
    specifications: [
      { label: "Origin", value: "Malaysia" },
      { label: "Category", value: "Palm Oil" },
    ],
    applications: [
      "Food manufacturing",
      "Edible oil distribution",
      "Industrial applications",
    ],
    features: [
      "Malaysia origin",
      "Commercial supply",
      "International buyer inquiries",
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
      "Pakistani Basmati and non-Basmati rice for wholesalers, distributors, and international buyers.",
    description:
      "Premium Pakistani rice available for international commercial buyers. Basmati and non-Basmati varieties can be discussed according to grade, packaging, quantity, destination, and buyer requirements.",
    image: "/products/rice.jpg",
    imageAlt: "Pakistani premium rice for international trade",
    types: ["Basmati", "Non-Basmati"],
    specifications: [
      { label: "Origin", value: "Pakistan" },
      { label: "Category", value: "Rice" },
    ],
    applications: [
      "Wholesale distribution",
      "Food service",
      "Retail",
      "International markets",
    ],
    features: [
      "Pakistan origin",
      "Basmati and non-Basmati options",
      "Commercial quantities",
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
      "Pakistani spices and herbs for food manufacturers, wholesalers, distributors, and international buyers.",
    description:
      "A range of Pakistani spices and herbs available for commercial and international buyers. Product selection, grade, packaging, quantity, and destination can be discussed according to buyer requirements.",
    imageAlt: "Pakistani spices and herbs for international trade",
    types: [
      "Red Chilli",
      "Cumin",
      "Turmeric",
      "Coriander",
      "Fennel",
    ],
    specifications: [
      { label: "Origin", value: "Pakistan" },
      { label: "Category", value: "Spices & Herbs" },
    ],
    applications: [
      "Food manufacturing",
      "Wholesale",
      "Restaurants",
      "Retail",
    ],
    features: [
      "Pakistan origin",
      "Multiple spice varieties",
      "Commercial buyer inquiries",
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
      "Premium Pakistani mangoes for international fruit importers, wholesalers, and distributors.",
    description:
      "Fresh Pakistani mangoes sourced for international markets. Variety, quantity, packaging, harvest availability, destination, and handling requirements can be discussed during the inquiry process.",
    image: "/products/mangoes.jpg",
    imageAlt: "Fresh Pakistani mangoes for international trade",
    types: ["Commercial Grade", "Export Grade"],
    specifications: [
      { label: "Origin", value: "Pakistan" },
      { label: "Category", value: "Fresh Fruit" },
    ],
    applications: [
      "Fruit wholesalers",
      "Retail distribution",
      "Food service",
      "International markets",
    ],
    features: [
      "Pakistan origin",
      "Seasonal availability",
      "Commercial export inquiries",
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
      "Fresh Pakistani oranges and Kinnow for international fruit buyers and distributors.",
    description:
      "Fresh Pakistani oranges and Kinnow sourced for commercial markets. Availability, grade, packaging, quantity, season, and destination requirements can be discussed through the quotation process.",
    types: ["Kinnow", "Fresh Oranges"],
    specifications: [
      { label: "Origin", value: "Pakistan" },
      { label: "Category", value: "Fresh Fruit" },
    ],
    applications: [
      "Fruit wholesalers",
      "Retail distribution",
      "Food service",
    ],
    features: [
      "Pakistan origin",
      "Seasonal supply",
      "Commercial quantities",
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
      "Fresh Pakistani vegetables including onions and potatoes for commercial and international buyers.",
    description:
      "Fresh Pakistani vegetables available for commercial buyers and international markets. Product selection, season, grade, packaging, quantity, and destination can be confirmed during inquiry.",
    types: [
      "Onions",
      "Potatoes",
      "Seasonal Vegetables",
    ],
    specifications: [
      { label: "Origin", value: "Pakistan" },
      { label: "Category", value: "Fresh Produce" },
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
      "International buyer inquiries",
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
      "Halal meat inquiries can be supported for suitable international markets, subject to applicable import, veterinary, food safety, halal certification, and destination-country requirements.",
    types: [
      "Beef",
      "Buffalo Meat",
      "Mutton",
      "Goat Meat",
    ],
    specifications: [
      { label: "Origin", value: "Pakistan" },
      { label: "Category", value: "Meat Products" },
    ],
    applications: [
      "Food service",
      "Wholesale",
      "Food processing",
      "Retail",
    ],
    features: [
      "Halal market focus",
      "Commercial buyer inquiries",
      "Subject to destination requirements",
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
      "Fish and seafood products for commercial importers, distributors, and international markets.",
    description:
      "Seafood inquiries can be handled for commercial buyers seeking fish and other seafood products. Product type, processing, freezing, packaging, quantity, destination, and applicable import requirements can be reviewed.",
    types: [
      "Fish",
      "Shrimp & Prawns",
      "Frozen Seafood",
    ],
    specifications: [
      { label: "Origin", value: "Pakistan" },
      { label: "Category", value: "Seafood" },
    ],
    applications: [
      "Wholesale distribution",
      "Food service",
      "Food processing",
    ],
    features: [
      "Commercial supply inquiries",
      "Fresh or frozen requirements can be discussed",
      "International markets",
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
      "Pakistani grains, pulses, and agricultural commodities for commercial buyers.",
    description:
      "Grains and pulses can be sourced for wholesalers, distributors, food manufacturers, and international buyers. Product, grade, quantity, packaging, and destination requirements can be discussed during inquiry.",
    types: [
      "Maize / Corn",
      "Chickpeas",
      "Lentils",
      "Other Pulses",
    ],
    specifications: [
      { label: "Origin", value: "Pakistan" },
      { label: "Category", value: "Grains & Pulses" },
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
      "International buyer inquiries",
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
      "Maize and corn inquiries can be handled for buyers seeking agricultural supply for food, feed, or industrial applications. Requirements can be reviewed based on quantity, destination, and intended use.",
    types: ["Food Grade", "Feed Grade"],
    applications: [
      "Food",
      "Animal Feed",
      "Industrial Applications",
    ],
    features: [
      "Suitable for food and feed",
      "Commercial supply inquiries",
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
      "Pakistani cotton towels and home textile products for international buyers.",
    description:
      "Pakistani towels and selected home textile products can be sourced for wholesalers, distributors, hospitality businesses, and international buyers. Specifications, sizes, GSM, packaging, and quantities can be discussed.",
    image: "/products/towels.jpg",
    imageAlt: "Pakistani towels and home textiles for international trade",
    types: [
      "Bath Towels",
      "Hand Towels",
      "Kitchen Towels",
      "Home Textiles",
    ],
    specifications: [
      { label: "Origin", value: "Pakistan" },
      { label: "Category", value: "Textiles" },
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
  return products.filter((product) => product.categorySlug === categorySlug);
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

export function getProduct(categorySlug: string, productSlug: string) {
  return products.find(
    (product) =>
      product.categorySlug === categorySlug && product.slug === productSlug,
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

