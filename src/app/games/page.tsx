import React from 'react';
import { db } from '../../lib/db';
import { VideoCard } from '../../components/VideoCard';

interface LibraryPageProps {
  searchParams: {
    q?: string;
    mode?: string;
    letter?: string;
    type?: string;
  };
}

export default async function GamesLibraryPage({ searchParams }: LibraryPageProps) {
  const query = searchParams.q || '';
  const mode = searchParams.mode || 'title'; // title | id
  const activeLetter = searchParams.letter || 'ALL';
  const formatFilter = searchParams.type || 'ALL';

  // 🏎️ Direct Database Ledger Query Layer targeting Neon Cloud Tables
  const titles = await db.title.findMany({
    where: {
      AND: [
        // 1. Text Query Filter Channel
        query ? {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { synopsis: { contains: query, mode: 'insensitive' } }
          ]
        } : {},
        // 2. A-Z Alphabetic Initial Letter Filter Channel
        activeLetter !== 'ALL' ? (
          activeLetter === '0-9' 
            ? { name: { string_starts_with: '0' } } // Fallback logic indicator matching digit rows
            : { name: { startsWith: activeLetter, mode: 'insensitive' } }
        ) : {},
        // 3. Media Source Type Filter Channel
        formatFilter !== 'ALL' ? { sourceType: formatFilter.toUpperCase() as any } : {}
      ]
    },
    orderBy: { name: 'asc' }
  });

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* 🏛️ SECTION 1: EDITORIAL HEADINGS BLOCK */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-5xl font-editorial text-white tracking-tight">
          Games <span className="text-[var(--accent)]">Library</span> Index
        </h1>
        <div className="w-16 h-1 bg-[var(--accent)] mx-auto rounded-full" />
        <p className="text-xs text-[var(--text-muted)] max-w-md mx-auto uppercase tracking-wider pt-1">
          Explore, filter, and track content metrics securely across the network layout.
        </p>
      </div>

      {/* 🎛️ SECTION 2: DENSE MANAGEMENT CONSOLE BLOCK */}
      <section className="bg-[var(--panel)] border border-white/[0.04] rounded-2xl p-6 space-y-6 shadow-xl">
        
        {/* Dynamic Search Input & Mode Selection Tags */}
        <div className="space-y-3">
          <form method="GET" action="/games" className="relative flex items-center bg-[var(--bg)] border border-white/[0.06] rounded-xl overflow-hidden focus-within:border-[var(--accent)]/50 transition-all">
            <span className="pl-4 text-gray-500">🔍</span>
            <input 
              type="text" 
              name="q"
              defaultValue={query}
              placeholder="Search library assets by title keyword strings..." 
              className="w-full bg-transparent border-0 px-3 py-3.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-0"
            />
            <kbd className="hidden sm:inline-block mr-4 bg-[#1b2336] text-[10px] text-gray-500 px-1.5 py-0.5 rounded border border-white/10 font-mono">
              /
            </kbd>
          </form>

          {/* Search Mode Toggles */}
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-wider">
            <span className="text-[var(--text-dim)]">Search Mode:</span>
            <a href={`/games?mode=title&q=${query}`} className={`px-2.5 py-1 rounded border ${mode === 'title' ? 'bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/30' : 'bg-white/5 border-white/10 text-gray-400'}`}>
              Game Title
            </a>
            <a href={`/games?mode=id&q=${query}`} className={`px-2.5 py-1 rounded border ${mode === 'id' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-white/5 border-white/10 text-gray-400'}`}>
              Content App ID
            </a>
          </div>
        </div>

        {/* Format Quick Filter Pills Strip */}
        <div className="flex flex-wrap items-center gap-2 border-t border-white/[0.04] pt-4">
          <span className="text-[10px] font-black uppercase tracking-wider text-[var(--text-dim)] mr-2">Quick Filters:</span>
          <a href="/games?type=ALL" className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${formatFilter === 'ALL' ? 'bg-[var(--accent)] text-white shadow-lg' : 'bg-white/5 text-gray-400 hover:text-white'}`}>
            All Storage
          </a>
          <a href="/games?type=OWN" className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${formatFilter === 'OWN' ? 'bg-[var(--accent)] text-white shadow-lg' : 'bg-white/5 text-gray-400 hover:text-white'}`}>
            📥 Self-Hosted Files
          </a>
          <a href="/games?type=youtube" className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${formatFilter === 'YOUTUBE' ? 'bg-[var(--accent)] text-white shadow-lg' : 'bg-white/5 text-gray-400 hover:text-white'}`}>
            📺 Embed Streams
          </a>
        </div>

        {/* 🔤 SECTION 3: BROWSE BY LETTER ALPHABET STRIP */}
        <div className="border-t border-white/[0.04] pt-4 space-y-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-[var(--text-dim)] block">Browse Alphabetically</span>
          <div className="flex flex-wrap gap-1">
            <a 
              href={`/games?letter=ALL&type=${formatFilter}`}
              className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold uppercase transition-all ${activeLetter === 'ALL' ? 'bg-[var(--accent)] text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              All
            </a>
            <a 
              href={`/games?letter=0-9&type=${formatFilter}`}
              className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold uppercase transition-all ${activeLetter === '0-9' ? 'bg-[var(--accent)] text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              0-9
            </a>
            {alphabet.map((letter) => (
              <a 
                key={letter}
                href={`/games?letter=${letter}&type=${formatFilter}`}
                className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold uppercase transition-all ${activeLetter === letter ? 'bg-[var(--accent)] text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
              >
                {letter}
              </a>
            ))}
          </div>
        </div>

      </section>

      {/* 🎬 SECTION 4: HIGH-DENSITY GRID ARCHITECTURE RESULTS PANEL */}
      <section className="space-y-4">
        <div className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)] flex items-center gap-2 border-b border-white/[0.04] pb-2">
          <span>Total Vault Entries Filtered: {titles.length} Records</span>
        </div>

        {titles.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-[var(--panel)]">
            <p className="text-xs text-gray-500 font-medium">No storage catalog items match the selected navigation filter combinations.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
            {titles.map((item) => (
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
      </section>

    </div>
  );
}
