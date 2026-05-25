import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductPageHero from "@/components/ProductPageHero";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import SectionLabel from "@/components/SectionLabel";

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
      <Header />
      <main>
        <ProductPageHero
          title="Master Template QC"
          copy="The Quality Controller scans PowerPoint files and gives QC feedback on consistency, formatting, brand standards, template usage, and common presentation design issues. It gives presentation departments a faster way to catch the small details that create rework before decks reach clients or internal stakeholders."
          bullets={heroBullets}
          featureNote="Coming Soon"
          topImage="/assets/images/117186.jpg"
          showcaseImage="/assets/quality-control.png"
        />

        <section className="bg-paper py-20">
          <div className="container-page">
            <h2 className="mb-10 text-[32px] font-bold text-coal">Key features</h2>
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
              <SectionLabel className="mb-4">What it checks</SectionLabel>
              <h2 className="text-[40px] font-bold leading-tight text-coal">
                A review layer built for presentation production.
              </h2>
              <p className="mt-6 text-sm leading-7 text-coal/70">
                Master Template QC gives presentation departments a faster way to catch the small issues that create rework: inconsistent styles, off-brand colors, broken formatting, missed margins, and layout drift.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {checks.map((check) => (
                <div key={check} className="border border-coal/10 bg-paper p-5 text-sm font-bold text-coal">
                  {check}
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Put QC feedback into every delivery workflow" showButton={false} />
      </main>
      <Footer />
    </>
  );
}
