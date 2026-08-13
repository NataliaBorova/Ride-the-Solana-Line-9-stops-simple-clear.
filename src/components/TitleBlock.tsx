import { Share2, Github, ExternalLink, Sparkles } from 'lucide-react';

interface TitleBlockProps {
  onOpenGithubToolkit: () => void;
}

export function TitleBlock({ onOpenGithubToolkit }: TitleBlockProps) {
  return (
    <div className="mt-16 rounded-md border border-[rgba(154,196,230,0.18)] overflow-hidden bg-[#0F2A45] shadow-xl">
      <div className="p-4 sm:p-5 bg-[#0F2A45] border-b border-[rgba(154,196,230,0.18)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] text-[#5E7B92] tracking-wider uppercase mb-1">
            TECHNICAL BLUEPRINT DRAWING
          </div>
          <div className="font-['Barlow_Condensed'] text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#EAF2FA]">
            The Solana Line — Beginner Edition
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="btn-open-github-kit"
            onClick={onOpenGithubToolkit}
            className="flex items-center gap-2 px-3.5 py-2 rounded bg-[#4ADE94] hover:bg-[#3ec982] text-[#0A1F33] font-mono text-xs font-bold transition-all shadow-md active:scale-95"
          >
            <Github className="w-4 h-4" />
            <span>GitHub &amp; Superteam Kit</span>
          </button>
          <a
            href="https://superteam.fun/earn/listing/explain-solana-to-crypto-beginners"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded bg-[#12314F] hover:bg-[#1A4168] text-[#EAF2FA] font-mono text-xs border border-[rgba(154,196,230,0.2)] transition-colors"
          >
            <span>Superteam Bounty</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#9FB8CE]" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[rgba(154,196,230,0.16)] bg-[#0A1F33]">
        <div className="p-3.5 sm:p-4">
          <div className="font-mono text-[10px] text-[#5E7B92] uppercase tracking-wider mb-1">
            SCALE / PROPORTION
          </div>
          <div className="font-mono text-xs sm:text-sm font-semibold text-[#EAF2FA]">
            1 Stop = 1 Concept
          </div>
        </div>
        <div className="p-3.5 sm:p-4">
          <div className="font-mono text-[10px] text-[#5E7B92] uppercase tracking-wider mb-1">
            REVISION / AUDIENCE
          </div>
          <div className="font-mono text-xs sm:text-sm font-semibold text-[#4ADE94]">
            Beginner / Simple &amp; Clear
          </div>
        </div>
        <div className="p-3.5 sm:p-4">
          <div className="font-mono text-[10px] text-[#5E7B92] uppercase tracking-wider mb-1">
            SHEET NO.
          </div>
          <div className="font-mono text-xs sm:text-sm font-semibold text-[#EAF2FA]">
            SOL-01 / 01
          </div>
        </div>
        <div className="p-3.5 sm:p-4">
          <div className="font-mono text-[10px] text-[#5E7B92] uppercase tracking-wider mb-1">
            VERIFICATION STATUS
          </div>
          <div className="font-mono text-xs sm:text-sm font-semibold text-[#FFB238] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4ADE94] inline-block animate-pulse" />
            Ready for Superteam
          </div>
        </div>
      </div>
    </div>
  );
}
