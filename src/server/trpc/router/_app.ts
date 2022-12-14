import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { initTRPC } from '@trpc/server'
import { z } from 'zod';
import _app from "../../../pages/_app";


// NOTE: 
// THE DEFAULT _app.TS WAS REPLACED WITH BELOW. REVIEW ASAP

export const t = initTRPC.create()
export const appRouter = t.router({
  // Create procedure at path 'login'
  // The syntax is identical to creating queries
  login: t
    .procedure
    // using zod schema to validate and infer input values
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(({ input }) => {
        // Here some login stuff would happen
        return {
          user: {
            name: input.name,
            role: 'ADMIN'
          },
        };
       })
})
// export type definition of API
export type AppRouter = typeof appRouter;
