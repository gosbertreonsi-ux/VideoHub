import React from 'react';
import { VideoCard } from '../../components/VideoCard';

// Simulated state matching items synced to your Neon cloud database
const completeCloudInventory = [
  {
    id: 'c1',
    name: 'Cosmos Voyage 4K',
    slug: 'cosmos-voyage-4k',
    posterUrl: 'https://unsplash.com',
    sourceType: 'OWN' as const,
    license: 'SELF_OWNED' as const,
    releaseYear: 2026,
    genre: 'Sci-Fi'
  },
  {
    id: 'c2',
    name: 'Cyberpunk Drone Flight',
    slug: 'cyberpunk-drone-flight',
    posterUrl: 'https://unsplash.com',
    sourceType: 'YOUTUBE' as const,
    license: 'EMBED_ONLY' as const,
    releaseYear: 2025,
    genre: 'Action'
  }
];

export default function BrowsePage({
  searchParams
}: {
  searchParams: { type?: string; genre?: string }
}) {
  // 🏎️ High-performance server-side filter logic execution loop
  const filteredInventory = completeCloudInventory.filter(item => {
    if (searchParams.type && item.sourceType !== searchParams.type.toUpperCase()) return false;
    if (searchParams.genre && item.genre !== searchParams.genre) return false;
    return true;
  });

  const activeGenre = searchParams.genre || 'All Genres';
  const activeType = searchParams.type ? searchParams.type.toUpperCase() : 'All Formats';

  return (
    <div className="space-y-8">
      {/* 🧭 Browser Navigation Header Context */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight uppercase">
            Browse Vault
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Active filters: <span className="text-cyan-400">{activeGenre}</span> • <span className="text-cyan-400">{activeType}</span>
          </p>
        </div>

        {/* 🎛️ AnkerGames-Style Visual Control Quick Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <a href="/browse" className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
            All Content
          </a>
          <a href="/browse?type=own" className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800 hover:bg-cyan-900 transition-colors">
            📥 Self-Hosted Files
          </a>
          <a href="/browse?type=youtube" className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-red-950 text-red-400 border border-red-950 hover:bg-red-900 transition-colors">
            📺 YouTube Embeds
          </a>
        </div>
      </div>

      {/* 🗂️ Dynamic Grid Presentation Block */}
      {filteredInventory.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-gray-800 rounded-xl">
          <p className="text-sm text-gray-600">No media assets match the current active directory filter query.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredInventory.map((item) => (
            <VideoCard
              key={item.id}
              name={item.name}
              slug={item.slug}
              posterUrl={item.posterUrl}
              sourceType={item.sourceType}
              license={item.license}
              releaseYear={item.releaseYear}
            />
          ))}
        </div>
      )}
    </div>
  );
}
