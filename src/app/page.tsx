import React from 'react';
import { VideoCard } from '../components/VideoCard';

// Certified static array matching our exact model constraints
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
    <div className="space-y-12">
      
      {/* 🚀 High-End Immersive Cyberpunk Banner Showcase */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0b1220] via-[#0d1527] to-[#040812] border border-white/[0.04] p-8 md:p-16 flex flex-col justify-center min-h-[380px] shadow-2xl">
        {/* Saturated atmospheric radial neon background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.12),transparent_60%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-3xl space-y-5">
          <span className="inline-block text-[11px] font-black tracking-widest text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-800/50 px-3 py-1 rounded-md backdrop-blur-sm">
            System Online
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
            Premium Media <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">Database</span> Vault
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl font-medium leading-relaxed">
            Experience high-fidelity grids engineered for seamless self-hosted playback pipelines and authorized API embeds.
          </p>
        </div>
      </section>

      {/* 🎬 High-Contrast Gaming Row Catalog */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
          <h2 className="text-sm font-black tracking-widest uppercase text-gray-400 flex items-center gap-2">
            <span className="w-1.5 h-3 bg-cyan-500 rounded-sm" />
            Trending Uploads
          </h2>
          <a href="/browse" className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors tracking-wide uppercase">
            View Archive →
          </a>
        </div>

        {/* Ultra-Responsive Grid Grid Matching TopGamers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {mockCatalogData.map((item) => (
            <VideoCard
              key={item.id}
              name={item.name} // Fixed property mapping mapping logic loop
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
