import React from 'react';
import { db } from '../lib/db';
import { VideoCard } from '../components/VideoCard';

// Force Next.js to fetch the freshest layout content directly from the cloud on each visit
export const revalidate = 0;

export default async function HomePage() {
  // 🏎️ Direct Database Pipeline: Gathers all published items out of your Neon cloud ledger tables
  const databaseCatalog = await db.title.findMany({
    orderBy: { createdAt: 'desc' },
    take: 14 // Limits output rows to match a clean density aesthetic grid
  });

  // Segregate content arrays dynamically using built-in high-performance filter logic loops
  const trendingUploads = databaseCatalog.slice(0, 7);
  const latestAdditions = databaseCatalog.slice(0, 4);

  return (
    <div className="space-y-12">
      
      {/* SECTION 1: HERO DISPLAY CAROUSEL BLOCK */}
      <section className="relative w-full rounded-xl overflow-hidden bg-[#090d16] border border-white/[0.04] min-h-[440px] flex items-center p-6 md:p-12 shadow-2xl">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-20" style={{ backgroundImage: `url('https://unsplash.com')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070c] via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[#ffb700] tracking-widest">
            <span>Core v3.2.0</span>
            <span className="text-gray-600">•</span>
            <span>Platform: Web Vault Connected</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-editorial text-white uppercase tracking-tighter leading-none">
            VideoHub <br /><span className="text-[#ffb700]">Database Matrix</span>
          </h1>
          <p className="text-gray-400 text-xs md:text-sm font-medium max-w-xl leading-relaxed">
            Stream or compile high-bitrate raw studio master files containing stellar telemetry tracks captured directly across deep network clusters.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <a href="/games" className="bg-[#ffb700] hover:bg-[#e0a100] text-[#05070c] text-xs font-black uppercase tracking-wider px-6 py-3 rounded shadow-lg transition-all">
              Browse Full Library ➔
            </a>
            <a href="/collections" className="bg-[#161f33] hover:bg-[#1e2a45] text-white border border-white/10 text-xs font-black uppercase tracking-wider px-6 py-3 rounded transition-all">
              View Playlists
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: LIVE TRENDING GAMES SCROLLER ROW */}
      <section className="space-y-4">
        <div className="border-b border-white/[0.05] pb-2 flex items-center justify-between">
          <h2 className="text-xs font-black uppercase tracking-widest text-white flex items-center gap-2">
            <span className="w-1 h-3 bg-[#ffb700]" /> Trending Media Assets
          </h2>
          <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Scroll Horizontal →</span>
        </div>
        
        {trendingUploads.length === 0 ? (
          <p className="text-xs text-gray-500 py-4 italic">Cloud ledger empty. Use /admin to publish initial titles.</p>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-4 pt-1 scrollbar-thin scrollbar-thumb-[#162238]">
            {trendingUploads.map((item) => (
              <div key={item.id} className="min-w-[220px] max-w-[240px] flex-shrink-0">
                <VideoCard 
                  name={item.name}
                  slug={item.slug}
                  posterUrl={item.posterUrl}
                  sourceType={item.sourceType as any}
                  license={item.license as any}
                  releaseYear={item.releaseYear}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* SECTION 3: LATEST ADDITIONS GRID WITH DISMISSABLE ALIGNMENT COUNTER */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <div className="lg:col-span-3 space-y-4">
          <div className="border-b border-white/[0.05] pb-2 flex items-center justify-between">
            <h2 className="text-xs font-black uppercase tracking-widest text-white flex items-center gap-2">
              <span className="w-1 h-3 bg-[#ffb700]" /> Latest Catalog Additions
            </h2>
            <a href="/games" className="text-[10px] font-black text-[#ffb700] hover:underline uppercase tracking-wider">View Full Database</a>
          </div>
          
          {latestAdditions.length === 0 ? (
            <p className="text-xs text-gray-500 py-4 italic">No live rows discovered.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {latestAdditions.map((item) => (
                <VideoCard 
                  key={item.id}
                  name={item.name}
                  slug={item.slug}
                  posterUrl={item.posterUrl}
                  sourceType={item.sourceType as any}
                  license={item.license as any}
                  releaseYear={item.releaseYear}
                />
              ))}
            </div>
          )}
        </div>

        {/* Dense Navigation Index Sidebar Panel */}
        <div className="space-y-4">
          <div className="border-b border-white/[0.05] pb-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-white">System Folders</h2>
          </div>
          <div className="bg-[#090d16] border border-white/[0.04] rounded-xl p-2 flex flex-col divide-y divide-white/[0.04]">
            <a href="/top" className="flex items-center justify-between text-xs font-bold p-3 text-gray-400 hover:text-white hover:bg-[#111826] rounded transition-all">
              <span>All-Time Top Chart</span>
              <span className="text-[10px] text-amber-500 font-mono">RANKINGS</span>
            </a>
            <a href="/trending" className="flex items-center justify-between text-xs font-bold p-3 text-gray-400 hover:text-white hover:bg-[#111826] rounded transition-all">
              <span>Weekly Trending</span>
              <span className="text-[10px] text-cyan-400 font-mono">MOVERS</span>
            </a>
            <a href="/admin" className="flex items-center justify-between text-xs font-bold p-3 text-gray-400 hover:text-red-400 hover:bg-red-950/20 rounded transition-all">
              <span>Admin Terminal Panel</span>
              <span className="text-[10px] text-red-500 font-mono">GUARDED</span>
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}
