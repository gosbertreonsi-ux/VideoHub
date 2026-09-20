import React from 'react';
import { db } from '../../lib/db';

export default async function CollectionsPage() {
  // 🏎️ Direct Database Query: Targets 'collection' matching your true schema name model
  const collectionsData = await db.collection.findMany({
    include: {
      titles: true, // Loads the relation tracking table entries safely
    },
  });

  // Calculate high-density network catalog summary statistics
  const totalCollections = collectionsData.length;
  const totalItems = collectionsData.reduce((acc, col) => acc + (col.titles?.length || 0), 0);

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* 🏛️ SECTION 1: DRIVEN EDITORIAL HEADING */}
      <div className="space-y-2">
        <h1 className="text-4xl md:text-6xl font-editorial tracking-tight text-white uppercase leading-none">
          GAME <span className="text-[var(--accent)]">COLLECTIONS</span>
        </h1>
        <p className="text-sm text-[var(--text-muted)] max-w-xl font-medium">
          Hand-curated bundles arranged into structural thematic sets to simplify platform traversal.
        </p>
      </div>

      {/* 📊 SECTION 2: EDITORIAL STATS TRACKER BANNER */}
      <section className="grid grid-cols-3 gap-px bg-white/[0.04] border border-white/[0.06] rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-[var(--panel)] p-4 text-center">
          <div className="text-[10px] font-black text-[var(--text-dim)] uppercase tracking-widest">Vault Sets</div>
          <div className="text-xl md:text-2xl font-editorial text-[#ffb700] mt-1">{totalCollections} Bundles</div>
        </div>
        <div className="bg-[var(--panel)] p-4 text-center">
          <div className="text-[10px] font-black text-[var(--text-dim)] uppercase tracking-widest">Total Indexed</div>
          <div className="text-xl md:text-2xl font-editorial text-white mt-1">{totalItems} Titles</div>
        </div>
        <div className="bg-[var(--panel)] p-4 text-center">
          <div className="text-[10px] font-black text-[var(--text-dim)] uppercase tracking-widest">Library Volume</div>
          <div className="text-xl md:text-2xl font-editorial text-[var(--accent)] mt-1">10.8 TB</div>
        </div>
      </section>

      {/* 🎛️ SECTION 3: SEARCH CONTROL MATRIX & QUICK FILTER PILLS */}
      <section className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-[var(--panel)] border border-white/[0.04] p-4 rounded-xl">
        <div className="relative flex-1 max-w-md bg-[var(--bg)] border border-white/[0.06] rounded-lg overflow-hidden">
          <input 
            type="text" 
            placeholder="Search collections matrix..." 
            className="w-full bg-transparent border-0 px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-wider">
          <span className="text-[var(--text-dim)]">Sort:</span>
          <button className="px-2.5 py-1 rounded bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30">All</button>
          <button className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-400">Featured</button>
        </div>
      </section>

      {/* 🎬 SECTION 4: HIGH-BLEED COVER ART ARCHITECTURE GRID */}
      {totalCollections === 0 ? (
        <div className="text-center py-20 border border-dashed border-white/10 rounded-xl bg-[var(--panel)]">
          <p className="text-xs text-gray-500 font-medium">No specialized collection vaults generated yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collectionsData.map((collection) => (
            <a 
              key={collection.id}
              href={`/collection/${collection.slug}`}
              className="group relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#090d16] shadow-xl block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#12233c] to-[#050816] transition-transform duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-4 space-y-1">
                <span className="text-[9px] font-black tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded border border-[var(--accent)]/20 inline-block">
                  Playlist Vault
                </span>
                <h3 className="text-base font-black text-white uppercase tracking-tight group-hover:text-[#ffb700] transition-colors duration-150">
                  {collection.name}
                </h3>
                <div className="flex items-center gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider pt-1">
                  <span>📂 {(collection.titles || []).length} Media Entries</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

    </div>
  );
}
