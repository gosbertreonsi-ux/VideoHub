import React from 'react';

export function HeroSlider() {
  return (
    <section className="relative w-full rounded-2xl overflow-hidden bg-[#090d16] border border-white/[0.04] min-h-[460px] flex items-center p-6 md:p-12 shadow-2xl">
      <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-20" style={{ backgroundImage: `url('https://unsplash.com')` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070c] via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[#ffb700] tracking-widest">
          <span>Core Version v4.1.0</span>
          <span className="text-gray-600">•</span>
          <span>Platform: Cloud Connected</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-editorial text-white uppercase tracking-tighter leading-none">
          CURATED VIDEO <br /><span className="text-[#ffb700]">DATABASE</span> VAULT
        </h1>
        <p className="text-gray-400 text-xs md:text-sm font-medium max-w-xl leading-relaxed">
          Experience high-performance streaming grids engineered for seamless self-hosted playback pipelines and authorized API embeds.
        </p>
        <div className="pt-2 flex flex-wrap gap-3">
          <a href="/games" className="bg-[#ffb700] hover:bg-[#e0a100] text-[#05070c] text-xs font-black uppercase tracking-wider px-6 py-3 rounded shadow-lg transition-all">
            Explore Games Library ➔
          </a>
          <a href="/collections" className="bg-[#161f33] hover:bg-[#1e2a45] text-white border border-white/10 text-xs font-black uppercase tracking-wider px-6 py-3 rounded transition-all">
            View Curated Collections
          </a>
        </div>
      </div>
    </section>
  );
}
