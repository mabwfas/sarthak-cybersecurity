import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
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
            <span className="text-brand">$</span> ./experience --timeline
          </p>
          <h2 className="font-heading text-3xl text-brand sm:text-4xl neon-text">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-[rgba(0,255,65,0.2)] pl-8 sm:pl-12">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Dot on timeline */}
              <div className="absolute -left-[calc(2rem+5px)] top-1.5 flex h-6 w-6 items-center justify-center rounded-[4px] border border-[rgba(0,255,65,0.3)] bg-card sm:-left-[calc(3rem+5px)]">
                {exp.type === "education" ? (
                  <GraduationCap className="h-3.5 w-3.5 text-cyan" />
                ) : (
                  <Briefcase className="h-3.5 w-3.5 text-brand" />
                )}
              </div>

              {/* Period label */}
              <span className="mb-1 inline-block rounded-[4px] bg-[rgba(0,255,65,0.08)] px-2 py-0.5 font-heading text-xs text-brand">
                {exp.period}
              </span>

              {/* Role & company */}
              <h3 className="mt-2 font-heading text-lg text-brand">
                {exp.role}
              </h3>
              <p className="mb-3 font-body text-sm text-cyan neon-text-cyan">
                {exp.company}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 font-body text-xs text-text-secondary"
                  >
                    <span className="mt-0.5 text-brand">&gt;</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
