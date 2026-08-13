import Link from "next/link";
import { ProductImage } from "@/components/ProductImage";
import { getProductCategory, getProductHref, type Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const category = getProductCategory(product);
  const href = getProductHref(product);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#dfe8dc] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <Link href={href} aria-label={`View details for ${product.name}`}>
        <ProductImage product={product} className="aspect-[4/3]" />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          {category && (
            <span className="rounded-full bg-[#eaf3e8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#2c6a3d]">
              {category.name}
            </span>
          )}
          {product.tradeSegment && (
            <span className="rounded-full bg-[#f7efe2] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a5f18]">
              {product.tradeSegment}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#18241d]">
          <Link href={href} className="transition hover:text-[#2f7d44]">
            {product.name}
          </Link>
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-[#526158]">
          {product.shortDescription}
        </p>

        {product.types.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {product.types.slice(0, 3).map((type) => (
              <span
                key={type}
                className="rounded-md border border-[#dfe8dc] px-2.5 py-1 text-xs font-medium text-[#526158]"
              >
                {type}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3 border-t border-[#edf2ea] pt-5">
          <Link
            href={href}
            className="inline-flex items-center justify-center rounded-md bg-[#224b2f] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2f7d44] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2"
          >
            View Details
          </Link>
          <Link
            href={{ pathname: "/contact", query: { product: product.name } }}
            className="inline-flex items-center justify-center rounded-md border border-[#cddac8] px-4 py-2.5 text-sm font-semibold text-[#224b2f] transition hover:border-[#2f7d44] hover:bg-[#f4f8f1] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </article>
  );
}

