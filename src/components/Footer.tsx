import { Lock, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border-green py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 font-body text-xs text-text-muted">
            <Lock className="h-3 w-3 text-brand" />
            <span>Connection secured | TLS 1.3 | 256-bit encryption</span>
          </div>

          <p className="font-body text-[10px] text-text-muted">
            &copy; {new Date().getFullYear()} Sarthak Singh. All rights
            reserved.
          </p>

          <a
            href="#"
            className="flex items-center gap-1 font-body text-xs text-text-muted transition-colors hover:text-brand"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3 w-3" />
            <span>top</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
