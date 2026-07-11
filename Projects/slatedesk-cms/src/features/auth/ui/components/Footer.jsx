export default function Footer() {
  return (
    <footer className="border-t border-[#24212a] bg-[#111015] px-6 py-7">
      <div className="mx-auto flex max-w-375 flex-col items-center justify-between gap-5 text-sm text-[#aaa4b3] md:flex-row">
        <a
          href="/"
          className="text-xl font-semibold tracking-[-0.04em] text-[#f1edf5]"
        >
          <img src="/main-logo.png" alt="slatedesk" width={200} height={150} />
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <a href="/privacy" className="transition hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="transition hover:text-white">
            Terms of Service
          </a>
          <a href="/security" className="transition hover:text-white">
            Security
          </a>
          <a href="/status" className="transition hover:text-white">
            System Status
          </a>
        </nav>

        <p className="text-center text-xs md:text-right">
          © 2026 Synthetix AI. Enterprise Intelligence Platforms.
        </p>
      </div>
    </footer>
  );
}
