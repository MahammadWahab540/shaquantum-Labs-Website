import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Founding Team",
  description:
    "Meet the ShaQuantum Labs founding team — combining AI research, product management, operations, healthcare, and sales expertise.",
};

const directors = [
  {
    name: "Dr. R. Mahammad Shafi RajaSaheb",
    role: "Co-Founder & Director",
    tag: "HOD — Artificial Intelligence & Data Science",
    institution: "Aditya College of Engineering, Madanapalle",
    photo: "/Images/team/shafi-rajasaheb.png",
    photoPosition: "center top",
    photoScale: 1.2,
    photoOffsetY: "-5%",
    bio: "Dr. R. Mahammad Shafi RajaSaheb brings academic leadership, AI expertise, research depth, and institutional understanding to ShaQuantum Labs. He supports technology strategy, AI direction, research architecture, and product credibility across the company's digital ecosystems.",
    strengths: ["AI & Data Science", "Applied Computing", "Academic Leadership", "Research Architecture"],
    sectors: ["Education", "AI-enabled systems", "Healthcare records", "Automation"],
    emphasis: "Technical authority and research-backed product development.",
  },
  {
    name: "Gundluru Mahammad Wahab",
    role: "Co-Founder & Director",
    tag: "Product Manager",
    institution: "MBA · Published Research in EV Logistics & Neo-Banking",
    photo: "/Images/team/mahammad-wahab.png",
    photoPosition: "53% top",
    photoScale: 1.3,
    photoOffsetY: "-10%",
    bio: "Mahammad Wahab brings product strategy, business execution, and market-readiness thinking to ShaQuantum Labs. He leads the commercialization lens for Pathwisse.com and helps convert real-world sector problems into scalable product ecosystems.",
    strengths: ["Product Management", "Business Strategy", "Market Research", "Ecosystem Execution"],
    sectors: ["Education", "Employability", "MSME growth", "Venture execution"],
    emphasis: "Product builder and commercial operator.",
  },
];

const team = [
  {
    name: "S Vishnu Vardhan",
    role: "Product & Business Operations Lead",
    tag: "Founding Team",
    photo: "/Images/team/Vishnu 2.png",
    photoPosition: "center top",
    photoScale: 1.3,
    photoOffsetY: "-15%",
    bio: "Vishnu supports ShaQuantum Labs across operations, business coordination, project management, and marketing execution. His business-analysis background and field-oriented operating mindset make him a strong fit for building practical processes around the agriculture and operations side of ShaQuantum's future ecosystem roadmap.",
    strengths: ["Product Management", "Operations Discipline", "Business Development", "Project Management", "Marketing Execution"],
    sectors: ["Agriculture", "Agri-operations", "Rural market execution", "Partner coordination"],
    emphasis: "The operator who turns plans into repeatable systems.",
  },
  {
    name: "Sachin Kumar",
    role: "Product Manager — Healthcare Vertical",
    tag: "Founding Team",
    photo: "/Images/team/sachin-kumar.jpeg",
    photoPosition: "center 15%",
    bio: "Sachin leads product thinking for ShaQuantum's healthcare direction. His role is to translate healthcare problems into practical digital product requirements, focusing on access, workflows, service coordination, and user-centred healthtech experiences.",
    strengths: ["Healthcare Product Thinking", "User Flows", "Requirements", "Stakeholder Coordination"],
    sectors: ["Healthcare access", "Digital health workflows", "Patient journeys", "Coordination platforms"],
    emphasis: "Healthcare product owner with a practical product lens.",
  },
  {
    name: "Bala Harsha",
    role: "Sales & Marketing Lead",
    tag: "Founding Team",
    photo: "/Images/team/bala-harsha.png",
    photoPosition: "center 15%",
    bio: "Bala Harsha supports sales, marketing, outreach, and customer acquisition for ShaQuantum Labs. His role is to build market visibility, manage relationships, create early pipelines, and help ShaQuantum's products reach institutions, partners, and customers.",
    strengths: ["Sales Execution", "Marketing Communication", "Relationship Building", "Pipeline Development"],
    sectors: ["Institutional outreach", "Partnerships", "Product adoption", "Go-to-market execution"],
    emphasis: "The market-facing growth engine.",
  },
  {
    name: "Ankit Sunil",
    role: "Finance & Revenue Operations",
    tag: "Founding Team",
    photo: "/Images/team/Ankit Sunil.png",
    photoPosition: "center 15%",
    photoScale: 1,
    bio: "Ankit is a finance operations professional with experience across accounts receivable, order-to-cash operations, billing, collections, revenue management, and SAP-based finance workflows. At Pathwisse, he contributes to building strong financial and operational foundations, helping the team think clearly about revenue processes, institutional billing, and scalable business execution.",
    strengths: ["Finance Operations", "Revenue Management", "O2C", "Billing & Collections", "SAP", "Business Operations"],
    sectors: ["Institutional billing", "Revenue operations", "Business execution", "Pathwisse platform"],
    emphasis: "Supports Pathwisse on finance operations, revenue processes, billing workflows, and scalable business execution.",
  },
];

