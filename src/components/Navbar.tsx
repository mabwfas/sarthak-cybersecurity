import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { navLinks } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-green bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-heading text-lg text-brand neon-text transition-opacity hover:opacity-80"
        >
          <Terminal className="h-5 w-5" />
          <span className="hidden sm:inline">&gt; sarthak_singh</span>
          <span className="sm:hidden">&gt; ss</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-xs uppercase tracking-wider text-text-secondary transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-[4px] border border-brand bg-transparent px-4 py-1.5 font-heading text-xs uppercase text-brand shadow-[0_0_10px_rgba(0,255,65,0.15)] transition-all hover:bg-brand/10 hover:shadow-[0_0_20px_rgba(0,255,65,0.25)] lg:inline-block"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-brand lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border-green bg-bg/95 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-[4px] px-3 py-2 font-body text-sm text-text-secondary transition-colors hover:bg-surface hover:text-brand"
                  >
                    &gt; {link.label.toLowerCase()}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-[4px] border border-brand px-3 py-2 text-center font-heading text-sm text-brand"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
