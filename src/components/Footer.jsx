import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/catalogue", label: "Download Catalogue" },
  { href: "/contact", label: "Contact Us" },
];

const productLinks = [
  { href: "/products#category-bp-earthing-electrodes", label: "BP Earthing Electrodes" },
  { href: "/products#category-earthing-accessories", label: "BP Earthing Accessories" },
  { href: "/products#category-copper-bonded-rods", label: "BP Copper Bonded Rods" },
  { href: "/products#category-earthing-pit-covers", label: "BP Earthing Pit Covers" },
  { href: "/products#category-lightning-protection", label: "BP Lightning Arresters" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white" id="footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/10 p-1">
                <Image
                  src="/logo.png"
                  alt="Base Plus Earthings"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white">Base Plus</span>
                <span className="block text-xs text-teal-400 -mt-0.5 tracking-wider uppercase">
                  Earthings
                </span>
              </div>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed mb-6">
              Leading manufacturer of premium earthing electrodes, copper bonded
              rods, and comprehensive earthing solutions in India. Committed to
              safety and quality.
            </p>
            <div className="flex gap-3">
              {[
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/_baseplus?igsh=ajVla25mOHJsZGF1",
                  icon: (
                    <svg
                      className="w-5 h-5 text-navy-400 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 0 1 3.95 3.95v8.5a3.95 3.95 0 0 1-3.95 3.95h-8.5a3.95 3.95 0 0 1-3.95-3.95v-8.5A3.95 3.95 0 0 1 7.75 3.8zm8.95 1.35a.95.95 0 1 0 0 1.9.95.95 0 0 0 0-1.9zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.8A3.2 3.2 0 1 1 8.8 12 3.2 3.2 0 0 1 12 8.8z" />
                    </svg>
                  )
                },
                {
                  name: "Mail",
                  href: "mailto:baseplusearthings.in@gmail.com",
                  icon: (
  <svg
    className="w-5 h-5 text-navy-400 group-hover:text-white transition-colors"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)
                },
                {
                  name: "Twitter",
                  href: "https://x.com/__baseplus?s=11",
                  icon: (
                    <svg className="w-5 h-5 text-navy-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.15H5.039z" />
                    </svg>
                  )
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-lg bg-navy-800 hover:bg-teal-600 flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-teal-400 text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg className="w-3 h-3 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Our Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-teal-400 text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg className="w-3 h-3 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-navy-300 text-sm leading-relaxed">
                  Lucknow, Uttar Pradesh
                  <br />
                  India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-teal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919278276662" className="text-navy-300 hover:text-teal-400 text-sm transition-colors">
                  +91 92782 76662
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-teal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:baseplusearthings.in@gmail.com" className="text-navy-300 hover:text-teal-400 text-sm transition-colors">
                  baseplusearthings.in@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-navy-400 text-sm">
            © {new Date().getFullYear()} Base Plus Earthings. All rights reserved.
          </p>
          <p className="text-navy-500 text-xs">
            Manufacturer of Quality Earthing Solutions in India
          </p>
        </div>
      </div>
    </footer>
  );
}
