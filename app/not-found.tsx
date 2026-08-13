import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f7d44]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#18241d] sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 leading-7 text-[#526158]">
          The page or product you are looking for could not be found.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-md bg-[#224b2f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2f7d44] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2"
          >
            View Products
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-[#cddac8] px-5 py-3 text-sm font-semibold text-[#224b2f] transition hover:border-[#2f7d44] hover:bg-[#f4f8f1] focus:outline-none focus:ring-2 focus:ring-[#c9902f] focus:ring-offset-2"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}

