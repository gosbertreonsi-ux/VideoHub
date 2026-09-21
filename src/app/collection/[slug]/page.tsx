import React from 'react';
import { db } from '../../../lib/db';
import { VideoCard } from '../../../components/VideoCard';
import { notFound } from 'next/navigation';

interface CollectionDetailProps {
  params: {
    slug: string;
  };
}

export default async function CollectionDetailPage({ params }: CollectionDetailProps) {
  // 🏎️ Direct Database Query: Extracts specific collection + all linked cross-relation rows
  const collection = await db.collection.findUnique({
    where: { slug: params.slug },
    include: {
      titles: true
    }
  });

  if (!collection) {
    notFound();
  }

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* 🏛️ HEADER OVERVIEW PANEL */}
      <div className="bg-[#0b0e14] border border-white/[0.04] rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded border border-[var(--accent)]/20">
            Curated Curated Bundle
          </span>
          <h1 className="text-2xl md:text-4xl font-editorial text-white tracking-tight">
            {collection.name}
          </h1>
          <p className="text-xs text-[var(--text-muted)] max-w-xl">
            Traverse all custom filtered media assets categorized together by administrative curators.
          </p>
        </div>
        <a href="/collections" className="text-[10px] font-black uppercase tracking-wider text-gray-400 hover:text-white bg-white/5 border border-white/10 px-4 py-2 rounded-lg transition-all">
          ← Back to Collections
        </a>
      </div>

      {/* 🎬 DENSE METADATA GRID RESULTS AREA */}
      <div className="space-y-4">
        <div className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)] border-b border-white/[0.04] pb-2">
          Contained Assets: {(collection.titles || []).length} Records
        </div>

        {(collection.titles || []).length === 0 ? (
          <div className="text-center py-16 border border-dashed border-white/10 rounded-xl bg-[var(--panel)]">
            <p className="text-xs text-gray-500 font-medium">No media titles have been wired to this playlist channel yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
            {collection.titles.map((item) => (
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

    </div>
  );
}
