import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Storefront,
  Plant,
  Heart,
  ArrowRight,
  Clock,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Sectors — Education, MSMEs, Agriculture, Healthcare",
  description:
    "ShaQuantum Labs builds digital ecosystems for education, MSMEs, agriculture, and healthcare. Pathwisse.com is live in education. Three more sectors in the roadmap.",
};

const sectors = [
  {
    id: "education",
    icon: GraduationCap,
    label: "Education",
    status: "Live",
    statusClass: "bg-teal-100 text-teal-700",
    headline: "Education to Career",
    subhead: "Pathwisse.com",
    body: "Education institutions face a systemic challenge: students graduate without structured career readiness, and institutions lack the tools to track or improve employability outcomes. Pathwisse solves this with structured roadmaps, skill visibility, and outcome-based institutional tracking.",
    product: "Pathwisse.com — career pathways, employability readiness, and institutional tracking.",
    solutions: [
      "Structured career roadmaps for every discipline",
      "Outcome-based employability tracking",
      "Institutional reporting and department visibility",
      "Placement preparation frameworks",
      "First-year to final-year student guidance",
    ],
    cta: { label: "Explore Pathwisse", href: "/pathwisse" },
    accent: "teal",
  },
  {
    id: "msme",
    icon: Storefront,
    label: "MSMEs",
    status: "Roadmap",
    statusClass: "bg-slate-100 text-slate-500",
    headline: "Business Workflows at Scale",
    subhead: "Future ecosystem",
    body: "Micro, small, and medium enterprises represent the backbone of the Indian economy, yet they operate with fragmented, manual workflows and limited digital visibility. ShaQuantum Labs plans to build a productivity and growth-intelligence ecosystem tailored to MSME realities.",
    product: "Future digital ecosystem for business workflows, productivity, and market access.",
    solutions: [
      "Digital business workflow automation",
      "Market visibility and growth intelligence",
      "Productivity tooling for small teams",
      "Customer and supplier management",
      "Data-driven business decisions",
    ],
    cta: { label: "Discuss Collaboration", href: "/contact?type=sector&sector=msme" },
    accent: "slate",
  },
  {
    id: "agriculture",
    icon: Plant,
    label: "Agriculture",
    status: "Roadmap",
    statusClass: "bg-slate-100 text-slate-500",
    headline: "Farmer-First Digital Tools",
    subhead: "Future ecosystem",
    body: "Farmers and agri-operations face fragmented supply chains, limited market access, and poor digital infrastructure. ShaQuantum Labs plans to build a farmer-first ecosystem that connects field workflows to market linkage, data-driven decisions, and agri-operations management.",
    product: "Future ecosystem for farmer support, agri-operations, and market linkage.",
    solutions: [
      "Field workflow management tools",
      "Market linkage and price discovery",
      "Agri-operations data platforms",
      "Rural supply chain coordination",
      "Data-driven crop and business decisions",
    ],
    cta: { label: "Discuss Collaboration", href: "/contact?type=sector&sector=agriculture" },
    accent: "slate",
  },
  {
    id: "healthcare",
    icon: Heart,
    label: "Healthcare",
    status: "Roadmap",
    statusClass: "bg-slate-100 text-slate-500",
    headline: "Patient-Centred Access",
    subhead: "Future ecosystem",
    body: "Healthcare access remains fragmented and poorly coordinated across much of India. Digital health tools exist in isolation, without the workflow integration or patient journey visibility needed for meaningful outcomes. ShaQuantum Labs plans to build a patient-centred access and coordination ecosystem.",
    product: "Future ecosystem for digital health access, coordination, and patient-centred service delivery.",
    solutions: [
      "Digital health access workflows",
      "Care coordination and referral management",
      "Patient journey tracking and guidance",
      "Healthcare records and documentation",
      "Service delivery and operational support",
    ],
    cta: { label: "Discuss Collaboration", href: "/contact?type=sector&sector=healthcare" },
    accent: "slate",
  },
];

