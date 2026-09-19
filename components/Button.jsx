import Link from "next/link";

const variants = { solid: "", accent: "btn-accent", ghost: "btn-ghost" };

export default function Button({ href, children, variant = "solid", arrow = true, className = "", type = "button" }) {
  const classes = `btn ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow ? <span className="arrow" aria-hidden="true">↗</span> : null}
    </>
  );
  return href ? (
    <Link href={href} className={classes}>{content}</Link>
  ) : (
    <button type={type} className={classes}>{content}</button>
  );
}
