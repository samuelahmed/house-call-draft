import { initTRPC } from '@trpc/server'
import { z } from 'zod';
export const t = initTRPC.create()

export const loginRouter = t.router({
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
        
        console.log('meow')
        return {
          user: {
            name: input.name,
            role: 'ADMIN'
          },
        };
       })
})