import React from 'react';

export function CommunityRow() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <a href="https://discord.gg" target="_blank" rel="noreferrer" className="bg-[#0b111e] border border-white/[0.04] rounded-xl p-4 text-center group hover:border-[#7c5cff] hover:bg-[#7c5cff]/5 transition-all">
        <div className="text-xs font-black text-white uppercase tracking-wider group-hover:text-[var(--purple)]">Join Our Discord</div>
        <div className="text-[10px] text-gray-500 mt-0.5">Chat with the community</div>
      </a>
      <a href="https://reddit.com" target="_blank" rel="noreferrer" className="bg-[#0b111e] border border-white/[0.04] rounded-xl p-4 text-center group hover:border-[#ffb700] hover:bg-[#ffb700]/5 transition-all">
        <div className="text-xs font-black text-white uppercase tracking-wider group-hover:text-[#ffb700]">Reddit Subreddit</div>
        <div className="text-[10px] text-gray-500 mt-0.5">Community tracking & logs</div>
      </a>
      <a href="/games" className="bg-[#0b111e] border border-white/[0.04] rounded-xl p-4 text-center group hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all">
        <div className="text-xs font-black text-white uppercase tracking-wider group-hover:text-[var(--accent)]">Discover Catalog</div>
        <div className="text-[10px] text-gray-500 mt-0.5">1,980 Verified Titles</div>
      </a>
      <a href="/donations" className="bg-[#0b111e] border border-white/[0.04] rounded-xl p-4 text-center group hover:border-emerald-500 hover:bg-emerald-500/5 transition-all">
        <div className="text-xs font-black text-emerald-400 uppercase tracking-wider">Donate / Support</div>
        <div className="text-[10px] text-gray-500 mt-0.5">Keep hosting servers alive</div>
      </a>
    </section>
  );
}
