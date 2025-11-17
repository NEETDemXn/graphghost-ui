// components/BrandLogo.tsx
export function BrandLogo() {
  return (
    <div className="inline-flex items-center gap-3">
      {/* Icon container */}
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-panel/80 border border-slate-800/80 shadow-neon-soft">
        {/* subtle inner gradient */}
        <div className="absolute inset-[2px] rounded-[0.65rem] bg-gradient-to-br from-bg via-bg-alt to-bg" />

        {/* ghost icon */}
        <GhostMark />
      </div>

      {/* Wordmark */}
      <div className="leading-tight">
        <div className="font-mono text-sm tracking-[0.22em] text-neon-cyan uppercase">
          GraphGhost
        </div>
        <div className="text-[11px] text-slate-400">
          Discord Server Health
        </div>
      </div>
    </div>
  );
}

function GhostMark() {
  return (
    <div className="relative h-6 w-6">
      <svg
        viewBox="0 0 120 140"
        className="h-full w-full"
        style={{
          // softer, tighter glow for logo usage
          filter:
            "drop-shadow(0 0 4px rgba(94,242,255,0.9)) drop-shadow(0 0 6px rgba(255,58,130,0.55))",
        }}
      >
        {/* body outline (continuous path) */}
        <path
          d="
            M 30 20
            Q 60 0 90 20
            Q 110 40 105 80
            L 105 90
            L 92 110
            L 78 95
            L 60 118
            L 42 95
            L 28 110
            L 15 90
            L 15 70
            Q 15 40 30 20
            Z
          "
          fill="none"
          stroke="white"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* left eyebrow */}
        <path
          d="M 20 40 L 40 38 L 55 36"
          fill="none"
          stroke="white"
          strokeWidth={5}
          strokeLinecap="round"
        />
        {/* right eyebrow */}
        <path
          d="M 70 34 L 88 32"
          fill="none"
          stroke="white"
          strokeWidth={5}
          strokeLinecap="round"
        />
        {/* left eye (square) */}
        <path
          d="M 32 48 L 38 48 L 38 54 L 32 54 Z"
          fill="white"
          stroke="white"
          strokeWidth={2}
          strokeLinejoin="round"
        />
        {/* right eye (dot) */}
        <circle cx={82} cy={48} r={4} fill="white" />
        {/* mouth (w) */}
        <path
          d="
            M 52 65
            Q 54 71 58 71
            Q 62 71 64 65
            Q 66 71 70 71
            Q 74 71 76 65
          "
          fill="none"
          stroke="white"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
