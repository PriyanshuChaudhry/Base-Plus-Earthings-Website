import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | Earthing Electrode Manufacturer in Lucknow, India",
  description:
    "Learn about Base Plus Earthings, a leading manufacturer of earthing electrodes, copper bonded rods, and earthing solutions in India. Our history, vision, and manufacturing excellence.",
  keywords: [
    "Base Plus Earthings",
    "earthing manufacturer India",
    "earthing electrode manufacturer Lucknow",
    "copper bonded rod manufacturer",
    "earthing solutions company India",
  ],
  alternates: {
    canonical: "https://baseplusearthings.in/about",
  },
};

const timeline = [
  {
    year: "Founded",
    title: "Company Established",
    description:
      "Base Plus Earthings was founded with a vision to provide reliable and high quality earthing solutions across India.",
  },
  {
    year: "Growth",
    title: "Expanded Product Range",
    description:
      "Expanded our portfolio to include copper bonded rods, GI electrodes, lightning protection, and earthing accessories.",
  },
  {
    year: "Certification",
    title: "Quality Certifications Achieved",
    description:
      "Achieved ISO 9001:2015 and other international quality certifications, establishing our commitment to excellence.",
  },
  {
    year: "Present",
    title: "Pan India Presence",
    description:
      "Serving hundreds of clients across India with a comprehensive range of earthing products and technical support.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Raw Material Sourcing",
    description: "Premium grade copper, steel, and galvanized iron sourced from certified suppliers.",
  },
  {
    step: "02",
    title: "Manufacturing",
    description: "State of the art machinery and processes for precision manufacturing of earthing products.",
  },
  {
    step: "03",
    title: "Quality Testing",
    description: "Rigorous multi stage quality testing to ensure compliance with IS & international standards.",
  },
  {
    step: "04",
    title: "Packaging & Delivery",
    description: "Secure packaging and reliable pan India logistics for timely delivery.",
  },
];

const galleryImages = [
  { label: "Factory View", image: "/about/factory-view.jpeg" },
  { label: "Manufacturing", image: "/about/manufacturing.jpeg" },
  { label: "Quality Lab", image: "/about/quality-lab.jpeg" },
  { label: "Warehouse", image: "/about/warehouse.jpeg" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-60 h-60 bg-teal-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto">
            Committed to delivering safe, reliable, and high performance earthing solutions for a safer India.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding px-4 sm:px-6 lg:px-8" id="company-story">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle=""
                centered={false}
              />
              <p className="text-navy-600 leading-relaxed mb-6">
                Base Plus Earthings was established with a singular mission, to manufacture
                world-class earthing solutions that protect lives, equipment, and infrastructure.
                From our humble beginnings, we have grown into one of India&apos;s trusted manufacturers
                of earthing electrodes and grounding systems.
              </p>
              <p className="text-navy-600 leading-relaxed mb-6">
                Our manufacturing facility is equipped with modern machinery and a dedicated team
                of engineers who ensure every product leaving our factory meets the highest
                standards of quality and performance. We serve clients across residential,
                commercial, industrial, and infrastructure sectors.
              </p>
              <p className="text-navy-600 leading-relaxed">
                Today, we offer a comprehensive range of earthing products, from copper bonded
                electrodes and GI earthing to lightning protection and earthing compounds, all
                backed by expert technical support and reliable after sales service.
              </p>
            </div>
            {/* Factory Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((item) => (
                <div
                  key={item.label}
                  className="relative aspect-square bg-gradient-to-br from-navy-50 to-navy-100 rounded-xl flex items-center justify-center overflow-hidden group shadow-md"
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Label Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/80 to-transparent pt-8 pb-3 px-3 text-center">
                    <p className="text-white text-sm font-semibold">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-50/50 to-white" id="timeline">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Our Journey" subtitle="Key milestones in our growth story." />
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                    {item.year.slice(0, 4)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-navy-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold text-navy-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-navy-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="section-padding px-4 sm:px-6 lg:px-8" id="manufacturing">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Manufacturing Process"
            subtitle="Every product undergoes a rigorous manufacturing process to ensure the highest quality."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-black text-navy-100 mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding px-4 sm:px-6 lg:px-8 bg-navy-900" id="vision-mission">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy-800/60 border border-navy-700 rounded-2xl p-8 hover:border-teal-500/30 transition-colors">
              <div className="w-14 h-14 bg-teal-500/10 text-teal-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-navy-300 leading-relaxed">
                To be India&apos;s most trusted and innovative manufacturer of earthing
                solutions, setting new benchmarks in product quality, safety
                standards, and customer satisfaction across the electrical
                infrastructure industry.
              </p>
            </div>
            <div className="bg-navy-800/60 border border-navy-700 rounded-2xl p-8 hover:border-teal-500/30 transition-colors">
              <div className="w-14 h-14 bg-teal-500/10 text-teal-400 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-navy-300 leading-relaxed">
                To manufacture and supply premium earthing products that ensure
                electrical safety and protection. We are committed to continuous
                innovation, sustainable practices, and delivering value to our
                customers through quality products and expert technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding px-4 sm:px-6 lg:px-8 text-center" id="about-cta">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-800 mb-4">
            Want to Learn More?
          </h2>
          <p className="text-navy-500 text-lg mb-8">
            Download our complete product catalogue or get in touch with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalogue"
              className="px-8 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all shadow-md"
            >
              Download Catalogue
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border-2 border-navy-200 text-navy-700 font-semibold rounded-xl hover:bg-navy-50 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
