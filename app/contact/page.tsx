import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { Envelope, Buildings, Users, ChartLine } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ShaQuantum Labs. Request a Pathwisse demo, discuss investment, explore partnerships, or reach the founding team.",
};

const contactTypes = [
  {
    icon: Envelope,
    title: "Pathwisse Demo",
    desc: "Book a live demonstration of Pathwisse for your institution.",
    value: "demo",
  },
  {
    icon: ChartLine,
    title: "Investor Enquiry",
    desc: "Request the investor brief or connect with the founding team.",
    value: "investor",
  },
  {
    icon: Buildings,
    title: "Partnership",
    desc: "Explore co-building or distributing sector products at scale.",
    value: "partner",
  },
  {
    icon: Users,
    title: "Join the Team",
    desc: "Express interest in joining ShaQuantum Labs.",
    value: "hire",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <span className="inline-block text-xs font-semibold text-teal-600 tracking-widest uppercase mb-6">
              Get in touch
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.05] mb-5 max-w-2xl">
              Start a conversation with ShaQuantum Labs.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-slate-500 max-w-lg leading-relaxed">
              Whether you are an investor, institution, partner, or potential team member — the right conversation starts here.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact type cards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-6">
              What brings you here?
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactTypes.map((ct, i) => (
              <Reveal key={ct.title} delay={i * 0.06}>
                <div className="p-6 rounded-2xl border border-white bg-white hover:border-teal-100 transition-all group h-full"
                  style={{ boxShadow: "0 1px 4px 0 rgba(0,0,0,0.04)" }}>
                  <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4">
                    <ct.icon size={18} color="#0f766e" weight="duotone" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm">{ct.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{ct.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-8">
                  Send us a message
                </h2>
              </Reveal>
              <ContactForm />
            </div>

            {/* Details */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 text-sm tracking-tight">Company</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      ShaQuantum Labs Private Limited
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      CIN: [To be added on verification]
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 text-sm tracking-tight">Email</h3>
                    <a
                      href="mailto:contact@shaquantumlabs.com"
                      className="text-sm text-teal-700 hover:text-teal-800 transition-colors"
                    >
                      contact@shaquantumlabs.com
                    </a>
                  </div>

                  <div className="p-6 rounded-2xl bg-teal-50 border border-teal-100">
                    <h3 className="font-semibold text-slate-900 mb-4 text-sm">Quick links</h3>
                    <div className="flex flex-col gap-3">
                      {[
                        { label: "Request Pathwisse Demo", href: "#form", note: "For colleges & universities" },
                        { label: "Request Investor Brief", href: "#form", note: "For investors" },
                        { label: "Partner With Us", href: "#form", note: "For sector partners" },
                        { label: "Join the Mission", href: "#form", note: "For potential team members" },
                      ].map((l) => (
                        <div key={l.label}>
                          <a href={l.href} className="text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors block">
                            {l.label}
                          </a>
                          <p className="text-xs text-teal-600/60">{l.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-semibold text-slate-900 mb-3 text-sm">Response commitment</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      We respond to all enquiries within 2 business days. For demo requests, we will suggest a time within 24 hours.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
