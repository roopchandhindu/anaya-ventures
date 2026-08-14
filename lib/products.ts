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
];

export const products: Product[] = [
  {
    slug: "mangoes",
    name: "Fresh Mangoes",
    categorySlug: "agriculture",
    tradeSegment: "Agricultural Products",
    shortDescription:
      "Premium-quality Pakistani mangoes sourced for international markets and commercial buyers.",
    description:
      "Fresh mangoes are available for commercial buyers seeking Pakistani agricultural products for international markets. Inquiry details such as quantity, destination, preferred handling, and packaging requirements can be confirmed through the quote process.",
    image: "/products/mangoes.jpg",
    imageAlt: "Fresh mangoes for agricultural product inquiries",
    types: [],
    specifications: [{ label: "Origin", value: "Pakistan" }],
    features: [
      "Sourced for international markets",
      "Suitable for commercial buyers",
    ],
    visual: {
      label: "Mangoes",
      from: "#fff3cf",
      to: "#d87b2a",
      accent: "#256d39",
    },
  },
  {
    slug: "rice",
    name: "Premium Rice",
    categorySlug: "agriculture",
    tradeSegment: "Grains & Cereals",
    shortDescription:
      "Quality Pakistani rice suitable for wholesalers, distributors and international buyers.",
    description:
      "Premium rice is offered for wholesalers, distributors, and international buyers seeking quality Pakistani grain supply. Specific variety, grade, volume, and destination details can be discussed during inquiry.",
    image: "/products/rice.jpg",
    imageAlt: "Premium rice grains for commercial buyer inquiries",
    types: [],
    specifications: [{ label: "Origin", value: "Pakistan" }],
    features: [
      "Suitable for wholesalers",
      "Suitable for distributors",
      "Available for international buyer inquiries",
    ],
    visual: {
      label: "Rice",
      from: "#f7f3e3",
      to: "#b9c27b",
      accent: "#315a39",
    },
  },
  {
    slug: "maize-corn",
    name: "Maize / Corn",
    categorySlug: "agriculture",
    tradeSegment: "Grains & Cereals",
    shortDescription:
      "Reliable maize supply for food, feed and industrial applications.",
    description:
      "Maize and corn inquiries can be handled for buyers seeking agricultural supply for food, feed, or industrial applications. Requirements can be reviewed based on quantity, destination, and intended use.",
    image: "/products/maize-corn.jpg",
    imageAlt: "Maize and corn for food, feed and industrial inquiries",
    types: [],
    applications: ["Food", "Feed", "Industrial applications"],
    features: ["Suitable for food, feed and industrial inquiries"],
    visual: {
      label: "Maize",
      from: "#fff1b8",
      to: "#c79022",
      accent: "#2e6438",
    },
  },
  {
    slug: "palm-oil",
    name: "Palm Oil",
    categorySlug: "agriculture",
    tradeSegment: "Edible Oils",
    shortDescription:
      "Commercial palm oil supply sourced for international food and industrial markets.",
    description:
      "Palm oil inquiries are supported for commercial buyers serving international food and industrial markets. Product requirements, quantity, destination, and packaging needs can be reviewed through the quote process.",
    image: "/products/palm-oil.jpg",
    imageAlt: "Palm oil for commercial food and industrial market inquiries",
    types: [],
    applications: ["Food markets", "Industrial markets"],
    features: ["Commercial supply inquiries supported"],
    visual: {
      label: "Palm Oil",
      from: "#ffe5b7",
      to: "#b15f2b",
      accent: "#234f34",
    },
  },
  {
    slug: "palm-kernel-expeller",
    name: "Palm Kernel Expeller (PKE)",
    categorySlug: "agriculture",
    tradeSegment: "Animal Feed",
    shortDescription:
      "Quality PKE suitable for animal feed manufacturers and agricultural applications.",
    description:
      "Palm Kernel Expeller is available for inquiries from animal feed manufacturers and agricultural buyers. Quantity, destination, and product requirement details can be submitted through the quote form.",
    image: "/products/pke.jpg",
    imageAlt: "Palm Kernel Expeller for animal feed and agricultural inquiries",
    types: [],
    applications: ["Animal feed manufacturers", "Agricultural applications"],
    features: ["Suitable for feed and agriculture-related inquiries"],
    visual: {
      label: "PKE",
      from: "#e7d0a3",
      to: "#7a5435",
      accent: "#2d5f3a",
    },
  },
  {
    slug: "agricultural-mix",
    name: "Agricultural Mix",
    categorySlug: "agriculture",
    tradeSegment: "Mixed Products",
    shortDescription:
      "Curated mix of premium agricultural products for diverse commercial needs.",
    description:
      "Agricultural mix bundles are available for buyers seeking diverse product combinations for international markets. Specific product composition, quantity, destination, and packaging can be customized through inquiry.",
    image: "/products/mix.png",
    imageAlt: "Agricultural mix product bundle for commercial inquiries",
    types: [],
    features: ["Customizable product mix", "International market ready"],
    visual: {
      label: "Mix",
      from: "#f5e6d3",
      to: "#9b7c5c",
      accent: "#2f6d44",
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

