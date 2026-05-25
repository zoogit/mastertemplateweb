export default function TestimonialCard({ quote, role, showDivider = false }) {
  return (
    <figure className={`pt-2 ${showDivider ? "md:border-l md:border-coal/30 md:pl-12" : ""}`}>
      <blockquote className="max-w-none text-[16px] font-medium leading-[1.32] text-coal md:max-w-[310px]">
        {quote}
      </blockquote>
      <figcaption className="mt-8 max-w-none text-right text-base font-medium text-coal/80 md:mt-14 md:max-w-[310px]">
        &mdash; {role}
      </figcaption>
    </figure>
  );
}
