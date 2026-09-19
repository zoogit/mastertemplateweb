import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

export default function FeatureGrid({ label = "Key features", features }) {
  return (
    <section className="bg-paper">
      <div className="wrap rule-t py-16 md:py-28">
        <Reveal>
          <Eyebrow>{label}</Eyebrow>
        </Reveal>
        <div className="mt-12 grid gap-0 border-t border-coal md:mt-16 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 80}
              className={`border-b border-coal py-10 md:border-b-0 md:py-12 ${i > 0 ? "md:border-l md:pl-10" : ""} ${i < 2 ? "md:pr-10" : ""}`}
            >
              <div className="h-1 w-10 bg-blaze" aria-hidden="true" />
              <h3 className="h3 mt-8">{f.title}</h3>
              <p className="mt-5 max-w-sm text-[16px] leading-[1.6] text-coal/75">{f.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
