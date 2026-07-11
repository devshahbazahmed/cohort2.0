export default function BackgroundOrb({ className }) {
  return (
    <div
      className={`
        pointer-events-none absolute rounded-full
        bg-[radial-gradient(circle_at_center,#dbbdfd_0%,#c9a5fb_27%,#9165e3_46%,rgba(122,76,209,0.45)_59%,transparent_71%)]
        opacity-90 blur-[1px]
        ${className}
      `}
    >
      <div
        className="
          absolute inset-[8%] rounded-full
          bg-[radial-gradient(circle,rgba(235,216,255,0.85),rgba(189,149,244,0.42)_52%,transparent_72%)]
          blur-xl
        "
      />

      <div
        className="
          absolute inset-0 rounded-full opacity-40
          bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_140_140%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%221.1%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%22.8%22/%3E%3C/svg%3E')]
        "
      />
    </div>
  );
}
