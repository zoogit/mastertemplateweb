import Button from "./Button";
import Reveal from "./Reveal";

export default function CTA({
  title = "Ready to move presentation work faster?",
  accent = "faster?",
  copy = "See how Master Template helps presentation design departments convert decks, protect brand systems, and keep every file production-ready.",
  buttonLabel = "Request Demo",
  showButton = true
}) {
  const at = accent ? title.lastIndexOf(accent) : -1;
  const head = at >= 0 ? title.slice(0, at) : title;
  const tail = at >= 0 ? title.slice(at) : "";

  return (
    <section className="on-coal bg-coal text-paper">
      <div className="wrap py-20 md:py-32">
        <Reveal delay={80}>
          <h2 className="display max-w-[15ch]">
            {head}
            {tail ? <span className="accent">{tail}</span> : null}
          </h2>
        </Reveal>
        <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <Reveal delay={160}>
            <p className="lede max-w-xl text-paper/80">{copy}</p>
          </Reveal>
          {showButton ? (
            <Reveal delay={240}>
              <Button href="/request-demo" variant="accent" className="w-full md:w-auto">
                {buttonLabel}
              </Button>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
