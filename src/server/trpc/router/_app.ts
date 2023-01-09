import { router } from "../trpc";
import { authRouter } from "./auth";
import { updateAccountRouter } from "./updateAccount";

export const appRouter = router({
  updateAccount: updateAccountRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;