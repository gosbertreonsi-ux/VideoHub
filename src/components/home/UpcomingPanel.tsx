import React from 'react';

export function UpcomingPanel() {
  return (
    <section className="bg-[#090d16] border border-white/[0.04] rounded-xl p-6 shadow-xl">
      <div className="border-b border-white/5 pb-3 mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xs font-black uppercase tracking-widest text-[#ffb700]">Queue Processing Pipelines</h2>
          <p className="text-[10px] text-gray-500 mt-0.5">Assets currently undergoing server-side transcoding algorithms.</p>
        </div>
        <span className="text-xs font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-900/60 px-2.5 py-0.5 rounded">2 Active</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#060910] border border-white/[0.04] rounded-lg p-4 flex items-center justify-between">
          <div>
            <span className="text-[9px] font-black uppercase tracking-widest bg-amber-600/10 text-amber-500 px-2 py-0.5 rounded border border-amber-500/20">Encoding H265</span>
            <h4 className="text-xs font-bold text-gray-200 mt-2">Ultra-HD Horizon Hyperlapse Cluster</h4>
            <p className="text-[10px] text-gray-500 mt-0.5">Average Processing Duration: ~14 mins</p>
          </div>
          <span className="text-xl animate-pulse">⏳</span>
        </div>
        <div className="bg-[#060910] border border-white/[0.04] rounded-lg p-4 flex items-center justify-between">
          <div>
            <span className="text-[9px] font-black uppercase tracking-widest bg-cyan-600/10 text-cyan-500 px-2 py-0.5 rounded border border-cyan-500/20">Syncing Mirrors</span>
            <h4 className="text-xs font-bold text-gray-200 mt-2">Retro Wave Synthwave Soundscape Loop</h4>
            <p className="text-[10px] text-gray-500 mt-0.5">Average Processing Duration: ~4 mins</p>
          </div>
          <span className="text-xl text-cyan-400 animate-pulse">⚡</span>
        </div>
      </div>
    </section>
  );
}
