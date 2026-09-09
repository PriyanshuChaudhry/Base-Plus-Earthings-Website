import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://baseplusearthings.in"),
  title: {
    default: "Base Plus Earthings | Earthing Electrode and Lightning Arrester Manufacturer in India",
    template: "%s | Base Plus Earthings",
  },
  description:
    "Leading manufacturer of premium earthing electrodes, copper bonded rods, GI earthing electrodes, earthing pit covers & lightning protection systems in India. ISO certified quality.",
  keywords: [
    "earthing electrode manufacturer",
    "copper bonded earthing rod",
    "GI earthing electrode supplier",
    "earthing solutions India",
    "lightning arrester manufacturer",
    "earthing pit cover",
    "copper bonded rod",
    "maintenance free earthing electrode",
    "earthing compound supplier",
    "grounding electrode",
  ],
  authors: [{ name: "Base Plus Earthings" }],
  creator: "Base Plus Earthings",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://baseplusearthings.in",
    siteName: "Base Plus Earthings",
    title: "Base Plus Earthings | Earthing Electrode Manufacturer in India",
    description:
      "Leading manufacturer of premium earthing electrodes, copper bonded rods, and lightning protection systems in India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Base Plus Earthings | Earthing Electrode Manufacturer in India",
    description:
      "Leading manufacturer of premium earthing electrodes, copper bonded rods, and lightning protection systems in India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
