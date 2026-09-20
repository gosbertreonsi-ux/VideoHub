import { PrismaClient } from '@prisma/client';

// Global server variable instantiation cache declaration
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// 🏎️ Re-uses existing active pipelines instead of creating new instances every compile loop
export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
