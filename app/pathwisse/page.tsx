import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  MapTrifold,
  ChartBar,
  UsersThree,
  Buildings,
  Target,
  Brain,
  Briefcase,
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Pathwisse — Education to Career Ecosystem",
  description:
    "Pathwisse is an education-to-career ecosystem for institutions and students. Structured career roadmaps, employability tracking, and institutional readiness.",
};

const features = [
  {
    icon: MapTrifold,
    title: "Structured Career Roadmaps",
    desc: "Academic-to-career pathway frameworks built for every discipline, helping students navigate from first year to career readiness with clarity.",
  },
  {
    icon: ChartBar,
    title: "Outcome-Based Tracking",
    desc: "Employability dashboards that give institutions measurable visibility into student progress, skill gaps, and career readiness over time.",
  },
  {
    icon: Brain,
    title: "Skill Visibility",
    desc: "Map, surface, and verify skills at the student and department level — making employability tangible and trackable.",
  },
  {
    icon: Target,
    title: "Placement Preparation",
    desc: "Structured preparation pathways aligned to industry requirements, giving students a competitive edge in placement and hiring.",
  },
  {
    icon: Buildings,
    title: "Institutional Reporting",
    desc: "Department-level outcomes reporting for institutional leaders, giving career cells and placement teams the data they need.",
  },
  {
    icon: Briefcase,
    title: "Student Guidance",
    desc: "Personalised roadmaps and milestone tracking that turn abstract goals into achievable, trackable steps for every student.",
  },
];

const useCases = [
  {
    heading: "First-Year Readiness",
    body: "Orient new students to their career landscape from day one, setting expectations and roadmaps early.",
  },
  {
    heading: "Skill Mapping",
    body: "Systematically map skills across courses, activities, and projects — building a verifiable profile for every student.",
  },
  {
    heading: "Placement Preparation",
    body: "Structured pre-placement tracks aligned to company requirements and recruitment calendars.",
  },
  {
    heading: "Department-Level Visibility",
    body: "HODs and placement officers get aggregate views of readiness, gaps, and outcomes across their cohorts.",
  },
  {
    heading: "Outcome Reporting",
    body: "Shareable outcome reports for accreditation, institutional review, and NAAC/NBA-aligned documentation.",
  },
];

const audiences = [
  { label: "Colleges & Universities", icon: Buildings },
  { label: "Placement Teams", icon: Briefcase },
  { label: "Career Cells", icon: Target },
  { label: "Students", icon: GraduationCap },
  { label: "Institutional Leaders", icon: UsersThree },
];

