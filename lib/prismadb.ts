import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;

//We are saving prisma files in a global file, so that they are not created on every Nextjs hot reloading.
//Gloabal files are not affected by Next.js hot reloading.
