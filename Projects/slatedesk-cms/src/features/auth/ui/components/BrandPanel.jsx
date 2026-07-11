import { Sparkles } from 'lucide-react';
import AbstractNetwork from './AbstractNetwork.jsx';

export default function BrandPanel() {
  return (
    <aside className="relative hidden min-h-full overflow-hidden border-r border-white/5 lg:block">
      <div className="absolute inset-0 bg-[#0b1026]" />

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_20%_35%,rgba(103,112,197,0.32),transparent_35%),radial-gradient(circle_at_85%_65%,rgba(107,74,166,0.25),transparent_38%),linear-gradient(145deg,#071022_0%,#121832_48%,#10101d_100%)]
        "
      />

      <div className="absolute -left-24 top-[12%] h-125 w-125 rounded-full border border-[#9d9ee2]/15" />
      <div className="absolute left-[18%] top-[22%] h-105 w-105 rotate-45 rounded-[32%] border border-[#a9a9eb]/10" />
      <div className="absolute -right-28 top-[33%] h-125 w-125 rounded-full border border-[#b3a5eb]/10" />

      <div className="absolute inset-0 opacity-40">
        <AbstractNetwork />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-[#0e0d18] via-transparent to-transparent" />

      <div className="relative z-10 flex h-full min-h-[calc(100vh-86px)] flex-col justify-between p-7 xl:p-12">
        <a
          href="/"
          className="text-xl font-semibold tracking-[-0.04em] text-white"
        >
          Synthetix AI
        </a>

        <div className="max-w-107.5 pb-2">
          <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#c3abf2]">
            <Sparkles className="size-4" />
            Next-gen intelligence
          </div>

          <h2 className="text-[38px] font-semibold leading-[1.15] tracking-[-0.04em] text-[#efecf5] xl:text-[43px]">
            Accelerate your team&apos;s intelligence.
          </h2>

          <p className="mt-5 max-w-102.5 text-[17px] leading-7 text-[#c1bcc9]">
            Connect your enterprise data to our specialized AI models and unlock
            unparalleled strategic insights in seconds.
          </p>

          <div className="mt-12 flex gap-12">
            <div>
              <strong className="block text-xl text-[#d7d2df]">99.9%</strong>
              <span className="mt-1 block text-xs text-[#777181]">
                Uptime SLA
              </span>
            </div>

            <div>
              <strong className="block text-xl text-[#d7d2df]">ISO</strong>
              <span className="mt-1 block text-xs text-[#777181]">
                27001 Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
