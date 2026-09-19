import RequestDemoForm from "@/components/RequestDemoForm";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Request Demo | Master Template" };

export default function RequestDemoPage() {
  return (
    <section className="bg-paper">
      <div className="wrap grid gap-14 pb-20 pt-12 md:grid-cols-12 md:gap-8 md:pb-32 md:pt-20">
        <div className="md:col-span-6">
          <Reveal delay={80}>
            <h1 className="display max-w-[10ch]">
              See Master Template with your <span className="accent">team’s workflow.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede mt-8 max-w-lg text-coal/80">
              Tell us a little about your presentation team, the products you are interested in, and the workflow you want to improve. We will follow up with a focused demo.
            </p>
          </Reveal>
        </div>
        <Reveal delay={200} className="md:col-span-5 md:col-start-8 md:pt-24">
          <RequestDemoForm />
        </Reveal>
      </div>
    </section>
  );
}
