import React from 'react';
import { VideoCard } from '../components/VideoCard';

// Simulated database response array matching our precise schemas
const mockCatalogData = [
  {
    id: '1',
    name: 'Cosmos Voyage 4K',
    slug: 'cosmos-voyage-4k',
    posterUrl: 'https://unsplash.com',
    sourceType: 'OWN' as const,
    license: 'SELF_OWNED' as const,
    releaseYear: 2026,
  },
  {
    id: '2',
    name: 'Cyberpunk Drone Flight',
    slug: 'cyberpunk-drone-flight',
    posterUrl: 'https://unsplash.com',
    sourceType: 'YOUTUBE' as const,
    license: 'EMBED_ONLY' as const,
    releaseYear: 2025,
  }
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      
      {/* 🚀 Immersive Cinema Hero Display Section */}
      <section className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 to-brandCard border border-gray-800 p-8 md:p-12 flex flex-col justify-center min-h-[320px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="inline-block text-xs font-bold tracking-widest text-brandAccent uppercase bg-cyan-950/50 border border-cyan-800 px-3 py-1 rounded-full">
            Featured Content
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Curated Premium Audio & Video Catalogs
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Experience high-performance streaming grids optimized for self-hosted master files and authorized embed layouts.
          </p>
        </div>
      </section>

      {/* 🎬 Content Catalog Grids */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
          <h2 className="text-lg font-bold tracking-wide uppercase text-gray-200">
            Trending Content
          </h2>
          <a href="/browse" className="text-xs font-semibold text-brandAccent hover:underline">
            View All →
          </a>
        </div>

        {/* Responsive Grid Box */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {mockCatalogData.map((item) => (
            <VideoCard
              key={item.id}
              name={item.item_name || item.name}
              slug={item.slug}
              posterUrl={item.posterUrl}
              sourceType={item.sourceType}
              license={item.license}
              releaseYear={item.releaseYear}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
