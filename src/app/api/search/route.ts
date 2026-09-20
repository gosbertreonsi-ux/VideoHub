import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';

  if (!query.trim()) {
    return NextResponse.json([], { status: 200 });
  }

  try {
    // 📊 Log search string into database metrics for popular queries cache tracking
    await prisma.searchLog.create({
      data: { term: query.trim().toLowerCase() }
    });

    let games = [];

    // 🏎️ Optimization Step: If the query is purely numeric, query the database via Steam ID
    if (/^\d+$/.test(query)) {
      games = await prisma.title.findMany({
        where: { embedId: query }, // Mapping matching ID strings
        take: 5
      });
    } else {
      // General database metadata query loop
      games = await prisma.title.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { synopsis: { contains: query, mode: 'insensitive' } }
          ]
        },
        take: 5
      });
    }

    return NextResponse.json(games, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Search highway pipeline failed' }, { status: 500 });
  }
}
