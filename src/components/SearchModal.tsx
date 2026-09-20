'use client';

import React, { useState, useEffect, useRef } from 'react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // 🎹 Listening Loop: Captures standard developer keyboard hotkey triggers
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Debounced API Request Trigger Sequence
  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
        const data = await response.json();
        setResults(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Failed to resolve query data');
      } finally {
        setIsLoading(false);
      }
    }, 250); // 250ms debounced frequency gate to protect server resources

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-[#05070c]/80 backdrop-blur-md animate-fade-in">
      
      {/* Absolute Backdrop Click Target Closer */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* 🧭 Master Glassmorphic Search Container */}
      <div className="relative w-full max-w-2xl bg-[#0c1220] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden animate-scale-up">
        
        {/* Input Control Console Wrapper Bar */}
        <div className="flex items-center px-4 border-b border-white/[0.06]">
          <span className="text-gray-500 text-lg">🔍</span>
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search titles or paste content IDs..."
            className="w-full bg-transparent border-0 px-3 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-0"
          />
          <button 
            onClick={onClose}
            className="text-[10px] font-bold text-gray-500 hover:text-white bg-white/5 px-2 py-1 rounded border border-white/10"
          >
            ESC
          </button>
        </div>

        {/* Dynamic Context Result Panel Area */}
        <div className="p-4 max-h-[380px] overflow-y-auto space-y-4">
          
          {/* Default State View: Popular Searches Metadata Index Chips */}
          {!searchQuery && (
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
                🔥 Popular Network Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {['Cosmos', 'Cyberpunk', 'Telemetry', 'Abyssal'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="text-xs font-bold bg-white/5 border border-white/10 text-gray-400 px-3 py-1.5 rounded-lg hover:text-[#ffb700] hover:border-[#ffb700]/30 transition-all"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Loading Indicator Spinner Node */}
          {isLoading && (
            <div className="text-center py-6 text-xs text-gray-500 font-bold uppercase tracking-wider animate-pulse">
              Querying Cloud Catalog Vault...
            </div>
          )}

          {/* API Results Yield Stream Map */}
          {searchQuery && results.length > 0 && (
            <div className="space-y-1">
              <span className="text-[9px] font-black uppercase tracking-wider text-gray-500 block mb-1">Search Results</span>
              {results.map((item: any) => (
                <a
                  key={item.id}
                  href={`/title/${item.slug}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-[#162238] hover:border-[#29a9e1]/40 transition-all group"
                >
                  <div>
                    <h4 className="text-xs font-bold text-gray-200 group-hover:text-[#ffb700] transition-colors">{item.name}</h4>
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">{item.sourceType} · {item.releaseYear}</span>
                  </div>
                  <span className="text-gray-600 group-hover:text-[var(--accent)] transition-colors text-xs">➔</span>
                </a>
              ))}
            </div>
          )}

          {/* Empty State Vector Callback */}
          {searchQuery && results.length === 0 && !isLoading && (
            <div className="text-center py-8 text-xs text-gray-600 font-medium">
              No vault assets match your current catalog query strings.
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
