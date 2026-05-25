import Image from "next/image";
import Button from "./Button";
import BackgroundVideo from "./BackgroundVideo";

export default function Hero({
  eyebrow,
  title,
  copy,
  image = "/assets/hero-placeholder.jpg",
  videoMp4,
  videoWebm,
  videoOverlayGradient,
  primaryHref = "/request-demo",
  primaryLabel = "Book a Demo",
  secondaryHref,
  secondaryLabel
}) {
  return (
    <section className="bg-paper">
      <div className="container-page grid gap-0 py-0 lg:min-h-[510px] lg:grid-cols-2">
        <div className="relative order-1 hidden min-h-[300px] overflow-hidden bg-white sm:min-h-[360px] lg:order-2 lg:block lg:min-h-[420px]">
          {videoMp4 || videoWebm ? (
            <BackgroundVideo
              mp4Src={videoMp4}
              webmSrc={videoWebm}
              posterSrc={image}
              overlayGradient={videoOverlayGradient}
            />
          ) : (
            <Image
              src={image}
              alt="Presentation design team demo placeholder"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="eager"
              className="object-cover"
              priority
            />
          )}
        </div>
        <div className="fade-in relative order-2 -mx-5 flex min-h-[520px] items-center overflow-hidden bg-coal px-5 py-14 text-white lg:order-1 lg:mx-0 lg:min-h-0 lg:bg-transparent lg:px-0 lg:py-20 lg:pr-14 lg:text-coal">
          {videoMp4 || videoWebm ? (
            <BackgroundVideo
              mp4Src={videoMp4}
              webmSrc={videoWebm}
              posterSrc={image}
              overlayGradient="bg-gradient-to-b from-coal/80 via-coal/70 to-coal/80"
              className="lg:hidden"
            />
          ) : null}
          <div className="relative z-10">
            {eyebrow && <p className="mb-5 text-sm font-semibold uppercase text-blaze">{eyebrow}</p>}
            <h1 className="max-w-[520px] text-[38px] font-medium leading-[1.04] tracking-[0] text-white md:text-[62px] lg:text-coal">
              {title}
            </h1>
            <p className="mt-6 max-w-lg text-[15px] font-medium leading-7 text-white/90 lg:text-coal/80">{copy}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {secondaryHref && (
                <Button href={secondaryHref} variant="dark">
                  {secondaryLabel}
                </Button>
              )}
              <Button href={primaryHref}>{primaryLabel}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
