"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu({ nav, utility }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="relative z-[60] flex h-11 items-center gap-3 text-[13px] font-medium uppercase tracking-[0.04em]"
      >
        <span className={open ? "text-paper" : ""}>{open ? "Close" : "Menu"}</span>
        <span className="relative block h-3 w-6" aria-hidden="true">
          <span className={`absolute left-0 h-px w-6 bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45 text-paper" : "top-0"}`} />
          <span className={`absolute left-0 h-px w-6 bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45 text-paper" : "top-3"}`} />
        </span>
      </button>

      <div
        id="mobile-menu"
        className={`on-coal fixed inset-0 z-[55] flex flex-col bg-coal px-5 pb-8 pt-24 text-paper transition-all duration-500 ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-1 flex-col" aria-label="Mobile">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-t border-paper/30 py-5 text-[34px] font-medium leading-none tracking-[-0.03em]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/request-demo"
            onClick={() => setOpen(false)}
            className="btn btn-accent mt-8 w-full"
          >
            Request Demo <span aria-hidden="true">↗</span>
          </Link>
        </nav>
        <div className="mt-8 flex gap-6 text-[14px] opacity-70">
          {utility.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
