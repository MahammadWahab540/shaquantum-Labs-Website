"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Storefront,
  Plant,
  Heart,
  ArrowRight,
} from "@phosphor-icons/react";
import Reveal from "@/components/ui/Reveal";

const sectors = [
  {
    id: "education",
    label: "Education",
    status: "Live",
    icon: GraduationCap,
    headline: "Education to Career",
    body: "Pathwisse.com guides institutions and students from academic progress to career readiness through structured roadmaps and employability tracking.",
    tags: ["Career pathways", "Employability", "Institutional readiness"],
    href: "/sectors#education",
    accent: "#0f766e",
    bg: "bg-teal-50",
    border: "border-teal-200",
    iconBg: "bg-teal-700",
    statusClass: "bg-teal-100 text-teal-700",
    large: true,
  },
  {
    id: "msme",
    label: "MSMEs",
    status: "Roadmap",
    icon: Storefront,
    headline: "Business Workflows at Scale",
    body: "Future ecosystem for business visibility, productivity, and growth intelligence for micro, small, and medium enterprises.",
    tags: ["Productivity", "Growth intel", "Digital presence"],
    href: "/sectors#msme",
    accent: "#475569",
    bg: "bg-slate-50",
    border: "border-slate-200",
    iconBg: "bg-slate-700",
    statusClass: "bg-slate-100 text-slate-500",
    large: false,
  },
  {
    id: "agriculture",
    label: "Agriculture",
    status: "Roadmap",
    icon: Plant,
    headline: "Farmer-First Digital Tools",
    body: "Field workflows, market linkage, agri-operations, and data-driven decisions for the rural economy.",
    tags: ["Field workflows", "Market linkage", "Agri-data"],
    href: "/sectors#agriculture",
    accent: "#475569",
    bg: "bg-slate-50",
    border: "border-slate-200",
    iconBg: "bg-slate-700",
    statusClass: "bg-slate-100 text-slate-500",
    large: false,
  },
  {
    id: "healthcare",
    label: "Healthcare",
    status: "Roadmap",
    icon: Heart,
    headline: "Patient-Centred Access",
    body: "Digital health workflows, care coordination, and productized service delivery for accessible healthcare.",
    tags: ["Health access", "Coordination", "Patient journeys"],
    href: "/sectors#healthcare",
    accent: "#475569",
    bg: "bg-slate-50",
    border: "border-slate-200",
    iconBg: "bg-slate-700",
    statusClass: "bg-slate-100 text-slate-500",
    large: false,
  },
];

export default function SectorsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <span className="inline-block text-xs font-semibold text-teal-600 tracking-widest uppercase mb-4">
                Sector Roadmap
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900">
                Four sectors.
                <br />
                One compounding strategy.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/sectors"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors shrink-0"
            >
              All sectors <ArrowRight size={16} weight="bold" />
            </Link>
          </Reveal>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className={`${s.large ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <Link
                href={s.href}
                className={`group flex flex-col h-full p-8 rounded-[2rem] border ${s.bg} ${s.border} transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-[2px]`}
                style={{ minHeight: s.large ? "280px" : "240px" }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-11 h-11 rounded-xl ${s.iconBg} flex items-center justify-center`}
                  >
                    <s.icon size={22} color="white" weight="duotone" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.statusClass}`}
                  >
                    {s.status}
                  </span>
                </div>

                <p className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-2">
                  {s.label}
                </p>
                <h3
                  className={`font-bold tracking-tight text-slate-900 mb-3 ${
                    s.large ? "text-2xl md:text-3xl" : "text-xl"
                  }`}
                >
                  {s.headline}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{s.body}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-white/70 border border-white/80 text-slate-500 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-teal-600 transition-colors">
                  Learn more <ArrowRight size={13} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
