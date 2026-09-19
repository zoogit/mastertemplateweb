import Image from "next/image";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const items = [
  { src: "/assets/converter-overview.png", title: "Choose your layouts" },
  { src: "/assets/quality-control.png", title: "Total control over styling" },
  { src: "/assets/layout-mapping.png", title: "Master the details" }
];

export default function Showcase({ id }) {
  return (
    <section id={id} className="scroll-mt-24 bg-paper">
      <div className="wrap rule-t py-16 md:py-28">
        <Reveal>
          <Eyebrow>Features</Eyebrow>
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-12 md:mt-16 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.src} delay={i * 60}>
              <div className="zoom bg-coal p-3">
                <div className="relative aspect-[1.65] overflow-hidden bg-white">
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-left-top"
                  />
                </div>
              </div>
              <h3 className="mt-5 text-[24px] font-semibold leading-[1.2] tracking-[-0.01em]">{item.title}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
