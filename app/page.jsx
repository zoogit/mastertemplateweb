import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import SectionLabel from "@/components/SectionLabel";
import BackgroundVideo from "@/components/BackgroundVideo";
import Image from "next/image";

const clientLogos = [
  "/assets/client-logos/1.png",
  "/assets/client-logos/2.png",
  "/assets/client-logos/3.png",
  "/assets/client-logos/4.png",
  "/assets/client-logos/5.png",
  "/assets/client-logos/6.png",
  "/assets/client-logos/7.png"
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
      <Header />
      <main>
        <Hero
          title="Enterprise Presentation Tools for Teams That Move Fast"
          copy="Master Template develops workflow software designed specifically for presentation design teams, creative departments, and consulting organizations working at scale. Our tools help teams reduce manual work, improve consistency, and deliver polished decks faster."
          videoMp4="/assets/video/business-meeting.mp4"
          videoOverlayGradient="bg-coal/20"
          primaryLabel="Book a Demo"
          secondaryHref="/converter"
          secondaryLabel="Explore Products"
        />

        <section className="bg-coal pb-28 pt-20 text-white">
          <div className="container-page">
            <SectionLabel className="mb-16">Industry breaking products</SectionLabel>
            <div className="grid gap-10 md:grid-cols-2">
              <ProductCard
                title="Master Template Converter"
                href="/converter"
                image="/assets/images/168626.jpg"
                intro="Move content from one PowerPoint template into another without rebuilding slides from scratch."
                copy="The Converter intelligently transfers layouts, content, styling structures, and formatting into your selected master template, dramatically reducing production time while helping maintain brand consistency across presentations."
              />
              <ProductCard
                title="Master Template QC"
                href="/quality-controller"
                image="/assets/images/528069.jpg"
                intro="Automated presentation quality control designed for teams where consistency matters."
                copy="Master Template QC analyzes PowerPoint files and identifies issues including inconsistent typography, incorrect fonts, styling mismatches, spacing problems, formatting deviations, and other common presentation quality risks."
              />
            </div>
          </div>
        </section>

        <section className="bg-paper py-20">
          <div className="container-page">
            <SectionLabel className="mb-12">Testimonials</SectionLabel>
            <div className="-mx-5 mb-14 overflow-hidden md:hidden">
              <div className="logo-marquee flex w-max gap-8 px-5">
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div key={`${logo}-${index}`} className="relative h-12 w-32 shrink-0">
                    <Image
                      src={logo}
                      alt={`Client logo ${(index % clientLogos.length) + 1}`}
                      fill
                      sizes="128px"
                      className="object-contain grayscale opacity-70"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-14 hidden grid-cols-7 gap-x-8 gap-y-7 md:grid">
              {clientLogos.map((logo, index) => (
                <div key={logo} className="relative mx-auto h-12 w-32">
                  <Image
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    fill
                    sizes="128px"
                    className="object-contain grayscale opacity-70"
                  />
                </div>
              ))}
            </div>
            <div className="grid gap-12 md:grid-cols-3">
              {testimonials.map((item, index) => (
                <TestimonialCard key={item.role} {...item} showDivider={index > 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative min-h-[380px] overflow-hidden bg-coal text-white">
          <BackgroundVideo
            mp4Src="/assets/video/conference-call.mp4"
            posterSrc="/assets/images/528069.jpg"
            videoClassName="object-top opacity-55"
            posterClassName="object-top opacity-55"
            overlayGradient="bg-coal/45"
          />
          <div className="absolute inset-0 bg-paper/16" />
          <div className="container-page relative flex min-h-[380px] items-center justify-center text-center">
            <div>
              <blockquote className="mx-auto max-w-3xl text-[34px] font-medium leading-[1.28] text-white">
                <span className="box-decoration-clone bg-blaze px-2 py-1 text-white">
                  “Finally, a platform built specifically for presentation teams.”
                </span>
              </blockquote>
              <p className="mt-7 text-2xl font-medium text-white/88">
                — Morgan Ellis, Creative Operations Director
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="bg-white py-20">
          <div className="container-page">
            <SectionLabel className="mb-14 hidden md:inline-flex">Features</SectionLabel>
            <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
              <div>
                <div className="rounded-lg bg-black p-7">
                  <div className="relative aspect-[2.1] overflow-hidden bg-white">
                    <Image
                      src="/assets/converter-overview.png"
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="mt-7 text-center text-2xl font-semibold text-black">
                  Choose your layouts
                </h3>
              </div>

              <div>
                <div className="rounded-lg bg-black p-7">
                  <div className="relative aspect-[2.1] overflow-hidden bg-white">
                    <Image
                      src="/assets/quality-control.png"
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="mt-7 text-center text-2xl font-semibold text-black">
                  Total control over styling
                </h3>
              </div>
            </div>

            <div className="mt-14 flex justify-center">
              <div className="w-full max-w-[580px]">
                <div className="rounded-lg bg-black p-7">
                  <div className="relative aspect-[1.65] overflow-hidden bg-white">
                    <Image
                      src="/assets/layout-mapping.png"
                      alt=""
                      fill
                      sizes="(min-width: 768px) 580px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="mt-7 text-center text-2xl font-semibold text-black">
                  Master the details
                </h3>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
