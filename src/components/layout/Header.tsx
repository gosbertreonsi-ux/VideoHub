'use client';

import React, { useState, useEffect } from 'react';
import { SearchModal } from '../components/SearchModal';

export function NavigationHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // 🎹 Engineering Watcher: Intercepts global keyboard shortcuts instantly
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
      <header className="w-full bg-[#090d16] border-b border-[#131a29] sticky top-0 z-50 px-4 xl:px-8">
        <div className="max-w-[1720px] mx-auto flex items-center justify-between h-16">
          
          <div className="flex items-center gap-8">
            <a href="/" className="text-lg font-black tracking-tighter text-white flex items-center gap-1">
              <span className="text-[#ffb700] bg-[#ffb700]/10 px-2 py-0.5 rounded border border-[#ffb700]/20">VIDEO</span>
              <span>HUB</span>
            </a>
          </div>

          {/* Trigger Control Element Container */}
          <div className="flex items-center gap-4">
            {/* Interactive Search Console Button Indicator Badge */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="bg-[#111622] border border-white/5 hover:border-white/20 text-gray-400 text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-6 transition-all"
            >
              <span className="text-gray-500">Search library...</span>
              <kbd className="bg-[#1b2336] text-[10px] text-gray-400 px-1.5 py-0.5 rounded border border-white/10 shadow font-mono">
                ⌘K
              </kbd>
            </button>
          </div>

        </div>
      </header>

      {/* Renders overlay modal context elements mount boundary safely */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
