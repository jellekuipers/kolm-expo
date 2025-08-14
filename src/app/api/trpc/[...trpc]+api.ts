import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { createTRPCContext } from "~/trpc/init";
import { appRouter } from "~/trpc/router";

const handler = async (request: Request) => {
  return await fetchRequestHandler({
    createContext: () => createTRPCContext(request),
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
  });
};

export { handler as GET, handler as POST };
