import { StationStop } from '../types';
import { ArrowLeft, ArrowRight, Lightbulb, ShieldAlert, Sparkles } from 'lucide-react';

interface InfoCardProps {
  stop: StationStop;
  onPrev: () => void;
  onNext: () => void;
}

export function InfoCard({ stop, onPrev, onNext }: InfoCardProps) {
  const isStart = stop.zone === 'start';
  const isWorks = stop.zone === 'works';
  const accentColor = isStart ? '#4ADE94' : isWorks ? '#FFB238' : '#FF6B4A';
  const accentBorder = isStart
    ? 'border-[#4ADE94]'
    : isWorks
    ? 'border-[#FFB238]'
    : 'border-[#FF6B4A]';

  return (
    <div
      id="transit-info-panel"
      className={`mt-6 rounded-md bg-[#12314F] border border-[rgba(154,196,230,0.2)] p-5 sm:p-6 shadow-xl transition-all relative overflow-hidden`}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: accentColor }}
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(154,196,230,0.12)] pb-4">
        <div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <span
              className="px-2 py-0.5 rounded text-[11px] font-mono uppercase font-bold tracking-wider"
              style={{
                backgroundColor: `${accentColor}20`,
                color: accentColor,
              }}
            >
              STOP 0{stop.id} / 09
            </span>
            <span className="text-xs font-mono text-[#5E7B92]">
              {stop.zoneLabel}
            </span>
            {stop.badge && (
              <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-[#0A1F33] text-[#9FB8CE] border border-[rgba(154,196,230,0.15)]">
                {stop.badge}
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#EAF2FA] tracking-tight">
            {stop.title}
          </h3>
          <p className="text-sm font-medium text-[#9FB8CE] mt-0.5">
            {stop.headline}
          </p>
        </div>

        {/* Navigation Step Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            id="btn-prev-stop"
            onClick={onPrev}
            className="flex items-center gap-1.5 px-3 py-2 rounded bg-[#0F2A45] hover:bg-[#1A4168] text-xs font-mono text-[#EAF2FA] border border-[rgba(154,196,230,0.18)] transition-colors active:scale-95"
            title="Previous stop"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Prev</span>
          </button>
          <button
            id="btn-next-stop"
            onClick={onNext}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-mono font-bold text-[#0A1F33] transition-all active:scale-95 shadow-md"
            style={{ backgroundColor: accentColor }}
            title="Next stop"
          >
            <span>Next</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main explanation body */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7 space-y-3">
          <p className="text-sm sm:text-base leading-relaxed text-[#D2E2F0]">
            {stop.body}
          </p>
        </div>

        {/* Analogy & Pro Tip Box */}
        <div className="lg:col-span-5 space-y-3">
          <div className="rounded bg-[#0A1F33]/70 border border-[rgba(154,196,230,0.15)] p-3.5 text-xs text-[#9FB8CE]">
            <div className="flex items-center gap-1.5 text-[#FFB238] font-mono font-semibold mb-1">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Real-World Analogy:</span>
            </div>
            <p className="italic text-[#EAF2FA]/90">"{stop.analogy}"</p>
          </div>

          <div className="rounded bg-[#0A1F33]/70 border border-[rgba(154,196,230,0.15)] p-3.5 text-xs text-[#9FB8CE]">
            <div className="flex items-center gap-1.5 text-[#4ADE94] font-mono font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pro Tip for Beginners:</span>
            </div>
            <p className="text-[#EAF2FA]/90">{stop.proTip}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
