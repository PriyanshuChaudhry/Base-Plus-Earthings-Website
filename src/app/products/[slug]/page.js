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

// Generate FAQ data for each product
function getProductFAQs(product) {
  const faqs = [];
  
  faqs.push({
    question: `What is ${product.name}?`,
    answer: product.shortDescription,
  });

  if (product.specifications?.Material) {
    faqs.push({
      question: `What material is the ${product.name} made of?`,
      answer: `The ${product.name} is made of ${product.specifications.Material}. It is manufactured by Base Plus Earthings with strict quality control and testing.`,
    });
  }

  if (product.specifications?.Standard) {
    faqs.push({
      question: `What standards does the ${product.name} comply with?`,
      answer: `The ${product.name} complies with ${product.specifications.Standard} standards, ensuring reliable performance and safety in all earthing applications.`,
    });
  }

  if (product.specifications?.Length) {
    faqs.push({
      question: `What sizes are available for ${product.name}?`,
      answer: `The ${product.name} is available in lengths of ${product.specifications.Length}${product.specifications.Diameter ? ` and diameters of ${product.specifications.Diameter}` : ""}. Custom sizes can be made available on request.`,
    });
  }

  faqs.push({
    question: `Where can I buy ${product.name} in India?`,
    answer: `You can buy ${product.name} directly from Base Plus Earthings. We deliver across India. Contact us at +91 9278276662 or email baseplusearthings.in@gmail.com for pricing and orders.`,
  });

  return faqs;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | Manufacturer & Supplier in India`,
    description: `Buy ${product.name} from Base Plus Earthings. ${product.shortDescription} Available in multiple sizes. Pan India delivery. Contact for best price.`,
    keywords: [
      product.name,
      product.category,
      `${product.name} manufacturer`,
      `${product.name} supplier India`,
      `${product.name} price`,
      `buy ${product.name}`,
      `${product.name} manufacturer in India`,
      "earthing electrode",
      "earthing solutions",
      "Base Plus Earthings",
    ],
    openGraph: {
      title: `${product.name} | Base Plus Earthings - Manufacturer in India`,
      description: `Buy ${product.name} from Base Plus Earthings. ${product.shortDescription}`,
      type: "website",
      images: product.image ? [{ url: `https://baseplusearthings.in${product.image}`, width: 800, height: 800, alt: product.name }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Base Plus Earthings`,
      description: product.shortDescription,
    },
    alternates: {
      canonical: `https://baseplusearthings.in/products/${slug}`,
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

  const faqs = getProductFAQs(product);

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
            image: product.image ? `https://baseplusearthings.in${product.image}` : undefined,
            brand: {
              "@type": "Brand",
              name: "Base Plus Earthings",
            },
            manufacturer: {
              "@type": "Organization",
              name: "Base Plus Earthings",
              url: "https://baseplusearthings.in",
            },
            offers: {
              "@type": "Offer",
              url: `https://baseplusearthings.in/products/${product.slug}`,
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
              seller: {
                "@type": "Organization",
                name: "Base Plus Earthings",
              },
            },
            additionalProperty: Object.entries(product.specifications || {}).map(([key, value]) => ({
              "@type": "PropertyValue",
              name: key,
              value: value,
            })),
          }),
        }}
      />

      {/* JSON-LD BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://baseplusearthings.in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Products",
                item: "https://baseplusearthings.in/products",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: product.name,
                item: `https://baseplusearthings.in/products/${product.slug}`,
              },
            ],
          }),
        }}
      />

      {/* JSON-LD FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
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
                  alt={`${product.name} - ${product.category} manufactured by Base Plus Earthings India`}
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

      {/* FAQ Section */}
      <section className="section-padding px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-navy-50/30" id="product-faqs">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-navy-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-navy-800 font-semibold text-sm md:text-base">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-navy-400 group-open:rotate-180 transition-transform duration-200 shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-navy-600 text-sm leading-relaxed border-t border-navy-50 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
