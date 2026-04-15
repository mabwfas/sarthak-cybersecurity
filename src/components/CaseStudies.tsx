import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import { caseStudies } from "../data";

function ThreatBadge({ level }: { level: string }) {
  const color =
    level === "Critical"
      ? "text-alert border-[rgba(255,51,51,0.3)] bg-[rgba(255,51,51,0.08)]"
      : level === "High"
        ? "text-[#FF8833] border-[rgba(255,136,51,0.3)] bg-[rgba(255,136,51,0.08)]"
        : "text-[#FFCC33] border-[rgba(255,204,51,0.3)] bg-[rgba(255,204,51,0.08)]";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-[4px] border px-2 py-0.5 font-heading text-[10px] uppercase ${color}`}
    >
      <AlertTriangle className="h-3 w-3" />
      {level}
    </span>
  );
}

export default function CaseStudies() {
  return (
    <section id="cases" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-2 font-body text-xs text-text-muted">
            <span className="text-brand">$</span> ./cases --classified
          </p>
          <h2 className="font-heading text-3xl text-brand sm:text-4xl neon-text">
            Case Studies
          </h2>
          <p className="mt-2 font-body text-sm text-text-secondary">
            Select engagements from recent security assessments
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{
                y: -4,
                boxShadow:
                  "0 0 20px rgba(0,255,65,0.08), 0 0 40px rgba(0,255,65,0.04)",
              }}
              className="card-glow relative overflow-hidden rounded-[4px] border border-[rgba(0,255,65,0.15)] bg-card"
            >
              {/* Classified watermark */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="rotate-[-20deg] font-heading text-6xl uppercase tracking-widest text-[rgba(255,51,51,0.04)]">
                  Classified
                </span>
              </div>

              <div className="relative z-10 p-6">
                {/* Header */}
                <div className="mb-4 flex items-start justify-between gap-2">
                  <h3 className="font-heading text-sm leading-snug text-brand">
                    {cs.title}
                  </h3>
                  <ThreatBadge level={cs.threatLevel} />
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div>
                    <p className="mb-0.5 font-heading text-[10px] uppercase text-alert">
                      Summary
                    </p>
                    <p className="font-body text-xs text-text-secondary">
                      {cs.summary}
                    </p>
                  </div>
                  <div>
                    <p className="mb-0.5 font-heading text-[10px] uppercase text-[#FFCC33]">
                      Findings
                    </p>
                    <p className="font-body text-xs text-text-secondary">
                      {cs.findings}
                    </p>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                    <p className="font-body text-xs text-brand">
                      {cs.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
