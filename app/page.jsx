import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import Video from "@/components/Video";
import Marquee from "@/components/Marquee";
import Showcase from "@/components/Showcase";
import CTA from "@/components/CTA";

const products = [
  {
    title: "Master Template Converter",
    href: "/converter",
    image: "/assets/images/168626.jpg",
    intro: "Move content from one PowerPoint template into another without rebuilding slides from scratch.",
    copy: "The Converter intelligently transfers layouts, content, styling structures, and formatting into your selected master template, dramatically reducing production time while helping maintain brand consistency across presentations."
  },
  {
    title: "Master Template QC",
    href: "/quality-controller",
    image: "/assets/images/528069.jpg",
    intro: "Automated presentation quality control designed for teams where consistency matters.",
    copy: "Master Template QC analyzes PowerPoint files and identifies issues including inconsistent typography, incorrect fonts, styling mismatches, spacing problems, formatting deviations, and other common presentation quality risks."
  }
];

const testimonials = [
  {
    quote:
      "Master Template feels like software actually designed for people who understand presentation production, not another generic automation tool.",
    role: "Maya Chen, Creative Operations Lead"
  },
  {
    quote:
      "The QC tools catch the issues our team would normally spend hours reviewing manually. It became part of our final delivery process.",
    role: "Jordan Patel, Presentation Manager"
  },
  {
    quote:
      "The Converter alone saves us an incredible amount of time when clients change branding or request template refreshes.",
    role: "Avery Brooks, Senior Presentation Designer"
  }
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper">
        <div className="wrap pb-10 pt-12 md:pb-16 md:pt-20">
          <Reveal delay={80}>
            <h1 className="display max-w-[24ch]">
              Enterprise Presentation Tools for Teams That <span className="accent">Move Fast</span>
            </h1>
          </Reveal>
          <div className="mt-10 grid gap-8 md:mt-16 md:grid-cols-12 md:items-end md:gap-8">
            <Reveal delay={160} className="md:col-span-6">
              <p className="lede">
                Master Template develops workflow software designed specifically for presentation design teams, creative departments, and consulting organizations working at scale. Our tools help teams reduce manual work, improve consistency, and deliver polished decks faster.
              </p>
            </Reveal>
            <Reveal delay={240} className="flex flex-col gap-3 sm:flex-row md:col-span-6 md:justify-end">
              <Button href="/request-demo" variant="accent">Book a Demo</Button>
              <Button href="/converter" variant="ghost">Explore Products</Button>
            </Reveal>
          </div>
        </div>
        <div className="wrap pb-12 md:pb-20">
          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden bg-coal sm:aspect-[16/9] md:aspect-[2.2]">
              <Video src="/assets/video/business-meeting.mp4" />
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* Products */}
      <section className="bg-paper">
        <div className="wrap py-16 md:py-28">
          <Reveal>
            <Eyebrow>Industry breaking products</Eyebrow>
          </Reveal>
        </div>
        <div className="wrap">
          <div className="grid border-t border-coal md:grid-cols-2">
            {products.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                as="article"
                className={`group border-b border-coal py-10 md:py-14 ${i === 0 ? "md:border-r md:pr-10" : "md:pl-10"}`}
              >
                <div className="flex items-baseline justify-end">
                  <Link href={p.href} className="link-arrow eyebrow inline-flex items-center gap-2" aria-label={`Try ${p.title} today`}>
                    <span className="link-wipe py-1">Try Today</span>
                    <span className="arrow" aria-hidden="true">↗</span>
                  </Link>
                </div>
                <Link href={p.href} className="zoom relative mt-6 block aspect-[1.34] overflow-hidden bg-coal">
                  <Image src={p.image} alt="" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
                </Link>
                <h3 className="h3 mt-8">{p.title}</h3>
                <p className="mt-4 max-w-[34rem] text-[19px] font-medium leading-[1.35]">{p.intro}</p>
                <p className="mt-4 max-w-[34rem] text-[16px] leading-[1.6] text-coal/70">{p.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Pull-quote: the product promise, set like a quote */}
        <div className="wrap">
          <div className="border-t border-coal py-20 md:py-36">
            <Reveal>
              <p className="text-[clamp(46px,13vw,214px)] font-medium leading-[0.9] tracking-[-0.045em] [text-wrap:balance]">
                From 30 minutes a slide to <span className="accent">30 seconds.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="on-coal relative overflow-hidden bg-coal text-paper">
        <div className="absolute inset-0 opacity-30">
          <Video src="/assets/video/conference-call.mp4" poster="/assets/images/528069.jpg" />
        </div>
        <div className="wrap relative py-20 md:py-36">
          <Reveal>
            <blockquote className="h2 max-w-[18ch]">
              “Finally, a platform built specifically for <span className="accent">presentation teams.</span>”
            </blockquote>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow mt-10 flex items-center gap-4">
              <span className="h-px w-10 bg-current opacity-60" aria-hidden="true" />
              Morgan Ellis, Creative Operations Director
            </p>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-paper">
        <div className="wrap py-16 md:py-28">
          <Reveal>
            <Eyebrow>Testimonials</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-0 border-t border-coal md:mt-16 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.role}
                as="figure"
                delay={i * 80}
                className={`m-0 flex flex-col justify-between border-b border-coal py-10 md:border-b-0 md:py-12 ${
                  i > 0 ? "md:border-l md:pl-10" : ""
                } ${i < 2 ? "md:pr-10" : ""}`}
              >
                <blockquote className="m-0 text-[22px] font-medium leading-[1.25] tracking-[-0.015em] md:text-[24px]">
                  {t.quote}
                </blockquote>
                <figcaption className="eyebrow mt-10 text-coal/70">{t.role}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Showcase id="features" />
      <CTA />
    </>
  );
}
