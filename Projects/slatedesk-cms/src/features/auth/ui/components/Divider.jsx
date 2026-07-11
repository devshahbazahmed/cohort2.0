export default function Divider() {
  return (
    <div className="my-8 flex items-center gap-4">
      <div className="h-px flex-1 bg-[#2b2730]" />

      <span className="whitespace-nowrap text-[11px] text-[#928b98]">
        or continue with email
      </span>

      <div className="h-px flex-1 bg-[#2b2730]" />
    </div>
  );
}
