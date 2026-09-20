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
    <div className="group w-full bg-[#0d121c] border border-[#161b26] rounded overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-[#2a354d] hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      
      <div className="relative">
        {/* Zero-Margin Aspect-Locked Media Cover */}
        <div className="relative aspect-[3/4.2] w-full bg-[#07090e] border-b border-[#161b26] overflow-hidden">
          <img 
            src={posterUrl} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
            loading="lazy"
          />
          {/* Saturated Content Format Label */}
          <span className={`absolute top-2 left-2 px-1.5 py-0.5 text-[9px] font-black tracking-widest uppercase rounded shadow ${
            sourceType === 'OWN' 
              ? 'bg-[#0099ff] text-white' 
              : 'bg-[#cc0000] text-white'
          }`}>
            {sourceType}
          </span>
        </div>

        {/* High-Contrast Description Area */}
        <div className="p-3 space-y-1">
          <span className="text-[10px] font-bold text-gray-500">{releaseYear}</span>
          <h3 className="text-xs font-bold text-gray-200 line-clamp-2 leading-snug group-hover:text-[#ffb700] transition-colors duration-150 min-h-[32px]">
            {name}
          </h3>
        </div>
      </div>

      {/* Flat Bottom Action Block */}
      <div className="p-3 pt-0 flex gap-1.5">
        <a 
          href={`/title/${slug}`}
          className="flex-1 rounded-sm bg-[#1b2436] hover:bg-[#ffb700] text-white hover:text-[#07090e] border border-[#27344e] hover:border-[#ffb700] py-1.5 text-center text-[10px] font-black uppercase tracking-wider transition-all duration-150"
        >
          Details
        </a>

        {isDownloadable && (
          <button 
            className="rounded-sm bg-[#111724] border border-[#1b253a] px-2.5 text-gray-400 hover:bg-[#1c253a] hover:text-white transition-all duration-150"
            title="Download original file asset"
          >
            📥
          </button>
        )}
      </div>

    </div>
  );
};
