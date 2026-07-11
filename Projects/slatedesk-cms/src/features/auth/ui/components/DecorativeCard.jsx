export default function DecorativeCard() {
  return (
    <div
      className="
        pointer-events-none absolute bottom-5 right-5 hidden
        h-61.25 w-58.75 overflow-hidden rounded-lg
        border border-white/2 bg-[#0d0b12]/60
        opacity-50 xl:block
      "
    >
      <div
        className="
          absolute left-1/2 top-1/2 size-28
          -translate-x-1/2 -translate-y-1/2
          rounded-[40%]
          border border-[#4c345f]/30
          shadow-[0_0_35px_rgba(111,66,153,0.15)]
        "
      />

      <svg
        viewBox="0 0 240 240"
        className="absolute inset-0 h-full w-full opacity-30"
        aria-hidden="true"
      >
        {Array.from({ length: 18 }).map((_, index) => (
          <path
            key={index}
            d={`M ${35 + index * 3} ${150 - index * 3}
                Q ${90 + index * 4} ${50 + index * 2}
                  ${190 - index * 3} ${100 + index * 2}`}
            fill="none"
            stroke="#74528c"
            strokeWidth="0.7"
          />
        ))}
      </svg>
    </div>
  );
}
