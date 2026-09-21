'use client';

import React, { useState, useEffect } from 'react';
import { SearchModal } from '../SearchModal';

export function NavigationHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // 🎹 Global Keyboard Listener Intercepts 'Slash' or 'Cmd+K' to launch search modal instantly
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* 🧭 PRIMARY GLOBAL PLATFORM NAVIGATION HEADER */}
      <header className="w-full bg-[#090d16] border-b border-[#131a29] sticky top-0 z-50 px-4 xl:px-8">
        <div className="max-w-[1720px] mx-auto flex items-center justify-between h-16">
          
          {/* Left Side: Brand Logo and Connected Route Links */}
          <div className="flex items-center gap-8">
            <a href="/" className="text-lg font-black tracking-tighter text-white flex items-center gap-1 hover:opacity-90 transition-opacity">
              <span className="text-[#ffb700] bg-[#ffb700]/10 px-2 py-0.5 rounded border border-[#ffb700]/20">VIDEO</span>
              <span>HUB</span>
            </a>
            
            {/* Primary Page Integration High-Highways */}
            <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-[#687592]">
              <a href="/" className="text-white hover:text-[#ffb700] transition-colors">Home Layout</a>
              <a href="/games" className="hover:text-white transition-colors">Games Library</a>
              <a href="/top" className="hover:text-white transition-colors">Top Charts</a>
              <a href="/trending" className="hover:text-white transition-colors">Trending Now</a>
              <a href="/collections" className="hover:text-white transition-colors">Collections</a>
              
              {/* More Menu Nest Dropdown Section */}
              <div className="relative group cursor-pointer py-2">
                <span className="hover:text-white flex items-center gap-1 transition-colors">More Options ▼</span>
                <div className="absolute top-full left-0 mt-1 w-48 bg-[#0c1220] border border-[#1a243b] rounded-xl shadow-2xl hidden group-hover:block p-1 animate-scale-up">
                  <a href="/admin" className="block px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg font-black">⚙️ Admin Room</a>
                  <div className="h-px bg-white/5 my-1" />
                  <a href="/blog" className="block px-3 py-2 hover:bg-[#162238] rounded-lg text-gray-300 transition-colors">Platform Blog</a>
                  <a href="/donations" className="block px-3 py-2 hover:bg-[#162238] rounded-lg text-gray-300 transition-colors">Donation Center</a>
                </div>
              </div>
            </nav>
          </div>

          {/* Right Side: Keyboard Search Bar Input Console Trigger Node */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="bg-[#111622] border border-white/5 hover:border-white/20 text-gray-400 text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-6 transition-all shadow-inner"
            >
              <span className="text-gray-500 text-[11px]">Search library catalog...</span>
              <kbd className="bg-[#1b2336] text-[10px] text-gray-400 px-1.5 py-0.5 rounded border border-white/10 shadow font-mono">
                ⌘K
              </kbd>
            </button>
            
            {/* Quick Context Action Indicators */}
            <div className="hidden sm:flex items-center gap-1 text-gray-500 text-xs font-bold border-l border-white/10 pl-4 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1" />
              Sync Online
            </div>
          </div>

        </div>
      </header>

      {/* Renders overlay modal context elements mount boundary safely */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
