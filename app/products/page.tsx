const products = [
  {
    name: "Fresh Mangoes",
    emoji: "🥭",
    category: "Agricultural Products",
    description:
      "Premium-quality Pakistani mangoes sourced for international markets and commercial buyers.",
  },
  {
    name: "Premium Rice",
    emoji: "🌾",
    category: "Grains & Cereals",
    description:
      "Quality Pakistani rice suitable for wholesalers, distributors and international buyers.",
  },
  {
    name: "Maize / Corn",
    emoji: "🌽",
    category: "Grains & Cereals",
    description:
      "Reliable maize supply for food, feed and industrial applications.",
  },
  {
    name: "Palm Oil",
    emoji: "🛢️",
    category: "Edible Oils",
    description:
      "Commercial palm oil supply sourced for international food and industrial markets.",
  },
  {
    name: "Palm Kernel Expeller",
    emoji: "🌴",
    category: "Animal Feed",
    description:
      "Quality PKE suitable for animal feed manufacturers and agricultural applications.",
  },
  {
    name: "Towels & Textiles",
    emoji: "🧺",
    category: "Textiles",
    description:
      "Quality textile products supplied to international wholesalers and commercial buyers.",
  },
];

export default function Products() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-green-950 px-6 py-24 text-white">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-800 opacity-30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-green-700 opacity-20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
            Anaya Ventures
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Products
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
            Connecting reliable suppliers with international buyers through
            quality products, trusted sourcing and global trade.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
            What We Trade
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Products We Supply
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We work with trusted suppliers to provide quality products for
            wholesalers, distributors and businesses around the world.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Temporary Product Image */}
              <div className="flex h-64 items-center justify-center bg-gradient-to-br from-green-50 to-gray-100 text-8xl transition duration-300 group-hover:scale-[1.02]">
                {product.emoji}
              </div>

              {/* Product Information */}
              <div className="p-7">

                <span className="inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700">
                  {product.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-gray-900">
                  {product.name}
                </h3>

                <p className="mt-3 min-h-[72px] leading-7 text-gray-600">
                  {product.description}
                </p>

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <a
                    href="/contact"
                    className="inline-flex items-center font-semibold text-green-800 transition hover:text-green-600"
                  >
                    Enquire About Product
                    <span className="ml-2 transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-green-900 px-8 py-14 text-center text-white shadow-xl sm:px-14">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Looking for a Reliable Trading Partner?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-green-100">
            Tell us what product you are looking for, your required quantity
            and destination. Our team will be happy to discuss your
            requirements.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-green-900 shadow-sm transition hover:bg-green-50"
          >
            Contact Us
          </a>

        </div>
      </section>

    </main>
  );
}