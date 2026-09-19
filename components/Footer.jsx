import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="on-coal bg-coal text-paper">
      <div className="wrap border-t border-paper/25 py-16 md:py-24">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="md:col-span-2 lg:col-span-6">
            <Link href="/" aria-label="Master Template home" className="inline-flex">
              <Image
                src="/assets/logo/NEWTYPE-04white.svg"
                alt="Master Template"
                width={260}
                height={57}
                className="h-11 w-auto md:h-14"
              />
            </Link>
            <p className="mt-8 max-w-md text-[16px] leading-[1.55] text-paper/70">
              Enterprise presentation tools for teams that move fast, protect brand standards, and ship polished decks at scale.
            </p>
          </div>
          <div className="grid content-start gap-3 lg:col-span-3">
            <h3 className="eyebrow mb-3 text-paper/60">Products</h3>
            <Link href="/converter" className="link-wipe w-fit text-[18px]">Master Template Converter</Link>
            <Link href="/quality-controller" className="link-wipe w-fit text-[18px]">Master Template QC</Link>
          </div>
          <div className="grid content-start gap-3 lg:col-span-3">
            <h3 className="eyebrow mb-3 text-paper/60">Company</h3>
            <Link href="/#features" className="link-wipe w-fit text-[18px]">Features</Link>
            <Link href="/request-demo" className="link-wipe w-fit text-[18px]">Request Demo</Link>
            <span className="text-[18px] text-paper/70">hello@mastertemplate.co</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
