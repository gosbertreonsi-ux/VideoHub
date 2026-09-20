import { NextResponse } from 'next/server';

// Mock data response array directly mirror-matching our engineering data-store types
const staticApiResponse = [
  {
    name: 'Cosmos Voyage 4K',
    slug: 'cosmos-voyage-4k',
    sourceType: 'OWN',
    license: 'SELF_OWNED',
    releaseYear: 2026,
  },
  {
    name: 'Cyberpunk Drone Flight',
    slug: 'cyberpunk-drone-flight',
    sourceType: 'YOUTUBE',
    license: 'EMBED_ONLY',
    releaseYear: 2025,
  }
];

export async function GET() {
  try {
    // Packages database collections into standard JSON communication nodes safely
    return NextResponse.json(staticApiResponse, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to access catalog engine' }, { status: 500 });
  }
}
