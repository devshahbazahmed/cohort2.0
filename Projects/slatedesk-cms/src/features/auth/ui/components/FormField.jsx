export default function FormField({ label, action, error, children }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-[11px] font-semibold uppercase tracking-wide text-[#b9b3bf]">
          {label}
        </label>

        {action}
      </div>

      <div className="relative">{children}</div>

      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
