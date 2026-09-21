import React from 'react';

interface VideoCardProps {
  name: string;
  slug: string;
  posterUrl: string;
  sourceType: 'OWN' | 'YOUTUBE' | 'VIMEO';
  license: 'SELF_OWNED' | 'CC_BY' | 'EMBED_ONLY';
  releaseYear: number;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  name,
  slug,
  posterUrl,
  sourceType,
  license,
  releaseYear
}) => {
  const isDownloadable = sourceType === 'OWN' && license === 'SELF_OWNED';

  return (
    <div className="group w-full bg-[#0d121c] border border-white/[0.04] rounded-xl overflow-hidden flex flex-col justify-between motion-card hover:border-[var(--accent)]/50 hover:shadow-[0_12px_32px_rgba(41,169,225,0.2)]">
      
      <div>
        {/* Zero-Margin Aspect-Locked Media Cover */}
        <div className="relative aspect-[3/4.2] w-full bg-[#07090e] border-b border-white/5 overflow-hidden">
          <img 
            src={posterUrl} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
            loading="lazy"
          />
          <span className={`absolute top-2 left-2 px-2 py-0.5 text-[9px] font-black tracking-widest uppercase rounded shadow-lg ${
            sourceType === 'OWN' ? 'bg-[#0099ff] text-white' : 'bg-[#cc0000] text-white'
          }`}>
            {sourceType}
          </span>
        </div>

        {/* High-Contrast Description Area */}
        <div className="p-3 space-y-1">
          <span className="text-[10px] font-bold text-gray-500 tracking-wider block">{releaseYear}</span>
          <h3 className="text-xs font-bold text-gray-200 line-clamp-2 leading-snug group-hover:text-[var(--accent)] transition-colors duration-200 min-h-[32px]">
            {name}
          </h3>
        </div>
      </div>

      {/* Flat Bottom Action Block */}
      <div className="p-3 pt-0 flex gap-2">
        {/* 🛠️ ALIGNED GATEWAY: Fixed link pointing cleanly to /title/ routing coordinates */}
        <a 
          href={`/title/${slug}`}
          className="flex-1 rounded-lg bg-[#1b2436] hover:bg-[var(--accent)] text-white hover:text-white border border-[#27344e] hover:border-[var(--accent)] py-2 text-center text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-md"
        >
          Details
        </a>

        {isDownloadable && (
          <button 
            className="rounded-lg bg-[#111724] border border-white/5 px-3 text-gray-400 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300"
          >
            📥
          </button>
        )}
      </div>

    </div>
  );
}
