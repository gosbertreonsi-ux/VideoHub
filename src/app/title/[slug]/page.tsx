import React from 'react';

// Explicit metadata mapping dictionary simulating real database row selections
const localCatalogCache: Record<string, {
  name: string;
  synopsis: string;
  sourceType: 'OWN' | 'YOUTUBE' | 'VIMEO';
  embedId?: string;
  fileUrl?: string;
  releaseYear: number;
}> = {
  'cosmos-voyage-4k': {
    name: 'Cosmos Voyage 4K',
    synopsis: 'A deep space telemetry exploration cinematic track entirely owned and registered by our studio.',
    sourceType: 'OWN',
    fileUrl: 'https://w3schools.com', // Safe global sample stream tracking
    releaseYear: 2026,
  },
  'cyberpunk-drone-flight': {
    name: 'Cyberpunk Drone Flight',
    synopsis: 'An atmospheric flight through neon-lit streets captured via community contribution streams.',
    sourceType: 'YOUTUBE',
    embedId: 'dQw4w9WgXcQ',
    releaseYear: 2025,
  }
};

export default function TitleDetailPage({ params }: { params: { slug: string } }) {
  // Looks up the unique url piece inside our database representation dictionary
  const videoAsset = localCatalogCache[params.slug];

  // Defensive engineering fallback: If a user enters a fake slug, catch it gracefully
  if (!videoAsset) {
    return (
      <div className="text-center py-20 border border-dashed border-gray-800 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-400">Asset Record Not Found</h2>
        <p className="text-sm text-gray-600 mt-2">The requested media ledger address does not exist.</p>
        <a href="/" className="inline-block mt-4 text-xs font-semibold text-brandAccent hover:underline">← Return Home</a>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
      
      {/* 📺 THE DYNAMIC MEDIA PLAYER ENGINE FORK */}
      <section className="w-full aspect-video rounded-2xl overflow-hidden bg-black border border-gray-800 shadow-2xl">
        
        {/* Branch Option 1: Native HTML5 Player (For Self-Hosted Streams) */}
        {videoAsset.sourceType === 'OWN' && videoAsset.fileUrl && (
          <video 
            src={videoAsset.fileUrl} 
            controls 
            className="w-full h-full object-contain"
            poster="https://unsplash.com"
          />
        )}

        {/* Branch Option 2: YouTube Secure Inline Frame Player Embed */}
        {videoAsset.sourceType === 'YOUTUBE' && videoAsset.embedId && (
          <iframe
            src={`https://youtube.com{videoAsset.embedId}?rel=0&modestbranding=1`}
            title={videoAsset.name}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

      </section>

      {/* 📝 METADATA BLOCK & DESCRIPTION INFO */}
      <section className="bg-brandCard border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start">
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold bg-gray-800 text-gray-300 border border-gray-700 px-2.5 py-0.5 rounded">
              {videoAsset.releaseYear}
            </span>
            <span className="text-xs font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-900/60 px-2.5 py-0.5 rounded tracking-wider uppercase">
              Source: {videoAsset.sourceType}
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            {videoAsset.name}
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {videoAsset.synopsis}
          </p>
        </div>

        {/* Action Button: Evaluates security architecture conditions */}
        {videoAsset.sourceType === 'OWN' && (
          <a
            href={videoAsset.fileUrl}
            download
            className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-semibold text-sm rounded-xl text-center shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:from-cyan-500 hover:to-cyan-400 transition-all whitespace-nowrap"
          >
            Download Direct Master File
          </a>
        )}
      </section>

    </div>
  );
}
