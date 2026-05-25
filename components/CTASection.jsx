import Button from "./Button";

export default function CTASection({
  title = "Ready to move presentation work faster?",
  copy = "See how Master Template helps presentation design departments convert decks, protect brand systems, and keep every file production-ready.",
  buttonLabel = "Request Demo",
  showButton = true
}) {
  return (
    <section className="bg-coal py-20 text-white">
      <div className="container-page flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <div className="mb-5 flex w-full max-w-xl items-center gap-4">
            <p className="shrink-0 text-sm font-semibold uppercase tracking-[0] text-blaze">
              Master Template
            </p>
            <div className="h-px flex-1 bg-blaze" />
          </div>
          <h2 className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/66">{copy}</p>
        </div>
        {showButton ? (
          <Button href="/request-demo" variant="primaryOnDark" className="shrink-0">
            {buttonLabel}
          </Button>
        ) : null}
      </div>
    </section>
  );
}
