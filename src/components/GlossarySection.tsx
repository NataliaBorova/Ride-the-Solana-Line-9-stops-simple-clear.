import { GLOSSARY_TERMS } from '../data/stopsData';
import { BookOpen } from 'lucide-react';

export function GlossarySection() {
  return (
    <section id="section-glossary" className="mt-14">
      <div className="flex items-baseline gap-3 mb-5 border-b border-[rgba(154,196,230,0.12)] pb-3">
        <span className="font-mono text-xs text-[#5E7B92] tracking-wider">§ 03</span>
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#EAF2FA] font-['Barlow_Condensed']">
          Map Legend &amp; Technical Glossary
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {GLOSSARY_TERMS.map((item) => (
          <div
            key={item.term}
            className="rounded-md bg-[#0F2A45] border border-[rgba(154,196,230,0.16)] p-4.5 transition-all hover:bg-[#12314F] hover:border-[rgba(154,196,230,0.3)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-sm font-bold text-[#4ADE94]">
                  {item.term}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#0A1F33] text-[#9FB8CE] border border-[rgba(154,196,230,0.15)]">
                  {item.tag}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#9FB8CE] leading-relaxed mb-3">
                {item.definition}
              </p>
            </div>

            <div className="pt-2.5 border-t border-[rgba(154,196,230,0.1)] text-[11px] font-mono text-[#EAF2FA]/80">
              <span className="text-[#FFB238]">Simple analogy:</span> {item.simpleAnalogy}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
