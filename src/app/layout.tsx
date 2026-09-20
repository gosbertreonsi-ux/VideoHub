import './globals.css';
import React from 'react';

export const metadata = {
  title: 'VideoHub — Premium Media Catalog',
  description: 'AnkerGames-inspired premium video browsing platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between">
        {/* 🗺️ Global Header / Navigation Strip */}
        <header className="border-b border-gray-800 bg-[#0c121e]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors">
              🎬 VIDEO<span className="text-white">HUB</span>
            </a>
            <nav className="flex items-center gap-6 text-sm font-medium text-gray-400">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/browse" className="hover:text-white transition-colors">Browse</a>
              <a href="/genres" className="hover:text-white transition-colors">Genres</a>
            </nav>
          </div>
        </header>

        {/* 🎬 Active Page Component Injection Window */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-8">
          {children}
        </main>

        {/* 🗺️ Global Footer */}
        <footer className="border-t border-gray-800 bg-[#080d16] px-6 py-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} VideoHub. All rights reserved. Built securely with isolated architecture.</p>
        </footer>
      </body>
    </html>
  );
}
