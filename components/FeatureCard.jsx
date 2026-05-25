export default function FeatureCard({ title, copy }) {
  return (
    <div className="border border-coal/10 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-5 h-2 w-14 bg-blaze" />
      <h3 className="text-[20px] font-bold text-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-coal/68">{copy}</p>
    </div>
  );
}
