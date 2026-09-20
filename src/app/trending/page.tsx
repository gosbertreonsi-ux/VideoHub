import React from 'react';

export default function TrendingPage() {
  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      
      {/* Dynamic Editorial Headline Title */}
      <div className="space-y-2 border-b border-white/[0.04] pb-4">
        <h1 className="text-3xl md:text-5xl font-editorial tracking-tight text-white">
          Trending Inside <span className="text-[var(--accent)]">The Vault</span> This Week
        </h1>
        <p className="text-sm text-[var(--text-muted)] max-w-xl">
          Real-time user engagement tracking across outbound clicks, wishlist additions, and media stream volume.
        </p>
      </div>

      {/* CORE DATA-STORY MATRIX PANEL */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 📚 THE STORY OF THE WEEK - NARRATIVE INFOCARD BLOCK */}
        <div className="lg:col-span-2 bg-[var(--panel)] border border-white/[0.05] rounded-2xl p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-[10px] font-black tracking-widest text-[var(--accent)] uppercase block">
              ✦ Narrative Spotlight / Story of the Week
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
              The Abyssal Resurgence
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              After sitting quietly inside the archive loops for over 4 months, the **Abyssal Ocean Survey** experienced an unexpected explosion of activity this week. Stream requests jumped by **300%** following a featured shout-out in community partner channels, triggering high-volume content updates.
            </p>
          </div>

          {/* Performance Milestone Indicator Badge Strip */}
          <div className="bg-[var(--bg)] border border-white/[0.03] rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-xs font-bold text-[var(--text-dim)] uppercase">
                Rank Jump:
              </div>
              <div className="text-sm font-bold text-gray-400">
                <span className="line-through mr-1 text-gray-600">21</span> → <span className="text-[var(--purple)] font-black">13</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-[var(--success)]/10 border border-[var(--success)]/20 text-[var(--success)]">
              ▲ 8 Places Gained
            </span>
          </div>
        </div>

        {/* 📈 PERFORMANCE DELTA METRIC COUNTERS */}
        <div className="bg-[var(--bg-elevated)] border border-white/[0.04] rounded-2xl p-6 flex flex-col justify-between">
          <div className="border-b border-white/[0.04] pb-2 mb-4">
            <span className="text-[10px] font-black tracking-widest text-[var(--text-muted)] uppercase">Platform Momentum Ledger</span>
          </div>
          
          <div className="space-y-4 flex-grow flex flex-col justify-center">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-xs font-semibold text-gray-400">Climbing Rapidly</span>
              <span className="text-sm font-black text-[var(--success)]">8 Titles</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-xs font-semibold text-gray-400">New Vault Entries</span>
              <span className="text-sm font-black text-[var(--accent)]">3 Entries</span>
            </div>
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-semibold text-gray-400">Slipping in Retention</span>
              <span className="text-sm font-black text-gray-500">4 Titles</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/[0.04] text-center">
            <span className="text-[10px] font-bold text-[var(--text-dim)] uppercase tracking-wider">Updated 4 mins ago</span>
          </div>
        </div>

      </div>

    </div>
  );
}
