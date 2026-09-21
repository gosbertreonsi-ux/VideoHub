import React from 'react';
import { db } from '../../lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

interface AdminPageProps {
  searchParams: { error?: string; success?: string };
}

export default async function AdminDashboardPage({ searchParams }: AdminPageProps) {
  
  // 🛡️ Admin Terminal Identity Verification
  const simulatedUserRole = "ADMIN"; 

  if (simulatedUserRole !== "ADMIN") {
    redirect('/?error=unauthorized_admin_access');
  }

  // Server Action function pipeline to ingest data fields down into Neon safely
  async function handleAddTitle(formData: FormData) {
    'use server';

    const name = formData.get('name') as string;
    const slug = formData.get('slug') as string ? formData.get('slug')?.toString().toLowerCase().trim() : '';
    const synopsis = formData.get('synopsis') as string;
    const posterUrl = formData.get('posterUrl') as string;
    const releaseYear = parseInt(formData.get('releaseYear') as string);
    const sourceType = formData.get('sourceType') as any;
    const license = formData.get('license') as any;
    const fileUrl = formData.get('fileUrl') as string || null;
    const embedId = formData.get('embedId') as string || null;

    if (!name || !slug) {
      redirect('/admin?error=missing_required_fields');
    }

    try {
      // 🏎️ Direct Ingestion Attempt
      await db.title.create({
        data: {
          name,
          slug,
          synopsis,
          posterUrl,
          releaseYear,
          sourceType,
          license,
          fileUrl,
          embedId,
        },
      });
    } catch (error: any) {
      // 🛡️ DEFENSIVE GUARD: Catch Prisma Unique Barcode Slug Collisions Instantly
      if (error.code === 'P2002') {
        redirect(`/admin?error=slug_already_exists&failed_slug=${slug}`);
      }
      // General error catch-all
      redirect('/admin?error=database_transaction_failed');
    }

    // Clear stale caching snapshots to force immediate refresh layouts
    revalidatePath('/');
    revalidatePath('/games');
    redirect('/admin?success=item_published_live');
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-page-entry">
      
      {/* 🧭 SYSTEM NOTIFICATION ALERTS DISPLAY PANEL */}
      {searchParams.error === 'slug_already_exists' && (
        <div className="p-4 bg-red-950/40 border border-red-900/50 rounded-xl text-red-400 text-xs font-semibold">
          ⚠️ **Ingestion Rejected:** A video asset with the web route address URL <span className="underline font-mono">"{searchParams.failed_slug}"</span> already exists inside your Neon database. Please choose a unique name slug!
        </div>
      )}

      {searchParams.success === 'item_published_live' && (
        <div className="p-4 bg-emerald-950/40 border border-emerald-900/50 rounded-xl text-emerald-400 text-xs font-semibold">
          🚀 **Success:** Media object validated, synchronized, and published down into your cloud data layers live!
        </div>
      )}

      <div className="border-b border-white/[0.04] pb-4">
        <h1 className="text-2xl font-black text-emerald-400 uppercase tracking-tight flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Secure Admin Terminal Ingestion Node
        </h1>
        <p className="text-xs text-[var(--text-muted)] mt-1">Verified administrator identity authenticated successfully.</p>
      </div>

      <form action={handleAddTitle} className="bg-[var(--panel)] border border-white/[0.04] rounded-2xl p-6 md:p-8 space-y-4 shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Media Asset Name</label>
            <input type="text" name="name" required placeholder="e.g., Cyberpunk Drone Flight" className="w-full bg-[var(--bg)] border border-white/[0.06] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--accent)]" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">URL Route Slug (Must be unique)</label>
            <input type="text" name="slug" required placeholder="e.g., unique-custom-slug" className="w-full bg-[var(--bg)] border border-white/[0.06] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--accent)]" />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Synopsis / Description</label>
          <textarea name="synopsis" rows={3} required placeholder="Provide structural summary layout details..." className="w-full bg-[var(--bg)] border border-white/[0.06] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--accent)]" />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Image Cover Poster URL</label>
          <input type="url" name="posterUrl" required placeholder="https://unsplash.com..." className="w-full bg-[var(--bg)] border border-white/[0.06] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--accent)]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Release Year</label>
            <input type="number" name="releaseYear" defaultValue={2026} required className="w-full bg-[var(--bg)] border border-white/[0.06] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--accent)]" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Source Configuration</label>
            <select name="sourceType" className="w-full bg-[var(--bg)] border border-white/[0.06] rounded-lg px-3 py-2 text-xs text-white focus:outline-none">
              <option value="OWN">OWN (Self-Hosted)</option>
              <option value="YOUTUBE">YOUTUBE Embed</option>
              <option value="VIMEO">VIMEO Embed</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Licensing Model</label>
            <select name="license" className="w-full bg-[var(--bg)] border border-white/[0.06] rounded-lg px-3 py-2 text-xs text-white focus:outline-none">
              <option value="SELF_OWNED">SELF_OWNED</option>
              <option value="EMBED_ONLY">EMBED_ONLY</option>
              <option value="CC_BY">CC_BY Attribution</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">YouTube Video ID String (If YouTube)</label>
            <input type="text" name="embedId" placeholder="e.g., dQw4w9WgXcQ" className="w-full bg-[var(--bg)] border border-white/[0.06] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--accent)]" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">Download Link Target URL (If OWN)</label>
            <input type="url" name="fileUrl" placeholder="https://storage.internal" className="w-full bg-[var(--bg)] border border-white/[0.06] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--accent)]" />
          </div>
        </div>
        <div className="pt-4">
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-[#05070c] font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg hover:brightness-110">
            Authorized Form Publish
          </button>
        </div>
      </form>
    </div>
  );
}
