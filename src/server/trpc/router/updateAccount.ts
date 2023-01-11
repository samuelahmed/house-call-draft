import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const updateAccountRouter = router({

  getOne: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findFirst({
      where: {
        id: ctx.session?.user?.id,
      },
    });
  }),

  //If not proper email it will not update HOWEVER THE USER IS STILL ABLE TO HIT SUBMIT THIS SHOULD BE FIXED ON THE FRONTEND.
  updateName: publicProcedure
    .input(
      z.object({
        name: z.string(),
        role: z.string(),
        email: z.string().email(),
        address: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { name, role, email, address, password } = input;
      const card = await ctx.prisma.user.upsert({
        create: {
          name,
          role,
          email,
          address,
          password,
        },
        update: {
          name,
          role,
          email,
          address,
          password,
        },
        where: {
          id: ctx.session?.user?.id,
        },
      });
      return card;
    }),
});
