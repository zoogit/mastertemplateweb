import ProductHero from "@/components/ProductHero";
import FeatureGrid from "@/components/FeatureGrid";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export const metadata = { title: "Master Template QC" };

const checks = [
  "Styling consistency",
  "Correct font usage",
  "Color consistency",
  "Alignment",
  "Margins",
  "Template usage",
  "Brand consistency",
  "Broken formatting"
];

const features = [
  {
    title: "Consistency scans",
    copy: "Review presentation files for visual inconsistencies before they reach clients or internal stakeholders."
  },
  {
    title: "Brand rule feedback",
    copy: "Identify font, color, layout, and template usage issues that pull slides away from brand standards."
  },
  {
    title: "Actionable QC output",
    copy: "Give designers clear, practical feedback so production review becomes faster and more reliable."
  }
];

const heroBullets = [
  "Scan presentations for visual inconsistencies",
  "Flag typography, color, and spacing issues",
  "Review template usage and brand alignment",
  "Create clearer feedback for production teams",
  "Reduce manual quality-control review time"
];

export default function QualityControllerPage() {
  return (
    <>
      <ProductHero
        title="Master Template QC"
        copy="The Quality Controller scans PowerPoint files and gives QC feedback on consistency, formatting, brand standards, template usage, and common presentation design issues. It gives presentation departments a faster way to catch the small details that create rework before decks reach clients or internal stakeholders."
        bullets={heroBullets}
        note="Coming Soon"
        topImage="/assets/images/117186.jpg"
        image="/assets/quality-control.png"
      />

      <FeatureGrid features={features} />

      <section className="on-coal bg-coal text-paper">
        <div className="wrap py-16 md:py-28">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <Reveal>
                <Eyebrow>What it checks</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="h2 mt-8">A review layer built for presentation production.</h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-md text-[16px] leading-[1.6] text-paper/75">
                  Master Template QC gives presentation departments a faster way to catch the small issues that create rework: inconsistent styles, off-brand colors, broken formatting, missed margins, and layout drift.
                </p>
              </Reveal>
            </div>
            <ul className="m-0 grid list-none grid-cols-2 gap-0 p-0 md:col-span-6 md:col-start-7">
              {checks.map((c, i) => (
                <Reveal
                  key={c}
                  as="li"
                  delay={(i % 4) * 60}
                  className={`flex min-h-[130px] flex-col justify-between border-t border-paper/35 py-5 md:min-h-[160px] ${
                    i % 2 === 1 ? "border-l pl-5" : "pr-5"
                  }`}
                >
                  <span className="h-1 w-8 bg-blaze" aria-hidden="true" />
                  <span className="text-[18px] font-medium leading-[1.15] tracking-[-0.015em] md:text-[24px]">{c}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA title="Put QC feedback into every delivery workflow" accent="every delivery workflow" showButton={false} />
    </>
  );
}
