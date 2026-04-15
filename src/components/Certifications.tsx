import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
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
            <span className="text-brand">$</span> gpg --list-keys --certifications
          </p>
          <h2 className="font-heading text-3xl text-brand sm:text-4xl neon-text">
            Certifications
          </h2>
          <p className="mt-2 font-body text-sm text-text-secondary">
            Industry-recognized security credentials
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.acronym}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{
                y: -3,
                boxShadow:
                  "0 0 16px rgba(0,255,65,0.08), 0 0 32px rgba(0,255,65,0.04)",
              }}
              className="card-glow flex items-start gap-4 rounded-[4px] border border-[rgba(0,255,65,0.15)] bg-card p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] border border-[rgba(0,255,65,0.2)] bg-[rgba(0,255,65,0.05)]">
                <Award className="h-5 w-5 text-brand" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading text-lg text-brand neon-text">
                  {cert.acronym}
                </h3>
                <p className="font-body text-xs text-text-secondary">
                  {cert.name}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="font-body text-[10px] uppercase text-text-muted">
                    {cert.issuer}
                  </span>
                  <span className="text-text-muted">|</span>
                  <span className="font-body text-[10px] text-cyan">
                    {cert.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
