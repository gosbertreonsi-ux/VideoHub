import React from 'react';
import { db } from '../../../lib/db'; 
import { notFound } from 'next/navigation';

interface GameDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  // 🏎️ Direct Database Query with Atomic View Counter Increments
  let titleData;
  try {
    titleData = await db.title.update({
      where: { slug: params.slug },
      data: { views: { increment: 1 } },
    });
  } catch (error) {
    titleData = await db.title.findUnique({
      where: { slug: params.slug }
    });
  }

  if (!titleData) {
    notFound();
  }

  const releaseYear = titleData.releaseYear;
  const currentVersion = "V 1.0.3"; 

  return (
    <div className="relative min-h-screen w-full overflow-hidden animate-page-entry">
      
      {/* 🎭 LAYER 1: GLASSMORPHIC BLURRED BACKDROP ART CANVAS */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.15] blur-3xl scale-110 pointer-events-none opacity-40"
        style={{ backgroundImage: `url(${titleData.posterUrl})` }}
      />

      {/* LAYER 2: WORKSPACE PRESENTATION LAYOUT */}
      <div className="relative z-10 space-y-8 max-w-[1500px] mx-auto">
        
        {/* Breadcrumb Strip */}
        <nav className="text-[11px] font-black uppercase tracking-wider text-[var(--text-dim)]">
          <a href="/" className="hover:text-white transition-colors">Home</a> /{' '}
          <a href="/games" className="hover:text-white transition-colors">Vault</a> /{' '}
          <span className="text-[var(--text-muted)]">{titleData.name}</span>
        </nav>

        {/* 📺 INTUITIVE HARDWARE-ACCELERATED DYNAMIC PLAYER CORE */}
        <section className="w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/[0.06] shadow-2xl relative">
          
          {/* BRANCH CORE OPTION A: AUTHORIZED YOUTUBE SECURE EMBED CONSOLE */}
          {titleData.sourceType === 'YOUTUBE' && titleData.embedId && (
            <iframe
              src={`https://youtube.com{titleData.embedId}?rel=0&modestbranding=1&autoplay=1&mute=1`}
              title={titleData.name}
              className="w-full h-full border-0 absolute inset-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}

          {/* BRANCH CORE OPTION B: NATIVE HTML5 PLAYBACK CORE (FOR SELF-OWNED STREAMS) */}
          {titleData.sourceType === 'OWN' && titleData.fileUrl && (
            <video 
              src={titleData.fileUrl} 
              controls 
              autoPlay
              muted
              className="w-full h-full object-contain absolute inset-0"
              poster={titleData.posterUrl}
            />
          )}

          {/* FALLBACK CONTROL FOR LACKING ID STRINGS */}
          {(!titleData.embedId && !titleData.fileUrl) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[#090d16]">
              <span className="text-3xl mb-2">📡</span>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Stream Parameters Unpopulated</h4>
              <p className="text-xs text-gray-600 mt-1 max-w-xs">Configure the Video URL parameters inside the administrative console fields.</p>
            </div>
          )}

        </section>

        {/* TWO-COLUMN DETAILS & METADATA OVERVIEW SHEET */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Mini-Poster Card Widget */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="w-full aspect-[2/3] relative rounded-xl overflow-hidden border border-white/[0.06] shadow-xl bg-[#090d16]">
              <img src={titleData.posterUrl} alt={titleData.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Text Description Dashboard */}
          <div className="lg:col-span-3 bg-[var(--panel)] border border-white/[0.04] p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
            
            <div className="space-y-1">
              <span className="text-[10px] font-black tracking-widest text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-900/50 px-2 py-0.5 rounded inline-block">
                Media Stream Protocol Active
              </span>
              <h1 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
                {titleData.name}
              </h1>
            </div>

            {/* HIGH-DENSITY METADATA ROW */}
            <div className="flex flex-wrap items-center gap-3 text-xs border-y border-white/[0.04] py-3">
              <span className="bg-white/5 border border-white/10 rounded px-2.5 py-0.5 font-bold text-gray-300">PC Viewport</span>
              <span className="bg-white/5 border border-white/10 rounded px-2.5 py-0.5 font-bold text-gray-300">{releaseYear}</span>
              <span className="text-gray-500 font-bold">Views Logged: <span className="text-white font-black">{(titleData.views || 0).toLocaleString()}</span></span>
              <span className="px-2 py-0.5 rounded font-black text-[9px] bg-red-600 text-white uppercase tracking-widest ml-auto">
                {titleData.sourceType} Network
              </span>
            </div>

            {/* DESCRIPTION PANEL */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)] block">Synopsis / Log</span>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-medium">
                {titleData.synopsis}
              </p>
            </div>

            {/* ACTION DIRECT DOWNLOADING BUTTON LOGIC CONTROL */}
            <div className="pt-4 border-t border-white/[0.04]">
              {titleData.sourceType === 'OWN' && titleData.fileUrl ? (
                <a
                  href={titleData.fileUrl}
                  className="inline-block px-8 py-3.5 bg-gradient-to-r from-[var(--accent)] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-xs uppercase tracking-widest rounded-xl text-center shadow-lg transition-all"
                >
                  Download Direct Master File ➔
                </a>
              ) : (
                <div className="text-xs font-bold text-[var(--text-muted)] bg-[#0c111e] border border-white/5 p-4 rounded-xl flex items-center justify-between">
                  <span>📺 Embed Stream Active · Media hosted securely via official external player channels.</span>
                  <span className="text-[10px] font-black text-red-400 border border-red-950 bg-red-950/20 px-2 py-0.5 rounded uppercase tracking-wider">Embed Only</span>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
