const fs = require('fs');
const path = require('path');

const schemaContent = `datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Title {
  id            String      @id @default(cuid())
  slug          String      @unique
  name          String
  synopsis      String      @db.Text
  posterUrl     String
  bannerUrl     String?
  sourceType    SourceType
  license       LicenseType
  embedId       String?
  fileUrl       String?
  fileSizeBytes BigInt?
  releaseYear   Int
  views         Int         @default(0)
  createdAt     DateTime    @default(now())

  genres        Genre[]
}

model Genre {
  id     String  @id @default(cuid())
  name   String  @unique
  slug   String  @unique
  titles Title[]
}

enum SourceType {
  OWN
  YOUTUBE
  VIMEO
}

enum LicenseType {
  SELF_OWNED
  CC_BY
  EMBED_ONLY
}`;

// Ensure directory exists and write file in explicit UTF-8 format
const prismaDir = path.join(__dirname, 'prisma');
if (!fs.existsSync(prismaDir)){
    fs.mkdirSync(prismaDir);
}

fs.writeFileSync(path.join(prismaDir, 'schema.prisma'), schemaContent, 'utf8');
console.log('✅ Clean UTF-8 schema.prisma written successfully!');
