import React from 'react';

// Mock database extraction representing aggregated telemetry metrics
const allTimeLeaderboard = [
  { rank: 4, name: 'Cosmos Voyage 4K Master', genre: 'SCI-FI', year: 2026, size: '2.4 GB', scoreAllTime: 92000, scoreWeekly: 14000, delta: 2 },
  { rank: 5, name: 'Cyberpunk Neon Cinematic Loop', genre: 'ACTION', year: 2025, size: '1.8 GB', scoreAllTime: 81000, scoreWeekly: 8000, delta: -1 },
  { rank: 6, name: 'Abyssal Deep Sea Oceanic Survey', genre: 'DOCS', year: 2026, size: '4.1 GB', scoreAllTime: 74000, scoreWeekly: 19000, delta: 5 }
];

const TOP_SCORE = 100000; // The reigning champion baseline weight score

export default function TopChartPage() {
  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      
      {/* 👑 REIGNING CHAMPION PREMIUM SPOTLIGHT PANEL */}
      <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c1a2e] to-[#050816] border border-white/[0.06] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-full bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1),transparent_60%)]" />
        
        {/* Giant Number Identity */}
        <div className="text-7xl md:text-9xl font-editorial text-[var(--gold)] opacity-90 select-none">
          01
        </div>
        
        <div className="flex-grow space-y-3">
          <div className="text-[10px] font-black tracking-widest text-[var(--gold)] uppercase flex items-center gap-2">
            👑 Reigning Champion
          </div>
          <h1 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
            Retro Wave Synthwave Master Archive
          </h1>
          <p className="text-[var(--text-muted)] text-xs md:text-sm max-w-xl">
            The most streamed and compiled media vault entry across the global network database loop.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-white/5 border border-white/10 text-gray-300">540K+ Streams</span>
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[var(--success)]/10 border border-[var(--success)]/20 text-[var(--success)]">▲ 1,420 This Week</span>
          </div>
        </div>
      </section>

      {/* 📊 THE SCALED RELATIVE LEDGER GRID ROW CHANNELS */}
      <section className="space-y-4">
        <div className="border-b border-white/[0.04] pb-2">
          <span className="text-[11px] font-black tracking-widest uppercase text-[var(--text-dim)]">
            ◆ Legendary Tier · 500K+ Download Activity Equivalents
          </span>
        </div>

        <div className="space-y-2">
          {allTimeLeaderboard.map((row) => {
            // Relational math: Scales indicator widths to the #1 asset baseline value
            const widthAllTime = (row.scoreAllTime / TOP_SCORE) * 100;
            const widthWeekly = (row.scoreWeekly / TOP_SCORE) * 100;

            return (
              <div 
                key={row.rank}
                className="group w-full bg-[var(--bg-elevated)] border border-white/[0.03] rounded-xl p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 transition-all duration-200 hover:border-[var(--accent)]/40 hover:bg-[var(--panel)]"
              >
                {/* Identification Coordinates */}
                <div className="flex items-center gap-4 min-w-[240px]">
                  <span className="text-xl font-editorial text-[var(--text-dim)] w-6 group-hover:text-[var(--accent)] transition-colors">
                    {row.rank.toString().padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[var(--accent)] transition-colors line-clamp-1">{row.name}</h4>
                    <span className="text-[10px] font-bold text-[var(--text-dim)] uppercase tracking-wider">{row.genre} · {row.year}</span>
                  </div>
                </div>

                {/* 📈 Data-Driven Structural Performance Bar Gauges */}
                <div className="flex-1 space-y-2 max-w-xl">
                  {/* All-Time Aggregated Bar Layer */}
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden relative">
                    <div 
                      className="h-full bg-[var(--accent)] rounded-full transition-all duration-500" 
                      style={{ width: `${widthAllTime}%` }} 
                    />
                  </div>
                  {/* Weekly Momentum Indicator Bar */}
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative">
                    <div 
                      className="h-full bg-[var(--momentum)] rounded-full transition-all duration-500" 
                      style={{ width: `${widthWeekly}%` }} 
                    />
                  </div>
                </div>

                {/* Performance Metrics Values */}
                <div className="flex items-center justify-between md:justify-end gap-6 text-right text-xs">
                  <div className="hidden sm:block">
                    <div className="font-bold text-gray-400">{row.size}</div>
                    <span className={`text-[10px] font-black ${row.delta > 0 ? 'text-[var(--success)]' : 'text-red-400'}`}>
                      {row.delta > 0 ? `▲ ${row.delta} Places` : `▼ ${Math.abs(row.delta)} Places`}
                    </span>
                  </div>
                  <a 
                    href={`/title/${row.slug}`}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-white transition-all"
                  >
                    📥
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
