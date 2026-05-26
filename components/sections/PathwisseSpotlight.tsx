"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  ArrowRight,
  MapTrifold,
  ChartBar,
  UsersThree,
  Buildings,
} from "@phosphor-icons/react";
import Reveal from "@/components/ui/Reveal";

const features = [
  {
    icon: MapTrifold,
    title: "Structured Career Roadmaps",
    desc: "Academic-to-career pathway frameworks for every discipline.",
  },
  {
    icon: ChartBar,
    title: "Employability Tracking",
    desc: "Outcome-based dashboards for students and institutions.",
  },
  {
    icon: UsersThree,
    title: "Institutional Readiness",
    desc: "Placement preparation, skill mapping, and department-level visibility.",
  },
  {
    icon: Buildings,
    title: "For Colleges & Universities",
    desc: "Career cells, placement teams, and institutional leaders.",
  },
];

export default function PathwisseSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <Reveal>
          <span className="inline-block text-xs font-semibold text-teal-600 tracking-widest uppercase mb-5">
            Flagship Product · Live
          </span>
        </Reveal>

        {/* Asymmetric feature card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2.5rem] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #f0fdfa 0%, #ffffff 60%, #f8fafc 100%)",
            boxShadow: "0 20px 60px -20px rgba(15,118,110,0.12)",
            border: "1px solid #ccfbf1",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left panel — product identity */}
            <div className="lg:col-span-5 p-10 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-teal-100">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-teal-700 flex items-center justify-center mb-8">
                  <GraduationCap size={28} color="white" weight="duotone" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl font-bold tracking-tight text-slate-900">Pathwisse</span>
                  <span className="text-xs px-2 py-0.5 bg-teal-100 text-teal-700 rounded-full font-semibold">.com</span>
                </div>
                <p className="text-base text-slate-500 leading-relaxed mb-6">
                  An education-to-career ecosystem that guides institutions and students from academic progress to career readiness — using structured roadmaps and outcome-based tracking.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The first proof that ShaQuantum Labs can convert a sector problem into a commercially scalable product.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/pathwisse"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-teal-700 text-white font-semibold rounded-xl hover:bg-teal-800 transition-all duration-150 active:-translate-y-[1px] text-sm shadow-[0_4px_16px_-4px_rgba(15,118,110,0.4)]"
                >
                  View Product
                  <ArrowRight size={15} weight="bold" />
                </Link>
                <Link
                  href="/contact?type=demo"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-teal-200 text-teal-700 font-semibold rounded-xl hover:bg-teal-50 transition-all duration-150 text-sm"
                >
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Right panel — features */}
            <div className="lg:col-span-7 p-10 lg:p-14">
              <p className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-8">
                What Pathwisse delivers
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <f.icon size={18} color="#0f766e" weight="duotone" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-800 mb-1">{f.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Use case tags */}
              <div className="mt-10 pt-8 border-t border-slate-100">
                <p className="text-xs text-slate-400 mb-3">Use cases</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "First-year readiness",
                    "Skill mapping",
                    "Placement preparation",
                    "Department visibility",
                    "Outcome reporting",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
