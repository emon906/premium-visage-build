import roofingImg from "@/assets/roofing.jpg";
import pointingImg from "@/assets/pointing.jpg";
import doffImg from "@/assets/doff.jpg";
import restoreVideo from "@/assets/restore-video.mp4.asset.json";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";
import { Reveal } from "./Reveal";
import { useParallax } from "./useReveal";

/* ── Marquee band ───────────────────────────────────────────── */
export function Marquee() {
  const items = [
    "Slate Roofing",
    "Repointing",
    "DOFF Cleaning",
    "ThermaTech",
    "Chimney Rebuilds",
    "Lead Work",
    "Stone Restoration",
    "Flat Roofing",
  ];
  return (
    <div className="border-y border-border bg-surface py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-sm tracking-[0.22em] text-muted-foreground uppercase">
        {items.map((i) => (
          <span key={i} className="flex items-center gap-10">
            {i}
            <span className="hidden size-1 rounded-full bg-violet md:block" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Services: asymmetric numbered list ─────────────────────── */
const services = [
  {
    n: "01",
    t: "Pitched & Slate Roofing",
    d: "Full re-roofs, slate and tile replacement, ridge and valley renewal, dry verge systems and storm repairs.",
  },
  {
    n: "02",
    t: "Repointing & Brickwork",
    d: "Lime and sand-cement repointing matched to the original mortar, brick replacement and crack stitching.",
  },
  {
    n: "03",
    t: "DOFF & ThermaTech Cleaning",
    d: "Gentle superheated-steam paint, graffiti, moss and carbon removal for stone and heritage facades.",
  },
  {
    n: "04",
    t: "Chimneys, Lead & Gutters",
    d: "Chimney rebuilds and repointing, code-lead flashings, fascias, soffits and full guttering renewal.",
  },
  {
    n: "05",
    t: "Flat & GRP Roofing",
    d: "EPDM rubber, GRP fibreglass and torch-on felt systems for extensions, garages and commercial units.",
  },
  {
    n: "06",
    t: "Stone & Facade Restoration",
    d: "Sandstone repair, indent work, sill and lintel replacement, water-repellent protective treatments.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] font-semibold">
              Six disciplines,
              <br />
              one standard of
              <span className="text-gradient-violet"> finish</span>.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Every job is priced honestly, scaffolded properly and left
              spotless. No subcontracted shortcuts — our own tradesmen, start to
              finish.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-violet"
            >
              Request a survey <span aria-hidden>→</span>
            </a>
          </Reveal>

          <div className="divide-y divide-border">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className="group grid grid-cols-[auto_1fr] gap-6 py-8 transition-colors duration-500 hover:bg-surface/60">
                  <span className="font-display text-sm text-violet">{s.n}</span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold transition-transform duration-500 group-hover:translate-x-1.5">
                      {s.t}
                    </h3>
                    <p className="mt-3 max-w-lg text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Roofing: image left, dark editorial copy right ─────────── */
export function Roofing() {
  const { ref, offset } = useParallax<HTMLDivElement>(40);
  return (
    <section id="roofing" className="relative overflow-hidden py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div
            ref={ref}
            className="relative overflow-hidden rounded-sm shadow-deep"
          >
            <img
              src={roofingImg}
              alt="Roofer laying slate tiles with fresh mortar bedding"
              loading="lazy"
              width={1440}
              height={1088}
              className="aspect-4/3 w-full object-cover"
              style={{ transform: `translate3d(0,${offset * 0.25}px,0) scale(1.06)` }}
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 veil" />
            <div className="absolute bottom-6 left-6">
              <p className="text-xs tracking-[0.25em] text-violet uppercase">
                Roofing
              </p>
              <p className="font-display text-xl font-semibold">
                Watertight, first time
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Roofing</p>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] font-semibold">
            Roofs that shrug off a Pennine winter.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Oldham weather is unforgiving — driving rain, freeze-thaw and wind
            uplift. We build for it: breathable membranes, mechanically fixed
            slates, properly bedded ridges and code-4 lead where cheaper trades
            use flashband.
          </p>
          <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {[
              ["Full re-roofs", "Strip, felt, batten, re-slate"],
              ["Storm repairs", "Rapid make-safe callouts"],
              ["Ridge & verge", "Dry-fix, no mortar failure"],
              ["Lead work", "Hand-dressed code lead"],
            ].map(([t, d]) => (
              <div key={t} className="border-t border-border pt-4">
                <dt className="font-display font-semibold">{t}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{d}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Cinematic full-width video band ───────────────────────── */
export function CinematicBand() {
  return (
    <section className="relative h-[80svh] overflow-hidden">
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={restoreVideo.url} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/55" />
      <div className="absolute inset-0 veil" />
      <div className="relative mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <Reveal>
          <p className="eyebrow">Craft in motion</p>
          <p className="mt-6 font-display text-[clamp(1.6rem,4.2vw,3.4rem)] leading-[1.1] font-semibold">
            “We don't cover problems up.
            <span className="text-gradient-violet">
              {" "}
              We take them back to stone
            </span>{" "}
            and rebuild properly.”
          </p>
          <p className="mt-8 text-sm tracking-[0.25em] text-muted-foreground uppercase">
            SK Quality Construction Ltd
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Pointing: dark panel with big macro image ─────────────── */
export function Pointing() {
  return (
    <section id="pointing" className="relative bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Pointing</p>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] font-semibold">
                The joint is the weakest point. We make it the strongest.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Failed pointing lets water into the wall and damp into the room.
              We rake out by hand, never with an angle grinder scar, then match
              mortar for colour, strength and profile.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <img
              src={pointingImg}
              alt="Trowel pressing fresh mortar into brickwork joints"
              loading="lazy"
              width={1440}
              height={1088}
              className="h-full w-full rounded-sm object-cover shadow-deep"
            />
          </Reveal>
          <div className="grid gap-6">
            {[
              [
                "Hand raking",
                "Joints cut back to a sound depth without damaging brick arrises.",
              ],
              [
                "Matched mortar",
                "Lime or NHL mixes for period stone; correct sand-cement for modern brick.",
              ],
              [
                "Weather-struck finish",
                "Profiled to shed water, brushed off crisp, no smeared faces.",
              ],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 90}>
                <div className="h-full rounded-sm border border-border bg-background p-7">
                  <h3 className="font-display text-xl font-semibold">{t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── DOFF: video + image side by side ──────────────────────── */
export function Doff() {
  return (
    <section id="doff" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">DOFF · ThermaTech</p>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] font-semibold">
              Paint removal without touching the stone.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Superheated low-pressure steam lifts masonry paint, render residue,
              graffiti, algae and 150 years of soot — no chemicals, no grit
              blasting, no lost detail. Conservation-safe on listed facades.
            </p>
            <ul className="mt-8 grid gap-3">
              {[
                "Up to 150°C at the nozzle, low pressure at the surface",
                "Safe on sandstone, brick, terracotta and lime render",
                "Kills spores — surfaces stay cleaner for longer",
                "Fully insured, scaffold or MEWP access",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal>
              <video
                className="aspect-3/4 w-full rounded-sm object-cover shadow-violet"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={heroVideoAsset.url} type="video/mp4" />
              </video>
            </Reveal>
            <Reveal delay={140}>
              <img
                src={doffImg}
                alt="Operator using DOFF steam system on a Victorian sandstone facade"
                loading="lazy"
                width={1440}
                height={1088}
                className="aspect-3/4 w-full rounded-sm object-cover shadow-deep sm:mt-12"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
