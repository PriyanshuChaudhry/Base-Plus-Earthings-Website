import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug } from "@/data/products";
import InquiryForm from "@/components/InquiryForm";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    keywords: [
      product.name,
      product.category,
      `${product.name} manufacturer`,
      `${product.name} supplier India`,
    ],
    openGraph: {
      title: `${product.name} | Base Plus Earthings`,
      description: product.shortDescription,
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  // If not enough related products from same category, add from other categories
  if (relatedProducts.length < 3) {
    const otherProducts = products
      .filter((p) => p.slug !== product.slug && !relatedProducts.includes(p))
      .slice(0, 3 - relatedProducts.length);
    relatedProducts.push(...otherProducts);
  }

  return (
    <>
      {/* JSON-LD Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.shortDescription,
            category: product.category,
            manufacturer: {
              "@type": "Organization",
              name: "Base Plus Earthings",
            },
          }),
        }}
      />

      {/* Breadcrumb */}
      <section className="pt-28 pb-4 bg-navy-50 border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-500">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <Link href="/products" className="hover:text-teal-600 transition-colors">
              Products
            </Link>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-navy-800 font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="section-padding px-4 sm:px-6 lg:px-8" id="product-detail">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image Placeholder */}
            <div className="bg-gradient-to-br from-navy-50 to-navy-100 rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              ) : (
                <div className="text-center p-8">
                  <svg className="w-24 h-24 text-navy-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-navy-400 font-medium">Product Image</p>
                  <p className="text-navy-400 text-sm mt-1">
                    (Your image for {product.name} will go here)
                  </p>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                {product.name}
              </h1>
              <p className="text-navy-600 text-lg leading-relaxed mb-8">
                {product.shortDescription}
              </p>

              {/* Specifications Table */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-navy-800 mb-4">
                  Specifications
                </h2>
                <div className="bg-navy-50 rounded-xl overflow-hidden">
                  {Object.entries(product.specifications).map(
                    ([key, value], index) => (
                      <div
                        key={key}
                        className={`flex items-center px-6 py-3.5 ${
                          index % 2 === 0 ? "bg-white" : "bg-navy-50"
                        }`}
                      >
                        <span className="text-sm font-medium text-navy-500 w-40 shrink-0">
                          {key}
                        </span>
                        <span className="text-sm text-navy-800 font-medium">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Features */}
              {product.features && (
                <div className="mb-8">
                  <h2 className="text-lg font-bold text-navy-800 mb-4">
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-navy-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#inquiry-section"
                  className="flex-1 text-center px-6 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all shadow-md"
                >
                  Send Inquiry
                </a>
                <Link
                  href="/catalogue"
                  className="flex-1 text-center px-6 py-3.5 border-2 border-navy-200 text-navy-700 font-semibold rounded-xl hover:bg-navy-50 transition-all"
                >
                  Download Catalogue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="section-padding px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-50/50 to-white" id="inquiry-section">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-3">
              Interested in {product.name}?
            </h2>
            <p className="text-navy-500">
              Fill out the form below and we&apos;ll get back to you with pricing and technical details.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg shadow-navy-900/5 border border-navy-100 p-8">
            <InquiryForm productName={product.name} />
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding px-4 sm:px-6 lg:px-8" id="related-products">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-8 text-center">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.slug} product={rp} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
