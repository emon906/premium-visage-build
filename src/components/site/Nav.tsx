import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#roofing", label: "Roofing" },
  { href: "#pointing", label: "Pointing" },
  { href: "#doff", label: "DOFF" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "border-b border-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-sm bg-[image:var(--gradient-violet)] font-display text-sm font-bold text-primary-foreground shadow-violet">
            SK
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold tracking-tight">
              SK Quality Construction
            </span>
            <span className="block text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
              Oldham · Manchester
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-violet after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+447946345554"
            className="hidden rounded-sm border border-border px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:border-violet hover:text-violet sm:inline-block"
          >
            +44 7946 345554
          </a>
          <a
            href="#contact"
            className="rounded-sm bg-[image:var(--gradient-violet)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-violet transition-transform duration-300 hover:-translate-y-0.5"
          >
            Free Quote
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-sm border border-border lg:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-5 bg-foreground" />
              <span className="block h-px w-5 bg-foreground" />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mt-3 grid gap-1 border-t border-border bg-surface px-6 py-4 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
