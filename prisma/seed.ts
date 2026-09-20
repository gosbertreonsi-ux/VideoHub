import { PrismaClient, SourceType, LicenseType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔄 Deleting old test rows to maintain clean slate...');
  await prisma.title.deleteMany({});
  await prisma.genre.deleteMany({});

  console.log('🌱 Injecting genre categories...');
  const action = await prisma.genre.create({ data: { name: 'Action', slug: 'action' } });
  const sciFi  = await prisma.genre.create({ data: { name: 'Sci-Fi', slug: 'sci-fi' } });

  console.log('🎬 Injecting mock movie catalog...');

  await prisma.title.create({
    data: {
      name: 'Cosmos Voyage 4K Master Asset',
      slug: 'cosmos-voyage-4k',
      synopsis: 'A deep space telemetry exploration cinematic track entirely owned and registered by our studio.',
      posterUrl: 'https://unsplash.com',
      sourceType: SourceType.OWN,
      license: LicenseType.SELF_OWNED,
      fileUrl: 'https://videohub.internal',
      fileSizeBytes: 536870912,
      releaseYear: 2026
    }
  });

  await prisma.title.create({
    data: {
      name: 'Cyberpunk Drone Flight Cinematic Embed',
      slug: 'cyberpunk-drone-flight',
      synopsis: 'An atmospheric flight through neon-lit streets captured via community contribution streams.',
      posterUrl: 'https://unsplash.com',
      sourceType: SourceType.YOUTUBE,
      license: LicenseType.EMBED_ONLY,
      embedId: 'dQw4w9WgXcQ',
      releaseYear: 2025
    }
  });

  console.log('✅ Mock data initialization successful!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
