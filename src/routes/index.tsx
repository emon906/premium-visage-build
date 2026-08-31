import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  Marquee,
  Services,
  Roofing,
  CinematicBand,
  Pointing,
  Doff,
} from "@/components/site/SectionsA";
import {
  About,
  WhyUs,
  Process,
  Projects,
  BeforeAfter,
  Stats,
  Reviews,
  Areas,
  Faq,
  Contact,
  Footer,
} from "@/components/site/SectionsB";

const title =
  "SK Quality Construction Ltd | Roofing & Pointing, Oldham & Manchester";
const description =
  "Specialist roofing, repointing, DOFF & ThermaTech paint removal and stone restoration across Oldham and Greater Manchester. Free surveys, fixed quotes, 20-year guarantees.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Roofing />
        <CinematicBand />
        <Pointing />
        <Doff />
        <About />
        <WhyUs />
        <Process />
        <Projects />
        <BeforeAfter />
        <Stats />
        <Reviews />
        <Areas />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
