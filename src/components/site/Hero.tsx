import heroPoster from "@/assets/hero-house.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import { useParallax } from "./useReveal";

const marks = [
  "Slate & tile roofing",
  "Lime & sand-cement repointing",
  "DOFF / ThermaTech cleaning",
  "Chimney & lead work",
  "Stone restoration",
];

export function Hero() {
  const { ref, offset } = useParallax<HTMLDivElement>(70);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden grain">
      <div ref={ref} className="absolute inset-0 -z-10">
        <video
          className="size-full scale-110 object-cover"
          style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.12)` }}
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
        >
          <source src={heroVideo.url} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 -z-10 veil" />
      <div
        className="absolute -top-40 -left-40 -z-10 size-[42rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-violet)" }}
      />

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pt-40 pb-14">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <p className="eyebrow animate-float">
              Roofing &amp; Pointing Specialists
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.92] font-semibold">
              Built to
              <br />
              <span className="text-gradient-violet">outlast</span> the
              <br />
              Northern sky.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              SK Quality Construction Ltd restores and protects Oldham &amp;
              Manchester homes and heritage buildings — precision roofing,
              flawless repointing and specialist DOFF paint removal, finished to
              a standard you can see from the street.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="tel:+447946345554"
                className="group inline-flex items-center gap-3 rounded-sm bg-[image:var(--gradient-violet)] px-7 py-4 font-semibold text-primary-foreground shadow-violet transition-transform duration-300 hover:-translate-y-1"
              >
                Call +44 7946 345554
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-sm border border-border px-7 py-4 font-semibold transition-colors duration-300 hover:border-violet hover:text-violet"
              >
                See the work
              </a>
            </div>
          </div>

          <div className="lg:pb-4">
            <div className="glass rounded-sm p-6">
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Covering
              </p>
              <p className="mt-2 font-display text-2xl font-semibold">
                Oldham &amp; Greater Manchester
              </p>
              <div className="my-5 hairline" />
              <ul className="grid gap-2 text-sm text-muted-foreground">
                {marks.map((m) => (
                  <li key={m} className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-violet" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center gap-4 text-xs tracking-[0.25em] text-muted-foreground uppercase">
          <span className="animate-scroll-line block h-10 w-px bg-violet" />
          Scroll
        </div>
      </div>
    </section>
  );
}
