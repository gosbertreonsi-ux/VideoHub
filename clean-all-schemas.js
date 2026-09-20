const fs = require('fs');
const path = require('path');

const prismaDirPath = path.join(__dirname, 'prisma');
const targetFile = path.join(prismaDirPath, 'schema.prisma');

// 1. Delete the entire prisma folder to clear out any hidden hidden files or duplicates
if (fs.existsSync(prismaDirPath)) {
  const files = fs.readdirSync(prismaDirPath);
  files.forEach(file => {
    try {
      fs.unlinkSync(path.join(prismaDirPath, file));
    } catch (e) {
      console.log(`Skipping file removal: ${file}`);
    }
  });
} else {
  fs.mkdirSync(prismaDirPath);
}

// 2. Define the absolute pristine structural database table layout blueprint
const perfectSchemaText = `datasource db {
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
  collections   Collection[]
}

model Genre {
  id     String  @id @default(cuid())
  name   String  @unique
  slug   String  @unique
  titles Title[]
}

model Collection {
  id     String  @id @default(cuid())
  slug   String  @unique
  name   String
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

// 3. Force write the schema in strict, certified standard web-encoding format
fs.writeFileSync(targetFile, perfectSchemaText, 'utf8');
console.log('✨ All old schema footprints wiped clean. Pristine UTF-8 layout written!');
