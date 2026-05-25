export default function SectionLabel({ children, variant = "orange", className = "" }) {
  const styles = {
    orange: "bg-blaze text-white",
    dark: "bg-coal text-white"
  };

  return (
    <h2
      className={`inline-flex px-5 py-3 text-base font-semibold leading-none ${styles[variant]} ${className}`}
    >
      {children}
    </h2>
  );
}
