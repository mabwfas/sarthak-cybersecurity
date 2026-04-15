import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Mail } from "lucide-react";
import { personalInfo, bio, stats } from "../data";

/* ------------------------------------------------------------------ */
/*  Typing animation hook                                              */
/* ------------------------------------------------------------------ */

function useTypingAnimation(text: string, speed = 40, startDelay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let idx = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      const type = () => {
        if (idx < text.length) {
          setDisplayed(text.slice(0, idx + 1));
          idx++;
          timeout = setTimeout(type, speed);
        } else {
          setDone(true);
        }
      };
      type();
    };

    timeout = setTimeout(startTyping, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

/* ------------------------------------------------------------------ */
/*  Stagger animation variants                                         */
/* ------------------------------------------------------------------ */

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ------------------------------------------------------------------ */
/*  Hero Component                                                     */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const headline = personalInfo.name;
  const { displayed, done } = useTypingAnimation(headline, 50, 800);

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          {/* Terminal whoami */}
          <motion.div variants={item} className="mb-6">
            <span className="font-body text-sm text-text-muted">
              <span className="text-brand">$</span> whoami
            </span>
          </motion.div>

          {/* Name — typing animation */}
          <motion.h1
            variants={item}
            className="mb-2 font-heading text-4xl leading-tight font-bold text-brand sm:text-5xl lg:text-6xl neon-text-strong"
          >
            {displayed}
            <span
              className={`inline-block w-[0.55em] border-r-[3px] border-brand ${
                done ? "cursor-blink" : ""
              }`}
            >
              &nbsp;
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={item}
            className="mb-6 font-heading text-lg text-cyan sm:text-xl neon-text-cyan"
          >
            {personalInfo.title}
          </motion.p>

          {/* Bio */}
          <motion.div variants={item} className="mb-10 max-w-3xl">
            <p className="font-body text-xs leading-relaxed text-text-secondary sm:text-sm">
              <span className="text-brand">&gt;</span> {bio}
            </p>
          </motion.div>

          {/* Stats — terminal readout style */}
          <motion.div
            variants={item}
            className="mb-10 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-[4px] border border-[rgba(0,255,65,0.15)] bg-surface p-4"
              >
                <p className="font-heading text-xl text-brand sm:text-2xl neon-text">
                  {s.value}
                </p>
                <p className="mt-1 font-body text-[10px] uppercase tracking-wider text-text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Cert badges */}
          <motion.div variants={item} className="mb-10 flex flex-wrap gap-2">
            {["OSCP", "CEH", "Security+"].map((c) => (
              <span
                key={c}
                className="rounded-[4px] border border-[rgba(0,255,65,0.3)] bg-[rgba(0,255,65,0.05)] px-3 py-1 font-heading text-xs text-brand"
              >
                {c}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons — outline style */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-[4px] border border-brand bg-transparent px-6 py-2.5 font-heading text-sm text-brand shadow-[0_0_12px_rgba(0,255,65,0.15)] transition-all hover:bg-brand/10 hover:shadow-[0_0_24px_rgba(0,255,65,0.25)]"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </motion.a>
            <motion.a
              href="#cases"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-[4px] border border-[rgba(0,255,65,0.15)] bg-transparent px-6 py-2.5 font-heading text-sm text-text-primary transition-all hover:border-[rgba(0,255,65,0.3)] hover:text-brand"
            >
              View Case Studies
              <ChevronRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
