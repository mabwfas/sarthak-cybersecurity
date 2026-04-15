import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { personalInfo } from "../data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  const inputClasses =
    "w-full rounded-[4px] border border-[rgba(0,255,65,0.15)] bg-surface px-3 py-2 font-body text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-[rgba(0,255,65,0.4)] focus:shadow-[0_0_10px_rgba(0,255,65,0.1)]";

  return (
    <section id="contact" className="py-20">
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
            <span className="text-brand">$</span> ./contact --init
          </p>
          <h2 className="font-heading text-3xl text-brand sm:text-4xl neon-text">
            Get in Touch
          </h2>
          <p className="mt-2 font-body text-sm text-text-secondary">
            Ready to secure your digital assets? Let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block font-heading text-xs text-text-muted">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="mb-1 block font-heading text-xs text-text-muted">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block font-heading text-xs text-text-muted">
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="Penetration Testing Engagement"
                className={inputClasses}
              />
            </div>

            <div>
              <label className="mb-1 block font-heading text-xs text-text-muted">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Describe your security requirements..."
                className={`${inputClasses} resize-none`}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-[4px] border border-brand bg-transparent px-6 py-2.5 font-heading text-sm text-brand shadow-[0_0_12px_rgba(0,255,65,0.15)] transition-all hover:bg-brand/10 hover:shadow-[0_0_24px_rgba(0,255,65,0.25)]"
            >
              <Send className="h-4 w-4" />
              {submitted ? "Message Sent" : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="rounded-[4px] border border-[rgba(0,255,65,0.15)] bg-card p-6">
              <p className="mb-4 font-heading text-sm text-brand">
                $ cat contact_info.txt
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-brand" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-body text-sm text-cyan transition-colors hover:text-brand"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-brand" />
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="font-body text-sm text-cyan transition-colors hover:text-brand"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-brand" />
                  <span className="font-body text-sm text-text-secondary">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Terminal-style response time */}
            <div className="rounded-[4px] border border-[rgba(0,255,65,0.15)] bg-card p-6">
              <p className="font-body text-xs text-text-muted">
                <span className="text-brand">&gt;</span> Response time: Within 24
                hours
              </p>
              <p className="mt-1 font-body text-xs text-text-muted">
                <span className="text-brand">&gt;</span> Availability: Mon-Fri,
                9AM-6PM IST
              </p>
              <p className="mt-1 font-body text-xs text-text-muted">
                <span className="text-brand">&gt;</span> Incident response: 24/7
                for active clients
              </p>
            </div>

            {/* Education */}
            <div className="rounded-[4px] border border-[rgba(0,255,65,0.15)] bg-card p-6">
              <p className="mb-2 font-heading text-sm text-brand">
                $ cat education.txt
              </p>
              <p className="font-body text-xs text-text-secondary">
                {personalInfo.education}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
