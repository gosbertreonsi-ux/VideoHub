import React from 'react';
import { db } from '../lib/db';
import { VideoCard } from '../components/VideoCard';

import { HeroSlider } from '../components/home/HeroSlider';
import { CommunityRow } from '../components/home/CommunityRow';
import { UpcomingPanel } from '../components/home/UpcomingPanel';
import { GameOfTheDay } from '../components/home/GameOfTheDay';

export const revalidate = 0;

export default async function HomePage() {
  const databaseCatalog = await db.title.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const trendingUploads = databaseCatalog.slice(0, 7);
  const latestAdditions = databaseCatalog.slice(0, 4);
  
  const defaultSpotlight = {
    name: 'Cosmos Voyage 4K Master Asset',
    slug: 'cosmos-voyage-4k',
    synopsis: 'A deep space telemetry exploration cinematic track entirely owned and registered by our studio.',
    posterUrl: 'https://unsplash.com',
    sourceType: 'OWN',
    releaseYear: 2026,
    views: 1420
  };
  const activeSpotlight = databaseCatalog.length > 0 ? databaseCatalog : defaultSpotlight;

  return (
    // 🌀 Wrapped inside page entry composition framework for an elegant page load fade-in
    <div className="space-y-12 animate-page-entry">
      
      {/* Feature 1: Hero Banner with ambient animation pulse overlay */}
      <div className="relative group">
        <div className="absolute inset-0 bg-[var(--accent)]/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <HeroSlider />
      </div>

      {/* Feature 2: Community Links Row */}
      <CommunityRow />

      {/* Feature 3: Main Navigation Shortcuts */}
      <section className="space-y-4">
        <div className="border-b border-white/[0.05] pb-2">
          <h2 className="text-xs font-black uppercase tracking-widest text-[#ffb700] flex items-center gap-2">
            <span className="w-1 h-3 bg-[#ffb700] rounded-sm" /> Main Vault Navigation Highways
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: '🎮 Games Library', desc: 'Search, index, and query the entire 1,980 text vault.', path: '/games' },
            { title: '📂 Curated Collections', desc: 'Explore hand-picked multi-terabyte playlist folders.', path: '/collections' },
            { title: '📊 All-Time Charts', desc: 'View scaled relative rows of trending active downloads.', path: '/top' },
            { title: '🔥 Weekly Trending', desc: 'Read the custom narrative Story of the Week block.', path: '/trending' }
          ].map((link) => (
            <a 
              key={link.path}
              href={link.path} 
              className="bg-[var(--panel)] border border-white/[0.04] hover:border-[var(--accent)]/50 rounded-xl p-5 block group transition-all duration-300 relative overflow-hidden shadow-xl hover:-translate-y-1"
            >
              <div className="text-xs font-black text-white uppercase tracking-wider group-hover:text-[var(--accent)] transition-colors">{link.title}</div>
              <p className="text-[10px] text-gray-500 mt-1 font-medium">{link.desc}</p>
              <span className="absolute bottom-4 right-4 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[var(--accent)]">➔</span>
            </a>
          ))}
        </div>
      </section>

      {/* Feature 4: Trending Scroller Row */}
      <section className="space-y-4">
        <div className="border-b border-white/[0.05] pb-2 flex items-center justify-between">
          <h2 className="text-xs font-black uppercase tracking-widest text-white flex items-center gap-2">
            <span className="w-1 h-3 bg-[#ffb700]" /> Trending Media Layout
          </h2>
        </div>
        {trendingUploads.length === 0 ? (
          <p className="text-xs text-gray-500 italic py-2">No live titles in ledger. Ingest metadata via the Admin form console.</p>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
            {trendingUploads.map((item) => (
              <div key={item.id} className="min-w-[200px] max-w-[220px] flex-shrink-0">
                <VideoCard name={item.name} slug={item.slug} posterUrl={item.posterUrl} sourceType={item.sourceType as any} license={item.license as any} releaseYear={item.releaseYear} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Feature 5: Processing Status Modules */}
      <UpcomingPanel />

      {/* Feature 6: Recent Entries & Infinite Marquee Staggered Columns Sidebar */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        <div className="lg:col-span-3 space-y-4">
          <div className="border-b border-white/[0.05] pb-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-white">Recent Additions</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {latestAdditions.map((item) => (
              <VideoCard key={item.id} name={item.name} slug={item.slug} posterUrl={item.posterUrl} sourceType={item.sourceType as any} license={item.license as any} releaseYear={item.releaseYear} />
            ))}
          </div>
        </div>

        {/* 🚀 MOTION UPGRADE: THE DUAL STAGGERED VERTICAL MARQUEE COLUMNS */}
        <div className="space-y-4 lg:sticky lg:top-24">
          <div className="border-b border-white/[0.05] pb-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-white">Platform Activity Stream</h2>
          </div>
          
          {/* Glassmorphic clipping window viewport with edge gradients */}
          <div className="relative h-[340px] bg-[#090d16] border border-white/[0.04] rounded-2xl overflow-hidden p-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="grid grid-cols-2 gap-2 h-full">
              
              {/* Column A: Glide Upwards */}
              <div className="space-y-2 animate-marquee-vertical-up">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white/5 border border-white/5 rounded-lg p-3 text-center text-xs font-bold text-gray-400">
                    <div className="text-[9px] text-cyan-400 font-mono">STREAMING</div>
                    <div className="truncate text-white mt-1">Asset #{i}</div>
                  </div>
                ))}
                {/* Loop duplicates to guarantee smooth endless wrapping transition loops */}
                {[1, 2, 3, 4].map((i) => (
                  <div key={`dup-up-${i}`} className="bg-white/5 border border-white/5 rounded-lg p-3 text-center text-xs font-bold text-gray-400">
                    <div className="text-[9px] text-cyan-400 font-mono">STREAMING</div>
                    <div className="truncate text-white mt-1">Asset #{i}</div>
                  </div>
                ))}
              </div>

              {/* Column B: Glide Downwards */}
              <div className="space-y-2 animate-marquee-vertical-down">
                {[5, 6, 7, 8].map((i) => (
                  <div key={i} className="bg-white/5 border border-white/5 rounded-lg p-3 text-center text-xs font-bold text-gray-400">
                    <div className="text-[9px] text-amber-500 font-mono">COMPILED</div>
                    <div className="truncate text-white mt-1">Asset #{i}</div>
                  </div>
                ))}
                {[5, 6, 7, 8].map((i) => (
                  <div key={`dup-down-${i}`} className="bg-white/5 border border-white/5 rounded-lg p-3 text-center text-xs font-bold text-gray-400">
                    <div className="text-[9px] text-amber-500 font-mono">COMPILED</div>
                    <div className="truncate text-white mt-1">Asset #{i}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Feature 7: Spotlight Area */}
      <GameOfTheDay asset={activeSpotlight as any} />

    </div>
  );
}
