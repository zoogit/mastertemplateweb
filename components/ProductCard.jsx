import Image from "next/image";
import BackgroundVideo from "./BackgroundVideo";

export default function ProductCard({
  title,
  intro,
  copy,
  href,
  image,
  videoMp4,
  videoWebm,
  buttonLabel = "Try Today"
}) {
  return (
    <article className="group">
      <a href={href} className="block">
        <h3 className="text-[28px] font-medium leading-tight text-white md:text-[34px]">{title}</h3>
        <p className="mt-2 max-w-[520px] text-[14px] font-light leading-6 text-white/78 md:text-[16px]">
          {intro}
        </p>
      </a>

      <div className="relative mt-4 aspect-[1.34] overflow-hidden bg-white">
        {videoMp4 || videoWebm ? (
          <BackgroundVideo
            mp4Src={videoMp4}
            webmSrc={videoWebm}
            posterSrc={image}
            videoClassName="opacity-58 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-72"
            posterClassName="opacity-58 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-72"
          />
        ) : (
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            loading="eager"
            className="object-cover opacity-58 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-72"
          />
        )}
        <div className="absolute bottom-0 left-0 z-10 bg-coal pr-4 pt-[9px]">
          <a
            href={href}
            className="block py-3 text-lg font-light text-white transition duration-300 hover:text-blaze active:text-blaze"
          >
            <span className="inline-flex items-center gap-2">
              {buttonLabel}
              <span className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100">
                →
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className="grid max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-48">
        <p className="pt-5 text-[14px] font-light leading-[1.55] text-white/78 md:text-[16px]">
          {copy}
        </p>
      </div>
    </article>
  );
}
