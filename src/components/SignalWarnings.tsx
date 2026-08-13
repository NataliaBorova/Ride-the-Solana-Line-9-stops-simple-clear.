import { SIGNAL_WARNINGS } from '../data/stopsData';
import { AlertTriangle, ShieldCheck, Lock } from 'lucide-react';

export function SignalWarnings() {
  return (
    <section id="section-hazards" className="mt-14">
      <div className="flex items-baseline gap-3 mb-5 border-b border-[rgba(154,196,230,0.12)] pb-3">
        <span className="font-mono text-xs text-[#5E7B92] tracking-wider">§ 02</span>
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#EAF2FA] font-['Barlow_Condensed']">
          Signal Warnings · Safety First
        </h2>
      </div>

      {/* Hazard Striped Background Container */}
      <div
        className="rounded-md border border-[#FFB238]/40 p-2 sm:p-2.5 shadow-xl"
        style={{
          background:
            'repeating-linear-gradient(135deg, rgba(255,178,56,0.06) 0 14px, rgba(255,178,56,0.12) 14px 28px)',
        }}
      >
        <div className="space-y-2">
          {SIGNAL_WARNINGS.map((warn) => (
            <div
              key={warn.id}
              className="rounded bg-[#0F2A45] border border-[rgba(154,196,230,0.14)] p-4 sm:p-5 flex flex-col sm:flex-row items-start gap-3.5 transition-all hover:bg-[#12314F]"
            >
              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#FFB238]/10 text-[#FFB238] font-mono text-xs font-bold border border-[#FFB238]/30">
                  {warn.num}
                </span>
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <strong className="text-sm sm:text-base font-semibold text-[#EAF2FA]">
                    {warn.title}
                  </strong>
                </div>
                <p className="text-xs sm:text-sm text-[#9FB8CE] leading-relaxed">
                  {warn.detail}
                </p>
              </div>

              <div className="shrink-0 self-end sm:self-center">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#0A1F33] text-[#FFB238] border border-[#FFB238]/25">
                  CRITICAL RULE
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
