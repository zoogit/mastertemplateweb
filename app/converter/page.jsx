import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductPageHero from "@/components/ProductPageHero";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import SectionLabel from "@/components/SectionLabel";
import Image from "next/image";

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

export default function ConverterPage() {
  return (
    <>
      <Header />
      <main>
        <ProductPageHero
          title="Master Template Converter"
          copy="Master Template Converter helps teams move PowerPoint content from one file into the template and styling of another. It is built for marketing, finance, consulting, agency, and presentation teams that spend too much time rebuilding slides by hand."
          bullets={heroBullets}
          topImage="/assets/images/13249.jpg"
          topImageClassName="object-top"
          showcaseImage="/assets/converter-overview.png"
          showcaseVideoMp4="/assets/video/Comp%201.mp4"
          ctaHref="/request-demo"
          ctaLabel="Request a Demo"
        />

        <section className="bg-[linear-gradient(to_bottom,#1C1C1C_0%,#1C1C1C_46%,#F1F2F3_46%,#F1F2F3_100%)] py-20">
          <div className="container-page">
            <div className="mx-auto mb-12 max-w-6xl text-center text-white">
              <h2 className="text-[34px] font-medium leading-[1.12] md:text-[54px]">
                We know manual template conversion eats up production time.
              </h2>
            </div>

            <div className="bg-white px-8 py-12 md:px-14 lg:px-20 lg:py-20">
              <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_0.85fr]">
                <div>
                  <h3 className="text-center text-[25px] font-bold leading-tight text-coal md:text-left md:text-[31px]">
                    From 30 minutes a slide to 30 seconds.
                  </h3>
                  <div className="mt-8 space-y-7">
                    <div className="border-t border-coal/16 pt-5">
                      <p className="text-sm font-semibold uppercase text-blaze">Manual process</p>
                      <p className="mt-2 text-sm leading-7 text-coal/70">
                        Teams copy content into a new file, then adjust every table, graph, line weight, text box, image, color, and layout detail by hand.
                      </p>
                    </div>
                    <div className="border-t border-coal/16 pt-5">
                      <p className="text-sm font-semibold uppercase text-blaze">Converter</p>
                      <p className="mt-2 text-sm leading-7 text-coal/70">
                        Master Template Converter moves slide content into the new template and handles the tedious styling work.
                      </p>
                    </div>
                    <div className="border-t border-coal/16 pt-5">
                      <p className="text-sm font-semibold uppercase text-blaze">Final output</p>
                      <p className="mt-2 text-sm leading-7 text-coal/70">
                        Your team gets a converted PPT that is ready to review, polish, and send forward.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[320px] overflow-hidden bg-paper lg:min-h-[460px]">
                  <Image
                    src="/assets/images/55.png"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper py-20">
          <div className="container-page">
            <h2 className="mb-10 text-3xl font-bold text-coal">Key features</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel className="mb-6">Use cases</SectionLabel>
              <h2 className="text-4xl font-bold leading-tight text-coal">
                For teams that live in PowerPoint.
              </h2>
              <p className="mt-6 text-sm leading-7 text-coal/70">
                Converter is useful any time a deck needs to move into a new template, a new brand system, or a cleaner production format without rebuilding every slide from scratch.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {useCases.map((useCase) => (
                <div key={useCase} className="border border-coal/10 bg-paper p-6 text-lg font-semibold leading-snug text-coal">
                  {useCase}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-page">
            <SectionLabel className="mb-14">Features</SectionLabel>
            <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
              <div>
                <div className="rounded-lg bg-black p-7">
                  <div className="relative aspect-[2.1] overflow-hidden bg-white">
                    <Image
                      src="/assets/converter-overview.png"
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="mt-7 text-center text-2xl font-semibold text-black">
                  Choose your layouts
                </h3>
              </div>

              <div>
                <div className="rounded-lg bg-black p-7">
                  <div className="relative aspect-[2.1] overflow-hidden bg-white">
                    <Image
                      src="/assets/quality-control.png"
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="mt-7 text-center text-2xl font-semibold text-black">
                  Total control over styling
                </h3>
              </div>
            </div>

            <div className="mt-14 flex justify-center">
              <div className="w-full max-w-[580px]">
                <div className="rounded-lg bg-black p-7">
                  <div className="relative aspect-[1.65] overflow-hidden bg-white">
                    <Image
                      src="/assets/layout-mapping.png"
                      alt=""
                      fill
                      sizes="(min-width: 768px) 580px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="mt-7 text-center text-2xl font-semibold text-black">
                  Master the details
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper py-20">
          <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.78fr]">
            <div>
              <SectionLabel className="mb-12">Testimonial</SectionLabel>
              <figure className="max-w-3xl">
                <blockquote className="text-[30px] font-medium leading-[1.22] text-coal md:text-[42px]">
                  "We used to spend days moving client decks into new templates by hand. Now we drop them into Master Template Converter and get the heavy lifting done in less than fifteen minutes. It honestly changed how we plan production."
                </blockquote>
                <figcaption className="mt-8 text-lg font-medium text-coal/70">
                  Presentation Design Lead
                </figcaption>
              </figure>
            </div>
            <div className="relative min-h-[320px] overflow-hidden bg-white shadow-soft lg:min-h-[460px]">
              <Image
                src="/assets/images/tero1.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-coal py-20 text-white">
          <div className="container-page">
            <SectionLabel className="mb-4 bg-blaze text-white">Workflow</SectionLabel>
            <h2 className="mb-10 text-4xl font-bold">From source deck to converted output</h2>
            <div className="grid gap-4 md:grid-cols-5">
              {workflow.map((step, index) => (
                <div key={step} className="border border-white/10 bg-white/5 p-5">
                  <div className="mb-6 text-sm font-bold text-peach">0{index + 1}</div>
                  <h3 className="text-lg font-bold">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Buy Master Template Converter"
          copy="Cut the manual production work and convert PowerPoint decks into new templates in minutes. Deck content is not saved or committed to memory. Converter does the conversion, gives you the converted PowerPoint file, and leaves your content where it belongs."
          buttonLabel="Buy the Product"
        />
      </main>
      <Footer />
    </>
  );
}
