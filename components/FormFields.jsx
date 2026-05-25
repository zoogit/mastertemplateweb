const fieldClass =
  "mt-2 w-full border border-coal/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-blaze";

export function FormInput({ label, name, type = "text", required = false }) {
  return (
    <label className="block text-sm font-bold text-coal">
      {label}
      <input className={fieldClass} type={type} name={name} required={required} />
    </label>
  );
}

export function FormSelect({ label, name, options, required = false }) {
  return (
    <label className="block text-sm font-bold text-coal">
      {label}
      <select className={fieldClass} name={name} required={required} defaultValue="">
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function FormTextarea({ label, name }) {
  return (
    <label className="block text-sm font-bold text-coal">
      {label}
      <textarea className={`${fieldClass} min-h-36 resize-y`} name={name} />
    </label>
  );
}
