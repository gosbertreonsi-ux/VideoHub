import React from 'react';
import { db } from '../../lib/db';

export const revalidate = 0; // Force immediate database metric read loops on execution visit

export default async function TopChartPage() {
  // 🏎️ Direct Database Aggregate Layer: Fetch all entries ordered descending by views count column
  const allTimeLeaderboard = await db.title.findMany({
    orderBy: { views: 'desc' },
    take: 50
  });

  // Establishes maximum metric boundary ceiling to calculate relational percentages safely
  const championBaseline = allTimeLeaderboard[0]?.views || 1000;
  
  const championItem = allTimeLeaderboard[0];
  const chartRows = allTimeLeaderboard.slice(1);

  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      
      {/* 👑 REIGNING CHAMPION PREMIUM OVERVIEW HERO DISPLAY */}
      {championItem ? (
        <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c1a2e] to-[#050816] border border-white/[0.06] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl animate-scale-up">
          <div className="absolute top-0 right-0 w-96 h-full bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1),transparent_60%)]" />
          
          <div className="text-7xl md:text-9xl font-editorial text-[var(--gold)] opacity-90 select-none">01</div>
          
          <div className="flex-grow space-y-3 relative z-10">
            <div className="text-[10px] font-black tracking-widest text-[var(--gold)] uppercase flex items-center gap-2">
              👑 Reigning Champion
            </div>
            <h1 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
              {championItem.name}
            </h1>
            <p className="text-[var(--text-muted)] text-xs md:text-sm max-w-xl line-clamp-2">
              {championItem.synopsis}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-white/5 border border-white/10 text-gray-300">
                📊 {championItem.views.toLocaleString()} Total Network Views
              </span>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[var(--success)]/10 border border-[var(--success)]/20 text-[var(--success)] uppercase tracking-wider">
                Format: {championItem.sourceType}
              </span>
            </div>
          </div>
        </section>
      ) : (
        <div className="text-center py-10 bg-[var(--panel)] border border-white/5 rounded-2xl italic text-gray-500">
          Cloud leaderboard ledger currently unpopulated.
        </div>
      )}

      {/* 📊 CHART CHANNEL RANKS MATRIX ROWS */}
      {chartRows.length > 0 && (
        <section className="space-y-4">
          <div className="border-b border-white/[0.04] pb-2 flex items-center justify-between">
            <span className="text-[11px] font-black tracking-widest uppercase text-[var(--text-dim)]">
              ◆ Legendary Tier · Scaled Performance Channels
            </span>
            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Ranks 2+</span>
          </div>

          <div className="space-y-2">
            {chartRows.map((row, index) => {
              // Mathematical Scaling Engine: Computes percentage width based on current view volumes
              const relativeWidthPercentage = (row.views / championBaseline) * 100;

              return (
                <div 
                  key={row.id}
                  className="group w-full bg-[var(--bg-elevated)] border border-white/[0.03] rounded-xl p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 transition-all duration-200 hover:border-[var(--accent)]/40 hover:bg-[var(--panel)]"
                >
                  {/* Identification Metadata Block */}
                  <div className="flex items-center gap-4 min-w-[260px]">
                    <span className="text-xl font-editorial text-[var(--text-dim)] w-8 group-hover:text-[var(--accent)] transition-colors">
                      {(index + 2).toString().padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[var(--accent)] transition-colors line-clamp-1">{row.name}</h4>
                      <span className="text-[10px] font-bold text-[var(--text-dim)] uppercase tracking-wider">Format: {row.sourceType} · {row.releaseYear}</span>
                    </div>
                  </div>

                  {/* 📈 Scaled Progress Visual Bar Channel */}
                  <div className="flex-1 flex items-center max-w-xl">
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden relative">
                      <div 
                        className="h-full bg-gradient-to-r from-[var(--accent)] to-blue-500 rounded-full transition-all duration-500" 
                        style={{ width: `${relativeWidthPercentage}%` }} 
                      />
                    </div>
                  </div>

                  {/* Analytics Volume Data Count Display */}
                  <div className="flex items-center justify-between md:justify-end gap-6 text-right text-xs ml-auto md:ml-0">
                    <div>
                      <div className="font-bold text-gray-300">{row.views.toLocaleString()} Views</div>
                      <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                        Active Verified
                      </span>
                    </div>
                    <a 
                      href={`/game/${row.slug}`}
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all text-xs"
                      title="Inspect directory listing"
                    >
                      ➔
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        </section>
      )}

    </div>
  );
}
