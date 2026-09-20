import React from 'react';
import { db } from '../../../lib/db'; 
import { notFound } from 'next/navigation';

interface GameDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  // 🏎️ Direct Database Query: Clean inclusion path to prevent scalar collisions
  const titleData = await db.title.findUnique({
    where: { slug: params.slug },
    include: {
      genres: true // Stripped out internal scalar select layer to resolve the query compilation conflict
    }
  });

  // Structural defensive fallback: Trigger Next.js 404 page if record doesn't exist
  if (!titleData) {
    notFound();
  }

  const releaseYear = titleData.releaseYear;
  const currentVersion = "V 1.0.3"; // Explicit version badge matching design system takeaway parameters

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      
      {/* 🎭 LAYER 1: GLASSMORPHIC BLURRED KEY-ART CANVAS BACKDROP */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.20] blur-3xl scale-110 pointer-events-none opacity-40"
        style={{ backgroundImage: `url(${titleData.posterUrl})` }}
      />

      {/* LAYER 2: WORKSPACE DISPLAY CONTAINER */}
      <div className="relative z-10 space-y-8 animate-fade-in">
        
        {/* Breadcrumb Navigation Strip */}
        <nav className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-dim)]">
          <a href="/" className="hover:text-white transition-colors">Home</a> /{' '}
          <a href="/browse" className="hover:text-white transition-colors">Vault</a> /{' '}
          <span className="text-[var(--text-muted)]">{titleData.name}</span>
        </nav>

        {/* TWO-COLUMN EDITORIAL BLOCK LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* LEFT INTERACTIVE COLUMN BLOCK */}
          <div className="lg:col-span-1 space-y-4">
            <div className="w-full aspect-[2/3] relative rounded-xl overflow-hidden border border-white/[0.06] shadow-2xl bg-[#090d16]">
              <img 
                src={titleData.posterUrl} 
                alt={titleData.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Modal Trailer Execution Launcher */}
            {titleData.trailerUrl && (
              <a 
                href={titleData.trailerUrl} 
                target="_blank" 
                rel="noreferrer"
                className="w-full block py-3 text-center rounded-xl font-black text-xs uppercase tracking-widest text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all shadow-lg"
              >
                ▷ Watch Trailer
              </a>
            )}
          </div>

          {/* RIGHT INFO METADATA CONSOLE */}
          <div className="lg:col-span-3 space-y-6 bg-[var(--panel)] border border-white/[0.04] p-6 md:p-8 rounded-2xl shadow-xl">
            
            {/* Headings Cluster */}
            <div className="space-y-1">
              <span className="text-[10px] font-black tracking-widest uppercase text-[var(--text-dim)] block">
                Vault Directory File
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
                {titleData.name}
              </h1>
            </div>

            {/* RATING & REVIEW MARKS LINE */}
            <div className="flex flex-wrap items-center gap-3 border-y border-white/[0.04] py-3">
              <span className="text-[10px] font-black uppercase tracking-wider text-[var(--text-dim)]">Rate & Review:</span>
              <div className="text-[var(--gold)] text-sm">★★★★★</div>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#132238] border border-[#1f3554] text-[var(--accent)]">
                4.9/5 · Verified Community Ledger
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[var(--success)]/10 border border-[var(--success)]/20 text-[var(--success)]">
                👍 100% Recommend
              </span>
            </div>

            {/* HIGH-DENSITY META CONSOLE ROW */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-white/5 border border-white/10 rounded px-2.5 py-0.5 text-xs font-bold text-gray-300">PC</span>
              <span className="bg-white/5 border border-white/10 rounded px-2.5 py-0.5 text-xs font-bold text-gray-300">
                {titleData.fileSizeBytes ? `${(Number(titleData.fileSizeBytes) / (1024 * 1024 * 1024)).toFixed(1)} GB` : 'TBD'}
              </span>
              <span className="bg-white/5 border border-white/10 rounded px-2.5 py-0.5 text-xs font-bold text-gray-300">{releaseYear}</span>
              <span className="bg-cyan-500/10 border border-cyan-500/20 rounded px-2.5 py-0.5 text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                Source: {titleData.sourceType}
              </span>
            </div>

            {/* ACTIONS SYSTEM ROW */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="px-2.5 py-1 text-xs font-black bg-[var(--success)] rounded text-white tracking-wide uppercase">
                {currentVersion}
              </span>
              <div className="text-xs font-bold text-gray-400 bg-[#111724] border border-[#1c263b] px-3 py-1 rounded">
                ● Latest Stable Build
              </div>
            </div>

            {/* EDITORIAL DESCRIPTION PANEL */}
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)] block">Overview</span>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-medium">
                {titleData.synopsis}
              </p>
            </div>

            {/* SYSTEM SOURCE ROUTING INTERACTIVE CONTRACT PANEL */}
            <div className="pt-4 border-t border-white/[0.04] flex flex-col sm:flex-row items-center gap-4">
              {titleData.sourceType === 'OWN' && titleData.fileUrl ? (
                <a
                  href={titleData.fileUrl}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[var(--accent)] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-xs uppercase tracking-widest rounded-xl text-center shadow-lg transition-all"
                >
                  Get Media Source File ➔
                </a>
              ) : (
                <div className="text-xs font-bold text-[var(--text-muted)] bg-[#111724] border border-[#1c263b] px-4 py-3 rounded-xl w-full">
                  📺 Authorized Embed Only · Direct download disabled per platform licensing terms.
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
