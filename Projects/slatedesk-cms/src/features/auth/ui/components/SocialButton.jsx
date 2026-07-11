export default function SocialButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex h-10 items-center justify-center gap-2 rounded-md
        border border-[#3c3742] bg-[#29262d]
        text-[11px] font-semibold uppercase tracking-wide
        text-[#d9d3df]
        transition
        hover:border-[#5a5069] hover:bg-[#302c35]
        focus:outline-none focus:ring-2 focus:ring-[#8160c2]/40
      "
    >
      {children}
    </button>
  );
}
