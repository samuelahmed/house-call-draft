import { router } from "../trpc";
import { authRouter } from "./auth";
import { protectedRouter } from "./protected";
import { updateAccountRouter } from "./updateAccount";

export const appRouter = router({
  updateAccount: updateAccountRouter,
  auth: authRouter,
  protected: protectedRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;