function getInitials(name: string) {
  const cleaned = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s*/i, "").trim();
  const parts = cleaned.split(" ").filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts[parts.length - 1]?.[0] ?? "";
  return (first + last).toUpperCase();
}

type Person = {
  name: string;
  role: string;
  tag: string;
  institution?: string;
  photo: string | null;
  photoPosition?: string;
  photoScale?: number;
  photoOffsetY?: string;
  bio: string;
  strengths: string[];
  sectors: string[];
  emphasis: string;
};

function PersonCard({
  person,
  isDirector = false,
}: {
  person: Person;
  isDirector?: boolean;
}) {
  return (
    <div
      className={`rounded-[2rem] overflow-hidden border ${isDirector ? "border-teal-100" : "border-slate-100"} bg-white flex flex-col`}
      style={{ boxShadow: "0 4px 32px -8px rgba(0,0,0,0.07)" }}
    >
      {/* Photo header */}
      <div
        className={`px-8 pt-10 pb-8 flex flex-col items-center text-center border-b ${
          isDirector ? "bg-teal-50 border-teal-100" : "bg-slate-50 border-slate-100"
        }`}
      >
        {/* Avatar circle */}
        <div
          className={`w-48 h-48 rounded-full overflow-hidden mb-5 flex-shrink-0 ring-4 ${
            isDirector ? "ring-teal-100" : "ring-white"
          }`}
          style={{ boxShadow: "0 8px 24px -6px rgba(0,0,0,0.12)" }}
        >
          {person.photo ? (
            <Image
              src={person.photo}
              alt={person.name}
              width={500}
              height={500}
              quality={100}
              className="w-full h-full object-cover"
              style={{
                objectPosition: person.photoPosition ?? "center 15%",
                transform: person.photoScale && person.photoScale > 1
                  ? `scale(${person.photoScale}) translateY(${person.photoOffsetY ?? "0%"})`
                  : undefined,
                transformOrigin: person.photoPosition ?? "center 15%",
              }}
              priority
            />
          ) : (
            <div
              className={`w-full h-full flex items-center justify-center ${
                isDirector
                  ? "bg-gradient-to-br from-teal-100 to-teal-200"
                  : "bg-gradient-to-br from-slate-100 to-slate-200"
              }`}
            >
              <span
                className={`text-4xl font-bold tracking-tight ${
                  isDirector ? "text-teal-700" : "text-slate-400"
                }`}
              >
                {getInitials(person.name)}
              </span>
            </div>
          )}
        </div>

        <h3 className="font-bold text-slate-900 tracking-tight text-lg leading-tight mb-1">
          {person.name}
        </h3>
        <p
          className={`text-sm font-semibold mb-1 ${
            isDirector ? "text-teal-700" : "text-slate-600"
          }`}
        >
          {person.role}
        </p>
        <p className="text-xs text-slate-400">{person.tag}</p>
        {person.institution && (
          <p className="text-xs text-slate-400 mt-1 max-w-xs">{person.institution}</p>
        )}
      </div>

      {/* Body */}
      <div className="p-8 flex flex-col flex-1">
        <p className="text-sm text-slate-500 leading-relaxed mb-6">{person.bio}</p>

        <div
          className={`p-4 rounded-xl text-sm mb-6 font-medium ${
            isDirector
              ? "bg-teal-50 border border-teal-100 text-teal-800"
              : "bg-slate-50 border border-slate-100 text-slate-700"
          }`}
        >
          {person.emphasis}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
          {/* Strengths */}
          <div>
            <p className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-3">
              Strengths
            </p>
            <div className="flex flex-col gap-2">
              {person.strengths.map((s) => (
                <span
                  key={s}
                  className="text-xs text-slate-600 flex items-center gap-1.5"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      isDirector ? "bg-teal-400" : "bg-slate-300"
                    }`}
                  />
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Sector links */}
          <div>
            <p className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-3">
              Sector Links
            </p>
            <div className="flex flex-wrap gap-1.5">
              {person.sectors.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-1 rounded-lg bg-slate-50 border border-slate-100 text-slate-500"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type Advisor = {
  name: string;
  role: string;
  tag: string;
  photo: string | null;
  photoPosition?: string;
  photoScale?: number;
  photoOffsetY?: string;
  bio: string;
};

const advisors: Advisor[] = [
  {
    name: "Manoharan Ponnambalam",
    role: "Enterprise Technology & Delivery Advisor",
    tag: "Advisory Team",
    photo: "/Images/team/Manohar.png",
    photoPosition: "center 15%",
    photoScale: 1,
    bio: "25+ years in IT products, SaaS, enterprise applications, and quality processes, guiding Shaquantum Labs in building reliable, scalable, and institution-grade technology platforms.",
  },
  {
    name: "Dr. Asadi Srinivasulu",
    role: "AI, Data Science & Academic Research Advisor",
    tag: "Advisory Team",
    photo: "/Images/team/asadi-srinivasulu.png",
    bio: "25+ years across AI, Data Science, teaching, research, and academic leadership, strengthening Shaquantum Labs' direction in learning intelligence, AI-enabled education, and outcome-based education alignment.",
  },
  {
    name: "Sunil Pusapati",
    role: "CEO & MD, BrikBuild Infra; Director, Pusapati Industrial",
    tag: "Advisory Team",
    photo: "/Images/team/sunil-pusapati.png",
    bio: "Brings CEO-level industry insight to help Shaquantum Labs align student readiness, practical skills, workplace expectations, and employability outcomes.",
  },
  {
    name: "Dr. Ravichandra Reddy",
    role: "Academic Technology & Digital Transformation Advisor",
    tag: "Advisory Team",
    photo: "/Images/team/ravichandra-reddy.png",
    bio: "Guides Shaquantum Labs on digital academic adoption, structured visibility, and practical outcome tracking for colleges and institutions.",
  },
];

function AdvisorCard({ advisor }: { advisor: Advisor }) {
  return (
    <div
      className="rounded-[2rem] overflow-hidden border border-slate-100 bg-white flex flex-col h-full"
      style={{ boxShadow: "0 4px 32px -8px rgba(0,0,0,0.07)" }}
    >
      {/* Photo header */}
      <div className="px-8 pt-10 pb-8 flex flex-col items-center text-center border-b bg-slate-50 border-slate-100">
        {/* Avatar circle */}
        <div
          className="w-48 h-48 rounded-full overflow-hidden mb-5 flex-shrink-0 ring-4 ring-white"
          style={{ boxShadow: "0 8px 24px -6px rgba(0,0,0,0.12)" }}
        >
          {advisor.photo ? (
            <Image
              src={advisor.photo}
              alt={advisor.name}
              width={500}
              height={500}
              quality={100}
              className="w-full h-full object-cover"
              style={{
                objectPosition: advisor.photoPosition ?? "center 15%",
                transform: advisor.photoScale && advisor.photoScale > 1
                  ? `scale(${advisor.photoScale}) translateY(${advisor.photoOffsetY ?? "0%"})`
                  : undefined,
                transformOrigin: advisor.photoPosition ?? "center 15%",
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
              <span className="text-4xl font-bold tracking-tight text-slate-400">
                {getInitials(advisor.name)}
              </span>
            </div>
          )}
        </div>

        <h3 className="font-bold text-slate-900 tracking-tight text-lg leading-tight mb-1">
          {advisor.name}
        </h3>
        <p className="text-sm font-semibold text-slate-600 mb-1">
          {advisor.role}
        </p>
        <p className="text-xs text-slate-400">{advisor.tag}</p>
      </div>

      {/* Body */}
      <div className="p-8 flex flex-col flex-1">
        <p className="text-sm text-slate-500 leading-relaxed">{advisor.bio}</p>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <span className="inline-block text-xs font-semibold text-teal-600 tracking-widest uppercase mb-6">
              Founding Team
            </span>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.05] mb-6">
                  Built by people with
                  <br />
                  <span className="text-teal-700">sector-specific</span>
                  <br />
                  conviction.
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <p className="text-lg text-slate-500 leading-relaxed">
                  ShaQuantum Labs combines AI research, product management, operations, agriculture context, healthcare product thinking, and sales execution — in a single founding team.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <span className="inline-block text-xs font-semibold text-teal-600 tracking-widest uppercase mb-10">
              Directors
            </span>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {directors.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.08}>
                <PersonCard person={d} isDirector />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founding team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <span className="inline-block text-xs font-semibold text-teal-600 tracking-widest uppercase mb-4">
              Founding Team
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 mb-12">
              The operators, builders, and growth team.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.07}>
                <PersonCard person={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory team */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <span className="inline-block text-xs font-semibold text-teal-600 tracking-widest uppercase mb-4">
              Advisory Team
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 mb-4 max-w-3xl">
              Guided by leaders across academics, technology, industry, and innovation
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-500 max-w-4xl mb-12 leading-relaxed text-sm md:text-base">
              Shaquantum Labs is guided by experienced leaders across enterprise technology delivery, AI and Data Science research, academic transformation, and industry operations, helping us build practical, credible, and outcome-focused products for institutions and learners.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((adv, i) => (
              <Reveal key={adv.name} delay={i * 0.07}>
                <AdvisorCard advisor={adv} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tighter text-slate-900 mb-4">
              Join the mission.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              ShaQuantum Labs is building for the long term. If you share our conviction about the sectors that matter, we want to hear from you.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact?type=hire"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-700 text-white font-semibold rounded-xl hover:bg-teal-800 transition-all text-sm shadow-[0_4px_16px_-4px_rgba(15,118,110,0.4)]"
              >
                Join the Team <ArrowRight size={15} weight="bold" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-white transition-all text-sm"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
