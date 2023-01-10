import NextAuth, { type NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text ", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      authorize(credentials, req) {
        throw new Error("Not implemented");
      },
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
