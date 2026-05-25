export default function VideoPlaceholder({ label = "Product demo video placeholder" }) {
  return (
    <div className="relative grid aspect-video place-items-center overflow-hidden bg-coal text-white">
      <div className="absolute inset-0 opacity-20 [background:linear-gradient(135deg,#F0682C_0%,#F1A686_42%,#3C3C44_100%)]" />
      <div className="relative grid h-20 w-20 place-items-center rounded-full border border-white/25 bg-white/10 text-[24px]">
        ▶
      </div>
      <p className="absolute bottom-6 left-6 text-sm font-bold text-white/70">{label}</p>
    </div>
  );
}
