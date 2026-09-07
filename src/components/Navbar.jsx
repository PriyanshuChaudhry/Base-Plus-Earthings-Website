"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-navy-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" id="nav-logo">
            <div className="relative bg-white w-12 h-12 rounded-lg overflow-hidden">
              <Image
                src="/logo.PNG"
                alt="Base Plus Earthings Logo"
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold group-hover:text-teal-600 transition-colors ${scrolled ? 'text-navy-800' : 'text-white'}`}>
                Base Plus
              </span>
              <span className={`text-xs font-medium -mt-1 tracking-wider uppercase ${scrolled ? 'text-navy-500' : 'text-navy-200'}`}>
                Earthings
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" id="nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? scrolled ? "text-teal-600 bg-teal-50" : "text-white bg-white/20"
                    : scrolled
                      ? "text-navy-700 hover:text-teal-600 hover:bg-navy-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#contact-form"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-200 shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5"
              id="nav-get-quote"
            >
              Send Enquiry
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-navy-700 hover:bg-navy-50' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle menu"
            id="nav-mobile-toggle"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        id="nav-mobile-menu"
      >
        <div className="glass border-t border-navy-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "text-teal-600 bg-teal-50"
                  : "text-navy-700 hover:text-teal-600 hover:bg-navy-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#contact-form"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-3 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-semibold rounded-lg"
          >
            Send Enquiry
          </Link>
        </div>
      </div>
    </header>
  );
}
