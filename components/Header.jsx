import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/converter", label: "Converter" },
  { href: "/quality-controller", label: "Quality Controller" },
  { href: "/#features", label: "Features" }
];

const languages = [
  { label: "English", flag: "🇺🇸" },
  { label: "Deutsch", flag: "🇩🇪" },
  { label: "Francais", flag: "🇫🇷" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-blaze text-white">
      <div className="bg-coal text-white">
        <div className="container-page flex h-10 items-center justify-end gap-7 text-xs font-light tracking-wide">
          <button type="button" className="text-white/78 transition hover:text-white">
            Login
          </button>
          <Link href="/request-demo" className="text-white/78 transition hover:text-white">
            Contact Us
          </Link>
          <button type="button" className="text-white/78 transition hover:text-white">
            Support
          </button>
          <details className="group relative">
            <summary
              className="flex cursor-pointer list-none items-center gap-2 text-lg text-white/90 transition hover:text-white [&::-webkit-details-marker]:hidden"
              aria-label="Choose language"
            >
              <span aria-hidden="true">{languages[0].flag}</span>
              <span className="text-xs text-white/65 transition group-open:rotate-180">▾</span>
            </summary>
            <div className="absolute right-0 top-[calc(100%+10px)] min-w-[56px] border border-white/10 bg-coal py-2 shadow-soft">
              {languages.map((language) => (
                <button
                  key={language.label}
                  type="button"
                  aria-label={language.label}
                  className="block w-full px-4 py-1.5 text-left text-lg transition hover:bg-white/10"
                >
                  <span aria-hidden="true">{language.flag}</span>
                </button>
              ))}
            </div>
          </details>
        </div>
      </div>
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo/NEWTYPE-03.svg"
            alt="Master Template"
            width={168}
            height={50}
            priority
          />
        </Link>
        <div className="ml-auto flex items-center gap-4 md:gap-8">
          <nav className="hidden items-center gap-7 text-sm font-light md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-paper">
                {item.label}
              </Link>
            ))}
          </nav>
          <details className="group relative md:hidden">
            <summary className="cursor-pointer list-none border border-white/35 px-3 py-2 text-sm font-semibold transition hover:bg-white/10 [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav className="absolute right-0 top-[calc(100%+10px)] grid min-w-48 gap-1 bg-coal p-3 text-sm shadow-soft">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="px-3 py-2 transition hover:bg-white/10">
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
          <Button href="/request-demo" variant="dark" className="hidden px-4 py-2 sm:inline-flex">
            Request Demo
          </Button>
        </div>
      </div>
    </header>
  );
}
