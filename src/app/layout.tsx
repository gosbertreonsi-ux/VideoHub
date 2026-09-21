import './globals.css';
import React from 'react';
import { NavigationHeader } from '../components/layout/Header'; // 🧭 Imports our secure unified system router header

export const metadata = {
  title: 'VideoHub — Premium Media Catalog Vault',
  description: 'AnkerGames high-density poster catalog platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#05070c] text-[#a3aed0] flex flex-col justify-between antialiased selection:bg-[#ffb700]/30 selection:text-[#ffb700]">
        
        <div>
          {/* 🧭 MOUNT POINT FOR THE SECURED INTERCONNECTED HEADER NAVIGATION SYSTEMS */}
          <NavigationHeader />

          {/* 🎬 DOCK LAYOUT SYSTEM VIEWPORT WORKSPACE CONTAINER */}
          <main className="w-full max-w-[1720px] mx-auto px-4 xl:px-8 py-6">
            {children}
          </main>
        </div>

        {/* 🎮 LAYER 4: HEAVY PLATFORM STRUCTURAL FOOTER */}
        <footer className="w-full bg-[#090d16] border-t border-[#131a29] px-4 xl:px-8 py-8 mt-12">
          <div className="max-w-[1720px] mx-auto space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
              <div className="space-y-3">
                <h4 className="font-bold text-white uppercase tracking-wider">Navigation</h4>
                <div className="flex flex-col gap-2 text-gray-500">
                  <a href="/games" className="hover:text-gray-300 transition-colors">All Content Index</a>
                  <a href="/collections" className="hover:text-gray-300 transition-colors">Curated Playlists</a>
                  <a href="/top" className="hover:text-gray-300 transition-colors">Rank Leaderboards</a>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-white uppercase tracking-wider">Compliance</h4>
                <div className="flex flex-col gap-2 text-gray-500">
                  <a href="#" className="hover:text-gray-300 transition-colors">DMCA Takedown Notice</a>
                  <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                </div>
              </div>
              <div className="col-span-2 space-y-3">
                <h4 className="font-bold text-white uppercase tracking-wider">Platform Disclaimer</h4>
                <p className="text-gray-600 leading-relaxed text-[11px]">
                  VideoHub is an ultra-premium browsing experience adapted exclusively for video content you own or have explicit rights to embed via authorized player APIs.
                </p>
              </div>
            </div>
            
            <div className="border-t border-[#131a29] pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-bold uppercase text-gray-600 tracking-wider">
              <p>© {new Date().getFullYear()} VideoHub Network Inc.</p>
              <div className="flex gap-4 mt-2 sm:mt-0">
                <a href="#" className="hover:text-gray-400 transition-colors">Discord</a>
                <a href="#" className="hover:text-gray-400 transition-colors">YouTube</a>
                <a href="#" className="hover:text-gray-400 transition-colors">Reddit</a>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