export default function PathwissePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-teal-700 flex items-center justify-center">
                    <GraduationCap size={24} color="white" weight="duotone" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-teal-600 tracking-widest uppercase block">Product · Live Now</span>
                    <span className="font-bold text-slate-900 text-lg tracking-tight">Pathwisse.com</span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.05] mb-6">
                  From academic
                  <br />
                  progress to
                  <br />
                  <span className="text-teal-700">career readiness.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-xl text-slate-500 leading-relaxed max-w-lg mb-10">
                  Pathwisse is an education-to-career ecosystem for institutions and students — built on structured roadmaps and outcome-based tracking.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact?type=demo"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-700 text-white font-semibold rounded-xl hover:bg-teal-800 transition-all duration-150 active:-translate-y-[1px] text-sm shadow-[0_4px_16px_-4px_rgba(15,118,110,0.4)]"
                  >
                    Request a Demo
                    <ArrowRight size={15} weight="bold" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all text-sm"
                  >
                    Talk to the Team
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.2} direction="right">
                <div className="rounded-[2rem] bg-gradient-to-br from-teal-50 to-white border border-teal-100 p-8"
                  style={{ boxShadow: "0 20px 48px -16px rgba(15,118,110,0.1)" }}>
                  <p className="text-xs font-semibold text-teal-600 tracking-widest uppercase mb-5">Who it serves</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {audiences.map((a) => (
                      <div key={a.label} className="flex items-center gap-2 px-3 py-2 bg-white border border-teal-100 rounded-xl">
                        <a.icon size={14} color="#0f766e" weight="duotone" />
                        <span className="text-xs font-medium text-slate-700">{a.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-teal-100 pt-5">
                    <p className="text-xs text-slate-400 mb-3">Core promise</p>
                    {[
                      "Improve career readiness measurably",
                      "Give institutions outcome visibility",
                      "Guide students step by step",
                    ].map((point) => (
                      <div key={point} className="flex items-start gap-2 mb-2">
                        <CheckCircle size={14} color="#0f766e" weight="fill" className="mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-600">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Problem statement */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-4">
              <span className="text-xs font-semibold text-teal-400 tracking-widest uppercase block mb-5">The Problem</span>
            </Reveal>
            <div className="lg:col-span-8">
              <Reveal delay={0.05}>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-6">
                  Students graduate without clarity. Institutions lack visibility. Career outcomes are left to chance.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-teal-100/60 leading-relaxed mb-4">
                  Education institutions invest heavily in placement infrastructure but lack the systematic tools to track, guide, and report on career readiness outcomes. Students navigate from first year to final year with minimal structured support.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-teal-100/60 leading-relaxed">
                  Pathwisse solves this by converting career readiness into a trackable, measurable, institution-wide process — not a last-minute intervention.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <Reveal>
              <span className="inline-block text-xs font-semibold text-teal-600 tracking-widest uppercase mb-4">
                Product Features
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900">
                Built for institutions.
                <br />
                Designed for students.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07}>
                <div className="p-7 rounded-2xl border border-slate-100 bg-slate-50 hover:border-teal-100 hover:bg-teal-50/20 transition-all duration-300 h-full group"
                  style={{ boxShadow: "0 1px 4px 0 rgba(0,0,0,0.03)" }}>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-5 group-hover:border-teal-100 transition-colors">
                    <f.icon size={20} color="#0f766e" weight="duotone" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2 tracking-tight">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <span className="inline-block text-xs font-semibold text-teal-600 tracking-widest uppercase mb-4">
              Institutional Use Cases
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 mb-12">
              How institutions use Pathwisse.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc, i) => (
              <Reveal key={uc.heading} delay={i * 0.06}>
                <div className="p-7 rounded-2xl bg-white border border-slate-100 h-full"
                  style={{ boxShadow: "0 1px 4px 0 rgba(0,0,0,0.04)" }}>
                  <div className="w-1.5 h-6 bg-teal-600 rounded-full mb-5" />
                  <h3 className="font-semibold text-slate-900 mb-2 tracking-tight">{uc.heading}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{uc.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="text-4xl font-bold tracking-tighter text-slate-900 mb-4">
                  See Pathwisse in your institution.
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Book a live demo with the ShaQuantum Labs team. We will walk you through the product, discuss your institution's specific needs, and show you what career readiness looks like at scale.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact?type=demo"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-700 text-white font-semibold rounded-xl hover:bg-teal-800 transition-all text-sm shadow-[0_4px_16px_-4px_rgba(15,118,110,0.4)]">
                    Request Pathwisse Demo <ArrowRight size={15} weight="bold" />
                  </Link>
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all text-sm">
                    Contact the Team
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-[2rem] bg-teal-50 border border-teal-100 p-8">
                <p className="text-sm font-semibold text-teal-700 mb-5">What to expect in a demo</p>
                <div className="flex flex-col gap-4">
                  {[
                    "Live walkthrough of the Pathwisse platform",
                    "Discussion of your institution's specific career readiness challenges",
                    "Overview of outcomes, reporting, and student journey features",
                    "Q&A with the product team",
                    "Clear next steps for a pilot or partnership",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle size={16} color="#0f766e" weight="fill" className="mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-600">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
