import { useEffect } from 'react';
import { StationStop } from '../types';
import { STOPS_DATA } from '../data/stopsData';

interface TransitMapProps {
  activeStopId: number;
  onSelectStop: (id: number) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export function TransitMap({
  activeStopId,
  onSelectStop,
  isPlaying,
  onTogglePlay,
}: TransitMapProps) {
  const activeStop = STOPS_DATA.find((s) => s.id === activeStopId) || STOPS_DATA[4];

  useEffect(() => {
    let timer: number | null = null;
    if (isPlaying) {
      timer = window.setInterval(() => {
        onSelectStop(activeStopId >= 9 ? 1 : activeStopId + 1);
      }, 2600);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, activeStopId, onSelectStop]);

  return (
    <div className="relative rounded-md border border-[rgba(154,196,230,0.18)] bg-[#0F2A45] p-4 sm:p-7 shadow-2xl backdrop-blur overflow-hidden">
      {/* Corner Tag */}
      <div className="absolute top-0 left-0 border-b border-r border-[rgba(154,196,230,0.18)] bg-[#0F2A45] px-3 py-1 font-mono text-[10px] tracking-wider text-[#5E7B92] uppercase flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#4ADE94] animate-ping opacity-75" />
        SCHEMATIC DWG · SOL-LINE-01
      </div>

      {/* Control buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-6 pb-2">
        <div className="flex items-center gap-2">
          <button
            id="btn-play-tour"
            onClick={onTogglePlay}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-medium transition-all ${
              isPlaying
                ? 'bg-[#FFB238] text-[#0A1F33] ring-2 ring-[#FFB238]/50'
                : 'bg-[#12314F] text-[#EAF2FA] hover:bg-[#1A4168] border border-[rgba(154,196,230,0.2)]'
            }`}
          >
            {isPlaying ? (
              <>
                <span className="animate-pulse">●</span> Pausing Train Tour
              </>
            ) : (
              <>
                <span>▶</span> Ride the Line (Auto Tour)
              </>
            )}
          </button>
          <span className="hidden sm:inline-block text-[11px] font-mono text-[#9FB8CE]/70">
            Click any station node or use navigation controls
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs font-mono text-[#9FB8CE]">
          <span>STOP {String(activeStopId).padStart(2, '0')}</span>
          <span className="text-[#5E7B92]">/ 09</span>
        </div>
      </div>

      {/* SVG Transit Line */}
      <div className="relative w-full overflow-x-auto py-2">
        <svg
          viewBox="0 0 960 280"
          className="w-full min-w-[760px] h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Zone Background Bands */}
          <rect x="50" y="40" width="280" height="210" fill="rgba(74,222,148,0.03)" rx="6" />
          <rect x="330" y="40" width="300" height="210" fill="rgba(255,178,56,0.03)" rx="6" />
          <rect x="630" y="40" width="280" height="210" fill="rgba(255,107,74,0.03)" rx="6" />

          {/* Zone Dividers */}
          <line x1="330" y1="45" x2="330" y2="245" stroke="#5E7B92" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <line x1="630" y1="45" x2="630" y2="245" stroke="#5E7B92" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

          {/* Zone Labels */}
          <g>
            <circle cx="70" cy="72" r="3" fill="#4ADE94" />
            <text x="82" y="76" className="font-bold tracking-widest uppercase text-xs" fill="#4ADE94" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '13px', letterSpacing: '0.12em' }}>
              ZONE 1: GETTING STARTED
            </text>

            <circle cx="350" cy="72" r="3" fill="#FFB238" />
            <text x="362" y="76" className="font-bold tracking-widest uppercase text-xs" fill="#FFB238" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '13px', letterSpacing: '0.12em' }}>
              ZONE 2: HOW IT WORKS
            </text>

            <circle cx="650" cy="72" r="3" fill="#FF6B4A" />
            <text x="662" y="76" className="font-bold tracking-widest uppercase text-xs" fill="#FF6B4A" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '13px', letterSpacing: '0.12em' }}>
              ZONE 3: STAY SAFE
            </text>
          </g>

          {/* Main Transit Rails */}
          {/* Segment 1: Mint */}
          <line x1="80" y1="180" x2="380" y2="180" stroke="#4ADE94" strokeWidth="6" strokeLinecap="round" />
          {/* Segment 2: Amber */}
          <line x1="380" y1="180" x2="680" y2="180" stroke="#FFB238" strokeWidth="6" />
          {/* Segment 3: Coral */}
          <line x1="680" y1="180" x2="880" y2="180" stroke="#FF6B4A" strokeWidth="6" strokeLinecap="round" />

          {/* Glowing Animated Train Position Indicator */}
          <g className="transition-all duration-500 ease-out" transform={`translate(${activeStop.cx}, 180)`}>
            <circle cx="0" cy="0" r="18" fill="none" stroke="#EAF2FA" strokeWidth="2" opacity="0.4" className="animate-ping" />
            <circle cx="0" cy="0" r="12" fill="#0F2A45" stroke="#FFFFFF" strokeWidth="3" />
            <polygon points="-4,-4 4,0 -4,4" fill="#FFFFFF" />
          </g>

          {/* Pulsing Hub Ring on Stop 5 (Interchange) */}
          <circle
            cx="480"
            cy="180"
            r="20"
            fill="none"
            stroke="#FFB238"
            strokeWidth="2"
            className="animate-pulse"
            opacity="0.75"
          />

          {/* Stations */}
          {STOPS_DATA.map((stop) => {
            const isActive = stop.id === activeStopId;
            const isMint = stop.zone === 'start';
            const isAmber = stop.zone === 'works';
            const strokeColor = isMint ? '#4ADE94' : isAmber ? '#FFB238' : '#FF6B4A';

            return (
              <g
                key={stop.id}
                id={`station-stop-${stop.id}`}
                onClick={() => onSelectStop(stop.id)}
                className="cursor-pointer group"
              >
                {/* Click target helper */}
                <rect x={stop.cx - 28} y={130} width={56} height={90} fill="transparent" />

                {/* Hub or Standard Node */}
                {stop.isHub ? (
                  <>
                    <circle
                      cx={stop.cx}
                      cy="180"
                      r={isActive ? 14 : 11}
                      stroke={isActive ? '#FFFFFF' : '#EAF2FA'}
                      strokeWidth={isActive ? 4 : 3}
                      fill="#FFB238"
                      className="transition-all duration-200"
                    />
                    <circle cx={stop.cx} cy="180" r="4" fill="#0F2A45" />
                  </>
                ) : (
                  <circle
                    cx={stop.cx}
                    cy="180"
                    r={isActive ? 9 : 6}
                    stroke={strokeColor}
                    strokeWidth={isActive ? 5 : 3}
                    fill="#0F2A45"
                    className="transition-all duration-200 group-hover:stroke-white group-hover:scale-125 origin-center"
                  />
                )}

                {/* Stop ID label */}
                <text
                  x={stop.cx}
                  y="155"
                  textAnchor="middle"
                  className={`font-mono text-[10px] transition-colors ${
                    isActive ? 'fill-[#EAF2FA] font-bold' : 'fill-[#5E7B92] group-hover:fill-[#9FB8CE]'
                  }`}
                >
                  0{stop.id}
                </text>

                {/* Station Name text */}
                <text
                  x={stop.cx}
                  y={stop.isHub ? 216 : 210}
                  textAnchor="middle"
                  className={`font-mono text-[12px] transition-all duration-150 ${
                    isActive
                      ? 'fill-[#EAF2FA] font-bold underline decoration-2 underline-offset-4'
                      : 'fill-[#9FB8CE] group-hover:fill-[#EAF2FA]'
                  }`}
                  style={stop.isHub ? { fontWeight: 700 } : {}}
                >
                  {stop.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend row */}
      <div className="mt-3 pt-3 border-t border-[rgba(154,196,230,0.16)] flex flex-wrap items-center justify-between gap-y-2 text-xs font-mono text-[#9FB8CE]">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-1 rounded bg-[#4ADE94]" />
            <span>Getting started (1–3)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-1 rounded bg-[#FFB238]" />
            <span>How it works (4–6)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-1 rounded bg-[#FF6B4A]" />
            <span>Stay safe (7–9)</span>
          </div>
        </div>
        <div className="text-[11px] text-[#5E7B92] flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#FFB238] inline-block" />
          <span>Interchange (Stop 05) = Instant Finality Settlement</span>
        </div>
      </div>
    </div>
  );
}
