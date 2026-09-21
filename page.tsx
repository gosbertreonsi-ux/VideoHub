import React from 'react';
import { db } from '../lib/db';
import { VideoCard } from '../components/VideoCard';

// Clean Feature Snippet Imports
import { HeroSlider } from '../components/home/HeroSlider';
import { CommunityRow } from '../components/home/CommunityRow';
import { UpcomingPanel } from '../components/home/UpcomingPanel';
import { GameOfTheDay } from '../components/home/GameOfTheDay';

export const revalidate = 0; // Fresh database fetches on every request

export default async function HomePage() {
  // Gathers cloud data records safely
  const databaseCatalog = await db.title.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const curatedCollections = await db.collection.findMany({
    take: 4
  });

  // Safe processing parameters
  const trendingUploads = databaseCatalog.slice(0, 7);
  const latestAdditions = databaseCatalog.slice(0, 4);
  
  // Spotlight calculation fallback object to prevent application failures
  const defaultSpotlight = {
    name: 'Cosmos Voyage 4K Master Asset',
    slug: 'cosmos-voyage-4k',
    synopsis: 'A deep space telemetry exploration cinematic track entirely owned and registered by our studio.',
    posterUrl: 'https://unsplash.com',
    sourceType: 'OWN',
    releaseYear: 2026,
    views: 1420
  };
  const activeSpotlight = databaseCatalog.length > 0 ? databaseCatalog[0] : defaultSpotlight;

  return (
    <div className="space-y-12 animate-fade-in">
      
      {/* 🚀 Feature 1: Hero Banner */}
      <HeroSlider />

      {/* 🤝 Feature 2: Community Action Elements */}
      <CommunityRow />

      {/* 🔥 Feature 3: Trending Grids Row */}
      <section className="space-y-4">
        <div className="border-b border-white/[0.05] pb-2 flex items-center justify-between">
          <h2 className="text-xs font-black uppercase tracking-widest text-white flex items-center gap-2">
            <span className="w-1 h-3 bg-[#ffb700]" /> Trending Media Layout
          </h2>
        </div>
        {trendingUploads.length === 0 ? (
          <p className="text-xs text-gray-500 italic py-2">No live titles in ledger. Showing clean structural layouts.</p>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-4">
            {trendingUploads.map((item) => (
              <div key={item.id} className="min-w-[200px] max-w-[220px] flex-shrink-0">
                <VideoCard name={item.name} slug={item.slug} posterUrl={item.posterUrl} sourceType={item.sourceType as any} license={item.license as any} releaseYear={item.releaseYear} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 📅 Feature 4: Transcoding Pipeline Modules */}
      <UpcomingPanel />

      {/* 🗂️ Feature 5: Recent Entries & Navigation Short-Cuts Sidebar */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
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

        {/* Channels Directory Sidebar Panel */}
        <div className="space-y-4">
          <div className="border-b border-white/[0.05] pb-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-white">Platform Channels</h2>
          </div>
          <div className="bg-[#090d16] border border-white/[0.04] rounded-xl p-2 flex flex-col divide-y divide-white/[0.04]">
            <a href="/top" className="flex items-center justify-between text-xs font-bold p-3 text-gray-400 hover:text-white hover:bg-[#111826] rounded transition-all">
              <span>All-Time Charts</span>
              <span className="text-[10px] text-amber-500 font-mono">RANKINGS</span>
            </a>
            <a href="/trending" className="flex items-center justify-between text-xs font-bold p-3 text-gray-400 hover:text-white hover:bg-[#111826] rounded transition-all">
              <span>Weekly Trending</span>
              <span className="text-[10px] text-cyan-400 font-mono">STORIES</span>
            </a>
            <a href="/admin" className="flex items-center justify-between text-xs font-bold p-3 text-gray-400 hover:text-red-400 hover:bg-red-950/20 rounded transition-all">
              <span>Admin Room</span>
              <span className="text-[10px] text-red-500 font-mono">GUARDED</span>
            </a>
          </div>
        </div>
      </section>

      {/* 👑 Feature 6: Spotlight of the Day */}
      <GameOfTheDay asset={activeSpotlight as any} />

    </div>
  );
}
