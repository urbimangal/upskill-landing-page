"use client";

import { useState } from "react";

// LeadForm - captures user interest / contact info
// Sends data to our API route at /api/submit-lead
export default function LeadForm() {
  // Form field state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  // Track submission status for UX feedback
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  // Update state when any input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Send form data to our API route
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        // Reset form after successful submission
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Form submission failed:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            Get in Touch
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Tell us about your team and we'll help you find the right program.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@company.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Inc."
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your team size or learning goals..."
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition disabled:opacity-60"
            >
              {status === "loading" ? "Submitting..." : "Submit Enquiry"}
            </button>

          </form>

          {/* Success Message */}
          {status === "success" && (
            <p className="mt-4 text-center text-sm text-green-600 font-medium">
              ✅ Thank you! We'll be in touch shortly.
            </p>
          )}

          {/* Error Message */}
          {status === "error" && (
            <p className="mt-4 text-center text-sm text-red-500 font-medium">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
