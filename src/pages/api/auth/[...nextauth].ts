// import NextAuth, { type NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"


export default NextAuth({
  secret: env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "HouseCall",
      type: "credentials",
      credentials: {
        email: { label: "Email Address", type: "email", placeholder: "meowcat@gmail.com" },
        password: { label: "Password", type: "password", placeholder: "secureKitty.3x14" },
      },
      async authorize(credentials) {
        if (!credentials) {
          console.error(`Meow, no credentials`);
          throw new Error();
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email.toLowerCase(),
          },
          select: {
            role: true,
            id: true,
            username: true,
            name: true,
            email: true,
            password: true,
          },
        });
        if (!user) {
          throw new Error('Meow, no user');
        }
        if (!user.password) {
          throw new Error('Meow, no password');
        }
        return {
          id: user.id,
          username: user.username,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});

