import { BrandLogo } from "./components/BrandLogo";
import { WaitlistModalTrigger } from "./components/WaitlistModal";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-bg text-slate-100">
      {/* Global neon grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-neon opacity-20"
        aria-hidden="true"
      />

      {/* Neon radial overlay */}
      <div
        className="pointer-events-none fixed inset-0 bg-radial-fade opacity-70"
        aria-hidden="true"
      />

      {/* Page container */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-12 pt-6 md:px-8 md:pt-10">
        <SiteHeader />
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <PricingSection />
        <FooterSection />
      </div>
    </main>
  );
}

function GhostMascot({ height = 10, width = 10 }: { height?: number, width?: number }) {
  return (
    <div className={`relative h-${height} w-${width} flex items-center justify-center animate-float`}>
      <svg
        viewBox="0 0 120 140"
        className="h-36 w-36"
        style={{
          filter:
            "drop-shadow(0 0 10px rgba(94,242,255,0.95)) drop-shadow(0 0 14px rgba(255,58,130,0.55))",
        }}
      >
        {/* BODY OUTLINE (single continuous path) */}
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
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* LEFT EYEBROW (swoopy) */}
        <path
          d="M 20 40 L 40 38 L 55 36"
          fill="none"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* RIGHT EYEBROW */}
        <path
          d="M 70 34 L 88 32"
          fill="none"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* LEFT EYE (your little square) */}
        <path
          d="M 32 48 L 38 48 L 38 54 L 32 54 Z"
          fill="white"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* RIGHT EYE (small dot) */}
        <circle cx="82" cy="48" r="4" fill="white" />

        {/* MOUTH ("w" shape) */}
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
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="mb-10 flex items-center justify-between">
      <BrandLogo />

      <nav className="hidden items-center gap-6 text-xs font-mono text-slate-300 md:flex">
        <a href="#features" className="transition-colors hover:text-neon-cyan">
          FEATURES
        </a>
        <a href="#showcase" className="transition-colors hover:text-neon-cyan">
          DASHBOARD
        </a>
        <a href="#pricing" className="transition-colors hover:text-neon-cyan">
          PRICING
        </a>
        {/* <a
          href="#"
          className="rounded-full border border-neon-cyan/40 bg-bg/40 px-4 py-1.5 text-neon-cyan shadow-neon-soft transition hover:border-neon-cyan hover:bg-bg/80"
        >
          LAUNCH
        </a> */}
        <WaitlistModalTrigger innerText="JOIN WAITLIST" gradient={false} className="rounded-full border border-neon-cyan/40 bg-bg/40 px-4 py-1.5 text-neon-cyan shadow-neon-soft transition hover:border-neon-cyan hover:bg-bg/80" />
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative grid gap-10 pb-16 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
      {/* Left: copy + CTAs */}
      <div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-cyan/40 bg-bg/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-neon-cyan shadow-neon-soft">
          <span className="h-2 w-2 animate-pulse rounded-full bg-neon-green shadow-neon" />
          <span>Status: Online · v1.0.0</span>
        </div>

        <h1 className="mb-4 font-mono text-4xl uppercase tracking-[0.08em] text-slate-50 drop-shadow-[0_0_16px_rgba(94,242,255,0.75)] md:text-5xl lg:text-6xl">
          Monitor Your Server&apos;s
          <span className="block text-neon-cyan">Living Pulse.</span>
        </h1>

        <p className="mb-8 max-w-xl text-sm text-slate-300 md:text-base">
          GraphGhost turns your Discord server into a command center.
          Track activity, detect anomalies, and keep your community alive with
          real-time, neon-drenched analytics.
        </p>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <WaitlistModalTrigger />

          <button className="rounded-full border border-neon-magenta/60 bg-bg-alt/60 px-6 py-2 text-xs font-mono uppercase tracking-[0.18em] text-neon-magenta shadow-magenta-soft transition hover:bg-bg-alt/90">
            View Features
          </button>
        </div>

        <div className="flex flex-wrap gap-5 text-[11px] font-mono text-slate-400">
          <FeatureBullet color="bg-neon-green" label="Real-time health metrics" />
          <FeatureBullet color="bg-neon-cyan" label="Anomaly & ghost alerts" />
          <FeatureBullet color="bg-neon-magenta" label="Multi-server overview" />
        </div>
      </div>

      {/* Right: “ghost HUD” visual */}
      <div className="relative">
        {/* Glow */}
        <div
          className="pointer-events-none absolute -inset-8 rounded-[40px] bg-radial-fade opacity-80 blur-2xl"
          aria-hidden="true"
        />

        <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-bg-alt/90 via-bg/95 to-bg-alt/90 p-[1px] shadow-neon-soft backdrop-blur">
          <div className="relative h-80 rounded-[22px] bg-slate-950/80">
            {/* Scanlines & grid */}
            <div className="absolute inset-0 bg-scanlines opacity-50 mix-blend-soft-light" />
            <div className="absolute inset-0 bg-grid-neon [background-size:32px_24px]" />

            {/* GraphGhost mascot */}
            <div className="relative flex h-full items-center justify-center opacity-25">
              <GhostMascot height={40} width={40} />
            </div>

            {/* Floating HUD panels */}
            <div className="pointer-events-none absolute inset-4 flex flex-col justify-between">
              <div className="flex justify-between text-[9px] font-mono text-slate-400">
                <span>
                  NODE: <span className="text-neon-cyan">#GG-01</span>
                </span>
                <span>
                  LATENCY: <span className="text-neon-green">12 ms</span>
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-[9px] font-mono text-slate-300">
                <PanelMetric label="Active Users" value="1,248" accent="cyan" />
                <PanelMetric label="Ghost Alerts" value="3" accent="magenta" />
                <PanelMetric label="Uptime" value="99.98%" accent="green" />
              </div>

              {/* Fake console */}
              <div className="mt-2 rounded-xl border border-slate-700/70 bg-bg-alt/70 p-2 text-[9px] font-mono text-slate-300">
                <div className="mb-1 flex items-center gap-2 text-[8px] text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-green" />
                  <span>graphghost://diagnostic.log</span>
                </div>
                <div className="space-y-0.5">
                  <ConsoleLine label="Syncing channels…" status="OK" />
                  <ConsoleLine label="Ghost scan…" status="3 anomalies" statusColor="text-neon-magenta" />
                  <ConsoleLine label="Heartbeat" status="▲ 0.032s" statusColor="text-neon-cyan" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureBullet({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
      <span>{label}</span>
    </div>
  );
}

