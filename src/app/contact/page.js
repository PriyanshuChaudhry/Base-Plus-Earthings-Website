import InquiryForm from "@/components/InquiryForm";

export const metadata = {
  title: "Contact Us | Get Quotation for Earthing Products",
  description:
    "Contact Base Plus Earthings for earthing electrode inquiries, product quotations, and technical support. Located in Lucknow, India. Pan India delivery. Reach us via phone, email, or WhatsApp.",
  keywords: [
    "contact Base Plus Earthings",
    "earthing electrode quotation",
    "earthing products inquiry",
    "earthing manufacturer contact",
  ],
  alternates: {
    canonical: "https://baseplusearthings.in/contact",
  },
};

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Phone",
    value: "+91 92782 76662",
    href: "tel:+919278276662",
    subtitle: "Mon-Sat, 9:00 AM - 6:00 PM",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    value: "baseplusearthings.in@gmail.com",
    href: "mailto:baseplusearthings.in@gmail.com",
    subtitle: "We reply within 24 hours",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    title: "WhatsApp",
    value: "+91 92782 76662",
    href: "https://wa.me/919278276662",
    subtitle: "Quick response guaranteed",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Address",
    value: "Lucknow, India",
    href: null,
    subtitle: "Uttar Pradesh, India",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto">
            Get in touch for product inquiries, technical support, or quotations. We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-10 z-10 px-4 sm:px-6 lg:px-8" id="contact-info">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-white rounded-xl shadow-lg shadow-navy-900/5 border border-navy-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-sm font-semibold text-navy-800 mb-1">
                  {info.title}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block text-teal-600 font-medium text-sm break-all hover:text-teal-700 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-navy-700 font-medium text-sm">{info.value}</p>
                )}
                <p className="text-navy-400 text-xs mt-1">{info.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="section-padding px-4 sm:px-6 lg:px-8" id="contact-form">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-navy-800 mb-2">
                Send Us a Message
              </h2>
              <p className="text-navy-500 mb-8">
                Fill in the details below and we&apos;ll get back to you promptly.
              </p>
              <div className="bg-white rounded-2xl shadow-lg shadow-navy-900/5 border border-navy-100 p-8">
                <InquiryForm />
              </div>
            </div>

            {/* Business Hours & Additional Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-800 mb-2">
                Business Hours
              </h2>
              <p className="text-navy-500 mb-8">
                We&apos;re available during the following hours.
              </p>

              <div className="bg-white rounded-2xl shadow-lg shadow-navy-900/5 border border-navy-100 p-8 mb-8">
                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                    { day: "Saturday", time: "9:00 AM - 2:00 PM" },
                    { day: "Sunday", time: "Closed" },
                  ].map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between pb-3 border-b border-navy-100 last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-medium text-navy-700">
                        {item.day}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          item.time === "Closed"
                            ? "text-red-500"
                            : "text-teal-600"
                        }`}
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg shadow-navy-900/5 border border-navy-100 relative bg-navy-50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d298.3435942455662!2d80.94669003511758!3d26.877942032892673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdbc9ac34379%3A0x34aa9c4bc7357704!2sBase%20plus%20Earthing%E2%80%99s!5e0!3m2!1sen!2sin!4v1784215371597!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
