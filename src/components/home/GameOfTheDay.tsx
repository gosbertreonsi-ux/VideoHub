import React from 'react';

interface SpotlightProps {
  asset: {
    name: string;
    slug: string;
    synopsis: string;
    posterUrl: string;
    sourceType: string;
    releaseYear: number;
    views: number;
  };
}

export function GameOfTheDay({ asset }: SpotlightProps) {
  return (
    <section className="w-full bg-gradient-to-r from-[#0b111e] to-[#05070c] border border-white/[0.04] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-full bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.06),transparent_50%)]" />
      <div className="w-full md:w-1/4 aspect-[2/3] max-w-[180px] rounded-xl overflow-hidden border border-white/10 shadow-xl bg-[#03050a]">
        <img src={asset.posterUrl} alt="Spotlight" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 space-y-4 relative z-10">
        <span className="inline-block text-[9px] font-black uppercase tracking-widest bg-[#ffb700]/10 text-[#ffb700] border border-[#ffb700]/20 px-2.5 py-0.5 rounded">
          Featured Video Asset of the Day
        </span>
        <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">{asset.name}</h3>
        <p className="text-gray-400 text-xs leading-relaxed max-w-xl font-medium">{asset.synopsis}</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center max-w-lg pt-1">
          <div className="bg-[#05070c] border border-white/[0.04] p-2 rounded-xl">
            <div className="text-[9px] text-gray-500 font-black uppercase tracking-wider">Format</div>
            <div className="text-xs font-black text-white mt-0.5 uppercase">{asset.sourceType}</div>
          </div>
          <div className="bg-[#05070c] border border-white/[0.04] p-2 rounded-xl">
            <div className="text-[9px] text-gray-500 font-black uppercase tracking-wider">Released</div>
            <div className="text-xs font-black text-white mt-0.5">{asset.releaseYear}</div>
          </div>
          <div className="bg-[#05070c] border border-white/[0.04] p-2 rounded-xl">
            <div className="text-[9px] text-gray-500 font-black uppercase tracking-wider">Views</div>
            <div className="text-xs font-black text-white mt-0.5">{(asset.views || 0).toLocaleString()}</div>
          </div>
          <div className="bg-[#05070c] border border-white/[0.04] p-2 rounded-xl">
            <div className="text-[9px] text-gray-500 font-black uppercase tracking-wider">Platform Score</div>
            <div className="text-xs font-black text-[#ffb700] mt-0.5">9.8 / 10</div>
          </div>
        </div>
        <div className="pt-2">
          <a href={`/game/${asset.slug}`} className="inline-block bg-[#162238] border border-white/10 hover:bg-[#1e2f4d] text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-md">
            View Full Details Block
          </a>
        </div>
      </div>
    </section>
  );
}
