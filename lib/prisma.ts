import { PrismaClient } from "@/lib/generated/prisma";

const globalForPrisma = globalThis as typeof globalThis & { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = prisma;
}