import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { createTRPCContext } from "~/trpc/init";
import { appRouter } from "~/trpc/router";

const handler = async (request: Request) =>
  await fetchRequestHandler({
    req: request,
    router: appRouter,
    endpoint: "/api/trpc",
    createContext: () => createTRPCContext(request),
  });

export { handler as GET, handler as POST };