function ConsoleLine({
  label,
  status,
  statusColor = "text-neon-cyan",
}: {
  label: string;
  status: string;
  statusColor?: string;
}) {
  return (
    <div className="flex gap-1">
      <span className="text-neon-green">&gt;</span>
      <span>{label}</span>
      <span className={statusColor}>{status}</span>
    </div>
  );
}

function PanelMetric({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: "cyan" | "magenta" | "green";
}) {
  const accentColor =
    accent === "cyan"
      ? "text-neon-cyan"
      : accent === "magenta"
        ? "text-neon-magenta"
        : "text-neon-green";

  const borderColor =
    accent === "cyan"
      ? "border-neon-cyan/50"
      : accent === "magenta"
        ? "border-neon-magenta/50"
        : "border-neon-green/50";

  return (
    <div
      className={`rounded-lg border ${borderColor} bg-bg/80 px-2 py-1 shadow-neon-soft`}
    >
      <div className="text-[8px] text-slate-400">{label}</div>
      <div className={`text-xs font-semibold ${accentColor}`}>{value}</div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="mb-16 space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-neon-cyan">
            Core Systems
          </h2>
          <p className="mt-2 text-xl font-semibold text-slate-50">
            Everything you need to keep your server alive.
          </p>
        </div>
        <p className="max-w-md text-sm text-slate-400">
          GraphGhost listens to your server in real-time, analyzes activity
          patterns, and surfaces issues before they become silent graveyards.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <FeatureCard
          title="Real-Time Pulse"
          badge="Telemetry"
          description="Live charts for messages, joins, voice activity, and more. See your community breathing in real time."
          items={[
            "Activity heatmaps",
            "Channel-level metrics",
            "Peak hours detection",
          ]}
        />
        <FeatureCard
          title="Ghost Alerts"
          badge="Detection"
          description="Intelligent alerts when activity flatlines, spikes, or drifts into unhealthy patterns."
          items={[
            "Custom alert rules",
            "Burnout & spam signals",
            "Quiet channel detection",
          ]}
        />
        <FeatureCard
          title="Multi-Server Overview"
          badge="Control"
          description="One unified HUD for all your Discord servers, with aggregated health scores."
          items={[
            "Global health index",
            "Per-server status tiles",
            "Cross-server comparisons",
          ]}
        />
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  badge,
  items,
}: {
  title: string;
  description: string;
  badge: string;
  items: string[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800/90 bg-bg-alt/80 p-[1px] transition hover:border-neon-cyan/60 hover:shadow-neon-soft">
      <div className="relative h-full rounded-[1.05rem] bg-gradient-to-br from-bg-alt/80 via-bg/90 to-bg-alt/80 p-4">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -inset-10 bg-radial-fade opacity-60 blur-3xl" />
        </div>

        <div className="mb-2 flex items-center justify-between text-xs font-mono">
          <span className="rounded-full border border-neon-cyan/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-neon-cyan">
            {badge}
          </span>
          <span className="text-[10px] text-slate-500">MODULE</span>
        </div>

        <h3 className="mb-1 text-base font-semibold text-slate-50">
          {title}
        </h3>
        <p className="mb-3 text-xs text-slate-400">{description}</p>

        <ul className="space-y-1.5 text-[11px] text-slate-300">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-neon-cyan" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ShowcaseSection() {
  return (
    <section id="showcase" className="mb-16">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-neon-cyan">
            Dashboard Preview
          </h2>
          <p className="mt-2 text-xl font-semibold text-slate-50">
            Your server as a command center.
          </p>
        </div>
        <span className="hidden rounded-full border border-slate-700 px-3 py-1 text-[11px] font-mono text-slate-400 md:inline-flex">
          Press <span className="mx-1 rounded bg-slate-800 px-1">~</span> to
          open console
        </span>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-bg-alt/80 p-[1px] shadow-neon-soft">
        <div className="relative rounded-[1.35rem] bg-slate-950/90 p-4">
          {/* Fake window header */}
          <div className="mb-3 flex items-center justify-between text-[10px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-neon-magenta/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-neon-yellow/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-neon-green/80" />
            </div>
            <span className="font-mono">graphghost://dashboard.hud</span>
            <span className="font-mono text-neon-cyan">LIVE</span>
          </div>

          {/* Layout: graphs + side panel */}
          <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            {/* Graphs */}
            <div className="space-y-3">
              <div className="rounded-xl border border-slate-800 bg-bg-alt/80 p-3">
                <div className="mb-1 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Server Heartbeat</span>
                  <span className="text-neon-cyan">Real-time</span>
                </div>
                {/* Fake waveform */}
                <div className="mt-2 flex h-20 items-end gap-1 overflow-hidden rounded-lg bg-gradient-to-t from-bg via-bg-alt/40 to-bg-alt/10">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-0.5 rounded-t-full bg-neon-cyan/70"
                      style={{
                        height: `${20 + Math.abs(Math.sin(i / 4)) * 60}%`,
                        opacity: 0.4 + (i % 5) * 0.12,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <MiniGraphCard title="Message Throughput" />
                <MiniGraphCard title="Voice Activity" />
              </div>
            </div>

            {/* Side panel */}
            <div className="space-y-3">
              <div className="rounded-xl border border-neon-magenta/40 bg-bg-alt/80 p-3 shadow-magenta-soft">
                <div className="mb-1 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Ghost Alerts</span>
                  <span className="text-neon-magenta">3 active</span>
                </div>
                <div className="space-y-1.5 text-[10px] font-mono text-slate-300">
                  <AlertRow
                    level="HIGH"
                    message="Channel #general activity dropped 82%."
                  />
                  <AlertRow
                    level="MED"
                    message="Moderator response time trending up."
                  />
                  <AlertRow
                    level="LOW"
                    message="Voice channels under-utilized."
                  />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-bg-alt/80 p-3">
                <div className="mb-1 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Server Health Index</span>
                  <span className="text-neon-green">87 / 100</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800">
                  <div className="h-1.5 w-[87%] rounded-full bg-gradient-to-r from-neon-magenta via-neon-cyan to-neon-green shadow-neon-soft" />
                </div>
                <div className="mt-2 flex justify-between text-[9px] text-slate-500">
                  <span>Stable</span>
                  <span>At risk</span>
                  <span>Critical</span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-bg-alt/80 p-3">
                <div className="mb-2 text-[10px] font-mono text-slate-400">
                  Connected Servers
                </div>
                <div className="space-y-1.5 text-[10px] font-mono">
                  <ServerPill name="Main Hub" status="online" />
                  <ServerPill name="Events Nexus" status="online" />
                  <ServerPill name="Archive Node" status="idle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniGraphCard({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-bg-alt/80 p-3">
      <div className="mb-1 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>{title}</span>
        <span className="text-neon-cyan">24h</span>
      </div>
      <div className="mt-1 flex h-12 items-end gap-[3px] rounded-md bg-gradient-to-t from-bg to-bg-alt/30">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="w-1 rounded-t-full bg-neon-magenta/70"
            style={{
              height: `${15 + Math.abs(Math.cos(i / 3)) * 60}%`,
              opacity: 0.32 + (i % 3) * 0.14,
            }}
          />
        ))}
      </div>
    </div>
  );
}

type AlertLevel = "HIGH" | "MED" | "LOW";

function AlertRow({ level, message }: { level: AlertLevel; message: string }) {
  const colorMap: Record<AlertLevel, string> = {
    HIGH: "text-neon-magenta",
    MED: "text-neon-yellow",
    LOW: "text-neon-cyan",
  };

  return (
    <div className="flex gap-2">
      <span className={`min-w-[36px] text-center ${colorMap[level]}`}>
        [{level}]
      </span>
      <span className="flex-1">{message}</span>
    </div>
  );
}

function ServerPill({
  name,
  status,
}: {
  name: string;
  status: "online" | "idle";
}) {
  const color =
    status === "online" ? "bg-neon-green shadow-neon-soft" : "bg-slate-500";

  return (
    <div className="flex items-center justify-between rounded-full bg-bg/80 px-3 py-1">
      <div className="text-slate-300">{name}</div>
      <div className="flex items-center gap-1 text-[9px] text-slate-400">
        <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
        <span className="uppercase tracking-[0.18em]">
          {status === "online" ? "ONLINE" : "IDLE"}
        </span>
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="mb-16">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-neon-cyan">
            Access Levels
          </h2>
          <p className="mt-2 text-xl font-semibold text-slate-50">
            Start monitoring in under a minute.
          </p>
        </div>
        <p className="max-w-md text-sm text-slate-400">
          Flexible options whether you&apos;re running a small community or a
          multi-shard network of servers.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <PricingCard
          tier="Free"
          highlight={false}
          price="$0"
          description="For small servers and testing the waters."
          features={["1 Discord server", "Basic health metrics", "24h history"]}
        />
        <PricingCard
          tier="Operator"
          highlight
          price="$9 / mo"
          description="For serious community managers and mod teams."
          features={[
            "Up to 5 servers",
            "Ghost alerts & rules",
            "90-day history",
            "Role-based access",
          ]}
        />
        <PricingCard
          tier="Overseer"
          highlight={false}
          price="Contact"
          description="For large networks and studios."
          features={[
            "Unlimited servers",
            "Custom SLAs",
            "Priority support",
            "On-prem options",
          ]}
        />
      </div>
    </section>
  );
}

function PricingCard({
  tier,
  highlight,
  price,
  description,
  features,
}: {
  tier: string;
  highlight: boolean;
  price: string;
  description: string;
  features: string[];
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-bg-alt/80 p-[1px] ${highlight
        ? "border-neon-cyan/70 shadow-neon-soft"
        : "border-slate-800/90"
        }`}
    >
      {highlight && (
        <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60 blur-3xl" />
      )}
      <div className="relative rounded-[1.05rem] bg-gradient-to-br from-bg-alt/90 via-bg/95 to-bg-alt/90 p-5">
        <div className="mb-3 flex items-center justify-between text-xs font-mono">
          <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-slate-300">
            {tier}
          </span>
          {highlight && (
            <span className="text-[10px] uppercase tracking-[0.14em] text-neon-cyan">
              Recommended
            </span>
          )}
        </div>
        <div className="mb-1 text-2xl font-semibold text-slate-50">
          {price}
        </div>
        <p className="mb-4 text-xs text-slate-400">{description}</p>
        <ul className="mb-4 space-y-1.5 text-[11px] text-slate-300">
          {features.map((feat) => (
            <li key={feat} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
        <WaitlistModalTrigger
          className={`w-full rounded-full border px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.16em] ${highlight
            ? "border-neon-cyan bg-neon-cyan text-bg shadow-neon-soft hover:bg-neon-cyan/90"
            : "border-slate-700 text-slate-200 hover:border-neon-cyan hover:text-neon-cyan"
            } transition`}
          innerText={tier === "Free" ? "Get Started": "Request Access"}
          gradient={false}
        />
      </div>
    </div>
  );
}

function FooterSection() {
  return (
    <footer className="mt-auto border-t border-slate-800/80 pt-4 text-[11px] text-slate-500">
      <div className="grid gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-center">
        <div className="font-mono">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-neon-cyan">&gt;</span>
            <span>GraphGhost v1.0.0</span>
          </div>
          <div className="flex flex-wrap gap-4 pl-5 text-[10px]">
            <span>Status: ONLINE</span>
            <span>Last Sync: 0.032s ago</span>
            <span>Shard: WEST-01</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-4 text-[10px] font-mono">
          <Link href="https://github.com/NEETDemXn/graphghost-ui" target="_blank" className="hover:text-neon-cyan">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
