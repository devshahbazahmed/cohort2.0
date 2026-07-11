export default function AbstractNetwork() {
  return (
    <svg
      viewBox="0 0 700 900"
      aria-hidden="true"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0" x2="1">
          <stop offset="0%" stopColor="#6472ad" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#bec4ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#8c76bc" stopOpacity="0.08" />
        </linearGradient>

        <filter id="networkBlur">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
      </defs>

      <g
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="1.2"
        filter="url(#networkBlur)"
      >
        {Array.from({ length: 18 }).map((_, index) => {
          const offset = index * 42;

          return (
            <path
              key={index}
              d={`M ${-80 + offset} 720
                  Q ${80 + offset * 0.4} ${150 + (index % 4) * 55}
                    ${190 + offset * 0.45} 620
                  T ${370 + offset * 0.2} 310
                  T ${690 + offset * 0.08} 560`}
            />
          );
        })}

        {Array.from({ length: 13 }).map((_, index) => (
          <path
            key={`vertical-${index}`}
            d={`M ${40 + index * 52} 100
                Q ${120 + index * 35} ${400 + (index % 3) * 50}
                  ${20 + index * 58} 830`}
          />
        ))}
      </g>

      <g fill="#b8baf0">
        {Array.from({ length: 38 }).map((_, index) => (
          <circle
            key={index}
            cx={(index * 83) % 700}
            cy={80 + ((index * 137) % 730)}
            r={index % 5 === 0 ? 2.2 : 1.2}
            opacity={index % 3 === 0 ? 0.55 : 0.25}
          />
        ))}
      </g>
    </svg>
  );
}
