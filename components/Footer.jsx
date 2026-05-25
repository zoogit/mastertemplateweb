import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black py-14 text-white">
      <div className="container-page grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href="/" className="mb-5 inline-flex">
            <Image
              src="/assets/logo/NEWLOGO-02.svg"
              alt="Master Template"
              width={190}
              height={58}
            />
          </Link>
          <p className="max-w-sm text-sm leading-6 text-white/60">
            Enterprise presentation tools for teams that move fast, protect brand
            standards, and ship polished decks at scale.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-white/70">
          <h3 className="text-base font-bold text-white">Products</h3>
          <Link href="/converter">Master Template Converter</Link>
          <Link href="/quality-controller">Master Template QC</Link>
        </div>
        <div className="grid gap-3 text-sm text-white/70">
          <h3 className="text-base font-bold text-white">Company</h3>
          <Link href="/#features">Features</Link>
          <Link href="/request-demo">Request Demo</Link>
          <span>hello@mastertemplate.co</span>
        </div>
      </div>
    </footer>
  );
}
