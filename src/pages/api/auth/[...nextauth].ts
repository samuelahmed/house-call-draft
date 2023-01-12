import NextAuth, { type NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";

import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import { loginSchema } from "@/validation/auth";

// WARNING 
// DO NOT USE FOR PRODUCTION OR COLLECT ANY SENSTIVE INFORMATION UNTIL EMAIL HASH PROCESS IS REVIEWED
// WARNING

import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {


  
  // callbacks: {
    // session({ session, user }) {
    //   if (session.user) {
    //     session.user.id = user.id;
    //   }
    //   return session;
    // },
    // jwt: async ({ token, user }) => {
    //   if (user) {
    //     token.id = user.id;
    //     token.email = user.email;
    //   }
    //   return token;
    // },
    // session({ session, token }) {
    //   if (token && session.user) {
    //     session.user.id = token.id as string;
    //   }

    //   return session;
    // },
  // },
  secret: env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  // pages: {
  //   signIn: "/login",
  //   newUser: "/register",
  //   error: "/login",
  // },
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
    // Credentials({
    //   name: "credentials",
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "email",
    //       placeholder: "jsmith@gmail.com",
    //     },
    //     password: { label: "Password", type: "password" },
    //   },
    //   authorize: async (credentials) => {
    //     const cred = await loginSchema.parseAsync(credentials);

    //     const user = await prisma.user.findFirst({
    //       where: { email: cred.email },
    //     });

    //     if (!user) {
    //       return null;
    //     }

    //     const isValidPassword = bcrypt.compareSync(
    //       cred.password,
    //       user.password
    //     );

    //     if (!isValidPassword) {
    //       return null;
    //     }

    //     return {
    //       id: user.id,
    //       email: user.email,
    //       username: user.username,
    //     }
    //   },
    // }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
