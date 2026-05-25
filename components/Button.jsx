import Link from "next/link";

const styles = {
  primary:
    "border-blaze bg-blaze text-white hover:bg-transparent hover:text-coal active:bg-transparent active:text-coal",
  primaryOnDark:
    "border-blaze bg-blaze text-white hover:bg-transparent hover:text-white active:bg-transparent active:text-white",
  dark:
    "border-coal bg-coal text-white hover:bg-transparent hover:text-coal active:bg-transparent active:text-coal",
  light:
    "border-white bg-white text-coal hover:bg-transparent hover:text-white active:bg-transparent active:text-white",
  outline:
    "border-coal/20 bg-transparent text-coal hover:border-blaze hover:text-blaze active:border-blaze active:text-blaze"
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button"
}) {
  const classes = `inline-flex items-center justify-center gap-2 border px-5 py-3 text-sm font-semibold transition duration-200 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
