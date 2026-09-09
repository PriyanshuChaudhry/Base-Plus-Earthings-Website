import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "1000+", label: "Products Delivered" },
  { value: "500+", label: "Happy Clients" },
  { value: "Pan India", label: "Delivery Network" },
];

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Quality Certified",
    description: "All products manufactured under strict quality control with IS & international standards compliance.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Custom Solutions",
    description: "Tailored earthing solutions designed to meet your specific site conditions and requirements.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Delivery",
    description: "Pan India delivery network ensuring your products reach on time, every time.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Expert Support",
    description: "Technical guidance from our experienced team for earthing system design and installation.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Competitive Pricing",
    description: "Factory direct pricing without compromising on quality. Best value for your investment.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Complete Range",
    description: "One stop solution for all earthing needs, from electrodes to compound to lightning protection.",
  },
];

const certifications = [
  { name: "ISO 9001:2008", subtitle: "Quality Management" },
  { name: "ISI", subtitle: "Bureau of Indian Standards" },
  { name: "BIS", subtitle: "Certified Products" },
  { name: "RoHS", subtitle: "Compliant" },
  { name: "CE", subtitle: "European Conformity" },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* JSON-LD Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness"],
            "@id": "https://baseplusearthings.in/#organization",
            name: "Base Plus Earthings",
            url: "https://baseplusearthings.in",
            logo: "https://baseplusearthings.in/logo.PNG",
            image: "https://baseplusearthings.in/hero-image.jpeg",
            description:
              "Leading manufacturer of premium earthing electrodes, copper bonded rods, GI earthing electrodes, earthing pit covers, and lightning protection systems in India. ISO certified quality with pan India delivery.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lucknow",
              addressRegion: "Uttar Pradesh",
              postalCode: "226001",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "26.8467",
              longitude: "80.9462",
            },
            telephone: "+91 9278276662",
            email: "baseplusearthings.in@gmail.com",
            priceRange: "$$",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "18:00",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            sameAs: [],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Earthing Products",
              itemListElement: [
                {
                  "@type": "OfferCatalog",
                  name: "Earthing Electrodes",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Copper Bonded Earthing Electrode" } },
                    { "@type": "Offer", itemOffered: { "@type": "Product", name: "GI Earthing Electrode" } },
                    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pure Copper Earthing Electrode" } },
                  ],
                },
                {
                  "@type": "OfferCatalog",
                  name: "Lightning Protection",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Product", name: "ESE Lightning Arrester" } },
                    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pure Copper Lightning Arrester" } },
                  ],
                },
              ],
            },
          }),
        }}
      />

      {/* JSON-LD WebSite Schema for Sitelinks Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Base Plus Earthings",
            url: "https://baseplusearthings.in",
            description: "Leading manufacturer of earthing electrodes and lightning protection systems in India.",
            publisher: {
              "@type": "Organization",
              "@id": "https://baseplusearthings.in/#organization",
            },
          }),
        }}
      />

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative md:min-h-[100svh] flex items-center overflow-hidden pt-32 pb-24 md:pt-0 md:pb-0"
        id="hero"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950">
          {/* Mobile Background Image Overlay */}
          <div className="absolute inset-0 md:hidden opacity-30 mix-blend-overlay">
            <Image
              src="/hero-image.jpeg"
              alt="Earthing electrode manufacturer Base Plus Earthings facility"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-700/20 rounded-full blur-3xl" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full md:py-30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-300 text-sm font-medium mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              Trusted Earthing Solutions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
              India&apos;s Leading{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
                Earthing Solutions
              </span>{" "}
              Manufacturer
            </h1>

            <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-10 max-w-2xl animate-fade-in-up">
              Premium copper bonded earthing electrodes, GI earthing systems,
              and complete lightning protection solutions. Engineered for
              safety, built for durability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-200 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5 text-base"
                id="hero-cta-products"
              >
                View Products
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-200 text-base"
                id="hero-cta-quote"
              >
                Send Enquiry
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Desktop Image */}
          <div className="hidden md:block relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-teal-500/10 border border-white/10 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 to-transparent z-10" />
            <Image
              src="/hero-image.jpeg"
              alt="Premium earthing electrodes and lightning protection products by Base Plus Earthings India"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:block">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-teal-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="relative -mt-16 z-10 px-4 sm:px-6 lg:px-8" id="stats">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl shadow-navy-900/10 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-navy-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-navy-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT INTRO ===== */}
      <section className="section-padding px-4 sm:px-6 lg:px-8" id="about-intro">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                title="India's Trusted Earthing Partner"
                subtitle=""
                centered={false}
              />
              <p className="text-navy-600 leading-relaxed mb-6 text-base">
                Base Plus Earthings is a leading manufacturer of high quality
                earthing electrodes, copper bonded rods, and comprehensive
                earthing solutions. With years of industry expertise, we
                deliver products that meet the highest standards of safety and
                performance.
              </p>
              <p className="text-navy-600 leading-relaxed mb-8 text-base">
                Our state of the art manufacturing facility produces a complete
                range of earthing products, from copper bonded electrodes to
                lightning protection systems, all designed to provide reliable
                grounding in any soil condition.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group"
              >
                Learn more about us
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-navy-50 to-teal-50 rounded-2xl p-8 lg:p-12">
                <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
                  {[
                    { label: "Manufacturing Excellence", width: "w-[95%]" },
                    { label: "Quality Assurance", width: "w-[90%]" },
                    { label: "Customer Satisfaction", width: "w-[98%]" },
                    { label: "On-Time Delivery", width: "w-[92%]" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-navy-700">{item.label}</span>
                      </div>
                      <div className="h-2 bg-navy-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full ${item.width}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-500/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy-500/10 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-padding px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-50/50 to-white" id="why-choose-us">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Why Choose Base Plus Earthings?"
            subtitle="We combine quality manufacturing, technical expertise, and customer first approach to deliver the best earthing solutions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white p-8 rounded-2xl border border-navy-100 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="section-padding px-4 sm:px-6 lg:px-8" id="featured-products">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Our Products"
            subtitle="Explore our comprehensive range of earthing and lightning protection products."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-800 text-white font-semibold rounded-xl hover:bg-navy-700 transition-colors shadow-md"
              id="view-all-products"
            >
              View All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="section-padding px-4 sm:px-6 lg:px-8 bg-navy-900" id="certifications">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Certifications & Standards"
            subtitle="Our products are manufactured to meet national and international quality standards."
            light
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="px-4 py-5 sm:px-6 sm:py-6 bg-navy-800/60 border border-navy-700 rounded-xl text-center hover:border-teal-500/50 hover:bg-navy-800 transition-all duration-200"
              >
                <div className="text-teal-400 font-bold text-base sm:text-lg mb-1">
                  {cert.name}
                </div>
                <div className="text-navy-400 text-xs">{cert.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="section-padding px-4 sm:px-6 lg:px-8" id="cta-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Ready to Discuss Your Earthing Needs?
          </h2>
          <p className="text-lg text-navy-500 mb-8 max-w-2xl mx-auto">
            Get in touch with our technical team for expert guidance on earthing
            system design, product selection, and competitive quotations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-200 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30"
              id="cta-contact"
            >
              Contact Us Today
            </Link>
            <Link
              href="/catalogue"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy-200 text-navy-700 font-semibold rounded-xl hover:bg-navy-50 transition-all duration-200"
              id="cta-catalogue"
            >
              Download Catalogue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
