import { PrismaClient } from '@prisma/client'

// eslint-disable-next-line no-undef
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

const prisma = globalForPrisma.prisma || new PrismaClient()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
