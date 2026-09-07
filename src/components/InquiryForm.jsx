"use client";

import { useState } from "react";

export default function InquiryForm({ productName = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: productName,
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xkodgraw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          product: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
    
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" id="inquiry-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="inquiry-name"
            className="block text-sm font-medium text-navy-700 mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="inquiry-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-800 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label
            htmlFor="inquiry-email"
            className="block text-sm font-medium text-navy-700 mb-1.5"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="inquiry-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-800 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="inquiry-phone"
            className="block text-sm font-medium text-navy-700 mb-1.5"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="inquiry-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-800 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white"
            placeholder="+91 99999 99999"
          />
        </div>
        <div>
          <label
            htmlFor="inquiry-company"
            className="block text-sm font-medium text-navy-700 mb-1.5"
          >
            Company Name
          </label>
          <input
            type="text"
            id="inquiry-company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-800 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white"
            placeholder="Your company"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="inquiry-product"
          className="block text-sm font-medium text-navy-700 mb-1.5"
        >
          Product of Interest
        </label>
        <select
          id="inquiry-product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-800 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white"
        >
          <option value="">Select a product</option>
          <option value="Copper Bonded Earthing Electrode">Copper Bonded Earthing Electrode</option>
          <option value="GI Earthing Electrode">GI Earthing Electrode</option>
          <option value="Copper Bonded Ground Rod">Copper Bonded Ground Rod</option>
          <option value="Earthing Pit Cover">Earthing Pit Cover</option>
          <option value="Lightning Arrester">Lightning Arrester</option>
          <option value="Earth Enhancement Compound">Earth Enhancement Compound</option>
          <option value="Copper Earthing Strip">Copper Earthing Strip / Conductor</option>
          <option value="Maintenance Free Earthing Electrode">Maintenance Free Earthing Electrode</option>
          <option value="Other">Other / Multiple Products</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="inquiry-message"
          className="block text-sm font-medium text-navy-700 mb-1.5"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-800 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-6 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-200 shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        id="inquiry-submit"
      >
        {status === "sending" ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          "Send Inquiry"
        )}
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg text-teal-700 text-sm flex items-center gap-2">
          <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Thank you! Your inquiry has been sent successfully. We&apos;ll get back to you soon.
        </div>
      )}
      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center gap-2">
          <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          Something went wrong. Please try again or contact us directly.
        </div>
      )}
    </form>
  );
}
