"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import Reveal from "@/components/ui/Reveal";

const team = [
  {
    name: "Dr. R. Mahammad Shafi RajaSaheb",
    role: "Co-Founder & Director",
    tag: "HOD — AI & Data Science",
    strength: "AI · Research · Applied Computing",
    photo: "/Images/team/shafi-rajasaheb.png",
    photoPosition: "center top",
    photoScale: 1.2,
    photoOffsetY: "-5%",
    initials: "RS",
  },
  {
    name: "Gundluru Mahammad Wahab",
    role: "Co-Founder & Director",
    tag: "Product Manager",
    strength: "Product Strategy · Pathwisse · Business Execution",
    photo: "/Images/team/mahammad-wahab.png",
    photoPosition: "53% top",
    photoScale: 1.3,
    photoOffsetY: "-10%",
    initials: "GW",
  },
  {
    name: "S Vishnu Vardhan",
    role: "Product & Business Operations Lead",
    tag: "Founding Team",
    strength: "Product Management · Operations · Project Management · Marketing",
    photo: "/Images/team/Vishnu 2.png",
    photoPosition: "center top",
    photoScale: 1.3,
    photoOffsetY: "-15%",
    initials: "VS",
  },
  {
    name: "Sachin Kumar",
    role: "Product Manager — Healthcare",
    tag: "Founding Team",
    strength: "Healthcare Product · User Flows · Healthtech",
    photo: "/Images/team/sachin-kumar.jpeg",
    photoPosition: "center 15%",
    photoScale: 1,
    initials: "SK",
  },
  {
    name: "Bala Harsha",
    role: "Sales & Marketing Lead",
    tag: "Founding Team",
    strength: "Sales Execution · Institutional Outreach · Pipeline",
    photo: "/Images/team/bala-harsha.png",
    photoPosition: "center 15%",
    photoScale: 1,
    initials: "BH",
  },
];

export default function TeamPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <span className="inline-block text-xs font-semibold text-teal-600 tracking-widest uppercase mb-4">
                Founding Team
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900">
                Built by people with
                <br />
                sector-specific conviction.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors shrink-0"
            >
              Full team profiles <ArrowRight size={16} weight="bold" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="p-7 rounded-2xl border border-white bg-white hover:border-teal-100 transition-all duration-300 group"
              style={{ boxShadow: "0 1px 4px 0 rgba(0,0,0,0.04)" }}
            >
              {/* Avatar */}
              <div
                className="w-14 h-14 rounded-full overflow-hidden mb-5 flex-shrink-0 ring-2 ring-slate-100"
                style={{ boxShadow: "0 2px 8px -2px rgba(0,0,0,0.10)" }}
              >
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={200}
                    height={200}
                    quality={100}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: member.photoPosition,
                      transform: member.photoScale && member.photoScale > 1
                        ? `scale(${member.photoScale}) translateY(${"photoOffsetY" in member ? member.photoOffsetY : "0%"})`
                        : undefined,
                      transformOrigin: member.photoPosition,
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-100 to-teal-200">
                    <span className="text-sm font-bold text-teal-700 tracking-tight">
                      {member.initials}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="font-semibold text-slate-900 text-sm leading-tight tracking-tight mb-1">
                {member.name}
              </h3>
              <p className="text-xs font-medium text-teal-700 mb-0.5">{member.role}</p>
              <p className="text-xs text-slate-400 mb-4">{member.tag}</p>
              <div className="pt-4 border-t border-slate-50">
                <p className="text-xs text-slate-400">{member.strength}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
