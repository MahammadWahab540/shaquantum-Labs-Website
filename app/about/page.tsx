import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scales, Lightning, ArrowsOut, ChartLineUp } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "ShaQuantum Labs is a product innovation company building commercially scalable digital ecosystems for education, MSMEs, agriculture, and healthcare.",
};

const philosophy = [
  {
    icon: Scales,
    title: "Specific Knowledge",
    body: "ShaQuantum Labs combines institutional education understanding, AI/data expertise, product management, operations, agriculture context, healthcare product thinking, and sales execution. This is not available to everyone — it compounds over time.",
  },
  {
    icon: Lightning,
    title: "Accountability",
    body: "We build under our own name and take full product responsibility, starting with Pathwisse.com. There are no anonymous experiments — only real products with real outcomes.",
  },
  {
    icon: ArrowsOut,
    title: "Leverage",
    body: "Software, AI, data, productized workflows, content, and partnerships create scale without linear headcount growth. The marginal cost of reaching the next user approaches zero.",
  },
  {
    icon: ChartLineUp,
    title: "Compounding",
    body: "Each ecosystem creates institutional relationships, data intelligence, operational learning, and reusable product infrastructure for the next vertical. Education informs MSMEs. Agriculture informs Healthcare.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-block text-xs font-semibold text-teal-600 tracking-widest uppercase mb-6">
                  About ShaQuantum Labs
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.05] mb-6">
                  We build for sectors
                  <br />
                  <span className="text-teal-700">that matter.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
                  ShaQuantum Labs Private Limited is a product innovation company focused on building commercially scalable digital ecosystems for underserved, high-impact sectors.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.15} direction="right">
                <div className="p-8 rounded-[2rem] bg-teal-50 border border-teal-100">
                  <p className="text-sm font-semibold text-teal-700 mb-2">Core positioning</p>
                  <p className="text-2xl font-bold text-slate-900 tracking-tight leading-snug mb-6">
                    "The next wave of transformation will come from integrated platforms that serve essential sectors."
                  </p>
                  <div className="flex flex-col gap-3">
                    {[
                      { k: "Category", v: "Product innovation company" },
                      { k: "Focus", v: "Commercially scalable digital ecosystems" },
                      { k: "First wedge", v: "Pathwisse.com — Education" },
                      { k: "Expansion", v: "MSMEs, Agriculture, Healthcare" },
                    ].map(({ k, v }) => (
                      <div key={k} className="flex gap-3 text-sm">
                        <span className="text-teal-600 font-medium w-24 shrink-0">{k}</span>
                        <span className="text-slate-600">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <div className="p-10 rounded-[2rem] bg-white border border-slate-100 h-full"
                style={{ boxShadow: "0 4px 24px -8px rgba(0,0,0,0.06)" }}>
                <span className="text-xs font-semibold text-teal-600 tracking-widest uppercase block mb-5">Mission</span>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">Transform fragmented sectors into connected ecosystems.</h2>
                <p className="text-slate-500 leading-relaxed">
                  Our mission is to transform fragmented, underserved sectors into connected digital ecosystems through practical, market-ready products that can scale to millions of users. We aim to productize sector-specific knowledge into platforms that improve access, efficiency, and outcomes across education, MSMEs, agriculture, and healthcare.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="p-10 rounded-[2rem] bg-teal-950 border border-teal-900 h-full"
                style={{ boxShadow: "0 4px 24px -8px rgba(15,118,110,0.2)" }}>
                <span className="text-xs font-semibold text-teal-400 tracking-widest uppercase block mb-5">Vision</span>
                <h2 className="text-2xl font-bold tracking-tight text-white mb-4">The operating system for the underserved economy.</h2>
                <p className="text-teal-100/60 leading-relaxed">
                  Our vision is to become a leading builder of digital infrastructure for high-impact sectors, starting with education and expanding into MSMEs, agriculture, and healthcare. We strive to create operating systems for the underserved economy and empower millions of users with scalable, accessible solutions.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Naval-inspired philosophy */}
      <section className="py-28 bg-white" id="research">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <Reveal>
              <span className="inline-block text-xs font-semibold text-teal-600 tracking-widest uppercase mb-5">
                Operating Philosophy
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 max-w-2xl">
                Productize sector knowledge into scalable digital infrastructure.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 h-full">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-6">
                    <p.icon size={20} color="#0f766e" weight="duotone" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-lg mb-3 tracking-tight">{p.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="py-24 bg-teal-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-xs font-semibold text-teal-400 tracking-widest uppercase mb-6">
                  Why Now
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                  The window for building sector infrastructure is open.
                </h2>
                <p className="text-teal-100/60 leading-relaxed mb-6">
                  Hundreds of millions of users in education, agriculture, healthcare, and small business remain poorly served by fragmented, non-integrated digital tools. The cost of building scalable software has collapsed. The moment belongs to those who can combine sector knowledge with product execution.
                </p>
                <p className="text-teal-100/60 leading-relaxed">
                  ShaQuantum Labs is built for this window — with the right team, the right focus, and a product already live.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4">
                {[
                  { stat: "4", desc: "High-impact sectors in our roadmap" },
                  { stat: "1", desc: "Product ecosystem already live" },
                  { stat: "5", desc: "Founders with complementary sector expertise" },
                ].map((s) => (
                  <div key={s.stat} className="flex items-center gap-6 p-6 rounded-2xl border border-teal-800">
                    <span className="text-5xl font-bold text-teal-400 tracking-tighter">{s.stat}</span>
                    <span className="text-teal-100/60 text-sm leading-relaxed">{s.desc}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 mb-4">
              Ready to learn more?
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-slate-500 mb-8">Explore Pathwisse or talk to the founding team directly.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/pathwisse"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-700 text-white font-semibold rounded-xl hover:bg-teal-800 transition-all text-sm shadow-[0_4px_16px_-4px_rgba(15,118,110,0.4)]">
                Explore Pathwisse <ArrowRight size={15} weight="bold" />
              </Link>
              <Link href="/team"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all text-sm">
                Meet the Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
