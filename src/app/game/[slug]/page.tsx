import React from 'react';
import { db } from '../../../lib/db'; 
import { notFound } from 'next/navigation';

interface GameDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  // 🏎️ Direct Database Query with Atomic Increment Optimization Loop
  let titleData;
  try {
    titleData = await db.title.update({
      where: { slug: params.slug },
      data: {
        views: { increment: 1 } // 📈 Automatically bumps the view count by exactly 1 on every load!
      },
      include: {
        genres: { include: { genre: true } },
      },
    });
  } catch (error) {
    // Fallback lookup if update fails (e.g. database locks or scaling bottlenecks)
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
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* (Keep all your existing Layer 1 & Layer 2 HTML return code here completely unchanged) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.20] blur-3xl scale-110 pointer-events-none opacity-40"
        style={{ backgroundImage: `url(${titleData.posterUrl})` }}
      />
      <div className="relative z-10 space-y-8 p-8">
        <h1 className="text-5xl font-black text-white uppercase">{titleData.name}</h1>
        <p className="text-gray-400 max-w-2xl">{titleData.synopsis}</p>
        <div className="text-xs font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-900/60 px-3 py-1 rounded inline-block">
          👁️ {(titleData.views || 0).toLocaleString()} System Views
        </div>
      </div>
    </div>
  );
}
