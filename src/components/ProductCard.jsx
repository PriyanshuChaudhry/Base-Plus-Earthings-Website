import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div
      className="group bg-white rounded-2xl border border-navy-100 overflow-hidden hover:shadow-xl hover:shadow-navy-900/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
      id={`product-card-${product.slug}`}
    >
      {/* Image or Placeholder */}
      <div className="relative h-56 bg-gradient-to-br from-navy-50 to-navy-100 flex items-center justify-center overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={`${product.name} - ${product.category} by Base Plus Earthings`}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="text-center p-4">
          <svg
            className="w-16 h-16 text-navy-300 mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-navy-400 text-xs font-medium">Product Image</p>
          </div>
        )}
        {/* Category Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-navy-700 text-xs font-semibold rounded-full">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-navy-800 group-hover:text-teal-600 transition-colors mb-2">
          {product.name}
        </h3>
        <p className="text-navy-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Key Specs Preview */}
        <div className="space-y-2 mb-5 flex-1">
          {Object.entries(product.specifications)
            .slice(0, 3)
            .map(([key, value]) => (
              <div key={key} className="flex items-center gap-2 text-sm">
                <span className="text-navy-400 font-medium min-w-[80px]">
                  {key}:
                </span>
                <span className="text-navy-700">{value}</span>
              </div>
            ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 text-center px-4 py-2.5 bg-navy-800 text-white text-sm font-medium rounded-lg hover:bg-navy-700 transition-colors"
          >
            View Details
          </Link>
          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}#contact-form`}
            className="flex-1 text-center px-4 py-2.5 border-2 border-teal-500 text-teal-600 text-sm font-medium rounded-lg hover:bg-teal-50 transition-colors"
          >
            Send Inquiry
          </Link>
        </div>
      </div>
    </div>
  );
}
