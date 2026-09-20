import './globals.css';
import React from 'react';

export const metadata = {
  title: 'VideoHub — Premium Media Catalog Vault',
  description: 'AnkerGames high-density poster catalog platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#05070c] text-[#a3aed0] flex flex-col justify-between antialiased selection:bg-[#ffb700]/30 selection:text-[#ffb700]">
        
        <div>
          {/* 1. PRIMARY APP ROUTER HEADER */}
          <header className="w-full bg-[#090d16] border-b border-[#131a29] sticky top-0 z-50 px-4 xl:px-8">
            <div className="max-w-[1720px] mx-auto flex items-center justify-between h-16">
              
              {/* Left Logo and Navigation Nodes */}
              <div className="flex items-center gap-8">
                <a href="/" className="text-lg font-black tracking-tighter text-white flex items-center gap-1">
                  <span className="text-[#ffb700] bg-[#ffb700]/10 px-2 py-0.5 rounded border border-[#ffb700]/20">VIDEO</span>
                  <span>HUB</span>
                </a>
                
                <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-[#687592]">
                  <a href="/" className="text-white hover:text-[#ffb700] transition-colors">All Content</a>
                  <a href="/browse?genre=trending" className="hover:text-white transition-colors">Trending</a>
                  <a href="/browse" className="hover:text-white transition-colors">Recent Updates</a>
                  <a href="/blog" className="hover:text-white transition-colors">Blog</a>
                  
                  {/* More Menu Dropdown Simulation Container */}
                  <div className="relative group cursor-pointer py-2">
                    <span className="hover:text-white flex items-center gap-1">More ▼</span>
                    <div className="absolute top-full left-0 mt-1 w-44 bg-[#0c1220] border border-[#1a243b] rounded shadow-xl hidden group-hover:block p-1">
                      <a href="/collections" className="block px-3 py-2 hover:bg-[#162238] rounded text-gray-300">Collections</a>
                      <a href="/leaderboard" className="block px-3 py-2 hover:bg-[#162238] rounded text-gray-300">Leaderboard</a>
                      <a href="/request" className="block px-3 py-2 hover:bg-[#162238] rounded text-gray-300">Requests</a>
                      <a href="/donations" className="block px-3 py-2 hover:bg-[#162238] rounded text-gray-300">Support Us</a>
                    </div>
                  </div>
                </nav>
              </div>

              {/* Right Context System Controls Utility Nodes */}
              <div className="flex items-center gap-4">
                {/* Simulated Quick Utility Icons */}
                <div className="flex items-center gap-2 text-gray-400">
                  <button className="p-2 hover:text-white transition-colors" title="Random Title">🎲</button>
                  <button className="p-2 hover:text-white transition-colors" title="Change Language">🌐</button>
                  <button className="p-2 hover:text-white transition-colors" title="Settings">⚙️</button>
                </div>
                <a href="/login" className="bg-[#ffb700] hover:bg-[#e0a100] text-[#05070c] text-xs font-black uppercase tracking-wider px-4 py-2 rounded transition-all">
                  Sign In
                </a>
              </div>

            </div>
          </header>

          {/* 2. DENSE HORIZONTAL QUICK-LINK CHIPS STRIP */}
          <div className="w-full bg-[#070b12] border-b border-[#131a29] px-4 xl:px-8 py-2 overflow-x-auto scrollbar-none">
            <div className="max-w-[1720px] mx-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
              <span className="text-gray-600 mr-2">Featured:</span>
              <a href="/browse?genre=action" className="bg-[#111826] border border-[#1b263b] text-gray-400 px-2.5 py-1 rounded hover:text-[#ffb700] transition-colors">Action (42)</a>
              <a href="/browse?genre=scifi" className="bg-[#111826] border border-[#1b263b] text-gray-400 px-2.5 py-1 rounded hover:text-[#ffb700] transition-colors">Sci-Fi (19)</a>
              <a href="/browse?genre=documentary" className="bg-[#111826] border border-[#1b263b] text-gray-400 px-2.5 py-1 rounded hover:text-[#ffb700] transition-colors">Documentary (8)</a>
              <a href="/browse?genre=anime" className="bg-[#111826] border border-[#1b263b] text-gray-400 px-2.5 py-1 rounded hover:text-[#ffb700] transition-colors">Anime (31)</a>
            </div>
          </div>

          {/* 3. DOCK LAYOUT SYSTEM WORKSPACE CONTAINER */}
          <main className="w-full max-w-[1720px] mx-auto px-4 xl:px-8 py-6">
            {children}
          </main>
        </div>

        {/* 4. ANKERGAMES HIGH-DENSITY CLOUD CLOUD FOOTER */}
        <footer className="w-full bg-[#090d16] border-t border-[#131a29] px-4 xl:px-8 py-8 mt-12">
          <div className="max-w-[1720px] mx-auto space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
              <div className="space-y-3">
                <h4 className="font-bold text-white uppercase tracking-wider">Navigation</h4>
                <div className="flex flex-col gap-2 text-gray-500">
                  <a href="/browse" className="hover:text-gray-300">All Content Index</a>
                  <a href="/collections" className="hover:text-gray-300">Curated Playlists</a>
                  <a href="/request" className="hover:text-gray-300">Submit a Request</a>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-white uppercase tracking-wider">Compliance</h4>
                <div className="flex flex-col gap-2 text-gray-500">
                  <a href="/page/dmca" className="hover:text-gray-300">DMCA Takedown Notice</a>
                  <a href="/page/privacy" className="hover:text-gray-300">Privacy & Tracker Policy</a>
                  <a href="/page/safety" className="hover:text-gray-300">Safety & Verification</a>
                </div>
              </div>
              <div className="col-span-2 space-y-3">
                <h4 className="font-bold text-white uppercase tracking-wider">Platform Disclaimer</h4>
                <p className="text-gray-600 leading-relaxed text-[11px]">
                  VideoHub is a game-catalog-style browsing experience adapted exclusively for video content you own or have explicit rights to embed via authorized player APIs. No copyright infringing media assets are hosted on our physical servers.
                </p>
              </div>
            </div>
            
            <div className="border-t border-[#131a29] pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-bold uppercase text-gray-600 tracking-wider">
              <p>© {new Date().getFullYear()} VideoHub Network Inc.</p>
              <div className="flex gap-4 mt-2 sm:mt-0">
                <a href="#" className="hover:text-gray-400">Discord</a>
                <a href="#" className="hover:text-gray-400">YouTube</a>
                <a href="#" className="hover:text-gray-400">Reddit</a>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
