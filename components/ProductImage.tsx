import Image from "next/image";
import type { CSSProperties } from "react";
import {
  getPrimaryProductImage,
  type Product,
  type ProductVisual,
} from "@/lib/products";

type ProductImageProps = {
  product: Product;
  className?: string;
  sizes?: string;
  preload?: boolean;
};

function PlaceholderVisual({
  name,
  visual,
}: {
  name: string;
  visual: ProductVisual;
}) {
  const style = {
    "--visual-from": visual.from,
    "--visual-to": visual.to,
    "--visual-accent": visual.accent,
  } as CSSProperties;

  return (
    <div
      className="relative flex h-full min-h-[220px] w-full items-end overflow-hidden bg-[linear-gradient(135deg,var(--visual-from),var(--visual-to))] p-6"
      style={style}
      aria-label={`${name} visual placeholder`}
      role="img"
    >
      <div className="absolute inset-x-0 top-0 h-20 bg-white/25" />
      <div className="absolute -right-10 bottom-8 h-40 w-40 rounded-full border-[28px] border-white/20" />
      <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-[var(--visual-accent)]/20" />
      <div className="relative">
        <span className="inline-flex rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#203728]">
          {visual.label}
        </span>
        <p className="mt-3 max-w-[12rem] text-2xl font-bold leading-tight text-white drop-shadow-sm">
          {name}
        </p>
      </div>
    </div>
  );
}

export function ProductImage({
  product,
  className = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
  preload = false,
}: ProductImageProps) {
  const image = getPrimaryProductImage(product);

  return (
    <div className={`relative overflow-hidden bg-[#eef3ea] ${className}`}>
      {image ? (
        <Image
          src={image}
          alt={product.imageAlt ?? product.name}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      ) : (
        <PlaceholderVisual name={product.name} visual={product.visual} />
      )}
    </div>
  );
}

