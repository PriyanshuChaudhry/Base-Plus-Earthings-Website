import Link from "next/link";

export const metadata = {
  title: "Download Catalogue",
  description:
    "Download the complete Base Plus Earthings product catalogue PDF. Browse our full range of earthing electrodes, copper bonded rods, lightning protection, and earthing accessories.",
};

export default function CataloguePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Product Catalogue
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto">
            Download our complete product catalogue to explore our full range of earthing and lightning protection solutions.
          </p>
        </div>
      </section>

      {/* Catalogue Download Section */}
      <section className="section-padding px-4 sm:px-6 lg:px-8" id="catalogue-download">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Catalogue 1 */}
            <div className="bg-white rounded-2xl shadow-xl shadow-navy-900/10 border border-navy-100 overflow-hidden flex flex-col">
              {/* Catalogue Preview */}
              <div className="bg-gradient-to-br from-navy-800 to-navy-900 p-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-36 h-48 bg-white/10 border-2 border-white/20 rounded-lg mx-auto mb-5 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center">
                      <svg className="w-14 h-14 text-red-400 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 3.5L18.5 8H14V3.5zM6 20V4h7v5h5v11H6z"/>
                        <path d="M8.5 13.5a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 0 3H9.5v1a.5.5 0 0 1-1 0v-3.5zm1 2h.5a.5.5 0 0 0 0-1h-.5v1zm3.5-2a.5.5 0 0 1 .5-.5h.5a2 2 0 0 1 0 4H13.5a.5.5 0 0 1-.5-.5v-3zm1 3h.5a1 1 0 0 0 0-2H14v2z"/>
                      </svg>
                      <p className="text-white/60 text-xs">PDF</p>
                    </div>
                    <div className="absolute top-0 right-0 w-8 h-8 bg-white/5 rounded-bl-lg" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    Base Plus Earthings
                  </h3>
                  <p className="text-navy-300 text-sm">
                    Complete Product Catalogue
                  </p>
                </div>
              </div>

              {/* Download Info */}
              <div className="p-8 flex flex-col justify-center flex-1">
                <h2 className="text-xl font-bold text-navy-800 mb-3">
                  Product Catalogue
                </h2>
                <p className="text-navy-500 text-sm leading-relaxed mb-5">
                  Our complete product catalogue with detailed specifications, applications, and technical data for all earthing products.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Copper Bonded Earthing Electrodes",
                    "GI Earthing Electrodes",
                    "Lightning Protection Systems",
                    "Earthing Pit Covers",
                    "Earthing Compounds & Accessories",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-navy-600">
                      <svg className="w-4 h-4 text-teal-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="/catalogue/baseplusearthings-catalogue.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-200 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                  id="catalogue-download-btn-1"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Catalogue 1
                </a>
                <p className="text-navy-400 text-xs mt-2 text-center">
                  PDF format • Free download
                </p>
              </div>
            </div>

            {/* Catalogue 2 */}
            <div className="bg-white rounded-2xl shadow-xl shadow-navy-900/10 border border-navy-100 overflow-hidden flex flex-col">
              {/* Catalogue Preview */}
              <div className="bg-gradient-to-br from-teal-700 to-teal-900 p-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-36 h-48 bg-white/10 border-2 border-white/20 rounded-lg mx-auto mb-5 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center">
                      <svg className="w-14 h-14 text-red-400 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 3.5L18.5 8H14V3.5zM6 20V4h7v5h5v11H6z"/>
                        <path d="M8.5 13.5a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 0 3H9.5v1a.5.5 0 0 1-1 0v-3.5zm1 2h.5a.5.5 0 0 0 0-1h-.5v1zm3.5-2a.5.5 0 0 1 .5-.5h.5a2 2 0 0 1 0 4H13.5a.5.5 0 0 1-.5-.5v-3zm1 3h.5a1 1 0 0 0 0-2H14v2z"/>
                      </svg>
                      <p className="text-white/60 text-xs">PDF</p>
                    </div>
                    <div className="absolute top-0 right-0 w-8 h-8 bg-white/5 rounded-bl-lg" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    Base Plus Earthings
                  </h3>
                  <p className="text-teal-200 text-sm">
                    Catalogue 2
                  </p>
                </div>
              </div>

              {/* Download Info */}
              <div className="p-8 flex flex-col justify-center flex-1">
                <h2 className="text-xl font-bold text-navy-800 mb-3">
                  Product Catalogue 2
                </h2>
                <p className="text-navy-500 text-sm leading-relaxed mb-5">
                  Our extended product catalogue featuring additional earthing solutions, technical drawings, and application guides.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Additional Product Range",
                    "Technical Drawings",
                    "Application Guides",
                    "Installation Instructions",
                    "Standards & Certifications",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-navy-600">
                      <svg className="w-4 h-4 text-teal-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="/catalogue/baseplusearthings-catalogue2.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-200 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                  id="catalogue-download-btn-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Catalogue 2
                </a>
                <p className="text-navy-400 text-xs mt-2 text-center">
                  PDF format • Free download
                </p>
              </div>
            </div>

          </div>

          {/* Additional CTA */}
          <div className="mt-12 text-center">
            <p className="text-navy-500 mb-4">
              Have questions about specific products?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              Contact our team
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
