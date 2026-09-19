import Image from "next/image";
import ProductHero from "@/components/ProductHero";
import FeatureGrid from "@/components/FeatureGrid";
import Showcase from "@/components/Showcase";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export const metadata = { title: "Master Template Converter" };

const workflow = [
  "Upload the source deck",
  "Choose the new template",
  "Convert the slide content",
  "Review the converted file",
  "Download the new PPT"
];

const features = [
  {
    title: "Slide content conversion",
    copy: "Move content from an existing PowerPoint slide into the template and styling of another deck."
  },
  {
    title: "Less manual cleanup",
    copy: "Reduce the tedious work of adjusting tables, graphs, line weights, text styles, and slide elements one by one."
  },
  {
    title: "Converted PPT output",
    copy: "Get a converted PowerPoint file your team can review, polish, and send forward."
  }
];

const heroBullets = [
  "Convert one deck into another template",
  "Reduce slide by slide rebuild work",
  "Help with tables, charts, graphs, and styling",
  "Turn 30 minutes per slide into about 30 seconds",
  "Built for marketing, finance, agencies, and presentation teams"
];

const useCases = [
  "Marketing teams refreshing campaign decks",
  "Finance teams updating recurring reports",
  "Consulting and agency teams moving client decks",
  "Brand teams standardizing old presentations"
];

const process = [
  {
    label: "Manual process",
    copy: "Teams copy content into a new file, then adjust every table, graph, line weight, text box, image, color, and layout detail by hand."
  },
  {
    label: "Converter",
    copy: "Master Template Converter moves slide content into the new template and handles the tedious styling work."
  },
  {
    label: "Final output",
    copy: "Your team gets a converted PPT that is ready to review, polish, and send forward."
  }
];

export default function ConverterPage() {
  return (
    <>
      <ProductHero
        title="Master Template Converter"
        copy="Master Template Converter helps teams move PowerPoint content from one file into the template and styling of another. It is built for marketing, finance, consulting, agency, and presentation teams that spend too much time rebuilding slides by hand."
        bullets={heroBullets}
        topImage="/assets/images/13249.jpg"
        topImageClassName="object-top"
        image="/assets/converter-overview.png"
        video="/assets/video/Comp%201.mp4"
        ctaHref="/request-demo"
        ctaLabel="Request a Demo"
      />

      {/* Problem statement */}
      <section className="on-coal bg-coal text-paper">
        <div className="wrap py-16 md:py-28">
          <Reveal>
            <h2 className="h2 max-w-[20ch]">
              We know manual template conversion <span className="accent">eats up production time.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-6">
              <Reveal>
                <h3 className="h3">From 30 minutes a slide to 30 seconds.</h3>
              </Reveal>
              <div className="mt-10">
                {process.map((row, i) => (
                  <Reveal key={row.label} delay={i * 80} className="rule-t grid gap-3 py-6 sm:grid-cols-[150px_1fr]">
                    <p className="eyebrow accent pt-1">{row.label}</p>
                    <p className="text-[16px] leading-[1.6] text-paper/75">{row.copy}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={120} className="md:col-span-5 md:col-start-8">
              <div className="relative aspect-[4/5] overflow-hidden bg-paper">
                <Image src="/assets/images/55.png" alt="" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FeatureGrid features={features} />

      {/* Use cases */}
      <section className="bg-paper">
        <div className="wrap rule-t py-16 md:py-28">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <Reveal>
                <Eyebrow>Use cases</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="h2 mt-8">For teams that live in PowerPoint.</h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-md text-[16px] leading-[1.6] text-coal/75">
                  Converter is useful any time a deck needs to move into a new template, a new brand system, or a cleaner production format without rebuilding every slide from scratch.
                </p>
              </Reveal>
            </div>
            <ul className="m-0 list-none p-0 md:col-span-6 md:col-start-7">
              {useCases.map((u, i) => (
                <Reveal
                  key={u}
                  as="li"
                  delay={i * 70}
                  className="group flex items-baseline justify-between gap-6 border-t border-coal py-6 text-[24px] font-medium leading-[1.15] tracking-[-0.02em] last:border-b md:py-8 md:text-[30px]"
                >
                  <span>{u}</span>
                  <span className="arrow accent shrink-0 text-[0.8em]" aria-hidden="true">↗</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Showcase />

      {/* Testimonial */}
      <section className="bg-paper">
        <div className="wrap rule-t py-16 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <Reveal>
                <Eyebrow>Testimonial</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <figure className="m-0 mt-10">
                  <blockquote className="m-0 text-[28px] font-medium leading-[1.15] tracking-[-0.025em] md:text-[44px]">
                    "We used to spend days moving client decks into new templates by hand. Now we drop them into Master Template Converter and get the heavy lifting done in less than fifteen minutes. It honestly changed how we plan production."
                  </blockquote>
                  <figcaption className="eyebrow mt-8 text-coal/70">Presentation Design Lead</figcaption>
                </figure>
              </Reveal>
            </div>
            <Reveal delay={160} className="md:col-span-4 md:col-start-9">
              <div className="relative aspect-[4/5] overflow-hidden bg-white">
                <Image src="/assets/images/tero1.png" alt="" fill sizes="(min-width: 768px) 32vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="on-coal bg-coal text-paper">
        <div className="wrap py-16 md:py-28">
          <Reveal>
            <Eyebrow>Workflow</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h2 mt-8 max-w-[18ch]">From source deck to converted output</h2>
          </Reveal>
          <ol className="m-0 mt-14 grid list-none gap-0 p-0 md:mt-24 md:grid-cols-5">
            {workflow.map((step, i) => (
              <Reveal
                key={step}
                as="li"
                delay={i * 80}
                className={`rule-t py-8 md:pb-4 md:pr-6 ${i > 0 ? "md:border-l md:border-paper/35 md:pl-6" : ""}`}
              >
                <div className="text-[44px] font-medium leading-none tracking-[-0.04em] accent md:text-[56px]">0{i + 1}</div>
                <h3 className="mt-8 text-[20px] font-medium leading-[1.2] tracking-[-0.01em] md:mt-14">{step}</h3>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTA
        title="Buy Master Template Converter"
        accent="Converter"
        copy="Cut the manual production work and convert PowerPoint decks into new templates in minutes. Deck content is not saved or committed to memory. Converter does the conversion, gives you the converted PowerPoint file, and leaves your content where it belongs."
        buttonLabel="Buy the Product"
      />
    </>
  );
}
