import Image from "next/image";

const logos = [1, 2, 3, 4, 5, 6, 7].map((n) => `/assets/client-logos/${n}.png`);

export default function Marquee() {
  const row = [...logos, ...logos];
  return (
    <div className="rule-t rule-b overflow-hidden bg-paper py-8" aria-label="Client logos">
      <div className="marquee">
        {row.map((logo, i) => (
          <div key={`${logo}-${i}`} className="relative mx-8 h-12 w-32 shrink-0 md:mx-12 md:h-14 md:w-40">
            <Image
              src={logo}
              alt={i < logos.length ? `Client logo ${i + 1}` : ""}
              aria-hidden={i >= logos.length}
              fill
              sizes="160px"
              className="object-contain opacity-80 grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
