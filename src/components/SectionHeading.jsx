export default function SectionHeading({ title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-navy-800"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-navy-200" : "text-navy-500"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
