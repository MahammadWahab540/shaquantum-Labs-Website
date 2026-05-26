"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "@phosphor-icons/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isMobile && !reducedMotion) {
      setShowVideo(true);
    }
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-white">
      {/* Video background — desktop only, loaded after hydration */}
      {showVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Light overlay — 25% white so the video shows through clearly */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(255,255,255,0.25)" }}
        aria-hidden="true"
      />

      {/* Subtle teal brand tint */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-3xl max-h-3xl"
          style={{
            opacity: 0.06,
            background: "radial-gradient(circle at center, #0f766e 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-xl max-h-xl"
          style={{
            opacity: 0.04,
            background: "radial-gradient(circle at center, #14b8a6 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            className="lg:col-span-7"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Label */}
            <motion.div variants={item} className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50/80 border border-teal-200 rounded-full text-xs font-semibold text-teal-700 tracking-wide uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                Product Innovation Company · India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.05] mb-6"
            >
              Building digital
              <br />
              <span className="text-teal-700">ecosystems</span> for
              <br />
              sectors that matter.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={item}
              className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
            >
              ShaQuantum Labs builds commercially scalable products for education, MSMEs, agriculture, and healthcare — starting with{" "}
              <span className="text-slate-800 font-medium">Pathwisse.com</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <Link
                href="/pathwisse"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-700 text-white font-semibold rounded-xl hover:bg-teal-800 transition-all duration-150 active:-translate-y-[1px] shadow-[0_4px_16px_-4px_rgba(15,118,110,0.4)]"
              >
                <GraduationCap size={18} weight="bold" />
                Explore Pathwisse
                <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all duration-150"
              >
                Talk to ShaQuantum Labs
              </Link>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              variants={item}
              className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center gap-6"
            >
              {[
                { label: "Education", status: "Live" },
                { label: "MSMEs", status: "Roadmap" },
                { label: "Agriculture", status: "Roadmap" },
                { label: "Healthcare", status: "Roadmap" },
              ].map((sector) => (
                <div key={sector.label} className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      sector.status === "Live" ? "bg-teal-500" : "bg-slate-300"
                    }`}
                  />
                  <span className="text-sm text-slate-500">
                    {sector.label}
                    <span
                      className={`ml-1.5 text-xs font-medium ${
                        sector.status === "Live" ? "text-teal-600" : "text-slate-400"
                      }`}
                    >
                      {sector.status}
                    </span>
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — ecosystem graphic */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <EcosystemGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EcosystemGraphic() {
  const sectors = [
    { label: "Education", angle: -60, color: "#0d9488", active: true },
    { label: "MSMEs", angle: 30, color: "#94a3b8", active: false },
    { label: "Agriculture", angle: 120, color: "#94a3b8", active: false },
    { label: "Healthcare", angle: 210, color: "#94a3b8", active: false },
  ];

  return (
    <div className="relative w-72 h-72 lg:w-96 lg:h-96 flex-shrink-0">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="170"
          stroke="#e2e8f0"
          strokeWidth="1"
          strokeDasharray="6 6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
        {/* Mid ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="115"
          stroke="#ccfbf1"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        />
        {/* Inner ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="60"
          stroke="#5eead4"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        />

        {/* Centre node */}
        <motion.circle
          cx="200"
          cy="200"
          r="32"
          fill="#0f766e"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "200px 200px" }}
        />
        <text
          x="200"
          y="196"
          textAnchor="middle"
          fill="white"
          fontSize="7"
          fontFamily="Outfit, sans-serif"
          fontWeight="700"
          letterSpacing="0.5"
        >
          SHA
        </text>
        <text
          x="200"
          y="207"
          textAnchor="middle"
          fill="rgba(255,255,255,0.7)"
          fontSize="5.5"
          fontFamily="Outfit, sans-serif"
          fontWeight="500"
          letterSpacing="1"
        >
          QUANTUM
        </text>

        {/* Sector nodes */}
        {sectors.map((s, i) => {
          const rad = (s.angle * Math.PI) / 180;
          const cx = 200 + 115 * Math.cos(rad);
          const cy = 200 + 115 * Math.sin(rad);
          const lx = 200 + 170 * Math.cos(rad);
          const ly = 200 + 170 * Math.sin(rad);
          return (
            <motion.g
              key={s.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.2 + i * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            >
              {/* connector line */}
              <line
                x1="200"
                y1="200"
                x2={cx}
                y2={cy}
                stroke={s.active ? "#5eead4" : "#e2e8f0"}
                strokeWidth={s.active ? "1.5" : "1"}
                strokeDasharray={s.active ? undefined : "4 4"}
              />
              {/* outer label dot */}
              <circle cx={lx} cy={ly} r="4" fill={s.color} opacity="0.5" />
              {/* main node */}
              <circle
                cx={cx}
                cy={cy}
                r="18"
                fill={s.active ? "#f0fdfa" : "#f8fafc"}
                stroke={s.active ? "#0f766e" : "#e2e8f0"}
                strokeWidth={s.active ? "2" : "1"}
              />
              <text
                x={cx}
                y={cy + 3}
                textAnchor="middle"
                fill={s.active ? "#0f766e" : "#94a3b8"}
                fontSize="6"
                fontFamily="Outfit, sans-serif"
                fontWeight="600"
              >
                {s.label.slice(0, 5)}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
