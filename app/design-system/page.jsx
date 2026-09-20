import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export const metadata = {
  title: "Design System | Master Template",
  robots: { index: false, follow: false }
};

/* ---------- helpers ---------- */
function lum(hex) {
  const n = parseInt(hex.slice(1), 16);
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
function ratio(a, b) {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}
function grade(r) {
  if (r >= 7) return "AAA";
  if (r >= 4.5) return "AA";
  if (r >= 3) return "AA Large only";
  return "Below AA";
}

const colors = [
  { name: "Paper", token: "paper", hex: "#F1F2F3", fg: "#1C1C1C", role: "Page canvas and light sections. The default background." },
  { name: "Coal", token: "coal", hex: "#1C1C1C", fg: "#F1F2F3", role: "Text, hairline rules, dark sections, solid buttons, footer." },
  { name: "Blaze", token: "blaze", hex: "#F0682C", fg: "#1C1C1C", role: "The only accent. Highlighted words, primary buttons, small bars and bullets." }
];

const pairs = [
  { label: "Coal on Paper", fg: "#1C1C1C", bg: "#F1F2F3", use: "Body and headlines" },
  { label: "Paper on Coal", fg: "#F1F2F3", bg: "#1C1C1C", use: "Dark sections" },
  { label: "Blaze on Coal", fg: "#F0682C", bg: "#1C1C1C", use: "Accent words on dark" },
  { label: "Blaze on Paper", fg: "#F0682C", bg: "#F1F2F3", use: "Display-size accent words on light. Below 3:1, so never for small text" },
  { label: "Coal on Blaze", fg: "#1C1C1C", bg: "#F0682C", use: "Primary button label" },
  { label: "White on Blaze", fg: "#FFFFFF", bg: "#F0682C", use: "Avoid for text" }
];

const type = [
  { cls: "display", name: "Display", sample: "Move Fast", spec: "500 · 0.94 · -0.04em · clamp(42px, 7.6vw, 124px)", use: "Page hero headlines, closing CTA" },
  { cls: "h2", name: "Heading 2", sample: "For teams that live in PowerPoint.", spec: "500 · 1.0 · -0.035em · clamp(34px, 5.4vw, 84px)", use: "Statement headlines inside sections" },
  { cls: "h3", name: "Heading 3", sample: "Master Template Converter", spec: "500 · 1.02 · -0.03em · clamp(26px, 2.7vw, 40px)", use: "Card and column titles" },
  { cls: "section-title", name: "Section title", sample: "Industry breaking products", spec: "500 · 1.0 · -0.035em · clamp(26px, 3vw, 44px)", use: "Labels that open a section" }
];

const inputClass =
  "mt-3 block w-full border-0 border-b border-coal bg-transparent px-0 py-3 text-[18px] font-medium outline-none transition placeholder:text-coal/30 focus:border-b-2 focus:border-blaze";

function Block({ id, title, note, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-coal py-14 md:py-20">
      <div className="grid gap-8 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-3">
          <Reveal>
            <h2 className="section-title">{title}</h2>
            {note ? <p className="mt-4 max-w-xs text-[15px] leading-[1.55] text-coal/70">{note}</p> : null}
          </Reveal>
        </div>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}

function Label({ children }) {
  return <p className="eyebrow mb-4 text-coal/60">{children}</p>;
}

const nav = [
  ["color", "Color"],
  ["type", "Type"],
  ["buttons", "Buttons"],
  ["layout", "Layout"],
  ["components", "Components"],
  ["motion", "Motion"],
  ["rules", "Rules"]
];

export default function DesignSystemPage() {
  return (
    <div className="bg-paper">
      {/* Intro */}
      <div className="wrap pb-14 pt-12 md:pb-20 md:pt-20">
        <Reveal>
          <h1 className="display max-w-[14ch]">
            Design <span className="accent">system</span>
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="lede mt-8 max-w-2xl text-coal/80">
            Light editorial, one accent, high contrast. Everything below is rendered with the live site's own classes and components, so this page is the source of truth.
          </p>
        </Reveal>
        <nav className="mt-10 flex flex-wrap gap-x-8 gap-y-3" aria-label="Design system sections">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="link-wipe eyebrow py-1">
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className="wrap">
        {/* COLOR */}
        <Block id="color" title="Color" note="Three colors and their tints. Blaze is used sparingly, never as a large fill.">
          <div className="grid gap-4 md:grid-cols-3">
            {colors.map((c) => (
              <div key={c.token} className="border border-coal">
                <div className="flex h-44 items-end p-5" style={{ background: c.hex, color: c.fg }}>
                  <span className="text-[30px] font-medium leading-none tracking-[-0.03em]">{c.name}</span>
                </div>
                <div className="space-y-2 p-5">
                  <p className="text-[15px] font-semibold">{c.hex}</p>
                  <p className="eyebrow text-coal/60">
                    bg-{c.token} · text-{c.token}
                  </p>
                  <p className="text-[15px] leading-[1.5] text-coal/75">{c.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Label>Supporting tints</Label>
            <div className="grid gap-x-8 gap-y-3 text-[15px] sm:grid-cols-2">
              {[
                ["Coal 90%", "rgba(28,28,28,.9)", "Hairline rules on paper (.rule-t, .rule-b)", "#F1F2F3"],
                ["Coal 70–75%", "rgba(28,28,28,.72)", "Secondary body copy on paper", "#F1F2F3"],
                ["Coal 25%", "rgba(28,28,28,.25)", "Soft dividers in lists", "#F1F2F3"],
                ["Paper 35%", "rgba(241,242,243,.35)", "Hairline rules on coal (.on-coal)", "#1C1C1C"],
                ["Paper 70–80%", "rgba(241,242,243,.75)", "Secondary body copy on coal", "#1C1C1C"],
                ["White", "#FFFFFF", "Screenshot surfaces and the product-hero text panel only", "#F1F2F3"]
              ].map(([name, swatch, use, base]) => (
                <div key={name} className="flex items-center gap-4 border-b border-coal/25 py-3">
                  <span className="h-8 w-8 shrink-0 border border-coal/30" style={{ background: `linear-gradient(${swatch}, ${swatch}), ${base}` }} aria-hidden="true" />
                  <span className="min-w-[110px] font-semibold">{name}</span>
                  <span className="text-coal/70">{use}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Label>Contrast (WCAG)</Label>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pairs.map((p) => {
                const r = ratio(p.fg, p.bg);
                return (
                  <div key={p.label} className="border border-coal">
                    <div className="flex h-24 items-center justify-between px-5" style={{ background: p.bg, color: p.fg }}>
                      <span className="text-[34px] font-medium leading-none tracking-[-0.03em]">Aa</span>
                      <span className="text-[15px] font-semibold">{r.toFixed(1)}:1</span>
                    </div>
                    <div className="p-4">
                      <p className="text-[15px] font-semibold">{p.label}</p>
                      <p className="mt-1 text-[14px] text-coal/70">
                        {grade(r)} · {p.use}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Block>

        {/* TYPE */}
        <Block id="type" title="Typography" note="One family, Stack Sans Headline, in four weights. Tight tracking, tight leading, sentence case.">
          <div>
            <Label>Family</Label>
            <p className="text-[clamp(44px,8vw,120px)] font-medium leading-[0.95] tracking-[-0.04em]">Aa Gg 0123</p>
            <p className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-[18px]">
              <span className="font-light">Light 300</span>
              <span className="font-normal">Regular 400</span>
              <span className="font-medium">Medium 500</span>
              <span className="font-semibold">Semibold 600</span>
            </p>
          </div>

          <div className="mt-12 border-t border-coal">
            {type.map((t) => (
              <div key={t.name} className="border-b border-coal/25 py-8">
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <p className="text-[15px] font-semibold">
                    {t.name} <span className="font-normal text-coal/60">.{t.cls}</span>
                  </p>
                  <p className="eyebrow text-coal/60">{t.spec}</p>
                </div>
                <p className={t.cls}>{t.sample}</p>
                <p className="mt-3 text-[14px] text-coal/70">{t.use}</p>
              </div>
            ))}

            <div className="border-b border-coal/25 py-8">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <p className="text-[15px] font-semibold">
                  Lede <span className="font-normal text-coal/60">.lede</span>
                </p>
                <p className="eyebrow text-coal/60">400 · 1.45 · clamp(17px, 1.5vw, 21px)</p>
              </div>
              <p className="lede max-w-xl">
                Master Template develops workflow software designed specifically for presentation design teams, creative departments, and consulting organizations working at scale.
              </p>
            </div>

            <div className="border-b border-coal/25 py-8">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <p className="text-[15px] font-semibold">Body</p>
                <p className="eyebrow text-coal/60">400 · 1.6 · 16–17px</p>
              </div>
              <p className="max-w-xl text-[16px] leading-[1.6] text-coal/75">
                Teams copy content into a new file, then adjust every table, graph, line weight, text box, image, color, and layout detail by hand.
              </p>
            </div>

            <div className="border-b border-coal/25 py-8">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <p className="text-[15px] font-semibold">
                  Eyebrow <span className="font-normal text-coal/60">.eyebrow</span>
                </p>
                <p className="eyebrow text-coal/60">500 · uppercase · 0.08em · 12px</p>
              </div>
              <p className="eyebrow">Try Today · Maya Chen, Creative Operations Lead</p>
              <p className="mt-3 text-[14px] text-coal/70">Attributions, small links, metadata. Never for section headers.</p>
            </div>

            <div className="py-8">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <p className="text-[15px] font-semibold">
                  Accent word <span className="font-normal text-coal/60">.accent</span>
                </p>
                <p className="eyebrow text-coal/60">color: blaze</p>
              </div>
              <p className="h2">
                Enterprise tools for teams that <span className="accent">move fast</span>
              </p>
              <p className="mt-3 text-[14px] text-coal/70">One phrase per headline, at large sizes only.</p>
            </div>
          </div>
        </Block>

        {/* BUTTONS */}
        <Block id="buttons" title="Buttons & links" note="Square corners, uppercase 14px labels, arrow nudges on hover. 48px minimum height for touch.">
          <Label>On paper</Label>
          <div className="flex flex-wrap gap-3">
            <Button href="#buttons" variant="accent">Primary · accent</Button>
            <Button href="#buttons">Solid</Button>
            <Button href="#buttons" variant="ghost">Ghost</Button>
            <Button href="#buttons" arrow={false}>No arrow</Button>
          </div>

          <div className="on-coal mt-8 bg-coal p-6 text-paper">
            <p className="eyebrow mb-4 text-paper/60">On coal</p>
            <div className="flex flex-wrap gap-3">
              <Button href="#buttons" variant="accent">Primary · accent</Button>
              <Button href="#buttons" variant="ghost">Ghost</Button>
            </div>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <Label>Underline-wipe link</Label>
              <a href="#buttons" className="link-wipe text-[20px] font-medium">Master Template Converter</a>
              <p className="mt-2 text-[14px] text-coal/70">.link-wipe — used in nav and footer.</p>
            </div>
            <div>
              <Label>Arrow link</Label>
              <a href="#buttons" className="link-arrow eyebrow inline-flex items-center gap-2">
                <span className="link-wipe py-1">Try Today</span>
                <span className="arrow" aria-hidden="true">↗</span>
              </a>
              <p className="mt-2 text-[14px] text-coal/70">.link-arrow — arrow moves up and right on hover.</p>
            </div>
          </div>
        </Block>

        {/* LAYOUT */}
        <Block id="layout" title="Layout" note="A 1360px container with fluid gutters, a 12-column grid, and hairline rules to divide sections.">
          <Label>Container · .wrap</Label>
          <p className="mb-8 max-w-xl text-[16px] leading-[1.6] text-coal/75">
            Max width 1360px. Gutter is 20px on mobile and 32px from 768px up. Sections use 64px vertical padding on mobile and 112px on desktop.
          </p>

          <Label>12-column grid</Label>
          <div className="grid grid-cols-4 gap-2 md:grid-cols-12 md:gap-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`flex h-16 items-center justify-center bg-coal/10 text-[12px] font-medium ${i >= 4 ? "hidden md:flex" : ""}`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Label>Breakpoints</Label>
            <div className="grid gap-px border border-coal bg-coal text-[15px] sm:grid-cols-4">
              {[
                ["Mobile", "< 768px", "One column, overlay menu"],
                ["md", "768px", "Multi-column grids begin"],
                ["lg", "1024px", "Desktop nav, product hero grid"],
                ["xl", "1280px", "Wider hero columns"]
              ].map(([n, w, d]) => (
                <div key={n} className="bg-paper p-4">
                  <p className="font-semibold">{n}</p>
                  <p className="text-coal/70">{w}</p>
                  <p className="mt-2 text-[14px] text-coal/70">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Label>Hairlines</Label>
            <div className="space-y-6">
              <div>
                <div className="rule-t" />
                <p className="mt-2 text-[14px] text-coal/70">.rule-t / .rule-b — 1px coal, opens and closes sections and grids</p>
              </div>
              <div className="on-coal bg-coal p-4 text-paper">
                <div className="rule-t" />
                <p className="mt-2 text-[14px] text-paper/70">Inside .on-coal — 35% paper</p>
              </div>
            </div>
          </div>
        </Block>

        {/* COMPONENTS */}
        <Block id="components" title="Components" note="Patterns built from the tokens above. Reuse these instead of inventing new ones.">
          <div>
            <Label>Section header + column grid</Label>
            <Eyebrow>Key features</Eyebrow>
            <div className="mt-8 grid border-t border-coal md:grid-cols-3">
              {[
                ["Slide content conversion", "Move content from an existing PowerPoint slide into the template and styling of another deck."],
                ["Less manual cleanup", "Reduce the tedious work of adjusting tables, graphs, line weights, and text styles."],
                ["Converted PPT output", "Get a converted PowerPoint file your team can review, polish, and send forward."]
              ].map(([t, c], i) => (
                <div
                  key={t}
                  className={`border-b border-coal py-8 md:border-b-0 ${i > 0 ? "md:border-l md:pl-8" : ""} ${i < 2 ? "md:pr-8" : ""}`}
                >
                  <div className="h-1 w-10 bg-blaze" aria-hidden="true" />
                  <h3 className="h3 mt-6">{t}</h3>
                  <p className="mt-4 text-[16px] leading-[1.6] text-coal/75">{c}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <Label>List rows</Label>
            <ul className="m-0 list-none border-b border-coal p-0">
              {["Marketing teams refreshing campaign decks", "Finance teams updating recurring reports"].map((u) => (
                <li
                  key={u}
                  className="flex items-baseline justify-between gap-6 border-t border-coal py-6 text-[24px] font-medium leading-[1.15] tracking-[-0.02em] md:text-[30px]"
                >
                  <span>{u}</span>
                  <span className="accent shrink-0 text-[0.8em]" aria-hidden="true">↗</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <div>
              <Label>Bullets</Label>
              <ul className="m-0 list-none p-0">
                {["Convert one deck into another template", "Reduce slide by slide rebuild work"].map((b) => (
                  <li key={b} className="flex items-baseline gap-4 border-b border-coal/25 py-4 text-[17px] font-medium leading-[1.3]">
                    <span className="mt-[0.5em] block h-2 w-2 shrink-0 bg-blaze" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Label>Media frame</Label>
              <div className="zoom bg-coal p-3">
                <div className="relative aspect-[1.65] overflow-hidden bg-white">
                  <Image
                    src="/assets/converter-overview.png"
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-left-top"
                  />
                </div>
              </div>
              <p className="mt-2 text-[14px] text-coal/70">Coal frame, 12px padding, 1.65 ratio. Hover zooms the image.</p>
            </div>
          </div>

          <div className="mt-14">
            <Label>Form fields</Label>
            <div className="grid max-w-xl gap-8">
              <label className="block">
                <span className="eyebrow block">Name</span>
                <input className={inputClass} type="text" placeholder="Jane Doe" />
              </label>
              <label className="block">
                <span className="eyebrow block">Message</span>
                <textarea className={`${inputClass} min-h-24 resize-y`} placeholder="Tell us about your workflow" />
              </label>
            </div>
            <p className="mt-4 text-[14px] text-coal/70">Underline only. The line thickens and turns blaze on focus.</p>
          </div>

          <div className="mt-14">
            <Label>Dark section · pull quote</Label>
            <div className="on-coal bg-coal p-8 text-paper md:p-12">
              <p className="h2 max-w-[18ch]">
                “Finally, a platform built specifically for <span className="accent">presentation teams.</span>”
              </p>
              <p className="eyebrow mt-8">Morgan Ellis, Creative Operations Director</p>
            </div>
          </div>
        </Block>

        {/* MOTION */}
        <Block id="motion" title="Motion" note="Refined and quick. Everything is disabled for visitors who prefer reduced motion.">
          <div className="grid gap-px border border-coal bg-coal sm:grid-cols-2">
            {[
              ["Scroll reveal", "Elements rise 28px and fade in over 0.8s once, with 60–240ms staggers. <Reveal>"],
              ["Underline wipe", "A 1px line draws across links in 0.3s. .link-wipe"],
              ["Arrow nudge", "Arrows travel 3px up and right on hover. .arrow"],
              ["Image zoom", "Media scales to 1.035 over 0.9s on hover. .zoom"],
              ["Marquee", "Client logos scroll continuously over 40s and pause on hover. .marquee"],
              ["Menu overlay", "Full-screen coal overlay fades and slides in over 0.5s below 1024px."]
            ].map(([t, d]) => (
              <div key={t} className="bg-paper p-5">
                <p className="text-[17px] font-semibold">{t}</p>
                <p className="mt-2 text-[15px] leading-[1.55] text-coal/75">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="zoom bg-coal p-3">
              <div className="relative aspect-[1.65] overflow-hidden bg-white">
                <Image src="/assets/quality-control.png" alt="" fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover object-left-top" />
              </div>
              <p className="eyebrow mt-3 text-paper">Hover me</p>
            </div>
            <Reveal className="flex items-center">
              <p className="h3">Scroll this section into view to see a reveal.</p>
            </Reveal>
          </div>
        </Block>

        {/* RULES */}
        <Block id="rules" title="Rules" note="The short list that keeps the site consistent.">
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
            <div>
              <Label>Do</Label>
              <ul className="m-0 list-none space-y-3 p-0 text-[16px] leading-[1.5]">
                <li>Use coal on paper or paper on coal. Contrast stays above 15:1.</li>
                <li>Keep blaze to small accents and one highlighted phrase per headline.</li>
                <li>Set headlines tight (leading under 1.05, tracking negative).</li>
                <li>Divide sections with hairlines instead of boxes and shadows.</li>
                <li>Keep interactive targets at least 44px on touch.</li>
              </ul>
            </div>
            <div>
              <Label>Don't</Label>
              <ul className="m-0 list-none space-y-3 p-0 text-[16px] leading-[1.5]">
                <li>Fill large areas with blaze, or put white text on it.</li>
                <li>Add gradients, shadows, or rounded corners (except the product-hero screenshot frame).</li>
                <li>Number things for decoration. Number only true sequences, like workflow steps.</li>
                <li>Use small uppercase for section headers. That is the eyebrow style.</li>
                <li>Introduce new colors or typefaces.</li>
              </ul>
            </div>
          </div>
        </Block>
      </div>
      <div className="h-16 md:h-24" />
    </div>
  );
}
