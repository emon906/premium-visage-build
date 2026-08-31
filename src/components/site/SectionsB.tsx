import { useState } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import manchesterImg from "@/assets/manchester.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { Reveal } from "./Reveal";
import { useParallax } from "./useReveal";

/* ── About: overlapping image + offset text ────────────────── */
export function About() {
  const { ref, offset } = useParallax<HTMLDivElement>(50);
  return (
    <section id="about" className="relative bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">About us</p>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] font-semibold">
              A local firm with a heritage-grade standard.
            </h2>
            <p className="mt-6 text-muted-foreground">
              SK Quality Construction Ltd works across Oldham and Greater
              Manchester on everything from terraced re-roofs to listed stone
              facades. We're small enough that the person who quotes your job is
              on site while it's done — and experienced enough to be trusted with
              buildings that can't be replaced.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8">
              {[
                ["Fully insured", "£5m public liability"],
                ["Written guarantees", "Up to 20 years on re-roofs"],
                ["No deposits", "Pay on completion"],
                ["Free surveys", "Photo report included"],
              ].map(([t, d]) => (
                <div key={t}>
                  <p className="font-display font-semibold text-violet">{t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-7">
            <div ref={ref} className="relative overflow-hidden rounded-sm">
              <img
                src={manchesterImg}
                alt="Manchester skyline at night in deep violet tones"
                loading="lazy"
                width={1920}
                height={1088}
                className="aspect-16/10 w-full object-cover"
                style={{ transform: `translate3d(0,${offset * 0.2}px,0) scale(1.08)` }}
              />
              <div className="absolute inset-0 veil" />
              <div className="absolute bottom-8 left-8 max-w-xs">
                <p className="font-display text-2xl font-semibold">
                  Oldham born, Manchester wide.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Why Us: bordered ledger rows ──────────────────────────── */
export function WhyUs() {
  const rows = [
    ["Own tradesmen", "No subcontracted labour turning up unannounced."],
    ["Fixed written quotes", "Priced from a survey, not a guess over the phone."],
    ["Scaffold as standard", "Safe access on every pitched roof — never ladders only."],
    ["Photo evidence", "Before, during and after images of every hidden detail."],
    ["Clean sites", "Skips, sheeting and a swept street at the end of each day."],
  ];
  return (
    <section id="why" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Why SK</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] font-semibold">
              Five reasons clients stop getting other quotes.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14">
          {rows.map(([t, d], i) => (
            <Reveal key={t} delay={i * 70}>
              <div className="group grid items-baseline gap-2 border-t border-border py-7 md:grid-cols-[6rem_1fr_1.2fr] md:gap-8">
                <span className="font-display text-sm text-violet">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold transition-colors duration-300 group-hover:text-violet">
                  {t}
                </h3>
                <p className="text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}

/* ── Process: horizontal timeline ──────────────────────────── */
export function Process() {
  const steps = [
    ["Call & consult", "We talk through the problem and book a visit that suits you."],
    ["Survey & report", "Roof-level inspection with photos and an honest verdict."],
    ["Fixed quote", "Itemised, written, no pressure and no hidden extras."],
    ["The works", "Scaffold up, job done to spec, site kept clean daily."],
    ["Sign-off", "Walk-round, photo pack and your written guarantee."],
  ];
  return (
    <section id="process" className="relative overflow-hidden bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">Process</p>
          <h2 className="mt-5 max-w-xl font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] font-semibold">
            From first call to final walk-round.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-5">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 100}>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full border border-violet font-display text-xs text-violet">
                    {i + 1}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Projects: editorial mixed grid ────────────────────────── */
export function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] font-semibold">
                Recent projects.
              </h2>
            </div>
            <a
              href="#contact"
              className="font-semibold text-violet hover:underline"
            >
              Discuss yours →
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <figure className="group relative overflow-hidden rounded-sm">
              <img
                src={project1}
                alt="Full slate roof replacement on a Manchester mill building"
                loading="lazy"
                width={1200}
                height={1504}
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 veil opacity-80" />
              <figcaption className="absolute bottom-7 left-7">
                <p className="text-xs tracking-[0.25em] text-violet uppercase">
                  Ancoats, Manchester
                </p>
                <p className="mt-2 font-display text-2xl font-semibold">
                  Mill conversion re-roof — 1,400m² natural slate
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-6">
            {[
              [project2, "Chorlton", "Full front elevation repointing", "Lime mortar, colour-matched to 1890 original"],
              [project3, "Saddleworth", "Chimney rebuild & code-4 lead", "Stone reclaimed and reset, new flashings"],
            ].map(([img, place, title, sub], i) => (
              <Reveal key={place as string} delay={i * 120}>
                <figure className="group relative overflow-hidden rounded-sm">
                  <img
                    src={img as string}
                    alt={title as string}
                    loading="lazy"
                    width={1200}
                    height={912}
                    className="aspect-16/11 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 veil opacity-85" />
                  <figcaption className="absolute bottom-6 left-6">
                    <p className="text-xs tracking-[0.25em] text-violet uppercase">
                      {place as string}
                    </p>
                    <p className="mt-1.5 font-display text-xl font-semibold">
                      {title as string}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {sub as string}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Before / After slider ─────────────────────────────────── */
export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <section id="before-after" className="bg-surface py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Before &amp; after</p>
            <h2 className="mx-auto mt-5 max-w-xl font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] font-semibold">
              Drag to see 120 years of soot disappear.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-12 overflow-hidden rounded-sm shadow-deep select-none">
            <img
              src={afterImg}
              alt="Restored sandstone facade after DOFF cleaning"
              loading="lazy"
              width={1200}
              height={912}
              className="aspect-4/3 w-full object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img
                src={beforeImg}
                alt="Blackened neglected stone facade before restoration"
                loading="lazy"
                width={1200}
                height={912}
                className="h-full w-[100vw] max-w-none object-cover"
                style={{ width: `${(100 / pos) * 100}%` }}
              />
            </div>
            <div
              className="pointer-events-none absolute inset-y-0 w-px bg-violet"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[image:var(--gradient-violet)] text-sm font-bold text-primary-foreground shadow-violet">
                ↔
              </span>
            </div>
            <input
              type="range"
              min={4}
              max={96}
              value={pos}
              aria-label="Before and after comparison"
              onChange={(e) => setPos(Number(e.target.value))}
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            />
            <span className="absolute top-5 left-5 rounded-sm bg-background/70 px-3 py-1 text-xs tracking-[0.2em] uppercase">
              Before
            </span>
            <span className="absolute top-5 right-5 rounded-sm bg-background/70 px-3 py-1 text-xs tracking-[0.2em] uppercase">
              After
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Stats band ────────────────────────────────────────────── */
export function Stats() {
  const stats = [
    ["18+", "Years on Northern roofs"],
    ["950+", "Homes & buildings completed"],
    ["20yr", "Workmanship guarantee"],
    ["4.9★", "Average client rating"],
  ];
  return (
    <section
      id="stats"
      className="relative overflow-hidden border-y border-border py-20"
      style={{ background: "var(--gradient-violet)" }}
    >
      <div className="absolute inset-0 bg-background/78" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([n, l], i) => (
          <Reveal key={l} delay={i * 90}>
            <div className="text-center lg:text-left">
              <p className="font-display text-[clamp(2.6rem,6vw,4.2rem)] leading-none font-semibold text-gradient-violet">
                {n}
              </p>
              <p className="mt-3 text-sm tracking-[0.18em] text-muted-foreground uppercase">
                {l}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Reviews: staggered quote columns ──────────────────────── */
export function Reviews() {
  const reviews = [
    [
      "They stripped our roof, found rotten battens the last firm had covered over, showed me photos and fixed it within the original price. Faultless.",
      "Helen R.",
      "Royton, Oldham",
    ],
    [
      "The DOFF clean on our sandstone front was unbelievable — it looks like a different house. Neighbours have booked them too.",
      "Imran S.",
      "Didsbury, Manchester",
    ],
    [
      "Repointed the whole gable in lime mortar. Tidy, polite lads, dust sheeted everything and the colour match is perfect.",
      "Dave M.",
      "Uppermill, Saddleworth",
    ],
    [
      "Storm took three slates off at 8pm. Made safe the same night, permanent repair two days later. Genuinely reliable.",
      "Claire T.",
      "Chadderton",
    ],
  ];
  return (
    <section id="reviews" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">Client words</p>
          <h2 className="mt-5 max-w-xl font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] font-semibold">
            Reputation earned street by street.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {reviews.map(([q, n, p], i) => (
            <Reveal key={n} delay={i * 90}>
              <blockquote
                className={`rounded-sm border-l-2 border-violet bg-surface p-8 ${
                  i % 2 === 1 ? "md:mt-10" : ""
                }`}
              >
                <p className="font-display text-lg leading-relaxed">“{q}”</p>
                <footer className="mt-6 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{n}</span> ·{" "}
                  {p}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Service areas ─────────────────────────────────────────── */
export function Areas() {
  const areas = [
    "Oldham",
    "Royton",
    "Chadderton",
    "Shaw",
    "Saddleworth",
    "Uppermill",
    "Failsworth",
    "Middleton",
    "Rochdale",
    "Ashton-under-Lyne",
    "Manchester City",
    "Didsbury",
    "Chorlton",
    "Prestwich",
    "Salford",
    "Stockport",
  ];
  return (
    <section id="areas" className="relative bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Service areas</p>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] font-semibold">
              Based in Oldham. Working across Greater Manchester.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Not on the list? If you're within roughly 25 miles of Oldham, we'll
              still come and look.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-3">
              {areas.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors duration-300 hover:border-violet hover:text-violet"
                >
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ accordion ─────────────────────────────────────────── */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    [
      "How much does a re-roof cost in Oldham?",
      "A standard two-bed terrace typically lands between £4,500 and £8,000 depending on slate choice, access and whether battens and felt need replacing. You'll get a fixed written figure after the survey.",
    ],
    [
      "Is DOFF cleaning safe on listed stone?",
      "Yes. DOFF and ThermaTech use low-pressure superheated steam with no chemicals or abrasives, which is why conservation officers routinely accept it on listed and heritage masonry.",
    ],
    [
      "Do I need scaffolding?",
      "For any pitched roof work, yes — it's safer and gives a better finish. Scaffold is included and priced in your quote, never added later.",
    ],
    [
      "How long does repointing take?",
      "A typical gable or front elevation takes three to five days. Full houses usually run one to two weeks depending on weather and mortar curing.",
    ],
    [
      "Do you offer a guarantee?",
      "Every job carries a written workmanship guarantee — up to 20 years on full re-roofs, 10 years on repointing.",
    ],
    [
      "Do you take a deposit?",
      "No. You pay on satisfactory completion. Materials for large heritage jobs are the only exception, and that's agreed upfront.",
    ],
  ];
  return (
    <section id="faq" className="py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold">
              Straight answers.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12">
          {faqs.map(([q, a], i) => (
            <Reveal key={q} delay={i * 60}>
              <div className="border-t border-border">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-semibold">{q}</span>
                  <span
                    className={`text-violet transition-transform duration-300 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-500"
                  style={{
                    gridTemplateRows: open === i ? "1fr" : "0fr",
                    opacity: open === i ? 1 : 0,
                  }}
                >
                  <p className="min-h-0 pr-10 pb-6 text-muted-foreground">{a}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}

/* ── Contact ───────────────────────────────────────────────── */
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div
        className="absolute -top-32 right-0 -z-10 size-[36rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-violet)" }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-5 font-display text-[clamp(2.1rem,5vw,4rem)] leading-[1.02] font-semibold">
              Let's look at your
              <span className="text-gradient-violet"> roof</span>.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Free survey, photo report and a fixed written quote. Usually on
              site within 48 hours across Oldham and Manchester.
            </p>
            <div className="mt-10 grid gap-6">
              <a
                href="tel:+447946345554"
                className="group flex items-center justify-between gap-6 border-t border-border pt-5"
              >
                <span>
                  <span className="block text-xs tracking-[0.25em] text-muted-foreground uppercase">
                    Phone
                  </span>
                  <span className="mt-1 block font-display text-2xl font-semibold group-hover:text-violet">
                    +44 7946 345554
                  </span>
                </span>
                <span className="text-violet transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <div className="border-t border-border pt-5">
                <span className="block text-xs tracking-[0.25em] text-muted-foreground uppercase">
                  Hours
                </span>
                <span className="mt-1 block font-display text-lg">
                  Mon–Sat, 7am – 7pm · Emergency callouts anytime
                </span>
              </div>
              <div className="border-t border-border pt-5">
                <span className="block text-xs tracking-[0.25em] text-muted-foreground uppercase">
                  Based
                </span>
                <span className="mt-1 block font-display text-lg">
                  Oldham, Greater Manchester
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <form
              className="rounded-sm border border-border bg-surface p-8"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "tel:+447946345554";
              }}
            >
              <div className="grid gap-5">
                {[
                  ["Name", "text", "Your name"],
                  ["Phone", "tel", "Best number to reach you"],
                  ["Postcode", "text", "e.g. OL1"],
                ].map(([label, type, ph]) => (
                  <label key={label} className="block">
                    <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                      {label}
                    </span>
                    <input
                      required
                      type={type}
                      placeholder={ph}
                      className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-violet"
                    />
                  </label>
                ))}
                <label className="block">
                  <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    What do you need?
                  </span>
                  <textarea
                    rows={4}
                    placeholder="Roofing, repointing, DOFF cleaning…"
                    className="mt-2 w-full resize-none rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-violet"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-sm bg-[image:var(--gradient-violet)] px-6 py-4 font-semibold text-primary-foreground shadow-violet transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Request my free survey
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Prefer to talk? Call +44 7946 345554.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-semibold">
              SK Quality Construction Ltd
            </p>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Roofing &amp; pointing specialists serving Oldham and Greater
              Manchester. Restoration, DOFF cleaning and heritage masonry.
            </p>
            <a
              href="tel:+447946345554"
              className="mt-5 inline-block font-display text-lg font-semibold text-violet"
            >
              +44 7946 345554
            </a>
          </div>
          <div>
            <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase">
              Services
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {[
                ["Roofing", "#roofing"],
                ["Pointing", "#pointing"],
                ["DOFF / ThermaTech", "#doff"],
                ["Projects", "#projects"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="hover:text-violet">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase">
              Company
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {[
                ["About", "#about"],
                ["Why us", "#why"],
                ["Service areas", "#areas"],
                ["FAQ", "#faq"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="hover:text-violet">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 hairline" />
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} SK Quality Construction Ltd. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
