import { router, publicProcedure } from "../trpc";
import { string, z } from "zod";
import { userAgent } from "next/server";





export const exampleRouter = router({


  getOne: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findFirst({
      // where: {
      //   id: "clbmqwysx0000uqn19zbyi9h1",
      // },
    });
  }),

  dbWrite: publicProcedure
  .input(z.object({ 
    role: z.string(),
    id: z.string()
  }))
  .mutation(async ({ ctx, input }) => {
    const { role } = input;
    const card = await ctx.prisma.user.upsert({
      create: {
        role,
      },
      update: {
        role,
      },
      where: {
        id: ctx.session?.user?.id
      },
    });
    return card;
  }),

  updateName: publicProcedure
  .input(z.object({ name: z.string() }))
  .mutation(async ({ ctx, input }) => {
    const { name } = input;
    const card = await ctx.prisma.user.upsert({
      create: {
        name,
      },
      update: {
        name,
      },
      where: {
        id: ctx.session?.user?.id
      },
    });
    return card;
  }),









  
});
