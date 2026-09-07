import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export const metadata = {
  title: "Products",
  description:
    "Explore our complete range of earthing products, copper bonded electrodes, GI earthing, earthing pit covers, lightning arresters, and earthing accessories. Made in India with quality certifications.",
  keywords: [
    "earthing electrodes",
    "copper bonded rod",
    "GI earthing electrode",
    "earthing pit cover",
    "lightning arrester",
    "earthing compound",
    "copper earthing strip",
  ],
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Products
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto">
            Comprehensive range of earthing and lightning protection products engineered for safety and durability.
          </p>
        </div>
      </section>

      {/* Products by Category */}
      {categories.map((category) => {
        const categoryProducts = products.filter(
          (p) => p.category === category
        );
        if (categoryProducts.length === 0) return null;

        return (
          <section
            key={category}
            className="section-padding px-4 sm:px-6 lg:px-8 even:bg-navy-50/30"
            id={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div className="max-w-7xl mx-auto">
              <SectionHeading
                title={category}
                subtitle={`Browse our ${category.toLowerCase()} range`}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
