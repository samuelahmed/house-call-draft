import { router, publicProcedure } from "../trpc";

export const exampleRouter = router({

  getOne: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findFirst({
      where: {
        id: "clbmqwysx0000uqn19zbyi9h1",
      },
    });
  }),

  
});
