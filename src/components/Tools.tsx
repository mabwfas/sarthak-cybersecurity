import { motion } from "framer-motion";
import { toolCategories } from "../data";

export default function Tools() {
  return (
    <section id="tools" className="py-20">
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
            <span className="text-brand">$</span> ls ~/arsenal/
          </p>
          <h2 className="font-heading text-3xl text-brand sm:text-4xl neon-text">
            Tools & Technologies
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {toolCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-[4px] border border-[rgba(0,255,65,0.15)] bg-card p-5"
            >
              <p className="mb-4 font-heading text-sm text-cyan neon-text-cyan">
                /{cat.category.toLowerCase().replace(/\s/g, "-")}/
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-[4px] border border-[rgba(0,255,65,0.2)] bg-[rgba(0,255,65,0.04)] px-2.5 py-1 font-body text-xs text-brand transition-colors hover:border-[rgba(0,255,65,0.4)] hover:bg-[rgba(0,255,65,0.08)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
