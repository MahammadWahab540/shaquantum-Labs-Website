import { Flask, Cpu, ArrowsClockwise, ChartLine } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/ui/Reveal";

const differentiators = [
  {
    icon: Flask,
    title: "Research Depth",
    body: "Academic leadership in AI, data science, and applied computing — backed by published research and institutional experience.",
  },
  {
    icon: Cpu,
    title: "Product Execution",
    body: "Product strategy and commercialization expertise that converts sector problems into market-ready digital platforms.",
  },
  {
    icon: ArrowsClockwise,
    title: "Operations Scale",
    body: "Business-analysis discipline and field-oriented operations mindset that turns plans into repeatable systems.",
  },
  {
    icon: ChartLine,
    title: "Vertical Expertise",
    body: "Specific sector knowledge across education, MSMEs, agriculture, and healthcare — not generic enterprise software.",
  },
];

export default function WhyShaQuantum() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-4">
            <Reveal>
              <span className="inline-block text-xs font-semibold text-teal-600 tracking-widest uppercase mb-5">
                Why ShaQuantum Labs
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-6">
                Built different by design.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-slate-500 leading-relaxed">
                We are not a services company. We are a product lab combining specific knowledge, accountability, and leverage — building platforms that compound over time.
              </p>
            </Reveal>
          </div>

          {/* Right — differentiators */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentiators.map((d, i) => (
                <Reveal key={d.title} delay={0.1 + i * 0.07}>
                  <div className="p-7 rounded-2xl border border-slate-100 bg-slate-50 hover:border-teal-100 hover:bg-teal-50/30 transition-all duration-300 group h-full"
                    style={{ boxShadow: "0 1px 4px 0 rgba(0,0,0,0.03)" }}>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-5 group-hover:border-teal-200 transition-colors">
                      <d.icon size={20} color="#0f766e" weight="duotone" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2 tracking-tight">{d.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{d.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
