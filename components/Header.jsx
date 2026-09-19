import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/converter", label: "Converter" },
  { href: "/quality-controller", label: "Quality Controller" },
  { href: "/#features", label: "Features" }
];

export const utilityItems = [
  { href: "#", label: "Login" },
  { href: "/request-demo", label: "Contact Us" },
  { href: "#", label: "Support" }
];

export default function Header() {
  return (
    <>
      <div className="hidden bg-coal text-paper md:block">
        <div className="wrap flex h-9 items-center justify-end gap-8 text-[13px]">
          {utilityItems.map((item) => (
            <Link key={item.label} href={item.href} className="link-wipe opacity-80 transition hover:opacity-100">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-coal bg-paper">
        <div className="wrap flex h-16 items-center justify-between gap-6 md:h-[72px]">
          <Link href="/" aria-label="Master Template home" className="flex shrink-0 items-center">
            <Image
              src="/assets/logo/NEWTYPE-04.svg"
              alt="Master Template"
              width={168}
              height={37}
              priority
              className="h-8 w-auto md:h-9"
            />
          </Link>
          <nav className="hidden items-center gap-9 text-[14px] font-medium uppercase tracking-[0.02em] lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="link-wipe py-2">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/request-demo"
              className="link-arrow hidden items-center gap-2 text-[14px] font-medium uppercase tracking-[0.02em] lg:inline-flex"
            >
              <span className="link-wipe py-2">Request Demo</span>
              <span className="arrow" aria-hidden="true">↗</span>
            </Link>
            <MobileMenu nav={navItems} utility={utilityItems} />
          </div>
        </div>
      </header>
    </>
  );
}
