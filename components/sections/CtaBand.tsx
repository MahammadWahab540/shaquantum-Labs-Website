import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function CtaBand() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="rounded-[2.5rem] p-12 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, #134e4a 0%, #0f766e 50%, #115e59 100%)",
            boxShadow: "0 32px 64px -20px rgba(15,118,110,0.3)",
          }}
        >
          <Reveal>
            <span className="inline-block text-xs font-semibold text-teal-300 tracking-widest uppercase mb-6">
              Ready to connect
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-5 max-w-2xl mx-auto">
              Investors, institutions, partners — this is for you.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-teal-100/70 max-w-xl mx-auto leading-relaxed mb-10">
              Whether you want to invest, request a Pathwisse demo, partner with ShaQuantum Labs, or explore sector collaboration — start here.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/pathwisse"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-teal-800 font-semibold rounded-xl hover:bg-teal-50 transition-all duration-150 text-sm shadow-[0_4px_16px_-4px_rgba(0,0,0,0.2)]"
              >
                Request Pathwisse Demo
                <ArrowRight size={15} weight="bold" />
              </Link>
              <Link
                href="/contact?type=investor"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-teal-400/40 text-white font-semibold rounded-xl hover:bg-teal-700/30 transition-all duration-150 text-sm"
              >
                Request Investor Brief
              </Link>
              <Link
                href="/contact?type=partner"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-teal-400/40 text-white font-semibold rounded-xl hover:bg-teal-700/30 transition-all duration-150 text-sm"
              >
                Partner With Us
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
