import { useState } from 'react';
import { GITHUB_REPO_PROFILES } from '../data/stopsData';
import { X, Copy, Check, ExternalLink, Image as ImageIcon, Sparkles, FileText, Tag, FolderGit2 } from 'lucide-react';
import bannerImg from '../assets/images/solana_line_cover_1786655617071.jpg';

interface GithubToolkitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GithubToolkitModal({ isOpen, onClose }: GithubToolkitModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const sampleReadmeMarkdown = `# 🚇 The Solana Line — A Beginner's Transit Map
> **Ride the Solana Line: 9 stops, pure clarity.**  
> An interactive transit-style blueprint map explaining Solana blockchain fundamentals simply for crypto beginners.

![The Solana Line Banner](${bannerImg})

---

## 🎯 Project Overview

Built for the **[Superteam Earn Bounty: Explain Solana to Crypto Beginners](${GITHUB_REPO_PROFILES.bountyListingUrl})**.

Solana can look intimidating with complex technical terminology like *Proof of History, Tower BFT, Sealevel, and RPCs*. **The Solana Line** turns these abstract concepts into an intuitive, interactive transit metro map. 

### 🗺️ The 3 Transit Zones (9 Stations):
1. **Zone 1: Getting Started** 🟢
   - **Stop 01: Wallet** — Your non-custodial digital passport & keychain (Phantom/Backpack).
   - **Stop 02: Seed Phrase** — 12-24 word master key. Paper backup only.
   - **Stop 03: Address** — Your public account number safe for sharing.

2. **Zone 2: How It Works** 🟡
   - **Stop 04: Send** — Cryptographic transaction broadcast to validators.
   - **Stop 05: Confirmed ~400ms (The Interchange)** — Proof of History sub-second settlement.
   - **Stop 06: Fee** — Microscopic costs (< $0.001 per transaction).

3. **Zone 3: Stay Safe** 🔴
   - **Stop 07: Verify URL** — Avoiding pixel-perfect copycat phishing domains.
   - **Stop 08: Test First** — The small-amount transfer habit before moving large sums.
   - **Stop 09: Read & Sign** — Checking wallet transaction simulations before signing.

---

## 🚀 Key Features

- ⚡ **Interactive Transit Schematic**: Click any station or ride the automated tour train.
- 💡 **Real-World Analogies & Pro-Tips**: Every technical term translated into clear, everyday mental models.
- ⚠️ **Signal Warnings & Hazard Checklist**: Actionable security advice for absolute beginners.
- 📖 **Map Legend & Glossary**: Simple definitions for SOL, Validators, PoH, and RPCs.
- 📱 **Mobile & Desktop Responsive**: Built with React, TypeScript, and Tailwind CSS.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Design System**: Technical Blueprint / Subway Map aesthetic
- **Icons**: Lucide Icons
- **Deployment**: Static Web App / Cloud Run

---

## 💻 Local Development

\`\`\`bash
# 1. Clone repository
git clone https://github.com/YOUR_USERNAME/${GITHUB_REPO_PROFILES.suggestedRepoNames[0]}.git

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
\`\`\`

---

## 📄 License
MIT License. Created for the Solana community & Superteam Earn.
`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0A1F33]/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-lg bg-[#0F2A45] border border-[rgba(154,196,230,0.25)] shadow-2xl overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[rgba(154,196,230,0.18)] bg-[#0A1F33]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-[#4ADE94]/10 text-[#4ADE94] border border-[#4ADE94]/20">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Barlow_Condensed'] text-xl sm:text-2xl font-bold uppercase text-[#EAF2FA] tracking-wide">
                GitHub Repository &amp; Superteam Kit
              </h3>
              <p className="text-xs font-mono text-[#9FB8CE]">
                Ready-to-copy repository names, descriptions, tags, and banner image
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded bg-[#12314F] hover:bg-[#1A4168] text-[#9FB8CE] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-sm text-[#EAF2FA]">
          {/* 1. Generated Banner Image Showcase */}
          <div className="rounded-md border border-[rgba(154,196,230,0.18)] bg-[#0A1F33] p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#4ADE94]" />
                <span className="font-mono text-xs font-bold text-[#EAF2FA] uppercase">
                  1. Generated Banner Image for GitHub &amp; Submission
                </span>
              </div>
              <a
                href={bannerImg}
                download="the-solana-line-cover.jpg"
                className="text-xs font-mono px-2.5 py-1 rounded bg-[#4ADE94] hover:bg-[#3ec982] text-[#0A1F33] font-bold transition-all"
              >
                Download Banner (16:9)
              </a>
            </div>
            <div className="relative rounded overflow-hidden border border-[rgba(154,196,230,0.2)] aspect-video bg-black/40">
              <img
                src={bannerImg}
                alt="The Solana Line — A Beginner's Transit Map Cover Banner"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[11px] font-mono text-[#9FB8CE] mt-2">
              ✓ Generated in 16:9 ratio, dark blueprint theme with glowing subway lines and Solana colorways.
            </p>
          </div>

          {/* 2. Repository Names */}
          <div className="rounded-md border border-[rgba(154,196,230,0.18)] bg-[#0A1F33] p-4">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#FFB238]" />
              <span className="font-mono text-xs font-bold text-[#EAF2FA] uppercase">
                2. Recommended GitHub Repo Names (Выберите название)
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {GITHUB_REPO_PROFILES.suggestedRepoNames.map((name, idx) => (
                <div
                  key={name}
                  className="flex items-center justify-between p-2.5 rounded bg-[#0F2A45] border border-[rgba(154,196,230,0.15)] hover:border-[#4ADE94]/40 transition-colors"
                >
                  <span className="font-mono text-xs text-[#4ADE94] font-semibold">
                    {name}
                  </span>
                  <button
                    onClick={() => copyToClipboard(name, `name-${idx}`)}
                    className="p-1 px-2 rounded bg-[#12314F] hover:bg-[#1A4168] text-[11px] font-mono text-[#EAF2FA] flex items-center gap-1 transition-all"
                  >
                    {copiedKey === `name-${idx}` ? (
                      <>
                        <Check className="w-3 h-3 text-[#4ADE94]" />
                        <span className="text-[#4ADE94]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Short Descriptions */}
          <div className="rounded-md border border-[rgba(154,196,230,0.18)] bg-[#0A1F33] p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#4ADE94]" />
                <span className="font-mono text-xs font-bold text-[#EAF2FA] uppercase">
                  3. GitHub Repository Description (About section)
                </span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(GITHUB_REPO_PROFILES.shortDescription, 'desc-en')
                }
                className="p-1 px-2.5 rounded bg-[#12314F] hover:bg-[#1A4168] text-xs font-mono text-[#EAF2FA] flex items-center gap-1.5 transition-all"
              >
                {copiedKey === 'desc-en' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#4ADE94]" />
                    <span className="text-[#4ADE94]">Copied Description</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Description (EN)</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-3 rounded bg-[#0F2A45] font-mono text-xs text-[#9FB8CE] border border-[rgba(154,196,230,0.12)]">
              {GITHUB_REPO_PROFILES.shortDescription}
            </div>

            {/* Russian description option */}
            <div className="mt-3 pt-3 border-t border-[rgba(154,196,230,0.1)]">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-mono text-[#FFB238]">Описание на русском (RU):</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      'Интерактивная карта метро «Линия Solana» для новичков: 9 понятных станций простыми словами. Пошаговый гид по кошелькам, транзакциям и безопасности в Solana.',
                      'desc-ru'
                    )
                  }
                  className="text-xs font-mono text-[#9FB8CE] hover:text-white flex items-center gap-1"
                >
                  {copiedKey === 'desc-ru' ? <Check className="w-3 h-3 text-[#4ADE94]" /> : <Copy className="w-3 h-3" />}
                  <span>Копировать RU</span>
                </button>
              </div>
              <p className="text-xs text-[#9FB8CE] italic">
                «Интерактивная карта метро «Линия Solana» для новичков: 9 понятных станций простыми словами. Пошаговый гид по кошелькам, транзакциям и безопасности в Solana.»
              </p>
            </div>
          </div>

          {/* 4. GitHub Topics / Tags */}
          <div className="rounded-md border border-[rgba(154,196,230,0.18)] bg-[#0A1F33] p-4">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#FFB238]" />
                <span className="font-mono text-xs font-bold text-[#EAF2FA] uppercase">
                  4. GitHub Topics / Tags
                </span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(GITHUB_REPO_PROFILES.topics.join(', '), 'tags')
                }
                className="p-1 px-2.5 rounded bg-[#12314F] hover:bg-[#1A4168] text-xs font-mono text-[#EAF2FA] flex items-center gap-1.5 transition-all"
              >
                {copiedKey === 'tags' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#4ADE94]" />
                    <span className="text-[#4ADE94]">Copied Tags</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy All Tags</span>
                  </>
                )}
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {GITHUB_REPO_PROFILES.topics.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-[#0F2A45] text-[#9FB8CE] border border-[rgba(154,196,230,0.15)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Complete README.md Generator */}
          <div className="rounded-md border border-[rgba(154,196,230,0.18)] bg-[#0A1F33] p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#4ADE94]" />
                <span className="font-mono text-xs font-bold text-[#EAF2FA] uppercase">
                  5. Full Ready README.md (Готовый файл README)
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(sampleReadmeMarkdown, 'readme')}
                className="p-1.5 px-3 rounded bg-[#4ADE94] hover:bg-[#3ec982] text-xs font-mono font-bold text-[#0A1F33] flex items-center gap-1.5 transition-all shadow-md active:scale-95"
              >
                {copiedKey === 'readme' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied Full README!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy README.md Markdown</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-3.5 rounded bg-[#0F2A45] font-mono text-[11px] text-[#9FB8CE] border border-[rgba(154,196,230,0.15)] overflow-x-auto max-h-48 whitespace-pre-wrap">
              {sampleReadmeMarkdown}
            </pre>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0A1F33] border-t border-[rgba(154,196,230,0.18)] flex items-center justify-between">
          <a
            href={GITHUB_REPO_PROFILES.bountyListingUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[#FFB238] hover:underline"
          >
            <span>Superteam Earn Bounty Link</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#12314F] hover:bg-[#1A4168] text-xs font-mono text-[#EAF2FA] transition-colors"
          >
            Close Kit
          </button>
        </div>
      </div>
    </div>
  );
}
