import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "../../../services/functions/lambda";

export const trpc = createReactQueryHooks<AppRouter>();
