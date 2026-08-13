import { useState, useCallback } from 'react';
import { STOPS_DATA } from './data/stopsData';
import { TransitMap } from './components/TransitMap';
import { InfoCard } from './components/InfoCard';
import { ZoneCards } from './components/ZoneCards';
import { SignalWarnings } from './components/SignalWarnings';
import { GlossarySection } from './components/GlossarySection';
import { TitleBlock } from './components/TitleBlock';
import { GithubToolkitModal } from './components/GithubToolkitModal';
import { FolderGit2, ExternalLink, Sparkles, Navigation } from 'lucide-react';

export default function App() {
  const [activeStopId, setActiveStopId] = useState<number>(5); // default to interchange stop 5
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isGithubModalOpen, setIsGithubModalOpen] = useState<boolean>(false);

  const activeStop = STOPS_DATA.find((s) => s.id === activeStopId) || STOPS_DATA[4];

  const handlePrevStop = useCallback(() => {
    setActiveStopId((prev) => (prev <= 1 ? 9 : prev - 1));
  }, []);

  const handleNextStop = useCallback(() => {
    setActiveStopId((prev) => (prev >= 9 ? 1 : prev + 1));
  }, []);

  const handleSelectZoneStart = useCallback((stopId: number) => {
    setActiveStopId(stopId);
    // Smooth scroll to map
    const mapElement = document.getElementById('transit-map-section');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A1F33] text-[#EAF2FA] font-sans selection:bg-[#4ADE94]/30 selection:text-white pb-20">
      {/* Corner Technical Registration Crosshairs */}
      <div className="hidden sm:block fixed top-3 left-3 w-5 h-5 pointer-events-none z-40 opacity-40">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#5E7B92]" />
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#5E7B92]" />
      </div>
      <div className="hidden sm:block fixed top-3 right-3 w-5 h-5 pointer-events-none z-40 opacity-40">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#5E7B92]" />
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#5E7B92]" />
      </div>
      <div className="hidden sm:block fixed bottom-3 left-3 w-5 h-5 pointer-events-none z-40 opacity-40">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#5E7B92]" />
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#5E7B92]" />
      </div>
      <div className="hidden sm:block fixed bottom-3 right-3 w-5 h-5 pointer-events-none z-40 opacity-40">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#5E7B92]" />
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#5E7B92]" />
      </div>

      {/* Main Sheet Container */}
      <main className="max-w-[1020px] mx-auto px-4 sm:px-8 pt-8 sm:pt-14">
        {/* Top Header Bar */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(154,196,230,0.14)] pb-4 mb-6">
          <div className="flex items-center gap-2.5 font-mono text-xs text-[#5E7B92] tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#4ADE94] inline-block animate-pulse" />
            <span>DWG NO. SOL–01 · BEGINNER EDITION</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="top-btn-github-kit"
              onClick={() => setIsGithubModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#4ADE94] hover:bg-[#3ec982] text-[#0A1F33] font-mono text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>GitHub &amp; Bounty Kit</span>
            </button>

            <a
              href="https://superteam.fun/earn/listing/explain-solana-to-crypto-beginners"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0F2A45] hover:bg-[#12314F] text-[#9FB8CE] hover:text-white font-mono text-xs border border-[rgba(154,196,230,0.18)] transition-colors"
            >
              <span>Superteam Listing</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </header>

        {/* Hero Title & Lede */}
        <div className="mb-10">
          <h1 className="font-['Barlow_Condensed'] text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#EAF2FA] leading-[0.95] max-w-3xl">
            Ride <em className="not-italic text-[#FFB238]">the Solana Line</em> —
            <br />
            9 stops, simple &amp; clear.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#9FB8CE] max-w-2xl leading-relaxed">
            Solana looks complicated from the outside with technical acronyms. It isn’t — it’s just a short, ultra-fast transit route. Tap any station node below to see what happens there.
          </p>
        </div>

        {/* Interactive Transit Map Section */}
        <div id="transit-map-section">
          <TransitMap
            activeStopId={activeStopId}
            onSelectStop={(id) => {
              setActiveStopId(id);
              if (isPlaying) setIsPlaying(false);
            }}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying(!isPlaying)}
          />
        </div>

        {/* Selected Stop Details Card */}
        <InfoCard
          stop={activeStop}
          onPrev={handlePrevStop}
          onNext={handleNextStop}
        />

        {/* Section 1: The Three Zones */}
        <ZoneCards onSelectZoneStart={handleSelectZoneStart} />

        {/* Section 2: Hazard / Signal Warnings */}
        <SignalWarnings />

        {/* Section 3: Map Legend & Glossary */}
        <GlossarySection />

        {/* Title Block Footer */}
        <TitleBlock onOpenGithubToolkit={() => setIsGithubModalOpen(true)} />
      </main>

      {/* GitHub Export & Submission Kit Modal */}
      <GithubToolkitModal
        isOpen={isGithubModalOpen}
        onClose={() => setIsGithubModalOpen(false)}
      />
    </div>
  );
}
