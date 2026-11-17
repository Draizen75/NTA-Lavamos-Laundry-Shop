"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Menu, Phone, X } from "lucide-react";

type MobileNavProps = {
  phoneHref: string;
  facebookHref: string;
};

const links = [
  { href: "#services", label: "Services & rates" },
  { href: "#gallery", label: "Our shop" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Location & hours" },
];

export function MobileNav({ phoneHref, facebookHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <div className="relative flex items-center gap-2 lg:hidden">
      <a
        href={phoneHref}
        className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-primary px-3.5 text-xs font-bold text-white transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Phone size={15} aria-hidden="true" />
        <span>Call</span>
      </a>
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        onClick={() => setOpen((value) => !value)}
        className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-white text-brand-deep transition hover:bg-brand-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      {open && (
        <div
          id="mobile-navigation-panel"
          className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(19rem,calc(100vw-2rem))] rounded-2xl border border-border bg-white p-3 shadow-soft"
        >
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold text-brand-deep transition hover:bg-brand-mint hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-2 border-t border-border pt-2">
            <a
              href={facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm font-semibold text-brand-deep transition hover:bg-brand-mint hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Facebook size={16} aria-hidden="true" />
              Visit Facebook page
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
