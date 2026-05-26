"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";

const enquiryTypes = [
  { value: "demo", label: "Request Pathwisse Demo" },
  { value: "investor", label: "Investor Enquiry" },
  { value: "partner", label: "Partnership" },
  { value: "sector", label: "Sector Collaboration" },
  { value: "hire", label: "Join the Team" },
  { value: "general", label: "General Enquiry" },
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const defaultType = searchParams.get("type") || "general";

  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    type: defaultType,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div className="p-10 rounded-2xl bg-teal-50 border border-teal-100 text-center">
        <CheckCircle size={40} color="#0f766e" weight="fill" className="mx-auto mb-4" />
        <h3 className="font-bold text-slate-900 text-xl tracking-tight mb-2">
          Message received.
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Thank you, {form.name.split(" ")[0]}. We will get back to you within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" id="form">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Full name <span className="text-teal-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:bg-white transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Email address <span className="text-teal-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@institution.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Organisation */}
      <div>
        <label htmlFor="organisation" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Organisation / Institution
        </label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          value={form.organisation}
          onChange={handleChange}
          placeholder="Your college, company, or organisation"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:bg-white transition-all"
        />
      </div>

      {/* Type */}
      <div>
        <label htmlFor="type" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Enquiry type <span className="text-teal-600">*</span>
        </label>
        <select
          id="type"
          name="type"
          value={form.type}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-teal-400 focus:bg-white transition-all appearance-none"
        >
          {enquiryTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Message <span className="text-teal-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your interest, your organisation, and what you are looking to achieve."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:bg-white transition-all resize-none"
        />
        <p className="text-xs text-slate-400 mt-1.5">
          We read every message. The more context you provide, the faster we can help.
        </p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal-700 text-white font-semibold rounded-xl hover:bg-teal-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150 active:-translate-y-[1px] text-sm shadow-[0_4px_16px_-4px_rgba(15,118,110,0.4)]"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight size={15} weight="bold" />
          </>
        )}
      </button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="h-96 bg-slate-50 rounded-2xl animate-pulse" />}>
      <ContactFormInner />
    </Suspense>
  );
}
