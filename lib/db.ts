import { PrismaClient } from "@prisma/client";

/**
 * Declares a global variable `prisma` of type `PrismaClient | undefined`.
 * This variable is used to access the Prisma ORM client throughout the application.
 */
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
