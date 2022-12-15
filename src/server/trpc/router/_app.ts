import { router } from "../trpc";
import { authRouter } from "./auth";
import { loginRouter } from "./login";

export const appRouter = router({
  login: loginRouter,
  auth: authRouter,

});

// export type definition of API
export type AppRouter = typeof appRouter;