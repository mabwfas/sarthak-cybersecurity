import { motion } from "framer-motion";
import { services } from "../data";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="services" className="py-20">
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
            <span className="text-brand">$</span> ./services --list
          </p>
          <h2 className="font-heading text-3xl text-brand sm:text-4xl neon-text">
            Services
          </h2>
          <p className="mt-2 font-body text-sm text-text-secondary">
            Comprehensive offensive and defensive security solutions
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.08 }}
                whileHover={{
                  y: -4,
                  boxShadow:
                    "0 0 20px rgba(0,255,65,0.08), 0 0 40px rgba(0,255,65,0.04)",
                }}
                className="card-glow rounded-[4px] border border-[rgba(0,255,65,0.15)] bg-card p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[4px] border border-[rgba(0,255,65,0.2)] bg-[rgba(0,255,65,0.05)]">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mb-2 font-heading text-lg text-brand">
                  {s.title}
                </h3>
                <p className="font-body text-xs leading-relaxed text-text-secondary">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