export default function SectorsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <span className="inline-block text-xs font-semibold text-teal-600 tracking-widest uppercase mb-6">
              Sector Roadmap
            </span>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.05] mb-6">
                  Four sectors.
                  <br />
                  <span className="text-teal-700">One compounding</span>
                  <br />
                  strategy.
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <p className="text-lg text-slate-500 leading-relaxed">
                  We start with education and expand systematically — each sector building on the institutional relationships, data intelligence, and product infrastructure of the previous one.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Sector status bar */}
          <Reveal delay={0.15}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {sectors.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-teal-100 hover:bg-teal-50/30 transition-all"
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${s.status === "Live" ? "bg-teal-700" : "bg-slate-200"}`}>
                    <s.icon size={18} color={s.status === "Live" ? "white" : "#94a3b8"} weight="duotone" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{s.label}</p>
                    <p className={`text-xs font-medium ${s.status === "Live" ? "text-teal-600" : "text-slate-400"}`}>{s.status}</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Individual sector sections */}
      {sectors.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-28 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"} border-b border-slate-100`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left */}
              <div className={`lg:col-span-5 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <Reveal>
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${s.status === "Live" ? "bg-teal-700" : "bg-slate-700"}`}>
                      <s.icon size={24} color="white" weight="duotone" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{s.label}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${s.statusClass}`}>{s.status}</span>
                      </div>
                      <span className="text-xs text-slate-400">{s.subhead}</span>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 mb-5">
                    {s.headline}
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-slate-500 leading-relaxed mb-6">{s.body}</p>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="text-sm font-medium text-slate-700 mb-6 p-4 bg-teal-50 border border-teal-100 rounded-xl">
                    {s.product}
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <Link
                    href={s.cta.href}
                    className={`inline-flex items-center gap-2 px-5 py-3 font-semibold rounded-xl transition-all text-sm ${
                      s.status === "Live"
                        ? "bg-teal-700 text-white hover:bg-teal-800 shadow-[0_4px_16px_-4px_rgba(15,118,110,0.4)]"
                        : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {s.cta.label} <ArrowRight size={14} weight="bold" />
                  </Link>
                </Reveal>
              </div>

              {/* Right — solutions */}
              <div className={`lg:col-span-7 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <Reveal delay={0.1}>
                  <div className="rounded-[2rem] border overflow-hidden"
                    style={{
                      borderColor: s.status === "Live" ? "#ccfbf1" : "#e2e8f0",
                      background: s.status === "Live" ? "linear-gradient(135deg, #f0fdfa, #ffffff)" : "#f8fafc",
                    }}>
                    <div className="p-8 border-b" style={{ borderColor: s.status === "Live" ? "#ccfbf1" : "#e2e8f0" }}>
                      <p className="text-xs font-semibold text-slate-400 tracking-widest uppercase">
                        {s.status === "Live" ? "What it delivers" : "Planned solutions"}
                      </p>
                    </div>
                    <div className="p-8 flex flex-col gap-4">
                      {s.solutions.map((sol) => (
                        <div key={sol} className="flex items-start gap-3">
                          {s.status === "Live" ? (
                            <CheckCircle size={16} color="#0f766e" weight="fill" className="mt-0.5 shrink-0" />
                          ) : (
                            <Clock size={16} color="#94a3b8" weight="regular" className="mt-0.5 shrink-0" />
                          )}
                          <span className={`text-sm leading-relaxed ${s.status === "Live" ? "text-slate-700" : "text-slate-500"}`}>
                            {sol}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-teal-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">
              Interested in a sector collaboration?
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-teal-100/60 mb-8 max-w-lg mx-auto leading-relaxed">
              Whether you represent an institution, business, government body, or investor — we want to hear from you.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-teal-800 font-semibold rounded-xl hover:bg-teal-50 transition-all text-sm">
                Contact ShaQuantum Labs <ArrowRight size={15} weight="bold" />
              </Link>
              <Link href="/pathwisse"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-teal-700 text-teal-300 font-semibold rounded-xl hover:bg-teal-900 transition-all text-sm">
                Explore Pathwisse
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
