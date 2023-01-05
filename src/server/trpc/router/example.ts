import { router, publicProcedure } from "../trpc";
import { string, z } from "zod";
import { userAgent } from "next/server";

export const exampleRouter = router({

  getOne: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findFirst({
      where: {
        id: ctx.session?.user?.id,
      },
    });
  }),

  updateName: publicProcedure
    .input(
      z.object({
        name: z.string(),
        role: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { name, role } = input;
      const card = await ctx.prisma.user.upsert({
        create: {
          name,
          role,
        },
        update: {
          name,
          role,
        },
        where: {
          id: ctx.session?.user?.id,
        },
      });
      return card;
    }),
});
