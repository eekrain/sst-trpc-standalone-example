import * as trpc from "@trpc/server";
import { z } from "zod";
import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda";

// 1. Define the tRPC Router
const appRouter = trpc.router().query("hello", {
  // i.   Define query
  input: z.object({
    // ii.  Input validation and type narrowing
    name: z.string(),
  }),
  async resolve(req) {
    // iii. Application logic
    return { message: `WOOOAAALLAAHHH, ${req.input.name}!` };
  },
});

// 2. Define the AppRouter type, needed on the client side
export type AppRouter = typeof appRouter;

// 3. Export the handler.
export const handler = awsLambdaRequestHandler({
  router: appRouter,
});
