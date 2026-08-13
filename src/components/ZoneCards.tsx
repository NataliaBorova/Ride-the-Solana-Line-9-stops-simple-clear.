import { Wallet, Cpu, ShieldCheck } from 'lucide-react';

interface ZoneCardsProps {
  onSelectZoneStart: (stopId: number) => void;
}

export function ZoneCards({ onSelectZoneStart }: ZoneCardsProps) {
  const zones = [
    {
      id: 'start',
      startStopId: 1,
      title: 'Zone 1: Getting Started',
      stops: 'Stops 01–03',
      color: '#4ADE94',
      icon: Wallet,
      headline: 'One-Time Setup in 5 Minutes',
      description:
        'Install a non-custodial wallet (Phantom or Backpack), securely transcribe your seed phrase onto paper, and obtain your public deposit address. Done once, ready for life.',
      keyConcept: 'Wallet & Private Keys',
    },
    {
      id: 'works',
      startStopId: 4,
      title: 'Zone 2: How It Works',
      stops: 'Stops 04–06',
      color: '#FFB238',
      icon: Cpu,
      headline: 'Sub-Second Global Execution',
      description:
        'Every action (swapping on Jupiter, buying an asset, sending SOL) is a cryptographically signed instruction. Thousands of global validators confirm it in ~400ms for under $0.001 fee.',
      keyConcept: 'Proof of History & Finality',
    },
    {
      id: 'safety',
      startStopId: 7,
      title: 'Zone 3: Stay Safe',
      stops: 'Stops 07–09',
      color: '#FF6B4A',
      icon: ShieldCheck,
      headline: 'Bulletproof Security Habits',
      description:
        'Always check the exact browser URL for subtle phishing typo traps, send small test transfers before moving big sums, and inspect your wallet simulation popup before signing.',
      keyConcept: 'Zero-Trust Verification',
    },
  ];

  return (
    <section id="section-zones" className="mt-14">
      <div className="flex items-baseline gap-3 mb-5 border-b border-[rgba(154,196,230,0.12)] pb-3">
        <span className="font-mono text-xs text-[#5E7B92] tracking-wider">§ 01</span>
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#EAF2FA] font-['Barlow_Condensed']">
          The Three Zones at a Glance
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {zones.map((z) => {
          const Icon = z.icon;
          return (
            <div
              key={z.id}
              onClick={() => onSelectZoneStart(z.startStopId)}
              className="group cursor-pointer rounded-md bg-[#0F2A45] border border-[rgba(154,196,230,0.16)] p-5 transition-all hover:bg-[#12314F] hover:border-[rgba(154,196,230,0.3)] hover:-translate-y-0.5 shadow-lg relative overflow-hidden"
              style={{ borderTop: `4px solid ${z.color}` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs font-mono font-bold tracking-wider px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: `${z.color}15`,
                    color: z.color,
                  }}
                >
                  {z.stops}
                </span>
                <Icon className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: z.color }} />
              </div>

              <h3 className="text-lg font-bold text-[#EAF2FA] mb-1 group-hover:text-white transition-colors">
                {z.title}
              </h3>
              <p className="text-xs font-mono text-[#9FB8CE] mb-2.5 font-medium">
                {z.headline}
              </p>
              <p className="text-xs sm:text-sm text-[#9FB8CE]/90 leading-relaxed">
                {z.description}
              </p>

              <div className="mt-4 pt-3 border-t border-[rgba(154,196,230,0.1)] flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#5E7B92]">Core focus: {z.keyConcept}</span>
                <span
                  className="font-semibold underline underline-offset-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: z.color }}
                >
                  Jump to Zone →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
