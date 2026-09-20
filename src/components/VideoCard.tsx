import React from 'react';

// Explicit type contract defining what data this visual card needs to load
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
  // Safe engineering evaluation rule for the interface layer
  const isDownloadable = sourceType === 'OWN' && license === 'SELF_OWNED';

  return (
    <div className="group relative w-full overflow-hidden rounded-xl bg-brandCard border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-brandAccent/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
      
      {/* Locked-Ratio Media Wrapper */}
      <div className="relative aspect-[3/4] w-full bg-[#0a0e17] overflow-hidden">
        <img 
          src={posterUrl} 
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Absolute Source Tag badge */}
        <div className="absolute top-3 left-3 rounded-md bg-black/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-300 backdrop-blur-sm border border-gray-700">
          {sourceType}
        </div>
      </div>

      {/* Info Context Block */}
      <div className="p-4">
        <span className="text-xs text-gray-500">{releaseYear}</span>
        <h3 className="truncate text-sm font-semibold text-gray-100 group-hover:text-brandAccent transition-colors mt-0.5">
          {name}
        </h3>

        {/* Dynamic Navigation/Download Fork */}
        <div className="mt-3 flex gap-2">
          <a 
            href={`/title/${slug}`}
            className="flex-1 rounded-md bg-brandAccent py-1.5 text-center text-xs font-medium text-white transition-colors hover:bg-cyan-500"
          >
            Watch
          </a>

          {isDownloadable && (
            <button 
              className="rounded-md bg-gray-800 border border-gray-700 px-2.5 text-xs text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
              title="Download direct video"
            >
              📥
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
