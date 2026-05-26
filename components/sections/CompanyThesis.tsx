import Reveal from "@/components/ui/Reveal";

export default function CompanyThesis() {
  return (
    <section className="bg-teal-950 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left — label */}
          <Reveal className="lg:col-span-3" delay={0}>
            <span className="text-xs font-semibold text-teal-400 tracking-widest uppercase">
              Our Thesis
            </span>
          </Reveal>

          {/* Right — thesis statement */}
          <div className="lg:col-span-9">
            <Reveal delay={0.1}>
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-white tracking-tight leading-snug mb-8">
                "Sectors that matter need scalable digital ecosystems, not isolated apps. Real value is created by productizing sector-specific knowledge with accountability and leverage."
              </blockquote>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                {[
                  {
                    title: "Specific Knowledge",
                    body: "We combine AI research, product execution, operations, agriculture context, healthcare thinking, and sales expertise.",
                  },
                  {
                    title: "Leverage",
                    body: "Software, AI, data, and productized workflows create scale without linear headcount growth.",
                  },
                  {
                    title: "Compounding",
                    body: "Each ecosystem creates institutional relationships, data intelligence, and reusable product infrastructure for the next vertical.",
                  },
                ].map((p) => (
                  <div key={p.title} className="border-t border-teal-800 pt-5">
                    <h3 className="text-sm font-semibold text-teal-300 mb-2">{p.title}</h3>
                    <p className="text-sm text-teal-200/60 leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
