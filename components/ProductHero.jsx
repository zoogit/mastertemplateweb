import Image from "next/image";
import Button from "./Button";
import Video from "./Video";

/* Original-site product hero: faded image band, white text panel, framed showcase. */
export default function ProductHero({
  title,
  copy,
  bullets,
  topImage,
  topImageClassName = "object-center",
  note,
  image,
  video,
  ctaHref,
  ctaLabel
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 hidden h-[255px] overflow-hidden bg-paper lg:block">
        <Image
          src={topImage}
          alt=""
          fill
          sizes="100vw"
          priority
          className={`object-cover ${topImageClassName}`}
        />
      </div>
      <div className="product-hero-frame relative z-10 grid gap-10 px-7 py-10 lg:min-h-[610px] lg:grid-cols-[var(--page-pad)_minmax(280px,500px)_minmax(34px,64px)_minmax(520px,1fr)_var(--page-pad)] lg:gap-0 lg:px-0 lg:pb-[72px] lg:pt-32 xl:grid-cols-[var(--page-pad)_minmax(300px,500px)_minmax(42px,78px)_minmax(580px,1.1fr)_var(--page-pad)]">
        <div className="relative z-10 order-2 flex items-center bg-white lg:order-1 lg:col-start-1 lg:col-end-3 lg:-mt-2 lg:items-start lg:self-start lg:pb-10 lg:pl-[var(--page-pad)] lg:pr-8 lg:pt-14">
          <div className="max-w-[500px]">
            <h1 className="text-[40px] font-semibold leading-[1.04] tracking-[0] text-black md:text-[56px]">
              {title}
            </h1>
            <p className="mt-7 text-[16px] font-normal leading-7 text-black/72">{copy}</p>
            {bullets?.length > 0 && (
              <div className="mt-8">
                <h2 className="inline-flex bg-coal px-4 py-2 text-sm font-semibold leading-none text-white">
                  Features
                </h2>
                {note ? <p className="mt-3 text-sm font-semibold leading-5 text-black">{note}</p> : null}
                <ul className="mt-4 space-y-2.5 pl-5 text-sm font-medium leading-5 text-black">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="list-disc">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {ctaHref && ctaLabel ? (
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={ctaHref} variant="accent">{ctaLabel}</Button>
              </div>
            ) : null}
          </div>
        </div>
        <div className="relative z-10 order-1 flex flex-col gap-8 lg:order-2 lg:col-start-4 lg:justify-end lg:pb-2 lg:pt-[150px]">
          <div className="ml-auto w-full max-w-[760px] rounded-lg bg-black p-5 md:p-6">
            <div className="relative aspect-[2.1] overflow-hidden bg-white">
              {video ? (
                <Video src={video} poster={image} />
              ) : (
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
